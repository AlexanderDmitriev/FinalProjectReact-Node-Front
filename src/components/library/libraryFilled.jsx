import React from 'react';

export const LibraryFilled = () => {
  return (
    <>
      <div
        style={{ width: 'auto', height: 100, backgroundColor: 'blue' }}
      ></div>

      <h2> Прочитано</h2>

      <div style={{ width: 300, height: 300 }}>
        <p>Scrum. Революционный метод управлениями проектами.</p>
        <p>Автор:</p>
        <p>Рік:</p>
        <p>Стор.:</p>
        <p>Рейтинг:*****</p>
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
          Резюме
        </button>
      </div>
      <h2> Читаю</h2>

      <div style={{ width: 300, height: 300 }}>
        <p>Scrum. Революционный метод управлениями проектами.</p>
        <p>Автор:</p>
        <p>Рік:</p>
        <p>Стор.:</p>
      </div>
      <h2> Маю намір прочитати</h2>
      {/* <div style={{ width: 'auto', height: 500, backgroundColor: 'white' }}> */}
      <div style={{ width: 300, height: 300 }}>
        <p>Scrum. Революционный метод управлениями проектами.</p>
        <p>Автор:</p>
        <p>Рік:</p>
        <p>Стор.:</p>
        {/* </div> */}
      </div>

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
    </>
  );
};
