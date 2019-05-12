<!--首页-->
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
            <div v-for="(item,index) in recommends" v-if="index < 3" :key="item.id" class="swiper-slide">
              <div class="lunbotu_left">
                <a @click="goDetail(item.id)"><img id="h1z1_pic" :src="item.cover" width="616" height="353" ></a>
              </div>
              <div class="lunbotu_right">
                <div class="lunbotu_right_top">{{ item.englishName }}</div>
                <div
                  style="width:318px; height:150px; float:left;margin-left: 8px;
                 font-size: 16px; color: #F3F3F4;letter-spacing: 1px;text-indent: 20px;text-align: left">
                  {{ item.remark }}
                </div>
                <div class="now_out">现已推出抢先体验</div>
                <div class="hot">
                  <div class="hot_tag">热销商品</div>
                </div>
                <div class="lunbotu_right_bottom">
                  <div class="lunbotu_right_bottom_price">￥{{ item.price }}</div>
                  <div class="lunbotu_right_bottom_icon"/>
                </div>
              </div>
            </div>
          </div>
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
          <div class="jingxuan"><span v-if="!isAll">最新上架</span>
            <span v-if="isAll">所有游戏</span>
            <div v-if="isAll" class="view_all" >
              <a @click="getNewGames()">最新上架</a>
            </div>
            <div v-if="!isAll" class="view_all" >
              <a @click="viewAll()">浏览所有</a>
            </div>
          </div>
          <!--所有游戏-->
          <div style="clear: both"/>
          <div v-if="isAll" style="margin-top: 10px">
            <div v-for="item in games" :key="item.id" style="width: 940px; height: 69px;background: #16202D;margin-bottom: 10px">
              <img :src="item.cover" style="float: left;cursor: pointer" width="184" height="69" @click="goDetail(item.id)">
              <div style="margin-top: 10px;float: left;margin-left: 20px">
                <span style="color: #C7D5C3;font-size: 16px;display: block; margin-bottom: 10px">{{ item.name }}</span>
                <span style="color: #acdbe7;font-size: 13px;margin-top: 10px">{{ item.keywords }}</span>
                <div style="background-image: url(/src/assets/image/icon_platform_win.png);float: left; width: 20px; height: 20px; margin-right: 10px;"/>
              </div>
              <div style="float: right;color: #9099A1;">
                <span style="display: block;margin-top: 30px;margin-right: 30px">￥{{ item.price }}</span>
              </div>
            </div>
            <div style="width: 940px;height: 35px;background: #16202D">
              <el-pagination
                :total="pageQuery.total"
                layout="total, prev, pager, next"
                background="#16202D"
                style="float: right;margin-top: 4px"
                @current-change="currentChange"/>
            </div>
            <div class="jingxuan"/>
          </div>
          <!--轮播图组 -->
          <div v-if="!isAll" id="swiper-container-second" class="swiper-container" style="height: 390px; float: left;">

            <div class="swiper-wrapper">

              <div class="swiper-slide" style="background: #1B2838">
                <div v-for="(item, index) in games" v-if="index < 6" :key="item.id" class="tebieyouhuizu">
                  <img :src="item.cover" alt="" width="308px;" height="143px;" style="cursor: pointer" @click="goDetail(item.id)">
                  <div style=" width: 119px; height: 34px; float: right; margin-top: 20px; margin-right: 5px;color: #acdbe7; font-size: 20px; line-height: 21px; ">
                    ￥{{ item.price }}
                  </div>
                </div>
              </div>
              <div class="swiper-slide" style="background: #1B2838">
                <div v-for="(item, index) in games" v-if="index >= 6" :key="item.id" class="lunbotu2_left">
                  <img :src="item.cover" alt="" height="308px" width="306px" style="cursor: pointer" @click="goDetail(item.id)">
                  <div class="teyou">
                    <span class="tebieyouhui"/><br >
                    <span class="teyoushijian"/>
                  </div>
                  <div style="width: 119px; height: 34px; float: right; margin-top: 20px;margin-right: 20px;color: #acdbe7;">
                    ￥{{ item.price }}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!--底部-->
      <div style="clear:both"/>
    </div>
  </div>
</template>

<script>
import { getGames } from '@/api/dashboard'
import Swiper from 'swiper'
export default {
  name: 'Dashboard',
  data() {
    return {
      // 是否浏览所有
      isAll: false,
      // 推荐轮播图
      recommends: [],
      games: [],
      pageQuery: {
        total: null,
        pageSize: 9,
        pageNum: 1,
        onSale: true,
        keywords: ''
      }
    }
  },
  created() {
    this.getNewGames()
  },
  mounted() {
    // 轮播图js
    new Swiper('#swiper-container-first', {

      direction: 'horizontal',
      observer: true,
      observeParents: true,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      }

    })
    new Swiper('#swiper-container-second', {

      direction: 'horizontal',
      observer: true,
      observeParents: true,
      // loop: true,
      effect: 'flip'
    })
  },
  methods: {
    // 查看游戏请
    goDetail(gameId) {
      this.$router.push({
        path: '/detail',
        query: { gameId: gameId }
      })
    },
    // 获取游戏列表，按上架时间排序
    getNewGames() {
      this.isAll = false
      this.pageQuery.pageSize = 9
      this.pageQuery.pageNum = 1
      getGames(this.pageQuery).then(res => {
        this.pageQuery.total = parseInt(res.content.total)
        this.games = res.content.records
        this.getRecommends()
      })
    },
    getAllGames() {
      getGames(this.pageQuery).then(res => {
        this.pageQuery.total = parseInt(res.content.total)
        this.games = res.content.records
      })
    },
    // 浏览所有
    viewAll() {
      this.isAll = true
      this.pageQuery.pageSize = 15
      this.getAllGames()
    },
    // 翻页
    currentChange(val) {
      this.pageQuery.pageNum = val
      this.getAllGames()
    },
    // 获取推荐游戏列表
    getRecommends() {
      this.pageQuery.keywords = '推荐'
      getGames(this.pageQuery).then(res => {
        this.recommends = res.content.records
        this.pageQuery.keywords = ''
      })
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
  .tebieyouhuizu{ width: 308px; height: 188px; margin-right: 2px; float:left; background-image: url(/src/assets/image/background_spotlight.jpg); margin-bottom: 10px; position: relative;}
  .tebieyouhuizu img{ float: left;}

</style>
