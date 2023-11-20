const Koa = require("koa");

const app = new Koa();

const KoaRouter = require("koa-router");

const router = new KoaRouter();

// app.use(async (ctx, next) => {
//   const allowedOrigins = ["http://127.0.0.1:3000"];
//   const requestOrigin = ctx.headers.origin;
//   if (allowedOrigins.includes(requestOrigin)) {
//     // 设置响应头以允许跨域
//     ctx.set("Access-Control-Allow-Origin", requestOrigin);
//     ctx.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//     ctx.set("Access-Control-Allow-Headers", "Content-Type");
//     ctx.set("Access-Control-Allow-Credentials", "true");
//   }

//   await next();s
// });

router.post("/api/task", async (ctx, next) => {
  ctx.status = 200;
  ctx.body = {
    success: true,
    data: "任务创建成功 ~~~",
  };
});

app.use(router.routes());
app.use(router.allowedMethods());

const port = 4000;
const host = "127.0.0.1";

app.listen(port, host);

console.log(`Server runing on port: ${port}`);
