import collectionUrl from "../../service/collectionUrl/CollectionUrl";
import axios from "axios";

import router from "../../router";

export const auth={
  state:{
    token: ''
  },
  mutations:{
    SET_TOKEN(state, payload){
      state.token = payload
    }
  },
  actions:{
    loginAuth({commit, rootState}, payload){
      return axios({
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
    isToken:(state)=>{
      return state.token
    }
  }
}
