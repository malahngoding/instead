import React, { ReactElement } from "react";
import { ButtonPink } from "./button";

const colors = {
  white: {
    1000: "#ffffff",
  },
  black: {
    1000: "#18191F",
    800: "#474A57",
  },
};

interface Logo {
  size?: number;
}

export function Logo(props: Logo): ReactElement {
  const { size = 1 } = props;
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          height: `calc(32px * ${size})`,
          width: `calc(48px * ${size})`,
          border: `4px solid ${colors.black[1000]}`,
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            backgroundColor: `${colors.black[800]}`,
            height: "100%",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            flex: 2,
            borderLeft: `4px solid ${colors.black[1000]}`,
            backgroundColor: `${colors.white[1000]}`,
            height: "100%",
          }}
        ></div>
      </div>
    </>
  );
}

export const InLineBranding = (): ReactElement => {
  return (
    <strong className="text-black-800">
      MALAH<span className="text-black">NGODING</span>
    </strong>
  );
};

export const InLineBrandingEvent = (): ReactElement => {
  return (
    <strong className="text-black-800">
      {">_  "}MALAH<span className="text-black">NGODING</span>BARENG
    </strong>
  );
};

export const ActivationCTA = (): ReactElement => {
  return (
    <div className="flex flex-col content-center items-center w-full bg-green pt-16">
      <h1 className="text-4xl font-black px-4">
        Mulai ngoding dengan semangat
      </h1>
      <h2 className="text-xl mb-8 px-4">
        Bergabung dengan komunitas malah ngoding
      </h2>
      <a>
        <ButtonPink>Bergabung</ButtonPink>
      </a>
      <div className="h-6" />
      <div className="bg-green bg-cover h-48 w-full bg-footer-texture" />
    </div>
  );
};

export const ActivationCTASimple = (): ReactElement => {
  return (
    <div className="flex flex-col content-center items-center w-full bg-green pt-16">
      <h1 className="text-4xl font-black px-4">
        Mulai ngoding dengan semangat
      </h1>
      <h2 className="text-xl mb-8 px-4">
        Bergabung dengan komunitas malah ngoding
      </h2>
      <a>
        <ButtonPink>Bergabung</ButtonPink>
      </a>
      <div className="h-10" />
    </div>
  );
};
