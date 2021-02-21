export interface IAsset {
    ip: string;
    name: string;
    description: string;
    dateCreated: Date;
}

export class Asset implements IAsset {
    ip: string;
    name: string;
    description: string;
    dateCreated: Date;

    constructor(ip?: string, name?: string, description?: string, dateCreated?: Date) {
        this.ip = ip;
        this.name = name;
        this.description = description;
        this.dateCreated = dateCreated;
    }
}