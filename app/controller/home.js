const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // const attributesArray = ctx.queries.attributes || [];
    // delete ctx.queries.attributes;// 去掉queries属性
    // const filter = { ...ctx.queries };
    // console.log(ctx.request.body);
    // ctx.app.wechat.friends.add();
    ctx.body = ctx.request.body;
  }
  async post() {
    const { ctx } = this;
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;
  }
}

module.exports = HomeController;
