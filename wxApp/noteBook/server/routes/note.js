const router = require('koa-router')();
const userService = require('../controllers/mySqlConfig');
const utils = require('../controllers/utils');

router.prefix('/note');

router.post('/findNoteListByType', async (ctx, next) => {
  let note_type = ctx.request.body.note_type;
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
  // console.log(ctx.request.query);
  let _id = ctx.request.query.id;
  await userService.findNoteDetailById(_id).then(res => {
    // console.log(res);
    if (res.length !== 0) {
      ctx.body = {
        code: 200,
        mess: '查找成功',
        data: res,
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

// 发布笔记
router.post('/publishNote', async (ctx, next) => {
  let { noteContent, noteTitle, noteImg, noteType, userId, nickname } = ctx.request.body;
  let c_time = utils.getNowFormatDate();
  let m_time = utils.getNowFormatDate();
  await userService
    .publish([userId, nickname, noteType, noteContent, noteImg, noteTitle, c_time, m_time])
    .then(res => {
      if (res.affectedRows !== 0) {
        ctx.body = {
          code: 200,
          data: 'ok',
          mess: '发表成功',
        };
      } else {
        ctx.body = {
          code: 80004,
          data: 'error',
          mess: '发表失败',
        };
      }
    });
});

module.exports = router;
