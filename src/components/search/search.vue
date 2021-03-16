<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box ref="searchBox" @query="onQueryChange"></search-box>
    </div>
    <div class="shortcut-warppers">
      <div class="shortcut">
        <div class="hot-key">
          <h1 class="title">热门搜索</h1>
          <ul>
            <li class="item" @click="addQuery(item.k)" v-for="(item, index) in hotkey" :key="index">
              <span>{{item.k}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="search-result">
      <suggest :query="query"></suggest>
    </div>
  </div>
</template>

<script type="scmascript-6">
import SearchBox from 'base/search-box/search-box'
// import Suggest from 'components/suggest/suggest'
import {getHotKey} from 'api/search'
import {ERR_OK} from 'api/config'
import Suggest from '../suggest/suggest.vue'
export default {
  components: {
    SearchBox,
    Suggest
  },
  data() {
    return {
      placeholder: '',
      hotkey: []
    }
  },
  created() {
    this._getHotKey()
  },
  methods: {
    addQuery(query) {
      console.log(query)
      this.$refs.searchBox.setQuery(query)
    },
      OnQueryChange(query) {
        this.query = 'query'
      },
    _getHotKey() {
      getHotKey().then(res => {
        if (res.code === ERR_OK) {
          this.hotkey = res.data.hotkey.splice(0, 10)
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.search
  .search-box-wrapper
    width: 100%
  .shortcut-warppers
    width: 100% 
    .shortcut
      width: 100%
      .hot-key
        margin: 0 20px 20px 20px
        .title
          margin-bottom: 10px
          margin-top: 10px 
          font-size: $font-size-medium
          color: $color-text-l
        .item
          display: inline-block 
          background: $color-highlight-background
          border-radius: 6px
          margin: 0 20px 10px 0
          padding: 5px 10px
          font-size: $font-size-medium
          color: $color-text-d
        .item:first-child
          margin-left: 0

</style>