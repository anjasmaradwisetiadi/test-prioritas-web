import collectionUrl from "../../service/collectionUrl/CollectionUrl";
import axios from "axios";

const token = localStorage.getItem('token')

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
            authorization: `Bearer ${token}`,
            'content-type': 'application/vnd.api+json'
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
            authorization: `Bearer ${token}`,
            'content-type': 'application/vnd.api+json'
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
            authorization: `Bearer ${token}`,
            'content-type': 'application/vnd.api+json'
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
      },
      createMember({commit, rootState}, payload){
        const fetchJson=JSON.stringify({
          'data':{
            'type': "offices",
            'attributes': {
              "office_type": "member",
              "office_registration_id": payload.officeRegistrationId,
              "office_referral_id": payload.officeReferralId,
              "name": payload.nameMember,
              "birthdate": payload.birthMember,
              "marital_status": payload.married,
              "npwp_number": payload.npwp,
              "npwp_name": payload.nameReferal,
              "spouse_name": "Pasangan",
              "spouse_birthdate": "2022-05-11",
              "bank_account_number": payload.noReferal,
              "bank_account_name": payload.nameReferal,
              "bank_name": "PT BANK SYARIAH INDONESIA Tbk",
              "bank_branch_name": "Indramayu",
              "address_details": [
                {
                  "province_id": payload.province,
                  "city_id": payload.cities
                }
              ]
            },
            "relationships": {
              "office-category": {
                "data": {
                  "type": "office-categories",
                  "id": payload.officeCategoryId
                }
              }
            }
           }
          })
        axios({
          method: 'POST',
          url: collectionUrl.createMember,
          headers:{
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/vnd.api+json',
          },
          data: fetchJson
        })


      }
  },
  getters: {
    getMemberCollect: (state)=>{
      return state.memberCollect
    },
    getProvinceCollect: (state)=>{
      return state.provinceCollect
    },
    getCitiesCollect: (state)=>{
      return state.citiesCollect
    }
  }
}
