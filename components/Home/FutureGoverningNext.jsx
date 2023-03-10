import React from "react";
import Image from "next/image";
// import image
import s1 from "../../img/slider/slider_4.jpg";

function FutureGoverningNext() {
  return (
    <section className="FutureGoverningNext">
      <div className=" py-[6rem] grid   items-center  justify-items-start grid-cols-1 md:grid-cols-2 ">
        <div className=" py-[4rem] md:py-[1rem] 2xl:pl-[18rem]  px-[2rem] xl:px-0">
          <div className="content">
            <p className=" text-base pb-2 md:pr-[12rem] ">
              The Governing Structure of the Kingdom will be a Constitutional
              Monarchy, with a Monarch elected based on merits. The first
              monarch will be Queen Mother Dr. Delois Blakely, a well known and
              internationally respected humanitarian as well as a spiritual
              leader who for over 50 years served as United Nations Goodwill
              Ambassador. Queen Mother has been recently awarded a Lifetime
              Achievement Award by the President of the United States Mr. Joe
              Biden. The Kingdom will also have a Parliament, with all elected
              members voted in by the citizens.
            </p>
          </div>
        </div>

        <div
          className={` 
             slider  py-4
           pl-[2rem]
           pr-[4rem]
           xl:pr-[8rem]
                  
        `}
        >
          <Image src={s1} height={650} width={500} alt="slider image" />
        </div>
      </div>
    </section>
  );
}

export default FutureGoverningNext;
