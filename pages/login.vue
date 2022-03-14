<template>
    <div>
        <h1>Login Page</h1>
        <pre>
            {{zems_data}}
        </pre>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
    // layout: 'nhf',
    computed:{    
        zems_data(){
        return this.$store.state.mdata
        }
    },
    mounted(){
        this.$store.dispatch('getCart')
    }    
}
</script>