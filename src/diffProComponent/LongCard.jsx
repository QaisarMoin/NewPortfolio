import React from "react";

const LongCard = ({ imageAddress, className = "" }) => {
  return (
    <div
      className={`md:max-w-[90%] md:w-[420px] max-h-fit min-h-fit 
      overflow-hidden w-[95%] hover:scale-105 transition-all duration-300
       ease-in-out ${className}
             flex justify-center items-center rounded-3xl object-cover
              mt-24 bg-gradient-to-b from-[#434343] border-[0.2px]`}
    >
      {/* insider Card */}
      <div
        className="md:max-w-[90%] md:w-[400px] min-w-[96%] max-h-[97%]
         min-h-[97%] overflow-hidden object-cover md:px-0 flex px-2
         justify-center items-center rounded-xl py-[10px]"
      >
        <img
          src={imageAddress}
          alt="wwe"
          className="w-[100%] rounded-2xl border h-[100%] 
                object-fit "
        />
      </div>
    </div>
  );
};

export default LongCard;
