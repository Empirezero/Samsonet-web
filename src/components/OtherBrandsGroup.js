const OtherBrandsGroup = () => {
  return (
    <div className="self-stretch h-[413px] relative max-w-full text-left text-13xl text-gray-1000 font-lato mq1350:h-auto mq1350:min-h-[413]">
      <div className="absolute top-[0px] left-[47px] w-[681px] flex flex-row items-end justify-start gap-[38px] max-w-full mq1350:flex-wrap">
        <div className="h-[230px] flex-1 relative min-w-[291px] max-w-full">
          <img
            className="absolute top-[38px] left-[256px] w-48 h-48 object-cover z-[1]"
            loading="eager"
            alt=""
            src="/americantouristerlogo-1@2x.png"
          />
          <h2 className="m-0 absolute top-[0px] left-[0px] text-inherit [text-decoration:underline] font-bold font-inherit inline-block w-[278.2px] z-[1] mq800:text-lgi mq1350:text-7xl">
            Our other brands:
          </h2>
        </div>
        <div className="h-[163px] w-[195px] flex flex-col items-start justify-start pt-0 px-0 pb-[29px] box-border min-w-[195px] mq1350:flex-1">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1] mq1350:self-stretch mq1350:w-auto"
            loading="eager"
            alt=""
            src="/hign-sierra-1@2x.png"
          />
        </div>
      </div>
      <img
        className="absolute top-[256px] left-[0px] w-[1390px] h-[60px] z-[1]"
        alt=""
        src="/bottom.svg"
      />
      <div className="absolute top-[330px] left-[23px] text-xl text-white inline-block w-[1151.8px] z-[1] mq800:text-base">
        {`Copyright © 2024 Samsonite. All rights reserved. Visit our `}
        <a
          className="text-[inherit]"
          href="https://www.samsonite.com/investors/home.do"
          target="_blank"
        >
          <span className="[text-decoration:underline]">corporate site</span>
        </a>{" "}
        for more information. Samsonite and the Samsonite logo are registered
        trademarks of Samsonite IP Holdings S.àr.l.
      </div>
      <h2 className="m-0 absolute top-[370px] left-[1315px] text-17xl font-bold font-inherit text-gray-1100 z-[1] mq800:text-3xl mq1350:text-10xl">
        Kenya
      </h2>
    </div>
  );
};

export default OtherBrandsGroup;
