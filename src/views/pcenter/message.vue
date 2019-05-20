<template>
  <div style="width: 940px; margin: 0 auto">
    <div style="width: 920px; margin: 0 auto;margin-top: 70px;">
      <div style="font-size: 48px; text-transform: none;letter-spacing: 0px;color: #FFF">
        意见反馈
      </div>

      <div style="line-height:20px; width: 940px;	font-size: 14px; color: #acb2b8;margin-top: 16px;">
        <textarea v-model="msg" type="text" class="input" style="width: 940px;height: 300px;display: block;font-size: 15px" placeholder="您可以畅所欲言，说出你的建议……" @blur.prevent="checkEmail2()"/>
        <div style="background: #8caf0b;color: #FFF;float: right;width: 110px;height: 30px; cursor: pointer; text-align: center;padding-top: 5px;margin-right: 10px;margin-top: 30px" @click="addMsg">发表</div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import { addMsg } from '@/api/msg'

export default {
  data() {
    return {
      msg: ''
    }
  },
  methods: {
    addMsg() {
      const msg = {
        uid: store.getters.userId,
        msg: this.msg
      }
      addMsg(msg).then(res => {
        this.$notify({
          title: '成功',
          message: '感谢您的反馈，我们会尽快通过邮件回复您',
          type: 'success'
        })
        this.$router.push('/')
      })
    }
  }
}

</script>

<style>

</style>
