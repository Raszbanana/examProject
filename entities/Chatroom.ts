import { Message } from "./Message";

export class Chatroom {
    constructor(public title: string, public id: number, public messages: Message[]) { }
}
