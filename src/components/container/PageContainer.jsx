import React from "react";

const PageContainer = ({ children }) => {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {children}
    </section>
  );
};

export default PageContainer;
