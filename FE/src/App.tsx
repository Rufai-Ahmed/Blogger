import { RouterProvider } from "react-router-dom";
import { Router } from "./router/Router";
import { ContextProvider } from "./global/ContextProvider";

function App() {
  return (
    <div>
      <ContextProvider>
        <RouterProvider router={Router} />
      </ContextProvider>
    </div>
  );
}

export default App;
