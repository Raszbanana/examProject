export class User {
    id: string;
    email: string;
    displayname?: string;
    photoUrl?: string;

    constructor(id: string,email: string, displayname?: string, photoUrl?: string) {
        this.id = id;
        this.email = email;
        this.displayname = displayname;
        this.photoUrl = photoUrl;
    }
}