let app = getApp();

export default ({url,data})=> new Promise((resolve,reject)=>{
  wx.request({
    url:app.globalData.baseUrl+url,
    data:data,
    method:"get",
    success:function(res){resolve(res)},
    fail:function(err){reject(err)}
  })


})


