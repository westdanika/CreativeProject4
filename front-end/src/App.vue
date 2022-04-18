<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <img src="/images1/Northwest Repository-logos_transparent.png">
        </router-link>
      </div>
      <div id="side">
        <div class="menu-item reviews">
          <button><a href="http://northwestrepository.westdanika.com/">Reviews</a></button>
        </div>
        <router-link to="/browse">
          <div class="menu-item browse">
            <button>Browse</button>
          </div>
        </router-link>
        <router-link to="/cart">
          <div class="menu-item">
            <button>Cart: {{numItemsInCart}} items</button>
          </div>
        </router-link>
      </div>
    </div>
    <router-view/>
  <div class="footer">
    <div class="contact-info">
      <p><a href="https://github.com/westdanika/CreativeProject3">GitHub CreativeProject3 Portfolio</a></p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    numItemsInCart() {
      return this.$root.$data.cart.length;
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  //padding: 25px 100px;
  font-family: "Voltaire", sans-serif;
}

#menu {
  padding: 25px 75px 0px 75px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 25px;
  background: #D9D9D9;
}

#menu a {
  color: #F76F72;
  text-decoration: none;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 300px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: right;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  margin-left: 50px;
}

.menu-item p {
  margin: 0px;
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

/* Footer Styles */
.footer {
  background-color: #D9D9D9;
  /* FIX THE BACKGROUND COLOR */
  height: 6em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
</style>
