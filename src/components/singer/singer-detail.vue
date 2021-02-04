<template>
  <transition name="slide">
    <music-list :title="title" :baImage="bgImage" :songs="songs"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
import { getSingerDetail } from 'api/singer'
import { ERR_OK } from 'api/config'
import { createSong } from 'common/js/song'
import MusicList from 'components/music-list/music-list.vue'
export default {
  data() {
    return {
      songs: []
    }
  },
  components: {
    MusicList
  },
  methods: {
    _getDetail() {
      getSingerDetail(this.singer.id).then((res) => {
        if (res.code === ERR_OK) {
        this._normalizeSong(res.data.list)
        }
      })
    },
    _normalizeSong(list) {
      let ret = []
      list.forEach(item => {
        let { musicData } = item
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
        this.songs = ret
      return ret
    }
  },
  created() {
    this._getDetail()
  },
  computed: {
    ...mapGetters([
      'singer'
    ]),
    title() {
      return this.singer.name
    },
    bgImage() {
      return this.singer.avatar
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable'
    .slide-enter-active, .slide-leave-active
        transition: all 0.3s
    .slide-enter, .slide-leave-to
        transform: translate3d(100%, 0, 0)
</style>
