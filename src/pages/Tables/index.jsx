import MetaDecorator from 'components/common/MetaDecorator';
import Header from 'components/common/Header';
import Sidebar from 'components/common/Sidebar';
import WrapperTables from 'components/TablesComponents/WrapperTables';

import * as Style from './styled';

const Tables = () => (
  <Style.Wrapper>
    <MetaDecorator title="Dashboard - Tables" />
    <Header />
    <Style.WrapperBody>
      <WrapperTables />
      <Sidebar />
    </Style.WrapperBody>
  </Style.Wrapper>
);

export default Tables;
