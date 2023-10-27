import React from 'react'
import styled from 'styled-components';
import icon from '../img/icon.png';



// Keep notes from extending wider than 800px
const StyledNote = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

// Style the note meta data
const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
  }
`;

// add some space between the avatar and meta info
const MetaInfo = styled.div`
  padding-right: 1em;
`;


const Help = ()  => {

  const code = `<img float="left" margin-right="10px" width="250" height="250" 
  src="http://drive.google.com/uc?export=view&id=1749w9xA9Wqi2z9_gBjAz5Ugwe5WXeutr"/>`;
  const code1 = `!<iframe width="560" height="315" src="https://www.youtube.com/embed/-nDtx76jzLE"  allowfullscreen></iframe>`;
      return (

      <StyledNote>
      <MetaData>
      <MetaInfo>
          <img
            src={icon}
            alt={`avatar`}
            height="80px"
          />
        </MetaInfo>
        <MetaInfo>
         <p>Вы зашли в записную книжку, Поздравляю!<br/>
         Теперь выберите категорию заметки и раздел!<br/>
         Ели Вы не авторизовались Вам доступен только раздел "Общие"</p>
         <b>Bcтавка картинок  с google drive</b>
         <ul>
          <li>
         Вариант-1: размер-400:200<br/>
         <p> Исходная ссылка: https://drive.google.com/file/d/<b>13KOvH7lvbetniO4ypxwakxJPmBJ9voKQ</b>/view?usp=share_link
          </p> <p>
          Вставка в markdown: ![кулон с Янтарем](http://drive.google.com/uc?export=view&id=<b>13KOvH7lvbetniO4ypxwakxJPmBJ9voKQ</b>)
          </p>
          </li>
          <li>
          Вариант-2: Произвольный размер<br/>
          {/* Блок кода */}
        {code}
          </li>
          </ul>
         <p></p>    

         <b>Вставка YouTube video:</b><br/>
          <ul>
             <p> Исходная ссылка: https://www.youtube.com/watch?v=<b>-nDtx76jzLE</b>
          </p> <p>
          Вставка в markdown: {code1}
          </p>
          </ul>
        </MetaInfo>
      </MetaData>
      
    </StyledNote>

 ) }
 export default Help;


