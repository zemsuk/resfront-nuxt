<template>
  <div>
    <NavBar />
    <div class="container">
        <h1>Hid</h1>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SettingPage',
  data(){
      return{
          setting: []
      }
  },
  async created(){
    try{
      const response = await $axios.$get("/settings");
      this.setting = response.data;
    } catch (e){
      console.error(e);
    }
  },

}
</script>
