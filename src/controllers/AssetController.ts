import Koa, { ParameterizedContext } from 'koa';
import koaRouter from 'koa-router';
import Asset, { IAsset } from '../models/asset.model';

async function asset_list(ctx: ParameterizedContext<any, koaRouter.IRouterParamContext<any, {}>, any>, next: Koa.Next) {
    await Asset.find({})
        .then(async (assets: IAsset[]) => {
            ctx.response.body = assets;
            await next();
        });
}

async function asset_single(ctx: ParameterizedContext<any, koaRouter.IRouterParamContext<any, {}>, any>, next: Koa.Next) {
    await Asset.findById(ctx.params.id)
        .then(async (asset: IAsset | null) => {
            ctx.response.body = asset;
            await next();
        });
}

async function asset_create(ctx: ParameterizedContext<any, koaRouter.IRouterParamContext<any, {}>, any>, next: Koa.Next) {
    const asset = new Asset(ctx.request.body)
    // Set dateCreated.
    asset.dateCreated = new Date();
    await asset.save()
        .then(async (result: IAsset) => {
            ctx.response.body = result.id;
            await next();
        });
}

export { asset_list, asset_single, asset_create }