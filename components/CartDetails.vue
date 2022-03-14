<template>
    <div class="cart-details">
        <h4>Cart</h4> 
        <div v-if="cartQuantity > 0">
            <div class="all-4 cart-head">
                <div class="span-3">Item Name</div>
                <div>Price</div>
            </div>
            <div v-for="(product, index) in cart" :key="'ci_'+index" class="item all-4">
                <div class="span-4">{{product.cid}}: {{ product.name }}</div>
                <div class="all-4 span-4">
                    <div class="span-3 all-6">
                        <button @click="downCart(product.cid)">-</button>
                        <div>{{product.qty}}</div>
                        <button @click="upCart(product.cid)">+</button>
                        <button @click="removeCart(product.cid)">x</button>
                    </div>
                    <div class="price">$ {{product.price * product.qty}}</div>
                </div>
            </div>
            <hr> 
            <div class="all-2">
                <div><b>Total: </b> {{cartQuantity}}</div>
                <div class="text-right"><b>$ {{cartTotal}}</b></div>
            </div>
        </div>
        <div v-else>
            <p>The Cart is Empty!! 😢</p>
        </div>
        <pre>
            {{cart}}
        </pre>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    props: ['cartData'], 
    computed:{
        ...mapGetters(['cart', 'cartQuantity', 'cartTotal']),               
    }, 
    methods:{
        ...mapActions(['downCart', 'upCart', 'removeCart']),        
    },
    // mounted(){
    //     this.$store.dispatch('getCart')
    // }  
}
</script>
