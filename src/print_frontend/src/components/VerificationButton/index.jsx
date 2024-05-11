import { createClient } from "@connect2ic/core";
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity";
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react";
import { useConnect } from "@connect2ic/react";
import * as print_backend from "declarations/print_backend";

const VerificationButton = () => {
  const { principal } = useConnect();

  return (
    <div className="container" style={containerStyle}>
      <h2 className="text center font-bold">PrintIA</h2>
      <div className="buttonContainer">
        <ConnectButton style={buttonStyle} />
      </div>
      <ConnectDialog />
    </div>
  );
};

const client = createClient({
  canisters: {
    print_backend,
  },
  providers: [
    new InternetIdentity({
      providerUrl: "http://bkyz2-fmaaa-aaaaa-qaaaq-cai.localhost:4943/#authorize",
    }),
  ],
  globalProviderConfig: {
    /*
     * Disables dev mode in production
     * Should be enabled when using local canisters
     */
    dev: true,
  },
});

export default () => (
  <Connect2ICProvider client={client}>
    <VerificationButton />
  </Connect2ICProvider>
);

// Estilos
const containerStyle = {
  backgroundColor: "#9370DB", // Fondo purpura tono medio
  borderRadius: "10px", // Bordes redondeados
  textAlign: "center", // Alinear al centro
  padding: "20px", // Añadir espacio interior
};

const buttonStyle = {
  width: "150px", // Ancho del botón
  height: "40px", // Altura del botón
  fontSize: "14px", // Tamaño de la fuente
  margin: "auto", // Margen automático para centrar horizontalmente
};


