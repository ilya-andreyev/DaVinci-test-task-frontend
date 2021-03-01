import MetaDecorator from 'components/common/MetaDecorator';
import Header from 'components/common/Header';
import Sidebar from 'components/common/Sidebar';
import WrapperCharts from 'components/ChartsComponents/WrapperCharts';

import * as Style from './styled';

const Charts = () => (
  <Style.Wrapper>
    <MetaDecorator title="Dashboard - Charts" />
    <Header />
    <Style.WrapperBody>
      <WrapperCharts />
      <Sidebar />
    </Style.WrapperBody>
  </Style.Wrapper>
);

export default Charts;
