const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const index = require('./routes/index');
const user = require('./routes/user');
// 使用ctx.body解析中间件
app.use(bodyParser());
// routes
app.use(index.routes(), index.allowedMethods());
app.use(user.routes(), user.allowedMethods());
module.exports = app;
