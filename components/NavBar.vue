<template>
    <header class="header">
        <div class="container all-6">
            <div class="logo"><nuxt-link to="/"><img :src="require(`static/images/webpoka.png`)"  alt="Logo"></nuxt-link></div>        
            <div class="span-5">
                <ul class="nav">
                    <li><NuxtLink to="/">Homes</NuxtLink></li>
                    <li><NuxtLink to="/menus">Menus</NuxtLink></li>
                    <li><NuxtLink to="/setting">Setting</NuxtLink></li>
                    <li><NuxtLink to="/login">Login </NuxtLink></li>
                    <li><NuxtLink to="/cart">Cart <span class="cart-count">{{cartQuantity}}</span></NuxtLink></li>
                </ul>
            </div>
        </div>                  
    </header>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name:'NavBar',    
    computed:{ 
        ...mapGetters(['cartQuantity']),
    },
    mounted(){
        this.$store.dispatch('getCart')
    } 
}
</script>
