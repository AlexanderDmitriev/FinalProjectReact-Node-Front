import React from 'react';
// import Library from './libraryForm';

export const LibraryFilledModalRating = () => {
  return (
    <>
      <h2> Обрати рейтинг книги</h2>
      <p>*****</p>
      <h3>Резюме</h3>
      <div
        style={{
          width: 600,
          height: 200,
          border: '1px solid black',
        }}
      ></div>

      <button
        type="submit"
        style={{
          width: 150,
          height: 60,
          marginTop: 50,
          // backgroundColor: '#FF6B08',
        }}
        className=""
      >
        Назад
      </button>

      <button
        type="submit"
        style={{
          width: 150,
          height: 60,
          marginTop: 50,
          backgroundColor: '#FF6B08',
        }}
        className=""
      >
        Зберегти
      </button>
    </>
  );
};
