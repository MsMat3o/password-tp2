function getStrength(password) {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  if (strength >= 4) return "Muy segura";
  if (strength >= 2) return "Segura";
  return "Poco segura";
}

function getColor(strength) {
  switch (strength) {
    case "Muy segura":
      return "green";
    case "Segura":
      return "orange";
    case "Poco segura":
    default:
      return "red";
  }
}

export default function PasswordStrength({ password }) {
  const strength = getStrength(password);
  const color = getColor(strength);

  return (
    <div style={{ marginTop: "10px" }}>
      {password && (
        <p style={{ color }}>
          Fortaleza: <strong>{strength}</strong>
        </p>
      )}
    </div>
  );
}
