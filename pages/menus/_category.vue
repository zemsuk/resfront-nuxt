<template>
  <div>
    <Items v-bind:items="items" />    
  </div>
</template>

<script>
export default {
  name: 'CategoryPage',
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
