function request(method,url,data={}){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: `http://localhost:3000${url}`,
      method:method,
      data:data,
      success(res){
        if(res.data.code == 200){
          resolve(res)
        }else{
          wx.showToast({
            title: res.data.mess,
            icon:'error',
            duration:2000
          })
          reject(res);
        }
      },
      fail(err){
        reject(err);
      }
    })
  })
}
export default request;