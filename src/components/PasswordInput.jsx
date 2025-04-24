import { useState } from "react";

export default function PasswordInput({ password, setPassword }) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
      <input
        type={mostrar ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Ingresá una contraseña"
      />
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar" : "Mostrar"}
      </button>
    </div>
  );
}
