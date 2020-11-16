import Dashboard from "./Dashboard";
import React from "react";
import { Navigate } from 'react-router-dom';

const routes = [
    {
        path: '/',
        element: <Dashboard />,
        children: [
            { path: '1', element: <div>1</div> },
            { path: '2', element: <div>2</div> },
            { path: '3', element: <div>3</div> },
            { path: '/', element: <Navigate to="/1" /> }
        ]
    }
];

export default routes;