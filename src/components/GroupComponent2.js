import FrameComponent from "./FrameComponent";

const GroupComponent2 = () => {
  return (
    <section className="self-stretch flex flex-col items-end justify-start pt-[70px] px-0 pb-0 box-border gap-[26px] bg-[url('/public/sand-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full text-left text-11xl text-white font-lato mq800:pt-[29px] mq800:box-border mq450:pt-[45px] mq450:box-border">
      <img
        className="self-stretch h-[827px] relative max-w-full overflow-hidden max-h-full object-cover hidden"
        alt=""
        src="/sand-1@2x.png"
      />
      <div className="w-[1388px] flex flex-row items-start justify-start pt-0 pb-[22px] pr-[25px] pl-5 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between gap-[20px] max-w-full mq1150:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-[20px]">
            <h3 className="m-0 w-[214.1px] h-9 relative text-inherit font-extrabold font-inherit inline-block z-[1] mq800:text-lg mq1350:text-5xl">
              Support / FAQS
            </h3>
            <div className="flex flex-row items-start justify-end py-0 pr-0 pl-10 text-gray-1000">
              <h3 className="m-0 h-[189px] w-[278.2px] relative text-inherit font-medium font-inherit inline-block shrink-0 z-[1] mq800:text-lg mq1350:text-5xl">
                <p className="[margin-block-start:0] [margin-block-end:15px]">{`Delivery & Shipping`}</p>
                <p className="[margin-block-start:0] [margin-block-end:15px]">{`Returns & Exchanges`}</p>
                <p className="[margin-block-start:0] [margin-block-end:15px]">
                  Warranty
                </p>
                <p className="m-0">Contact Us</p>
              </h3>
            </div>
          </div>
          <div className="w-[502px] flex flex-col items-start justify-start py-0 pr-9 pl-0 box-border gap-[20px] max-w-full">
            <h3 className="m-0 w-[188.1px] h-9 relative text-inherit font-extrabold font-inherit inline-block z-[1] mq800:text-lg mq1350:text-5xl">
              Our Company
            </h3>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-8 box-border max-w-full text-gray-1000">
              <h3 className="m-0 h-60 flex-1 relative text-inherit font-medium font-inherit inline-block max-w-full z-[1] mq800:text-lg mq1350:text-5xl">
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
              </h3>
            </div>
          </div>
          <div className="w-[281px] flex flex-col items-start justify-start gap-[14px]">
            <h3 className="m-0 w-[113px] h-9 relative text-inherit font-extrabold font-inherit inline-block z-[1] mq800:text-lg mq1350:text-5xl">
              Account
            </h3>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-[15px] text-gray-1000">
              <h3 className="m-0 h-[174px] flex-1 relative text-inherit font-medium font-inherit inline-block z-[1] mq800:text-lg mq1350:text-5xl">
                <p className="[margin-block-start:0] [margin-block-end:15px]">
                  Track Order
                </p>
                <p className="[margin-block-start:0] [margin-block-end:15px]">
                  Sign In
                </p>
                <p className="m-0">Samsonite Loyalty Program</p>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[72px] box-border max-w-full text-13xl text-gray-1000 mq450:pl-9 mq450:pr-9 mq450:box-border">
        <div className="w-[681px] flex flex-row items-end justify-start gap-[38px] max-w-full mq1350:flex-wrap mq1350:gap-[19px]">
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
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[14px] max-w-full text-17xl text-gray-1100">
        <img
          className="w-[1390px] h-[60px] relative max-w-full z-[1]"
          loading="eager"
          alt=""
          src="/bottom.svg"
        />
        <FrameComponent />
      </div>
    </section>
  );
};

export default GroupComponent2;
