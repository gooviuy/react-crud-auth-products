import "primereact/resources/themes/lara-light-indigo/theme.css"; // primeng theme
import "primereact/resources/primereact.min.css"; // core css
import "primeicons/primeicons.css"; // icons

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useState } from "react";

function App() {
  const [state, setState] = useState(true);
  return (
    <div>
      <Dialog visible={state} onHide={() => setState(false)}>
        Hello
      </Dialog>

      <Button label="Show" onClick={() => setState(true)} />
    </div>
  );
}

export default App;
