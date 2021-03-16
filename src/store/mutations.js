/*
 * @Description: Create By Adam
 * @Author: Adam
 * @Date: 2021-02-22 08:54:15
 * @LastEditTime: 2021-03-08 14:52:23
 * @LastEditor: 2638116094@qq.com
 * @FilePath: \vue-music\src\store\mutations.js
 */
import * as types from './mutation-types'

const matutations = {
     [types.SET_SINGER](state, singer) {
         state.singer = singer
     },
     [types.SET_PLAYING_STATE](state, flag) {
         state.playing = flag
     },
     [types.SET_FULL_SCREEN](state, flag) {
         state.fullScreen = flag
     },
     [types.SET_PLAYLIST](state, list) {
         state.playlist = list
     },
     [types.SET_SEQUENCE_LIST](state, list) {
         state.sequenceList = list
     },
     [types.SET_PLAY_MODE](state, mode) {
         state.mode = mode
     },
     [types.SET_CURRENT_INDEX](state, index) {
         state.currentIndex = index
     },
     [types.SET_CURRENT_INDEX](state, disc) {
         state.disc = disc
     },
     [types.SET_TOP_LIST](state, topList) {
         state.topList = topList
     }
}

export default matutations