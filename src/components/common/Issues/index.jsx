import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

import { getAllIssues } from 'http/getStatistic';

import * as Style from './styled';

const Issues = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    (async function getIssuesAsync() {
      try {
        const { data } = await getAllIssues();
        setIssues(data);
      } catch (err) {
        console.log(err);
      }
    }());
  }, []);

  return (
    <Style.Wrapper>
      <Style.H2>Issues</Style.H2>
      <Style.WrapperAllIssues>
        {issues.map(({
          id,
          authorName, createdOn, projectName, storyPoint, subject, targetVersionName, trackerName,
        }) => (
          <Style.WrapperIssue key={id}>
            <h4>{`Id: ${id}`}</h4>
            <h4>{`Issue name: ${subject}`}</h4>
            <h5>{`Project name: ${projectName}`}</h5>
            <Style.Paragraph>{`Target version: ${targetVersionName}`}</Style.Paragraph>
            <Style.Paragraph>{`Tracker name: ${trackerName}`}</Style.Paragraph>
            <Style.Paragraph>{`Story points: ${storyPoint}`}</Style.Paragraph>
            <Style.Paragraph>{`Author: ${authorName}`}</Style.Paragraph>
            <Style.Span>{`Created: ${formatDistanceToNow(Date.parse(createdOn))} ago`}</Style.Span>
          </Style.WrapperIssue>
        ))}
        <div />
      </Style.WrapperAllIssues>
    </Style.Wrapper>
  );
};

export default Issues;
