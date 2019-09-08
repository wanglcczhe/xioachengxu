/**
 * 用户详情页
 */
var app = getApp();
// var mta = require('../../../utils/mta_analysis.js');

Page({
  data : {
    userInfo : {
      images:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3113888569,591389504&fm=26&gp=0.jpg",
      nickname:"社会你关哥",
      identy:"黄金会员",
      point: 666,
      groupnum:12,
    },
    showModal: false
  },
  onLoad: function(){
    // mta.Page.init();
  },
 
})