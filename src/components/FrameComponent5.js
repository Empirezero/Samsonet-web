import Navigation from "./Navigation";

const FrameComponent5 = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start gap-[38px] max-w-full text-left text-5xl text-gray-200 font-lato mq1350:gap-[19px]">
      <div className="self-stretch h-[65px] bg-gray-500 box-border flex flex-row items-center justify-center pt-2 px-2 pb-[9px] relative max-w-full border-[3px] border-solid border-black">
        <div className="h-[65px] w-[1446px] relative bg-gray-500 box-border hidden max-w-full z-[0] border-[3px] border-solid border-black" />
        <a
          className="h-[42px] w-[460px] absolute my-0 mx-[!important] top-[8px] left-[490px] text-[inherit] inline-block [text-decoration:none] z-[1] mq800:text-lgi"
          href="https://www.samsonite.in/shipping-and-delivery.html"
          target="_blank"
        >{`Free shipping on all orders *T&C apply`}</a>
      </div>
      <header className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full text-left text-5xl text-black font-lato">
        <div className="self-stretch flex flex-col items-end justify-start gap-[30px] top-[0] z-[99] sticky max-w-full">
          <div className="w-[914px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[746px] flex flex-row items-start justify-between gap-[20px] max-w-full">
              <img
                className="h-[37px] w-[220px] relative object-cover z-[1]"
                loading="eager"
                alt=""
                src="/image-1@2x.png"
              />
              <div className="w-[225px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                  <img
                    className="h-10 w-10 relative overflow-hidden shrink-0 min-h-[40px] z-[1]"
                    loading="eager"
                    alt=""
                    src="/miuser.svg"
                  />
                  <img
                    className="h-10 w-10 relative overflow-hidden shrink-0 min-h-[40px] z-[1]"
                    loading="eager"
                    alt=""
                    src="/carbonlocation.svg"
                  />
                  <img
                    className="h-10 w-10 relative overflow-hidden shrink-0 min-h-[40px] z-[1]"
                    loading="eager"
                    alt=""
                    src="/iconamoonsearchlight.svg"
                  />
                  <div className="h-10 w-[42px] relative">
                    <img
                      className="absolute top-[0px] left-[0px] w-10 h-10 overflow-hidden z-[1]"
                      alt=""
                      src="/bytesizecart.svg"
                    />
                    <div className="absolute top-[0px] left-[26px] rounded-[50%] bg-darkslateblue w-4 h-4 z-[2]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Navigation
            carbonlocation="/carbonlocation.svg"
            navigationTop="unset"
            navigationPosition="unset"
          />
        </div>
        <div className="flex flex-row items-start justify-start py-0 px-[55px] box-border max-w-full mq1350:pl-[27px] mq1350:pr-[27px] mq1350:box-border">
          <div className="h-[29px] w-[526px] relative font-light inline-block">{`HOME > SHOP > LUGGAGE > SBL RICHMOND II`}</div>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent5;
