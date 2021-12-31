const express = require('express');
const router = express.Router();

const checkLogin = require('../middlewares/check').checkLogin;

router.get('/', (req, res, next) => {
  res.send('主页');
});

// 发表文章
router.post('/create', checkLogin, (req, res, next) => {
  res.send('发表文章');
});

// 发表文章的页面
router.get('/create', checkLogin, (req, res, next) => {
  res.send('发表文章页面');
});

// 某篇文章的详情
router.get('/:postId', (req, res, next) => {
  res.send('文章详情页面');
});

// 更新文章页面
router.get('/:postId/edit', checkLogin, (req, res, next) => {
  res.send('更新文章页面');
});

// 更新某篇文章
router.post('/:postId/edit', checkLogin, (req, res, next) => {
  res.send('更新文章');
});

// 删除某篇文章
router.get('/:postId/remove', checkLogin, (req, res, next) => {
  res.send('删除文章');
});

module.exports = router;
