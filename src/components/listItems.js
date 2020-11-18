import {Business, DevicesOther, Dns, LocalPhone, Settings, SettingsPhone} from "@material-ui/icons";
import BarChartIcon from '@material-ui/icons/BarChart';
import React from "react";

export const myData = [
    {
        id: '1',
        nameHeader: 'Офисы',
        iconHeader: (<Business />),
        href: '/locations'
    },
    {
        id: '2',
        nameHeader: 'Оборудование',
        iconHeader: (<DevicesOther />),
        href: '/equipment'
    },
    {
        id: '3',
        nameHeader: 'Phones',
        iconHeader: (<LocalPhone />),
        subMenu: [
            { id: '1', name: 'Телефоны Инфо', href: '/phones/info' },
            { id: '2', name: 'Телефоны по ФИО', href: '/phones/fio' },
            { id: '3', name: 'Телефоны с переадресацией', href: '/phones/forwarding' }
        ],
    },
    {
        id: '4',
        nameHeader: 'IP Planning',
        iconHeader: (<Dns />),
        subMenu: [
            { id: '1', name: 'IPAM', href: '/ip-planning/ipam' }
        ],
    },
    {
        id: '5',
        nameHeader: 'Reports',
        iconHeader: (<BarChartIcon />),
        href: '/report/new'
    },
    {
        id: '6',
        nameHeader: 'Phones reports',
        iconHeader: (<SettingsPhone />),
        subMenu: [
            { id: '1', name: 'По моделям', href: '/phones-reports/model' },
            { id: '2', name: 'По кластерам', href: '/phones-reports/cluster' },
            { id: '3', name: 'По не используемым', href: '/phones-reports/unused' },
            { id: '4', name: 'По Agent Licenses', href: '/phones-reports/agent-licenses' }
        ],
    },
    {
        id: '7',
        nameHeader: 'Tools',
        iconHeader: (<Settings />),
        subMenu: [
            { id: '1', name: 'Поиск незарегистрированных телефонов', href: '/tools/search-unregistered-phones' },
            { id: '2', name: 'CUCM маршрутизация', href: '/tools/cucm-routing' },
            { id: '3', name: 'Testing CORS requests', href: '/tools/testing-cors-requests' },
        ],
    },
]