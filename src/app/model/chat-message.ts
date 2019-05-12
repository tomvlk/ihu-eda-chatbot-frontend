import { ChatParticipant } from "./chat-participant";

export class ChatMessage {
  public id: any;
  public pending: boolean;
  public owner: ChatParticipant;
  public message: string;

  constructor (
    pending?: boolean, id?: any, owner?: ChatParticipant, message?: string
  ) {
    if (pending === true || pending !== false) {
      this.pending = true;
    }
    if (id) {
      this.id = id;
    }
    if (owner) {
      this.owner = owner;
    }
    if (message) {
      this.message = message;
    }
  }

  public get attachment() {
    if (this.owner && this.owner.type === 'remote' && this.message.indexOf('contact') !== -1) {
      return 'map';
    }
    return false;
  }
}
