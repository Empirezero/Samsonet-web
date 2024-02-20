import FrameComponent from "./FrameComponent";

const GroupComponent = () => {
  return (
    <section className="self-stretch flex flex-col items-end justify-start pt-[70px] pb-0 pr-0 pl-[25px] box-border gap-[48px] bg-[url('/public/sand-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full shrink-0 text-left text-11xl text-white font-lato mq800:gap-[24px] mq450:pt-[29px] mq450:box-border mq1150:pt-[45px] mq1150:box-border">
      <img
        className="self-stretch h-[827px] relative max-w-full overflow-hidden max-h-full object-cover hidden"
        alt=""
        src="/sand-1@2x.png"
      />
      <div className="w-[1393px] flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full mq1350:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[20px]">
            <div className="w-[214.1px] h-9 relative font-extrabold inline-block z-[1] mq800:text-5xl mq450:text-lg">
              Support / FAQS
            </div>
            <div className="flex flex-row items-start justify-end py-0 pr-0 pl-10 text-gray-1000">
              <div className="h-[189px] w-[278.2px] relative font-medium inline-block shrink-0 z-[1] mq800:text-5xl mq450:text-lg">
                <p className="[margin-block-start:0] [margin-block-end:15px]">{`Delivery & Shipping`}</p>
                <p className="[margin-block-start:0] [margin-block-end:15px]">{`Returns & Exchanges`}</p>
                <p className="[margin-block-start:0] [margin-block-end:15px]">
                  Warranty
                </p>
                <p className="m-0">Contact Us</p>
              </div>
            </div>
          </div>
          <div className="w-[502px] flex flex-col items-start justify-start py-0 pr-9 pl-0 box-border gap-[20px] max-w-full">
            <div className="w-[188.1px] h-9 relative font-extrabold inline-block z-[1] mq800:text-5xl mq450:text-lg">
              Our Company
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-8 box-border max-w-full text-gray-1000">
              <div className="h-60 flex-1 relative font-medium inline-block max-w-full z-[1] mq800:text-5xl mq450:text-lg">
                <p className="[margin-block-start:0] [margin-block-end:15px]">
                  About Samsonite
                </p>
                <p className="[margin-block-start:0] [margin-block-end:15px]">
                  Careers
                </p>
                <p className="[margin-block-start:0] [margin-block-end:15px]">
                  Investor Relations
                </p>
                <p className="[margin-block-start:0] [margin-block-end:15px]">
                  Store and Service Centre Locator
                </p>
                <p className="m-0">Sustainability</p>
              </div>
            </div>
          </div>
          <div className="w-[281px] flex flex-col items-start justify-start gap-[14px]">
            <div className="w-[113px] h-9 relative font-extrabold inline-block z-[1] mq800:text-5xl mq450:text-lg">
              Account
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-[15px] text-gray-1000">
              <div className="h-[174px] flex-1 relative font-medium inline-block z-[1] mq800:text-5xl mq450:text-lg">
                <p className="[margin-block-start:0] [margin-block-end:15px]">
                  Track Order
                </p>
                <p className="[margin-block-start:0] [margin-block-end:15px]">
                  Sign In
                </p>
                <p className="m-0">Samsonite Loyalty Program</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[14px] max-w-full text-13xl text-gray-1000">
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[26px] max-w-full">
          <div className="w-[775px] flex flex-row items-start justify-start py-0 px-[47px] box-border max-w-full mq800:pl-[23px] mq800:pr-[23px] mq800:box-border">
            <div className="flex-1 flex flex-row items-end justify-start gap-[38px] max-w-full mq800:flex-wrap mq800:gap-[19px]">
              <div className="h-[230px] flex-1 relative min-w-[291px] max-w-full">
                <img
                  className="absolute top-[38px] left-[256px] w-48 h-48 object-cover z-[1]"
                  loading="eager"
                  alt=""
                  src="/americantouristerlogo-1@2x.png"
                />
                <b className="absolute top-[0px] left-[0px] [text-decoration:underline] inline-block w-[278.2px] z-[1] mq800:text-7xl mq450:text-lgi">
                  Our other brands:
                </b>
              </div>
              <div className="h-[163px] w-[195px] flex flex-col items-start justify-start pt-0 px-0 pb-[29px] box-border min-w-[195px] mq800:flex-1">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1] mq800:self-stretch mq800:w-auto"
                  loading="eager"
                  alt=""
                  src="/hign-sierra-1@2x.png"
                />
              </div>
            </div>
          </div>
          <img
            className="self-stretch h-[60px] relative max-w-full overflow-hidden max-h-full z-[1]"
            loading="eager"
            alt=""
            src="/bottom.svg"
          />
        </div>
        <FrameComponent propPadding="0px 0px 0px" />
      </div>
    </section>
  );
};

export default GroupComponent;
