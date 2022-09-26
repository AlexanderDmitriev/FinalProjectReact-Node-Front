import React from 'react';
// import Library from './libraryForm';

export const LibraryEmptyModal = () => {
  return (
    <>
      <div
        style={{ width: 'auto', height: 100, backgroundColor: 'blue' }}
      ></div>

      <div style={{ width: 100, height: 20, backgroundColor: 'black' }}></div>
      <h2> Назва книги</h2>
      <div style={{ width: 'auto', height: 500, backgroundColor: 'white' }}>
        <div style={{ width: 300, height: 150 }}>
          <p>Крок 1</p>
          <p>Створіть особисту бібліотеку</p>
          <p>Додайте в неї книжки, які маєте намір прочитати</p>
        </div>
        <br />
        <div style={{ width: 300, height: 150 }}>
          <p>Крок 2</p>
          <p>Сформуйте своє перше тренування</p>
          <p>Визначте ціль, оберіть період, розпочинайте тренування.</p>
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
          Ok
        </button>
      </div>
    </>
  );
};
