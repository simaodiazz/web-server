import { Role } from "./role";

export class Member {

    private user: bigint;
    private enterprise: bigint;
    
    private role: Role;

    private created_at: Date;
    private updated_at: Date;

    constructor(user: bigint, enterprise: bigint, role: Role, created_at: Date, updated_at: Date) {
        this.user = user;
        this.enterprise = enterprise;
        this.role = role;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    public getUser(): bigint {
        return this.user;
    }

    public getEnterprise(): bigint {
        return this.enterprise;
    }

    public getRole(): Role {
        return this.role;
    }

    public getCreatedAt(): Date {
        return this.created_at;
    }

    public getUpdatedAt(): Date {
        return this.updated_at;
    }

    public setUser(user: bigint): void {
        this.user = user;
    }

    public setEnterprise(enterprise: bigint): void {
        this.enterprise = enterprise;
    }

    public setRole(role: Role): void {
        this.role = role;
    }

    public setCreatedAt(created_at: Date): void {
        this.created_at = created_at;
    }

    public setUpdatedAt(updated_at: Date): void {
        this.updated_at = updated_at;
    }
}