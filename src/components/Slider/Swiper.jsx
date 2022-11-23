import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Parallax, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import style from './Swiper.module.scss'


function Swap() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          'borderRadius': 40,
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "backgroundImage":
              "url(https://img.freepik.com/premium-vector/ethereum-cryptocurrency-digital-coin-for-presentation-computer-circuit-board-vector-blockchain_185386-777.jpg?w=360)"
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Bitcoin
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Создатель: Сатоши Накамото
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className={style.textSwiper} >
              Bitcoin — пиринговая платёжная система, использующая одноимённую
              единицу для учёта операций. Для обеспечения функционирования и
              защиты системы используются криптографические методы, но при этом
              вся информация о транзакциях между адресами системы доступна в
              открытом виде.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Solana
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Создатели: Анатолий Яковенко и Грег Фицджеральд
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className={style.textSwiper} >
            Solana – это блокчейн, предназначенный для поддержки масштабируемых децентрализованных приложений <br/>
            Solana – это продвинутый блокчейн-проект с открытым исходным кодом, который стремится использовать несколько прорывных технологий для следующего поколения DApps.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Near
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          Создатели: Александр Скиданов и Илья Полосухин
          </div>
          <div className="text" data-swiper-parallax="-100">
          <p className={style.textSwiper}>
            Near Protocol — это блокчейн с поддержкой смарт-контрактов, который призван стать платформой следующего поколения для DApps с уникальным решением масштабирования
            </p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Atom
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          Создатели: Дже Квон
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className={style.textSwiper}>
            Cosmos — это децентрализованная экосистема, состоящая из отдельных блокчейнов, которые не зависят друг от друга. Блокчейны работают с использованием византийского алгоритма отказоустойчивости (BFT). Именно BFT достигает консенсуса в сети и позволяет распределять токены с помощью механизма проверки правдоподобия. Основными вариантами использования токена ATOM являются размещение на платформе и выполнение транзакций с токенами в Cosmos Hub.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Avalanche
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          Создатели: Кристофер Сандберг и Линус Бломберг
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className={style.textSwiper}>
            Цель Avalanche — увеличить масштабирование без ущерба для скорости и децентрализации. Основу платформы составляют три блокчейна: чейн биржи (X-Chain), чейн контракта (C-Chain) и чейн платформы (P-Chain). X-Chain используют для создания активов и торговли. C-Chain предназначен для создания смарт-контрактов. P-Chain согласует между собой валидаторов и подсети.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Polygon(MATIC)
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          Создатели: Арджун и Михайло Бьелич
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className={style.textSwiper}>
            Polygon — это сеть защищенных решений второго уровня (L2) и автономных сайдчейнов. Ее цель — повысить масштабируемость блокчейна Ethereum и сократить стоимость транзакций.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          Chainlink(LINK)

          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          Создатели: Сергей Назаров, Стив Эллис, доктор Ари Джулс
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className={style.textSwiper}>
            Chainlink — децентрализованная сеть оракулов, которые верифицируют и предоставляют данные из внешних источников для смарт-контрактов в блокчейне.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Ethereum
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          Создатели: Виталик Бутерин
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p className={style.textSwiper}>
            Ethereum — блокчейн-платформа для децентрализованных приложений, и вторая по капитализации криптовалюта (ETH). В сети Ethereum работают большинство популярных проектов в сфере DeFi и NFT.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Swap;