import React from "react";
import googleLogo from "../assets/logos/google.png";
import youtubeLogo from "../assets/logos/youtube.png";
import linkedinLogo from "../assets/logos/linkedin.png";
import { OpenLinkSVG } from "../assets/icons";

const Card = ({ data, type }) => {
    return (
        <div className="p-4 min-h-40 w-64 bg-[#eff3ee] rounded-2xl hover:bg-[#e2e2e3] cursor-pointer">
            
            {type !== "google" &&
                <div className="bg-black/10 h-36 w-full rounded-2xl flex justify-center items-center">
                    <img src={data.image} alt="image" className="h-full w-full object-cover rounded-2xl" />
                </div>
            }

            <div className="flex flex-col gap-1 my-2">
                <h1 className="text-lg font-semibold line-clamp-2">{data.title}</h1>
                <p className="text-sm text-gray-500 line-clamp-2">{data.snippet}</p>
            </div>

            <div className="flex justify-between items-center">
                <div className="w-16 ">
                    <img
                        src={type === "google" ? googleLogo : type === "youtube" ? youtubeLogo : linkedinLogo}
                        alt="logo"
                    />
                </div>

                <a
                    href={type === "youtube" ? `https://www.youtube.com/watch?v=${data.videoId}` : data.link}
                    target="_blank"
                    className="text-blue-500 mt-1"
                >
                    <div className="px-4 py-1 flex justify-center items-center gap-2 hover:bg-blue-500/10  rounded-full">

                        <p className="font-semibold text-blue-500 ">link </p>
                        <OpenLinkSVG className={ "mt-0.5 text-blue-500"} />
                    </div>
                </a>
            </div>
      </div>
  )
};

export default Card;
