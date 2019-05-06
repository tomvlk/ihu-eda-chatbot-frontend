import { Component, OnInit } from '@angular/core';
import { ChatService } from "../../chat.service";

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {
  public chatInput: string = '';

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit() {
  }

  async sendChat(text: string) {
    this.chatInput = '';
    setTimeout(() => {
      this.chatInput = '';
    }, 50);
    if (! text) return;
    await this.chatService.message(text);
  }
}
