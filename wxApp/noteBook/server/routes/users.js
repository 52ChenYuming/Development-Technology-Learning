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

// 注册接口
router.post('/userRegister', async (ctx, next) => {
  // 拿到前端输入的参数，先比对数据库中有没有相同的数据,如果没有则植入该数据
  let _nickname = ctx.request.body.nickname;
  let _username = ctx.request.body.username;
  let _userpwd = ctx.request.body.userpwd;

  if (!_nickname || !_username || !_userpwd) {
    ctx.body = {
      code: 80001,
      mess: '用户名密码和昵称不能为空',
    };
    return;
  }
  await userService.findUser(_username).then(async res => {
    console.log(res);
    if (res.length) {
      ctx.body = {
        code: 80002,
        mess: '账号已存在',
      };
    } else {
      // 往数据库添加数据
      await userService.insertUser([_username, _userpwd, _nickname]).then(res => {
        console.log(res);
        if (res.affectedRows !== 0) {
          ctx.body = {
            code: 200,
            data: 'success',
            mess: '注册成功',
          };
        } else {
          ctx.body = {
            code: 80001,
            data: 'error',
            mess: '注册失败',
          };
        }
      });
    }
  });
});

module.exports = router;
