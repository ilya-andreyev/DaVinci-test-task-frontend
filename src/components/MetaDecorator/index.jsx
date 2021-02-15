import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const MetaDecorator = ({ title }) => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
);

MetaDecorator.propTypes = {
  title: PropTypes.string.isRequired,
};

export default MetaDecorator;
