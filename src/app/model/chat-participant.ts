export class ChatParticipant {
  public name: string;
  public type: 'local'|'remote';
  public isTyping: boolean = false;

  public constructor(type: 'local'|'remote', name: string) {
    this.type = type;
    this.name = name;
  }
}
