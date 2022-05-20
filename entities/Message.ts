export class Message {
    constructor(public name: string, public status: Status,
        public text: string, public timestamp: string, public messageId: string, public userId: string, public isSending?: boolean) { }
}

export enum Status {
    READ = "READ", UNREAD = "UNREAD"
}