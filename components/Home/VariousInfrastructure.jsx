import React from "react";
import Image from "next/image";
// import image
import s1 from "../../img/slider/slider_3.jpg";

function VariousInfrastructure() {
  return (
    <section className="VariousInfrastructure">
      <div className=" py-[6rem] grid  justify-items-end grid-cols-1 md:grid-cols-2 xl:gap-x-[3rem]">
        <div
          className={` 
         slider  py-4
         mr-[2rem]
       pl-[2rem]
       pr-[4rem]
       xl:pr-[8rem]
    
    `}
        >
          <Image src={s1} height={650} width={500} alt="slider image" />
        </div>

        <div className=" py-[4rem] md:py-[1rem]   px-[2rem] xl:px-0">
          <div className="content">
            <h4 className=" font-bold text-[2.5rem] md:text-[3rem]  leading-tight 2xl:pr-[20rem] px-[2rem] py-[4rem]">
              Various infrastructure related projects are also on the way, such
              as:
            </h4>
            <p className=" text-base pb-2 px-2  2xl:pr-[20rem]">
              housing, schools, airport, hospitals, communication, roads as well
              as water related projects.
              <b className="font-bold">
                Plans are in place to introduce mass transit into the region and
                the Kingdom of Kush Airline.
              </b>{" "}
              The future Kingdom plans to invest much more in the region,
              including billions of dollars in its neighboring countries Sudan
              and Egypt, to further the development of construction,
              manufacturing, and processing industries. All this will lay the
              necessary foundation for consumer-focused services and   <b className="font-bold">
                create hundreds of thousands of jobs for the people of Sudan,
                Egypt and other countries in Africa.
              </b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VariousInfrastructure;
