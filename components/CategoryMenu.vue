<template>
    <div class="cat_menu">
        <ul class="category">
          <li><NuxtLink to="/menus/favourite">Favourite</NuxtLink></li>
          <li v-for="(category, index) in cat_menu" :key="'cat_'+index"><NuxtLink :to="'/menus/'+category.slug">{{category.name}}</NuxtLink></li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['cat_menu']
}
</script>