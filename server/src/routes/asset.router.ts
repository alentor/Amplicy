import koaRouter from 'koa-router';
import { asset_list, asset_single, asset_create } from '../controllers/AssetController'

const assetsRouter = new koaRouter();

assetsRouter.get('/api/assets', asset_list);

assetsRouter.get('/api/asset/:id', asset_single);

assetsRouter.post('/api/asset', asset_create);

export { assetsRouter }