import { useState } from "react";

export default function PasswordControls({ setPassword, password }) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [length, setLength] = useState(12);
  const [useLower, setUseLower] = useState(true);
  const [useUpper, setUseUpper] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [copied, setCopied] = useState(false);

  function generarPasswordAvanzado() {
    let caracteres = "";
    if (useLower) caracteres += "abcdefghijklmnopqrstuvwxyz";
    if (useUpper) caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useNumbers) caracteres += "0123456789";
    if (useSymbols) caracteres += "!@#$%^&*()_+[]{}|;:,.<>?";

    if (!caracteres) return alert("Seleccioná al menos una opción");

    let nueva = "";
    for (let i = 0; i < length; i++) {
      nueva += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    setPassword(nueva);
  }

  function copiarAlPortapapeles() {
    if (!password) return;
    navigator.clipboard.writeText(password).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={() => setShowAdvanced(!showAdvanced)}>
        {showAdvanced ? "Ocultar opciones avanzadas" : "Mostrar opciones avanzadas"}
      </button>

      {showAdvanced && (
        <div style={{ marginTop: "15px", padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
          <div>
            <label>
              Largo:
              <input
                type="number"
                value={length}
                onChange={(e) => setLength(parseInt(e.target.value))}
                min={4}
                max={32}
                style={{ marginLeft: "10px", width: "50px" }}
              />
            </label>
          </div>
          <div>
            <label><input type="checkbox" checked={useLower} onChange={() => setUseLower(!useLower)} /> Minúsculas</label>
            <label><input type="checkbox" checked={useUpper} onChange={() => setUseUpper(!useUpper)} /> Mayúsculas</label>
            <label><input type="checkbox" checked={useNumbers} onChange={() => setUseNumbers(!useNumbers)} /> Números</label>
            <label><input type="checkbox" checked={useSymbols} onChange={() => setUseSymbols(!useSymbols)} /> Símbolos</label>
          </div>
          <div style={{ marginTop: "10px" }}>
            <button onClick={generarPasswordAvanzado}>Generar contraseña personalizada</button>
          </div>
        </div>
      )}

      <div style={{ marginTop: "10px" }}>
        <button onClick={copiarAlPortapapeles}>Copiar contraseña</button>
        {copied && <span style={{ marginLeft: "10px", color: "green" }}>¡Copiada al portapapeles!</span>}
      </div>
    </div>
  );
}
