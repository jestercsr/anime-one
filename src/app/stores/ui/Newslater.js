import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaFigma } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { RiInstagramFill } from "react-icons/ri";

export default function Newslater() {
  return (
    <div
      style={{
        backgroundImage: "url(/assets/TopScreen/Boutiques/Newsletter.webp)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "20% 70%",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-[20px] text-center">Rejoindrez la Newsletters</h2>
      <div className="text-center mt-1 mb-10">
        <input
          type="email"
          placeholder="Adresse Email"
          className="p-1 rounded-md"
        />
        <button className="p-1 px-3 bg-sky-600 rounded-md ml-1 text-slate-50 hover:bg-sky-800">
          S'inscrire
        </button>
      </div>
      <div className="text-center">
        <h2 className="text-[20px] text-center mb-5">
          On est aussi sur les réseaux
        </h2>
        <div className="text-3xl flex text-center justify-around m-auto">
          <FaGithub className="hover:text-sky-800"/>
          <FaLinkedin className="hover:text-sky-800"/>
          <FaXTwitter className="hover:text-sky-800"/>
          <FaFigma className="hover:text-sky-800"/>
          <SiGmail className="hover:text-sky-800"/>
          <RiInstagramFill className="hover:text-sky-800"/>
        </div>
      </div>
    </div>
  );
}
