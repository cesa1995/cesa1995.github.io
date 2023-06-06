export class EmptyMessage extends Error {
  constructor(message: string) {
    super();
    this.name = "EmptyMessage";
    this.message = message;
  }
}
