<template>
  <div class="container">
    <div class="myZems">Test </div>
    <div class="medium-4 gap-1">
      <div class="span-3 medium-3 gap-1">
        <div  v-for="(product, index) in items" :key="'item_'+index" class="item" v-if="product.category.slug == $route.params.category">
          
          <div class="title">{{product.item.name}}</div>
          <p>{{product.price}}</p>
          <p>{{product.category.slug}}</p>
          <p>{{product.item.details}}</p>
          <div v-if="product.addons != '' ">
            <button @click="pop_open('pop_'+product.id)" class="link">Cart +</button>
            <div class="popup" :id="'pop_'+product.id">
              <div class="addon">
                <div class="all-2">
                  <div class="padding-1">{{product.item.name}}</div>
                  <div class="close" @click="close('pop_'+product.id)"  :data-id="product.id">X</div>
                </div>
                <hr/>
                <div v-for="(addon, i) in product.addons" :key="'addon_'+i" class="all-4 padding-1">
                  <div>{{addon.extra.name}}</div>            
                  <div>{{addon.price}}</div>            
                  <div>{{addon.sales}}</div>            
                  <button @click="addCart(product)" class="link">Cart</button>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <button @click="addCart(product)" class="link">Cart</button>
          </div>
            
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
    pop_open(pid){
      var popup = document.getElementById(pid);
      popup.style.visibility="visible";
    },  
    close(pid){
      var popup = document.getElementById(pid);
      popup.style.visibility="hidden";
    },
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
