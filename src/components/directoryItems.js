import {ImportContacts} from "@material-ui/icons";
import React from "react";

export const directory = [
    {
        id: '1',
        nameHeader: 'Справочники',
        iconHeader: (<ImportContacts />),
        subMenu: [
            { id: '1', name: 'Рег.центры(mapping)', href: '/directory/mapping', divider: false },
            { id: '2', name: 'Регионы', href: '/directory/regions', divider: false },
            { id: '3', name: 'Города', href: '/directory/cities', divider: false },
            { id: '4', name: 'Статусы офисов', href: '/directory/office-statuses', divider: true },
            { id: '5', name: 'Оборудование', href: '/directory/equipment', divider: false },
            { id: '6', name: 'Типы портов', href: '/directory/port-types', divider: true },
            { id: '7', name: 'VRF', href: '/directory/vrf', divider: false },
            { id: '8', name: 'Networks(Table)', href: '/directory/networks-table', divider: false },
            { id: '9', name: 'Networks(Tree)', href: '/directory/networks-tree', divider: true },
            { id: '10', name: 'Логи Hardware', href: '/directory/hardware-logs', divider: false },
            { id: '11', name: 'Логи Phones', href: '/directory/phones-logs', divider: false },
        ],
    },
]