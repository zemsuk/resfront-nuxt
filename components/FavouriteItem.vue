
<template>
  <div class="container">
    <div class="medium-4 gap-1">
      <div class="span-3 medium-3 gap-1">
        <div v-for="(product, index) in produtcs" :key="'item_'+index" class="item" v-if="product.is_favourite == true">
          <!-- <div class="image">
            <img :src="product.image" alt="">
          </div> -->
          <div class="title">{{product.item.name}}</div>
          <p>{{product.price}}</p>
          <p>{{product.is_favourite}}</p>
          <p>{{product.item.details}}</p>
          <button @click="addCart(product)" class="link">Cart</button>
            
        </div>
      </div>
      <div>
        <CartDetails v-bind:cartData="zemsCart" />
      </div>
    </div>    
  </div>           
</template>

<script>
import CartDetails from './CartDetails.vue'
import axios from 'axios'
export default {
  name: 'FavouriteItems',
  components:{
    CartDetails
  },  
  data() {
      return {
          produtcs: [],
          zemsCart : [],
      } // return
  }, // Data
  async created(){
    try{
      const response = await axios.get("http://resback.ezesoft.uk/api/menus/");
      this.produtcs = response.data;
    } catch (e){
      console.error(e);
    }
  },
  
  methods : {
    addCart(product) {
      let exists = false
      
      for(const cartItem of this.zemsCart){
        if(cartItem.id == product.id){
          cartItem.qty = cartItem.qty +1;
          exists = true;
          console.log(product.name);
          break;
        }        
      }
      if(!exists){
        this.zemsCart.push({
          ...product,
          qty : 1, 
        });   
        // console.log(product.id);         
      } 
      
    }
  }
}

</script>
