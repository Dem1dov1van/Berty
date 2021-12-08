<template>
  <div class="home">
    <img alt="logo" src="/img/logo.png">
    <router-link to="/user" class="home__btn">
      <p >
        Войти
      </p>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
  .home{
    min-height: 100vh;
    background-color: var(--main-color);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .home__btn{
    border: 1px solid #333;
    border-radius: 8px;
    padding: 8px 16px;
    margin-top: 12px;
  }
  a{
    color: #333;
    transition: .2s ease all;
  }
  a:hover {
    padding: 8px 18px;
    background-color: #56d06b;
  }
</style>
