import mongoose, { Schema, Document } from 'mongoose';
export interface IAsset extends Document {
    ip: string;
    name: string;
    description: string;
    dateCreated: Date;
}

const Assetchema: Schema = new Schema({
    ip: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    dateCreated: { type: Date, required: true },
});

export default mongoose.model<IAsset>('Asset', Assetchema);