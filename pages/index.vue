<template>
  <div>
    <Tutorial/>
    <div>
      {{items}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
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
