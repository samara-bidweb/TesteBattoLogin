<script>
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    mounted(){
      this.$store.commit('initialiseStore')
    },
    components:{
      HelloWorld
    },
    methods:{
      logout(){
        this.$store.commit('logout')
        this.$router.push('/login')
      }
  },
}
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink v-if="!$store.state.email" to="/login">Login</RouterLink>
        <a v-else-if="$store.state.email" @click="logout">Logout</a>
      </nav>
      <RouterView />
    </div>
  </header>
</template>