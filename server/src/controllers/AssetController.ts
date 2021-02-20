import Koa, { ParameterizedContext } from 'koa';
import koaRouter from 'koa-router';
import Asset, { IAssetEntity } from '../entities/asset.entity';

async function asset_list(ctx: ParameterizedContext<any, koaRouter.IRouterParamContext<any, {}>, any>, next: Koa.Next) {
    await Asset.find({})
        .then(async (assets: IAssetEntity[]) => {
            ctx.response.body = assets;
            await next();
        });
}

async function asset_single(ctx: ParameterizedContext<any, koaRouter.IRouterParamContext<any, {}>, any>, next: Koa.Next) {
    await Asset.findById(ctx.params.id)
        .then(async (asset: IAssetEntity | null) => {
            ctx.response.body = asset;
            await next();
        });
}

async function asset_create(ctx: ParameterizedContext<any, koaRouter.IRouterParamContext<any, {}>, any>, next: Koa.Next) {
    const asset = new Asset(ctx.request.body)
    // Set dateCreated.
    asset.dateCreated = new Date();
    await asset.save()
        .then(async (result: IAssetEntity) => {
            ctx.response.body = result.id;
            await next();
        });
}

export { asset_list, asset_single, asset_create }