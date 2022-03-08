<template>
  <div class="container">
    <div class="medium-4 gap-1">
      <div class="span-3 medium-3 gap-1">
        <div v-for="(product, index) in items" :key="'item_'+index" class="item" v-if="product.category.slug == $route.params.category">
          <!-- <div class="image">
            <img :src="product.image" alt="">
          </div> -->
          <div class="title">{{product.item.name}}</div>
          <p>{{product.price}}</p>
          <p>{{product.category.slug}}</p>
          <p>{{product.item.details}}</p>
          <button @click="addCart(product)" class="link">Cart</button>
            
        </div>
      </div>
      <div>
        <CartDetails v-bind:cartData="zemsCart" />
      </div>
    </div> 
    {{items}}   
  </div>           
</template>

<script>
import CartDetails from './CartDetails.vue'
import axios from 'axios'
export default {
  name: 'Items',
  components:{
    CartDetails
  }, 
  props: ['items'], 
  data() {
      return {
          produtcs: [],
          zemsCart : []
      } // return
  }, // Data
  async created(){
    try{
      const response = await axios.get("https://resback.ezesoft.uk/api/menus/");
      this.produtcs = response.data;
    } catch (e){
      console.error(e);
    }
  },
  mounted: function(){
    this.zemsCart = JSON.parse(localStorage.getItem('zemsCart') || "[]")
  },
  watch: {
    zemsCart: {
      handler(cartValue){
        localStorage.setItem('zemsCart', JSON.stringify(cartValue));
      }, deep: true
    }
  },
  methods : {
    addCart(product) {
      let exists = false
      
      for(const cartItem of this.zemsCart){
        if(cartItem.id == product.id){
          cartItem.qty = cartItem.qty +1;
          exists = true;
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
