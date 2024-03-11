import {useMemo, useState, useEffect} from 'react'

import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from '@tanstack/react-table'

import data from './data'

// repris de cet exemple : https://codesandbox.io/s/tanstack-table-example-pagination-gyupo9?file=/src/main.tsx

const TableData = () => {

  const columns = useMemo(
    () => [
          {
            accessorKey: 'nom_prenom_titulaire',
            cell: info => info.getValue(),
            header: () => <span>Titulaire</span>,
            footer: props => props.column.id,
          },
          {
            accessorKey: 'num_client',
            cell: info => <p className="font-semibold">{info.getValue()}</p>,
            header: () => <span>Numéro dossier</span>,
            footer: props => props.column.id,
          },
          {
            accessorKey: 'nom_client',
            cell: info => info.getValue(),
            header: () => <span>Libellé dossier</span>,
            footer: props => props.column.id,
          },
          {
            accessorKey: 'dp_is',
            cell: info => <p>{info.getValue() === "0" ? "IR" : info.getValue() === "1" ? "IS" : ""}</p>,
            header: () => <span>IR/IS</span>,
            footer: props => props.column.id,
          },
          {
            accessorKey: 'lib_court_regime_impot',
            cell: info => info.getValue(),
            header: () => <span>CR-RF</span>,
            footer: props => props.column.id,
          },
        ],
    []
  )

  
  return (
    <>
      <Table
        {...{
          data,
          columns,
        }}
      />
    </>
  )
}

const Table = ({
  data,
  columns,
}) => {
  const table = useReactTable({
    data,
    columns,
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    //
    debugTable: true,
  })

  useEffect(() => {
    // reinitialisation des filtres à chaque recherche
    table.getHeaderGroups().map(headerGroup => {
      headerGroup.headers.map(header => header.column.setFilterValue(''))
    })
  
  }, [data])

  return (
    <div className="p-2 text-sm">
      <div className="h-2" />
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                return (
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-900 sm:pl-6 md:pl-0" key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanFilter() ? (
                          <div>
                            <Filter column={header.column} table={table} />
                          </div>
                        ) : null}
                      </div>
                    )}
                  </th>
                )
              })}
            </tr>
          ))}
        </thead>
        <tbody className="d">
          {table.getRowModel().rows.map(row => {
            return (
              <tr className="hover:bg-indigo-200" key={row.id}>
                {row.getVisibleCells().map(cell => {
                  return (
                    <td key={cell.id} className="whitespace-nowrap py-1 pl-2 pr-2 text-sm text-gray-800 sm:pl-6 md:pl-0 text-left">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="h-2" />
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} sur {' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Aller à la page :
          <input
            type="number"
            min={1}
            max={table.getPageCount()}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className="block w-full rounded-md border-gray-300  py-2 pl-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm w-16 !font-semibold"
          />
        </span>
        <select
          className="block w-36 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50, data.length].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              {pageSize} lignes
            </option>
          ))}
        </select>
        <p>
        | {data.length} résultats
        </p>
      </div>
    </div>
  )
}
function Filter({
  column,
  table,
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  
  
  return typeof firstValue === 'number' ? (
    <div className="flex space-x-2">
      <input
        type="number"
        value={(columnFilterValue)?.[0] ?? ''}
        onChange={e =>
          column.setFilterValue((old) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder={`Min`}
        className="w-24 border shadow rounded"
      />
      <input
        type="number"
        value={(columnFilterValue)?.[1] ?? ''}
        onChange={e =>
          column.setFilterValue((old) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder={`Max`}
        className="w-24 border shadow rounded"
      />
    </div>
  ) : (
    <input
      type="text"
      value={(columnFilterValue ?? '')}
      onChange={e => column.setFilterValue(e.target.value)}
      placeholder={`Rechercher...`}
      className="block w-full border-0 border-b font-medium border-transparent bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm"
    />
  )
}

export default TableData;