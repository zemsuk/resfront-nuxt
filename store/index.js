const axios = require("axios");
const api_url = "https://resback.ezesoft.uk/api/"
export const state = (window) => ({
    site: [],
    items : [],
    cart : [],     
    totalQty: 0,
    totalPrice: 0, 
})

export const actions = {    
    async getItems({commit}){
        await axios.get(api_url+'menus')
        .then(response => {
            commit("SET_ITEMS", response.data)
        });
    },
    addToCart({commit}, item){
        commit("ADD_CART", item);
        commit("SAVE_DATA");
        commit("GET_CART");
    },
    downCart({commit}, item){
        commit("REDUCE_CART", item);
        commit("SAVE_DATA");
    },  
    upCart({commit}, item){
        commit("UPDATE_CART", item);
        commit("SAVE_DATA");
    },  
    removeCart({commit}, item){
        commit("REMOVE_CART", item);
        commit("SAVE_DATA");
    },
    getCart({commit}){
        commit("GET_CART");
    }  
}

export const mutations =  {
    SET_ITEMS: (state, items) => {
        state.items = items;
    },
    ADD_CART:  (state, item) => {
        var uiid = item.moc+"_"+item.iid;
        //`no_of_item`, `is_half`, `item_price`, `total_price`, `status`, `bill_id`, `menu_id`, `addon_id`
        // console.log(item.moc);
        // console.log(item.iid);        
        // console.log(uiid);
        // console.log(item.item);
            
        let exists = false      
        for(const cartItem of state.cart){
            // if(cartItem.id == item.id){
            if(cartItem.cid == uiid){
            cartItem.qty = cartItem.qty +1;
            exists = true;
            break;
            }        
        }
        if(!exists){
            // cid, iid, aid, price, is_half, qty, is_discount, addon_half
            const data = {
                cid: uiid,
                iid: item.item.id,
                name: item.item.item.name,
                price: item.item.price
            };
            // console.log(data);
            state.cart.push({
            ...data,
            qty : 1, 
            });            
        }            
    }, 
    REDUCE_CART: (state, item) => {          
        const zemsCart = state.cart           
        const pid = zemsCart.findIndex(cart_item => cart_item.cid == item)            
        zemsCart[pid].qty -= 1
        if(zemsCart[pid].qty <1 ){
            zemsCart.splice(pid, 1)
        } 
    },
    UPDATE_CART: (state, item) => {          
        const zemsCart = state.cart           
        const pid = zemsCart.findIndex(cart_item => cart_item.cid == item)            
        zemsCart[pid].qty += 1         
    },
    REMOVE_CART: (state, item) => {          
        const zemsCart = state.cart           
        const pid = zemsCart.findIndex(cart_item => cart_item.cid == item)            
        zemsCart.splice(pid, 1)         
    },
    SAVE_DATA: (state) => {
        window.localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    GET_CART: (state) =>{
        state.cart = JSON.parse(window.localStorage.getItem('cart') || "[]"); 
    }
}

export const getters = {
    async mtest(state){
        await axios.get(api_url+'settings')
        .then(response => {
            return state.site = response.data;
        });
    },
    cart: state => state.cart,    
    // cartItems: state => state.cart,
    cartTotal: state => {
        return state.cart.reduce((acc, cartItem) => {
        return (cartItem.qty * cartItem.price) + acc;
        }, 0).toFixed(2);
    },
    cartQuantity: state => {
        return state.cart.reduce((acc, cartItem) => {
        return cartItem.qty + acc;
        }, 0);        
    },
    // getTodoById: (state) => (id) => {
    //     return state.todos.find(todo => todo.id === id)
    // }
    // a call method component.vue
    // store.getters.todos.getTodoById(2)
}