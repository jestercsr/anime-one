import React from 'react'

export default function Logo() {
    const getLogo = () => {
        switch (bgColor) {
          case "bg-bluer-950" || "bg-bluer-800" || "bg-bluer-700" || "bg-bluer-600"||"bg-blacker-950" ||"bg-blacker-300" || "bg-blacker-200" ||"bg-blacker-10" ||"bg-blacker-8"||"bg-neutraler-900"||"bg-neutraler-800"||"bg-neutraler-100"||"bg-slate-950"||"bg-slate-900"||"bg-slate-800"||"bg-gray-950"||"bg-gray-900"||"bg-gray-800"||"bg-zinc-950"||"bg-zinc-900"||"bg-zinc-800"||"bg-neutral-950"||"bg-neutral-900"||"bg-neutral-800":
            return "/assets/LogoAnimeONE/logoAnimeOneDefault3.webp";
          case "bg-skyer-950" || "bg-skyer-600" || "bg-skyer-500"||"bg-blue-950"||"bg-blue-900"||"bg-blue-800"||"bg-blue-700"||"bg-blue-600"||"bg-blue-500"||"bg-blue-400"||"bg-sky-400"||"bg-sky-500"||"bg-sky-600"||"bg-sky-700"||"bg-sky-800"||"bg-sky-900"||"bg-sky-950"||"bg-cyan-950"||"bg-cyan-900"||"bg-cyan-800"||"bg-cyan-700"||"bg-cyan-600"||"bg-cyan-500"||"bg-cyan-400":
            return "/assets/LogoAnimeONE/logoAnimeOneDefault2.webp";
          default:
            return "/assets/LogoAnimeONE/logoAnimeOneDefault.webp";
        }
      };
  return (
    <div>Logo</div>
  )
}
