import React from "react";
import "./Card.css";
// import { div } from "react-router-dom";

const Card = ({
  image,
  name,
  description,
  path = "",
  className = "",
  bg = "",
  animation,
  buttonName = "Live Preview",
  link = "/"
}) => {
  return (
    <div
      to={`${path}`}
      className={`mt-10 mx-5 flex relative overflow-hidden rounded-[28px]
      justify-center  meer p-[5px] hover:scale-[1.04] transition-all 
      duration-300 ease-in-out  middle_div_blue_shadow ${animation}

      min-w-[320px] max-w-[568px] min-h-[150px] max-h-[350px] 

      md:max-w-[768px] md:min-w-[740px] md:h-[690px] md:min-h-[400px]
       md:max-h-[500px] 

        lg:min-w-[250px] lg:w-[650px]  lg:h-[490px] lg:min-h-[480px]  lg:p-[10px] `}
    >
      {/* Middle Div Starts from here  ---------------------- */}
      <div
        className={`relative rounded-3xl overflow-hidden middle_div
         ${bg}
        
      min-w-[310px] max-w-[558px] min-h-[240px] max-h-[340px] 

      md:max-w-[758px] md:w-[730px] md:h-[680px] md:min-h-[490px]
      md:max-h-[390px] 

       lg:min-w-[230px] lg:w-[660px] lg:h-[470px] lg:min-h-[470px] inner_div
      `}
      >
        {/* Div Card Naming  ------------------------- */}
        <div
          className="w-[95%] mt-28
         md:mt-36 
         lg:mt-0
         text-left"
        >
          <p
            className="md:text-[20px] 
            lg:text-[30px] flex justify-between
             text-[20px] font-[font5] glowText_card"
          >
            {name}  <a href={link} target="_blank" className="cursor-pointer hover:bg-[#a1a1a1] hover:text-black px-2 rounded-full text-xl self-center">{buttonName}</a>
          </p> 
          <p className="md:text-[15px] text-[13px] font-[font4]">
            {description}
          </p>
        </div>

        {/* Picture div setting ------------------------- */}
        <div
          className=" absolute flex justify-center items-center
       rounded-2xl Card_hoverAnimation md:-mt-5 l "
        >
          <img
            src={image}
            alt="wwe"
            className="rounded-2xl w-[95%] md:w-[90%] lg:w-[100%]
                md:h-[550px] min-h-[370px] min-w-[260px] 
               lg:h-[400px] CardImage_hoverAnimation "
          />
        </div>
      </div>

      {/* Middle div Ends Here */}
    </div>
  );
};

export default Card;
