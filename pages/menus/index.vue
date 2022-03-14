<template>
  <div>
    <div class="container">
      <CategoryMenu v-bind:cat_menu="categories" />
    </div>
    <Items />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MenuPage',
  data() {
    return {
        categories: [],
    } // return
  },
  async created(){    
      try{
      const response = await axios.get("https://resback.ezesoft.uk/api/takeaway_cat/");
      this.categories = response.data;
      } catch (e){
      console.error(e);
      }
  },
}
</script>
