import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const VelocityChart = ({ data }) => (
  <BarChart
    barSize={20}
    data={data}
    height={300}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
    width={800}
  >
    <XAxis
      dataKey="id"
      label={{ value: 'sprint id', position: 'insideBottomRight', offset: -10 }}
      padding={{ left: 30, right: 30 }}
      scale="point"
    />
    <YAxis label={{
      value: 'velocity (story points)', angle: -90, position: 'insideBottom', offset: 120,
    }}
    />
    <Tooltip />
    <Legend />
    <CartesianGrid strokeDasharray="3 3" />
    <Bar background={{ fill: '#eee' }} dataKey="velocity" fill="#3E5B76" />
  </BarChart>
);

VelocityChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default VelocityChart;
