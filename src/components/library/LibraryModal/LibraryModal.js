import { useState } from 'react';
import Media from 'react-media';
import { Wrapper } from './LibraryModal.styled';
import LibraryModalBox from './LibraryModalBox';

export default function LibraryModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const onClose = e => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <Wrapper>
      <Media query="(max-width: 767px)">
        {isModalOpen && <LibraryModalBox onClose={onClose} />}
      </Media>
      <Media query="(min-width: 768px)">
        <LibraryModalBox />
      </Media>
    </Wrapper>
  );
}
