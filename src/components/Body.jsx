// eslint-disable-next-line no-unused-vars
import React from "react";
import Foodcard from "./Foodcard";
const Body = () => {
  return (
    <div>
      <div className="search ">
        <input className=" w- h-5 bg-slate-200  " placeholder="search" type="text" />
      </div>
      <div className="foodcontainer flex flex-wrap">
        <Foodcard></Foodcard>
        <Foodcard></Foodcard>
        <Foodcard></Foodcard>
        <Foodcard></Foodcard>
        <Foodcard></Foodcard>
        <Foodcard></Foodcard>
        <Foodcard></Foodcard>
        <Foodcard></Foodcard>
        <Foodcard></Foodcard>
        <Foodcard></Foodcard>
        <Foodcard></Foodcard>
        <Foodcard></Foodcard>
        <Foodcard></Foodcard>
        <Foodcard></Foodcard>
        <Foodcard></Foodcard>
      </div>
    </div>
  );
};

export default Body;
