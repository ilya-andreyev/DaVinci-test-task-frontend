import PropTypes from 'prop-types';
import { useTable, useSortBy } from 'react-table';

import * as Style from './styled';

const CustomTable = ({ columns, data }) => {
  const {
    getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <Style.CustomTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => {
          const { headerGroupKey, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();

          return (
            <Style.Tr key={headerGroupKey} {...restHeaderGroupProps}>
              {headerGroup.headers.map((column) => {
                const { columnKey, ...restHeaderProps } = column.getHeaderProps(column.getSortByToggleProps());

                return (
                  <Style.Th key={columnKey} {...restHeaderProps}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? <span> &#8679;</span> : <span> &#8681;</span>) : ''}
                    </span>
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
  );
};

CustomTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default CustomTable;
