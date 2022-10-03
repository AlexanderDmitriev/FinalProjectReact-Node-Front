import React from 'react';
import {
  DataList,
  DataListItem,
  //   DataListTime,
  DataListPages,
} from './Results.styled';

export default function ResultsTableRow({ date, pages }) {
  return (
    <>
      <li>
        <DataList>
          <DataListItem>{date}</DataListItem>
          {/* <DataListTime>{time}</DataListTime> */}
          <DataListItem>
            {pages} <DataListPages>стор.</DataListPages>
          </DataListItem>
        </DataList>
      </li>
    </>
  );
}
