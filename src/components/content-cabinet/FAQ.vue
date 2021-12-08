<template>
    <div class="main__open-page open-page">
        <div class="open-page__select-content select-content">
            <div class="select-content__top-buttons toggle-buttons">
                <div data-open-block="faq" class="toggle-buttons__item ">
                    <p>FAQ</p> 
                </div>
                <div data-open-block="support" class="toggle-buttons__item is-active">
                    <p>Поддержка</p>
                </div>
            </div>
            <div class="select-content__show-content show-content " data-content="faq">
                <div class="show-content__wrapper">
                    <div class="show-content__main show-content__main--without-line">
                        <input type="text" class="show-content__search" placeholder="Поиск проблемы">
                        <div  class="show-content__questions-wrap">
                            <ul class="show-content__select-question-list select-question-list">
                                <li data-open-faq="operations" class="is-active">
                                    Операции
                                </li>
                                <li data-open-faq="changes">
                                    Изменения в профиле
                                </li>
                                <li data-open-faq="refers">
                                    Рефералы
                                </li>
                                <li data-open-faq="shops">
                                    Магазины
                                </li>
                                <li data-open-faq="verif">
                                    Верификация
                                </li>
                            </ul>
                            
                            <div data-content-faq="operations" class="show-content__filtered-quesrions is-active">
                                <div class="section-question__dropdown dropdown dropdown--js">
                                    <div class="dropdown__head dropdown__head--js" >
                                        <p class="dropdown__paragraph">Какие платежные системы доступны для выплат из Berty Wallet?</p>
                                    </div>
                                    <div class="dropdown__body dropdown__body--js" style="max-height: 0px; transition: all 0.3s ease 0s;">
                                        <span class="dropdown__hide-content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nihil optio atque ad animi, perferendis sed ipsam asperiores nostrum? Tenetur deleniti aperiam, necessitatibus accusamus nam exercitationem harum qui dicta sunt.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div data-content-faq="changes" class="show-content__filtered-quesrions">
                                <div class="section-question__dropdown dropdown dropdown--js">
                                    <div class="dropdown__head dropdown__head--js" >
                                        <p class="dropdown__paragraph">Зачем платежные системы доступны для выплат из Berty Wallet?</p>
                                    </div>
                                    <div class="dropdown__body dropdown__body--js" style="max-height: 0px; transition: all 0.3s ease 0s;">
                                        <span class="dropdown__hide-content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nihil optio atque ad animi, perferendis sed ipsam asperiores nostrum? Tenetur deleniti aperiam, necessitatibus accusamus nam exercitationem harum qui dicta sunt.</p>
                                        </span>
                                    </div>
                                </div>
                                <div class="section-question__dropdown dropdown dropdown--js">
                                    <div class="dropdown__head dropdown__head--js" >
                                        <p class="dropdown__paragraph">Какой у меня номер в списке Forbes</p>
                                    </div>
                                    <div class="dropdown__body dropdown__body--js" style="max-height: 0px; transition: all 0.3s ease 0s;">
                                        <span class="dropdown__hide-content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nihil optio atque ad animi, perferendis sed ipsam asperiores nostrum? Tenetur deleniti aperiam, necessitatibus accusamus nam exercitationem harum qui dicta sunt.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div data-content-faq="refers" class="show-content__filtered-quesrions">
                                <div class="section-question__dropdown dropdown dropdown--js">
                                    <div class="dropdown__head dropdown__head--js" >
                                        <p class="dropdown__paragraph">Какие платежные системы доступны для выплат из Berty Wallet?</p>
                                    </div>
                                    <div class="dropdown__body dropdown__body--js" style="max-height: 0px; transition: all 0.3s ease 0s;">
                                        <span class="dropdown__hide-content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nihil optio atque ad animi, perferendis sed ipsam asperiores nostrum? Tenetur deleniti aperiam, necessitatibus accusamus nam exercitationem harum qui dicta sunt.</p>
                                        </span>
                                    </div>
                                </div>
                                <div class="section-question__dropdown dropdown dropdown--js">
                                    <div class="dropdown__head dropdown__head--js" >
                                        <p class="dropdown__paragraph">Какой у меня номер Berty Wallet?</p>
                                    </div>
                                    <div class="dropdown__body dropdown__body--js" style="max-height: 0px; transition: all 0.3s ease 0s;">
                                        <span class="dropdown__hide-content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nihil optio atque ad animi, perferendis sed ipsam asperiores nostrum? Tenetur deleniti aperiam, necessitatibus accusamus nam exercitationem harum qui dicta sunt.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div data-content-faq="shops" class="show-content__filtered-quesrions">
                                <div class="section-question__dropdown dropdown dropdown--js">
                                    <div class="dropdown__head dropdown__head--js" >
                                        <p class="dropdown__paragraph">Где тут по близости sex-shop?</p>
                                    </div>
                                    <div class="dropdown__body dropdown__body--js" style="max-height: 0px; transition: all 0.3s ease 0s;">
                                        <span class="dropdown__hide-content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nihil optio atque ad animi, perferendis sed ipsam asperiores nostrum? Tenetur deleniti aperiam, necessitatibus accusamus nam exercitationem harum qui dicta sunt.</p>
                                        </span>
                                    </div>
                                </div>
                                <div class="section-question__dropdown dropdown dropdown--js">
                                    <div class="dropdown__head dropdown__head--js" >
                                        <p class="dropdown__paragraph">Какой у меня номер Berty Wallet?</p>
                                    </div>
                                    <div class="dropdown__body dropdown__body--js" style="max-height: 0px; transition: all 0.3s ease 0s;">
                                        <span class="dropdown__hide-content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nihil optio atque ad animi, perferendis sed ipsam asperiores nostrum? Tenetur deleniti aperiam, necessitatibus accusamus nam exercitationem harum qui dicta sunt.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div data-content-faq="verif" class="show-content__filtered-quesrions">
                                <div class="section-question__dropdown dropdown dropdown--js">
                                    <div class="dropdown__head dropdown__head--js" >
                                        <p class="dropdown__paragraph">А там точно латексные комтюмы есть?</p>
                                    </div>
                                    <div class="dropdown__body dropdown__body--js" style="max-height: 0px; transition: all 0.3s ease 0s;">
                                        <span class="dropdown__hide-content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nihil optio atque ad animi, perferendis sed ipsam asperiores nostrum? Tenetur deleniti aperiam, necessitatibus accusamus nam exercitationem harum qui dicta sunt.</p>
                                        </span>
                                    </div>
                                </div>
                                <div class="section-question__dropdown dropdown dropdown--js">
                                    <div class="dropdown__head dropdown__head--js" >
                                        <p class="dropdown__paragraph">Какой у меня номер Berty Wallet?</p>
                                    </div>
                                    <div class="dropdown__body dropdown__body--js" style="max-height: 0px; transition: all 0.3s ease 0s;">
                                        <span class="dropdown__hide-content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nihil optio atque ad animi, perferendis sed ipsam asperiores nostrum? Tenetur deleniti aperiam, necessitatibus accusamus nam exercitationem harum qui dicta sunt.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="select-content__show-content show-content is-active" data-content="support">
                <div class="show-content__wrapper">
                    <div class="show-content__main show-content__main--without-line">
                        <div class="show-content__title">
                            Ваши обращения:
                        </div>
                        <div class="show-content__top-wrap">
                            <input type="text" class="show-content__search" placeholder="Поиск проблемы">

                            <div class="show-content__button">
                                <svg class="plus-svg">
                                    <use xlink:href='/img/sprite.svg#settings'></use>
                                </svg>
                                <p>Новое обращение</p>
                            </div>
                        </div>
                        <div class="show-content__table table">
                            <div class="table__row table__row--title">
                                <div class="table__cell">
                                    Дата обращения
                                </div>
                                <div class="table__cell">
                                    Тема обращения
                                </div>
                                <div class="table__cell">
                                    ID обращения
                                </div>
                                <div class="table__cell">
                                    Статус
                                </div>
                            </div>
                            <div class="table__row ">
                                <div class="table__cell">
                                    02.03.2020
                                </div>
                                <div class="table__cell">
                                    Админ питух
                                </div>
                                <div class="table__cell">
                                    228
                                </div>
                                <div class="table__cell">
                                    выше среднего
                                </div>
                            </div>
                        </div>
                        <div class="show-content__table-pagination">
                            <div class="left-arr">
                                <svg>
                                    <use xlink:href='/img/sprite.svg#kommis-icon'></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>