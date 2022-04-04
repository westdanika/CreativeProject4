<template>
  <div class="wrapper">
    <div class="products">
      <div v-if="productAmount === 0" class="emptyCart">Your Cart is Empty</div>
      <div v-else class="product" v-for="product in cart" :key="product.id">
        <div class="info">
          <h1>{{product.name}}</h1>
          <p>{{product.author}}</p>
        </div>
        <div class="price">
          <h2>{{product.price}}</h2>
          <button @click="removeFromCart(product)" class="auto">Remove from Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    cart: Array
  },
  computed: {
    productAmount() {
      return this.$root.$data.cart.length;
    }
  },
  methods: {
    removeFromCart(product) {
      this.$root.$data.cart.splice(this.$root.$data.cart.indexOf(product),1);
      //console.log(this.$root.$data.cart);
    }
  }
}
</script>

<style scoped>
.emptyCart {
  text-align: center;
}

.product {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  padding: 10px;
  border: 2px solid #333;
  height: 125px;
  border-radius: .25rem;
}

.info {
  background: #D9D9D9;
  color: #000;
  padding-right: 100px;
  padding-left: 40px;
  padding-bottom: 10px;
  margin: -10px;
  width: 500px;
  text-align: center;
}

.price {
  //clear: left;
  //float: right;
  //margin: 25px;
  text-align: center;
}

.price h2 {
  //float: left;
}

button {
  height: 30px;
  background: #FFFFFF;
  color: #F76F72;
  border-color: #F76F72;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

button:hover {
  color: #FFFFFF;
  background-color: #F76F72;
}

.emptyCart {
  padding-bottom: 25px;
}

</style>
