import React from "react";

export const Card = (props: any) => {
  return (
    <div
      className={`${
        props.responsible
          ? "border-t-4 border-b-2 border-r-0 border-l-0 sm:border-r-2 sm:border-l-2"
          : "border-2"
      } border-black w-auto box-shadow ${
        props.color ? props.color : "bg-white"
      } rounded-lg shadow-drop`}
    >
      {props.children}
    </div>
  );
};
