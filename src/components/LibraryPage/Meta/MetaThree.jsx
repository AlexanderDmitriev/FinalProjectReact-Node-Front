import { useEffect, useState } from 'react';

import {
  MetaHeader,
  HeaderText,
  MetaBody,
  MetaBlock,
  MetaNumber,
  MetaBlockText,
  MetaText,
  MetaNumberColor,
  Flex,
} from './MetaThree.styled';
import { booksApi } from 'redux/booksApi/booksSlice';
import { resultsApi } from 'redux/results/resultsSlice';

const MetaThreePoints = () => {
  const [booksRemain, setBooksRemain] = useState('00');
  const [booksTotal, setBooksTotal] = useState('00');

  const useQueryStateBooks = booksApi.endpoints.getBooks.useQueryState();
  const useQueryStateResult = resultsApi.endpoints.fetchResults.useQueryState();

  useEffect(() => {
    if (
      useQueryStateBooks.data &&
      useQueryStateResult.data &&
      useQueryStateResult.data.status === 'in progress'
    ) {
      setBooksRemain(
        useQueryStateBooks.data.filter(book => book.status === 'in progress')
          .length
      );
    }
  }, [useQueryStateBooks.data, useQueryStateResult.data]);

  useEffect(() => {
    if (
      useQueryStateResult.data &&
      useQueryStateResult.data.status === 'in progress'
    ) {
      setBooksTotal(useQueryStateResult.data.training.active.length);
    }
  }, [useQueryStateBooks.data, useQueryStateResult.data]);

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
              <MetaNumber>{booksTotal}</MetaNumber>
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
                <MetaNumber>00</MetaNumber>
              )}
            </MetaBlock>
            <MetaBlockText>
              <MetaText>Кількість днів</MetaText>
            </MetaBlockText>
          </div>

          <div>
            {/* <MetaBlock>
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
            </MetaBlock> */}
            <MetaBlock>
              {booksRemain === 0 &&
              useQueryStateResult.data &&
              useQueryStateResult.data.status === 'in progress' ? (
                <MetaNumberColor>{booksTotal}</MetaNumberColor>
              ) : (
                <MetaNumberColor>{booksRemain}</MetaNumberColor>
              )}
            </MetaBlock>
            <MetaBlockText>
              <MetaText>Залишилось книжок</MetaText>
            </MetaBlockText>
          </div>
        </Flex>
      </MetaBody>
    </>
  );
};
export default MetaThreePoints;
