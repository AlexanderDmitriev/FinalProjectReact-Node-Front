import React from 'react';
import LibraryForm from './libraryForm';
import { LibraryEmptyModal } from './libraryEmptyModal';
import { LibraryEmptyFilled } from './libraryEmptyFilled';
import { LibraryFilled } from './libraryFilled';
import { LibraryFilledModalRating } from './libraryFilledModalRating';

export const Library = () => {
  return (
    <>
      {/* <div
        style={{ width: 'auto', height: 100, backgroundColor: 'blue' }}
      ></div> */}

      {/* <div style={{ width: 100, height: 20, backgroundColor: 'black' }}></div> */}
      <LibraryForm />
      <LibraryEmptyModal />
      <LibraryEmptyFilled />
      <LibraryFilled />
      <LibraryFilledModalRating />
    </>
  );
};
