<template>
  <div>
    <div id="globe_header">
      <div class="content">

        <!--标题栏-->

        <div class="logo">
          <span class="logo_holder">
            <a href="http://store.steampowered.com/">
              <img src=" /src/assets/image/globalheader_logo.png" width="176" height="44" >
            </a>
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
          <span style="position:relative">
            <a href="http://store.steampowered.com/" class="dropdown-toggle" data-toggle="dropdown" onmouseover="socity_show()" onmouseout="socity_hide()" >社区</a>
            <ul id="top_socity" onmouseover="socity_show()" onmouseout="socity_hide()" class="dropdown-menu" style="position:absolute;left:-5px;   top:15px; background:#171a21;">
              <li><a href="#" style="color: #999;">主页</a></li>
              <li><a href="#" style="color:#999;">讨论</a></li>
              <li><a href="#" style="color:#999;">创意工坊</a></li>
            </ul>
          </span>
          <a href="#">关于</a>
          <a href="window.close()">客服</a>
        </div>

        <div id="globe_actions">
          <div class="anzhuang">
            <a href="https://steamcdn-a.akamaihd.net/client/installer/SteamSetup.exe">安装Steam</a>
          </div>
          <div class="login"> <span><a href="login.html">登录</a></span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; <span style="position:relative"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" onclick="language_show()" onmouseout="language_hide()" >语言
          <span class="caret"/></a>
            <ul id="language" class="dropdown-menu" style="position:absolute; top: 11px; background:#171a21;" onmouseout="language_hide()" onmouseover="language_show()">
              <li>
                <a href="#" style="color: #999;">中文</a>
              </li>
              <li>
                <a href="#" style="color:#999;">English</a>
              </li>
              <li>
                <a href="#" style="color:#999;">日本语</a>
              </li>
            </ul>
          </span>
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
                <a role="menuitem" tabindex="-1" href="#">最近查看过的</a>
              </li>
              <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#">steam鉴赏家</a>
              </li>
              <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#">最近更新</a>
              </li>
            </ul>
          </div>
          <div class="dropdown" style="float:left">
            <button id="menu1" class="btn btn-default dropdown-toggle" style="background:rgb(55, 112, 150); border:none; color: #FFF;font-size:13px; line-height:23px; border-radius:0; border-right:1px solid rgb(43, 85, 113); color:#d9dadd" type="button" data-toggle="dropdown" onmouseover="search_game_show()" onmouseout="search_game_none()">游戏 <span class="caret"/></button>
            <ul id="mygame" onmouseover="search_game_show()" onmouseout="search_game_none()" class="dropdown-menu" role="menu" aria-labelledby="menu1">
              <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#">免费游玩</a>
              </li>
              <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#">抢先体验</a>
              </li>
              <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#">试玩</a>
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
            <button id="menu1" class="btn btn-default dropdown-toggle" style="background:rgb(55, 112, 150); border:none; color: #FFF;font-size:13px; line-height:23px; border-radius:0; border-right:1px solid rgb(43, 85, 113); color:#d9dadd" type="button" data-toggle="dropdown" onmouseover="search_soft_show()" onmouseout="search_soft_none()">软件 <span class="caret"/></button>
            <ul id="mysoft" onmouseover="search_soft_show()" onmouseout="search_soft_none()" class="dropdown-menu" role="menu" aria-labelledby="menu1">
              <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#">软件中心</a>
              </li>
              <li role="presentation" class="divider"/>
              <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#">动画制作与建模</a>
              </li>
              <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#">实用工具</a>
              </li>
              <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#">教育</a>
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
          <div class="dropdown" style="float:left;">
            <button id="menu1" class="btn btn-default dropdown-toggle" style="background:rgb(55, 112, 150); border:none; color: #FFF;font-size:13px; line-height:23px; border-radius:0; border-right:1px solid rgb(43, 85, 113); color:#d9dadd" type="button" data-toggle="dropdown" onmouseover="search_video_show()" onmouseout="search_video_none()">视频 <span class="caret"/></button>
            <ul id="myvideo" onmouseover="search_video_show()" onmouseout="search_video_none()" class="dropdown-menu" role="menu" aria-labelledby="menu1">
              <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#">视频中心</a>
              </li>
              <li role="presentation" class="divider"/>
              <li role="presentation" class="dropdown-header" style=" color:#2569F8"> 按类型浏览：</li>
              <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#">电影</a>
              </li>
              <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#">章节式</a>
              </li>
              <li role="presentation">
                <a role="menuitem" tabindex="-1" href="#">纪录片</a>
              </li>
            </ul>
          </div>
          <div class="dropdown" style="float:left;">
            <button id="menu1" class="btn btn-default dropdown-toggle" style="background:rgb(55, 112, 150); border:none; color: #FFF;font-size:13px; line-height:23px; border-radius:0; border-right:1px solid rgb(43, 85, 113); color:#d9dadd" type="button" data-toggle="dropdown">新闻</button>
          </div>
          <div class="search_bar">
            <input id="search_bar" name="" type="text" placeholder="搜索商店" onfocus="xieti()" onmouseout="zhengti()" >
            <a href="#"><img style=" border-radius:3px; position: absolute; right: 6px; top: 5px;" src="/src/assets/image/search.jpg" width="25" height="25" ></a>
          </div>
        </div>

      </div>
    </div>
    <div id="cir"/>
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
                <a href="#"><img id="lc_pic" src="/src/assets/image/lost castle/lc4.jpg" width="616" height="353" ></a>
              </div>
              <div class="lunbotu_right">
                <div class="lunbotu_right_top">Lost Castle</div>
                <div class="lunbotu_right_middle">
                  <img src="/src/assets/image/lost castle/lc4.jpg" width="142" height="69" onmouseover="lc_pic4()" >
                  <img src="/src/assets/image/lost castle/lc3.jpg" width="142" height="69" onmouseover="lc_pic3()" >
                  <img src="/src/assets/image/lost castle/lc2.jpg" width="142" height="69" onmouseover="lc_pic2()" >
                <img src="/src/assets/image/lost castle/lc1.jpg" width="142" height="69" onmouseover="lc_pic1()" > </div>
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
                <a href="#"><img id="dc_pic" src="/src/assets/image/death coming/dc1.jpg" width="616" height="353" ></a>
              </div>
              <div class="lunbotu_right">
                <div class="lunbotu_right_top">Death Coming</div>
                <div class="lunbotu_right_middle">
                  <img src="/src/assets/image/death coming/dc1.jpg" width="142" height="69" onmouseover="dc_pic1()" >
                  <img src="/src/assets/image/death coming/dc4.jpg" width="142" height="69" onmouseover="dc_pic4()" >
                  <img src="/src/assets/image/death coming/dc3.jpg" width="142" height="69" onmouseover="dc_pic3()" >
                  <img src="/src/assets/image/death coming/dc2.jpg" width="142" height="69" onmouseover="dc_pic2()" >
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
            <img src="/src/assets/欢迎来到 Steam_files/steamcards_promo.png" alt="" width="213px" height="119px" >
          </div>
          <div class="steam_tag">
            <ul>
              <li class="left_title">礼物卡</li>
              <li class="left_page">
                <a href="#">现已在steam上推出</a>
              </li>
            </ul>
            <ul>
              <li class="left_title">推荐</li>
              <li class="left_page">
                <a href="#">由好友推荐</a>
              </li>
              <li class="left_page">
                <a href="#">由鉴赏家推荐</a>
              </li>
              <li class="left_page">
                <a href="#">标签</a>
              </li>
            </ul>
            <ul>
              <li class="left_title">探索队列</li>
              <li class="left_page">
                <a href="#">推荐</a>
              </li>
              <li class="left_page">
                <a href="#">新品</a>
              </li>
            </ul>
            <ul>
              <li class="left_title">浏览分类</li>
              <li class="left_page">
                <a href="#">热销商品</a>
              </li>
              <li class="left_page">
                <a href="#">最近更新</a>
              </li>
              <li class="left_page">
                <a href="#">新品</a>
              </li>
              <li class="left_page">
                <a href="#">即将推出</a>
              </li>
              <li class="left_page">
                <a href="#">优惠</a>
              </li>
              <li class="left_page">
                <a href="#">虚拟现实</a>
              </li>
              <li class="left_page">
                <a href="#">可支持steam控制器</a>
              </li>
            </ul>
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
                  <img src="/src/assets/欢迎来到 Steam_files/header(2).jpg" alt="" width="308px;" height="143px;" >
                  <div class="price_count2"/>

                </div>
                <div class="tebieyouhuizu">
                  <img src="/src/assets/欢迎来到 Steam_files/header(3).jpg" alt="" width="308px;" height="143px;" >
                  <div class="price_count2"/>
                </div>
                <div class="tebieyouhuizu">
                  <img src="/src/assets/欢迎来到 Steam_files/header(4).jpg" alt="" width="308px;" height="143px;" >
                  <div class="price_count2"/>
                </div>
                <div class="tebieyouhuizu">
                  <img src="/src/assets/欢迎来到 Steam_files/header(5).jpg" alt="" width="308px;" height="143px;" >
                  <div class="price_count2"/>
                </div>
                <div class="tebieyouhuizu">
                  <img src="/src/assets/欢迎来到 Steam_files/header(6).jpg" alt="" width="308px;" height="143px;" >
                  <div class="price_count2"/>
                </div>
                <div class="tebieyouhuizu">
                  <img src="/src/assets/欢迎来到 Steam_files/header(7).jpg" alt="" width="308px;" height="143px;" >
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
      <div id="view_steam">
        <div class="view_steam_in">
          <h2>浏览 STEAM</h2>
          <div class="view_steam_in_container">
            <div class="view_steam_in_tag">
              <a href="#" class="tooltip-show" data-toggle="tooltip" title="最新上架商品">新品</a>
            </div>
            <div class="view_steam_in_tag">
              <a href="#" class="tooltip-show" data-toggle="tooltip" title="限时折扣优惠">优惠</a>
            </div>
            <div class="view_steam_in_tag">
              <a href="#" style="margin-left: 80px;">免费游戏</a>
            </div>
            <div class="view_steam_in_tag" >
              <a href="#" style="margin-left: 70px;">按用户标签</a>
            </div>
          </div>
        </div>

      </div>

      <div id="appreciate">
        <div class="appreciate">
          <h2>STEAM 鉴赏家</h2>
          <div class="view_all" >
            <a href="#" data-toggle="tooltip" data-placement="top" title="点击浏览最受欢迎的steam鉴赏家" >浏览所有</a>
          </div>
          <div class="appreciate_content">
            <p style="float: left; margin-top: 5px;">通过 Steam 鉴赏家探索新游戏。关注鉴赏家并查看其推荐的游戏。</p>

          </div>

          <div class="appreciate_in">
            <div id="tag_bg" class="appreciate_tag" onfocus="tag_color()">
              <div class="appreciate_tag_in">
                <img src="/src/assets/image/6afa58de34f5fcd3f20298ce3d3e37ba969523f5_medium.jpg" width="64px" height="64px" alt="" >
                <span class="appreciate_tag_title">嗶哩嗶哩 - ( ゜- ゜)つロ 乾杯~</span>
                <div class="appreciate_tag_content">独立游戏 艺术</div>
              </div>
            </div>
            <div class="appreciate_tag">
              <div class="appreciate_tag_in">
                <img src="/src/assets/image/3c43891c81b1c7d046cbbb37535291443721e105_medium.jpg" width="64px" height="64px" alt="" >
                <span class="appreciate_tag_title">中国鉴赏家同好会</span>
                <div class="appreciate_tag_content">无丝竹之乱耳,无案牍之劳形</div>
              </div>
            </div>
            <div class="appreciate_tag" style="margin-right: none;">
              <div class="appreciate_tag_in">
                <img src="/src/assets/image/99681a4dffa95cdfed48d556ea2ea9a4d62a3987_medium.jpg" width="64px" height="64px" alt="" >
                <span class="appreciate_tag_title">中国玩家鉴赏组</span>
                <div class="appreciate_tag_content">关注中国玩家鉴赏组，能为你实时推荐自你关注以来大部分大作品的游戏测评，也希望各位拥有大量游戏的中
                </div>
              </div>
            </div>
            <div class="appreciate_tag">
              <div class="appreciate_tag_in">
                <img src="/src/assets/image/bc5eef60172aeb12bd0b32e6b253f111ffa0b672_medium.jpg" width="64px" height="64px" alt="" >
                <span class="appreciate_tag_title">游戏特攻组</span>
                <div class="appreciate_tag_content">欢迎大家关注我们，我们会努力做出更好的游戏评测。感谢大家的订阅~</div>
              </div>
            </div>
            <div class="appreciate_tag">
              <div class="appreciate_tag_in">
                <img src="/src/assets/image/a70c1730f497798bc2cd6bcd7f4cd3047e87b32e_medium.jpg" width="64px" height="64px" alt="" >
                <span class="appreciate_tag_title">散人games</span>
                <div class="appreciate_tag_content">散人games</div>
              </div>
            </div>
            <div class="appreciate_tag" style="margin-right: none;">
              <div class="appreciate_tag_in">
                <img src="/src/assets/image/cf669720867c16b4b2a3b9fa9322311450ceb72d_medium.jpg" width="64px" height="64px" alt="" >
                <span class="appreciate_tag_title">国人交流组【天朝】</span>
                <div class="appreciate_tag_content">这些游戏值得一玩 !</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div id="leg">
      <div class="leg_nav">
        <div class="leg_nav_li">
          <ul>
            <li id="leg_nav_li0" onclick=" leg_nav_li0()" onmouseover="leg_nav_colorshow0()" onmouseout="leg_nav_colorhide0()" style="width: 118px;">新品与热门商品</li>
            <li id="leg_nav_li1" onclick=" leg_nav_li1()" onmouseover="leg_nav_colorshow1()" onmouseout="leg_nav_colorhide1()" style="width: 80px;">热销商品</li>
            <li id="leg_nav_li2" onclick=" leg_nav_li2()" onmouseover="leg_nav_colorshow2()" onmouseout="leg_nav_colorhide2()" style="width: 80px;">即将推出</li>
            <li id="leg_nav_li3" onclick=" leg_nav_li3()" onmouseover="leg_nav_colorshow3()" onmouseout="leg_nav_colorhide3()" style="width: 54px;">优惠</li>
          </ul>
        </div>
        <div id="leg_nav_content1">
          <div id="leg_nav_content1_in" class="leg_nav_content1_in" onmouseover="content_inshow1()" onmouseout="content_inhide1()">
            <a href="detal.html"><img src="/src/assets/image/end/end5.jpg" width="184px" height="69px"></a>
            <div class="leg_nav_content1_in_txt">
              <div class="leg_nav_content1_in_title">The End Is Nigh</div>
              <div class="leg_nav_content1_in_icon">
                <img src="/src/assets/image/icon_platform_win.png" alt="" >
              </div>
              <div class="leg_nav_content1_in_content">
                动作，冒险
              </div>

              <div id="leg_nav_content1_right" class="leg_nav_content1_right1">
                <div class="leg_nav_content1_right1_in">
                  <div class="leg_nav_content1_right1_in_title">The End Is Nigh</div>
                  <div class="leg_nav_content1_right1_in_comment">
                    <div class="leg_nav_content1_right1_in_comment_title">总体用户评测</div>
                    <div class="leg_nav_content1_right1_in_comment_content">好评如潮</div>
                    <img src="/src/assets/image/end/end1.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/end/end2.jpg"alt="" width="273px" height="150px">
                    <img src="/src/assets/image/end/end3.jpg"alt="" width="273px" height="150px">
                    <img src="/src/assets/image/end/end4.jpg"alt="" width="273px" height="150px">
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div id="leg_nav_content2_in" class="leg_nav_content1_in" onmouseover="content_inshow2()" onmouseout="content_inhide2()">
            <img src="/src/assets/image/capsule_184x69(1).jpg" alt="" >
            <div class="leg_nav_content1_in_txt">
              <div class="leg_nav_content1_in_title">Sky Force</div>
              <div class="leg_nav_content1_in_icon">
                <img src="/src/assets/image/icon_platform_win.png" alt="" >
              </div>
              <div class="leg_nav_content1_in_content">
                动作，独立，射击
              </div>

              <div id="leg_nav_content2_right" style="position: absolute;top: -72px; display: none;" class="leg_nav_content1_right1" >
                <div class="leg_nav_content1_right1_in">
                  <div class="leg_nav_content1_right1_in_title">Sky Force</div>
                  <div class="leg_nav_content1_right1_in_comment">
                    <div class="leg_nav_content1_right1_in_comment_title">总体用户评测</div>
                    <div class="leg_nav_content1_right1_in_comment_content">好评如潮</div>
                    <img src="/src/assets/image/sky/sky1.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/sky/sky2.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/sky/sky3.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/sky/sky4.jpg" alt="" width="273px" height="150px">
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div id="leg_nav_content3_in" class="leg_nav_content1_in" onmouseover="content_inshow3()" onmouseout="content_inhide3()">
            <img src="/src/assets/image/capsule_184x69(2).jpg" alt="" >
            <div class="leg_nav_content1_in_txt">
              <div class="leg_nav_content1_in_title">The House Of Da Vinic</div>
              <div class="leg_nav_content1_in_icon">
                <img src="/src/assets/image/icon_platform_win.png" alt="" >
              </div>
              <div class="leg_nav_content1_in_content">
                冒险，独立，策略
              </div>

              <div id="leg_nav_content3_right" style="position: absolute;top: -144px; display: none;" class="leg_nav_content1_right1" >
                <div class="leg_nav_content1_right1_in">
                  <div class="leg_nav_content1_right1_in_title">The House Of Da Vinic</div>
                  <div class="leg_nav_content1_right1_in_comment">
                    <div class="leg_nav_content1_right1_in_comment_title">总体用户评测</div>
                    <div class="leg_nav_content1_right1_in_comment_content">好评如潮</div>
                    <img src="/src/assets/image/house/house1.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/house/house2.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/house/house3.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/house/house4.jpg" alt="" width="273px" height="150px">
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div id="leg_nav_content4_in" class="leg_nav_content1_in" onmouseover="content_inshow4()" onmouseout="content_inhide4()">
            <img src="/src/assets/image/capsule_184x69(3).jpg" alt="" >
            <div class="leg_nav_content1_in_txt">
              <div class="leg_nav_content1_in_title">且听琴语</div>
              <div class="leg_nav_content1_in_icon">
                <img src="/src/assets/image/icon_platform_win.png" alt="" >
              </div>
              <div class="leg_nav_content1_in_content">
                视觉，恋爱，色情内容，裸露
              </div>

              <div id="leg_nav_content4_right" style="position: absolute;top: -216px; display: none;" class="leg_nav_content1_right1" >
                <div class="leg_nav_content1_right1_in">
                  <div class="leg_nav_content1_right1_in_title">且听琴语</div>
                  <div class="leg_nav_content1_right1_in_comment">
                    <div class="leg_nav_content1_right1_in_comment_title">总体用户评测</div>
                    <div class="leg_nav_content1_right1_in_comment_content">好评如潮</div>
                    <img src="/src/assets/image/gal/gal1.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/gal/gal2.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/gal/gal3.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/gal/gal4.jpg" alt="" width="273px" height="150px">
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div id="leg_nav_content5_in" class="leg_nav_content1_in" onmouseover="content_inshow5()" onmouseout="content_inhide5()">
            <img src="/src/assets/image/capsule_184x69(4).jpg" alt="" >
            <div class="leg_nav_content1_in_txt">
              <div class="leg_nav_content1_in_title">CS2D</div>
              <div class="leg_nav_content1_in_icon">
                <img src="/src/assets/image/icon_platform_win.png" alt="" >
              </div>
              <div class="leg_nav_content1_in_content">
                免费，动作独立，休闲
              </div>
              <div id="leg_nav_content5_right" style="position: absolute;top: -288px; display: none;" class="leg_nav_content1_right1" >
                <div class="leg_nav_content1_right1_in">
                  <div class="leg_nav_content1_right1_in_title">CS2D</div>
                  <div class="leg_nav_content1_right1_in_comment">
                    <div class="leg_nav_content1_right1_in_comment_title">总体用户评测</div>
                    <div class="leg_nav_content1_right1_in_comment_content">好评如潮</div>
                    <img src="/src/assets/image/cs/cs1.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/cs/cs2.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/cs/cs3.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/cs/cs4.jpg" alt="" width="273px" height="150px">
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div id="leg_nav_content6_in" class="leg_nav_content1_in" onmouseover="content_inshow6()" onmouseout="content_inhide6()">
            <img src="/src/assets/image/capsule_184x69(5).jpg">
            <div class="leg_nav_content1_in_txt">
              <div class="leg_nav_content1_in_title">Magical Squash</div>
              <div class="leg_nav_content1_in_icon">
                <img src="/src/assets/image/icon_platform_win.png" alt="" >
              </div>
              <div class="leg_nav_content1_in_content">
                虚拟现实，动作，独立
              </div>

              <div id="leg_nav_content6_right" style="position: absolute;top: -360px; display: none;" class="leg_nav_content1_right1" >
                <div class="leg_nav_content1_right1_in">
                  <div class="leg_nav_content1_right1_in_title">Magical Squash</div>
                  <div class="leg_nav_content1_right1_in_comment">
                    <div class="leg_nav_content1_right1_in_comment_title">总体用户评测</div>
                    <div class="leg_nav_content1_right1_in_comment_content">好评如潮</div>
                    <img src="/src/assets/image/mag/mag1.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/mag/mag2.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/mag/mag3.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/mag/mag4.jpg" alt="" width="273px" height="150px">
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div id="leg_nav_content7_in" class="leg_nav_content1_in" onmouseover="content_inshow7()" onmouseout="content_inhide7()">
            <img src="/src/assets/image/capsule_184x69(6).jpg">
            <div class="leg_nav_content1_in_txt">
              <div class="leg_nav_content1_in_title">Football Manager 2018</div>
              <div class="leg_nav_content1_in_icon">
                <img src="/src/assets/image/icon_platform_win.png" alt="" >
              </div>
              <div class="leg_nav_content1_in_content">
                体育，模拟，足球
              </div>
              <div id="leg_nav_content7_right" style="position: absolute;top: -432px; display: none;" class="leg_nav_content1_right1" >
                <div class="leg_nav_content1_right1_in">
                  <div class="leg_nav_content1_right1_in_title">Football Manager 2018</div>
                  <div class="leg_nav_content1_right1_in_comment">
                    <div class="leg_nav_content1_right1_in_comment_title">总体用户评测</div>
                    <div class="leg_nav_content1_right1_in_comment_content">好评如潮</div>
                    <img src="/src/assets/image/foot/foot1.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/foot/foot2.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/foot/foot3.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/foot/foot4.jpg" alt="" width="273px" height="150px">
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div id="leg_nav_content8_in" class="leg_nav_content1_in" onmouseover="content_inshow8()" onmouseout="content_inhide8()">
            <img src="/src/assets/image/capsule_184x69(7).jpg">
            <div class="leg_nav_content1_in_txt">
              <div class="leg_nav_content1_in_title">Battlerite</div>
              <div class="leg_nav_content1_in_icon">
                <img src="/src/assets/image/icon_platform_win.png" alt="" >
              </div>
              <div class="leg_nav_content1_in_content">
                多人，竞技，免费游戏
              </div>
              <div id="leg_nav_content8_right" style="position: absolute;top: -504px; display: none;" class="leg_nav_content1_right1" >
                <div class="leg_nav_content1_right1_in">
                  <div class="leg_nav_content1_right1_in_title">Battlerite</div>
                  <div class="leg_nav_content1_right1_in_comment">
                    <div class="leg_nav_content1_right1_in_comment_title">总体用户评测</div>
                    <div class="leg_nav_content1_right1_in_comment_content">好评如潮</div>
                    <img src="/src/assets/image/batt/batt1.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/batt/batt2.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/batt/batt3.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/batt/batt4.jpg" alt="" width="273px" height="150px">
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div id="leg_nav_content9_in" class="leg_nav_content1_in" onmouseover="content_inshow9()" onmouseout="content_inhide9()">
            <img src="/src/assets/image/capsule_184x69(8).jpg">
            <div class="leg_nav_content1_in_txt">
              <div class="leg_nav_content1_in_title">Hand of Fate 2</div>
              <div class="leg_nav_content1_in_icon">
                <img src="/src/assets/image/icon_platform_win.png" alt="" >
              </div>
              <div class="leg_nav_content1_in_content">
                角色扮演，独立，动作，卡牌
              </div>
              <div id="leg_nav_content9_right" style="position: absolute;top: -576px; display: none;" class="leg_nav_content1_right1" >
                <div class="leg_nav_content1_right1_in">
                  <div class="leg_nav_content1_right1_in_title">Hand of Fate 2</div>
                  <div class="leg_nav_content1_right1_in_comment">
                    <div class="leg_nav_content1_right1_in_comment_title">总体用户评测</div>
                    <div class="leg_nav_content1_right1_in_comment_content">好评如潮</div>
                    <img src="/src/assets/image/hand/hand1.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/hand/hand2.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/hand/han3.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/hand/hand4.jpg" alt="" width="273px" height="150px">
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div id="leg_nav_content10_in" class="leg_nav_content1_in" onmouseover="content_inshow10()" onmouseout="content_inhide10()">
            <img src="/src/assets/image/capsule_184x69.jpg">
            <div class="leg_nav_content1_in_txt">
              <div class="leg_nav_content1_in_title">Crimson Imprint plus -Nonexistent Christmas-</div>
              <div class="leg_nav_content1_in_icon">
                <img src="/src/assets/image/icon_platform_win.png" alt="" >
              </div>
              <div class="leg_nav_content1_in_content">
                裸露，独立，休闲，冒险
              </div>
              <div id="leg_nav_content10_right" style="position: absolute;top: -648px; display: none;" class="leg_nav_content1_right1" >
                <div class="leg_nav_content1_right1_in">
                  <div class="leg_nav_content1_right1_in_title">Crimson Imprint plus -Nonexistent Christmas-</div>
                  <div class="leg_nav_content1_right1_in_comment">
                    <div class="leg_nav_content1_right1_in_comment_title">总体用户评测</div>
                    <div class="leg_nav_content1_right1_in_comment_content">好评如潮</div>
                    <img src="/src/assets/image/cri/cri1.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/cri/cri2.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/cri/cri3.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/cri/cri4.jpg" alt="" width="273px" height="150px">
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div id="leg_nav_content2" style="display: none;">
          <div id="leg_nav_content01_in" class="leg_nav_content1_in" onmouseover="content_inshow01()" onmouseout="content_inhide01()">
            <img src="/src/assets/image/capsule_184x69_schinese.jpg">
            <div class="leg_nav_content1_in_txt">
              <div class="leg_nav_content1_in_title">家有大猫</div>
              <div class="leg_nav_content1_in_icon">
                <img src="/src/assets/image/icon_platform_win.png" alt="" >
              </div>
              <div class="leg_nav_content1_in_content">
                免费，视觉，恋爱
              </div>

              <div id="leg_nav_content01_right" class="leg_nav_content1_right1">
                <div class="leg_nav_content1_right1_in">
                  <div class="leg_nav_content1_right1_in_title">家有大猫</div>
                  <div class="leg_nav_content1_right1_in_comment">
                    <div class="leg_nav_content1_right1_in_comment_title">总体用户评测</div>
                    <div class="leg_nav_content1_right1_in_comment_content">好评如潮</div>
                    <img src="/src/assets/image/cat/cat1.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/cat/cat2.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/cat/cat3.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/cat/cat4.jpg" alt="" width="273px" height="150px">
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div id="leg_nav_content03_in" class="leg_nav_content1_in" onmouseover="content_inshow03()" onmouseout="content_inhide03()">
            <img src="/src/assets/image/capsule_184x69(2).jpg" alt="" >
            <div class="leg_nav_content1_in_txt">
              <div class="leg_nav_content1_in_title">The House Of Da Vinic</div>
              <div class="leg_nav_content1_in_icon">
                <img src="/src/assets/image/icon_platform_win.png" alt="" >
              </div>
              <div class="leg_nav_content1_in_content">
                冒险，独立，策略
              </div>

              <div id="leg_nav_content03_right" style="position: absolute;top: -72px; display: none;" class="leg_nav_content1_right1" >
                <div class="leg_nav_content1_right1_in">
                  <div class="leg_nav_content1_right1_in_title">The House Of Da Vinic</div>
                  <div class="leg_nav_content1_right1_in_comment">
                    <div class="leg_nav_content1_right1_in_comment_title">总体用户评测</div>
                    <div class="leg_nav_content1_right1_in_comment_content">好评如潮</div>
                    <img src="/src/assets/image/house/house1.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/house/house2.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/house/house3.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/house/house4.jpg" alt="" width="273px" height="150px">
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div id="leg_nav_content04_in" class="leg_nav_content1_in" onmouseover="content_inshow04()" onmouseout="content_inhide04()">
            <img src="/src/assets/image/capsule_184x69(3).jpg" alt="" >
            <div class="leg_nav_content1_in_txt">
              <div class="leg_nav_content1_in_title">且听琴语</div>
              <div class="leg_nav_content1_in_icon">
                <img src="/src/assets/image/icon_platform_win.png" alt="" >
              </div>
              <div class="leg_nav_content1_in_content">
                视觉，恋爱，色情内容，裸露
              </div>

              <div id="leg_nav_content04_right" style="position: absolute;top: -144px; display: none;" class="leg_nav_content1_right1" >
                <div class="leg_nav_content1_right1_in">
                  <div class="leg_nav_content1_right1_in_title">且听琴语</div>
                  <div class="leg_nav_content1_right1_in_comment">
                    <div class="leg_nav_content1_right1_in_comment_title">总体用户评测</div>
                    <div class="leg_nav_content1_right1_in_comment_content">好评如潮</div>
                    <img src="/src/assets/image/gal/gal1.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/gal/gal2.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/gal/gal3.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/gal/gal4.jpg" alt="" width="273px" height="150px">
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div id="leg_nav_content02_in" class="leg_nav_content1_in" onmouseover="content_inshow02()" onmouseout="content_inhide02()">
            <img src="/src/assets/image/capsule_184x69(1).jpg" alt="" >
            <div class="leg_nav_content1_in_txt">
              <div class="leg_nav_content1_in_title">Sky Force</div>
              <div class="leg_nav_content1_in_icon">
                <img src="/src/assets/image/icon_platform_win.png" alt="" >
              </div>
              <div class="leg_nav_content1_in_content">
                动作，独立，射击
              </div>

              <div id="leg_nav_content02_right" style="position: absolute;top: -216px; display: none;" class="leg_nav_content1_right1" >
                <div class="leg_nav_content1_right1_in">
                  <div class="leg_nav_content1_right1_in_title">Sky Force</div>
                  <div class="leg_nav_content1_right1_in_comment">
                    <div class="leg_nav_content1_right1_in_comment_title">总体用户评测</div>
                    <div class="leg_nav_content1_right1_in_comment_content">好评如潮</div>
                    <img src="/src/assets/image/sky/sky1.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/sky/sky2.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/sky/sky3.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/sky/sky4.jpg" alt="" width="273px" height="150px">
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div id="leg_nav_content06_in" class="leg_nav_content1_in" onmouseover="content_inshow06()" onmouseout="content_inhide06()">
            <img src="/src/assets/image/capsule_184x69(5).jpg">
            <div class="leg_nav_content1_in_txt">
              <div class="leg_nav_content1_in_title">Magical Squash</div>
              <div class="leg_nav_content1_in_icon">
                <img src="/src/assets/image/icon_platform_win.png" alt="" >
              </div>
              <div class="leg_nav_content1_in_content">
                虚拟现实，动作，独立
              </div>

              <div id="leg_nav_content06_right" style="position: absolute;top: -288px; display: none;" class="leg_nav_content1_right1" >
                <div class="leg_nav_content1_right1_in">
                  <div class="leg_nav_content1_right1_in_title">Magical Squash</div>
                  <div class="leg_nav_content1_right1_in_comment">
                    <div class="leg_nav_content1_right1_in_comment_title">总体用户评测</div>
                    <div class="leg_nav_content1_right1_in_comment_content">好评如潮</div>
                    <img src="/src/assets/image/mag/mag1.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/mag/mag2.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/mag/mag3.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/mag/mag4.jpg" alt="" width="273px" height="150px">
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div id="leg_nav_content05_in" class="leg_nav_content1_in" onmouseover="content_inshow05()" onmouseout="content_inhide05()">
            <img src="/src/assets/image/capsule_184x69(4).jpg" alt="" >
            <div class="leg_nav_content1_in_txt">
              <div class="leg_nav_content1_in_title">CS2D</div>
              <div class="leg_nav_content1_in_icon">
                <img src="/src/assets/image/icon_platform_win.png" alt="" >
              </div>
              <div class="leg_nav_content1_in_content">
                免费，动作独立，休闲
              </div>
              <div id="leg_nav_content05_right" style="position: absolute;top: -360px; display: none;" class="leg_nav_content1_right1" >
                <div class="leg_nav_content1_right1_in">
                  <div class="leg_nav_content1_right1_in_title">CS2D</div>
                  <div class="leg_nav_content1_right1_in_comment">
                    <div class="leg_nav_content1_right1_in_comment_title">总体用户评测</div>
                    <div class="leg_nav_content1_right1_in_comment_content">好评如潮</div>
                    <img src="/src/assets/image/cs/cs1.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/cs/cs2.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/cs/cs3.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/cs/cs4.jpg" alt="" width="273px" height="150px">
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div id="leg_nav_content010_in" class="leg_nav_content1_in" onmouseover="content_inshow010()" onmouseout="content_inhide010()">
            <img src="/src/assets/image/capsule_184x69.jpg">
            <div class="leg_nav_content1_in_txt">
              <div class="leg_nav_content1_in_title">Crimson Imprint plus -Nonexistent Christmas-</div>
              <div class="leg_nav_content1_in_icon">
                <img src="/src/assets/image/icon_platform_win.png" alt="" >
              </div>
              <div class="leg_nav_content1_in_content">
                裸露，独立，休闲，冒险
              </div>
              <div id="leg_nav_content010_right" style="position: absolute;top: -432px; display: none;" class="leg_nav_content1_right1" >
                <div class="leg_nav_content1_right1_in">
                  <div class="leg_nav_content1_right1_in_title">Crimson Imprint plus -Nonexistent Christmas-</div>
                  <div class="leg_nav_content1_right1_in_comment">
                    <div class="leg_nav_content1_right1_in_comment_title">总体用户评测</div>
                    <div class="leg_nav_content1_right1_in_comment_content">好评如潮</div>
                    <img src="/src/assets/image/cri/cri1.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/cri/cri2.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/cri/cri3.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/cri/cri4.jpg" alt="" width="273px" height="150px">
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div id="leg_nav_content07_in" class="leg_nav_content1_in" onmouseover="content_inshow07()" onmouseout="content_inhide07()">
            <img src="/src/assets/image/capsule_184x69(6).jpg">
            <div class="leg_nav_content1_in_txt">
              <div class="leg_nav_content1_in_title">Football Manager 2018</div>
              <div class="leg_nav_content1_in_icon">
                <img src="/src/assets/image/icon_platform_win.png" alt="" >
              </div>
              <div class="leg_nav_content1_in_content">
                体育，模拟，足球
              </div>
              <div id="leg_nav_content07_right" style="position: absolute;top: -504px; display: none;" class="leg_nav_content1_right1" >
                <div class="leg_nav_content1_right1_in">
                  <div class="leg_nav_content1_right1_in_title">Football Manager 2018</div>
                  <div class="leg_nav_content1_right1_in_comment">
                    <div class="leg_nav_content1_right1_in_comment_title">总体用户评测</div>
                    <div class="leg_nav_content1_right1_in_comment_content">好评如潮</div>
                    <img src="/src/assets/image/foot/foot1.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/foot/foot2.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/foot/foot3.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/foot/foot4.jpg" alt="" width="273px" height="150px">
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div id="leg_nav_content08_in" class="leg_nav_content1_in" onmouseover="content_inshow08()" onmouseout="content_inhide08()">
            <img src="/src/assets/image/capsule_184x69(7).jpg">
            <div class="leg_nav_content1_in_txt">
              <div class="leg_nav_content1_in_title">Battlerite</div>
              <div class="leg_nav_content1_in_icon">
                <img src="/src/assets/image/icon_platform_win.png" alt="" >
              </div>
              <div class="leg_nav_content1_in_content">
                多人，竞技，免费游戏
              </div>
              <div id="leg_nav_content08_right" style="position: absolute;top: -576px; display: none;" class="leg_nav_content1_right1" >
                <div class="leg_nav_content1_right1_in">
                  <div class="leg_nav_content1_right1_in_title">Battlerite</div>
                  <div class="leg_nav_content1_right1_in_comment">
                    <div class="leg_nav_content1_right1_in_comment_title">总体用户评测</div>
                    <div class="leg_nav_content1_right1_in_comment_content">好评如潮</div>
                    <img src="/src/assets/image/batt/batt1.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/batt/batt2.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/batt/batt3.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/batt/batt4.jpg" alt="" width="273px" height="150px">
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div id="leg_nav_content09_in" class="leg_nav_content1_in" onmouseover="content_inshow09()" onmouseout="content_inhide09()">
            <img src="/src/assets/image/capsule_184x69(8).jpg">
            <div class="leg_nav_content1_in_txt">
              <div class="leg_nav_content1_in_title">Hand of Fate 2</div>
              <div class="leg_nav_content1_in_icon">
                <img src="/src/assets/image/icon_platform_win.png" alt="" >
              </div>
              <div class="leg_nav_content1_in_content">
                角色扮演，独立，动作，卡牌
              </div>
              <div id="leg_nav_content09_right" style="position: absolute;top: -648px; display: none;" class="leg_nav_content1_right1" >
                <div class="leg_nav_content1_right1_in">
                  <div class="leg_nav_content1_right1_in_title">Hand of Fate 2</div>
                  <div class="leg_nav_content1_right1_in_comment">
                    <div class="leg_nav_content1_right1_in_comment_title">总体用户评测</div>
                    <div class="leg_nav_content1_right1_in_comment_content">好评如潮</div>
                    <img src="/src/assets/image/hand/hand1.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/hand/hand2.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/hand/han3.jpg" alt="" width="273px" height="150px">
                    <img src="/src/assets/image/hand/hand4.jpg" alt="" width="273px" height="150px">
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

    <div id="black">
      <div class="black_in">
        <div class="black_in_line">
          <div class="black_in_line_box">
            <div class="black_in_line_box_title">正在寻找推荐？</div>
            <div class="black_in_line_box_cnt">登录以查看个性化推荐</div>
            <div style="clear: both;"/>
            <div class="login_bottom"><a href="login.html">登录</a></div>
            <div class="black_in_line_box_cnt">或者<a style="color: #FFFFFF; " href="#">注册</a>并免费加入steam</div>
          </div>
        </div>
      </div>
    </div>
    <!--底部-->
    <div style="clear:both"/>
    <div class="bottom">

      <div class="bottom_in">
        <div style="float:left">
          <div class="supernav_cotainer_b"> <span style="position:relative"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" onmouseover="shop_sho()" onmouseout="shop_hid()" >商品类型</a>
            <ul id="top_sho" onmouseout="shop_hid()" onmouseover="shop_sho()" style="position:absolute; display:none;" >
              <li>血腥</li>
              <li>暴力</li>
              <li>电影</li>
              <li>裸露</li>

            </ul>
          </span> <span style="position:relative"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" onmouseover="socity_sho_d()" onmouseout="socity_hid_d()" >关于 steam</a>
            <ul id="top_socit_d" onmouseover="socity_sho_d()" onmouseout="socity_hid_d()" style="display:none;position:absolute;">
              <li>什么是 Steam</li>
              <li>在 Steam 上送礼</li>
              <li>Steam 社区</li>
            </ul>
            <span style="position:relative"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" onmouseover="shop_sho_a()" onmouseout="shop_hid_a()" >关于 VALVE</a>
              <ul id="top_sho_a" onmouseout="shop_hid_a()" onmouseover="shop_sho_a()" style="display:none;position:absolute;" >
                <li>关于 Valve</li>
                <li>商业解决方案</li>
                <li>Steanworks</li>
                <li>工作</li>

              </ul>
              <span style="position:relative"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" onmouseover="shop_sho_b()" onmouseout="shop_hid_b()" >帮助</a>
                <ul id="top_sho_b" onmouseout="shop_hid_b()" onmouseover="shop_sho_b()" style="display:none;position:absolute;" >
                  <li>客服</li>
                  <li>论坛</li>
                  <li>统计</li>

                </ul>
                <span style="position:relative"> <a href="#" class="dropdown-toggle" data-toggle="dropdown" onmouseover="shop_sho_c()" onmouseout="shop_hid_c()" >动态信息</a>
                  <ul id="top_sho_c" onmouseout="shop_hid_c()" onmouseover="shop_sho_c()" style=" display:none;position:absolute;" >
                    <li>Steam 新闻</li>
                    <li>游戏发布</li>
                    <li>每日特惠</li>
                  </ul>

          </span></span></span></span></div>
          <div class="bottom_word">
            <img style="float:left" src="/src/assets/image/btm_w.jpg" width="101" height="28" >
            <p>©2017 Valve Corporation。保留所有权利。所有商标均为其在美国及其它国家/地区的各自持有者所有。<br >
              所有的价格均已包含增值税（如适用）。   隐私政策   |   法律信息   |   Steam 订户协议   |   退款</p>

            <div style="clear:both"/>
            <p>关于 Valve   |  Steamworks   |  工作   |  Steam 分销   |  礼物卡   |   Steam   |   @steam_games</p>
        </div>      </div>
      <img style="float:left; margin-top:50px;" src="/src/assets/image/logo_steam_footer.png" width="92" height="26" >  </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Dashboard',
  data() {

  },
  created() {
    const a = document.getElementById('leg_nav_li0')
    const b = document.getElementById('leg_nav_content1')
    a.style.backgroundColor = '#2a475e'
    a.style.color = '#FFFFFF'
    b.style.display = 'block'
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

    // language

    language_show() {
      const a = document.getElementById('language')
      a.style.display = 'block'
    },

    language_hide() {
      const a = document.getElementById('language')
      a.style.display = 'none'
    },
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
    },

    // 标签li颜色

    leg_nav_li0() {
      const a = document.getElementById('leg_nav_li0')
      const b = document.getElementById('leg_nav_li1')
      const c = document.getElementById('leg_nav_li2')
      const d = document.getElementById('leg_nav_li3')
      const e = document.getElementById('leg_nav_content1')
      const f = document.getElementById('leg_nav_content2')
      a.style.backgroundColor = '#2a475e'
      a.style.color = '#FFFFFF'
      b.style.background = 'none'
      b.style.color = '#4f94bc'
      c.style.background = 'none'
      c.style.color = '#4f94bc'
      d.style.background = 'none'
      d.style.color = '#4f94bc'
      e.style.display = 'block'
      f.style.display = 'none'
    },
    leg_nav_li1() {
      const a = document.getElementById('leg_nav_li0')
      const b = document.getElementById('leg_nav_li1')
      const c = document.getElementById('leg_nav_li2')
      const d = document.getElementById('leg_nav_li3')
      const e = document.getElementById('leg_nav_content1')
      const f = document.getElementById('leg_nav_content2')
      b.style.backgroundColor = '#2a475e'
      b.style.color = '#FFFFFF'
      a.style.background = 'none'
      a.style.color = '#4f94bc'
      c.style.background = 'none'
      c.style.color = '#4f94bc'
      d.style.background = 'none'
      d.style.color = '#4f94bc'
      e.style.display = 'none'
      f.style.display = 'block'
    },
    leg_nav_li2() {
      const a = document.getElementById('leg_nav_li0')
      const b = document.getElementById('leg_nav_li1')
      const c = document.getElementById('leg_nav_li2')
      const d = document.getElementById('leg_nav_li3')
      c.style.backgroundColor = '#2a475e'
      c.style.color = '#FFFFFF'
      b.style.background = 'none'
      b.style.color = '#4f94bc'
      a.style.background = 'none'
      a.style.color = '#4f94bc'
      d.style.background = 'none'
      d.style.color = '#4f94bc'
    },

    leg_nav_li3() {
      const a = document.getElementById('leg_nav_li0')
      const b = document.getElementById('leg_nav_li1')
      const c = document.getElementById('leg_nav_li2')
      const d = document.getElementById('leg_nav_li3')
      d.style.backgroundColor = '#2a475e'
      d.style.color = '#FFFFFF'
      b.style.background = 'none'
      b.style.color = '#4f94bc'
      c.style.background = 'none'
      c.style.color = '#4f94bc'
      a.style.background = 'none'
      a.style.color = '#4f94bc'
    },

    leg_nav_colorshow0() {
      const a = document.getElementById('leg_nav_li0')
      a.style.color = '#FFFFFF'
    },

    leg_nav_colorhide0() {
      const a = document.getElementById('leg_nav_li0')
      a.style.color = '#4f94bc'
    },

    leg_nav_colorshow1() {
      const a = document.getElementById('leg_nav_li1')
      a.style.color = '#FFFFFF'
    },
    leg_nav_colorhide1() {
      const a = document.getElementById('leg_nav_li1')
      a.style.color = '#4f94bc'
    },

    leg_nav_colorshow2() {
      const a = document.getElementById('leg_nav_li2')
      a.style.color = '#FFFFFF'
    },

    leg_nav_colorhide2() {
      const a = document.getElementById('leg_nav_li2')
      a.style.color = '#4f94bc'
    },

    leg_nav_colorshow3() {
      const a = document.getElementById('leg_nav_li3')
      a.style.color = '#FFFFFF'
    },

    leg_nav_colorhide3() {
      const a = document.getElementById('leg_nav_li3')
      a.style.color = '#4f94bc'
    },

    // window.onload=  (){
    //   const  a=document.getElementById("leg_nav_li0")
    //   const  b=document.getElementById("leg_nav_content1")
    //   a.style.backgroundColor="#2a475e"
    //   a.style.color="#FFFFFF"
    //   b.style.display = "block"
    //
    // },

    content_inhide1() {
      const a = document.getElementById('leg_nav_content1_right')
      const b = document.getElementById('leg_nav_content1_in')

      b.style.background = '#29384b'
    },
    content_inshow1() {
      const a = document.getElementById('leg_nav_content1_right')
      const b = document.getElementById('leg_nav_content1_in')
      a.style.display = 'block'
      b.style.background = '#95bbd4'
    },

    content_inhide2() {
      const a = document.getElementById('leg_nav_content2_right')
      a.style.display = 'none'
      const b = document.getElementById('leg_nav_content2_in')
      b.style.background = '#29384b'
    },
    content_inshow2() {
      const a = document.getElementById('leg_nav_content2_right')
      a.style.display = 'block'
      const b = document.getElementById('leg_nav_content2_in')
      b.style.background = '#95bbd4'
    },

    content_inhide3() {
      const a = document.getElementById('leg_nav_content3_right')
      a.style.display = 'none'
      const b = document.getElementById('leg_nav_content3_in')
      b.style.background = '#29384b'
    },
    content_inshow3() {
      const a = document.getElementById('leg_nav_content3_right')
      a.style.display = 'block'
      const b = document.getElementById('leg_nav_content3_in')
      b.style.background = '#95bbd4'
    },

    content_inhide4() {
      const a = document.getElementById('leg_nav_content4_right')
      a.style.display = 'none'
      const b = document.getElementById('leg_nav_content4_in')
      b.style.background = '#29384b'
    },
    content_inshow4() {
      const a = document.getElementById('leg_nav_content4_right')
      a.style.display = 'block'
      const b = document.getElementById('leg_nav_content4_in')
      b.style.background = '#95bbd4'
    },

    content_inhide5() {
      const a = document.getElementById('leg_nav_content5_right')
      a.style.display = 'none'
      const b = document.getElementById('leg_nav_content5_in')
      b.style.background = '#29384b'
    },
    content_inshow5() {
      const a = document.getElementById('leg_nav_content5_right')
      a.style.display = 'block'
      const b = document.getElementById('leg_nav_content5_in')
      b.style.background = '#95bbd4'
    },

    content_inhide6() {
      const a = document.getElementById('leg_nav_content6_right')
      a.style.display = 'none'
      const b = document.getElementById('leg_nav_content6_in')
      b.style.background = '#29384b'
    },
    content_inshow6() {
      const a = document.getElementById('leg_nav_content6_right')
      a.style.display = 'block'
      const b = document.getElementById('leg_nav_content6_in')
      b.style.background = '#95bbd4'
    },

    content_inhide7() {
      const a = document.getElementById('leg_nav_content7_right')
      a.style.display = 'none'
      const b = document.getElementById('leg_nav_content7_in')
      b.style.background = '#29384b'
    },
    content_inshow7() {
      const a = document.getElementById('leg_nav_content7_right')
      a.style.display = 'block'
      const b = document.getElementById('leg_nav_content7_in')
      b.style.background = '#95bbd4'
    },

    content_inhide8() {
      const a = document.getElementById('leg_nav_content8_right')
      a.style.display = 'none'
      const b = document.getElementById('leg_nav_content8_in')
      b.style.background = '#29384b'
    },
    content_inshow8() {
      const a = document.getElementById('leg_nav_content8_right')
      a.style.display = 'block'
      const b = document.getElementById('leg_nav_content8_in')
      b.style.background = '#95bbd4'
    },

    content_inhide9() {
      const a = document.getElementById('leg_nav_content9_right')
      a.style.display = 'none'
      const b = document.getElementById('leg_nav_content9_in')
      b.style.background = '#29384b'
    },
    content_inshow9() {
      const a = document.getElementById('leg_nav_content9_right')
      a.style.display = 'block'
      const b = document.getElementById('leg_nav_content9_in')
      b.style.background = '#95bbd4'
    },

    content_inhide10() {
      const a = document.getElementById('leg_nav_content10_right')
      a.style.display = 'none'
      const b = document.getElementById('leg_nav_content10_in')
      b.style.background = '#29384b'
    },
    content_inshow10() {
      const a = document.getElementById('leg_nav_content10_right')
      a.style.display = 'block'
      const b = document.getElementById('leg_nav_content10_in')
      b.style.background = '#95bbd4'
    },

    content_inhide01() {
      const a = document.getElementById('leg_nav_content01_right')
      const b = document.getElementById('leg_nav_content01_in')

      b.style.background = '#29384b'
    },
    content_inshow01() {
      const a = document.getElementById('leg_nav_content01_right')
      const b = document.getElementById('leg_nav_content01_in')
      a.style.display = 'block'
      b.style.background = '#95bbd4'
    },

    content_inhide02() {
      const a = document.getElementById('leg_nav_content02_right')
      a.style.display = 'none'
      const b = document.getElementById('leg_nav_content02_in')
      b.style.background = '#29384b'
    },
    content_inshow02() {
      const a = document.getElementById('leg_nav_content02_right')
      a.style.display = 'block'
      const b = document.getElementById('leg_nav_content02_in')
      b.style.background = '#95bbd4'
    },

    content_inhide03() {
      const a = document.getElementById('leg_nav_content03_right')
      a.style.display = 'none'
      const b = document.getElementById('leg_nav_content03_in')
      b.style.background = '#29384b'
    },
    content_inshow03() {
      const a = document.getElementById('leg_nav_content03_right')
      a.style.display = 'block'
      const b = document.getElementById('leg_nav_content03_in')
      b.style.background = '#95bbd4'
    },
    content_inhide04() {
      const a = document.getElementById('leg_nav_content04_right')
      a.style.display = 'none'
      const b = document.getElementById('leg_nav_content04_in')
      b.style.background = '#29384b'
    },
    content_inshow04() {
      const a = document.getElementById('leg_nav_content04_right')
      a.style.display = 'block'
      const b = document.getElementById('leg_nav_content04_in')
      b.style.background = '#95bbd4'
    },

    content_inhide05() {
      const a = document.getElementById('leg_nav_content05_right')
      a.style.display = 'none'
      const b = document.getElementById('leg_nav_content05_in')
      b.style.background = '#29384b'
    },
    content_inshow05() {
      const a = document.getElementById('leg_nav_content05_right')
      a.style.display = 'block'
      const b = document.getElementById('leg_nav_content05_in')
      b.style.background = '#95bbd4'
    },

    content_inhide06() {
      const a = document.getElementById('leg_nav_content06_right')
      a.style.display = 'none'
      const b = document.getElementById('leg_nav_content06_in')
      b.style.background = '#29384b'
    },
    content_inshow06() {
      const a = document.getElementById('leg_nav_content06_right')
      a.style.display = 'block'
      const b = document.getElementById('leg_nav_content06_in')
      b.style.background = '#95bbd4'
    },

    content_inhide07() {
      const a = document.getElementById('leg_nav_content07_right')
      a.style.display = 'none'
      const b = document.getElementById('leg_nav_content07_in')
      b.style.background = '#29384b'
    },
    content_inshow07() {
      const a = document.getElementById('leg_nav_content07_right')
      a.style.display = 'block'
      const b = document.getElementById('leg_nav_content07_in')
      b.style.background = '#95bbd4'
    },

    content_inhide08() {
      const a = document.getElementById('leg_nav_content08_right')
      a.style.display = 'none'
      const b = document.getElementById('leg_nav_content08_in')
      b.style.background = '#29384b'
    },
    content_inshow08() {
      const a = document.getElementById('leg_nav_content08_right')
      a.style.display = 'block'
      const b = document.getElementById('leg_nav_content08_in')
      b.style.background = '#95bbd4'
    },

    content_inhide09() {
      const a = document.getElementById('leg_nav_content09_right')
      a.style.display = 'none'
      const b = document.getElementById('leg_nav_content09_in')
      b.style.background = '#29384b'
    },
    content_inshow09() {
      const a = document.getElementById('leg_nav_content09_right')
      a.style.display = 'block'
      const b = document.getElementById('leg_nav_content09_in')
      b.style.background = '#95bbd4'
    },

    content_inhide010() {
      const a = document.getElementById('leg_nav_content010_right')
      a.style.display = 'none'
      const b = document.getElementById('leg_nav_content010_in')
      b.style.background = '#29384b'
    },
    content_inshow010() {
      const a = document.getElementById('leg_nav_content010_right')
      a.style.display = 'block'
      const b = document.getElementById('leg_nav_content010_in')
      b.style.background = '#95bbd4'
    },

    shop_sho() {
      const a = document.getElementById('top_sho')
      a.style.display = 'block'
    },
    shop_hid() {
      const a = document.getElementById('top_sho')
      a.style.display = 'none'
    },

    socity_sho() {
      const a = document.getElementById('top_socit')
      a.style.display = 'block'
    },
    socity_hid() {
      const a = document.getElementById('top_socit')
      a.style.display = 'none'
    },

    shop_sho_a() {
      const a = document.getElementById('top_sho_a')
      a.style.display = 'block'
    },
    shop_hid_a() {
      const a = document.getElementById('top_sho_a')
      a.style.display = 'none'
    },

    socity_sho_a() {
      const a = document.getElementById('top_socit_a')
      a.style.display = 'block'
    },
    socity_hid_a() {
      const a = document.getElementById('top_socit_a')
      a.style.display = 'none'
    },

    shop_sho_b() {
      const a = document.getElementById('top_sho_b')
      a.style.display = 'block'
    },
    shop_hid_b() {
      const a = document.getElementById('top_sho_b')
      a.style.display = 'none'
    },

    socity_sho_b() {
      const a = document.getElementById('top_socit_b')
      a.style.display = 'block'
    },
    socity_hid_b() {
      const a = document.getElementById('top_socit_b')
      a.style.display = 'none'
    },

    shop_sho_c() {
      const a = document.getElementById('top_sho_c')
      a.style.display = 'block'
    },
    shop_hid_c() {
      const a = document.getElementById('top_sho_c')
      a.style.display = 'none'
    },

    socity_sho_c() {
      const a = document.getElementById('top_socit_c')
      a.style.display = 'block'
    },
    socity_hid_c() {
      const a = document.getElementById('top_socit_c')
      a.style.display = 'none'
    },

    shop_sho_d() {
      const a = document.getElementById('top_sho_d')
      a.style.display = 'block'
    },
    shop_hid_d() {
      const a = document.getElementById('top_sho_d')
      a.style.display = 'none'
    },

    socity_sho_d() {
      const a = document.getElementById('top_socit_d')
      a.style.display = 'block'
    },
    socity_hid_d() {
      const a = document.getElementById('top_socit_d')
      a.style.display = 'none'
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
  /*底部*/
  .bottom{ background:#171a21; width:100%; height:200px;}
  .bottom_in{ width:1000px; margin:0 auto; height:200px; padding-top:30px;}
  .supernav_cotainer_b{ width:500px; height:22px;  font-size:12px; line-height:22px;}
  .supernav_cotainer_b a{ width:80px; height:22px; margin-left:8px; color:#66a7cf; text-decoration:none; display:block; background:#233f54; float:left; text-align:center;}
  .supernav_cotainer_b a:hover{ color:#FFF; text-decoration:none; background:#5bb8f1;}
  .supernav_cotainer_b ul{
    background: #cddae3;
    padding: 8px 5px 8px 5px;
    position: absolute;
    left: -80px;
    top: 23px;
  }
  .supernav_cotainer_b li{ width:102px; height:27px; text-align:center; text-height:27px; list-style:none;}
  .supernav_cotainer_b li:hover{ background:#212c3e; color:#FFF;}
  .bottom_word{ margin-top:23px; width:800px; height:30px; color:#9ba7b7}
</style>
