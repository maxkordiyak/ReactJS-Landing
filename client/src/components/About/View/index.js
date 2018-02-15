import React  from 'react';
import signature from '../../../img/Signature.png';
import { Grid, Cell } from 'react-mdc-web/lib/Grid';
import { Link } from 'react-router-dom';

import './index.css';

export default ({  }) => (
  <div className="page">
      <Grid>
          <Cell col={3}>
              <h2 className="mdc-typography--title h2-title">
                  About
              </h2>
          </Cell>
          <Cell col={4}>
              <p className="mdc-typography--body" style={{ marginTop: '3.659652333028362%' }}>I am a typical «Risian», born and live in Riga, Latvia. I do a lot of traveling and I work multiple different cities across the world. The languages I speak are English, Latvian and Russian, but more importantly – I am an expert in the language of style and personal image. I can make your appearance work for you.</p>
              <p className="mdc-typography--body" style={{ '-webkit-margin-after': '10px' }}>How did I learn? My appreciation for style started to develop since my early years and was driven by my mother, who was a designer, and the atmosphere of the Riga fashion house of the 1960s and 1970s, in which I spent my childhood, hanging around my mother's elegant friends and fashionable clients.
              </p>
          </Cell>
          <Cell col={5}>
              <div className="about__image"></div>
          </Cell>

          <Cell col={3}>
          </Cell>

          <Cell col={6}>
              <p className="mdc-typography--body">My professional signature style is cosmopolitan. It is influenced by the nature of medieval Riga, the refined architecture of its Art Nouveau, and life in the world cultural centers - Moscow and St. Petersburg, where I did my diploma and the Ph.D. Followed by the "English" period in London, Edinburgh, Leicester. Extended journeys to France, India, America, Cuba, Japan. All this has shaped me, my personality, my taste and my vision of life and my sense of beauty.</p>
              <p className="mdc-typography--body">Dressing in style, creating a perfect image for the occasion, decorating a house beautifully and turning a meal into an elegant event, making gifts and arrange parties that are remembered forever... Living in style is what I do and it's what I am willing to teach you.</p>
              <p className="mdc-typography--body">Would you like to learn?</p>
              <p className="mdc-typography--body" style={{ '-webkit-margin-after': '0px' }}>Come see me at one of the upcoming <Link to='/news' className="link-default">events</Link> or drop me a line at <a href="mailto:me@zannadubska.com" className="link-default">me@zannadubska.com</a></p>
          </Cell>
          <Cell col={3}>

          </Cell>
      </Grid>

      <Grid className="no-padding">
          <Cell col={7}>
          </Cell>
          <Cell col={5}>
              <img className="about__signature" src={signature} alt="Signature" />
          </Cell>
      </Grid>

      <div className="press">
          <Grid className="no-padding">
              <Cell col={3}>
                  <h2 className="mdc-typography--title h2-title">
                      In the press
                  </h2>
              </Cell>
              <Cell col={6}>
                  <ul className="press-list">
                      <li className="press-list__item">
                          <a href="http://lr1.lsm.lv/lv/raksts/monopols/stiliste-zanna-dubska-esmu-gatava-dalities-ar-pozitivo-energiju..a73281/" target="_blank" className="link-about"><div className="press-list__title">Stiliste Žanna Dubska: Esmu gatava dalīties ar pozitīvo enerģiju. Šķiet, tā ir mana misija</div>
                              <div className="press-list__link">lr1.lsm.lv</div></a>
                      </li>
                      <li className="press-list__item">
                          <a href="http://www.mklat.lv/zhizn/29092-zhanna-dubska-zapreshcheno-to-chto-vas-starit" target="_blank" className="link-about"><div className="press-list__title">Жанна Дубска: «Запрещено то, что вас старит!»</div>
                              <div className="press-list__link">mklat.lv</div></a>
                      </li>
                      <li className="press-list__item">
                          <a href="http://www.mixnews.lv/woman/eksklyuziv/news/209304_stilist-zhanna-dubska-vozrast-zhens4iny-vydaet-poxodka/" target="_blank" className="link-about"><div className="press-list__title">Стилист Жанна Дубска: возраст женщины выдает походка</div>
                              <div className="press-list__link">mixnews.lv</div></a>
                      </li>
                      <li className="press-list__item">
                          <a href="http://brunch.lv/zhanna-dubska-kak-horosho-zhit/" target="_blank" className="link-about"><div className="press-list__title">Жанна Дубска: “Как хорошо жить!”</div>
                              <div className="press-list__link">brunch.lv</div></a>
                      </li>
                      <li className="press-list__item">
                          <a href="http://3ade.lv/ru/janna-dubska-revizor-garderoba-po-pravu-iplaniruyu-sozdat-associaciyu-jenshin-kompanonov-i-3526.html" target="_blank" className="link-about"><div className="press-list__title">Жанна Дубска – ревизор гардероба по праву: "Планирую создать ассоциацию женщин-компаньонов!"</div>
                              <div className="press-list__link">3ade.lv</div></a>
                      </li>
                      <li className="press-list__item">
                          <a href="https://geometria.ru/blogs/fashion/74038" target="_blank" className="link-about"><div className="press-list__title">Жанна Дубска "Уроки стиля: секреты профессионалов" и "Макияж как секретное оружие".</div>
                              <div className="press-list__link">geometria.ru</div></a>
                      </li>
                      <li className="press-list__item">
                          <a href="http://gorodw.by/zhanna-dubska-27-myslej/" target="_blank" className="link-about"><div className="press-list__title">Жанна Дубска. 27 мыслей</div>
                              <div className="press-list__link">gorodw.by</div></a>
                      </li>
                  </ul>
              </Cell>
              <Cell col={3}>

              </Cell>
          </Grid>

      </div>
  </div>
);