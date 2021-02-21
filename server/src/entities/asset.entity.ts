import mongoose, { Schema, Document } from 'mongoose';
import { IAsset } from '../../../models/asset.model'

export interface IAssetEntity extends IAsset, Document { }

const Assetchema: Schema = new Schema({
    ip: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: false },
    dateCreated: { type: Date, required: true },
});

const AssetDb = mongoose.model<IAssetEntity>('Asset', Assetchema);

export { AssetDb }