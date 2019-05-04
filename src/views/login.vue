<template>
  <div>
    <!--登录页面-->

    <div id="container">
      <div class="container_in">
        <div class="container_in_l">
          <div class="container_in_l_l">
            <h3 style="color:#39b7ea; font-family:Arial, Helvetica, sans-serif">登录</h3>
            <p style="color:#c6d4df">到现有的账户</p>
            <!--登录文本框-->
            <form role="form">
              <div class="form-group">
                <label for="name" style=" color:#c6d4df; font-size:12px; font-family:Arial, Helvetica, sans-serif;font-weight:normal">Steam账户名称</label>
                <input id="name" v-model="email" type="text" class="form-control" placeholder="" value="" style="background-color:rgba( 0, 0, 0, 0.2 ); color:#fff; width:275px; height:30px;box-shadow:1px 1px 0px #45556c; border:#000 1px;">
              </div>
              <div class="form-group">
                <label for="name" style=" color:#c6d4df; font-size:12px; font-family:Arial, Helvetica, sans-serif;font-weight:normal">密码</label>
                <input id="password_in" v-model="upwd" type="password" class="form-control" placeholder="" value="" style="background-color:rgba( 0, 0, 0, 0.2 ); color:#fff; width:275px; height:30px;box-shadow:1px 1px 0px #45556c; border:#000 1px;">
              </div>
            </form>
            <!--<label style="color:#c6d4df; font-size:12px;"><input type="checkbox"> 在这台电脑上记住我</label>-->
            <br >
            <button id="login_button_1" type="button" class="btn btn-primary" style=" color:#67c1f5; background-color:#24546f; border-color:#24546f" @click="login_con()" @onmouseover="login_bg_1()" @onmouseout="login_back_1()">登录</button>
          </div>
          <div class="container_in_l_r">
            <h3 style="color:#39b7ea; font-family:Arial, Helvetica, sans-serif">创建</h3>
            <p style="color:#c6d4df">一个新的免费账户</p>
            <p style=" color:#c6d4df; font-size:12px; font-family:Arial, Helvetica, sans-serif;font-weight:normal">欢迎免费加入及轻松使用。继续创建 Steam 帐户并获取 Steam - 适合 PC 和 Mac 玩家的前沿数字解决方案。</p>
            <br ><br ><br ><br >
            <button id="login_button_2" type="button" class="btn btn-primary" style=" color:#67c1f5; background-color:#24546f; border-color:#24546f; margin-top:14px;" @onmouseover="login_bg_2()" @onmouseout="login_back_2()">加入 Steam</button>
          </div>
        </div>
        <div class="container_in_r">
          <h4 style="color:#39b7ea; font-family:Arial, Helvetica, sans-serif;">为什么加入 STEAM?</h4>
          <ul style="list-style-type:none; color:#c6d4df; font-size:13px; line-height:20px;">
            <li><img src="/src/assets/image/point.jpg" width="4" height="4" >&nbsp;&nbsp;购买和下载完整零售游戏</li>
            <li><img src="/src/assets/image/point.jpg" width="4" height="4" >&nbsp;&nbsp;加入Steam社区</li>
            <li><img src="/src/assets/image/point.jpg" width="4" height="4" >&nbsp;&nbsp;游戏时与好友聊天</li>
            <li><img src="/src/assets/image/point.jpg" width="4" height="4" >&nbsp;&nbsp;在任何电脑上都能玩</li>
            <li><img src="/src/assets/image/point.jpg" width="4" height="4" >&nbsp;&nbsp;安排游戏、比赛或LAN聚会</li>
            <li><img src="/src/assets/image/point.jpg" width="4" height="4" >&nbsp;&nbsp;获取自动游戏更新以及更多！</li>
          </ul>
          <img src="/src/assets/image/why_join_preview.png" width="265" height="176" >
        </div>
      </div>
      <div class="lostpassword">
        <a @click="test()">忘记您的密码？</a>
        <a href="#" style="margin-left:545px;">了解更多 Steam的相关信息</a>
      </div>
    </div>
  </div>
