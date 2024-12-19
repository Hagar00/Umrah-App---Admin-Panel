import { PrimeReactProvider } from "primereact/api";
import { Button } from "primereact/button";

function App() {
  return (
    <PrimeReactProvider>
      <Button label="prime react click" icon="pi pi-check" />
    </PrimeReactProvider>
  );
}

export default App;
