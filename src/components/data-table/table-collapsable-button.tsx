import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconButton, TableCell } from '@mui/material';
import * as React from 'react';

type Props = {
  isOpen: boolean;
  onClick: () => void;
};
export default function TableCollapsableCell({ isOpen, onClick }: Props) {
  return (
    <TableCell align="left">
      <IconButton size="small" onClick={onClick}>
        {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>
    </TableCell>
  );
}
