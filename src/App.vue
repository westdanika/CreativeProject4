<template>
  <div id="app">
    <div id="menu">
      <div id="brand">
        <router-link to="/">
          <img src="/images/logo.png">
        </router-link>
      </div>
      <div id="side">
        <router-link to="/browse">
          <div class="menu-item browse">
            <img src="/images/globe.png">
            <p>Browse</p>
          </div>
        </router-link>
        <router-link to="/cart">
          <div class="menu-item">
            <img src="/images/love.png">
            <p>{{numItemsInCart}} items</p>
          </div>
        </router-link>
      </div>
    </div>
    <router-view/>
  <div class="footer">
    <div class="contact-info">
      <p><a href="https://github.com/BYUCS260/grocery-store-westdanika">GitHub Lab3 Portfolio</a></p>
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
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
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
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

/* Footer Styles */
.footer {
  background-color: #D9D9D9;
  /* FIX THE BACKGROUND COLOR */
  height: 6em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
</style>
