const axios = require("axios");
const api_url = "https://resback.ezesoft.uk/api/"
export const state = () => ({
    items : [],
    site: []
})



export const actions = {    
    async getItems({commit}){
        await axios.get(api_url+'menus')
        .then(response => {
            commit("SET_ITEMS", response.data)
        });
    }
}
export const mutations =  {
    SET_ITEMS: (state, items) => {
        state.items = items;
    },
    ttt: () => {
        return "Hello dear";
        console.log("Hello d");
    }
}

export const getters = {
    getName: (state) => {
      return state.items
    },
    async mtest(state){
        await axios.get(api_url+'settings')
        .then(response => {
            return state.site = response.data;
        });
    },
    // getTodoById: (state) => (id) => {
    //     return state.todos.find(todo => todo.id === id)
    // }
    // a call method component.vue
    // store.getters.todos.getTodoById(2)
}