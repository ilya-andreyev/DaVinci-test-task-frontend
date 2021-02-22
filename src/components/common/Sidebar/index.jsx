import { useLocation } from 'react-router-dom';

import { CHARTS_PATH, TABLES_PATH, DASHBOARD_PATH } from 'constans/paths';

import * as Style from './styled';

const Sidebar = () => {
  const location = useLocation();
  if (location.pathname === CHARTS_PATH || location.pathname === TABLES_PATH) {
    return (
      <Style.Wrapper>
        <Style.StyledLink to={DASHBOARD_PATH}>Back</Style.StyledLink>
      </Style.Wrapper>
    );
  }

  return (
    <Style.Wrapper>
      <Style.StyledLink to={TABLES_PATH}>Tables</Style.StyledLink>
      <Style.StyledLink to={CHARTS_PATH}>Charts</Style.StyledLink>
    </Style.Wrapper>
  );
};

export default Sidebar;
