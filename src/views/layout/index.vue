<template>
  <el-container>
    <el-header height="104px" style="background:#171a21;"><Header/>></el-header>
    <el-main style="min-height: calc(100vh - 304px); background: #1b2838"><AppMain style="margin-top: 76px;"/></el-main>
    <el-footer height="200px" style="background:#171a21;"><Footer/></el-footer>
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
