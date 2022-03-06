<template>
  <div>
    <div class="container">
        <h1>Settings</h1>
        <p>{{settingData}}</p>
        <form action="" @submit.prevent="postSetting" method="POST">
          <div><input type="text" name="key" /></div>
          <div><input type="text" name="value" /></div>
          <div><input type="text" name="details" /></div>
          <button>Submit</button>
        </form>
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
  methods:{
    postSetting(e){
      const data = Object.fromEntries(new FormData(e.target));
      axios.post('http://resback.ezesoft.uk/api/settings/', data)
      .then((res)=>{
        console.log(res);
      });
    }
  },
  async asyncData({$axios}){
    try{
      const settingData = await $axios.$get("http://resback.ezesoft.uk/api/settings/");
      return { settingData };
    } catch (e){
      console.error(e);
    }
  },

}
</script>
