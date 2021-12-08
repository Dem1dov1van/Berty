<template>
    <header class="main__header header">
        <div class="header__toggle-button">

        </div>
        <NamePlate />
        <!-- <div class="header__balance">
            <p>Баланс: </p>
            <b> 10 000.00 Р</b>
        </div> -->
        <div class="header__group-hot-btn group-hot-btn">
            <div class="group-hot-btn__language language">
                <div class="language-circle-wrap">
                </div>
            </div>
            <div class="group-hot-btn__nav-links">
                <ul class="group-hot-btn__nav-list nav-list">
                    <li class="nav-list__item">
                        <router-link to="/user/settings">
                            <svg width="22" height="22">
                                <use xlink:href='/img/sprite.svg#settings'></use>
                            </svg>
                        </router-link>
                    </li>
                    <li class="nav-list__item">
                        <router-link to="/user/notifications">
                            <svg width="22" height="22">
                                <use xlink:href='/img/sprite.svg#notification'></use>
                            </svg>
                        </router-link>
                    </li>
                    <li class="nav-list__item">
                        <router-link to="/user/faq">
                            <svg width="22" height="22">
                                <use xlink:href='/img/sprite.svg#question'></use>
                            </svg>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="group-hot-btn__mail">
                <svg width="22" height="22">
                    <use xlink:href='/img/sprite.svg#user'></use>
                </svg>
                <p>Evgeniya@gmail.com</p>
            </div>
        </div>

    </header>
</template>

<script>
import NamePlate from './NamePlate.vue'
export default {
    components: {
        NamePlate

    }
}
</script>
