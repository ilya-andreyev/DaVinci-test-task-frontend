import ColumnFilter from './ColumnFilter';

export const ISSUES_COLUMNS = [
  {
    Header: 'Issue id',
    Footer: 'Issue id',
    accessor: 'id',
    Filter: ColumnFilter,
  },
  {
    Header: 'Sprint name',
    Footer: 'Sprint name',
    accessor: 'sprintName',
    Filter: ColumnFilter,
  },
  {
    Header: 'Issue assigned to',
    Footer: 'Issue assigned to',
    accessor: 'issueAssignedTo',
    Filter: ColumnFilter,
  },
  {
    Header: 'Lead Time',
    Footer: 'Lead Time',
    accessor: 'leadTime',
    Filter: ColumnFilter,
  },
  {
    Header: 'Development Lead Time',
    Footer: 'Development Lead Time',
    accessor: 'developmentLeadTime',
    Filter: ColumnFilter,
  },
  {
    Header: 'Testing Lead Time',
    Footer: 'Testing Lead Time',
    accessor: 'testingLeadTime',
    Filter: ColumnFilter,
  },
];

export const SPRINTS_COLUMNS = [
  {
    Header: 'Sprint id',
    Footer: 'Sprint id',
    accessor: 'id',
    Filter: ColumnFilter,
  },
  {
    Header: 'Sprint name',
    Footer: 'Sprint name',
    accessor: 'sprintName',
    Filter: ColumnFilter,
  },
  {
    Header: 'Velocity',
    Footer: 'Velocity',
    accessor: 'velocity',
    Filter: ColumnFilter,
  },
];
