import React from "react";
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
  const { name, photo, chef, quantity } = coffee;
  return (
    <div className=" p-5 bg-[#F5F4F1] flex justify-between rounded-md">
      <div>
        <figure>
          <img className="w-28" src={photo} alt="Movie" />
        </figure>
      </div>

      <div className="grid items-center">
        <p className="text-sm">
          Name: <span className="text-xs  ">{name}</span>
        </p>
        <p className="text-sm">chef: {chef}</p>
        <p className="text-sm">Quantity: {quantity}</p>
      </div>

      <div className="flex justify-end flex-col gap-2">
        <Link className="">
          {" "}
          <FaEye className="w-4 h-4 text-white  bg-[#D2B48C]" />{" "}
        </Link>
        <Link>
          {" "}
          <FaPen className="w-4 h-4 text-slate-50 bg-[#3C393B]" />{" "}
        </Link>
        <Link>
          {" "}
          <MdDelete className="w-4 h-4 text-white bg-[#EA4744]" />
        </Link>
      </div>
    </div>
  );
};

export default CoffeeCard;
