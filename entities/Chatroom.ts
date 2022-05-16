import { Message } from "./Message";

export class Chatroom {
    constructor(public title: string,
        public message: Message[], public id: string) { }
}

