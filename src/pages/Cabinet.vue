<template>
    <div class="main-wrapper">
        <div class="container">
            <Main />
            <Sidebar />
        </div>
    </div>
</template>

<script>
import Main from '../components/Main.vue'
import Sidebar from '../components/Sidebar.vue'

export default ({
  components: { Main, Sidebar },
  data(){
      return{

      }
  }
})
</script>
