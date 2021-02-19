export interface IAsset {
    id: string;
    ip: string;
    name: string;
    description: string;
    dateCreated: Date;
}

export class Asset implements IAsset {
    id: string;
    ip: string;
    name: string;
    description: string;
    dateCreated: Date;

    constructor(id: string, ip: string, name: string, description: string, dateCreated: Date) {
        this.id = id;
        this.ip = ip;
        this.name = name;
        this.description = description;
        this.dateCreated = dateCreated;
    }
}