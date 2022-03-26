<template>
  <div class="wrapper">
    <div class="products">
      <div v-if="productAmount === 0" class="emptyCart">Your Cart is Empty</div>
      <div v-else class="product" v-for="product in cart" :key="product.id">
        <div class="info">
          <h1>{{product.name}}</h1>
          <p>{{product.country}}</p>
        </div>
        <div class="image">
          <img :src="'/images/products/'+product.image">
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
  clear: left;
  margin: 20px;
  padding: 10px;
  border: 2px solid #333;
}

.info {
  //float: left;
  background: #F2921D;
  color: #000;
  padding-right: 100px;
  padding-left: 40px;
  margin: -10px;
  width: 500px;
}

.image {
  margin-left: 150px;
  margin-right: 150px;
  border: 2px solid #333;
}

.image img {
  height: 150px;
  width: 200px;
  object-fit: cover;
}

.price {
  clear: left;
  float: right;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

</style>
