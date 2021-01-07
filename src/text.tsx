import React, { ReactElement } from "react";

interface TextInterface {
  children: any;
  center?: boolean;
}

export const Title = (props: TextInterface): ReactElement => {
  return (
    <h1
      className={`text-5xl font-black  text-black border-black border-1 ${
        props.center ? "text-center" : ""
      }`}
    >
      {props.children}
    </h1>
  );
};

export const TitleWhite = (props: TextInterface): ReactElement => {
  return (
    <h1 className="text-5xl font-black text-white">
      <span
        style={{
          textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
        }}
      >
        {props.children}
      </span>
    </h1>
  );
};

export const Subtitle = (props: TextInterface): ReactElement => {
  return <h3 className="text-black-700 text-lg">{props.children}</h3>;
};

export const Splinter = (props: TextInterface): ReactElement => {
  return (
    <h3 className="text-blue tracking-widest uppercase font-bold">
      {props.children}
    </h3>
  );
};
