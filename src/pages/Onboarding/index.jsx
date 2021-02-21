import { DASHBOARD_PATH } from 'constans/paths';

import MetaDecorator from 'components/MetaDecorator';

import * as Style from './styled';

const Onboarding = () => (
  <Style.Wrapper>
    <MetaDecorator title="Onboarding" />
    <Style.StyledLink to={DASHBOARD_PATH}>to Dashboard</Style.StyledLink>
  </Style.Wrapper>
);

export default Onboarding;
