import { Message } from "./Message";

export class Chatroom {
    constructor(public title: string,
        public messages: Message[], public id: string) { }
}

