const router = require('koa-router')();
const userService = require('../controllers/mySqlConfig');

router.prefix('/users');

// 定义登录接口
router.post('/userLogin', async (ctx, next) => {
  let _username = ctx.request.body.username;
  // console.log(ctx.request.body);
  let _userpwd = ctx.request.body.userpwd;
  // console.log(_username, _userpwd);

  // 去数据库匹配账号密码是否正确
  await userService
    .userLogin(_username, _userpwd)
    .then(res => {
      // console.log(res, '-------------------');
      if (res.length) {
        let result = {
          id: res[0].id,
          nickname: res[0].nickname,
          username: res[0].username,
        };
        ctx.body = {
          code: 200,
          data: result,
          mess: '登录成功',
        };
      } else {
        ctx.body = {
          code: '80004',
          data: 'error',
          mess: '账号或密码错误',
        };
      }
    })
    .catch(res => {
      // console.log(res);
      ctx.body = {
        code: '80004',
        data: 'err',
      };
    });
});
module.exports = router;
