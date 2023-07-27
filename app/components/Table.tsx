import {memo} from 'react'
import classnames from 'classnames'

import {RevealList} from '@/app/components'

export type ColumnsProps = {
  id?: string
  accessor: any
  width?: number
  headerName?: string
  cellProps?: object
  headerCellProps?: object
}

type TableProps = {
  columns: ColumnsProps[]
  rows: any[]
  containerClass?: string
  tableClass?: string
  tableRowBodyProps?: any
  tableHeaderProps?: any
  scrollReveal?: boolean
}

const Table = ({
  columns,
  rows,
  containerClass,
  tableClass,
  tableRowBodyProps,
  tableHeaderProps,
}: TableProps) => (
  <div className={classnames('overflow-hidden overflow-x-auto', containerClass)}>
    <table className={classnames('table w-full', tableClass)}>
      <thead>
        <RevealList component="tr" interval={200} delay={500} {...tableHeaderProps}>
          {columns.map(col => (
            <th key={col.headerName} {...col.headerCellProps}>
              {col.headerName}
            </th>
          ))}
        </RevealList>
      </thead>
      <RevealList component="tbody" interval={200} delay={500}>
        {rows.map((row, id) => (
          <tr
            key={`tr-${id}`}
            {...tableRowBodyProps}
            onClick={() => tableRowBodyProps?.onClick(row)}
          >
            {columns.map(col => (
              <td key={`td-${col.headerName as string}`} {...col.cellProps}>
                {typeof col.accessor === 'function' ? col.accessor(row) : row[col.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </RevealList>
    </table>
  </div>
)

export default memo(Table)