</template>

<script>
import { userList } from '@/api/login'
import store from '@/store'
export default {
  data() {
    return {
      uname: store.getters.username,
      email: '',
      upwd: ''
    }
  },
  methods: {

    test() {
      const query = {
        pageSize: 3,
        pageNum: 1
      }
      userList(query).then(res => {
        console.log(res)
      })
    },

    // ----------------样式---------------------
    login_con() {
      const a = document.getElementById('name')
      const b = document.getElementById('password_in')
      const c = document.getElementById('globe_actions')
      const d = document.getElementById('username_in')
      // let f = true

      if (a.value === '') {
        alert('请先输入用户名')
        // f = false
        return
      } else if (b.value === '') {
        alert('请输入登录密码')
        // f = false
        return
      } else {
        const query = {
          email: this.email,
          password: this.upwd
        }
        this.$store.dispatch('Login', query).then(res => {
          // this.$router.push('/')
          window.open('/')
          c.style.display = 'none'
          d.style.display = 'block'
          d.innerText = '欢迎： ' + a.value
        })
      }
    },
    //  登录按钮
    login_bg_1() {
      var a = document.getElementById('login_button_1')
      a.style.backgroundColor = '#5fb7e9'
      a.style.color = '#fff'
    },
    login_back_1() {
      var a = document.getElementById('login_button_1')
      a.style.backgroundColor = '#255470'
      a.style.color = '#67c1f5'
    },
    login_bg_2() {
      var a = document.getElementById('login_button_2')
      a.style.backgroundColor = '#5fb7e9'
      a.style.color = '#fff'
    },
    login_back_2() {
      var a = document.getElementById('login_button_2')
      a.style.backgroundColor = '#255470'
      a.style.color = '#67c1f5'
    }
  }
}
</script>

