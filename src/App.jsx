import { useState } from "react";
import PasswordInput from "./components/PasswordInput";
import PasswordStrength from "./components/PasswordStrength";
import PasswordControls from "./components/passwordcontrols";

function App() {
  const [password, setPassword] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Fortaleza de Contraseña</h1>
      <PasswordInput password={password} setPassword={setPassword} />
      <PasswordStrength password={password} />
      <PasswordControls password={password} setPassword={setPassword} />
    </div>
  );
}

export default App;
