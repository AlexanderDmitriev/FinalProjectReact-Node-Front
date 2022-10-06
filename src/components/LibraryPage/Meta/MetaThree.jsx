import {
  MetaHeader,
  HeaderText,
  MetaBody,
  /* MetaBlockNumber, */
  MetaNumber,
  MetaBlockText,
  MetaText,
  MetaNumberColor,
  Flex,
  MetaBlock,
} from './MetaThree.styled';
import { booksApi } from 'redux/booksApi/booksSlice';
import { resultsApi } from 'redux/results/resultsSlice';

const MetaThreePoints = () => {
  const useQueryStateBooks = booksApi.endpoints.getBooks.useQueryState();
  const useQueryStateResult = resultsApi.endpoints.fetchResults.useQueryState();

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
              {useQueryStateResult.data &&
              useQueryStateResult.data.status === 'in progress' ? (
                <MetaNumber>
                  {useQueryStateResult.data.training.active.length}
                </MetaNumber>
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
              {useQueryStateResult.data &&
              useQueryStateResult.data.status === 'in progress' ? (
                <MetaNumber>
                  {trainingDays(useQueryStateResult.data.training.end)}
                </MetaNumber>
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
              {useQueryStateBooks.data &&
              useQueryStateResult.data &&
              useQueryStateResult.data.status === 'in progress' ? (
                <MetaNumberColor>
                  {
                    useQueryStateBooks.data.filter(
                      book => book.status === 'in progress'
                    ).length
                  }
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
