<template>
    <div class="main__notification notification notification--verif">
        <svg width="22" height="22">
            <use xlink:href='/img/sprite.svg#warn'></use>
        </svg>
        <p>Пожалуйста,<a class="notification__link" href="#test"> пройдите верификацию</a> для того, чтобы пользоваться всем функционалом 
            кошелька Berty Wallet. 
        </p>
        <button class="notification__close-btn"></button>
    </div>
    <div class="main__content-wrapper">
        <div class="main__content">
            <div class="main__all-accounts all-accounts">
                <h4 class="all-accounts__title">Все счета</h4>
                <div class="all-accounts__currency all-accounts__currency--rubles">
                    <div class="all-accounts__currency-circle">₽</div>
                    <p class="all-accounts__balance">
                        30 989. <span>70</span>
                    </p> 
                </div>
                <div class="all-accounts__currency all-accounts__currency--dollars">
                    <div class="all-accounts__currency-circle">$</div>
                    <p class="all-accounts__balance">
                        30 989. <span>70</span>
                    </p> 
                </div>
            </div>
            <div class="main__notification notification notification--help">
                <svg width="23" height="23" class="colored-svg">
                    <use xlink:href='/img/sprite.svg#question'></use>
                </svg>
                <p>Если у вас появились вопросы, вы можете обратится с ними 
                    в <a class="notification__link" href="#test"> службу поддержки</a>. 
                </p>
            </div>
            <div class="main__history history">
                <div class="history__top">
                    <h3 class="history__title">
                        История
                    </h3>
                    <div class="history__date date">
                        <p class="date__number">27</p>
                        <p class="date__month">июля</p>
                        <p class="date__year">2019</p>
                    </div>
                </div>
                <ul class="history__list">
                    <li class="history__item history__item--mail out">
                        <div class="history__text">
                            <svg width="22" height="22" >
                                <use xlink:href='/img/sprite.svg#mail'></use>
                            </svg>
                            Перевод на petrpetrovich@gmail.com
                        </div>
                        <p>10,50 ₽</p>
                    </li>   
                    <li class="history__item history__item--card in">
                        <div class="history__text">
                            <svg width="23" height="23" class="colored-svg">
                                <use xlink:href='/img/sprite.svg#cash-in'></use>
                            </svg>
                            Пополнение карты VISA ****...5656
                        </div>
                        <p>10,50 ₽</p>
                    </li>   
                </ul>
                <div class="history__bottom">
                    <p class="history__show-all">
                        Посмотреть все операции
                    </p>
                </div>
            </div>
        </div>
        <div class="main__aside">
            <div class="main__feature feature feature--taxi">
                <h3 class="feature__title">
                    Переведи деньги
                </h3>
                <h3 class="feature__title">
                    другу за такси 
                </h3>
                <div class="feature__text">
                    Без комиссии внутри системы Berty Wallet 
                </div>
                <img class="feature__img" src="/img/taxi.png" alt="taxi">
            </div>
            <div class="main__feature feature feature--konditer">
                <h3 class="feature__title">
                    Получай оплату 
                </h3>
                <h3 class="feature__title">
                    за свои услуги 
                </h3>
                <div class="feature__text">
                    Просто отправь ссылку клиенту -
                    зачисление проходит моментально
                </div>
                <img class="feature__img" src="/img/konditer.png" alt="konditer">
            </div>
        </div>
    </div>
</template>