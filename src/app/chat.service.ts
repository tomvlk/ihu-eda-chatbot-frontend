import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ChatSession } from "./model/chat-session";
import { ChatMessage } from "./model/chat-message";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public session: ChatSession = null;
  private audio = new Audio('../assets/sound/plucky.mp3');

  constructor(
    private http: HttpClient
  ) {
    this.audio.load();
    this.audio.volume = 0.2;
  }

  async createSession(): Promise<ChatSession> {
    return new Promise((resolve, reject) => {
      this.http.post('/api/session', null)
        .subscribe((value: any) => {
          this.session = new ChatSession(value.session_id);
          return resolve(this.session);
        }, (err) => {
          return reject(err);
        });
    });
  }

  async message(text: string, hideOwnMessage = false): Promise<any> {
    if (! this.session) {
      throw new Error('No session started!');
    }

    // Add user message.
    if (! hideOwnMessage) {
      this.session.addMessage(new ChatMessage(
        false, null, this.session.localParticipant, text
      ));
    }

    // Query the chatbot.
    this.session.remoteParticipant.isTyping = true;
    return new Promise((resolve, reject) => {
      this.http.post('/api/' + this.session.id + '/chat', {text: text})
        .subscribe((value: any) => {
          this.session.remoteParticipant.isTyping = false;
          this.session.addMessage(new ChatMessage(
            false, value.id, this.session.remoteParticipant, value.response
          ));

          this.audio.play();
          return resolve(value);
        });
    });
  }
}
