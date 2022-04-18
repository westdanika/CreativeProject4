<template>
  <div class="wrapper">
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <div class="image">
          <img :src="'/images1/products/'+product.image">
        </div>
        <div class="info">
          <h1>{{product.name}}</h1>
          <p>{{product.author}}</p>
        </div>
        <div class="price">
          <h2>{{product.price}}</h2>
          <button @click="addToCart(product)" class="auto">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ProductList',
  data() {
    return {
      title: "",
      author: "",
      genre: "",
      price: null,
      addItem: null,
    }
  }
  props: {
    products: Array
  },
  methods: {
//    addToCart(product) {
//      this.$root.$data.cart.push(product);
//      //console.log(this.$root.$data.cart);
//    }
    async addToCart(product) {
      try {
        let response = await axios.post("/api/cart" , {
          title: this.title,
          author: this.author,
          genre: this.genre,
          price: this.price,
        });
        this.addItem = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Voltaire", sans-serif;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 20px;
  margin-top: 50px;
  width: 200px;
  height: 425px;
  border: 2px solid #333;
  border-radius: 0.25rem;
}

.product img {
  margin-top: 10px;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #D9D9D9;
  color: #000;
  padding: 10px 10px;
  font-family: "Voltaire", sans-serif;
}

.info h1 {
  font-size: 16px;
  text-align: center;
  align-items: center;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
  text-align: center;
}

.price {
  display: flex;
  margin-top: 10px;
  padding: 0px 10px;
}


button {
  height: 50px;
  background: #D9D9D9;
  color: #F76F72;
  border-color: #F76F72;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}

button:hover {
  color: #D9D9D9;
  background-color: #F76F72;
}

.auto {
  margin-left: auto;
}
</style>
