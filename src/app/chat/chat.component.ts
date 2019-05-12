import { Component, OnInit } from '@angular/core';
import {ChatService} from "../chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public showChat: boolean = false;

  constructor(
    private chatService: ChatService
  ) { }

  async ngOnInit() {
    await this.chatService.createSession();
    // await this.toggleChat();
  }

  async toggleChat() {
    this.showChat = ! this.showChat;
    if (this.showChat && this.chatService.session.messages.length == 0) {
      await this.chatService.message('Hi', true);
    }
  }
}
