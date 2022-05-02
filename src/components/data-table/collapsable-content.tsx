import {
  Box,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import * as React from 'react';

type Props<T> = {
  title?: string;
  isOpen: boolean;
  data: T[];
  tableHeaderRows: string[];
};

interface DataTime {
  readonly startTime?: string | number;
  readonly createdAt?: string | number;
}

export default function CollapsableContent<T extends DataTime>({
  data,
  isOpen,
  tableHeaderRows,
  title = 'title',
}: Props<T>) {
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            {title && (
              <Typography variant="h6" gutterBottom component="div">
                {title}
              </Typography>
            )}
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  {tableHeaderRows.map((key) => (
                    <TableCell key={key}>{key}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.createdAt ?? row.startTime}>
                    {Object.values(row).map((value) =>
                      typeof value !== 'object' ? (
                        <TableCell key={value + Math.random() * 9999}>
                          {typeof value === 'number' ? value.toFixed(3) : value}
                        </TableCell>
                      ) : null,
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
}
