import MetaDecorator from 'components/MetaDecorator';
import Header from 'components/common/Header';
import Sprints from 'components/common/Sprints';
import Issues from 'components/common/Issues';

import * as Style from './styled';

const Dashboard = () => (
  <Style.Wrapper>
    <MetaDecorator title="Dashboard" />
    <Header />
    <Sprints />
    <Issues />
  </Style.Wrapper>
);

export default Dashboard;
