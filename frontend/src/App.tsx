import { BrowserRouter } from "react-router-dom";
import ConfigRoutes from "./mainroute/configRoutes";

function App() {
  return (
    <BrowserRouter>
      <ConfigRoutes />
    </BrowserRouter>
  );
}

export default App;
