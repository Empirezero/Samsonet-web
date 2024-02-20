const FrameComponent4 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-xl text-black font-lato">
      <div className="h-[84.4px] w-[7px] absolute my-0 mx-[!important] right-[88px] bottom-[23.7px] text-xs text-white inline-block">
        0
      </div>
      <div className="flex-1 flex flex-row items-start justify-between pt-[158px] pb-[15px] pr-[152px] pl-[102px] box-border bg-cover bg-no-repeat bg-[top] gap-[20px] max-w-full z-[1] mq800:pl-5 mq800:pr-5 mq800:box-border mq1350:flex-wrap mq1350:pl-[51px] mq1350:pr-[76px] mq1350:box-border">
        <img
          className="h-[245px] w-[1440px] relative object-cover hidden max-w-full"
          alt=""
          src="/samsonitecoverfallbackfinal-1@2x.png"
        />
        <div className="h-6 w-[149px] relative font-medium inline-block z-[3] mq800:text-base">
          PRODUCT INFO
        </div>
        <div className="flex flex-col items-start justify-start gap-[5px]">
          <div className="w-[195px] h-6 relative inline-block z-[3] mq800:text-base">
            Samsonite Black Label
          </div>
          <h2 className="m-0 w-[302px] h-[43px] relative text-17xl font-semibold font-inherit inline-block z-[3] mq800:text-3xl mq1350:text-10xl">
            SBL RICHMOND II
          </h2>
        </div>
      </div>
      <div className="h-6 w-[145px] absolute my-0 mx-[!important] right-[309px] bottom-[-14px] font-semibold inline-block z-[3] mq800:text-base">
        SPINNER 55/20
      </div>
    </div>
  );
};

export default FrameComponent4;
