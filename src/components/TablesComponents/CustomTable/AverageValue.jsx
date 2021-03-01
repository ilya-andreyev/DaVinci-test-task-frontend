import PropTypes from 'prop-types';

const AverageValue = ({ name, selectedFlatRows }) => {
  if (name === 'Lead time') {
    return (
      <>
        <p style={{ textAlign: 'center' }}>
          The average value:
          <br />
          {`Lead time: ${selectedFlatRows.length ? Math.round(
            selectedFlatRows.reduce((acc, { original }) => acc + original.leadTime, 0) / selectedFlatRows.length,
          ) : 0}`}
          <br />
          {`Development lead time: ${selectedFlatRows.length ? Math.round(
            selectedFlatRows.reduce((acc, { original }) => acc + original.developmentLeadTime, 0)
            / selectedFlatRows.length,
          ) : 0}`}
          <br />
          {`Testing lead time: ${selectedFlatRows.length ? Math.round(
            selectedFlatRows.reduce((acc, { original }) => acc + original.testingLeadTime, 0) / selectedFlatRows.length,
          ) : 0}`}
          <br />
        </p>
      </>
    );
  }

  if (name === 'Velocity') {
    return (
      <p style={{ textAlign: 'center' }}>
        {`The average value of the velocity: ${selectedFlatRows.length
          ? Math.round(
            selectedFlatRows.reduce((acc, { original }) => acc + original.velocity, 0) / selectedFlatRows.length,
          ) : 0}`}
      </p>
    );
  }

  return <></>;
};

AverageValue.propTypes = {
  name: PropTypes.string.isRequired,
  selectedFlatRows: PropTypes.array.isRequired,
};

export default AverageValue;
