import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {//Vuex中的data
    product:[
      {
        name: 'JackMa',
        price:800
      },
      {
        name: 'PonyMa',
        price:600
      },
      {
        name: 'Robbin',
        price:400
      },
      {
        name: 'Lei',
        price:300
      }
    ]
  },
  getters:{//Vuex中的计算属性
    saleProducts:(state) => {
      var salePrice = state.product.map(item => {
        return {
          name: `** ${item.name} **`,
          // price: item.price / 2
          price: item.price
        };
      });
      return salePrice;
    }
  },
  mutations: {//Vuex中的methods
    handleReducePrice(state,payload){
      state.product.map((item)=>{
        item.price -= payload;
      });
    }
  },
  actions: {
    reducePrice(context,payload){
      setTimeout(() => {
        context.commit('handleReducePrice',payload);
      }, 1000);
    }
  },
  modules: {
  }
})
