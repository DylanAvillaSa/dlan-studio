import React from "react";

const RooterLayout = ({ children }) => {
  return (
    <main className="max-w-full min-h-screen flex justify-center items-start">
      {children}
    </main>
  );
};

export default RooterLayout;
