import { useState, useMemo } from 'react';

import {
  getAllIssuesLeadTime,
  getAllIssuesDevelopmentLeadTime,
  getAllIssuesTestingLeadTime,
  getAllSprintsVelocity,
} from 'http/getStatistic';
import Button from 'components/common/Button';
import CustomTable from 'components/TablesComponents/CustomTable';
import { ISSUES_COLUMNS, SPRINTS_COLUMNS } from './columns';

import * as Style from './styled';

const Table = () => {
  const [leadTimeStatistic, setLeadTimeStatistic] = useState([]);
  const [velocityStatistic, setVelocityStatistic] = useState([]);
  const [loading, setLoading] = useState({});

  const handleClick = async (e) => {
    const buttonText = e.target.textContent;
    try {
      if (buttonText === 'Get lead time') {
        setLoading((oldState) => ({ ...oldState, leadTimeLoading: true }));
        const [
          { data: leadTimeData }, { data: developmentLeadTimeData }, { data: testingLeadTimeData },
        ] = await Promise.all([
          getAllIssuesLeadTime(), getAllIssuesDevelopmentLeadTime(), getAllIssuesTestingLeadTime(),
        ]);
        setLeadTimeStatistic(leadTimeData.map(({
          id, sprintName, issueAssignedTo, leadTime,
        }) => ({
          id,
          sprintName,
          issueAssignedTo,
          leadTime,
          developmentLeadTime: developmentLeadTimeData.find((obj) => obj.id === id).developmentLeadTime,
          testingLeadTime: testingLeadTimeData.find((obj) => obj.id === id).testingLeadTime,
        })));
        setLoading((oldState) => ({ ...oldState, leadTimeLoading: false }));
      } else if (buttonText === 'Get velocity') {
        setLoading((oldState) => ({ ...oldState, velocityLoading: true }));
        const { data } = await getAllSprintsVelocity();
        setVelocityStatistic(data);
        setLoading((oldState) => ({ ...oldState, velocityLoading: false }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const issuesColumns = useMemo(() => ISSUES_COLUMNS, []);
  const issuesData = useMemo(() => leadTimeStatistic, [leadTimeStatistic]);

  const sprintsColumns = useMemo(() => SPRINTS_COLUMNS, []);
  const sprintsData = useMemo(() => velocityStatistic, [velocityStatistic]);

  return (
    <Style.Wrapper>
      <Style.WrapperTable>
        <Style.WrapperInfo>
          <h3>Issues</h3>
          <Button onClick={(e) => handleClick(e)} type="button">
            {loading.leadTimeLoading ? 'Loading...' : 'Get lead time'}
          </Button>
        </Style.WrapperInfo>
        <CustomTable
          columns={issuesColumns}
          data={issuesData}
        />
      </Style.WrapperTable>
      <Style.WrapperTable>
        <Style.WrapperInfo>
          <h3>Sprints</h3>
          <Button onClick={(e) => handleClick(e)} type="button">
            {loading.velocityLoading ? 'Loading...' : 'Get velocity'}
          </Button>
        </Style.WrapperInfo>
        <CustomTable
          columns={sprintsColumns}
          data={sprintsData}
        />
      </Style.WrapperTable>
    </Style.Wrapper>
  );
};

export default Table;
