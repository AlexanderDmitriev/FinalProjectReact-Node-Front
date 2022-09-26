import React from 'react';
// import Library from './libraryForm';

export const LibraryEmptyFilled = () => {
  return (
    <>
      <div
        style={{ width: 'auto', height: 100, backgroundColor: 'blue' }}
      ></div>

      <h2> Маю намір прочитати</h2>
      <div style={{ width: 'auto', height: 500, backgroundColor: 'white' }}>
        <div style={{ width: 300, height: 150 }}>
          <p>Scrum. Революционный метод управлениями проектами.</p>
          <p>Автор:</p>
          <p>Рік:</p>
          <p>Стор.:</p>
        </div>
        <br />

        <div style={{ width: 300, height: 150 }}>
          <p>Deadline. Роман об управлении проектами.</p>
          <p>Автор:</p>
          <p>Рік:</p>
          <p>Стор.:</p>
        </div>
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
          Моє тренування
        </button>
        <br />
        <button
          type="submit"
          style={{
            width: 50,
            height: 50,
            borderRadius: '50%',

            backgroundColor: '#FF6B08',
          }}
          className=""
        >
          +
        </button>
      </div>
    </>
  );
};
