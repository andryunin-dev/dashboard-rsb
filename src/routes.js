import Dashboard from "./Dashboard";
import React from "react";
import { Navigate } from 'react-router-dom';

const routes = [
    {
        path: '/',
        element: <Dashboard />,
        children: [
            { path: 'Header1/subMenu1', element: <div>/Header1/subMenu1</div> },
            { path: '/Header1/subMenu2', element: <div>/Header1/subMenu2</div> },
            { path: '/Header2/subMenu1', element: <div>/Header2/subMenu1</div> },
            { path: '/Header2/subMenu2', element: <div>/Header2/subMenu2</div> },
            { path: '/Header3/subMenu1', element: <div>/Header3/subMenu1</div> },
            { path: '/Header3/subMenu2', element: <div>/Header3/subMenu2</div> },
            { path: '/Header3/subMenu3', element: <div>/Header3/subMenu3</div> },
            { path: '1', element: <div>1</div> },
            { path: '2', element: <div>2</div> },
            { path: '3', element: <div>3</div> },
            { path: '/', element: <Navigate to="/1" /> }
        ]
    }
];

export default routes;