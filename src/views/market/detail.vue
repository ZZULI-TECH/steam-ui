<!--详情-->
<template>
  <div style="margin: 70px auto 0; margin-top: 70px;width: 940px;">
    <span style="color: #FFF;height: 46px;font-size: 27px;display: block;margin-bottom: 20px" >{{ game.name }}</span>
    <div style="width: 600px;float: left">
      <!--轮播图-->
      <div id="gallery-top" class="swiper-container gallery-top" style="width: 600px;height: 338px; margin-bottom: 10px">
        <div v-for="item in game.images" :key="item.id" class="swiper-wrapper" style="width: 600px;height: 338px;">

          <img :src="item.imageUrl" width="600px" height="337px" class="swiper-slide">

        </div>
        <!-- Add Arrows -->
        <div class="swiper-button-next swiper-button-white"/>
        <div class="swiper-button-prev swiper-button-white"/>
      </div>
      <div id="gallery-thumbs" class="swiper-container gallery-thumbs" style="width: 400px;height: 69px;">
        <div v-for="item in game.images" :key="item.id" class="swiper-wrapper">
          <!--<img class="swiper-slide" src="/src/assets/image/end/end7.jpg">-->
          <!--<img class="swiper-slide" src="/src/assets/image/end/end6.jpg">-->
          <!--<img class="swiper-slide" src="/src/assets/image/end/end5.jpg">-->
          <img :src="item.imageUrl" width="115px" height="65px" class="swiper-slide" style="margin-right: 10px">
        </div>
      </div>
    </div>
    <div style="width: 290px;float: left;margin-left: 10px">
      <img :src="game.cover" width="280px">
      <span style="color: #BBD4D5;font-size: 13px;display: block;margin-bottom: 10px;margin-top: 20px;min-height: 70px">{{ game.remark }}</span>
      <span style="color: #556772;font-size: 13px">发行日期：</span><span style="color: #8F98A0;font-size: 13px">{{ game.gmtCreate }}</span><br>
      <div style="height: 40px"/>
      <span style="color: #556772;font-size: 13px">游戏标签：</span><span style="color: #8F98A0;font-size: 13px">{{ game.keywords }}</span><br>
    </div>
    <div style="clear: both"/>
    <div v-if="!isHave && !inCar" style="width:940px; background:#414d59; height:83px; position:relative; padding-top:15px; margin-top: 30px">
      <h1 style="font-size:21px; color: #ffffff; text-indent:15px">购买   {{ game.name }}</h1>
      <div style=" width: 162px; height: 32px; background: #000; position: absolute; left: 742px; top: 63px; padding: 1px; font-size: 13px; line-height: 32px; text-indent: 10px;">
        <span style=" font-size:13px; margin-left:-2px;color: #8F98A0;">￥{{ game.price }}</span>
        <div style="background: #8caf0b;color: #FFF;float: right;width: 110px;cursor: pointer;" @click="addCar">添加至购物车</div>
      </div>
    </div>

    <div v-if="isHave" style="width:940px; background:#414d59; height:83px; position:relative; padding-top:15px; margin-top: 30px">
      <h1 style="font-size:21px; color: #ffffff; text-indent:15px">您的游戏库中已经拥有  {{ game.name }}</h1>
      <div style=" width: 110px; height: 32px; background: #000; position: absolute; left: 780px; top: 63px; padding: 1px; font-size: 13px; line-height: 32px; text-indent: 10px;">
        <div style="background: #8caf0b;color: #FFF;float: right;width: 110px;cursor: pointer;text-align: center;" @click="goLib">前往查看</div>
      </div>
    </div>

    <div v-if="inCar" style="width:940px; background:#414d59; height:83px; position:relative; padding-top:15px; margin-top: 30px">
      <h1 style="font-size:21px; color: #ffffff; text-indent:15px">您已经将  {{ game.name }} 添加至购物车 </h1>
      <div style=" width: 110px; height: 32px; background: #000; position: absolute; left: 780px; top: 63px; padding: 1px; font-size: 13px; line-height: 32px; text-indent: 10px;">
        <div style="background: #8caf0b;color: #FFF;float: right;width: 110px;cursor: pointer;text-align: center;" @click="goCar">前往查看</div>
      </div>
    </div>

    <div style="line-height:20px;	font-size: 14px; color: #acb2b8;margin-top: 30px;">
      <hr color="#acb2b8" width="940px" >
      <h2>关于这款游戏</h2>
      {{ game.content }}
    </div>
    <div style="clear:both;"/>
    <hr color="#acb2b8" width="940px" >
    <div style="line-height:20px; width: 940px;	font-size: 14px; color: #acb2b8;margin-top: 16px;">
      <h2>用户评论</h2><br>
      <textarea v-model="comment" type="text" class="input" style="width: 940px;height: 60px;display: block" placeholder="您可以畅所欲言，发表评论……" @blur.prevent="checkEmail2()"/>
      <div style="background: #8caf0b;color: #FFF;float: right;width: 110px;height: 30px; cursor: pointer; text-align: center;padding-top: 5px;margin-right: 10px" @click="addComment">发表</div>
    </div>
    <div v-for="item in game.comments" :key="item.id" style="width: 600px;margin-top: 60px">
      <div style="width: 940px;margin-bottom: 20px">
        <div style="width: 200px; float: left">
          <img src="/src/assets/image/end/end5.jpg" width="40px" height="40px" style="margin-top: 10px">
          <span style="color: #C1DBF4;font-size: 12px;margin-left: 10px;">{{ item.uid }}</span>
        </div>
        <div>
          <span style="color: #566473; font-size: 13px;display: block">发布于：{{ item.gmtCreate }}</span>
          <span style="color: #ACB2B8">{{ item.content }}</span>
        </div>
      </div>
    </div>
    <div style="width: 940px; height: 70px;"/>
  </div>
