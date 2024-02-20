const LogoContainer = () => {
  return (
    <section className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[30px] box-border gap-[28px] max-w-full text-left text-5xl text-gray-200 font-lato">
      <div className="self-stretch h-[65px] bg-gray-500 box-border flex flex-row items-center justify-center pt-2 px-2 pb-[9px] relative max-w-full border-[3px] border-solid border-black">
        <div className="h-[65px] w-[1446px] relative bg-gray-500 box-border hidden max-w-full z-[0] border-[3px] border-solid border-black" />
        <a
          className="h-[42px] w-[460px] absolute my-0 mx-[!important] top-[8px] left-[490px] text-[inherit] inline-block [text-decoration:none] z-[1] mq800:text-lgi"
          href="https://www.samsonite.in/shipping-and-delivery.html"
          target="_blank"
        >{`Free shipping on all orders *T&C apply`}</a>
      </div>
      <div className="w-[914px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-xs text-white">
        <div className="w-[746px] flex flex-row items-center justify-between gap-[20px] max-w-full mq1350:flex-wrap mq1350:justify-center">
          <div className="w-[220px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
            <img
              className="self-stretch h-[37px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
              loading="eager"
              alt=""
              src="/image-1@2x.png"
            />
          </div>
          <div className="flex flex-row items-end justify-start gap-[21px]">
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
            <div className="flex flex-col items-end justify-start">
              <div className="flex flex-row items-start justify-start py-0 px-1">
                <div className="h-[13.8px] w-[7px] relative inline-block z-[1]">
                  0
                </div>
              </div>
              <div className="w-[42px] h-10 relative">
                <img
                  className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden z-[1]"
                  loading="eager"
                  alt=""
                  src="/bytesizecart1.svg"
                />
                <div className="absolute top-[0px] left-[26px] rounded-[50%] bg-darkslateblue w-4 h-4 z-[2]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoContainer;
