<!--购物车-->
<template>
  <div style="margin: 70px auto 0; margin-top: 70px;width: 940px;">
    <span style="color: #FFF;height: 46px;font-size: 27px;display: block;margin-bottom: 40px" >您的购物车</span>
    <div style="background: #758E9D; width: 124px;height: 29px;font-size: 13px;text-align: center;color: #FFFFF9">您的物品已添加！</div>
    <div v-for="item in cars" :key="item.id" style="width: 940px; height: 69px;background: #16202D;margin-bottom: 8px;padding:10px 10px">
      <img :src="item.gameImage" style="float: left;cursor: pointer" width="184" height="49" @click="goDetail(item.gameId)">
      <div style="margin-top: 10px;float: left;margin-left: 20px">
        <span style="color: #C7D5C3;font-size: 16px;display: block; margin-bottom: 10px">{{ item.gameName }}</span>
      </div>
      <div style="float: right;">
        <span style="display: block;margin-right: 30px;color: #C7D5E0;">￥{{ item.gamePrice }}</span>
        <a style="color: #2f89bc; font-size: 13px;text-decoration: underline" @click="remove(item.id)">移除</a>
      </div>
    </div>
    <div style="background: #16202D;width: 940px;height: 100px">
      <div style="color: #C7D5E0;float: right;margin-top: 10px;margin-right: 30px">
        预计总额：￥{{ totalPrice }}
      </div>
      <div style="clear: both"/>
      <hr color="#194660" style="margin: 10px auto" width="920px" >
      <div style="width: 100px; height: 30px; float: right; margin-right: 30px; cursor: pointer; color: #D2E885; background: #597104; text-align: center;padding-top: 3px" @click="buyAll" >结 算</div>
    </div>
    <div style="width: 940px; height: 70px;"/>
  </div>
</template>

<script>
import store from '@/store'
import { listCar, carRemove, pay } from '@/api/car'
import { addOrderFromCar } from '@/api/order'
export default {
  data() {
    return {
      cars: [],
      totalPrice: ''
    }
  },
  created() {
    this.getCar()
  },
  methods: {
    getCar() {
      listCar(store.getters.userId).then(res => {
        this.cars = res.content.cartList
        this.totalPrice = res.content.totalPrice
      })
    },
    // 查看游戏请
    goDetail(gameId) {
      this.$router.push({
        path: '/detail',
        query: { gameId: gameId }
      })
    },
    remove(id) {
      carRemove(id, store.getters.userId).then(res => {
        this.getCar()
      })
    },
    // 结算 添加订单
    buyAll() {
      addOrderFromCar(store.getters.userId).then(res => {
        // this.cars.forEach(car => {
        //   carRemove(car.id, store.getters.userId)
        // })
        // alert('订单添加成功')
        // alert(res.content)
        
        window.location.href = 'http://localhost:8080/alipay/pay/' + res.content
        // pay(res.content)
        this.getCar()
      })
    }
  }
}
</script>

<style scoped>

</style>
