import feedApi from '@/api/feed'

const state = {
    data: null,
    isLoading: false,
    error: null,  
} 
//mytationTypes 
export const mutationTypes = {
    getFeedStart: '[feed] Get feed start',
    getFeedSuccess: '[feed] Get feed success',
    getFeedFailure: '[feed] Get feed failure',
}
//actionTypes
export const actionTypes = {
    getFeed: '[feed] Get feed'
}


//mutations
const mutations = {
    [mutationTypes.getFeedStart](state) {
        state.data = null
        state.isLoading = true
    },
    [mutationTypes.getFeedSuccess](state, payload) {
        state.data = payload
        state.isLoading = false
    },
    [mutationTypes.getFeedFailure](state) {
        state.isLoading = false
    }
}
//actions
const actions = {
    [actionTypes.getFeed](context, { apiUrl }) {
        return new Promise(resolve => {
            context.commit(mutationTypes.getFeedStart, apiUrl)
            feedApi.getFeed(apiUrl).then(response => {
                context.commit(mutationTypes.getFeedSuccess, response.data )
                resolve(response.data)
                
            }).catch(() => {
                context.commit(mutationTypes.getFeedFailure)
            })
        })
        
    }
}



export default {
    state,
    mutations,
    actions
}