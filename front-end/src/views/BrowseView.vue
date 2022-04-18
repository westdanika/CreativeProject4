<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('Contemporary')" href="#" class="pure-menu-link">Contemporary</a></li>
      <li class="pure-menu-item"><a @click="select('Dystopian')" href="#" class="pure-menu-link">Dystopian</a></li>
      <li class="pure-menu-item"><a @click="select('Fantasy')" href="#" class="pure-menu-link">Fantasy</a></li>
      <li class="pure-menu-item"><a @click="select('Historical Fiction')" href="#" class="pure-menu-link">Historical Fiction</a></li>
      <li class="pure-menu-item"><a @click="select('Mystery')" href="#" class="pure-menu-link">Mystery</a></li>
      <li class="pure-menu-item"><a @click="select('Science Fiction')" href="#" class="pure-menu-link">Science Fiction</a></li>
    </ul>
  </div>
  <ProductList :products="products" />
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'BrowseView',
  components: {
    ProductList
  },
  data() {
    return {
      genre: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.genre === this.genre);
    }
  },
  methods: {
    select(genre) {
      this.genre = genre;
    }
  }
}
</script>

<style>
.pure-menu-item {
  padding: 10px;
  margin: 10px;
}
li {
  background: #D9D9D9;
  border-radius: .25rem;
}
</style>
