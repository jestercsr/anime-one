'use client'

export function BouttonForm(props) {
    return (
      <div>
        <button className="w-10">
          <img src={props.image} />
          <span>{props.text}</span>
        </button>
      </div>
    );
  }