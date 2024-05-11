import React from "react";
import "./index.css";
// import { ConnectButton } from "@connect2ic/react";

const VerificationButton = () => {
  return (
    <div className="layoutButton">
    <div id="botonVerificar" class="px-6 sm:px-0 max-w-sm">
      <img className=" " src="">
      
      </img>
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
    {/* <ConnectButton /> */}
    </div>
  );
};

export default VerificationButton;
