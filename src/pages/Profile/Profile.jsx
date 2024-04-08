import React from 'react';

const Profile = () => {
    return (
        <div className='profile__container'>
                <img src="" className='profile__icon' alt="" />
                <p className = 'urName' className=''> Ваше имя </p>
                <p className='change'>изменить</p>
                <div className="profrile__options">
                    <div className="option__balance">
                        <div className="option__left">
                            <img className='profile__image' src="" alt="" />
                            <p>Баланс</p>
                        </div>

                        <div className="option__balance-block">
                            <p className='tonPrice'>1 TON</p>
                            <img className='Dymond' src={Dimond} alt="" />
                            <div className="option__money">
                                <p>~</p>
                                <p>250₽</p>

                            </div>
                        </div>
                        <img className='arrowRight' src={ArrowRight} alt="" />
                    </div>
                    <div className="option">
                        <div className="option__left">
                            <img src="" alt="" />
                            <p>Тарифы</p>
                        </div>
                        <img src={ArrowRight} alt="" />
                    </div>
                    <div className="option">
                        <div className="option__left">
                            <img src="" alt="" />
                            <p>Тарифы</p>
                        </div>
                        <img src={ArrowRight} alt="" />
                    </div>
                    <div className="option">
                        <div className="option__left">
                            <img src="" alt="" />
                            <p>Тарифы</p>
                        </div>
                        <img src={ArrowRight} alt="" />
                    </div>
                    <div className="option">
                        <div className="option__left">
                            <img src="" alt="" />
                            <p>Тарифы</p>
                        </div>
                        <img src={ArrowRight} alt="" />
                    </div>
                    <div className="option">
                        <div className="option__left">
                            <img src="" alt="" />
                            <p>Тарифы</p>
                        </div>
                        <img src={ArrowRight} alt="" />
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
                    <p className='veryfication'>Верификация</p>
                    <div className="veryfication__block">
                        <img className='veryfication__image' src="" alt="" />
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