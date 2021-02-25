import MetaDecorator from 'components/common/MetaDecorator';
import Header from 'components/common/Header';
import Sidebar from 'components/common/Sidebar';
import Table from 'components/TablesComponents/Table';

import * as Style from './styled';

const Tables = () => (
  <Style.Wrapper>
    <MetaDecorator title="Dashboard - Tables" />
    <Header />
    <Style.WrapperBody>
      <Table />
      <Sidebar />
    </Style.WrapperBody>
  </Style.Wrapper>
);

export default Tables;
