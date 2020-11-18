import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(
    column01,
    column02,
    column03,
    column04,
    column05,
    column06,
    column07,
    column08,
    column09,
    column10
) {
    return {
        column01,
        column02,
        column03,
        column04,
        column05,
        column06,
        column07,
        column08,
        column09,
        column10
    };
}

const rows = [
    createData('column01', 'column02', 'column03', 'column04', 'column05',
        'column06', 'column07', 'column08', 'column09', 'column10', ),
    createData('column01', 'column02', 'column03', 'column04', 'column05',
        'column06', 'column07', 'column08', 'column09', 'column10', ),
    createData('column01', 'column02', 'column03', 'column04', 'column05',
        'column06', 'column07', 'column08', 'column09', 'column10', ),
    createData('column01', 'column02', 'column03', 'column04', 'column05',
        'column06', 'column07', 'column08', 'column09', 'column10', ),
    createData('column01', 'column02', 'column03', 'column04', 'column05',
        'column06', 'column07', 'column08', 'column09', 'column10', ),
];

export default function LocationsTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell width="10%" align="right">Header01</TableCell>
                        <TableCell width="10%" align="right">Header02</TableCell>
                        <TableCell width="10%" align="right">Header03</TableCell>
                        <TableCell width="10%" align="right">Header04</TableCell>
                        <TableCell width="10%" align="right">Header05</TableCell>
                        <TableCell width="10%" align="right">Header06</TableCell>
                        <TableCell width="10%" align="right">Header07</TableCell>
                        <TableCell width="10%" align="right">Header08</TableCell>
                        <TableCell width="10%" align="right">Header09</TableCell>
                        <TableCell width="10%" align="right">Header10</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.column01}>
                            <TableCell align="right">{row.column01}</TableCell>
                            <TableCell align="right">{row.column02}</TableCell>
                            <TableCell align="right">{row.column03}</TableCell>
                            <TableCell align="right">{row.column04}</TableCell>
                            <TableCell align="right">{row.column05}</TableCell>
                            <TableCell align="right">{row.column06}</TableCell>
                            <TableCell align="right">{row.column07}</TableCell>
                            <TableCell align="right">{row.column08}</TableCell>
                            <TableCell align="right">{row.column09}</TableCell>
                            <TableCell align="right">{row.column10}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}