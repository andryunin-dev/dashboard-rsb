import Dashboard from "./Dashboard";
import React from "react";
import { Navigate } from 'react-router-dom';

const routes = [
    {
        path: '/',
        element: <Dashboard />,
        children: [
            { path: '/locations', element: <div>locations</div> },
            { path: '/equipment', element: <div>equipment</div> },
            { path: '/report/new', element: <div>Reports</div> },
            { path: '1', element: <div>1</div> },
            { path: '2', element: <div>2</div> },
            { path: '3', element: <div>3</div> },
            { path: '/', element: <Navigate to="/1" /> }
        ]
    },
    {
        path: 'phones',
        element: <Dashboard />,
        children: [
            { path: 'info', element: <div>info</div> },
            { path: 'fio', element: <div>fio</div> },
            { path: 'forwarding', element: <div>forwarding</div> },
        ]
    },
    {
        path: 'ip-planning',
        element: <Dashboard />,
        children: [
            { path: 'ipam', element: <div>ipam</div> },
        ]
    },
    {
        path: 'phones-reports',
        element: <Dashboard />,
        children: [
            { path: 'model', element: <div>model</div> },
            { path: 'cluster', element: <div>cluster</div> },
            { path: 'unused', element: <div>unused</div> },
            { path: 'agent-licenses', element: <div>agent-licenses</div> },
        ]
    },
    {
        path: 'tools',
        element: <Dashboard />,
        children: [
            { path: 'search-unregistered-phones', element: <div>search-unregistered-phones</div> },
            { path: 'cucm-routing', element: <div>cucm-routing</div> },
            { path: 'testing-cors-requests', element: <div>testing-cors-requests</div> },
        ]
    },

];

export default routes;