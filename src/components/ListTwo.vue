<template>
    <div class="ListOne">
        <ul>
            <li v-for="(item, index) in salePrice" :key="index">
                <div>{{ item.name }}</div>
                <div>{{ item.price }}</div>
            </li>
        </ul>
        <div class="action"><el-button type="primary" @click="reducePrice">商品降价</el-button></div>
    </div>
</template>

<script>
export default {
    computed:{
        list(){
            return this.$store.state.product;
        },
        salePrice() {
            return this.$store.getters.saleProducts;
        }
    },
    methods:{
        reducePrice(){
            // this.$store.commit('handleReducePrice',30);
            this.$store.dispatch('reducePrice',30);
        }
    }
}
</script>

<style scoped>
ul{
  list-style:none;
}
ul>li{
    background: #E8F3FE;
    color: #ffffff;
    font-size: 30px;
    margin-bottom: 20px;
    text-align: center;
}
</style>