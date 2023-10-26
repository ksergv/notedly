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
         Вы зашли в записную книжку, Поздравляю!<br/>
         Теперь выберите категорию заметки и раздел!<br/>
         Ели Вы не авторизовались Вам доступен только раздел "Общие"
        
        </MetaInfo>
      </MetaData>
      
    </StyledNote>

 ) }
 export default Help;


