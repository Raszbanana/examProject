export class Message {
    constructor(public name: string, public status: Status,
        public text: string, public timestamp: number, public id?: string, public isSending?: boolean) { }
}

export enum Status {
    READ = "READ", UNREAD = "UNREAD"
}