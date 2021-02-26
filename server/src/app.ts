import Koa, { ParameterizedContext } from 'koa';
import bodyParser from 'koa-bodyparser';
import { assetsRouter } from './routes/asset.router';
import { db } from './db';
import koaRouter from 'koa-router';

const app: Koa = new Koa();
const port: number = 3000;
const mongoDb: string = 'mongodb://localhost:27017/foo';

// Connect to mongo.
db.connect(mongoDb);

// Body parser.
app.use(bodyParser());

// Handle errors, and response time.
app.use(async (ctx: ParameterizedContext<any, koaRouter.IRouterParamContext<any, {}>, any>, next: Koa.Next) => {
    const start = Date.now();
    try {
        await next();
        const ms = Date.now() - start;
        ctx.set("X-Response-Time", `${ms}ms`);
    } catch (err) {
        const ms = Date.now() - start;
        ctx.set("X-Response-Time", `${ms}ms`);
        ctx.status = err.status || 500;
        ctx.body = err.message;
        ctx.app.emit('error', err, ctx);
    }
});

// Log errors.
app.on('error', (err, ctx: ParameterizedContext<any, koaRouter.IRouterParamContext<any, {}>, any>) => {
    console.error(err);
    // Dumb down internal servers..
    ctx.response.body = 'wooops something went wrong..';
    /* centralized error handling:
     *   console.log error
     *   write error to log file
     *   save error and request information to database if ctx.request match condition
     *   ...
    */
});

// On close.
app.on('close', () => {
    db.disconnect();
});

// Routes.
app.use(assetsRouter.routes());

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});