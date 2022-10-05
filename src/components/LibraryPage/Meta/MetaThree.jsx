import {
  MetaHeader,
  HeaderText,
  MetaBody,
  MetaBlockNumber,
  MetaNumber,
  MetaBlockText,
  MetaText,
  MetaNumberColor,
  Flex,
  MetaBlock,
} from './MetaThree.styled';

import { useFetchResultsQuery } from 'redux/results/resultsSlice';
import { useGetBooksQuery } from 'redux/booksApi/booksSlice';

const MetaThreePoints = () => {
  const stats = useFetchResultsQuery();
  const { data } = useGetBooksQuery();

  const booksInProgress = data.filter(
    book => book.status === 'in progress'
  ).length;
  const trainingStatus = stats.data.status;

  //   console.log(stats.data.status);

  const trainingDays = date => {
    const startDay = new Date();
    const finishDay = new Date(date);
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
          <MetaBlock>
            <MetaBlock>
              {data && trainingStatus === 'in progress' ? (
                <MetaNumber>{booksInProgress}</MetaNumber>
              ) : (
                <MetaNumber>00</MetaNumber>
              )}
            </MetaBlock>
            <MetaBlockText>
              <MetaText>Кількість книжок</MetaText>
            </MetaBlockText>
          </MetaBlock>

          <MetaBlock>
            <MetaBlock>
              {stats.data && trainingStatus === 'in progress' ? (
                <MetaNumber>{trainingDays(stats.data.training.end)}</MetaNumber>
              ) : (
                <MetaNumber>00</MetaNumber>
              )}
            </MetaBlock>
            <MetaBlockText>
              <MetaText>Кількість днів</MetaText>
            </MetaBlockText>
          </MetaBlock>

          <MetaBlock>
            <MetaBlock>
              {stats.data && trainingStatus === 'in progress' ? (
                <MetaNumberColor>
                  {stats.data.training.active.length}
                </MetaNumberColor>
              ) : (
                <MetaNumberColor>00</MetaNumberColor>
              )}
            </MetaBlock>
            <MetaBlockText>
              <MetaText>Залишилось книжок</MetaText>
            </MetaBlockText>
          </MetaBlock>
        </Flex>
      </MetaBody>
    </>
  );
};
export default MetaThreePoints;
