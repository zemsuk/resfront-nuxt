<template>
    <div class="container all-6 nav">
        <div><NuxtLogo /></div>        
        <div class="span-5">
            <ul>
                <li><NuxtLink to="/">Homes</NuxtLink></li>
                <li><NuxtLink to="/menus">Menus</NuxtLink></li>
                <li><NuxtLink to="/cart">Cart</NuxtLink></li>
                <li><NuxtLink to="/setting">Setting</NuxtLink></li>
                <li><NuxtLink to="/login">Login</NuxtLink></li>
            </ul>
        </div>
        <div class="span-6">
            <ul class="category">
                <li><NuxtLink to="/menus/favourite">Favourite</NuxtLink></li>
                <li v-for="(category, index) in categories" :key="'cat_'+index"><NuxtLink :to="'/menus/'+category.slug">{{category.name}}</NuxtLink></li>
            </ul>
        </div>        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'NavBar',
    data() {
      return {
          categories: []
      } // return
    }, // Data
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
