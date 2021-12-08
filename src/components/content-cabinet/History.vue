<template>
    <div class="main__open-page open-page">
        <div class="open-page__solid-content solid-content">
            <h2 class="solid-content__title">История</h2>
            <div class="solid-content__top-filter top-filter">
                <div class="top-filter__filter filter">
                    <p class="filter__name">Дата от:</p>
                    <div class="filter__input">08.06.1999</div>
                </div>
                <div class="top-filter__filter filter">
                    <p class="filter__name">Дата до:</p>
                    <div class="filter__input">08.06.1999</div>
                </div>
                <div class="top-filter__filter filter filter--select">
                    <p class="filter__name">Валюта</p>
                    <div class="filter__input">Все</div>
                </div>
                <div class="top-filter__filter filter filter--select">
                    <p class="filter__name">Система</p>
                    <div class="filter__input">Payeer</div>
                </div>
                <div class="top-filter__filter filter filter--select">
                    <p class="filter__name">Статус</p>
                    <div class="filter__input">Успешно</div>
                </div>
                <div class="top-filter__clear-btn btn">
                    <svg width="12" height="12" class="colored-svg">
                        <use xlink:href='/img/sprite.svg#clear'></use>
                    </svg>
                    Очистить
                </div>
            </div>
            <div class="solid-content__history-list history-list">
                <ul class="history-list__history-day-list history-day-list">
                    <h3 class="history-day-list__title">10.07.2019</h3>
                    <li class="history-day-list__history-item history-item dropdown--js">
                        <div class="history-item__wrap dropdown__head--js">
                            <svg width="22" height="17" class="colored-svg">
                                <use xlink:href='/img/sprite.svg#message'></use>
                            </svg>
                            <p class="history-item__text">Перевод на petrpetrovish@gmail.com</p>
                            <div class="history-item__sum">10,50 ₽</div>
                            <svg width="10" height="6">
                                <use xlink:href='/img/sprite.svg#arrow'></use>
                            </svg>
                        </div>
                        <div class="history-item__info-wrap dropdown__body--js">
                            <div class="history-item__info">
                                <div class="history-item__info-table">
                                    <div>
                                        <p>Сумма платежа</p>
                                        <p class="history-item__summ">10,50 ₽</p>
                                    </div>
                                    <div>
                                        <p>Комиссия</p>
                                        <p class="history-item__percent">00,00 ₽</p>
                                    </div>
                                    <div>
                                        <p>Итого</p>
                                        <p class="history-item__total">10,50 ₽</p>
                                    </div>
                                </div>
                                <div class="history-item__info-table">
                                    <div>
                                        <p>Счет</p>
                                        <p class="history-item__account">P2804063</p>
                                    </div>
                                    <div>
                                        <p>Система</p> 
                                        <p class="history-item__pay-system">Payeer</p>
                                    </div>
                                    <div>
                                        <p>Статус</p>
                                        <p class="history-item__pay-system">Успешно</p>
                                    </div>
                                    <div>
                                        <p>ID операции</p>
                                        <p class="history-item__pay-system">&&&&&&&</p>
                                    </div>
                                </div>
                                <div class="history-item__info-table">
                                    <div>
                                        <p>Дата платежа</p>
                                        <p class="history-item__date">14.07.2019</p>
                                    </div>
                                    <div>
                                        <p>Время платежа</p>
                                        <p class="history-item__time">9:21</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="history-day-list__history-item history-item">
                        <div class="history-item__wrap">
                            <svg width="22" height="17" class="colored-svg">
                                <use xlink:href='/img/sprite.svg#message'></use>
                            </svg>
                            <p class="history-item__text">Перевод на petrpetrovish@gmail.com</p>
                            <div class="history-item__sum">10,50 ₽</div>
                            <svg width="10" height="6">
                                <use xlink:href='/img/sprite.svg#arrow'></use>
                            </svg>
                        </div>
                        <div class="history-item__info-wrap">
                            <div class="history-item__info">
                                <div class="history-item__info-table">
                                    <div>
                                        <p>Сумма платежа</p>
                                        <p class="history-item__summ">10,50 ₽</p>
                                    </div>
                                    <div>
                                        <p>Комиссия</p>
                                        <p class="history-item__percent">00,00 ₽</p>
                                    </div>
                                    <div>
                                        <p>Итого</p>
                                        <p class="history-item__total">10,50 ₽</p>
                                    </div>
                                </div>
                                <div class="history-item__info-table">
                                    <div>
                                        <p>Счет</p>
                                        <p class="history-item__account">P2804063</p>
                                    </div>
                                    <div>
                                        <p>Система</p> 
                                        <p class="history-item__pay-system">Payeer</p>
                                    </div>
                                    <div>
                                        <p>Статус</p>
                                        <p class="history-item__pay-system">Успешно</p>
                                    </div>
                                    <div>
                                        <p>ID операции</p>
                                        <p class="history-item__pay-system">&&&&&&&</p>
                                    </div>
                                </div>
                                <div class="history-item__info-table">
                                    <div>
                                        <p>Дата платежа</p>
                                        <p class="history-item__date">14.07.2019</p>
                                    </div>
                                    <div>
                                        <p>Время платежа</p>
                                        <p class="history-item__time">9:21</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul class="history-list__history-day-list history-day-list">
                    <h3 class="history-day-list__title">10.07.2019</h3>
                    <li class="history-day-list__history-item history-item">
                        <div class="history-item__wrap">
                            <svg width="22" height="17" class="colored-svg">
                                <use xlink:href='/img/sprite.svg#message'></use>
                            </svg>
                            <p class="history-item__text">Перевод на petrpetrovish@gmail.com</p>
                            <div class="history-item__sum">10,50 ₽</div>
                            <svg width="10" height="6">
                                <use xlink:href='/img/sprite.svg#arrow'></use>
                            </svg>
                        </div>
                        <div class="history-item__info-wrap">
                            <div class="history-item__info">
                                <div class="history-item__info-table">
                                    <div>
                                        <p>Сумма платежа</p>
                                        <p class="history-item__summ">10,50 ₽</p>
                                    </div>
                                    <div>
                                        <p>Комиссия</p>
                                        <p class="history-item__percent">00,00 ₽</p>
                                    </div>
                                    <div>
                                        <p>Итого</p>
                                        <p class="history-item__total">10,50 ₽</p>
                                    </div>
                                </div>
                                <div class="history-item__info-table">
                                    <div>
                                        <p>Счет</p>
                                        <p class="history-item__account">P2804063</p>
                                    </div>
                                    <div>
                                        <p>Система</p> 
                                        <p class="history-item__pay-system">Payeer</p>
                                    </div>
                                    <div>
                                        <p>Статус</p>
                                        <p class="history-item__pay-system">Успешно</p>
                                    </div>
                                    <div>
                                        <p>ID операции</p>
                                        <p class="history-item__pay-system">&&&&&&&</p>
                                    </div>
                                </div>
                                <div class="history-item__info-table">
                                    <div>
                                        <p>Дата платежа</p>
                                        <p class="history-item__date">14.07.2019</p>
                                    </div>
                                    <div>
                                        <p>Время платежа</p>
                                        <p class="history-item__time">9:21</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="history-day-list__history-item history-item">
                        <div class="history-item__wrap">
                            <svg width="22" height="17" class="colored-svg">
                                <use xlink:href='/img/sprite.svg#message'></use>
                            </svg>
                            <p class="history-item__text">Перевод на petrpetrovish@gmail.com</p>
                            <div class="history-item__sum">10,50 ₽</div>
                            <svg width="10" height="6">
                                <use xlink:href='/img/sprite.svg#arrow'></use>
                            </svg>
                        </div>
                        <div class="history-item__info-wrap">
                            <div class="history-item__info">
                                <div class="history-item__info-table">
                                    <div>
                                        <p>Сумма платежа</p>
                                        <p class="history-item__summ">10,50 ₽</p>
                                    </div>
                                    <div>
                                        <p>Комиссия</p>
                                        <p class="history-item__percent">00,00 ₽</p>
                                    </div>
                                    <div>
                                        <p>Итого</p>
                                        <p class="history-item__total">10,50 ₽</p>
                                    </div>
                                </div>
                                <div class="history-item__info-table">
                                    <div>
                                        <p>Счет</p>
                                        <p class="history-item__account">P2804063</p>
                                    </div>
                                    <div>
                                        <p>Система</p> 
                                        <p class="history-item__pay-system">Payeer</p>
                                    </div>
                                    <div>
                                        <p>Статус</p>
                                        <p class="history-item__pay-system">Успешно</p>
                                    </div>
                                    <div>
                                        <p>ID операции</p>
                                        <p class="history-item__pay-system">&&&&&&&</p>
                                    </div>
                                </div>
                                <div class="history-item__info-table">
                                    <div>
                                        <p>Дата платежа</p>
                                        <p class="history-item__date">14.07.2019</p>
                                    </div>
                                    <div>
                                        <p>Время платежа</p>
                                        <p class="history-item__time">9:21</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul class="history-list__history-day-list history-day-list">
                    <h3 class="history-day-list__title">10.07.2019</h3>
                    <li class="history-day-list__history-item history-item">
                        <div class="history-item__wrap">
                            <svg width="22" height="17" class="colored-svg">
                                <use xlink:href='/img/sprite.svg#message'></use>
                            </svg>
                            <p class="history-item__text">Перевод на petrpetrovish@gmail.com</p>
                            <div class="history-item__sum">10,50 ₽</div>
                            <svg width="10" height="6">
                                <use xlink:href='/img/sprite.svg#arrow'></use>
                            </svg>
                        </div>
                        <div class="history-item__info-wrap">
                            <div class="history-item__info">
                                <div class="history-item__info-table">
                                    <div>
                                        <p>Сумма платежа</p>
                                        <p class="history-item__summ">10,50 ₽</p>
                                    </div>
                                    <div>
                                        <p>Комиссия</p>
                                        <p class="history-item__percent">00,00 ₽</p>
                                    </div>
                                    <div>
                                        <p>Итого</p>
                                        <p class="history-item__total">10,50 ₽</p>
                                    </div>
                                </div>
                                <div class="history-item__info-table">
                                    <div>
                                        <p>Счет</p>
                                        <p class="history-item__account">P2804063</p>
                                    </div>
                                    <div>
                                        <p>Система</p> 
                                        <p class="history-item__pay-system">Payeer</p>
                                    </div>
                                    <div>
                                        <p>Статус</p>
                                        <p class="history-item__pay-system">Успешно</p>
                                    </div>
                                    <div>
                                        <p>ID операции</p>
                                        <p class="history-item__pay-system">&&&&&&&</p>
                                    </div>
                                </div>
                                <div class="history-item__info-table">
                                    <div>
                                        <p>Дата платежа</p>
                                        <p class="history-item__date">14.07.2019</p>
                                    </div>
                                    <div>
                                        <p>Время платежа</p>
                                        <p class="history-item__time">9:21</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="history-day-list__history-item history-item">
                        <div class="history-item__wrap">
                            <svg width="22" height="17" class="colored-svg">
                                <use xlink:href='/img/sprite.svg#message'></use>
                            </svg>
                            <p class="history-item__text">Перевод на petrpetrovish@gmail.com</p>
                            <div class="history-item__sum">10,50 ₽</div>
                            <svg width="10" height="6">
                                <use xlink:href='/img/sprite.svg#arrow'></use>
                            </svg>
                        </div>
                        <div class="history-item__info-wrap">
                            <div class="history-item__info">
                                <div class="history-item__info-table">
                                    <div>
                                        <p>Сумма платежа</p>
                                        <p class="history-item__summ">10,50 ₽</p>
                                    </div>
                                    <div>
                                        <p>Комиссия</p>
                                        <p class="history-item__percent">00,00 ₽</p>
                                    </div>
                                    <div>
                                        <p>Итого</p>
                                        <p class="history-item__total">10,50 ₽</p>
                                    </div>
                                </div>
                                <div class="history-item__info-table">
                                    <div>
                                        <p>Счет</p>
                                        <p class="history-item__account">P2804063</p>
                                    </div>
                                    <div>
                                        <p>Система</p> 
                                        <p class="history-item__pay-system">Payeer</p>
                                    </div>
                                    <div>
                                        <p>Статус</p>
                                        <p class="history-item__pay-system">Успешно</p>
                                    </div>
                                    <div>
                                        <p>ID операции</p>
                                        <p class="history-item__pay-system">&&&&&&&</p>
                                    </div>
                                </div>
                                <div class="history-item__info-table">
                                    <div>
                                        <p>Дата платежа</p>
                                        <p class="history-item__date">14.07.2019</p>
                                    </div>
                                    <div>
                                        <p>Время платежа</p>
                                        <p class="history-item__time">9:21</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- <ul class="history-list__history-day-list history-day-list">
                    <h3 class="history-day-list__title">Да не</h3>
                    <li class="dropdown--js">
                        <div class="dropdown__head--js">
                            title blyat
                        </div>
                        <div class="dropdown__body--js">
                            ljljlj
                        </div>
                    </li>
                </ul> -->
            </div>
            <div class="solid-content__more-btn">Загрузить больше операций</div>
        </div>
    </div>
</template>