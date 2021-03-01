import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <input ref={resolvedRef} type="checkbox" {...rest} />
      </>
    );
  },
);

Checkbox.propTypes = {
  indeterminate: PropTypes.bool.isRequired,
};

export default Checkbox;
