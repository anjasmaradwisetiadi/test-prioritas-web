import collectionUrl from "../../service/collectionUrl/CollectionUrl";
import axios from "axios";

const token = sessionStorage.getItem('token')

export const member={
  state:{
    memberCollect:[]
  },
  mutations:{
    MEMBER_COLLECT(state, payload){
      state.memberCollect = payload
    }
  },
  actions:{
      getOffice({commit,rootState}, payload){
        rootState.loading = true
        axios({
          headers:{
            authorization: `Bearer ${token}`
          },
          method: 'GET',
          url: `${collectionUrl.getMember}${payload}`,
        })
          .then((resp)=>{
            commit(`MEMBER_COLLECT`,resp.data.data)
            rootState.loading = false
            rootState.error = false
          })
          .catch((error)=>{
            console.log('error')
            console.log(error)
            rootState.loading = false
            rootState.error = true
          })
      }
  },
  getters: {
    getMemberCollect:(state)=>{
      return state.memberCollect
    }
  }
}
