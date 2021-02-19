import { ParameterizedContext } from 'koa';
import koaRouter from 'koa-router';
import { Asset } from '../models/asset.model'

const assets: Asset[] = [];

async function asset_list(ctx: ParameterizedContext<any, koaRouter.IRouterParamContext<any, {}>, any>, next: any) {
    ctx.response.body = assets;
    await next;
}

async function asset_single(ctx: ParameterizedContext<any, koaRouter.IRouterParamContext<any, {}>, any>, next: any) {
    console.log(ctx.params.id);
    ctx.response.body = assets.find(x => x.id === ctx.params.id);
    await next;
}

async function asset_create(ctx: ParameterizedContext<any, koaRouter.IRouterParamContext<any, {}>, any>, next: any) {
    const asset: Asset = new Asset(
        Date.now().toString(36) + Math.random().toString(36).substring(2),
        ctx.request.body.ip,
        ctx.request.body.name,
        ctx.request.body.description,
        ctx.request.body.dateCreated,
    );
    asset.id = Date.now().toString(36) + Math.random().toString(36).substring(2);
    assets.push(asset);
    ctx.response.body = "assets addedd";
    await next;
}

export { asset_list, asset_single, asset_create }