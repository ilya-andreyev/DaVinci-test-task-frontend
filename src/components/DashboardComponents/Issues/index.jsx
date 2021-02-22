import { useState, useEffect } from 'react';

import {
  getAllIssues,
  getLeadTime,
  getDevelopmentLeadTime,
  getTestingLeadTime,
  getStabilizationRatio,
  getProductivity,
} from 'http/getStatistic';
import Issue from 'components/DashboardComponents/Issue';

import * as Style from './styled';

const Issues = () => {
  const [issues, setIssues] = useState([]);
  const [statistic, setStatistic] = useState({});
  const [loading, setLoading] = useState({});

  const handleClick = async (id) => {
    try {
      setLoading((oldState) => ({ ...oldState, [id]: true }));
      const [
        { data: { leadTime } },
        { data: { developmentLeadTime } },
        { data: { testingLeadTime } },
        { data: { stabilizationRatio } },
        { data: { productivity } },
      ] = await Promise.all([
        getLeadTime(id),
        getDevelopmentLeadTime(id),
        getTestingLeadTime(id),
        getStabilizationRatio(id),
        getProductivity(id),
      ]);
      setStatistic((oldState) => ({
        ...oldState,
        [id]: {
          ...oldState[id], leadTime, developmentLeadTime, testingLeadTime, stabilizationRatio, productivity,
        },
      }));
      setLoading((oldState) => ({ ...oldState, [id]: false }));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const getIssuesAsync = async () => {
      try {
        const { data } = await getAllIssues();
        const initialStateStatistic = data.reduce((acc, { id }) => ({
          ...acc,
          [id]: {
            leadTime: null,
            developmentLeadTime: null,
            testingLeadTime: null,
            stabilizationRatio: null,
            productivity: null,
          },
        }), {});
        const initialStateLoading = data.reduce((acc, { id }) => ({
          ...acc,
          [id]: false,
        }), {});
        setStatistic(initialStateStatistic);
        setIssues(data);
        setLoading(initialStateLoading);
      } catch (err) {
        console.error(err);
      }
    };
    getIssuesAsync();
  }, []);

  return (
    <div>
      <Style.H2>Issues</Style.H2>
      <Style.WrapperAllIssues>
        {issues.map((issue) => (
          <Issue
            issue={issue}
            key={issue.id}
            loading={loading}
            onClick={() => handleClick(issue.id)}
            statistic={statistic}
          />
        ))}
      </Style.WrapperAllIssues>
    </div>
  );
};

export default Issues;
