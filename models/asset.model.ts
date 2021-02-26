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

    // constructor();
    // constructor(obj: IAsset); 
    // constructor(params: foo = { as Asset})
    // constructor(obj?:IAsset) {
    //     this.ip = obj && obj.ip || '';
    //     this.name = obj && obj.name || '';
    //     this.description = obj && obj.description || '';
    //     this.dateCreated = obj && obj.dateCreated || new Date();
    // }

    constructor(params: Asset = {} as Asset) {

        // Define the properties of the incoming `params` object here. 
        // Setting a default value with the `= 0` syntax is optional for each parameter
        let {
            ip = '',
            name = '',
            description = '',
            dateCreated = new Date()
        } = params;

        //  If needed, make the parameters publicly accessible
        //  on the class ex.: 'this.var = var'.
        /**  Use jsdoc comments here for inline ide auto-documentation */
        this.ip = ip;
        this.name = name;
        this.description = description;
        this.dateCreated = dateCreated;
    }
}