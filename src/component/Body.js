import Sigin from "./Sigin";
import Register from "./Register";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import TypesofLoan from "./TypesofLoan";

const Body=()=>{
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Sigin />,
        },
        {
            path:"/register",
            element:<Register />,
        },
        {
            path:"/loan",
            element:<TypesofLoan />,
        }
    ])
    return(
        <>
        <RouterProvider router={appRouter} />
    
        </>
    )
}
export default Body;