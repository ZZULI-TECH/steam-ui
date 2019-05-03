<template>
  <div>
    <!--
	顶部导航栏结束   身体部分开始
-->
    <div id="home_page">
      <div id="lunbotu">

        <div class="jingxuan">精选和推荐</div>
        <!--轮播图组 -->
        <div id="swiper-container-first" class="swiper-container">
          <!--轮播图1-->
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="lunbotu_left">
                <a href="#"><img id="h1z1_pic" src="/src/assets/image/h1z1/h1z1(4).jpg" width="616" height="353" ></a>
              </div>
              <div class="lunbotu_right">
                <div class="lunbotu_right_top">H1Z1</div>
                <div class="lunbotu_right_middle">
                  <img src="/src/assets/image/h1z1/h1z1(1).jpg" width="142" height="69" onmouseover="h1z1_pic1()" >
                  <img src="/src/assets/image/h1z1/h1z1(2).jpg" width="142" height="69" onmouseover="h1z1_pic2()" >
                  <img src="/src/assets/image/h1z1/h1z1(3).jpg" width="142" height="69" onmouseover="h1z1_pic3()" >
                  <img src="/src/assets/image/h1z1/h1z1(4).jpg" width="142" height="69" onmouseover="h1z1_pic4()" >
                </div>
                <div class="now_out">现已推出抢先体验</div>
                <div class="hot">
                  <div class="hot_tag">热销商品</div>
                </div>
                <div class="lunbotu_right_bottom">
                  <div class="lunbotu_right_bottom_price">￥68</div>
                  <div class="lunbotu_right_bottom_icon"/>
                </div>
              </div>
            </div>
            <!--轮播图2-->
            <div class="swiper-slide">
              <div class="lunbotu_left">
                <a href="#"><img id="lc_pic" src="/src/assets/image/lost%20castle/lc4.jpg" width="616" height="353" ></a>
              </div>
              <div class="lunbotu_right">
                <div class="lunbotu_right_top">Lost Castle</div>
                <div class="lunbotu_right_middle">
                  <img src="/src/assets/image/lost%20castle/lc4.jpg" width="142" height="69" onmouseover="lc_pic4()" >
                  <img src="/src/assets/image/lost%20castle/lc3.jpg" width="142" height="69" onmouseover="lc_pic3()" >
                  <img src="/src/assets/image/lost%20castle/lc2.jpg" width="142" height="69" onmouseover="lc_pic2()" >
                <img src="/src/assets/image/lost%20castle/lc1.jpg" width="142" height="69" onmouseover="lc_pic1()" > </div>
                <div class="now_out">现已推出</div>
                <div class="hot">
                  <div class="hot_tag">热销商品</div>
                </div>
                <div class="lunbotu_right_bottom">
                  <div class="lunbotu_right_bottom_price">￥33</div>
                  <div class="lunbotu_right_bottom_icon"/>
                </div>
              </div>

            </div>
            <!--轮播图3-->
            <div class="swiper-slide">
              <div class="lunbotu_left">
                <a href="#"><img id="dc_pic" src="/src/assets/image/death%20coming/dc1.jpg" width="616" height="353" ></a>
              </div>
              <div class="lunbotu_right">
                <div class="lunbotu_right_top">Death Coming</div>
                <div class="lunbotu_right_middle">
                  <img src="/src/assets/image/death%20coming/dc1.jpg" width="142" height="69" onmouseover="dc_pic1()" >
                  <img src="/src/assets/image/death%20coming/dc4.jpg" width="142" height="69" onmouseover="dc_pic4()" >
                  <img src="/src/assets/image/death%20coming/dc3.jpg" width="142" height="69" onmouseover="dc_pic3()" >
                  <img src="/src/assets/image/death%20coming/dc2.jpg" width="142" height="69" onmouseover="dc_pic2()" >
                </div>
                <div class="now_out">现已推出</div>
                <div class="hot">
                  <div class="hot_tag">热销商品</div>
                </div>
                <div class="lunbotu_right_bottom">
                  <div class="lunbotu_right_bottom_price">￥28</div>
                  <div class="lunbotu_right_bottom_icon"/>
                </div>
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"/>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev  swiper-button-white"/>
          <div class="swiper-button-next  swiper-button-white"/>
        </div>

        <!--左侧栏-->
        <div class="left_tag">
          <div class="steam_card">
            <img src="/src/assets/欢迎来到%20Steam_files/steamcards_promo.png" alt="" width="213px" height="119px" >
          </div>
          <div class="steam_tag">
            <ul>
              <li class="left_title">按类型浏览</li>
              <li class="left_page">
                <a href="#">免费游玩</a>
              </li>
              <li class="left_page">
                <a href="#">抢先体验</a>
              </li>
              <li class="left_page">
                <a href="#">休闲</a>
              </li>
              <li class="left_page">
                <a href="#">体育</a>
              </li>
              <li class="left_page">
                <a href="#">冒险</a>
              </li>
              <li class="left_page">
                <a href="#">动作</a>
              </li>
              <li class="left_page">
                <a href="#">大型多人在线</a>
              </li>
              <li class="left_page">
                <a href="#">模拟</a>
              </li>
              <li class="left_page">
                <a href="#">独立</a>
              </li>
              <li class="left_page">
                <a href="#">竞速</a>
              </li>
              <li class="left_page">
                <a href="#">策略</a>
              </li>
              <li class="left_page">
                <a href="#">角色扮演</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="lunbotu">
          <div class="jingxuan">特别优惠
            <div class="view_all" >
              <a href="#">浏览所有</a>
            </div>
          </div>
          <!--轮播图组 -->
          <div id="swiper-container-second" class="swiper-container" style="height: 390px; float: left;">

            <div class="swiper-wrapper">

              <!--轮播图1-->
              <div class="swiper-slide">
                <div class="tebieyouhuizu">
                  <img src="/src/assets/欢迎来到%20Steam_files/header(2).jpg" alt="" width="308px;" height="143px;" >
                  <div class="price_count2"/>

                </div>
                <div class="tebieyouhuizu">
                  <img src="/src/assets/欢迎来到%20Steam_files/header(3).jpg" alt="" width="308px;" height="143px;" >
                  <div class="price_count2"/>
                </div>
                <div class="tebieyouhuizu">
                  <img src="/src/assets/欢迎来到%20Steam_files/header(4).jpg" alt="" width="308px;" height="143px;" >
                  <div class="price_count2"/>
                </div>
                <div class="tebieyouhuizu">
                  <img src="/src/assets/欢迎来到%20Steam_files/header(5).jpg" alt="" width="308px;" height="143px;" >
                  <div class="price_count2"/>
                </div>
                <div class="tebieyouhuizu">
                  <img src="/src/assets/欢迎来到%20Steam_files/header(6).jpg" alt="" width="308px;" height="143px;" >
                  <div class="price_count2"/>
                </div>
                <div class="tebieyouhuizu">
                  <img src="/src/assets/欢迎来到%20Steam_files/header(7).jpg" alt="" width="308px;" height="143px;" >
                  <div class="price_count2"/>
                </div>

              </div>
              <!--轮播图2-->
              <div class="swiper-slide">
                <div class="lunbotu2_left">
                  <img src="/src/assets/image/spotlight_image_english.jpg" alt="" height="308px" width="306px" >
                  <div class="teyou">
                    <span class="tebieyouhui">特别优惠
                    </span><br >
                    <span class="teyoushijian">免费周末</span>
                  </div>
                  <div class="price_count"/>
                </div>
                <div class="lunbotu2_left">
                  <img src="/src/assets/image/spotlight_image_schinese(1).jpg" alt="" height="308px" width="306px" >
                  <div class="teyou">
                    <span class="tebieyouhui">特别优惠
                    </span><br >
                    <span class="teyoushijian">特惠于周一上午9点止（太平洋时间）</span>
                  </div>

                </div>
                <div class="lunbotu2_left">
                  <img src="/src/assets/image/spotlight_image_schinese.jpg" alt="" height="308px" width="306px" >
                  <div class="teyou">
                    <span class="tebieyouhui">特别优惠
                    </span><br >
                    <span class="teyoushijian">特惠于周一上午9点止（太平洋时间）</span>
                  </div>
                </div>

              </div>

            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination" style="position: absolute; bottom: -20PX;"/>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev  swiper-button-white" style="position: absolute; right:16PX;  top: 193px"/>
            <div class="swiper-button-next  swiper-button-white" style="position: absolute; right:16PX; top: 193px"/>
          </div>

        </div>
      </div>
    </div>

    <!--底部-->
    <div style="clear:both"/>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Dashboard',
  data() {

  },
  created() {
  },
  mounted() {
    // 轮播图js

    new Swiper('#swiper-container-first', {

      direction: 'horizontal',
      loop: true,

      // 如果需要分页器
      pagination: '.swiper-pagination',

      // 如果需要前进后退按钮
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      paginationClickable: true,
      autoplay: 5000

    })
    new Swiper('#swiper-container-second', {

      direction: 'horizontal',
      loop: true,
      effect: 'flip',

      // 如果需要分页器
      pagination: '.swiper-pagination',

      // 如果需要前进后退按钮
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      paginationClickable: true

    })
  },
  methods: {
    // h1z1图片js
    h1z1_pic1() {
      const a = document.getElementById('h1z1_pic')
      a.src = '/src/assets/image/h1z1/h1z1(1).jpg'
    },
    h1z1_pic2() {
      const a = document.getElementById('h1z1_pic')
      a.src = '/src/assets/image/h1z1/h1z1(2).jpg'
    },

    h1z1_pic3() {
      const a = document.getElementById('h1z1_pic')
      a.src = '/src/assets/image/h1z1/h1z1(3).jpg'
    },

    h1z1_pic4() {
      const a = document.getElementById('h1z1_pic')
      a.src = '/src/assets/image/h1z1/h1z1(4).jpg'
    },

    // lc图片js

    lc_pic1() {
      const a = document.getElementById('lc_pic')
      a.src = '/src/assets/image/lost castle/lc1.jpg'
    },

    lc_pic2() {
      const a = document.getElementById('lc_pic')
      a.src = '/src/assets/image/lost castle/lc2.jpg'
    },

    lc_pic3() {
      const a = document.getElementById('lc_pic')
      a.src = '/src/assets/image/lost castle/lc3.jpg'
    },

    lc_pic4() {
      const a = document.getElementById('lc_pic')
      a.src = '/src/assets/image/lost castle/lc4.jpg'
    },

    // death coming js
    dc_pic1() {
      const a = document.getElementById('dc_pic')
      a.src = '/src/assets/image/death coming/dc1.jpg'
    },

    dc_pic2() {
      const a = document.getElementById('dc_pic')
      a.src = '/src/assets/image/death coming/dc2.jpg'
    },

    dc_pic3() {
      const a = document.getElementById('dc_pic')
      a.src = '/src/assets/image/death coming/dc3.jpg'
    },

    dc_pic4() {
      const a = document.getElementById('dc_pic')
      a.src = '/src/assets/image/death coming/dc4.jpg'
    }

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
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
  #home_page{width: 100%; background-color:#1b2838; float: left;}
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

</style>
