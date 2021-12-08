<template>
    <div class="main__open-page open-page">
        <div class="open-page__select-content select-content">
            <div class="select-content__top-buttons toggle-buttons">
                <div data-open-block="add-money" class="toggle-buttons__item is-active">
                    <p>Пополнить кошелёк</p> 
                </div>
                <div data-open-block="check-for-pay" class="toggle-buttons__item">
                    <p>Счёт на оплату</p>
                </div>
            </div>
            <div class="select-content__show-content show-content is-active" data-content="add-money">
                <div class="show-content__wrapper">
                    <div class="show-content__main">
                        <div class="show-content__select select">
                            <h5 class="select__title">Выберите счёт</h5>
                            <div class="select__body">
                                <p>&#8381;</p>
                                <span>0.00</span>
                            </div>
                        </div>
                        <div class="show-content__money-block money-block">
                            <div class="money-block__sum">
                                <p>Сумма:</p>
                                <i>&#8381;</i>
                                <input type="text" name="sum" id="sum" placeholder="0.00">
                            </div>
                            <div class="money-block__sum money-block__sum--total">
                                <p>Всего:</p>
                                <i>&#8381;</i>
                                <input type="text" name="sum" id="sum" placeholder="0.00">
                            </div>
                            <p class="money-block__notoficatioin">
                                Комиссия 5% от суммы пополнения
                            </p>
                        </div>
                        <div class="show-content__payment">
                            <h3>Способ пополнения</h3>
                            <ul class="show-content__payment-list">
                                <li>
                                    <img src="/img/card.png" alt="master-card">
                                    <p>MasterCard</p>
                                </li>
                                <li>
                                    <img src="/img/card.png" alt="master-card">
                                    <p>MasterCard</p>
                                </li>
                                <li>
                                    <img src="/img/card.png" alt="master-card">
                                    <p>MasterCard</p>
                                </li>
                                <li>
                                    <img src="/img/card.png" alt="master-card">
                                    <p>MasterCard</p>
                                </li>
                            </ul>
                        </div>
                        <div class="show-content__main-button btn"><a href="success-add.html">
                            Пополнить на <span>450</span><i>&#8381;</i></a>
                        </div>
                    </div>
                    <div class="show-content__aside">
                        <ul class="show-content__aside-list">
                            <li>
                                <div class="img-wrap">
                                    <svg width="60" height="60" class="colored-svg">
                                        <use xlink:href='/img/sprite.svg#save-icon'></use>
                                    </svg>
                                </div>
                                    100% защита соединения
                            </li>
                            <li>
                                <div class="img-wrap">
                                    
                                    <svg width="64" height="64" class="colored-svg">
                                        <use xlink:href='/img/sprite.svg#add-icon'></use>
                                    </svg>
                                </div>
                                Моментальное зачисление
                            </li>
                            <li>
                                <div class="img-wrap">
                                    <svg width="60" height="60" class="colored-svg">
                                        <use xlink:href='/img/sprite.svg#kommis-icon'></use>
                                    </svg>
                                </div>
                                Низкая коммиссия
                            </li>
                            <li>
                                <div class="img-wrap">
                                    <svg width="60" height="60" class="colored-svg">
                                        <use xlink:href='/img/sprite.svg#anon-icon'></use>
                                    </svg>
                                </div>
                                Анонимность перевода
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="select-content__show-content show-content" data-content="check-for-pay">
                <div class="show-content__wrapper">
                    <div class="show-content__main">
                        <div class="show-content__select select">
                            <h5 class="select__title">Выберите счёт</h5>
                            <div class="select__body">
                                <p>&#8381;</p>
                                <span>0.00</span>
                            </div>
                        </div>
                        <div class="show-content__money-block money-block">
                            <div class="money-block__sum">
                                <p>Сумма:</p>
                                <i>&#8381;</i>
                                <input type="text" name="sum" id="sum" placeholder="0.00">
                            </div>
                        </div>
                        <div class="show-content__input-block input-block">
                            <h4 class="input-block__title">
                                E-mail получателя
                            </h4>
                            <input type="text" placeholder="E-mail получателя">
                        </div>
                        <div class="show-content__input-block input-block">
                            <h4 class="input-block__title">
                                Название счёта
                            </h4>
                            <input type="text" placeholder="Название счёта">
                        </div>
                        <div class="show-content__input-block input-block">
                            <h4 class="input-block__title">
                                Ваш комментарий
                            </h4>
                            <input type="text" placeholder="Ваш комментарий">
                        </div>
                        <div id="drop-area" class="show-content__download-zone">
                                <form class="my-form">
                                    <svg width="36" height="27" class="colored-svg">
                                        <use xlink:href='/img/sprite.svg#add-picture'></use>
                                    </svg>
                                    <p>Перетащите файл сюда</p>
                                    <input type="file" id="fileElem" multiple accept="image/*" onchange="handleFiles(this.files)">
                                    <label class="button" for="fileElem">Выберите файл</label>
                                </form>
                                <progress id="progress-bar" max=100 value=0></progress>
                                <div id="gallery"></div>
                        </div>
                        <div class="show-content__main-button btn"><a href="success-add.html">Создать счёт</a>
                        </div>
                    </div>
                    <div class="show-content__aside">
                        <ul class="show-content__aside-list">
                            <li>
                                <div class="img-wrap">
                                    <svg width="60" height="60" class="colored-svg">
                                        <use xlink:href='/img/sprite.svg#save-icon'></use>
                                    </svg>
                                </div>
                                    100% защита соединения
                            </li>
                            <li>
                                <div class="img-wrap">
                                    
                                    <svg width="64" height="64" class="colored-svg">
                                        <use xlink:href='/img/sprite.svg#add-icon'></use>
                                    </svg>
                                </div>
                                Моментальное зачисление
                            </li>
                            <li>
                                <div class="img-wrap">
                                    <svg width="60" height="60" class="colored-svg">
                                        <use xlink:href='/img/sprite.svg#kommis-icon'></use>
                                    </svg>
                                </div>
                                Низкая коммиссия
                            </li>
                            <li>
                                <div class="img-wrap">
                                    <svg width="60" height="60" class="colored-svg">
                                        <use xlink:href='/img/sprite.svg#anon-icon'></use>
                                    </svg>
                                </div>
                                Анонимность перевода
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>