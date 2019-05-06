import { ChatMessage } from "./chat-message";
import { ChatParticipant } from "./chat-participant";

export class ChatSession {
  public id: string;
  public messages: ChatMessage[] = [];

  public localParticipant: ChatParticipant;
  public remoteParticipant: ChatParticipant;

  constructor (id: string) {
    this.id = id;
    this.localParticipant = new ChatParticipant('local', 'User');
    this.remoteParticipant = new ChatParticipant('remote', 'IHU');
  }

  get participants(): ChatParticipant[] {
    return [this.localParticipant, this.remoteParticipant];
  }

  public addMessage(message: ChatMessage) {
    this.messages.push(message);
  }
}
