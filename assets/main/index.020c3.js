window.__require=function t(i,o,u){function a(e,s){if(!o[e]){if(!i[e]){var h=e.split("/");if(h=h[h.length-1],!i[h]){var c="function"==typeof __require&&__require;if(!s&&c)return c(h,!0);if(n)return n(h,!0);throw new Error("Cannot find module '"+e+"'")}e=h}var _=o[e]={exports:{}};i[e][0].call(_.exports,function(t){return a(i[e][1][t]||t)},_,_.exports,t,i,o,u)}return o[e].exports}for(var n="function"==typeof __require&&__require,e=0;e<u.length;e++)a(u[e]);return a}({Records:[function(t,i){"use strict";cc._RF.push(i,"a4e13fJpGFAjqNc49D5CvZR","Records"),cc.Class({extends:cc.Component,properties:{m_touzhuPrefab:cc.Prefab,m_touzhuNode:cc.Node,m_quanbutouzhuNode:cc.Node,m_touzhuJL:[cc.Node],m_myJL:[cc.Node],m_mytouzhu:[cc.Label],m_myjuli:[cc.Label],m_myshouyi:[cc.Label],m_kapai:[cc.Node],m_myjiluTCNode:cc.Node,m_alljiluTC:cc.Node,m_autotouzhu:[cc.Label],m_autojuli:[cc.Label],m_autoshouyi:[cc.Label],m_autokapai:[cc.Node],m_AIname:[cc.Label]},onLoad:function(){window.g_kapai=this,this.b_touzhu=0,this.b_juli=0,this.b_shouyi=0,this.jiluKG=!1,this.updataTouzhu(),g_dataManager.delquanbutouzhu(),this.updataquanbuTouzhu()},start:function(){},updataTouzhu:function(){this.m_touzhuNode.destroyAllChildren();for(var t=g_dataManager.gettouzhu(),i=t.length-1;i>t.length-11;i--)0!=t[i]&&this.addtouzhu(t[i].name,t[i].betamount,t[i].jumpheight,t[i].settleaccount)},updataquanbuTouzhu:function(){this.m_quanbutouzhuNode.destroyAllChildren();for(var t=g_dataManager.getquanbutouzhu(),i=t.length-1;i>t.length-11;i--)0!=t[i]&&this.addquanbutouzhu(t[i].name,t[i].betamount,t[i].jumpheight,t[i].settleaccount)},addtouzhu:function(t,i,o,u){var a=cc.instantiate(this.m_touzhuPrefab);this.m_touzhuNode.addChild(a),a.getComponent("touzhudata").updataData(t,i,o,u)},addquanbutouzhu:function(t,i,o,u){var a=cc.instantiate(this.m_touzhuPrefab);this.m_quanbutouzhuNode.addChild(a),a.getComponent("touzhudata").updataData(t,i,o,u)},updatalabel:function(){this.updataTouzhu()},updataautolabel:function(){},off_julu:function(){},on_touzhuJL:function(){this.m_myjiluTCNode.active=!1,this.m_alljiluTC.active=!0,this.m_touzhuJL[0].opacity=255,this.m_touzhuJL[1].opacity=255,this.m_myJL[0].opacity=150,this.m_myJL[1].opacity=0},on_myJL:function(){this.m_myjiluTCNode.active=!0,this.m_alljiluTC.active=!1,this.m_myJL[0].opacity=255,this.m_myJL[1].opacity=255,this.m_touzhuJL[0].opacity=150,this.m_touzhuJL[1].opacity=0},update:function(){}}),cc._RF.pop()},{}],autochoosejuli:[function(t,i){"use strict";cc._RF.push(i,"decb86IOEdGCZTShfEw4hGY","autochoosejuli"),cc.Class({extends:cc.Component,properties:{m_node:cc.Node},onLoad:function(){},start:function(){},choose1:function(){g_dataManager.setautojuli(1),this.m_node.destroy()},choose2:function(){g_dataManager.setautojuli(2),this.m_node.destroy()},choose3:function(){g_dataManager.setautojuli(3),this.m_node.destroy()},choose4:function(){g_dataManager.setautojuli(4),this.m_node.destroy()},choose5:function(){g_dataManager.setautojuli(5),this.m_node.destroy()},choose6:function(){g_dataManager.setautojuli(6),this.m_node.destroy()},choose7:function(){g_dataManager.setautojuli(7),this.m_node.destroy()},choose8:function(){g_dataManager.setautojuli(8),this.m_node.destroy()},choose9:function(){g_dataManager.setautojuli(9),this.m_node.destroy()},choose10:function(){g_dataManager.setautojuli(10),this.m_node.destroy()},choose11:function(){g_dataManager.setautojuli(11),this.m_node.destroy()},choose12:function(){g_dataManager.setautojuli(12),this.m_node.destroy()},choose13:function(){g_dataManager.setautojuli(13),this.m_node.destroy()},choose14:function(){g_dataManager.setautojuli(14),this.m_node.destroy()},choose15:function(){g_dataManager.setautojuli(15),this.m_node.destroy()},choose16:function(){g_dataManager.setautojuli(16),this.m_node.destroy()},choose17:function(){g_dataManager.setautojuli(17),this.m_node.destroy()},choose18:function(){g_dataManager.setautojuli(18),this.m_node.destroy()},choose19:function(){g_dataManager.setautojuli(19),this.m_node.destroy()},choose20:function(){g_dataManager.setautojuli(20),this.m_node.destroy()},choose21:function(){g_dataManager.setautojuli(21),this.m_node.destroy()},choose22:function(){g_dataManager.setautojuli(2),this.m_node.destroy()},choose23:function(){g_dataManager.setautojuli(23),this.m_node.destroy()},choose24:function(){g_dataManager.setautojuli(24),this.m_node.destroy()},choose25:function(){g_dataManager.setautojuli(25),this.m_node.destroy()},choose26:function(){g_dataManager.setautojuli(26),this.m_node.destroy()},choose27:function(){g_dataManager.setautojuli(27),this.m_node.destroy()},choose28:function(){g_dataManager.setautojuli(28),this.m_node.destroy()},choose29:function(){g_dataManager.setautojuli(29),this.m_node.destroy()},choose30:function(){g_dataManager.setautojuli(30),this.m_node.destroy()},off_TC:function(){this.m_node.destroy()}}),cc._RF.pop()},{}],console:[function(t,i){"use strict";cc._RF.push(i,"b7a5d0uvuNHFYPrvvEklq93","console"),cc.Class({extends:cc.Component,properties:{m_buttonColor:[cc.Node],m_goumaizhi:cc.Label,m_touzhutips:[cc.Node],m_autoxiazhuKG:[cc.Node],m_autojiesuanKG:[cc.Node],m_jiesuanLabel:cc.Label,m_xiazhuKG:cc.Node,m_zdtouzhu:cc.Node,m_shibai:cc.Node,m_tips:cc.Node,m_autojiesuanLabel:cc.Label},onLoad:function(){window.g_caozuo=this,this.b_buttonColor=1,this.b_upnumber=10,this.b_zongzhi=0,this.b_goumaizhi=1e3,this.b_touzhuKG=1,this.b_startgame=!1,this.b_autoxiazhu=!1,this.touzhucs=0,this.b_zdxiazhu=!1,this.b_xiazhu=!1,this.b_jump=!1,this.b_jiafen=!1,this.b_autojiesuan=!1,this.startpaosfen=!1,this.m_opentouzhu=!1,this.m_buttonColor[0].on("touchstart",function(){g_game.offchumo(),this.on_BRL10()}.bind(this)),this.m_buttonColor[0].on("touchend",function(){g_game.openchumo()}.bind(this)),this.m_buttonColor[0].on("touchcancel",function(){g_game.openchumo()}.bind(this)),this.m_buttonColor[1].on("touchstart",function(){g_game.offchumo(),this.on_BRL50()}.bind(this)),this.m_buttonColor[1].on("touchend",function(){g_game.openchumo()}.bind(this)),this.m_buttonColor[1].on("touchcancel",function(){g_game.openchumo()}.bind(this)),this.m_buttonColor[2].on("touchstart",function(){g_game.offchumo(),this.on_BRL100()}.bind(this)),this.m_buttonColor[2].on("touchend",function(){g_game.openchumo()}.bind(this)),this.m_buttonColor[2].on("touchcancel",function(){g_game.openchumo()}.bind(this)),this.m_buttonColor[3].on("touchstart",function(){g_game.offchumo(),this.on_BRL500()}.bind(this)),this.m_buttonColor[3].on("touchend",function(){g_game.openchumo()}.bind(this)),this.m_buttonColor[3].on("touchcancel",function(){g_game.openchumo()}.bind(this)),this.m_touzhutips[0].on("touchstart",function(){g_game.offchumo(),this.opentouzhu()}.bind(this)),this.m_touzhutips[0].on("touchend",function(){g_game.openchumo()}.bind(this)),this.m_touzhutips[0].on("touchcancel",function(){g_game.openchumo()}.bind(this))},start:function(){},on_chongzhi:function(){this.b_goumaizhi=1e3},openshibai:function(){this.m_shibai.active=!0},getopentouzhu:function(){return this.m_opentouzhu},offopentouzhu:function(){this.m_opentouzhu=!1},opentouzhu:function(){if(!(g_dataManager.getmoney()<this.v_zongzhi||g_dataManager.getmoney()<=0))return 1==this.b_touzhuKG?(this.b_xiazhu=!0,this.b_touzhuKG=2,this.m_touzhutips[0].color=new cc.color(216,33,34),this.m_touzhutips[2].active=!0,this.m_touzhutips[1].active=!1,void(this.m_opentouzhu=!0)):2==this.b_touzhuKG?(this.b_xiazhu=!1,this.b_touzhuKG=1,this.m_touzhutips[0].color=new cc.color(46,82,238),this.m_touzhutips[2].active=!1,void(this.m_touzhutips[1].active=!0)):3==this.b_touzhuKG?(1==g_gameUI.b_dhcs?(g_gameUI.m_Notouzhu.active=!0,this.m_touzhutips[0].color=new cc.color(88,88,88)):this.m_touzhutips[0].color=new cc.color(46,82,238),this.m_xiazhuKG.active&&(g_huojian.opentaiosan(),this.b_jiafen=!0,this.b_xiazhu&&g_dataManager.addmoney(this.v_paofen-this.v_zongzhi+this.v_zongzhi)),this.b_touzhuKG=1,this.m_touzhutips[3].active=!1,this.b_jump=!0,void(this.m_touzhutips[1].active=!0)):void 0;this.m_tips.getComponent(cc.Animation).play()},zidonjiesuan:function(){if(3==this.b_touzhuKG)return 1==g_gameUI.b_dhcs?(g_gameUI.m_Notouzhu.active=!0,this.m_touzhutips[0].color=new cc.color(88,88,88)):this.m_touzhutips[0].color=new cc.color(46,82,238),this.m_xiazhuKG.active&&(g_huojian.opentaiosan(),this.b_jiafen=!0,this.b_xiazhu&&g_dataManager.addmoney(this.v_paofen-this.v_zongzhi+this.v_zongzhi)),this.b_touzhuKG=1,this.m_touzhutips[3].active=!1,this.b_jump=!0,void(this.m_touzhutips[1].active=!0)},autotouzhu:function(){this.m_touzhutips[0].color=new cc.color(46,82,238),this.m_touzhutips[3].active=!1,this.m_touzhutips[1].active=!0},autojiesuan:function(){this.m_touzhutips[0].color=new cc.color(247,147,22),this.m_touzhutips[2].active=!1,this.m_touzhutips[3].active=!0},updatajieusan:function(){1==g_gameUI.b_dhcs?(this.v_zongzhi=this.b_zongzhi+this.b_goumaizhi,this.v_paofen=this.v_zongzhi+g_huojian.b_paofen,this.m_jiesuanLabel.string="BRL"+this.v_paofen.toFixed(2)):(this.v_zongzhi=this.b_zongzhi+this.b_goumaizhi,this.m_jiesuanLabel.string="BRL"+this.v_zongzhi.toFixed(2))},updatanumber:function(){this.m_goumaizhi.string=this.b_goumaizhi+".00"},addgoumai:function(){this.b_goumaizhi=this.b_goumaizhi+this.b_upnumber,this.updatanumber()},subgoumai:function(){if(1==this.b_buttonColor){if(this.b_goumaizhi<=0)return;this.b_goumaizhi=this.b_goumaizhi-10,this.updatanumber()}if(2==this.b_buttonColor){if(this.b_goumaizhi<50)return;this.b_goumaizhi=this.b_goumaizhi-50,this.updatanumber()}if(3==this.b_buttonColor){if(this.b_goumaizhi<100)return;this.b_goumaizhi=this.b_goumaizhi-100,this.updatanumber()}if(4==this.b_buttonColor){if(this.b_goumaizhi<500)return;this.b_goumaizhi=this.b_goumaizhi-500,this.updatanumber()}},on_BRL10:function(){1!=this.b_buttonColor&&(this.b_buttonColor=1,this.b_upnumber=10+this.b_zongzhi,this.m_buttonColor[0].color=new cc.color(255,140,140),this.m_buttonColor[1].color=new cc.color(255,255,255),this.m_buttonColor[2].color=new cc.color(255,255,255),this.m_buttonColor[3].color=new cc.color(255,255,255))},on_BRL50:function(){2!=this.b_buttonColor&&(this.b_buttonColor=2,this.b_upnumber=50+this.b_zongzhi,this.m_buttonColor[1].color=new cc.color(255,140,140),this.m_buttonColor[0].color=new cc.color(255,255,255),this.m_buttonColor[2].color=new cc.color(255,255,255),this.m_buttonColor[3].color=new cc.color(255,255,255))},on_BRL100:function(){3!=this.b_buttonColor&&(this.b_buttonColor=3,this.b_upnumber=100+this.b_zongzhi,this.m_buttonColor[2].color=new cc.color(255,140,140),this.m_buttonColor[1].color=new cc.color(255,255,255),this.m_buttonColor[0].color=new cc.color(255,255,255),this.m_buttonColor[3].color=new cc.color(255,255,255))},on_BRL500:function(){4!=this.b_buttonColor&&(this.b_buttonColor=4,this.b_upnumber=500+this.b_zongzhi,this.m_buttonColor[3].color=new cc.color(255,140,140),this.m_buttonColor[1].color=new cc.color(255,255,255),this.m_buttonColor[2].color=new cc.color(255,255,255),this.m_buttonColor[0].color=new cc.color(255,255,255))},on_autoxiazhu:function(){if(g_dataManager.getmoney()<this.v_zongzhi||g_dataManager.getmoney()<=0)this.m_tips.getComponent(cc.Animation).play();else{if(this.m_opentouzhu=!0,this.m_autoxiazhuKG[1].active){this.b_zdxiazhu=!0,this.m_zdtouzhu.active=!0,this.b_autoxiazhu=!0;var t=cc.moveTo(.2,14,0);return this.m_autoxiazhuKG[0].runAction(t),void this.scheduleOnce(function(){this.m_autoxiazhuKG[0].color=new cc.color(46,82,238),this.m_autoxiazhuKG[1].active=!1}.bind(this),.2)}if(!this.m_autoxiazhuKG[1].active){this.b_zdxiazhu=!1,this.m_zdtouzhu.active=!1;var i=cc.moveTo(.2,-14,0);return this.m_autoxiazhuKG[0].runAction(i),void this.scheduleOnce(function(){this.m_autoxiazhuKG[0].color=new cc.color(156,156,156),this.m_autoxiazhuKG[1].active=!0}.bind(this),.2)}}},updataChoose_juli:function(){this.m_autojiesuanLabel.string=g_dataManager.getautojuli()+".00x"},PDautotiaosan:function(){if(this.startpaosfen&&this.b_autojiesuan){var t=g_huojian.b_juli.toFixed(2);cc.log(t),g_dataManager.getautojuli()==t&&this.zidonjiesuan()}},on_autojiesuan:function(){if(this.m_autojiesuanKG[1].active){var t=cc.moveTo(.2,14,0);return this.m_autojiesuanKG[0].runAction(t),this.b_autojiesuan=!0,void this.scheduleOnce(function(){this.m_autojiesuanKG[0].color=new cc.color(46,82,238),this.m_autojiesuanKG[2].color=new cc.color(46,82,238),this.m_autojiesuanKG[3].color=new cc.color(255,255,255),this.m_autojiesuanKG[1].active=!1}.bind(this),.2)}if(!this.m_autojiesuanKG[1].active){var i=cc.moveTo(.2,-14,0);return this.m_autojiesuanKG[0].runAction(i),this.b_autojiesuan=!1,void this.scheduleOnce(function(){this.m_autojiesuanKG[0].color=new cc.color(156,156,156),this.m_autojiesuanKG[2].color=new cc.color(201,201,201),this.m_autojiesuanKG[3].color=new cc.color(46,82,238),this.m_autojiesuanKG[1].active=!0}.bind(this),.2)}},openautotouzhu:function(){this.touzhucs>=1||(this.touzhucs=1,this.b_autoxiazhu&&this.opentouzhu())},PDautoxiazhu:function(){if(g_dataManager.getmoney()<this.v_zongzhi||g_dataManager.getmoney()<=0){this.m_tips.getComponent(cc.Animation).play(),this.b_zdxiazhu=!1,this.m_zdtouzhu.active=!1;var t=cc.moveTo(.2,-14,0);return this.m_autoxiazhuKG[0].runAction(t),void this.scheduleOnce(function(){this.m_autoxiazhuKG[1].active=!0}.bind(this),.2)}},update:function(){this.updatanumber(),this.updatajieusan(),this.updataChoose_juli(),this.PDautotiaosan(),this.m_autoxiazhuKG[1].active&&(this.b_autoxiazhu=!1),this.m_autoxiazhuKG[1].active||(this.b_autoxiazhu=!0)}}),cc._RF.pop()},{}],dataManager:[function(t,i){"use strict";cc._RF.push(i,"770bcL1XzJBnLXfp6wVm2QN","dataManager"),i.exports=function(){var t=new Object;return t.userData={},t.save=function(){var i=JSON.stringify(t.userData);cc.sys.localStorage.setItem("userData",i)},t.load=function(){var i=cc.sys.localStorage.getItem("userData");t.userData=null!=i&&""!=i?JSON.parse(i):{}},t.del=function(){cc.sys.localStorage.removeItem("userData")},t.getGold=function(){return null==t.userData.gold&&(t.userData.gold=1e4),t.userData.gold},t.setGold=function(i){t.userData.gold=i,t.save()},t.subGold=function(i){null==t.userData.gold&&(t.userData.gold=1e4),t.userData.gold-=i,t.save()},t.addGold=function(i){null==t.userData.gold&&(t.userData.gold=1e4),t.userData.gold+=i,t.save()},t.setxsyd=function(i){t.userData.xsyd=i,t.save()},t.getxsyd=function(){return null==t.userData.xsyd&&(t.userData.xsyd=0),t.userData.xsyd},t.addmoney=function(i){null==t.userData.money&&(t.userData.money=0),t.userData.money+=i,t.save()},t.getmoney=function(){return null==t.userData.money&&(t.userData.money=5e3),t.userData.money},t.submoney=function(i){null==t.userData.money&&(t.userData.money=0),t.userData.money-=i,t.save()},t.setmoney=function(i){t.userData.money=i,t.save()},t.addautojuli=function(i){null==t.userData.autojuli&&(t.userData.autojuli=0),t.userData.autojuli+=i,t.save()},t.getautojuli=function(){return null==t.userData.autojuli&&(t.userData.autojuli=1),t.userData.autojuli},t.subautojuli=function(i){null==t.userData.autojuli&&(t.userData.autojuli=0),t.userData.autojuli-=i,t.save()},t.setautojuli=function(i){t.userData.autojuli=i,t.save()},t.getmyjilu=function(){return null==t.userData.myjilu&&(t.userData.myjilu=0),t.userData.myjilu},t.addmyjilu=function(i){null==t.userData.myjilu&&(t.userData.myjilu=0),t.userData.myjilu+=i,t.save()},t.setmyjilu=function(i){t.userData.myjilu=i,t.save()},t.getautojilu=function(){return null==t.userData.autojilu&&(t.userData.autojilu=0),t.userData.autojilu},t.addautojilu=function(i){null==t.userData.autojilu&&(t.userData.autojilu=0),t.userData.autojilu+=i,t.save()},t.setautojilu=function(i){t.userData.autojilu=i,t.save()},t.getzuigaijilu=function(){return null==t.userData.zuigaijilu&&(t.userData.zuigaijilu=0),t.userData.zuigaijilu},t.addzuigaijilu=function(i){null==t.userData.zuigaijilu&&(t.userData.zuigaijilu=0),t.userData.zuigaijilu+=i,t.save()},t.setzuigaijilu=function(i){t.userData.zuigaijilu=i,t.save()},t.getlishijilu=function(){return null==t.userData.lishijilu&&(t.userData.lishijilu=[0,0,0,0,0,0,0,0]),t.userData.lishijilu},t.addlishijilu=function(i){null==t.userData.lishijilu&&(t.userData.lishijilu=[0,0,0,0,0,0,0,0]),t.userData.lishijilu.push(i),t.save()},t.dellishijilu=function(){t.userData.lishijilu=[0,0,0,0,0,0,0,0],t.save()},t.gettouzhu=function(){return null==t.userData.touzhu&&(t.userData.touzhu=[0,0,0,0,0,0,0,0,0,0]),t.userData.touzhu},t.addtouzhu=function(i,o,u){null==t.userData.touzhu&&(t.userData.touzhu=[0,0,0,0,0,0,0,0,0,0]);var a={name:"me",betamount:i,jumpheight:o,settleaccount:u};t.userData.touzhu.push(a),t.save()},t.getquanbutouzhu=function(){return null==t.userData.quanbutouzhu&&(t.userData.quanbutouzhu=[0,0,0,0,0,0,0,0,0,0]),t.userData.quanbutouzhu},t.addquanbutouzhu=function(i,o,u,a){null==t.userData.quanbutouzhu&&(t.userData.quanbutouzhu=[0,0,0,0,0,0,0,0,0,0]);var n={name:i,betamount:o,jumpheight:u,settleaccount:a};t.userData.quanbutouzhu.push(n),t.save()},t.delquanbutouzhu=function(){t.userData.quanbutouzhu=[0,0,0,0,0,0,0,0,0,0],t.save()},t.getJPXX=function(i){switch(i){case 1:return t.getJP1();case 2:return t.getJP2();case 3:return t.getJP3();case 4:return t.getJP4();case 5:return t.getJP5();case 6:return t.getJP6();case 7:return t.getJP7();case 8:return t.getJP8();case 9:return t.getJP9();case 10:return t.getJP10();case 11:return t.getJP11();case 12:return t.getJP12();case 13:return t.getJP13()}},t.setUserInfo=function(i){t.userData.userInfo=i,t.save()},t.getUserInfo=function(){return t.userData.userInfo},t},cc._RF.pop()},{}],game_UI:[function(t,i){"use strict";cc._RF.push(i,"9c064EgEtRM9oocuwF7ZHLi","game_UI"),cc.Class({extends:cc.Component,properties:{m_DJSLabel:cc.Label,m_huojianNode:cc.Node,m_huojianDH:cc.Prefab,m_TCNode:cc.Node,m_DJSNode:cc.Node,m_Notouzhu:cc.Node,m_mymoney:cc.Label,m_Language:cc.Node,m_choosejuliTC:cc.Prefab,m_lishigodu:[cc.Label],m_mygaodu:[cc.Label]},onLoad:function(){window.g_gameUI=this,this.b_time=0,this.b_DJS=5,this.b_dhcs=0,this.b_startDJS=!0,this.b_addjilu=!1,this.b_startDJS&&(this.m_huojianNode.active=!0),g_dataManager.setmyjilu(1),g_dataManager.setautojilu(1),g_dataManager.setzuigaijilu(1),this.updatalishigaodu(),this.fanyi=!1},start:function(){},updatalishigaodu:function(){for(var t=8,i=g_dataManager.getlishijilu(),o=i.length-1;o>i.length-9;o--)0!=i[o]?(this.m_lishigodu[t].string=i[o]+"x",i[o]<=2?this.m_lishigodu[t].node.color=new cc.Color(25,255,0):i[o]<=4?this.m_lishigodu[t].node.color=new cc.Color(43,177,251):i[o]<=10?this.m_lishigodu[t].node.color=new cc.Color(255,158,0):this.m_lishigodu[t].node.color=new cc.Color(168,0,255)):this.m_lishigodu[t].string=" ",t--},Language:function(){g_yuyan.openYuyan(),this.m_Language.children[0].active?(this.m_Language.children[0].active=!1,this.m_Language.children[1].active=!0,this.fanyi=!0):(this.fanyi=!1,this.m_Language.children[0].active=!0,this.m_Language.children[1].active=!1)},on_Chinese:function(){this.m_Language.children[0].active=!0,this.m_Language.children[1].active=!1,this.m_Language.children[2].active=!1},on_English:function(){this.m_Language.children[1].active=!0,this.m_Language.children[0].active=!1,this.m_Language.children[2].active=!1},open_Choosejuli:function(){this.chooseTC=cc.instantiate(this.m_choosejuliTC),this.m_TCNode.addChild(this.chooseTC)},off_Choosejuli:function(){this.chooseTC.destroy()},addmoney:function(){g_dataManager.addmoney(1e3)},openDJSNode:function(){this.m_DJSNode.active=!0},subDJS:function(){this.b_DJS--},updatemamoney:function(){if(g_caozuo.b_autoxiazhu){var t=g_dataManager.getmoney()-g_caozuo.v_zongzhi;this.m_mymoney.string=Math.ceil(t)+".00"}else this.m_mymoney.string=Math.ceil(g_dataManager.getmoney())+".00";if(g_caozuo.b_autoxiazhu||g_caozuo.b_xiazhu){var i=g_dataManager.getmoney()-g_caozuo.v_zongzhi;this.m_mymoney.string=Math.ceil(i)+".00"}},updataDJS:function(){this.b_DJS>=10?this.m_DJSLabel.string="00:"+this.b_DJS:this.m_DJSLabel.string="00:0"+this.b_DJS},openhuojianDH:function(){if(g_caozuo.startpaosfen=!0,g_caozuo.openautotouzhu(),g_caozuo.m_zdtouzhu.active=!1,1!=this.b_dhcs){this.b_dhcs=1,1==g_caozuo.b_touzhuKG&&(this.m_Notouzhu.active=!0),2==g_caozuo.b_touzhuKG&&(g_caozuo.b_touzhuKG=3,g_caozuo.autojiesuan()),g_caozuo.b_autoxiazhu||1==g_caozuo.b_touzhuKG&&this.offtouzhu(),g_caozuo.m_xiazhuKG.active=!0,g_music.open_huojian(),g_kapai.off_julu(),g_time.openTime();var t=cc.instantiate(this.m_huojianDH);this.m_TCNode.addChild(t)}},offtouzhu:function(){this.m_Notouzhu.active=!0,g_caozuo.m_touzhutips[0].color=new cc.color(88,88,88)},update:function(t){this.updatemamoney(),this.updataDJS(),this.b_startDJS&&(this.b_time+=t,this.b_time>=1&&(this.subDJS(),this.b_time=0)),this.b_DJS<0&&(this.m_huojianNode.active=!1,this.m_huojianDH.active=!0,this.b_startDJS=!1,this.openhuojianDH())}}),cc._RF.pop()},{}],game:[function(t,i){"use strict";cc._RF.push(i,"dd9c9bUecNPHqY2SGKXQqkn","game");var o=t("dataManager");cc.Class({extends:cc.Component,properties:{m_chumo:cc.ScrollView},onLoad:function(){window.g_dataManager=o(),g_dataManager.load(),cc.director.getPhysicsManager().enabled=!0,cc.director.getCollisionManager().enabled=!0,window.g_game=this,cc.log(g_dataManager.gettouzhu())},start:function(){},openchumo:function(){this.m_chumo.enabled=!0},offchumo:function(){this.m_chumo.enabled=!1}}),cc._RF.pop()},{dataManager:"dataManager"}],huojianDH:[function(t,i){"use strict";cc._RF.push(i,"5f65dlT96FJTZkQ9x7vmnc+","huojianDH"),cc.Class({extends:cc.Component,properties:{m_boomNode:[cc.Node],m_paofen:cc.Label,m_down:cc.Node,m_TCNode:cc.Node,m_tiaosan:cc.Prefab,m_jiluxianshi:cc.Prefab,m_myjiluxianshi:cc.Prefab,m_feixingLabel:cc.Label},onLoad:function(){window.g_huojian=this,this.b_paofen=0,this.b_time=0,this.b_jishi=0,this.b_juli=1,this.b_dumiao=0,this.b_dttime=0,this.zidontiaosan=0,this.m_jiesuan=!1,this.openhuojianDH()},start:function(){},updatafanyi:function(){g_gameUI.fanyi?this.m_feixingLabel.string="Flight altitude":this.m_feixingLabel.string="\u98de\u884c\u9ad8\u5ea6"},addtiaosanjilu:function(){this.tiaosanjilu=cc.instantiate(this.m_jiluxianshi),this.m_TCNode.addChild(this.tiaosanjilu)},addmytiaosanjilu:function(){this.mytiaosanjilu=cc.instantiate(this.m_myjiluxianshi),this.m_TCNode.addChild(this.mytiaosanjilu)},shengchanjianluo:function(){this.renwu=cc.instantiate(this.m_tiaosan),this.m_TCNode.addChild(this.renwu)},opentaiosan:function(){g_music.open_jiangluo(),!this.m_jiesuan&&g_caozuo.getopentouzhu()&&(this.m_jiesuan=!0,g_dataManager.addtouzhu(g_caozuo.b_goumaizhi,this.getJuli(),g_caozuo.v_paofen),g_dataManager.addquanbutouzhu("me",g_caozuo.b_goumaizhi,this.getJuli(),g_caozuo.v_paofen),g_kapai.updataTouzhu()),this.addmytiaosanjilu(),this.mytiaosanjilu.x=this.m_boomNode[0].x,this.mytiaosanjilu.y=this.m_boomNode[0].y,this.shengchanjianluo(),this.renwu.setPosition(this.m_boomNode[0].getPosition());var t=cc.moveBy(15,-300,-1e3);this.renwu.runAction(t)},autotiaosan:function(){if(!(this.zidontiaosan>=10)&&10!=g_dataManager.getautojilu()&&!this.m_boomNode[1].active&&g_utlis.randomNum(1,1e3)>=500){var t=this.getzimu(g_utlis.randomNum(1,26))+"****"+this.getzimu(g_utlis.randomNum(1,26)),i=1e3*g_utlis.randomNum(1,100);this.defen=i+i*this.getJuli()*.01,g_dataManager.addquanbutouzhu(t,i,this.getJuli(),Math.ceil(this.defen)),this.addtiaosanjilu(),this.tiaosanjilu.x=this.m_boomNode[0].x,this.tiaosanjilu.y=this.m_boomNode[0].y,g_kapai.updataquanbuTouzhu(),this.shengchanjianluo(),this.zidontiaosan++,this.renwu.setPosition(this.m_boomNode[0].getPosition());var o=cc.moveBy(15,-300,-1e3);this.renwu.runAction(o)}},updatapaofen:function(){this.m_paofen.string=this.b_juli.toFixed(2)+"x"},getJuli:function(){return this.b_juli.toFixed(2)},addpaofen:function(){this.b_paofen=this.b_paofen+1e-4*g_caozuo.v_zongzhi},addjuli:function(){this.m_boomNode[1].active||(this.b_dumiao++,this.b_dumiao>=100&&(this.b_dumiao=0))},adddumiao:function(){this.b_juli++},addjishi:function(){this.b_jishi++},getzimu:function(t){switch(t){case 1:return"a";case 2:return"b";case 3:return"c";case 4:return"d";case 5:return"e";case 6:return"f";case 7:return"g";case 8:return"h";case 9:return"i";case 10:return"j";case 11:return"k";case 12:return"l";case 13:return"m";case 14:return"n";case 15:return"o";case 16:return"p";case 17:return"q";case 18:return"r";case 19:return"s";case 20:return"t";case 21:return"u";case 22:return"v";case 23:return"w";case 24:return"x";case 25:return"y";case 26:return"z"}},openhuojianDH:function(){this.runtime=g_utlis.randomNum(2e3,3e3),this.scheduleOnce(function(){this.node.getComponent(cc.Animation).stop(),this.m_boomNode[0].active=!1,this.m_boomNode[1].active=!0,g_music.open_baozha(),g_caozuo.offopentouzhu(),g_time.offTime(),g_dataManager.addlishijilu(this.getJuli()),!this.m_jiesuan&&g_caozuo.getopentouzhu()&&(this.m_jiesuan=!0,g_dataManager.addtouzhu(g_caozuo.b_goumaizhi,this.getJuli(),0),g_dataManager.addquanbutouzhu("me",g_caozuo.b_goumaizhi,this.getJuli(),0),g_kapai.updataTouzhu()),this.scheduleOnce(function(){this.m_boomNode[0].active=!0,this.m_boomNode[1].active=!1,g_gameUI.updatalishigaodu(),g_dataManager.addzuigaijilu(1),g_gameUI.openDJSNode(),g_gameUI.b_startDJS=!0,g_gameUI.b_DJS=5,g_gameUI.b_dhcs=0,3==g_caozuo.b_touzhuKG&&(g_caozuo.b_touzhuKG=1,g_caozuo.autotouzhu()),g_caozuo.m_xiazhuKG.active=!1,1==g_caozuo.b_touzhuKG&&(g_gameUI.m_Notouzhu.active=!1,g_caozuo.m_touzhutips[0].color=new cc.color(46,82,238)),this.b_jiafen||g_caozuo.b_xiazhu&&g_dataManager.submoney(g_caozuo.v_zongzhi),g_caozuo.b_xiazhu=!1,g_caozuo.touzhucs=0,g_caozuo.b_zdxiazhu&&(g_caozuo.m_zdtouzhu.active=!0),g_caozuo.PDautoxiazhu(),g_caozuo.m_shibai.active=!1,g_dataManager.setautojilu(1),11==g_dataManager.getautojilu()&&g_dataManager.setautojilu(1),g_dataManager.delquanbutouzhu(),g_kapai.updataquanbuTouzhu(),this.node.destroy()}.bind(this),3)}.bind(this),this.runtime/100)},update:function(t){this.updatafanyi(),this.updatapaofen(),this.b_time+=t,this.b_dttime+=t,this.addpaofen(),this.m_boomNode[1].active||(this.b_juli+=t/28,this.b_juli>=1.2&&(this.b_juli+=t/10),this.b_dttime>=1&&(this.autotiaosan(),this.b_dttime=0)),this.addjuli(),this.m_boomNode[1].active&&(g_caozuo.m_shibai.active=!0),this.b_time>=1&&(this.addjishi(),this.b_time=0,this.m_boomNode[1].active)}}),cc._RF.pop()},{}],juli:[function(t,i){"use strict";cc._RF.push(i,"cdc809PuyhO37NGO1njiWAb","juli"),cc.Class({extends:cc.Component,properties:{m_juliLabel:[cc.Label]},start:function(){window.g_juli=this,this.m_open=!1,this.offjuli()},offjuli:function(){this.m_open=!1,this.m_juli=0,this.m_dt=1,this.m_juli_0=1,this.m_juli_1=1.2,this.m_juli_2=1.4,this.m_juli_3=1.6,this.m_juli_4=1.8,this.m_juliLabel[0].string="-"+this.m_juli_0.toFixed(2)+"x",this.m_juliLabel[1].string="-"+this.m_juli_1.toFixed(2)+"x",this.m_juliLabel[2].string="-"+this.m_juli_2.toFixed(2)+"x",this.m_juliLabel[3].string="-"+this.m_juli_3.toFixed(2)+"x",this.m_juliLabel[4].string="-"+this.m_juli_4.toFixed(2)+"x"},openjuli:function(){this.m_open=!0},updatajuli:function(t){this.m_juli_0+=t/9,this.m_juli_1+=t/9,this.m_juli_2+=t/9,this.m_juli_3+=t/9,this.m_juli_4+=t/9,this.m_juliLabel[0].string=this.m_juli_0.toFixed(2)+"x",this.m_juliLabel[1].string=this.m_juli_1.toFixed(2)+"x",this.m_juliLabel[2].string=this.m_juli_2.toFixed(2)+"x",this.m_juliLabel[3].string=this.m_juli_3.toFixed(2)+"x",this.m_juliLabel[4].string=this.m_juli_4.toFixed(2)+"x"},update:function(t){this.m_open&&(this.m_dt+=t/12.5,this.m_dt>=1.8&&this.updatajuli(t))}}),cc._RF.pop()},{}],music:[function(t,i){"use strict";cc._RF.push(i,"7f30dTD0axIspLaKIXiTMEj","music"),cc.Class({extends:cc.Component,properties:{m_music:[cc.Prefab]},onLoad:function(){window.g_music=this},start:function(){},open_huojian:function(){var t=cc.instantiate(this.m_music[0]);this.node.addChild(t),t.getComponent(cc.AudioSource).play(),this.scheduleOnce(function(){t.destroy()}.bind(this),2.1)},open_baozha:function(){var t=cc.instantiate(this.m_music[1]);this.node.addChild(t),t.getComponent(cc.AudioSource).play(),this.scheduleOnce(function(){t.destroy()}.bind(this),2.1)},open_jiangluo:function(){var t=cc.instantiate(this.m_music[2]);this.node.addChild(t),t.getComponent(cc.AudioSource).play(),this.scheduleOnce(function(){t.destroy()}.bind(this),2.1)}}),cc._RF.pop()},{}],myjilu:[function(t,i){"use strict";cc._RF.push(i,"19608OkNiNP+73wYnK4ItW8","myjilu"),cc.Class({extends:cc.Component,properties:{m_mytouzhu:cc.Label,m_myjuli:cc.Label,m_myshouyi:cc.Label},start:function(){},updatalabel:function(){this.m_mytouzhu.string=g_caozuo.b_goumaizhi,this.m_myjuli.string=g_huojian.b_juli+"."+g_huojian.b_dumiao+"x",this.m_myshouyi.string=g_caozuo.v_zongzhi}}),cc._RF.pop()},{}],renwu:[function(t,i){"use strict";cc._RF.push(i,"138cb7sbklA8K7eNqJtEo9s","renwu"),cc.Class({extends:cc.Component,properties:{},start:function(){},onCollisionEnter:function(t){2==t.tag&&this.node.destroy()}}),cc._RF.pop()},{}],tiaosanxinximy:[function(t,i){"use strict";cc._RF.push(i,"14bc6lQQStHEqDvBjHLXJNz","tiaosanxinximy"),cc.Class({extends:cc.Component,properties:{m_tiaosanjilu:[cc.Label]},onLoad:function(){this.m_tiaosanjilu[0].string="Me"+g_huojian.getJuli(),this.m_tiaosanjilu[1].string="MeBRL"+Math.ceil(g_huojian.defen)},start:function(){}}),cc._RF.pop()},{}],tiaosanxinxi:[function(t,i){"use strict";cc._RF.push(i,"42713rTXvBPl6Atv/gtBmEK","tiaosanxinxi"),cc.Class({extends:cc.Component,properties:{m_tiaosanjilu:[cc.Label]},onLoad:function(){this.m_tiaosanjilu[0].string=g_huojian.getJuli(),this.m_tiaosanjilu[1].string="BRL"+Math.ceil(g_huojian.defen)},start:function(){}}),cc._RF.pop()},{}],time:[function(t,i){"use strict";cc._RF.push(i,"e6537cGp6JGxa5Ke8h+rzqz","time"),cc.Class({extends:cc.Component,properties:{m_timeLabel:[cc.Label]},start:function(){window.g_time=this,this.m_open=!1,this.offTime()},offTime:function(){g_juli.offjuli(),this.m_open=!1,this.m_time=0,this.m_dt=0,this.m_time_0=2,this.m_time_1=4,this.m_time_2=6,this.m_time_3=8,this.m_time_4=10,this.m_timeLabel[0].string=this.m_time_0+"s",this.m_timeLabel[1].string=this.m_time_1+"s",this.m_timeLabel[2].string=this.m_time_2+"s",this.m_timeLabel[3].string=this.m_time_3+"s",this.m_timeLabel[4].string=this.m_time_4+"s"},openTime:function(){this.m_open=!0,g_juli.openjuli()},updataTime:function(){this.m_time_0++,this.m_time_1++,this.m_time_2++,this.m_time_3++,this.m_time_4++,this.m_timeLabel[0].string=this.m_time_0+"s",this.m_timeLabel[1].string=this.m_time_1+"s",this.m_timeLabel[2].string=this.m_time_2+"s",this.m_timeLabel[3].string=this.m_time_3+"s",this.m_timeLabel[4].string=this.m_time_4+"s"},update:function(t){this.m_open&&(this.m_dt+=t,this.m_dt>=1&&(this.m_dt=0,this.m_time++,this.m_time>10&&this.updataTime()))}}),cc._RF.pop()},{}],touzhudata:[function(t,i){"use strict";cc._RF.push(i,"1f537928bhFeLcjS44utyuZ","touzhudata"),cc.Class({extends:cc.Component,properties:{m_nameLabel:cc.Label,m_betLabel:cc.Label,m_jumpLabel:cc.Label,m_settleLabel:cc.Label},start:function(){},updataData:function(t,i,o,u){this.m_nameLabel.string=t,this.m_betLabel.string="BRL"+i,this.m_jumpLabel.string=o+"x",this.m_settleLabel.string="BRL"+u}}),cc._RF.pop()},{}],utlis:[function(t,i){"use strict";cc._RF.push(i,"6abceAzEntG3Jpk6ucftRZL","utlis"),window.g_utlis=new Object,g_utlis.randomNum=function(t,i){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(i-t+1)+t,10);default:return 0}},g_utlis.numberToString=function(t){for(var i=[{minnum:1e36,maxnum:1e43,toStr:"n"},{minnum:1e33,maxnum:1e36,toStr:"d"},{minnum:1e30,maxnum:1e33,toStr:"i"},{minnum:1e27,maxnum:1e30,toStr:"f"},{minnum:1e24,maxnum:1e27,toStr:"s"},{minnum:1e21,maxnum:1e24,toStr:"y"},{minnum:1e18,maxnum:1e21,toStr:"e"},{minnum:1e15,maxnum:1e18,toStr:"p"},{minnum:1e12,maxnum:999999999999999,toStr:"t"},{minnum:1e9,maxnum:999999999999,toStr:"b"},{minnum:1e6,maxnum:999999999,toStr:"m"},{minnum:1e3,maxnum:999999,toStr:"k"}],o=0;o<i.length;o++)if(t>=i[o].minnum&&t<=i[o].maxnum)return""+(t=(t/=i[o].minnum).toFixed(1))+i[o].toStr;return""+t.toFixed(0)},g_utlis.result=function(t,i,o){var u=[t,i,o];return u[Math.floor(Math.random()*u.length)]},g_utlis.result6=function(t,i,o,u,a,n){var e=[t,i,o,u,a,n];return e[Math.floor(Math.random()*e.length)]},g_utlis.sjs=function(t){return(t=[0,1,2,3,4]).sort(function(){return.5-Math.random()}),t},g_utlis.getAngle=function(t,i){var o=i.x-t.x,u=i.y-t.y,a=o/Math.sqrt(o*o+u*u),n=Math.acos(a),e=180/(Math.PI/n);return u<0?e=0-e:0==u&&o<0&&(e=180),e},g_utlis.getDistance=function(t,i){var o=cc.v2(t.x-i.x,t.y-i.y);return Math.sqrt(o.x*o.x+o.y*o.y)},cc._RF.pop()},{}],yuyan:[function(t,i){"use strict";cc._RF.push(i,"d1454WnDQNJ7bxAkAOL6WYE","yuyan"),cc.Class({extends:cc.Component,properties:{m_chNode:[cc.Node],m_enNode:[cc.Node]},start:function(){window.g_yuyan=this,this.m_ch=!1,this.openYuyan()},getyuyan:function(){return this.m_ch},openYuyan:function(){if(this.m_ch){this.m_ch=!1;for(var t=0;t<this.m_chNode.length;t++)this.m_chNode[t].active=!1,this.m_enNode[t].active=!0}else{this.m_ch=!0;for(var i=0;i<this.m_chNode.length;i++)this.m_chNode[i].active=!0,this.m_enNode[i].active=!1}}}),cc._RF.pop()},{}]},{},["Records","autochoosejuli","console","dataManager","utlis","game","game_UI","huojianDH","juli","music","myjilu","renwu","tiaosanxinxi","tiaosanxinximy","time","touzhudata","yuyan"]);