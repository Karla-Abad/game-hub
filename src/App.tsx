import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const items = ["New York", "Los Angeles", "San Francisco"];

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>My alert</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>My Button</Button>
      <ListGroup items={items} heading="Miami" onSelectItem={() => {}} />
    </div>
  );
}

export default App;
