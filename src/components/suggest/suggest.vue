<template>
    <div class="suggest">
        <ul class="suggest-list">
            <li class="suggest-item" v-for="(item, index) in result" :key="index">
                <div class="icon">
                    <i :class="getIconCls(item)"></i>
                </div>
                <div class="name">
                    <p class="text" v-html="getDisplayName(item)"></p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
import {search} from 'api/search'
import {ERR_OK} from 'api/config'
import {filterSinger} from 'common/js/song'
const TYPE_SINGER = 'singer'
export default {
    props: {
        query: {
            type: String,
            default: ''
        },
        showSinger: {
            type: Boolean,
            default: true
        }
    },
    created() {
        this._search()
    },
    data() {
        return {
            page: 1,
            result: [],
            pullup: true,
            hasMore: true
        }
    },
    methods: {
        _search() {
            this.hasMore = true
            search(this.query, this.page, this.showSinger).then(res => {
                if (res.code === ERR_OK) {
                    console.log(res)
                    this.result = this._genResult(res.data)
                }
            })
        },
        getIconCls(item) {
            if (item.type === TYPE_SINGER) {
                return 'icon-mine'
            } else {
                return 'icon-music'
            }
        },
        getDisplayName(item) {
            if (item.type === TYPE_SINGER) {
                return item.singername
            } else {
                return `${item.songname}-${filterSinger(item.singer)}`
            }
        },
        _genResult(data) {
            let ret = []
            if (data.zhida && data.zhida.singerid) {
                ret.push({...data.zhida, ...{type: TYPE_SINGER}})
            }
            if (data.song) {
                ret = ret.concat(data.song.list)
            }
            return ret
        }
    },
    watch: {
        query() {
            this.search()
        }
    }
}
</script>
<style lang="stylus" scoped rel="stylesheet/stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'
.suggest
    .suggest-list
        color: white
        padding: 5px 0
</style>