<template>
    <div class="main__open-page open-page">
        <div class="open-page__select-content select-content four">
            <div class="select-content__top-buttons toggle-buttons">
                <a style="cursor: pointer;" data-open-block="contacts" class="toggle-buttons__item is-active"> 
                    <p style="pointer-events: none;">Контакты</p>
                </a>
                <a style="cursor: pointer;" data-open-block="verif" class="toggle-buttons__item">
                    <p style="pointer-events: none;">Верификация</p>
                </a>
                <a  style="cursor: pointer;" data-open-block="save" class="toggle-buttons__item">
                    <p style="pointer-events: none;">Безопасность</p>
                </a>
                <a style="cursor: pointer;" data-open-block="password" class="toggle-buttons__item">
                    <p style="pointer-events: none;">Смена пароля</p>
                </a>
            </div>
            <div class="select-content__show-content show-content is-active" data-content="contacts">
                <div class="show-content__wrapper">
                    <div class="show-content__main show-content__main--without-line">
                        <div class="show-content__inner-wrap">
                            <div class="show-content__input-block input-block">
                                <h4 class="input-block__title">
                                    Ваш E-mail:
                                </h4>
                                <input type="text" value="Evgeniya@gmail.com" readonly>
                            </div>
                            <div class="show-content__desc">
                                Ваш e-mail вы указали при регистрации кошелька. 
                                В дальнейшем его уже невозможно изменить. 
                            </div>
                        </div>
                        <div class="show-content__inner-wrap">
                            <div class="show-content__input-block input-block">
                                <h4 class="input-block__title">
                                    Ваш телефон:
                                </h4>
                                <input type="text" placeholder="+7 (___) ___ __ __">
                            </div>
                            <div class="show-content__desc">
                                Ваш телефон потребуется, если вы выберите SMS-авторизацию, как способ защиты вашего кошелька.
                            </div>
                        </div>
                        
                        <div class="show-content__select select">
                            <h5 class="select__title">Выберите язык</h5>
                            <div class="select__body">
                                <img style="width: 24px; border-radius: 50%; margin-right: 8px;" src="/img/russia.svg" alt="RACNR">
                                <span>Русский</span>
                            </div>
                        </div>
                        <div class="show-content__main-button btn">
                            Сохраниь изменения
                        </div>
                    </div>
                </div>
            </div>
            <div class="select-content__show-content show-content" data-content="verif">
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
                                <input type="text" name="sum" id="sum1" placeholder="0.00">
                            </div>
                            <div class="money-block__sum money-block__sum--total">
                                <p>К оплате:</p>
                                <i>&#8381;</i>
                                <input type="text" name="sum" id="sum2" placeholder="0.00">
                            </div>
                            <p class="money-block__notoficatioin">
                                Комиссия 5% от суммы пополнения
                            </p>
                        </div>
                        <div class="show-content__input-block input-block">
                            <h4 class="input-block__title">
                                E-mail получателя
                            </h4>
                            <input type="text" placeholder="E-mail получателя">
                        </div>
                        <div class="show-content__input-block input-block">
                            <h4 class="input-block__title">
                                Ваш комментарий
                            </h4>
                            <input type="text" placeholder="Ваш комментарий">
                        </div>
                        <div class="show-content__main-button btn"><a href="success-add.html">
                            Перевести <span>450</span><i>&#8381;</i></a>
                        </div>
                    </div>
                    <div class="show-content__aside">
                        <ul class="show-content__aside-list">
                            <li><div class="img-wrap">
                                <img src="/img/save-icon.svg" alt="save">
                            </div>
                                100% защита соединения
                            </li>
                            <li>
                                <div class="img-wrap">
                                    
                                <img src="/img/add-icon.svg" alt="save">
                                </div>
                                Моментальное зачисление
                            </li>
                            <li>
                                <div class="img-wrap">
                                <img src="/img/kommis-icon.svg" alt="save"></div>
                                Низкая коммиссия
                            </li>
                            <li>
                                <div class="img-wrap">
                                    <img src="/img/anon-icon.svg" alt="save">
                                </div>
                                Анонимность перевода
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="select-content__show-content show-content" data-content="save">
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
                                <p>К оплате:</p>
                                <i>&#8381;</i>
                                <input type="text" name="sum" id="sum3" placeholder="0.00">
                            </div>
                            <p class="money-block__notoficatioin">
                                Комиссия 5% от суммы пополнения
                            </p>
                        </div>
                        <div class="show-content__input-block input-block">
                            <h4 class="input-block__title">
                                E-mail получателя
                            </h4>
                            <input type="text" placeholder="E-mail получателя">
                        </div>
                        <div class="show-content__input-block input-block">
                            <h4 class="input-block__title">
                                Ваш комментарий
                            </h4>
                            <input type="text" placeholder="Ваш комментарий">
                        </div>
                        <div class="show-content__main-button btn"><a href="success-add.html">
                            Перевести <span>450</span><i>&#8381;</i></a>
                        </div>
                    </div>
                    <div class="show-content__aside">
                        <ul class="show-content__aside-list">
                            <li><div class="img-wrap">
                                <img src="/img/save-icon.svg" alt="save">
                            </div>
                                100% защита соединения
                            </li>
                            <li>
                                <div class="img-wrap">
                                    
                                <img src="/img/add-icon.svg" alt="save">
                                </div>
                                Моментальное зачисление
                            </li>
                            <li>
                                <div class="img-wrap">
                                <img src="/img/kommis-icon.svg" alt="save"></div>
                                Низкая коммиссия
                            </li>
                            <li>
                                <div class="img-wrap">
                                    <img src="/img/anon-icon.svg" alt="save">
                                </div>
                                Анонимность перевода
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="select-content__show-content show-content" data-content="password">
                <div class="show-content__wrapper">
                    <div class="show-content__main show-content__main--without-line">
                        
                        <div class="show-content__input-block input-block">
                            <h4 class="input-block__title">
                                Старый пароль
                            </h4>
                            <input type="password" placeholder="Старый пароль">
                        </div>
                        <div class="show-content__input-block input-block">
                            <h4 class="input-block__title">
                                Новый пароль
                            </h4>
                            <input type="password" placeholder="Новый пароль">
                        </div>
                        <div class="show-content__input-block input-block">
                            <h4 class="input-block__title">
                                Новый пароль ещё раз
                            </h4>
                            <input type="password" placeholder="Новый пароль ещё раз сука">
                        </div>
                        <div class="show-content__main-button btn">Сохранить новый пароль
                        </div>
                        <div class="show-content__notification">
                            Уведомление об изменении пароля, а также сам пароль будут отправлены на ваш e-mail.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>