import { createClient } from "@connect2ic/core";
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity";
import { ConnectButton,ConnectDialog, Connect2ICProvider} from "@connect2ic/react";
import { useConnect } from "@connect2ic/react";
import * as print_backend from "declarations/print_backend";

const VerificationButton = () => {
  const { principal } = useConnect();

  function onElementAvailable(selector, callback) {
    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        callback();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  onElementAvailable(".ii-styles", () => {
    const btn2 = Array.from(document.getElementsByClassName("ii-styles"));

    const custom_style = {
      color: "red",
      "background-color": "blue",
      padding: "3px",
      "margin-left": "4px",
    };

    Object.assign(btn2[0].style, custom_style);

    const texto = Array.from(document.getElementsByClassName("button-label"));
    if (texto[0]) texto[0].remove();

    const img = Array.from(document.getElementsByClassName("img-styles"));
    img[0].style.height = "25px";
  });

  onElementAvailable(".connect-button", () => {
    const btn = Array.from(document.getElementsByClassName("connect-button"));
    const custom_style = {
      "background-color": "blue",
      "font-size": "17px",
    };
    Object.assign(btn[0].style, custom_style);
    if (btn[0].textContent == "Connect" || btn[0].textContent == "Conectar II")
      btn[0].textContent = "Conectar II";
    else btn[0].textContent = "Desconectar II";
  });

  return (
    <div className="layoutButton">
      <div id="botonVerificar" class="px-6 sm:px-0 max-w-sm">
        <img className=" " src=""></img>
        <div className="">
          <h2 className="text center font-bold ">PrintIA</h2>
        </div>
        <button
          type="button"
          className="text-white w-full bg-[#D29BFD] hover:bg-[#D29BFD]/90 focus:ring-4 focus:outline-none focus:ring-[#D29BFD]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2 font-bold"
        >
          Verify with printAI<div></div>
        </button>
      </div>
      <ConnectButton />
      <ConnectDialog />
      {/* <ConnectButton /> */}
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
