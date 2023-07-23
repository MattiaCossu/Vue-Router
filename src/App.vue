<template>
  <div id="app">
    <div id="flashMessage" v-if="GStore.flashMessage">
      <h4>{{ GStore.flashMessage }}</h4>
    </div>
    <nav>
      <router-link class="link" :to="{ name: 'EventList' }">Events</router-link>
      <hr>
      <router-link class="link" :to="{ name: 'About' }">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  inject: ['GStore'],
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@keyframes yellowfade {
  from {
    color: #2c3e50;
  }
  to {
    color: #fff;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 5s;
}

nav {
  display: flex;
  justify-content: center;
  flex-direction: row;
  padding: 30px;
}

nav a.link {
  font-weight: bold;
  color: #2c3e50;
}

hr{ 
  border: none;
  border-left:1px solid hsla(200, 10%, 50%,100);
  height: 16px;
  width: 1px;  
  margin: 5px 5px 5px 6px     
}

a.link {
  display: block;
  text-decoration: none;
	position: relative;
	padding: 0.2em 0;
  overflow: hidden;
}

a.link::after {
  content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 0.1em;
	background-color: rgb(2, 100, 186);
	opacity: 0;
	transition: opacity 300ms, transform 300ms;
  transform: translate3d(-100%, 0, 0);
  overflow: hidden;
}

a.link:hover::after {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

nav a.router-link-exact-active {
  color: rgb(2, 100, 186);
}

h4 {
  font-size: 20px;
}
</style>
