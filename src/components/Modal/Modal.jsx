import { useEffect } from "react";
import { Overlay } from "./Modal.styled";
import { createPortal } from "react-dom";
const modalRoot = document.querySelector('#modal-root');

// Вставить в компоненте в котором отрисовывается модалка

// const [isModalOpen, setModalOpen] = useState(false);
//   const handleCloseModal = () => {
//     setModalOpen(false);
//   }
//   const onclick = () => {
//     setModalOpen(true)
// }
  
// <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal}>
//     <BookRating onClose={handleCloseModal} />
// </Modal>

export default function Modal({ isModalOpen, handleCloseModal, children }) {

    useEffect(() => {
        function handleKeyDown(e) {
            if (e.code === 'Escape') { return handleCloseModal() }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => { window.removeEventListener('keydown', handleKeyDown) }
    }, [handleCloseModal])

    function onclickModalClose(e) {
        if (e.currentTarget === e.target) {
            handleCloseModal();
        }
    }
    
    if (!isModalOpen) { return null }
    return createPortal(
        <Overlay onClick={onclickModalClose}>
            {children}
        </Overlay>,
        modalRoot,  
        )
    ;
}