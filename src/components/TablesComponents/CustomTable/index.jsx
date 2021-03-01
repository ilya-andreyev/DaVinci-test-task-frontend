import PropTypes from 'prop-types';
import {
  useTable, useSortBy, useFilters, useRowSelect,
} from 'react-table';
import Checkbox from 'components/TablesComponents/CustomTable/Checkbox';
import AverageValue from 'components/TablesComponents/CustomTable/AverageValue';

import * as Style from './styled';

const CustomTable = ({ columns, data, name }) => {
  const {
    getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow, selectedFlatRows,
  } = useTable({ columns, data }, useFilters, useSortBy, useRowSelect, (hooks) => {
    hooks.visibleColumns.push((column) => [
      {
        id: 'selection',
        Header: ({ getToggleAllRowsSelectedProps }) => <Checkbox {...getToggleAllRowsSelectedProps()} />,
        Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
      },
      ...column,
    ]);
  });

  return (
    <>
      <AverageValue name={name} selectedFlatRows={selectedFlatRows} />
      <Style.CustomTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => {
            const { headerGroupKey, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();

            return (
              <Style.Tr key={headerGroupKey} {...restHeaderGroupProps}>
                {headerGroup.headers.map((column, i) => {
                  const { columnKey, ...restHeaderProps } = column.getHeaderProps();

                  return (
                    <Style.Th key={columnKey} {...restHeaderProps}>
                      <div {...column.getSortByToggleProps()}>
                        {column.render('Header')}
                        {column.isSorted
                          ? (column.isSortedDesc ? <span> &uArr;</span> : <span> &dArr;</span>)
                          : (i === 0 ? '' : <span> &#8661;</span>)}
                      </div>
                      <div>{column.canFilter ? column.render('Filter') : null}</div>
                    </Style.Th>
                  );
                })}
              </Style.Tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            const { rowKey, ...restRowProps } = row.getRowProps();

            return (
              <Style.Tr key={rowKey} {...restRowProps}>
                {row.cells.map((cell) => {
                  const { cellKey, ...restCellProps } = cell.getCellProps();

                  return (
                    <Style.Td key={cellKey} {...restCellProps}>{cell.render('Cell')}</Style.Td>
                  );
                })}
              </Style.Tr>
            );
          })}
        </tbody>
        <tfoot>
          {
          footerGroups.map((footerGroup) => {
            const { footerGroupKey, ...getFooterGroupProps } = footerGroup.getFooterGroupProps();

            return (
              <tr key={footerGroupKey} {...getFooterGroupProps}>
                {footerGroup.headers.map((column) => {
                  const { columnKey, ...restFooterProps } = column.getFooterProps();

                  return (
                    <Style.FootTd key={columnKey} {...restFooterProps}>{column.render('Footer')}</Style.FootTd>
                  );
                })}
              </tr>
            );
          })
        }
        </tfoot>
      </Style.CustomTable>
    </>
  );
};

CustomTable.defaultProps = {
  getToggleAllRowsSelectedProps: () => {},
  row: {},
};

CustomTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  getToggleAllRowsSelectedProps: PropTypes.func,
  row: PropTypes.object,
  name: PropTypes.string.isRequired,
};

export default CustomTable;
