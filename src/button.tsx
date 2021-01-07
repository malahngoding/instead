import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children?: any;
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className="px-3 py-2 border-2 border-black mx-2 font-bold box-shadow bg-white rounded-md text-sm shadow-drop max-w-sm sm:max-w-sm"
    >
      {props.children}
    </button>
  );
};

export const ButtonPrimary = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className="px-3 py-2 border-2 border-black mx-2 font-bold box-shadow bg-blue-800 text-white rounded-md text-sm shadow-drop max-w-sm sm:max-w-sm"
    >
      {props.children}
    </button>
  );
};

export const ButtonWarning = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className="px-3 py-2 border-2 border-black mx-2 font-bold box-shadow bg-yellow-800 text-black rounded-md text-sm shadow-drop max-w-sm sm:max-w-sm"
    >
      {props.children}
    </button>
  );
};

export const ButtonDanger = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className="px-3 py-2 border-2 border-black mx-2 font-bold box-shadow bg-red-800 text-black rounded-md text-sm shadow-drop max-w-sm sm:max-w-sm"
    >
      {props.children}
    </button>
  );
};

export const ButtonPink = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className="px-3 py-2 border-2 border-black mx-2 font-bold box-shadow bg-pink-800 text-black rounded-md text-sm shadow-drop max-w-sm sm:max-w-sm"
    >
      {props.children}
    </button>
  );
};
