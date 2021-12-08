<template>
    <main class="main">
        <Header />
        
        <router-view></router-view>
        <div class="main__notification notification notification--verif">
            <svg width="22" height="22">
                <use xlink:href='/img/sprite.svg#warn'></use>
            </svg>
            <p>Пожалуйста,<a class="notification__link" href="#test"> пройдите верификацию</a> для того, чтобы пользоваться всем функционалом
                кошелька Berty Wallet.
            </p>
            <button class="notification__close-btn"></button>
        </div>
    </main>
</template>
<script>
import Header from "@/components/Header/Header.vue"


export default {
  components: { Header },
    data(){
        return{

        }
    }
}
</script>

