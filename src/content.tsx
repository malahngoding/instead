import React from "react";

export const ContentHeading = (props: any) => {
  return (
    <h2 className="py-4 text-xl text-black font-bold">{props.children}</h2>
  );
};

export const ContentSubHeading = (props: any) => {
  return <h2 className="text-md text-black font-bold">{props.children}</h2>;
};

export const ContentSection = (props: any) => {
  return (
    <section>
      <div className="container w-full md:max-w-6xl mx-auto">
        <div className="w-full px-4 md:px-6 text-md leading-normal">
          {props.children}
        </div>
      </div>
    </section>
  );
};
