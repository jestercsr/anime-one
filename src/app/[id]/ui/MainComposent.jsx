import React from "react";

export default function MainComposent(props) {
  return (
    <div>
      <main className={props.className}>
        {props.children}
      </main>
    </div>
  );
}