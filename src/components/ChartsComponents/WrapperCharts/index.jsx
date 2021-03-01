import { useState, useEffect } from 'react';
import RingLoader from 'react-spinners/RingLoader';

import VelocityChart from 'components/ChartsComponents/VelocityChart';
import LeadTimeChart from 'components/ChartsComponents/LeadTimeChart';
import {
  getAllSprintsVelocity,
  getAllIssuesLeadTime,
} from 'http/getStatistic';
import theme from 'theme';

import * as Style from './styled';

const WrapperCharts = () => {
  const [velocityStatistic, setVelocityStatistic] = useState([]);
  const [leadTimeStatistic, setLeadTimeStatistic] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    const getSprintsAsync = async () => {
      try {
        const [{ data: leadTimeData }, { data: velocityData }] = await Promise.all(
          [getAllIssuesLeadTime(), getAllSprintsVelocity()],
        );
        setLeadTimeStatistic(leadTimeData);
        setVelocityStatistic(velocityData);
        setLoading(false);
        setShowChart(true);
      } catch (err) {
        console.error(err);
      }
    };
    getSprintsAsync();
  }, []);

  return (
    <Style.Wrapper>
      <RingLoader color={theme.colors.blue2} loading={loading} size={250} />
      {showChart
      && (
      <>
        <Style.WrapperChart>
          <Style.H3>Issue lead time</Style.H3>
          <LeadTimeChart data={leadTimeStatistic} />
        </Style.WrapperChart>
        <Style.WrapperChart>
          <Style.H3>Sprints velocity</Style.H3>
          <VelocityChart data={velocityStatistic} />
        </Style.WrapperChart>
      </>
      )}
    </Style.Wrapper>
  );
};

export default WrapperCharts;
