<template>
  <div style="margin: 70px auto 0; margin-top: 70px;width: 940px;">
    <span style="color: #FFF;height: 46px;font-size: 27px;display: block;margin-bottom: 20px" >The End Is Nigh</span>
    <div style="width: 600px;float: left">
      <!--轮播图-->
      <div class="swiper-container gallery-top" style="width: 600px;height: 338px; margin-bottom: 10px">
        <div class="swiper-wrapper" style="width: 400px;height: 338px;">

          <img class="swiper-slide" src="/src/assets/image/end/end2.jpg">
          <img class="swiper-slide" src="/src/assets/image/end/end3.jpg">
          <img class="swiper-slide" src="/src/assets/image/end/end4.jpg">
          <!--<div class="swiper-slide" style="background-image:url(/src/assets/image/end/end2.jpg)"/>-->
          <!--<div class="swiper-slide" style="background-image:url(/src/assets/image/end/end3.jpg)"/>-->
          <!--<div class="swiper-slide" style="background-image:url(/src/assets/image/end/end4.jpg)"/>-->

        </div>
        <!-- Add Arrows -->
        <div class="swiper-button-next swiper-button-white"/>
        <div class="swiper-button-prev swiper-button-white"/>
      </div>
      <div class="swiper-container gallery-thumbs" style="width: 400px;height: 69px;">
        <div class="swiper-wrapper">
          <img class="swiper-slide" src="/src/assets/image/end/end7.jpg">
          <img class="swiper-slide" src="/src/assets/image/end/end6.jpg">
          <img class="swiper-slide" src="/src/assets/image/end/end5.jpg">

        </div>
      </div>
    </div>
    <div style="width: 290px;float: left;margin-left: 10px">
      <img src="/src/assets/image/end/end5.jpg" width="280px">
      <span style="color: #BBD4D5;font-size: 13px;display: block;margin-bottom: 10px;margin-top: 20px;min-height: 70px">游戏简介游戏简介游戏简介游BBD4D5BBD4D5戏简BBD4D5BBD4D5BBD4D5介游戏简介简介游戏简介</span>
      <span style="color: #556772;font-size: 13px">发行日期：</span><span style="color: #8F98A0;font-size: 13px">2018-09-09</span><br>
      <div style="height: 40px"/>
      <span style="color: #556772;font-size: 13px">游戏标签：</span><span style="color: #8F98A0;font-size: 13px">硬核，射击，第一人称</span><br>
    </div>
    <div style="clear: both"/>
    <div style="width:616px; background:#414d59; height:83px; position:relative; padding-top:15px; margin-top: 30px">
      <h1 style="font-size:21px; color: #ffffff; text-indent:15px">购买 The End is Nigh</h1>
      <div style=" width: 162px; height: 32px; background: #000; position: absolute; left: 442px; top: 63px; padding: 1px; font-size: 13px; line-height: 32px; text-indent: 10px;">
        <span style=" font-size:13px; margin-left:-2px;color: #8F98A0;">￥48</span>
        <div style="background: #8caf0b;color: #FFF;float: right;width: 110px;cursor: pointer;">添加至购物车</div>
      </div>
    </div>

    <div style="line-height:20px;	font-size: 14px; color: #acb2b8;margin-top: 30px;">
      <hr color="#acb2b8" width="616px" >
      <h2>关于这款游戏</h2>
      If you are reading this you are probably dead...<br ><br >

      Just kidding, you aren't dead... YET!<br >
      See, in the future, everything dies... for the most part. <br >
      and this is a game about just that.<br ><br >

      The End Is Nigh!<br ><br >

      -the management <br ><br ><br >

      Gameplay:<br ><br >

      The End Is Nigh is a sprawling adventure platformer where the player takes control over Ash,<br > one of few "things" that have "survived" the "end of the world".<br >
      Follow Ash as he flops his way through a future of pain and suffering. Feel his stress levels <br >rise as you throw him into an endless swarm of decaying, mutant animal-like creatures and<br > help aid his final epic quest... to simply make a friend (out of pieces of people he finds along<br > his journey).<br ><br >

      Oh, also you collect video game cartridges and tumors! if that does anything for ya.<p class="show"><br ><br ><br ><br >

        Features:<br ><br >
        600+ levels!<br ><br ><br >

        12+ explorable chapters!<br ><br ><br >

        20+ collectible and fully playable mini game cartridges! (each with their own tiny achievements!) <br ><br ><br >

        80+ achievements that will make you feel good about yourself <br ><br ><br >
        100s of collectible little squishy tumors!<br ><br ><br >

        loads of hidden extras and endings that you will probably see someone else find before you do!<br ><br ><br >

        and stress!</p>
    </div>
    <div style="clear:both;"/>
    <hr color="#acb2b8" width="616px" >
    <div style="line-height:20px;	font-size: 14px; color: #acb2b8;margin-top: 16px;">
      <h2>用户评论</h2>
    </div>
    <div style="width: 940px; height: 70px;"/>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  mounted() {
    const galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop: true,

      loopedSlides: 3, // looped slides should be the same
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
    const galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 3,
      touchRatio: 1,
      loop: true,
      loopedSlides: 3, // looped slides should be the same
      slideToClickedSlide: true
    })
    galleryTop.controller.control = galleryThumbs
    galleryThumbs.controller.control = galleryTop
  }
}
</script>

<style>

</style>
