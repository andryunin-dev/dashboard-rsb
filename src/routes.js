import Dashboard from "./Dashboard";
import React from "react";
import { Navigate } from 'react-router-dom';
import Locations from "./pages/Locations";

const routes = [
    {
        path: '/',
        element: <Dashboard />,
        children: [
            { path: '/locations', element: <Locations /> },
            { path: '/equipment', element: <h1>Оборудование</h1> },
            { path: '/report/new', element: <h1>Reports</h1> },
            { path: '/', element: <Navigate to="/locations" /> }
        ]
    },
    {
        path: 'phones',
        element: <Dashboard />,
        children: [
            { path: 'info', element: <h1>Телефоны Инфо</h1> },
            { path: 'fio', element: <h1>Телефоны по ФИО</h1> },
            { path: 'forwarding', element: <h1>Телефоны с переадресацией</h1> },
        ]
    },
    {
        path: 'ip-planning',
        element: <Dashboard />,
        children: [
            { path: 'ipam', element: <h1>IPAM</h1> },
        ]
    },
    {
        path: 'phones-reports',
        element: <Dashboard />,
        children: [
            { path: 'model', element: <h1>По моделям</h1> },
            { path: 'cluster', element: <h1>По кластерам</h1> },
            { path: 'unused', element: <h1>По не используемым</h1> },
            { path: 'agent-licenses', element: <h1>По Agent Licenses</h1> },
        ]
    },
    {
        path: 'tools',
        element: <Dashboard />,
        children: [
            { path: 'search-unregistered-phones', element: <h1>Поиск незарегистрированных телефонов</h1> },
            { path: 'cucm-routing', element: <h1>CUCM маршрутизация</h1> },
            { path: 'testing-cors-requests', element: <h1>Testing CORS requests</h1> },
        ]
    },
    {
        path: 'directory',
        element: <Dashboard />,
        children: [
            { path: 'mapping', element: <h1>Рег.центры(mapping)</h1> },
            { path: 'regions', element: <h1>Регионы</h1> },
            { path: 'cities', element: <h1>Города</h1> },
            { path: 'office-statuses', element: <h1>Статусы офисов</h1> },
            { path: 'equipment', element: <h1>Оборудование</h1> },
            { path: 'port-types', element: <h1>Типы портов</h1> },
            { path: 'vrf', element: <h1>VRF</h1> },
            { path: 'networks-table', element: <h1>Networks(Table)</h1> },
            { path: 'networks-tree', element: <h1>Networks(Tree)</h1> },
            { path: 'hardware-logs', element: <h1>Логи Hardware</h1> },
            { path: 'phones-logs', element: <h1>Логи Phones</h1> },
        ]
    },

];

export default routes;