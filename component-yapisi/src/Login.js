import React from "react";

export const veri = [
  {
    username: "uğur",
    password: "1",
  },
  {
    username: "betül",
    password: "2",
  },
];

function Login() {
  return (
    <div>
      <p>kullanıcı adı</p>
      <input type="text"></input>

      <p>şifreniz</p>
      <input type="text"></input>

      <button>Giriş</button>
    </div>
  );
}

export default Login;
