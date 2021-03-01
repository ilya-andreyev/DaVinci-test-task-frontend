import PropTypes from 'prop-types';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
} from 'recharts';

const LeadTimeChart = ({ data }) => (
  <ComposedChart
    data={data}
    height={400}
    margin={{
      top: 20,
      right: 80,
      bottom: 20,
      left: 20,
    }}
    width={900}
  >
    <CartesianGrid stroke="#f5f5f5" />
    <XAxis
      dataKey="id"
      label={{ value: 'issue id', position: 'insideBottomRight', offset: -10 }}
      scale="band"
    />
    <YAxis label={{ value: 'lead time (days)', angle: -90, position: 'insideLeft' }} />
    <Tooltip />
    <Legend />
    <Area dataKey="leadTime" fill="#628DB6" name="Lead time" stroke="#628DB6" type="monotone" />
    <Bar barSize={20} dataKey="developmentLeadTime" fill="#3E5B76" name="Development lead time" />
    <Line dataKey="testingLeadTime" name="Testing lead time" stroke="#333" type="monotone" />
  </ComposedChart>
);

LeadTimeChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default LeadTimeChart;
