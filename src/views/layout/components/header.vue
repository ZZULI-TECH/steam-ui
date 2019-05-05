<template>
  <div id="globe_header">
    <div class="content">

      <!--标题栏-->

      <div class="logo">
        <span class="logo_holder">
          <img src="/src/assets/image/globalheader_logo.png" width="176" height="44" @click="$router.push('/')" >
        </span>
      </div>
      <div class="supernav_cotainer">
        <span style="position:relative"> <a href="http://store.steampowered.com/" class="dropdown-toggle" data-toggle="dropdown" @onmouseover="shop_show()" @onmouseout="shop_hide()" >商店</a>
          <ul id="top_shop" class="dropdown-menu" style="position:absolute; left:-5px; top:15px; background:#171a21;" @onmouseout="shop_hide()" @onmouseover="shop_show()" >
            <li><a href="#" style="color: #999;">精选</a></li>
            <li><a href="#" style="color:#999;">探索</a></li>
            <li><a href="#" style="color:#999;">愿望单</a></li>
          </ul>
        </span>
        <a href="#">关于</a>
        <a href="window.close()">客服</a>
      </div>

      <div id="globe_actions">
        <div v-if="name === ''|| name === null || name === undefined" class="login">
          <!--<span><a @click="$router.push({path: '/login'})">登录</a></span>-->
          <span><router-link to="/login">登录</router-link></span>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <span style="position:relative">
            <a data-toggle="dropdown" onclick="language_show()" onmouseout="language_hide()" @click="$router.push('/register')" >注册
              <span class="caret"/>
            </a>
          </span>
        </div>
        <div v-if="name !== '' && name !== null && name !== undefined" style="float: left; width:300px; margin-top: 30px; margin-left:10px; color:#b8b6b4; font-size:12px; line-height:21px;">
          <span> 欢迎： {{ name }}</span>
          |
          <span><a @click="logout">退出</a></span>
        </div>
      </div>
      <!--搜索框-->

      <div class="search_nav">
        <div class="dropdown" style="float:left;">
          <button id="menu1" class="btn btn-default dropdown-toggle" style="background:rgb(55, 112, 150); border:none; color: #FFF;font-size:13px; line-height:23px; border-radius:0; border-right:1px solid rgb(43, 85, 113); color:#d9dadd; position:relative;" type="button" data-toggle="dropdown" onmouseover="search_shop_show()" onmouseout="search_shop_none()">您的商店 <span class="caret"/></button>
          <ul id="myshop" onmouseover="search_shop_show()" onmouseout="search_shop_none()" class="dropdown-menu" role="menu" aria-labelledby="menu1">
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">商店主页</a>
            </li>
            <li role="presentation" class="divider"/>
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">全部游戏</a>
            </li>
          </ul>
        </div>
        <div class="dropdown" style="float:left">
          <button id="menu1" class="btn btn-default dropdown-toggle" style="background:rgb(55, 112, 150); border:none; color: #FFF;font-size:13px; line-height:23px; border-radius:0; border-right:1px solid rgb(43, 85, 113); color:#d9dadd" type="button" data-toggle="dropdown" onmouseover="search_game_show()" onmouseout="search_game_none()">游戏 <span class="caret"/></button>
          <ul id="mygame" onmouseover="search_game_show()" onmouseout="search_game_none()" class="dropdown-menu" role="menu" aria-labelledby="menu1">
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">免费游玩</a>
            </li>
            <li role="presentation" class="divider"/>
            <li role="presentation" class="dropdown-header" style=" color:#2569F8">按类型浏览</li>
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">休闲</a>
            </li>
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">体育</a>
            </li>
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">冒险</a>
            </li>
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">动作</a>
            </li>
          </ul>
        </div>
        <div class="dropdown" style="float:left;">
          <button id="menu1" class="btn btn-default dropdown-toggle" style="background:rgb(55, 112, 150); border:none; color: #FFF;font-size:13px; line-height:23px; border-radius:0; border-right:1px solid rgb(43, 85, 113); color:#d9dadd" type="button" data-toggle="dropdown" onmouseover="search_hardware_show()" onmouseout="search_hardware_none()">硬件 <span class="caret"/></button>
          <ul id="myhardware" onmouseover="search_hardware_show()" onmouseout="search_hardware_none()" class="dropdown-menu" role="menu" aria-labelledby="menu1">
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">Steam 控制器</a>
            </li>
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">Steam 流式盒</a>
            </li>
            <li role="presentation">
              <a role="menuitem" tabindex="-1" href="#">Steam 主机</a>
            </li>
          </ul>
        </div>
        <div class="search_bar">
          <input id="search_bar" name="" type="text" placeholder="搜索商店" onfocus="xieti()" onmouseout="zhengti()" >
          <a href="#"><img style=" border-radius:3px; position: absolute; right: 6px; top: 5px;" src="/src/assets/image/search.jpg" width="25" height="25" ></a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import store from '@/store'

export default{
  name: 'Header',
  data() {
    return {
      name: ''
    }
  },
  created() {
    this.name = store.getters.name
  },
  methods: {
    // 退出登录
    logout() {
      this.$store.dispatch('LogOut').then(res => {
        // this.$router.push('/')
        window.open('/', '_parent')
        this.name = store.getters.name
      })
    },
    shop_hide() {
      const a = document.getElementById('top_shop')
      a.style.display = 'none'
    },
    shop_show() {
      const a = document.getElementById('top_shop')
      a.style.display = 'block'
    },
    socity_show() {
      const a = document.getElementById('top_socity')
      a.style.display = 'block'
    },
    socity_hide() {
      const a = document.getElementById('top_socity')
      a.style.display = 'none'
    },
    xieti() {
      const a = document.getElementById('search_bar')
      a.style.fontStyle = 'normal'
    },
    zhengti() {
      const a = document.getElementById('search_bar')
      a.style.fontStyle = 'italic'
    },
    search_shop_show() {
      const a = document.getElementById('myshop')
      a.style.display = 'block'
    },
    search_shop_none() {
      const a = document.getElementById('myshop')
      a.style.display = 'none'
    },
    search_game_show() {
      const a = document.getElementById('mygame')
      a.style.display = 'block'
    },
    search_game_none() {
      const a = document.getElementById('mygame')
      a.style.display = 'none'
    },
    search_soft_show() {
      const a = document.getElementById('mysoft')
      a.style.display = 'block'
    },
    search_soft_none() {
      const a = document.getElementById('mysoft')
      a.style.display = 'none'
    },
    search_hardware_show() {
      const a = document.getElementById('myhardware')
      a.style.display = 'block'
    },

    search_video_none() {
      const a = document.getElementById('myvideo')
      a.style.display = 'none'
    },

    search_video_show() {
      const a = document.getElementById('myvideo')
      a.style.display = 'block'
    },

    search_hardware_none() {
      const a = document.getElementById('myhardware')
      a.style.display = 'none'
    },
    language_show() {
      const a = document.getElementById('language')
      a.style.display = 'block'
    },

    language_hide() {
      const a = document.getElementById('language')
      a.style.display = 'none'
    }
  }

}
</script>

<style>
  *{ padding:0; margin:0; border:0;}
  li{ list-style: none;}
  #globe_header{ width:100%; height:103px; background:#171a21}
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
</style>
