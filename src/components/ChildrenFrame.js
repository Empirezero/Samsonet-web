import Home from "./Home";

const ChildrenFrame = () => {
  return (
    <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[9px] box-border gap-[38px] max-w-full text-left text-5xl text-gray-200 font-lato mq800:gap-[19px]">
      <div className="self-stretch h-[65px] bg-gray-500 box-border flex flex-row items-center justify-center pt-2 px-2 pb-[9px] relative max-w-full border-[3px] border-solid border-black">
        <div className="h-[65px] w-[1446px] relative bg-gray-500 box-border hidden max-w-full z-[0] border-[3px] border-solid border-black" />
        <a
          className="h-[42px] w-[460px] absolute my-0 mx-[!important] top-[8px] left-[490px] text-[inherit] inline-block [text-decoration:none] z-[1] mq450:text-lgi"
          href="https://www.samsonite.in/shipping-and-delivery.html"
          target="_blank"
        >{`Free shipping on all orders *T&C apply`}</a>
      </div>
      <div className="w-[914px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xs text-white">
        <div className="w-[746px] flex flex-row items-start justify-between gap-[20px] max-w-full mq800:flex-wrap mq800:justify-center">
          <img
            className="h-[37px] w-[220px] relative object-cover z-[1]"
            loading="eager"
            alt=""
            src="/image-1@2x.png"
          />
          <div className="w-[225px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <img
                className="h-10 w-10 relative overflow-hidden shrink-0 z-[1]"
                loading="eager"
                alt=""
                src="/miuser.svg"
              />
              <img
                className="h-10 w-10 relative overflow-hidden shrink-0 z-[1]"
                loading="eager"
                alt=""
                src="/carbonlocation.svg"
              />
              <img
                className="h-10 w-10 relative overflow-hidden shrink-0 z-[1]"
                loading="eager"
                alt=""
                src="/iconamoonsearchlight.svg"
              />
              <div className="flex flex-col items-end justify-start py-0 pr-0 pl-[26px] relative gap-[3px] z-[1]">
                <img
                  className="w-10 h-10 absolute my-0 mx-[!important] top-[0px] left-[0px] overflow-hidden shrink-0"
                  loading="eager"
                  alt=""
                  src="/bytesizecart.svg"
                />
                <div className="w-4 h-4 relative rounded-[50%] bg-darkslateblue z-[1]" />
                <div className="flex flex-row items-start justify-start py-0 px-1">
                  <div className="h-[22px] w-[7px] relative inline-block z-[1]">
                    0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildrenFrame;
