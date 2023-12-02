import React, { useState } from "react";

const RightContent = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const emailSubmit = () => {
    setError(null);

    if (email.length == 0) {
      setError("Required");
      return false;
    }
    if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      setError("Please enter a valid email");
      return false;
    } else {
      window.location.href = "https://app.loch.one/welcome";
    }
    return true;
  };
  return (
    <div className="w-[95%] m-auto sm:m-0 xl:w-[45%] mt-[20px] xl:mt-[0px] flex items-center justify-center">
      <div className="sm:w-[365px] h-[347px]">
        <h1 className="font-medium leading-[46.8px] sm:text-[39px] text-[20px] text-[#B0B1B3] sm:w-[326px]">
          Sign up for exclusive access.
        </h1>
        <input
          className="mt-[5px] sm:mt-[20px] w-[100%] sm:w-[340px] sm:h-[59px] h-[30px] border-[1px] border-[#E5E5E6] rounded-[8px] focus:outline-none text-[#CACBCC] p-[20px]"
          style={{
            boxShadow: "0px 1px 1px 0px #0000000A",
          }}
          placeholder="Your email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="text-[red] pl-[10px]">{error}</p>}
        <button
          className="w-full mt-[20px] bg-[#19191A] sm:w-[340px] rounded-md h-[40px] sm:h-[59px] text-[#fff] leading-[19.2px]"
          onClick={emailSubmit}
        >
          Get Started
        </button>
        <p className="mt-[20px] font-bold leading-[19.2px] text-[16px] text-center">
          You’ll receive an email with an invite link to join.
        </p>
      </div>
    </div>
  );
};

export default RightContent;
