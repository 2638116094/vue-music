<template>
  <div id="app">
    <M-Header></M-Header>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from './components/m-header/m-header.vue'
export default {
  components: {
    MHeader
  }
}
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
#app 
  background-color: $color-background
</style>
