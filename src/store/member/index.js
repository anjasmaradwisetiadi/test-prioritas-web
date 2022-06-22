import collectionUrl from "../../service/collectionUrl/CollectionUrl";
import axios from "axios";

const token = sessionStorage.getItem('token')

export const member={
  state:{
    memberCollect:[],
    provinceCollect:[],
    citiesCollect:[]
  },
  mutations:{
    MEMBER_COLLECT(state, payload){
      state.memberCollect = payload
    },
    PROVINCE_COLLECT(state, payload){
      state.provinceCollect = payload
    },
    CITIES_COLLECT(state, payload){
      state.citiesCollect = payload
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
      },
      getProvince({commit, rootState}){
        rootState.loading = true
        axios({
          headers:{
            authorization: `Bearer ${token}`
          },
          method: 'GET',
          url: collectionUrl.getProvince,
        })
          .then((resp)=>{
            commit('PROVINCE_COLLECT', resp.data.data)
            rootState.loading = false
            rootState.error = false
          })
          .catch((error)=>{
            rootState.loading = false
            rootState.error = true
            console.log('error')
            console.log(error)
          })
      },
      getCities({commit, rootState}){
        rootState.loading = false
        axios({
          headers:{
            authorization: `Bearer ${token}`
          },
          method: 'GET',
          url: collectionUrl.getCity,
        })
          .then((resp)=>{
            commit('CITIES_COLLECT', resp.data.data)
            rootState.loading = false
            rootState.error = false
          })
          .catch((error)=>{
            console.log('error')
            console.log(error)
            rootState.loading = false
            rootState.error = false
          })
      }
  },
  getters: {
    getMemberCollect:(state)=>{
      return state.memberCollect
    },
    getProvinceCollect: (state)=>{
      return state.provinceCollect
    },
    getCitiesCollect:(state)=>{
      return state.citiesCollect
    }
  }
}
