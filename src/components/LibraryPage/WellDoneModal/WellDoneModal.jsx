// import { useState } from 'react';
// import {
//   Wrapper,
//   Section,
//   TextBox,
//   Text,
//   ButtonBox,
//   Button,
//   BackButton,
//   Icon,
// } from './WellDoneModal.styled';
// import sprite from '../../../images/icons.svg';
// import Modal from "../../Modal/Modal"

// export default function WellDoneModal() {
//   // const [isModalOpen, setIsModalOpen] = useState(true);

//   // const onClose = e => {
//   //   e.preventDefault();
//   //   setIsModalOpen(false);
//   // };

//   const [isModalOpen, setModalOpen] = useState(false);
//   const handleCloseModal = () => {
//     setModalOpen(false);

//   return (
//     <Modal>
//     <Wrapper>
//       {isModalOpen && (
//         <Section>
//           <Icon width="50" height="45">
//             <use href={sprite + '#icon-vector'}></use>
//           </Icon>
//           <TextBox>
//             <Text>
//               Ти молодчина, але потрібно швидше! Наступного разу тобі все
//               вдасться
//             </Text>
//           </TextBox>
//           <ButtonBox>
//             <Button type="button" onClick={handleCloseModal}>
//               Нове тренування
//             </Button>
//             <BackButton type="button" onClick={handleCloseModal}>
//               Назад
//             </BackButton>
//           </ButtonBox>
//         </Section>
//       )}
//     </Wrapper>
//     </Modal>
//   );
// }}
