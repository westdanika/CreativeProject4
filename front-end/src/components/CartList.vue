<template>
  <div class="wrapper">
    <div class="products">
      <div v-if="productAmount === 0" class="emptyCart">Your Cart is Empty</div>
      <div v-else class="product" v-for="product in cart" :key="product.id">
        <div class="info">
          <h1>{{product.title}}</h1>
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
import axios from 'axios';

export default {
  name: 'CartList',
  data() {
    return {
    title: "",
    author: "",
    genre: "",
    price: null,
    findItem: null,
    cart: [],
    productAmount: 0,
    error: "",
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async removeFromCart(product) {
      //console.log("Removing item from cart");
      //console.log(this.$root.$data.products);
      this.findItem = product;
      //console.log(this.findItem);
      try {
        await axios.delete("/api/cart/" + this.findItem._id);
        this.findItem = null;
        this.getItems();
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    async getItems() {
      //console.log("Getting all items in cart");
      try {
        let response = await axios.get("/api/cart");
        //console.log(response.data);
        this.cart = response.data;
        this.productAmount = response.data.length;
        //console.log(this.cart);
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
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
  width: 200px;
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
