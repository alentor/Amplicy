import Koa, { ParameterizedContext } from 'koa';
import koaRouter from 'koa-router';
import { IAsset } from '../../../models/asset.model';
import { AssetDb, IAssetEntity } from '../entities/asset.entity';

async function asset_list(ctx: ParameterizedContext<any, koaRouter.IRouterParamContext<any, {}>, any>, next: Koa.Next) {
    await AssetDb.find({})
        .then(async (assets: IAssetEntity[]) => {
            ctx.response.body = assets;
            await next();
        });
}

async function asset_single(ctx: ParameterizedContext<any, koaRouter.IRouterParamContext<any, {}>, any>, next: Koa.Next) {
    await AssetDb.findById(ctx.params.id)
        .then(async (asset: IAssetEntity | null) => {
            ctx.response.body = asset;
            await next();
        });
}

async function asset_create(ctx: ParameterizedContext<IAsset, koaRouter.IRouterParamContext<any, {}>, any>, next: Koa.Next) {
    const asset = new AssetDb(ctx.request.body)
    // Set dateCreated.
    asset.dateCreated = new Date();
    await asset.save()
        .then(async (result: IAssetEntity) => {
            ctx.response.body = { id: result.id };
            await next();
        });
}

export { asset_list, asset_single, asset_create }