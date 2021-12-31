const express = require('express');
const router = express.Router();
const checkLogin = require('../middlewares/check').checkLogin;

// 创建评论
router.post('/', checkLogin, (req, res, next) => {
  res.send('创建评论');
});
// 删除评论
router.get('/:commentId/remove', checkLogin, (req, res, next) => {
  res.send('删除留言');
});

module.exports = router;
