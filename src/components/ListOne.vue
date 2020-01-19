<template>
    <div class="ListOne">
        <ul>
            <li v-for="(item, index) in saleProducts" :key="index">
                <div>{{ item.name }}</div>
                <div>{{ item.price }}</div>
            </li>
        </ul>
        <div class="action"><el-button type="primary" @click="reducePrice">商品降价</el-button></div>
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
    computed: {
        // list() {
        //     return this.$store.state.product;
        // },
        // salePrice() {
        //     return this.$store.getters.saleProducts;
        // }
        ...mapState([
            'product'
        ]),
        ...mapGetters([
            'saleProducts'
        ])
    },
    methods: {
        // ...mapActions([
        //     "reducePrice"
        // ])
        reducePrice(){
            // this.$store.commit('reducePrice',10);
            this.$store.dispatch('reducePrice',10);
        }
    }
};
</script>

<style scoped>
ul {
    list-style: none;
}
ul > li {
    background: pink;
    color: #ffffff;
    font-size: 30px;
    margin-bottom: 20px;
    text-align: center;
}
</style>
