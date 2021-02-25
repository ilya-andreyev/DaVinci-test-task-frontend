import PropTypes from 'prop-types';

import * as Style from './styled';

const Button = ({
  type, children, onClick,
}) => (
  <Style.Button onClick={onClick} type={type}>{children}</Style.Button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