</template>

<script>
import Swiper from 'swiper'
import store from '@/store'
import { getGameById, addComment, checkLib } from '@/api/game'
import { addCar, checkCar } from '@/api/car'
export default {
  data() {
    return {
      // 待发表评论
      comment: '',
      game: {
        id: '',
        name: '',
        price: '',
        // 销量
        sales: '',
        // 封面
        cover: '',
        keywords: '',
        remark: '',
        content: '',
        // 发行日期
        gmtCreate: '',
        images: [],
        comments: []
      },
      // 是否在库中
      isHave: false,
      // 是否在购物车中
      inCar: false
    }
  },
  mounted() {
    const galleryTop = new Swiper('#gallery-top', {
      spaceBetween: 10,
      loop: true,

      loopedSlides: 3, // looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
    const galleryThumbs = new Swiper('#gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 3,
      touchRatio: 1,
      loop: true,
      loopedSlides: 3, // looped slides should be the same
      slideToClickedSlide: true
    })
    galleryTop.controller.control = galleryThumbs
    galleryThumbs.controller.control = galleryTop
  },
  created() {
    this.game.id = this.$route.query.gameId
    console.log(this.game.id)
    this.getGameById()
    // 检查是否已经添加至游戏库
    checkLib(this.game.id, store.getters.userId).then(res => {
      if (res.content !== null) {
        this.isHave = true
      }
    })
    checkCar(store.getters.userId, this.game.id).then(res => {
      if (res.content !== null) {
        this.inCar = true
      }
    })
  },
  methods: {
    // 根据id获取游戏信息
    getGameById() {
      console.log(this.game.id + '--------')
      getGameById(this.game.id).then(res => {
        this.game = res.content
      })
    },
    // 新增评论
    addComment() {
      if (this.comment !== null && this.comment !== '') {
        if (this.isHave) {
          addComment({ content: this.comment, uid: store.getters.userId, gameId: this.game.id }).then(res => {
            this.comment = ''
            this.$notify({
              title: '温馨提示',
              message: '成功发表评论',
              type: 'success'
            })
            this.getGameById()
          })
        } else {
          this.$notify({
            title: '温馨提示',
            message: '成功购买游戏后即可发表评论',
            type: 'warning'
          })
        }
      } else {
        this.$notify({
          title: '温馨提示',
          message: '评论不能为空',
          type: 'warning'
        })
      }
    },
    // 添加至购物车
    addCar() {
      addCar(store.getters.userId, { 'gameId': this.game.id }).then(res => {
        this.$router.push('/car')
      })
    },
    // TODO 查看游戏库
    goLib() {
      this.$router.push('/lib')
    },
    goCar() {
      this.$router.push('/car')
    }
  }
}
</script>

<style>
  .input{
    color: #000000;
    background: #CAD7D8;
    width: 222px;
    height: 25px;
    border-radius: 5px;
    font-size: 13px;
    padding-left: 10px;
    margin-bottom: 10px;
  }
</style>
