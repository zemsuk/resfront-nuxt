<template>
    <div class="item-details">
        <div class="title">{{product.item.name}}</div>
          <div class="category-title">{{product.category.name}}</div>
          <p>{{product.price}}</p>
          <p>{{product.item.details}}</p>
          <p>{{product.is_favourite}}</p>
          <div v-if="product.addons != '' ">
            <button @click="pop_open('pop_'+product.id)" class="link">Cart +</button>
            <div class="popup" :id="'pop_'+product.id">
              <div class="addon">
                <div class="all-2">
                  <div class="padding-1">{{product.item.name}}</div>
                  <div class="close" @click="close('pop_'+product.id)"  :data-id="product.id">X</div>
                </div>
                <hr/>
                <div v-for="(addon, i) in product.addons" :key="'addon_'+i" class="all-4 padding-1">
                  <div>{{addon.extra.name}}</div>            
                  <div>{{addon.price}}</div>            
                  <div>{{addon.sales}}</div>            
                  <button @click="addToCart({moc:'child', iid:addon.id, item:product})" class="link">Cart</button>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <button @click="addToCart({moc:'main', iid:product.id, item:product})" class="link">Cart</button>
          </div>
    </div>
</template>

<script>
import { mapActions} from 'vuex';

export default {
    props: ['product'],    
    methods : { 
        ...mapActions(['addToCart']), 
        pop_open(pid){
            var popup = document.getElementById(pid);
            popup.style.visibility="visible";
        },  
        close(pid){
            var popup = document.getElementById(pid);
            popup.style.visibility="hidden";
        },        
    }
}
</script>