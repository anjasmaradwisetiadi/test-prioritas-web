import enviroment from "../enviroments/enviroment";

const collectionUrl = {
  login: `${enviroment.url}login`,
  getMember: `${enviroment.url}offices?filter[office_type]=`,
  createMember: `${enviroment.url}offices/-actions/createMember`,
  getProvince: `${enviroment.url}provinces`,
  getCity: `${enviroment.url}cities`
}

export default collectionUrl
