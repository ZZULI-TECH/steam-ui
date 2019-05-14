<!--修改信息，密码-->
<!--注册-->
<template>
  <div style="color: #CAD7D8;margin-top: 70px">
    <div style="width: 920px; margin: 0 auto">
      <div style="font-size: 48px; text-transform: none;letter-spacing: 0px;color: #FFF">
        信息修改
      </div>
    </div>

    <div style="width: 940px; margin: 30px auto">
      <div style="width: 940px; height: 812px; background: #16202D;float: left;padding-top: 20px;padding-left: 50px">
        <div style="width: 500px;float: left;">
          <span>您当前的电子邮件地址(不可修改)</span><br>
          <input v-model="email" readonly class="input" placeholder="请输入email" @blur.prevent="checkEmail()">
          <img v-if="check.email" style="" src="/src/icons/svg/error.svg"><br>
          <span>您当前的地址</span><br>
          <input v-model="address" class="input" placeholder="请输入地址" @blur.prevent="checkAddress()">
          <img v-if="check.address" style="" src="/src/icons/svg/error.svg"><br>
          <span>您的年龄</span><br>
          <input v-model="age" class="input" placeholder="请输入年龄" @blur.prevent="checkAge()">
          <img v-if="check.age" style="" src="/src/icons/svg/error.svg"><br>
          <span>您的性别(不可修改)</span><br>
          <input v-model="sex" readonly class="input" placeholder="请输入性别" @blur.prevent="checkSex()">
          <img v-if="check.sex" style="" src="/src/icons/svg/error.svg"><br>
          <span>您的名字</span><br>
          <input v-model="name" class="input" placeholder="请输入名字" @blur.prevent="checkName()">
          <img v-if="check.name" style="" src="/src/icons/svg/error.svg"><br>
          <span v-if="showPwd">当前密码</span><br>
          <input v-if="showPwd" v-model="password" type="password" class="input" placeholder="请输入密码" @blur.prevent="checkPwd()"> <br/>
          <span v-if="showPwd">请输入新密码</span><br>
          <input v-if="showPwd" v-model="password2" class="input" placeholder="请输入密码" @blur.prevent="checkPwd2()">
          <el-button style="background: #274155;color: #67C1F5; margin-top: 20px;margin-bottom: 30px;margin-right: 90px" @click="setPwd">修改密码</el-button>
          <el-button style="background: #274155;color: #67C1F5; margin-top: 20px;margin-bottom: 30px" @click="subInfo">提交修改</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfo, checkPwd, updateUser } from '../../api/info'
import store from '@/store'
export default {
  name: 'Register',
  data() {
    return {
      isShow: false,
      email: '',
      address: '',
      age: '',
      sex: '',
      name: '',
      password: '',
      password2: '',
      seccode: '',
      id: '',
      check: {
        email: false,
        address: false,
        age: false,
        sex: false,
        name: false,
        seccode: false
      },
      showPwd: false
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {
    // 获取用户信息
    getUserInfo() {
      getUserInfo(store.getters.userId).then(res => {
        this.email = res.content.email
        this.address = res.content.address
        this.age = res.content.age
        this.name = res.content.name
        this.sex = res.content.sex
        this.id = res.content.id
      })
    },
    setPwd() {
      this.showPwd = !this.showPwd
    },
    subInfo() {
      const user = {
        id: this.id,
        address: this.address,
        age: this.age,
        name: this.name,
        password: this.password2
      }
      if (this.showPwd) {
        checkPwd(store.getters.userId, this.password, this.email).then(res => {
          if (res.content === true || res.content === 'true') {
            updateUser(user).then(res2 => {
              alert('修改成功')
            })
          } else {
            alert('旧密码不匹配，修改失败')
          }
        })
      } else {
        updateUser(user).then(res2 => {
          alert('修改成功')
        })
      }
    },

    /* 验证表单 */
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
    checkName() {
      if (this.name !== '') {
        this.check.name = false
      } else {
        this.check.name = true
      }
    }
  }
}
</script>

<style scoped>
  .input{
    color: #000000;
    background: #CAD7D8;
    width: 400px;
    height: 30px;
    border-radius: 5px;
    font-size: 13px;
    padding-left: 10px;
    margin-bottom: 20px;
  }
</style>
