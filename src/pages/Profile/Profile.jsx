import React from 'react';

const Profile = () => {
    return (
        <div className='profile__container'>
                <img src="" className='profile__icon' alt="" />
                <p className=''> Ваше имя </p>
                <p>изменить</p>
                <div className="profrile__options">
                    <div className="option__balance">
                        <img src="" alt="" />
                        <p>Баланс</p>
                        <div className="option__balance-block">
                            <p>1 TON</p>
                            <img src="" alt="" />
                            <div className="option__money">
                                <p>~</p>
                                <p>250</p>
                                <img src="" alt="" />
                            </div>
                        </div>
                        <img src="" alt="" />
                    </div>
                    <div className="option">
                        <img src="" alt="" />
                        <p>Тарифы</p>
                        <img src="" alt="" />
                    </div>
                    <div className="option">
                        <img src="" alt="" />
                        <p>Тарифы</p>
                        <img src="" alt="" />
                    </div>
                    <div className="option">
                        <img src="" alt="" />
                        <p>Тарифы</p>
                        <img src="" alt="" />
                    </div>
                    <div className="option">
                        <img src="" alt="" />
                        <p>Тарифы</p>
                        <img src="" alt="" />
                    </div>
                    <div className="option">
                        <img src="" alt="" />
                        <p>Тарифы</p>
                        <img src="" alt="" />
                    </div>

                </div>
                <div className="profile__about-me">
                    <p>О себе</p>
                    <p>18, Москва</p>
                </div>
                <div className="propfile__works">
                    <p>Выполняемые работы</p>
                    <p>Дизайн</p>
                    <p>пока нет выполненых работ</p>
                </div>
                <div className="profile__veryfication">
                    <p>Верификация</p>
                    <div className="veryfication__block">
                        <img src="" alt="" />
                        <div className="veryfication__block-text">
                            <p>Пройти KYC верификацию</p>
                            <p>Подтвердите свою личность
и получайте на 20% больше откликов</p>
                        </div>
                        <img src="" alt="" />
                    </div>
                </div>
        </div>
    );
};

export default Profile;