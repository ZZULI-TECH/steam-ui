<template>
  <div>
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
export default {
  name: 'Footer',
  data() {

  },
  methods: {
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

<style>
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
