export class Message {

    private id: bigint;

    private content: string;

    private user: bigint;
    private chat: bigint;

    private parent: bigint;

    private created_at: Date;
    private updated_at: Date;

    constructor(id: bigint, content: string, user: bigint, chat: bigint, parent: bigint, created_at: Date, updated_at: Date) {
        this.id = id;
        this.content = content;
        this.user = user;
        this.chat = chat;
        this.parent = parent;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    public getId(): bigint {
        return this.id;
    }

    public getContent(): string {
        return this.content;
    }

    public getUser(): bigint {
        return this.user;
    }

    public getChat(): bigint {
        return this.chat;
    }

    public getParent(): bigint {
        return this.parent;
    }

    public getCreatedAt(): Date {
        return this.created_at;
    }

    public getUpdatedAt(): Date {
        return this.updated_at;
    }

    public setContent(content: string): void {
        this.content = content;
    }

    public setUser(user: bigint): void {
        this.user = user;
    }

    public setChat(chat: bigint): void {
        this.chat = chat;
    }

    public setParent(parent: bigint): void {
        this.parent = parent;
    }

    public setCreatedAt(created_at: Date): void {
        this.created_at = created_at;
    }

    public setUpdatedAt(updated_at: Date): void {
        this.updated_at = updated_at;
    }
}