<template>
<div class="singer">df</div>
</template>

<script type="text/ecmascript-6">
import { getSingerList } from 'api/singer'
export default {
  data() {
    return {
      singers: []
    }
  },
  created() {
      this._getSingerList()
  },
  methods: {
    _getSingerList() {
      getSingerList().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>