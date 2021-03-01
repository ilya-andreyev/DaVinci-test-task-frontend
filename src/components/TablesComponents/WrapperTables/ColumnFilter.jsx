import PropTypes from 'prop-types';

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;

  return (
    <input
      onChange={(e) => setFilter(e.target.value)}
      style={{ width: '100%' }}
      value={filterValue || ''}
    />
  );
};

ColumnFilter.propTypes = {
  column: PropTypes.object.isRequired,
};

export default ColumnFilter;
