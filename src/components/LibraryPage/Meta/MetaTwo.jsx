import {
  MetaHeader,
  HeaderText,
  MetaBody,
  MetaNumber,
  MetaText,
  MetaBlockText,
  MetaBlockNumber,
  Flex,
} from './MetaTwo.styled';

const MetaTwoPoints = ({ start, finish, books }) => {
  const uniqueBooks = [...new Set(books)];

  console.log(uniqueBooks);

  const trainingDays = (start, finish) => {
    const startDay = new Date(start);
    const finishDay = new Date(finish);
    const timeDiff = Math.abs(finishDay.getTime() - startDay.getTime());
    const trainingDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return trainingDays;
  };

  return (
    <>
      <MetaBody>
        <MetaHeader>
          <HeaderText>Моя мета прочитати</HeaderText>
        </MetaHeader>
        <Flex>
          <div>
            <MetaBlockNumber>
              <MetaNumber>{uniqueBooks.length}</MetaNumber>
            </MetaBlockNumber>
            <MetaBlockText>
              <MetaText>Кількість книжок</MetaText>
            </MetaBlockText>
          </div>
          <div>
            <MetaBlockNumber>
              {start && finish ? (
                <MetaNumber>{trainingDays(start, finish)}</MetaNumber>
              ) : (
                <MetaNumber>0</MetaNumber>
              )}
            </MetaBlockNumber>
            <MetaBlockText>
              <MetaText>Кількість днів</MetaText>
            </MetaBlockText>
          </div>
        </Flex>
      </MetaBody>
    </>
  );
};
export default MetaTwoPoints;
