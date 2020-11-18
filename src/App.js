import { useRoutes } from 'react-router-dom';
import routes from "./routes";
import React from "react";

function App() {
    const routing = useRoutes(routes);

    return (
        <div>
            {routing}
        </div>
    );
}

export default App;
