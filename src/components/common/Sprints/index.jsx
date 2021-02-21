import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

import { getAllSprints } from 'http/getStatistic';

import * as Style from './styled';

const Sprints = () => {
  const [sprints, setSprints] = useState([]);

  useEffect(() => {
    (async function getSprintsAsync() {
      try {
        const { data } = await getAllSprints();
        setSprints(data);
      } catch (err) {
        console.log(err);
      }
    }());
  }, []);

  return (
    <Style.Wrapper>
      <Style.H2>Sprints</Style.H2>
      <Style.WrapperAllSprint>
        {sprints.map(({
          id, name, createdOn, projectName, status,
        }) => (
          <Style.WrapperSprint key={id}>
            <h4>{`Id: ${id}`}</h4>
            <h4>{`Sprint name: ${name}`}</h4>
            <h5>{`Project name: ${projectName}`}</h5>
            <Style.Paragraph>{`Status: ${status}`}</Style.Paragraph>
            <Style.Span>{`Created: ${formatDistanceToNow(Date.parse(createdOn))} ago`}</Style.Span>
          </Style.WrapperSprint>
        ))}
        <div />
      </Style.WrapperAllSprint>
    </Style.Wrapper>
  );
};

export default Sprints;
