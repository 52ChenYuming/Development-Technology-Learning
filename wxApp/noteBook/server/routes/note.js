const router = require('koa-router')();
const userService = require('../controllers/mySqlConfig');

router.prefix('/note');

router.post('/findNoteListByType', async (ctx, next) => {
  let note_type = ctx.request.body.note_type;
  // console.log(note_type);
  await userService.findNoteListByType(note_type).then(res => {
    // console.log(res);
    if (res.length) {
      ctx.body = {
        code: 200,
        data: res,
        mess: '查找成功',
      };
    } else {
      ctx.body = {
        code: 80004,
        data: 'error',
        mess: '查找失败',
      };
    }
  });
});

router.get('/findNoteDetailById', async (ctx, next) => {
  let id = ctx.request.query.id;
  console.log(id);
  await userService.findNoteDetailById(id).then(res => {
    // console.log(res);
    if (res.length) {
      ctx.body = {
        code: 200,
        data: res,
        mess: '查找成功',
      };
    } else {
      ctx.body = {
        code: 80004,
        data: 'error',
        mess: '查找失败',
      };
    }
  });
});

module.exports = router;
