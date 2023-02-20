import { v4 as uuidv4 } from 'uuid';
import { memo } from 'react';
import classnames from 'classnames';

import ScrollReveal from '../ScrollReveal';

export type ColumnsProps = {
  id?: string;
  accessor: any;
  width?: number;
  headerName?: string;
  cellProps?: object;
  headerCellProps?: object;
};

type TableProps = {
  columns: ColumnsProps[];
  rows: any[];
  containerClass?: string;
  tableClass?: string;
  tableRowBodyProps?: any;
  tableHeaderProps?: any;
  scrollReveal?: boolean;
};

const Table = ({
  columns,
  rows,
  containerClass,
  tableClass,
  tableRowBodyProps,
  tableHeaderProps,
  scrollReveal = false,
}: TableProps) => (
  <div className={classnames('overflow-x-auto overflow-hidden', containerClass)}>
    <table className={classnames('table w-full', tableClass)}>
      <thead>
        <ScrollReveal component="tr" delay={!scrollReveal ? 0 : 500}>
          {columns.map((col) => (
            <th key={uuidv4()} {...col.headerCellProps}>
              {col.headerName}
            </th>
          ))}
        </ScrollReveal>
      </thead>
      <ScrollReveal component="tbody" delay={!scrollReveal ? 0 : 500}>
        {rows.map((row) => (
          <tr key={uuidv4()} {...tableRowBodyProps} onClick={() => tableRowBodyProps?.onClick(row)}>
            {columns.map((col) => (
              <td key={uuidv4()} {...col.cellProps}>
                {typeof col.accessor === 'function' ? col.accessor(row) : row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </ScrollReveal>
    </table>
  </div>
);

export default memo(Table);
