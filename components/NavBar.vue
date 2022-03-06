<template>
    <div class="container all-6 nav">
        <div><NuxtLogo /></div>        
        <div class="span-5">
            <ul>
                <li><a href="/">Homes</a></li>
                <li><a href="/menus">Menus</a></li>
                <li><a href="/cart">Cart</a></li>
                <li><a href="/setting">Setting</a></li>
                <li><a href="/login">Login</a></li>
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
