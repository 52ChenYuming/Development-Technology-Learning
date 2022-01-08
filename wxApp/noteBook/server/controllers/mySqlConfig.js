const mysql = require('mysql');
const config = require('./default');

// 创建线程池
let pool = mysql.createPool({
  host: config.dataBase.HOST,
  user: config.dataBase.USERNAME,
  password: config.dataBase.PASSWORD,
  database: config.dataBase.DATABASE,
  port: config.dataBase.PORT,
});

// 连接线程池,做sql查找
let allServices = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err);
        } else {
          //连接成功
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
            connection.release(); //释放连接
          });
        }
      });
    });
  },
};

// 用户登录
let userLogin = function (username, userpwd) {
  let _sql = `select * from users where username="${username}" and userpwd="${userpwd}";`;
  return allServices.query(_sql);
};

// 查找用户
let findUser = function (username) {
  let _sql = `select * from users where username="${username}";`;
  return allServices.query(_sql);
};

// 用户注册
let insertUser = function (value) {
  let _sql = `insert into users set username=?,userpwd=?,nickname=?;`;
  return allServices.query(_sql, value);
};

// 根据类型查找对应的文章列表
let findNoteListByType = function (type) {
  let _sql = `select * from note where note_type="${type}"`;
  return allServices.query(_sql);
};

// 根据id查找文章详细内容
let findNoteDetailById = function (id) {
  let _sql = `select * from note where id="${id}"`;
  return allServices.query(_sql);
};

let publish = function (value) {
  let _sql = `insert into note set useId=?,title=?,note_type=?,note_content=?,head_img=?,nickname=?,c_time=?,m_time=?;`;
  return allServices.query(_sql, value);
};

module.exports = {
  userLogin,
  findUser,
  insertUser,
  findNoteListByType,
  findNoteDetailById,
  publish,
};
