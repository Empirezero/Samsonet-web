const HeaderGroup = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 pb-[35px] pr-0 pl-0.5 box-border max-w-full text-left text-mini text-black font-inter">
      <div className="flex-1 bg-gainsboro-200 box-border flex flex-row items-start justify-start py-0 px-[9px] relative gap-[35px] max-w-full border-b-[1px] border-solid border-gray-600 mq1350:gap-[17px] mq1150:flex-wrap">
        <div className="self-stretch w-[1438px] relative bg-gainsboro-200 box-border hidden max-w-full z-[0] border-b-[1px] border-solid border-gray-600" />
        <div className="w-[669px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full shrink-0">
          <div className="self-stretch flex flex-row items-center justify-start gap-[24px] max-w-full mq1350:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[32px]">
              <img
                className="w-[106px] h-[106px] relative overflow-hidden shrink-0 z-[1]"
                loading="eager"
                alt=""
                src="/mdistopwatchoutline.svg"
              />
              <img
                className="w-[106px] h-[106px] relative overflow-hidden shrink-0 z-[1]"
                loading="eager"
                alt=""
                src="/mdiencryptionsecureoutline.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[350px] max-w-full mq800:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[55px] max-w-full mq1350:gap-[27px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full">
                  <div className="w-[470px] h-[18px] relative font-semibold inline-block max-w-full box-border pr-5 z-[1]">
                    FAST AND STANDARD DELIVERY FOR ORDERS OVER KES1000
                  </div>
                  <div className="self-stretch h-[34px] relative text-sm font-medium inline-block z-[1]">
                    Samsonite uses only the best courier services and guarantees
                    the safe delivery of all your online orders.
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[21px]">
                  <div className="w-[157px] h-[18px] relative font-semibold inline-block box-border pr-5 z-[1]">
                    SECURE PAYMENT
                  </div>
                  <div className="self-stretch h-[34px] relative text-sm font-medium inline-block z-[1]">
                    Secure Socket Layer (SSL) encryption is used for every
                    transaction in order to ensure that your order is secure
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[318px] w-px relative box-border z-[1] border-r-[1px] border-solid border-black mq1150:w-full mq1150:h-px" />
        <div className="w-[637px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border max-w-full shrink-0">
          <div className="self-stretch flex flex-row items-center justify-start gap-[20px] max-w-full mq1350:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[32px]">
              <img
                className="w-[106px] h-[106px] relative overflow-hidden shrink-0 z-[1]"
                loading="eager"
                alt=""
                src="/materialsymbolsquestionexchangerounded.svg"
              />
              <img
                className="w-[106px] h-[106px] relative overflow-hidden shrink-0 z-[1]"
                loading="eager"
                alt=""
                src="/biglobe.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[69px] min-w-[332px] max-w-full mq800:gap-[17px] mq1350:gap-[34px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <div className="w-[165px] h-[18px] relative font-semibold inline-block box-border pr-5 z-[1]">
                  RETURNS ARE FREE
                </div>
                <div className="self-stretch h-[34px] relative text-sm font-medium inline-block z-[1]">
                  Shopping at Samsonite is risk-free. We guarantee your
                  satisfaction by offering free returns.
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[22px] text-sm">
                <div className="w-[261px] h-[17px] relative font-semibold inline-block box-border pr-5 z-[1]">
                  GLOBAL COMMERCIAL WARRANTY
                </div>
                <div className="self-stretch h-[34px] relative font-semibold inline-block z-[1]">
                  Samsonite gurantees worldwide commercial warranty services to
                  ensure your Samsonite luggage can always stay by your side.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px w-[calc(100%_+_1px)] absolute my-0 mx-[!important] top-[150px] right-[-1px] left-[0px] box-border z-[2] border-t-[1px] border-solid border-black" />
      </div>
    </section>
  );
};

export default HeaderGroup;
