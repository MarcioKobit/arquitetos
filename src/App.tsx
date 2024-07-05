// import React from "react";
import { AuthProvider } from "./AuthProvider";
// import Rotas from "./routes";
import Rotas from "./rotas";

function App() {

  return (
    <AuthProvider>
      <Rotas />
    </AuthProvider>
  )
}

export default App;