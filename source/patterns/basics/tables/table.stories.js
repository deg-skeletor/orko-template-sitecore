import React from 'react';
import Table, {TableHeader, TableBody, TableRow, TableHeading, TableCell} from './table.js';

export default {
    title: 'Components/Table'
};

export const table = () => (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHeading>Table Heading 1</TableHeading>
                <TableHeading>Table Heading 2</TableHeading>
                <TableHeading>Table Heading 3</TableHeading>
                <TableHeading>Table Heading 4</TableHeading>
                <TableHeading>Table Heading 5</TableHeading>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow>
                <TableCell>Table Cell 1</TableCell>
                <TableCell>Table Cell 2</TableCell>
                <TableCell>Table Cell 3</TableCell>
                <TableCell>Table Cell 4</TableCell>
                <TableCell>Table Cell 5</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Table Cell 1</TableCell>
                <TableCell>Table Cell 2</TableCell>
                <TableCell>Table Cell 3</TableCell>
                <TableCell>Table Cell 4</TableCell>
                <TableCell>Table Cell 5</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Table Cell 1</TableCell>
                <TableCell>Table Cell 2</TableCell>
                <TableCell>Table Cell 3</TableCell>
                <TableCell>Table Cell 4</TableCell>
                <TableCell>Table Cell 5</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);