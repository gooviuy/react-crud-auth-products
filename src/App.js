import "primereact/resources/themes/lara-light-indigo/theme.css"; // primeng theme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css"; // icons
import Login from "./pages/Login";
import { LoginProvider } from "./context/LoginContex";

function App() {
  return (
    <div>
      <LoginProvider>
        <Login />
      </LoginProvider>
    </div>
  );
}

export default App;
