import React from 'react';
import {
  DataList,
  DataListItem,
  DataListTime,
  DataListPages,
} from './Results.styled';

export default function ResultsTableRow({ date, pages, time }) {
  const refactorDateToStats = date => {
    return date.split('-').reverse().join('.');
  };

  const fixedDate = refactorDateToStats(date);
  return (
    <>
      <li>
        <DataList>
          <DataListItem>{fixedDate}</DataListItem>
          <DataListTime>{time}</DataListTime>
          <DataListItem>
            {pages} <DataListPages>стор.</DataListPages>
          </DataListItem>
        </DataList>
      </li>
    </>
  );
}
