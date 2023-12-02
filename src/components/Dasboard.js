import React from "react";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

const Dasboard = () => {
  return (
    <div className="flex m-auto h-[100%] lg:flex-row flex-col">
      <LeftContent />
      <RightContent />
    </div>
  );
};

export default Dasboard;
