import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { assetsRouter } from './routes/asset.router';

const app = new koa();
const port = 3000;

app.use(bodyParser());

// Handle error, and response time.
app.use(async (ctx, next) => {
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
app.on('error', (err, ctx) => {
    /* centralized error handling:
     *   console.log error
     *   write error to log file
     *   save error and request information to database if ctx.request match condition
     *   ...
    */
});

// Routes.
app.use(assetsRouter.routes());

// Server.
app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});