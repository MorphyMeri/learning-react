import React, { useState } from "react";
import Button from "./Button";
import Alert from "./Alert";

function App() {
  const [color, setColor] = useState<"primary" | "secondary" | "danger">(
    "primary"
  );
  const handleClick = () => {
    setAlertVisibility(true);
    // Toggle between colors for demonstration
    if (color === "primary") {
      setColor("danger");
    } else {
      setColor("primary");
    }
  };
  const handleCloseAlert = () => {
    setAlertVisibility(false);
  };

  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && <Alert onClose={handleCloseAlert}>My alert</Alert>}
      <Button color={color} onClick={handleClick}>
        MyButton
      </Button>
    </div>
  );
}
export default App;
