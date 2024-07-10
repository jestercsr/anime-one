"use client";

export function BouttonForm(props) {
  return (
    <div>
      <button className="w-[80%] md:w-[60%] laptop:w-2/4 relative flex m-auto mt-2.5 rounded-2xl bg-slate-200 bg-opacity-75 border-black">
        <img
          src={props.image} alt={props.alt}
          className="items-center opacity-0 transition easi-in duration-500 rounded-2xl  justify-center hover:opacity-100 "
        />
        <span className="absolute top-4 text-[8px] left-[30px] right-10 md:top-5 md:text-[12px] lg:top-10 lg:text-[15px] lg:top-9 lg:left-12 lg:right-14">
          {props.text}
        </span>
      </button>
    </div>
  );
}