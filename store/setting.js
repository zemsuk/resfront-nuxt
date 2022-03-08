const axios = require("axios");
const api_url = "https://resback.ezesoft.uk/api/"
export const state = () => ({
    site : []
})
export const actions = {    
    async getItems({commit}){
        await axios.get(api_url+'settings')
        .then(response => {
            commit("SET_ITEMS", response.data)
        });
    }
}
export const mutations =  {
    SET_ITEMS: (state, site) => {
        state.items = site;
    },
}