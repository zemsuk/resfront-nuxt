<template>
    <div>
        <h4>Cart</h4>        
        <div v-for="(product, index) in cartData" :key="'ci_'+index" class="item all-4">
            <div class="span-4">{{product.item.name}}</div>
            
            <div class="all-4 span-4">
                <div class="span-3 all-6">
                    <button @click="downCart(product)">-</button>
                    <div>{{product.qty}}</div>
                    <button @click="upCart(product)">+</button>
                    <button @click="removeCart(product)">x</button>
                </div>
                <div class="price">$ {{product.price * product.qty}}</div>
            </div>
        </div>
        <div class="all-2">
            <div><b>Total:</b> {{totalQty}}</div>
            <div class="text-right"><b>$ {{totaPrice}}</b></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['data', 'cartData'], 
    computed:{
        totaPrice(){
            let sum = 0;
            for(const product of this.cartData){
                sum += product.price * product.qty
            }
            return sum;
        },
        totalQty(){
            let sum = 0;
            for(const product of this.cartData){
                sum += product.qty
            }
            return sum;
        }
    }, 
    methods:{
        downCart(product){
            const zemsCart = this.cartData            
            const pid = zemsCart.findIndex(item => item.id == product.id)            
            zemsCart[pid].qty -= 1
            if(zemsCart[pid].qty <1 ){
                zemsCart.splice(pid, 1)
            } 
            this.$emit('update:cartData', zemsCart)
        },
        upCart(product){
            const zemsCart = this.cartData            
            const pid = zemsCart.findIndex(item => item.id == product.id)            
            zemsCart[pid].qty += 1            
            this.$emit('update:cartData', zemsCart)
        },
        removeCart(product){
            const zemsCart = this.cartData            
            const pid = zemsCart.findIndex(item => item.id == product.id)
            zemsCart.splice(pid, 1)
            this.$emit('update:cartData', zemsCart)
        }
    }  
}
</script>
