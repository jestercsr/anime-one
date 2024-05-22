"use client";

export function BouttonForm(props) {
  return (
    <div>
      <button className="w-2/4 relative flex m-auto mt-2.5 rounded-2xl bg-slate-200 bg-opacity-75 border-black">
        <img
          src={props.image}
          className="items-center opacity-0 transition easi-in duration-500 rounded-2xl  justify-center hover:opacity-100 "
        />
        <span className="md:absolute top-6 left-8 right-10 laptop:absolute top-10 left-14 right-14">
          {props.text}
        </span>
      </button>
    </div>
  );
}
