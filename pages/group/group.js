// pages/group/group.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navData: [{ cat_id: 1, order_img: "http://120.55.165.193:3000/upload/index/liangyou-tive.png", info_img: "http://120.55.165.193:3000/upload/index/liangyou.png", cat_name: "阿斯弗" }, { cat_id: 1, order_img: "http://120.55.165.193:3000/upload/index/liangyou-tive.png", info_img: "http://120.55.165.193:3000/upload/index/liangyou.png", cat_name: "阿斯弗" }, { cat_id: 1, order_img: "http://120.55.165.193:3000/upload/index/liangyou-tive.png", info_img: "http://120.55.165.193:3000/upload/index/liangyou.png", cat_name: "阿斯弗" }, { cat_id: 1, order_img: "http://120.55.165.193:3000/upload/index/liangyou-tive.png", info_img: "http://120.55.165.193:3000/upload/index/liangyou.png", cat_name: "阿斯弗" }, { cat_id: 1, order_img: "http://120.55.165.193:3000/upload/index/liangyou-tive.png", info_img: "http://120.55.165.193:3000/upload/index/liangyou.png", cat_name: "阿斯弗" },],
    goodsData:[{
      images:"http://img95.699pic.com/photo/50132/7698.jpg_wh300.jpg",
      nikename:"轻功水上漂",
      groupnum:12,
      info_img:"http://img95.699pic.com/photo/50132/7698.jpg_wh300.jpg",
      goods_name:"荔枝好次",
      group_end_time:"2019212312",
      goods_now_price:5445,
      goods_price:1231,
      group_id:1231,
      group_already_person:45,
      group_no_person:12
    },
    {
      images:"http://img95.699pic.com/photo/50132/7698.jpg_wh300.jpg",
      nikename:"轻功水上漂",
      groupnum:12,
      info_img:"http://img95.699pic.com/photo/50132/7698.jpg_wh300.jpg",
      goods_name:"荔枝好次",
      group_end_time:"2019212312",
      goods_now_price:5445,
      goods_price:1231,
      group_id:1231,
      group_already_person:45,
      group_no_person:12
    },
    {
      images:"http://img95.699pic.com/photo/50132/7698.jpg_wh300.jpg",
      nikename:"轻功水上漂",
      groupnum:12,
      info_img:"http://img95.699pic.com/photo/50132/7698.jpg_wh300.jpg",
      goods_name:"荔枝好次",
      group_end_time:"2019212312",
      goods_now_price:5445,
      goods_price:1231,
      group_id:1231,
      group_already_person:45,
      group_no_person:12
    },
    
    
    
    
    
    ],
    currentCatId: 0,
    active: 0,
    showModal: false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})