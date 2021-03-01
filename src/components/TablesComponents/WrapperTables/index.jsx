import { useState, useMemo } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

import {
  getAllIssuesLeadTime,
  getAllSprintsVelocity,
} from 'http/getStatistic';
import Button from 'components/common/Button';
import CustomTable from 'components/TablesComponents/CustomTable';
import theme from 'theme';
import { ISSUES_COLUMNS, SPRINTS_COLUMNS } from './columns';

import * as Style from './styled';

const WrapperTables = () => {
  const [leadTimeStatistic, setLeadTimeStatistic] = useState([]);
  const [velocityStatistic, setVelocityStatistic] = useState([]);
  const [loading, setLoading] = useState({ leadTimeLoading: false, velocityLoading: false });
  const [showTable, setShowTable] = useState({ issuesTable: false, sprintsTable: false });

  const handleClick = async (e) => {
    const buttonText = e.target.textContent;
    try {
      if (buttonText === 'Get lead time') {
        setLoading((oldState) => ({ ...oldState, leadTimeLoading: true }));
        const { data } = await getAllIssuesLeadTime();
        setLeadTimeStatistic(data);
        setShowTable((oldState) => ({ ...oldState, issuesTable: true }));
        setLoading((oldState) => ({ ...oldState, leadTimeLoading: false }));
      } else if (buttonText === 'Get velocity') {
        setLoading((oldState) => ({ ...oldState, velocityLoading: true }));
        const { data } = await getAllSprintsVelocity();
        setVelocityStatistic(data);
        setShowTable((oldState) => ({ ...oldState, sprintsTable: true }));
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
          <h3>Issues lead time</h3>
          <Button onClick={(e) => handleClick(e)} type="button">
            {loading.leadTimeLoading ? 'Loading...' : 'Get lead time'}
          </Button>
          <ClipLoader color={theme.colors.blue2} loading={loading.leadTimeLoading} size={150} />
        </Style.WrapperInfo>
        {showTable.issuesTable && (
        <CustomTable
          columns={issuesColumns}
          data={issuesData}
          name="Lead time"
        />
        )}
      </Style.WrapperTable>
      <Style.WrapperTable>
        <Style.WrapperInfo>
          <h3>Sprints velocity</h3>
          <Button onClick={(e) => handleClick(e)} type="button">
            {loading.velocityLoading ? 'Loading...' : 'Get velocity'}
          </Button>
          <ClipLoader color={theme.colors.blue2} loading={loading.velocityLoading} size={150} />
        </Style.WrapperInfo>
        {showTable.sprintsTable && (
        <CustomTable
          columns={sprintsColumns}
          data={sprintsData}
          name="Velocity"
        />
        )}
      </Style.WrapperTable>
    </Style.Wrapper>
  );
};

export default WrapperTables;
