import { useEffect } from 'react';
import { Overlay } from './Modal.styled';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

// Вставить в компоненте в котором отрисовывается модалка

//   const [id, setId] = useState('');

//   const [isModalOpen, setModalOpen] = useState(false);
//   const handleCloseModal = () => {
//     setModalOpen(false);
//   }
//   const onclick = () => {
//     setId("6338600730759772a28fc984")
//     setModalOpen(true)
// }
//   <button onClick={onclick}>on</button> как пример открытия модалки
//   <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}>
//     <BookRating onClose={handleCloseModal} bookId={id} />
//   </Modal>

export default function Modal({ isModalOpen, handleCloseModal, children }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Escape') {
        return handleCloseModal();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleCloseModal]);

  function onclickModalClose(e) {
    if (e.currentTarget === e.target) {
      handleCloseModal();
    }
  }

  if (!isModalOpen) {
    return null;
  }
  return createPortal(
    <Overlay onClick={onclickModalClose}>{children}</Overlay>,
    modalRoot
  );
}
