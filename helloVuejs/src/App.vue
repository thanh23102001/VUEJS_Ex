    <!-- 
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
   </ul> 

  <comp-header />
  <list-user/>
      <h1>{{msg}}</h1>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
import CompHeader from './components/CompHeader.vue';
import ListUser from'./components/ListUser.vue';
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    CompHeader,
    ListUser
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
-->
<template>
  <!-- <center id="app">
    <h1 style="color: green">GeeksforGeeks</h1>
    <h2><u>To Do List</u></h2>
    <Task task="Run a mile" index="0" />
    <Task task="Code on GFG" index="1" />
    <Task task="Clean Room" index="2" />
    <Task task="Go to Swim" index="3" />
    <Task task="Buy Dog Food" index="4" />
  </center>
</template>
  
<script>
  import Task from "./components/Task";
  export default {
    name: "App",
    components: { Task },
  };
</script> -->
<div id="app">
    <div class="nav-bar">
        <li class="nav-item">
      <router-link class="nav-link" to="/blog">Blog</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/services">Services</router-link>
    </li>
    <li class="nav-item">
       <router-link class="nav-link" to="/contact">contact</router-link>
    </li>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.nav-bar {
  display: flex;
}
.nav-bar span {
  margin-right: 5px;
}
</style>