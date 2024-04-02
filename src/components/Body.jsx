// eslint-disable-next-line no-unused-vars
import React from "react";
import Foodcard from "./Foodcard";
import Search from "./Search";

const Body = () => {
  return (
    <div>
      <div className="search flex justify-start m-5 items-center   ">
       <Search></Search>
       <button className="filter border rounded-2xl bg-orange-100 w-20 h-10 hover:cursor-pointer ml-20 hover:bg-slate-200" onClick={ () => {
        console.log("clicked here")
       }}>Filter</button>
      </div>
      <div className="foodcontainer flex flex-wrap">
        <Foodcard resName="Bumchak" img="https://imgs.search.brave.com/t-B5YbSq4TkFJD54ajWw3JyHgfowUz1CvekdAm6vvzo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI3/MTY0OTUwMy9waG90/by9jaGVlc2UtbWFz/YWxhLWRvc2EuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWRp/aFlIVXotOUxjMEFJ/dkRnT2FZZXMzRmtw/RG9IQlF1ZGFoOVM1/SDdFeVU9" cousine="Dosa,South Indian
        " rating="5 Star"></Foodcard>
        <Foodcard img="https://imgs.search.brave.com/sA1hTzAqG1A7NjhFq4kPXT_0GAUECFmWk4KAE5Rnqg4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgz/MTM3MzY1L3Bob3Rv/L2FzaWFuLWNob3ct/bWVpbi1ub29kbGVz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1hVmtQS3BEa2lB/TTdDeFRGaW5RQmF4/MGktbm0teWJ6V2lt/ckpSeVBlUGNnPQ" resName="Sai chinese" cousine="Chinese
        " rating="5 Star"></Foodcard>
        <Foodcard img="https://imgs.search.brave.com/J4wllF_pgmkgoYdjvOAI6YE5T1AvcqT-BhbyAa60L1Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbTEu/ZGluZW91dC5jby5p/bi9pbWFnZXMvdXBs/b2Fkcy9yZXN0YXVy/YW50L3NoYXJwZW4v/My91L24vcDM4OTMt/MTU3NjkxODQzMzVk/ZmRkZGExZDA2ZWIu/anBnP3RyPXRyOm4t/bWVkaXVt" resName="Burger singh" cousine="Niku singh,Burger
        " rating="5 Star"></Foodcard>
        <Foodcard img="https://imgs.search.brave.com/L0VSK77qH62kFelj_orv6P95O5J7nQN0benI73NeRaA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTk2/MDU4MzM0L3Bob3Rv/L2luZGlhbi1zYW1v/c2EuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPUNUbW5HbXZX/ZDhnVmdmVEFSeUlL/Z0xTSEh2aDlaUEtC/b3NoSjYtUk1iejg9" resName="kartik" cousine="Samosa,Indian snack
        " rating="4 Star"></Foodcard>
        <Foodcard img="https://imgs.search.brave.com/4NOeVEbp4e0nhisuWztFietZNh1qVlWTeEXS-YzrXVo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzgxLzg4LzEx/LzM2MF9GXzU4MTg4/MTE4MF9vWmN6RnZL/VmJFYUM4QXhMRGJ4/dU81ek0ycDJ6dGl3/Ny5qcGc" resName="wow momo" cousine="Momos,fast food
        " rating="4 Star"></Foodcard>
      </div>
    </div>
  );
};

export default Body;
