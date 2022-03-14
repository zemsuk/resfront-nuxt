<template>
  <div class="container">    
    <div class="medium-4 gap-1">
      <div class="span-3 medium-3 gap-1 items">
        <div  v-for="(product, index) in items" :key="'item_'+index" class="item" v-if="product.category.slug == $route.params.category">
          <Item v-bind:product="product"  />
          
        </div>
        <div :data-msg="caturl" v-else-if="product.is_favourite == true && (caturl == 'favourite' || !caturl ) ">
          <Item v-bind:product="product" />
        </div>
      </div>
      <div class="cart">
        <CartDetails />
      </div>
    </div> 
  </div>           
</template>

<script>
export default {
  name: 'Items',
  data() {
      return {
          caturl: this.$route.params.category,
      } // return
  }, // Data
  computed: {
    items(){
      return this.$store.state.items
    }
  },
  mounted(){
    this.$store.dispatch('getItems')
  }  
}

</script>
