module.exports = {
  prot: 3000,
  session: {
    scret: 'myblog', //加密拼接字符
    key: 'myblog',
    maxAge: 259200000,
  },
  mongodb: 'mongodb://localhost:27017/myBlog',
};
