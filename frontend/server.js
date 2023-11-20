const axios = require("axios");
const path = require("path");

const Koa = require("koa");

const app = new Koa();

// 指定配置静态目录地址
const koaStatic = require("koa-static");

app.use(koaStatic(path.resolve(process.cwd(), "./")));

const KoaRouter = require("koa-router");
const router = new KoaRouter();

router.post("/api/task", async (ctx, next) => {
    const res = await axios.post('http://127.0.0.1:4000/api/task');
    ctx.body = res.data;
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = 3000;
const host = "127.0.0.1";

app.listen(port, host);

console.log(`Server running on port: ${port}`);
