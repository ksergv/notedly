import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';

const Wrapper = styled.div`
  height: 100%;
`;

const Form = styled.form`
  height: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
`;

const NoteForm = (props) => {
  // set the default state of the form
  const [value, setValue] = useState({ content: props.content || '' });
  const [isChecked, setIsChecked] = useState({ private: props.private || false });
  const [category, setCategory] = useState(props.category || 'All');


const isCheckedValue = isChecked.private; // Получаем значение private из объекта
const booleanValue = Boolean(isCheckedValue); // Преобразуем его в булевое значение

// функция обработки изменений в поле выбора "category"
const onCategoryChange = (event) => {
  setCategory(event.target.value);
};

  // update the state when a user types in the form
  const onChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  const onCheck = (event) => {
    const newIsChecked = event.target.checked;
    setIsChecked({ private: newIsChecked });
  };

  return (
    <Wrapper>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.action({
            variables: {
              ...value,
              private: isChecked.private, // Передаем значение isChecked как булевое значение
              category, // Добавляем выбранную категорию
            },
          });
        }}
      >
        {/* Добавляем поле выбора "category" */}
        <label>
          Выбери категорию затетки!
        <select
          name="category"
          value={category}
          onChange={onCategoryChange}
        >
          <option value="All">Разное</option>
          <option value="Health">Здоровье</option>
          <option value="Develop">Развитие</option>
          {/* Добавьте другие категории по аналогии */}
          <option value="Youtube">Youtube</option>
          <option value="Magic">Магия</option>
          <option value="Tsigin">Цигун</option>
         
        </select>
        </label>
        <label>
          поставьте галочку если это приватная заметка?
          <input
            type="checkbox"
            checked={isChecked.private}
            onChange={onCheck}
          />
        </label>
        <TextArea
          required
          type="text"
          name="content"
          placeholder="Note content"
          value={value.content}
          onChange={onChange}
        />
        {isChecked.private ?
     ( <p> Приватный доступ к заметке!</p> )
     :(<p> Публичныйдоступ к заметке! </p>)}
        <Button type="submit">Save</Button><br/><br/>
      </Form>
    </Wrapper>
  );
};


export default NoteForm;

