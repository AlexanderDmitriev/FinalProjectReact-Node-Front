import {
  MetaHeader,
  HeaderText,
  MetaBody,
  MetaNumber,
  MetaText,
  MetaBlockText,
  Flex,
  MetaBlock,
} from './MetaTwo.styled';
import { useEffect, useState } from 'react';
import { resultsApi } from 'redux/results/resultsSlice';

const MetaTwoPoints = () => {
  const [booksTotal, setBooksTotal] = useState('0');

  const useQueryStateResult = resultsApi.endpoints.fetchResults.useQueryState();

  useEffect(() => {
    if (
      useQueryStateResult.data &&
      useQueryStateResult.data.status === 'in progress'
    ) {
      setBooksTotal(useQueryStateResult.data.training.active.length);
    }
  }, [useQueryStateResult.data]);

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
          <div>
            <MetaBlock>
              {booksTotal &&
              useQueryStateResult.data &&
              useQueryStateResult.data.status === 'in progress' ? (
                <MetaNumber>{booksTotal}</MetaNumber>
              ) : (
                <MetaNumber>0</MetaNumber>
              )}
            </MetaBlock>
            <MetaBlockText>
              <MetaText>Кількість книжок</MetaText>
            </MetaBlockText>
          </div>
          <div>
            <MetaBlock>
              {useQueryStateResult.data &&
              useQueryStateResult.data.status === 'in progress' ? (
                <MetaNumber>
                  {trainingDays(useQueryStateResult.data.training.end)}
                </MetaNumber>
              ) : (
                <MetaNumber>0</MetaNumber>
              )}
            </MetaBlock>
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
