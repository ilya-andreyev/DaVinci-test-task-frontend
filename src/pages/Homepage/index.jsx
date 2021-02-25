import { Redirect } from 'react-router-dom';

import { DASHBOARD_PATH } from 'constans/paths';

const Homepage = () => (
  <Redirect to={DASHBOARD_PATH} />
);

export default Homepage;
