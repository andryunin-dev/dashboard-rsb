import {Settings} from "@material-ui/icons";
import React from "react";

export const myData = [
    {
        id: '1',
        nameHeader: 'Header1',
        iconHeader: (<Settings />),
        subMenu: [{ id: '1', name: 'subMenu1' }, { id: '2', name: 'subMenu2' }]
    },
    {
        id: '2',
        nameHeader: 'Header2',
        iconHeader: (<Settings />),
        subMenu: [{ id: '1', name: 'subMenu1' }, { id: '2', name: 'subMenu2' }]
    },
    {
        id: '3',
        nameHeader: 'Header3',
        iconHeader: (<Settings />),
        subMenu: [{ id: '1', name: 'subMenu1' }, { id: '2', name: 'subMenu2 many text fields subMenu2many' }]
    }
]