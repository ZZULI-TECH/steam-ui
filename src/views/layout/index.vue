<!--布局页-->
<template>
  <el-container>
    <el-header height="104px" style="background:#171a21;z-index: 10"><Header/>></el-header>
    <el-main style="min-height: calc(100vh - 254px); background: #1b2838"><AppMain/></el-main>
    <el-footer height="150px" style="background:#171a21;"><Footer/></el-footer>
  </el-container>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'
import AppMain from './components/AppMain'
export default {
  name: 'Layout',
  components: { Footer, Header, AppMain }
}
</script>

<style>

</style>
