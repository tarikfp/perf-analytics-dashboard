/* eslint-disable no-underscore-dangle */
import { PRIMARY_DARK, PRIMARY_LIGHT, useThemeContext, WHITE } from '@/theme';
import { Metric, PerformanceResourceTimingHandler } from '@/types';
import {
  findDisplayNameFromKey,
  parsePerformanceResourceTimingData,
} from '@/utils';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import CollapsableContent from './collapsable-content';
import TableCollapsableCell from './table-collapsable-button';
import { columns, resourceTableHeaderRows } from './table-columns';

type Props = {
  data: Metric[];
};

const MemoizedTableCell = React.memo(TableCell);

export default function DataTable({ data }: Props) {
  const { isDarkMode } = useThemeContext();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [collapseTableRowId, setCollapseTableRowId] = React.useState<
    string | null
  >(null);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: '100%',
        overflow: 'hidden',
        backgroundColor: isDarkMode ? PRIMARY_LIGHT : WHITE,
      }}
    >
      <TableContainer
        sx={{
          maxHeight: 440,
          backgroundColor: isDarkMode ? PRIMARY_LIGHT : WHITE,
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <MemoizedTableCell
                style={{
                  backgroundColor: isDarkMode ? PRIMARY_DARK : WHITE,
                }}
              />
              {columns.map((column) => (
                <MemoizedTableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    color: isDarkMode ? WHITE : PRIMARY_DARK,
                    backgroundColor: isDarkMode ? PRIMARY_DARK : WHITE,
                  }}
                >
                  {column.label}
                </MemoizedTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <React.Fragment key={row._id}>
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.createdAt}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <React.Fragment key={column.id}>
                          {column.id === 'url' && (
                            <TableCollapsableCell
                              isOpen={row._id === collapseTableRowId}
                              onClick={() =>
                                collapseTableRowId === null
                                  ? setCollapseTableRowId(row._id)
                                  : setCollapseTableRowId(null)
                              }
                            />
                          )}

                          <MemoizedTableCell
                            style={{
                              minWidth: column.minWidth,
                            }}
                            key={column.id}
                            align={column.align}
                          >
                            {column.format
                              ? column.format(value as number)
                              : (value as string | number)}
                          </MemoizedTableCell>
                        </React.Fragment>
                      );
                    })}
                  </TableRow>
                  <CollapsableContent<PerformanceResourceTimingHandler>
                    data={parsePerformanceResourceTimingData(row.resources)}
                    tableHeaderRows={findDisplayNameFromKey<PerformanceResourceTimingHandler>(
                      row.resources[0],
                      resourceTableHeaderRows,
                    )}
                    title={`${row.url} resources`}
                    isOpen={collapseTableRowId === row._id}
                  />
                </React.Fragment>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
