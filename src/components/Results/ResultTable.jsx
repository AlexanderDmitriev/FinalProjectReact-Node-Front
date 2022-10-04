import React from 'react';
import { useFetchResultsQuery } from 'redux/results/resultsSlice';
import Media from 'react-media';
import {
  StatTitle,
  List,
  TableWrapper,
  TitleWrapper,
  Image,
} from './Results.styled';
import ResultTableRow from './ResultTableRow';

import statLineL from '../../images/stats/statisticlinel.jpg';
import statLineR from '../../images/stats/statisticliner.jpg';
import statLineP from '../../images/stats/statisticlineplan.jpg';

export default function ResultsTable() {
  const { data } = useFetchResultsQuery();

  return (
    <TableWrapper>
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px) and (max-width: 1279px)',
          large: '(min-width: 1280px)',
        }}
      >
        {matches => (
          <TitleWrapper>
            {matches.small && (
              <>
                <Image src={statLineL} alt="декоративна лінія" />
                <StatTitle>СТАТИСТИКА</StatTitle>
                <Image src={statLineR} alt="декоративна лінія" />
              </>
            )}
            {matches.medium && (
              <>
                <StatTitle>СТАТИСТИКА</StatTitle>
                <Image src={statLineP} alt="декоративна лінія" />
              </>
            )}
            {matches.large && (
              <>
                <Image src={statLineL} alt="декоративна лінія" />
                <StatTitle>СТАТИСТИКА</StatTitle>
                <Image src={statLineR} alt="декоративна лінія" />
              </>
            )}
          </TitleWrapper>
        )}
      </Media>
      <List>
        {data &&
          data.statistic
            .map(({ _id, date, time, pages }) => (
              <ResultTableRow key={_id} date={date} time={time} pages={pages} />
            ))
            .slice(data.statistic.length - 6, data.statistic.length)}
      </List>
    </TableWrapper>
  );
}
