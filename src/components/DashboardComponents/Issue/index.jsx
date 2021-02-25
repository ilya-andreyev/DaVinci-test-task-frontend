import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import Button from 'components/common/Button';

import * as Style from './styled';

const Issue = ({
  onClick, issue, statistic, loading,
}) => {
  const {
    id, authorName, createdOn, projectName, storyPoint, subject, targetVersionName, trackerName,
  } = issue;

  return (
    <Style.WrapperIssue>
      <Style.WrapperInfo>
        <h4>{`Id: ${id}`}</h4>
        <h4>{`Issue name: ${subject}`}</h4>
        <h5>{`Project name: ${projectName}`}</h5>
        <p>{`Target version: ${targetVersionName}`}</p>
        <p>{`Tracker name: ${trackerName}`}</p>
        <p>{`Story points: ${storyPoint}`}</p>
        <p>{`Author: ${authorName}`}</p>
        <Style.Span>{`Created: ${formatDistanceToNow(Date.parse(createdOn))} ago`}</Style.Span>
      </Style.WrapperInfo>
      <Style.WrapperStatistic>
        {statistic[id].productivity !== null && (
        <>
          <Style.Paragraph>{`Lead time: ${statistic[id].leadTime}`}</Style.Paragraph>
          <Style.Paragraph>{`Development lead time: ${statistic[id].developmentLeadTime}`}</Style.Paragraph>
          <Style.Paragraph>{`Testing lead time: ${statistic[id].testingLeadTime}`}</Style.Paragraph>
          <Style.Paragraph>{`Stabilization ratio: ${statistic[id].stabilizationRatio}`}</Style.Paragraph>
          <Style.Paragraph>{`Productivity: ${statistic[id].productivity}`}</Style.Paragraph>
        </>
        )}
        <Style.WrapperButtons>
          <Button onClick={onClick} type="button">
            {loading[id] ? 'Loading...' : 'Issue statistics'}
          </Button>
        </Style.WrapperButtons>
      </Style.WrapperStatistic>
    </Style.WrapperIssue>
  );
};

Issue.propTypes = {
  issue: PropTypes.object.isRequired,
  statistic: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.object.isRequired,
};

export default Issue;
