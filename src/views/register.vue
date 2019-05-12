<!--注册-->
<template>
  <div style="color: #CAD7D8;margin-top: 70px">
    <div style="width: 920px; margin: 0 auto">
      <span
        style=" font-size: 25px;
    font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif">
        创建账户
      </span>
    </div>

    <div style="width: 920px; margin: 0 auto">
      <div style="width: 616px; height: 812px; background: #16202D;float: left;padding-top: 20px;padding-left: 20px">
        <div style="width: 250px;float: left;">
          <span>您当前的电子邮件地址</span><br>
          <input v-model="email" class="input" placeholder="请输入email" @blur.prevent="checkEmail()">
          <img v-if="check.email" style="" src="/src/icons/svg/error.svg"><br>
          <span>请重新输入电子邮件地址</span><br>
          <input v-model="email2" class="input" style="width: 222px;height: 25px;" placeholder="请输入email" @blur.prevent="checkEmail2()">
          <img v-if="check.email2" style="" src="/src/icons/svg/error.svg"><br>
          <span>您当前的地址</span><br>
          <input v-model="address" class="input" style="width: 222px;height: 25px" placeholder="请输入地址" @blur.prevent="checkAddress()">
          <img v-if="check.address" style="" src="/src/icons/svg/error.svg"><br>
          <span>您的年龄</span><br>
          <input v-model="age" class="input" style="width: 222px;height: 25px" placeholder="请输入年龄" @blur.prevent="checkAge()">
          <img v-if="check.age" style="" src="/src/icons/svg/error.svg"><br>
          <span>您的性别</span><br>
          <input v-model="sex" class="input" style="width: 222px;height: 25px" placeholder="请输入性别" @blur.prevent="checkSex()">
          <img v-if="check.sex" style="" src="/src/icons/svg/error.svg"><br>
          <span>您的名字</span><br>
          <input v-model="name" class="input" style="width: 222px;height: 25px" placeholder="请输入名字" @blur.prevent="checkName()">
          <img v-if="check.name" style="" src="/src/icons/svg/error.svg"><br>
          <span>您的密码</span><br>
          <input v-model="password" type="password" class="input" style="width: 222px;height: 25px" placeholder="请输入密码" @blur.prevent="checkPwd()">
          <img v-if="check.password" style="" src="/src/icons/svg/error.svg"><br>
          <span>请重新输入密码</span><br>
          <input v-model="password2" type="password" class="input" style="width: 222px;height: 25px" placeholder="请输入密码" @blur.prevent="checkPwd2()">
          <img v-if="check.password2" style="" src="/src/icons/svg/error.svg"><br>
        </div>
        <div style="width: 330px;font-size: 13px;float: right;margin-top: 20px">
          您的电子邮件地址用于确认购买并帮助您管理对 Steam 帐户的访问。<br> Steam 将向此帐户发送一封用于确认的电子邮件。请通过邮件中的链接验证您的 Steam 电子邮件帐户。
        </div>
        <div style="clear: both;"/>
        <div v-if="isShow">
          <span>请输入邮箱验证码</span><br>
          <input v-model="seccode" class="input" placeholder="请输入验证码">
          <img v-if="check.seccode" style="" src="/src/icons/svg/error.svg">
        </div>
        <el-button v-if="!isShow" style="background: #274155;color: #67C1F5; margin-top: 20px" @click="goOn()">继续</el-button>
        <el-button v-if="isShow" style="background: #274155;color: #67C1F5; margin-top: 20px" @click="register()">注册</el-button>
      </div>
      <div style="float: left;margin-left: 30px">
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
  </div>
</template>

<script>
import { getSecCode, register } from '@/api/register'
export default {
  name: 'Register',
  data() {
    return {
      isShow: false,
      email: '',
      email2: '',
      address: '',
      age: '',
      sex: '',
      name: '',
      password: '',
      password2: '',
      seccode: '',
      check: {
        email: false,
        email2: false,
        address: false,
        age: false,
        sex: false,
        name: false,
        password: false,
        password2: false,
        seccode: false
      }
    }
  },
  methods: {
    /* 验证表单 */
    checkEmail() {
      const re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
      if (re.test(this.email) && this.email !== '') {
        this.check.email = false
      } else {
        this.check.email = true
      }
    },
    checkEmail2() {
      if (this.email === this.email2 && this.email2 !== '') {
        this.check.email2 = false
      } else {
        this.check.email2 = true
      }
    },
    checkAddress() {
      if (this.address !== '') {
        this.check.address = false
      } else {
        this.check.address = true
      }
    },
    checkAge() {
      const reg = /^\d{1,3}$/
      if (this.age !== '' && reg.test(this.age)) {
        this.check.age = false
      } else {
        this.check.age = true
      }
    },
    checkSex() {
      if (this.sex !== '' && (this.sex === '男' || this.sex === '女')) {
        this.check.sex = false
      } else {
        this.check.sex = true
      }
    },
    checkName() {
      if (this.name !== '') {
        this.check.name = false
      } else {
        this.check.name = true
      }
    },
    checkPwd() {
      if (this.password !== '' && this.password.length < 15) {
        this.check.password = false
      } else {
        this.check.password = true
      }
    },
    checkPwd2() {
      if (this.password !== '' && this.password === this.password2) {
        this.check.password2 = false
      } else {
        this.check.password2 = true
      }
    },
    // 发送邮箱验证码
    goOn() {
      if ((this.check.address || this.check.email || this.check.age || this.check.email2 || this.check.name || this.check.password || this.check.password2 || this.check.sex)) {
        return
      } else if (this.email2 === '' || this.password2 === '' || this.name === '' || this.sex === '' || this.age === '' || this.address === '') {
        return
      } else {
        this.isShow = true
        getSecCode(this.email)
      }
    },
    register() {
      if (this.seccode === '') {
        this.check.seccode = true
      } else {
        this.check.seccode = false
        const query = {
          email: this.email,
          address: this.address,
          age: this.age,
          sex: this.sex,
          name: this.name,
          password: this.password,
          seccode: this.seccode
        }
        register(query).then(res => {
          console.log(res)
          this.$router.push('/login')
        })
      }
    }
  }
}
</script>

<style scoped>
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
