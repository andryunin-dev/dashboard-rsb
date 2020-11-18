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
    column06
) {
    return {
        column01,
        column02,
        column03,
        column04,
        column05,
        column06
    };
}

const rows = [
    createData('платформа не указана', 'CISCO', 30, 0, 0, 3),
    createData('платформа не указана', 'CISCO', 30, 0, 0, 3),
    createData('платформа не указана', 'CISCO', 30, 0, 0, 3),
    createData('платформа не указана', 'CISCO', 30, 0, 0, 3),
    createData('платформа не указана', 'CISCO', 30, 0, 0, 3),
    createData('платформа не указана', 'CISCO', 30, 0, 0, 3),
    createData('платформа не указана', 'CISCO', 30, 0, 0, 3),
    createData('платформа не указана', 'CISCO', 30, 0, 0, 3),
    createData('платформа не указана', 'CISCO', 30, 0, 0, 3),
    createData('платформа не указана', 'CISCO', 30, 0, 0, 3),
];

export default function Table02() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell width="40%" align="left">Платформа</TableCell>
                        <TableCell width="15%" align="left">Производитель</TableCell>
                        <TableCell width="15%" align="left">Всего устройств</TableCell>
                        <TableCell width="10%" align="left">Активных</TableCell>
                        <TableCell width="10%" align="left">Активных (not InUse)</TableCell>
                        <TableCell width="10%" align="left">Неактивных</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.column01}>
                            <TableCell align="left">{row.column01}</TableCell>
                            <TableCell align="left">{row.column02}</TableCell>
                            <TableCell align="left">{row.column03}</TableCell>
                            <TableCell align="left">{row.column04}</TableCell>
                            <TableCell align="left">{row.column05}</TableCell>
                            <TableCell align="left">{row.column06}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}