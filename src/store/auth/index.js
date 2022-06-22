import collectionUrl from "../../service/collectionUrl/CollectionUrl";
import axios from "axios";

import router from "../../router";

export const auth={
  state:{
    user:{},
    token: ''
  },
  mutations:{
    SET_TOKEN(state, payload){
      state.token = payload
    },
    SET_USER(state, payload){
      this.state.user = payload
    }
  },
  actions:{
    loginAuth({commit, rootState}, payload){
      return axios({
        headers:{
          'content-type': 'application/vnd.api+json'
        },
        method: 'POST',
        url: collectionUrl.login,
        params: {
          email: payload.email,
          password: payload.password
        }
      })
    }
  },
  getters:{
    isAuthenticated : (state)=>{
      return !!state.token
    },
    getUser: (state) =>{
      return state.user
    },
    isToken:(state)=>{
      return state.token
    }
  }
}
