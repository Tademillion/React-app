import { createBrowserRouter } from "react-router-dom";
import StateHookForms from "./Begin/forms/StateHookForms";
import App from "../App";
import RefHookforms from "./Begin/forms/RefHookforms";

const router = createBrowserRouter([
  { path: "/forms", element: <StateHookForms /> },
  { path: "/", element: <App /> },
  {
    path: "/forms2",
    element: <RefHookforms />,
  },
]);
export default router;
