import React from "react";

export const TextInput = (props: any) => {
  return (
    <div>
      <input
        type="text"
        placeholder={props.placeholder}
        className="border-2 border-black text-md rounded-xl py-2 px-5"
      />
    </div>
  );
};
