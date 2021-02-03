import * as types from './mutation-types'

const matutations = {
     [types.SET_SINGER](state, singer) {
         console.log(singer)
         state.singer = singer
     }
}

export default matutations