<style scoped>
  /* CSS Document */

  *{ padding:0; margin:0; border:0;}
  li{ list-style: none;}
  #globe_header{ width:100%; height:104px; background:#171a21}
  .content{ width:940px; height:104px; margin: 0 auto; position:relative;}
  #cir{ clear: both;}
  .logo{ width:176px; height:44px; float:left; margin-right:40px; margin-top:30px; float:left;}
  .logo_holder{ width:176px; height:16px;}
  .supernav_cotainer{ width:168px; height:38px; float: left; margin-top:30px;font-size:14px; line-height:38px;}
  .supernav_cotainer a{ margin-left:8px; color:#c6d4df; text-decoration:none;}
  .supernav_cotainer a:hover{ color:#FFF; text-decoration:none;}
  #globe_actions{ width:218px; height:21px;float:left; margin-top:6px; margin-left:325px;}
  .anzhuang{ width:98px; height:21px; background:url(/src/assets/image/download.jpg);  text-indent:28px; float:left; }
  #username_in{ width:218px; height:21px;float:left; margin-top:6px; margin-left:325px; text-align:right;}
  .anzhuang a{ color:#FFF; text-indent:24px; text-align:center; font-size:12px; line-height:21px;}
  .anzhuang a:hover{ color:#CCC; text-decoration:none;}
  .login{ float: left; width:100px; height:21px; margin-left:10px; color:#b8b6b4; font-size:12px; line-height:21px;}
  .login a{color:#b8b6b4; text-decoration:none;}
  .login a:hover{ color:#FFF;}

  /*搜索框*/

  .search_nav{ width:940px; height:35px; background:#F00; position:absolute; top:135px; background:rgb(55, 112, 150)}
  .search_bar{ float:right; margin-right:4px;}
  #search_bar{ width:228px;border-radius:3px ; height:29px; border:1px solid #22455b; margin-top:3px; position:relative; background:#316282; color:#dddddd; text-indent:15px;  font-style:italic}
  #myshop{ position:absolute;top:32px;}
  #mygame{ position:absolute;top:32px;}
  #mysoft{ position:absolute;top:32px;}
  #myhardware{ position:absolute;top:32px;}
  #myvideo{ position:absolute;top:32px;}
  #home_page{width: 100%; height: 1605px; background-color:#1b2838; float: left;}
  #lunbotu{width: 940px;height: 390px; margin: 0 auto;  margin-top: 100px;  position: relative; }
  .jingxuan{width: 940px; height: 35px; float: left; color: #FFFFFF; font-size: 15px; line-height: 35px; text-indent: 2px;}
  .swiper-container {width: 940px;height: 353px;}
  .swiper-slide{ font-size:50px; text-align:center; position:relative;}
  .lunbotu_left{ width:616px; height:353px; float:left;}
  .lunbotu_right{ width:324px; height:353px; background-color:#0C161F; float:left;}
  .lunbotu_right_top{ width:324px; height:78px; font-size:24px; color:#FFF; line-height:78px; text-indent:24px; text-align:left; float:left;}
  .lunbotu_right_middle{ width:324px; height:150px; float:left; }
  .lunbotu_right_middle img{ float: left; margin-right:15px; margin-top:10px;cursor:pointer;filter: brightness(0.5); opacity:0.6}
  .lunbotu_right_middle img:hover{ filter: brightness(1);opacity:1}
  .now_out{ width:324px; height:20px; font-size:20px; line-height:20px; float:left; text-indent:24px; margin-top:20px; text-align:left; color:#FFF; }
  .swiper-button-prev{ width:27px; height:44px; background:#133549; opacity:0.5;}
  .swiper-button-next{ width:27px; height:44px; background:#133549; opacity:0.5;}
  .hot{ width: 324px; height: 20px; float: left; margin-top: 20px;}
  .hot_tag{ width: 62px; height: 20px; border-radius: 3px; background-color: #394148; float: left; margin-left: 20px; color: #FFFFFF; font-size: 12px; text-align: center; line-height: 20px;}
  .lunbotu_right_bottom{ width: 324px; height:21px; float: left;  margin-top: 15px;}
  .lunbotu_right_bottom_price{ width: 52px; height: 21px; float: left; margin-left:10px ; color: #acdbe7; font-size: 9px; line-height: 21px;}
  .lunbotu_right_bottom_icon{ background-image: url(/src/assets/image/icon_platform_win.png); float: right; width: 20px; height: 20px; margin-right: 10px;}
  .left_tag{ width: 213px; height: 975px; position: absolute; left: -240px;top: -70px;}
  .steam_card{ width: 213px; height: 119px;}
  .steam_tag{ width: 213px; height: 856px;}
  .steam_tag ul{ margin-top: 6px; margin-bottom: 12px;}
  .steam_tag li{ margin-top: 6px; }
  .steam_tag li a{ color: #66c0f4;}
  .steam_tag li a:hover{ color: #FFFFFF; text-decoration: none;}
  .left_title{ font-size: 12px;color:#c6d4df; }
  .left_page{ font-size: 11px;}
  .view_all{ width: 78px; height: 20px; border: 1px solid #768692; border-radius: 2px;  float:right; font-size: 12px; line-height: 18px; text-align: center; margin-top: 8px; margin-right: 12px;}
  .view_all:hover{ border: 1px solid #FFFFFF;}
  .view_all a{ color: #FFFFFF;}
  .view_all a:hover{ color:  #FFFFFF; text-decoration: none;}
  .lunbotu2_left{ width: 306px;height: 390px;background-image: url(/src/assets/image/background_spotlight.jpg); float: left; margin-right: 7px;}
  .lunbotu2_left img{ float: left;}
  .teyou{ float: left;}
  .tebieyouhui{ margin-top: 12px; font-size: 15px; float: left; color: #FFFFFF; margin-left: 17px;}
  .teyoushijian{ margin-top: -25px; font-size: 12px; float: left; color: #acdbf5; margin-left: 17px;}
  .price_count{ width: 119px; height: 34px; float: right; margin-top: 20px; background-image: url(/src/assets/image/price_count.jpg); margin-right: 20px;}
  .tebieyouhuizu{ width: 308px; height: 188px; margin-right: 2px; float:left; background-image: url(/src/assets/image/background_spotlight.jpg); margin-bottom: 10px; position: relative;}
  .tebieyouhuizu img{ float: left;}
  .price_count2{ width: 119px; height: 34px; float: right; margin-top: 5px; background-image: url(/src/assets/image/price_count.jpg); margin-right: 5px;}

  #view_steam{width: 100%; height: 95px; float: left; margin-top: 80px; margin-bottom: 40px;}
  .view_steam_in{ width: 940px; height: 95px; margin: 0 auto; }
  .view_steam_in h2{ font-size: 17px;color: #FFFFFF; width: 940px; height: 24px; line-height: 24px; float: left;}
  .view_steam_in_container{ width: 940px; height: 58px; float: left; }
  .view_steam_in_tag{ width: 226px; height: 58px; float: left; background-image: url(/src/assets/image/background_spotlight.jpg);opacity:0.5;filter:(alpha=20); margin-right: 8px; border-radius: 3px; box-shadow: 0 0 4px #000;  }
  .view_steam_in_tag:hover{ opacity:1;filter:(alpha=100); color: #FFFFFF;}
  .view_steam_in_tag a{ font-size: 16px; text-align: center; margin: 0 auto; line-height: 58px; color: #60b2d7; margin-left: 100px;}
  .view_steam_in_tag a:hover{ color: #FFFFFF; text-decoration: none;}

  #appreciate{width: 100%; height: 292px; float: left; margin-top: 20px;}
  .appreciate{ width: 940px; height: 239px; margin: 0 auto;}
  .appreciate_p{ color: red; font-size: 15px;}
  .appreciate h2{ color:#FFFFFF; font-size: 17px; float: left;}
  .appreciate_content{ float: left; width: 940px; height: 32px; font-size: 15px; color: #c6d4df; margin-top: -5px;}
  .appreciate_in{ width: 940px; height: 187px; float: left; }
  .appreciate_tag{ width: 308px; height: 90px;  float: left; margin-right: 5px; background: linear-gradient( -65deg, rgba(37,49,63,1) 5%,rgba(54,97,125,1) 95%); margin-bottom: 7px; }
  .appreciate_tag:hover{background: linear-gradient( -35deg, rgba(54,97,125,1)  5%,rgba(37,49,63,1) 95%); }
  .appreciate_tag_in{ width: 280px; height: 64px; margin-top: 12px; margin-left: 12px; cursor:pointer}
  .appreciate_tag_in img{ float: left; border-radius: 3px;}
  .appreciate_tag_title{ color: #FFFFFF; font-size: 15px; float: left; margin-left: 12px;}
  .appreciate_tag_content{ height: 40px; width: 200px; float: left; margin-top: 5px; margin-left: 12px; color: #abdaf4; font-size: 11px; font-style: italic;}
  #leg{ width: 100%; height: 800px; background-image: url(/src/assets/image/leg_bg.jpg) ; float: left; position: relative;}
  .leg_nav{ width: 940px; height: 815px; margin: 0 auto;   margin-top: -30px;}
  .leg_nav_li{ width: 940px; height: 30px; float: left;}
  .leg_nav_li li{ height: 30px; list-style: none; float: left; color: #4f94bc; font-size: 13px; text-align: center; line-height: 30px; cursor:pointer}
  .leg_nav_li li:hover{ color: white;}
  #leg_nav_content1{ width: 940px; height: 780px;margin: 0 auto; margin-top: 5px;float: left;  }
  #leg_nav_content2{ width: 940px; height: 780px;margin: 0 auto; margin-top: 5px;float: left;  }
  .leg_nav_content1_in{ width: 620px; height: 67px; float: left; margin-bottom: 5px; background: #29384b; cursor: pointer; position: relative;}
  .leg_nav_content1_in img{ float: left;}
  .leg_nav_content1_in_txt{ width: 298px; height: 51px; float: left; margin-left: 14px; margin-top: 10px;}
  .leg_nav_content1_in_title{ font-size: 14px;color: #bcd5d5; width: 298px;height: 14px; float: left;}
  .leg_nav_content1_in_icon{width: 298px; height: 20px; float: left; margin-top: 2px;}
  .leg_nav_content1_in_content{ width: 298px;height:10px; margin-top: 3px; font-size: 10px;color: #5EAFDE ; float: left;}

  .leg_nav_content1_right1{width: 308px; height: 715px; background: #95bbd4; position: absolute; top: 0px;right:-309px;}
  .leg_nav_content1_right1_in{width: 276px; height:683px; margin: 0 auto; margin-top: 16px;  }
  .leg_nav_content1_right1_in_title{ height: 15px; width: 276px; color: #263645; font-size: 15px;  float: left;}
  .leg_nav_content1_right1_in_comment{ float: left; width: 272px; height: 40px; background: #4b5f6f; margin-top: 10px; border-radius: 3px;}
  .leg_nav_content1_right1_in_comment_title{ width: 272px; height: 15px; font-size: 12px; float: left; margin-left: 8px; color: #C6D4DF; margin-top: 5px;}
  .leg_nav_content1_right1_in_comment_content{ width: 272px; height: 15px; font-size: 12px; float: left; margin-left: 8px; color: #95bbd4; }
  .leg_nav_content1_right1_in_comment img{ margin-top: 5px; margin-bottom: 5px; float: left;}

  #black{ width: 100%; height: 206px; background: black; float: left;}
  .black_in{ width: 940px ; height: 206px; margin: 0 auto; }
  .black_in_line{ width: 940px; height: 40px; border-bottom: 1px solid #3f7696; float: left; position: relative;}
  .black_in_line_box{ width: 188px; height: 160px; background: black; position: absolute; left: 400px; top: 20px;}
  .black_in_line_box_title{ width: 188px; height: 40px; line-height: 40px; text-align: center;color: #469cce; font-size: 22px; float: left;}
  .black_in_line_box_cnt{ width: 188px; height: 48px; line-height: 48px; text-align: center; color: #8f98a0; float: left;}
  .login_bottom{ width: 66px; height: 36px; border-radius: 4px; color: #FFFFFF; line-height: 36px; display: block; font-size: 15px; background: #637e04;text-align: center; margin: 0 auto;}
  .login_bottom:hover{background: #97b52d;border: 1px solid #172030;}
  .login_bottom a{ text-decoration: none; color: #FFFFFF; }
  .login_bottom a:hover{ text-decoration: none; color: #FFFFFF;}

  /*登录页*/
  #container{height:650px; width:100%; margin:0 auto; padding-top:86px;}
  .container_in{ height:434px; width:942px; background:#194661; margin:0 auto;}
  .container_in_l{background:#163b52; height:384px; width:618px; float:left;}
  .container_in_l_l{width:306px; height:385px; float:left; padding-left:16px;}
  .container_in_l_r{ background:url(/src/assets/image/container_l_r.jpg) no-repeat; float:left; width:310px; height:384px; padding-left:16px; padding-right:22px;}
  .container_in_r{height:388px; width:309px; margin-left:15px; background:#163b52; float:left; padding-left:16px; padding-top:19px;}
  .btn-primary:hover{color:#fff;background-color:#52a3ce;border-color:#204d74}
  .lostpassword{margin:0 auto; width:1031px; height:40px; border-bottom:#1a364e 2px solid; padding-left:45px; font-size:12px;}
  .lostpassword a{color:#c6d4df;}					.lostpassword a:hover{text-decoration:none; color:#66c0f4;}
</style>
