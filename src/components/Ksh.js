import { Button } from "@mui/material";
import Link from "./Link";

const Ksh = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full text-left text-5xl text-black font-radio-canada">
      <b className="w-[296px] h-7 relative inline-block mq800:text-lgi">
        OUR RECOMENDATIONS
      </b>
      <div className="self-stretch flex flex-row items-start justify-end max-w-full text-xl">
        <div className="flex flex-row items-start justify-start gap-[56px] max-w-full mq1350:gap-[28px] mq450:flex-wrap">
          <Link
            image2="/image-2@2x.png"
            selection="/selection.svg"
            selectionDisabled="/selectiondisabled.svg"
            selectionDisabled1="/selectiondisabled-11.svg"
            propPadding="0.125rem 0rem 0rem"
            propWidth="20.438rem"
          />
          <div className="w-[365px] flex flex-col items-start justify-start max-w-full text-3xl font-lato">
            <div className="self-stretch bg-whitesmoke flex flex-col items-center justify-start pt-[180px] pb-2 pr-[76px] pl-8 box-border gap-[41px] max-w-full mq800:gap-[20px] mq800:pr-5 mq800:box-border mq1350:pt-[117px] mq1350:pb-5 mq1350:box-border">
              <div className="w-[365px] h-[509px] relative bg-whitesmoke hidden max-w-full" />
              <div className="self-stretch flex flex-row items-start justify-end pt-0 px-0 pb-2">
                <img
                  className="h-[143px] w-[213px] relative object-cover z-[1]"
                  loading="eager"
                  alt=""
                  src="/rectangle-6@2x.png"
                />
              </div>
              <div className="w-[111px] flex flex-row items-start justify-end">
                <div className="flex flex-row items-start justify-start gap-[11px]">
                  <img
                    className="h-[15px] w-[15px] relative min-h-[15px] z-[1]"
                    alt=""
                    src="/selection.svg"
                  />
                  <img
                    className="h-[15px] w-[15px] relative min-h-[15px] z-[1]"
                    alt=""
                    src="/selectiondisabled.svg"
                  />
                  <img
                    className="h-[15px] w-[15px] relative min-h-[15px] z-[1]"
                    alt=""
                    src="/selectiondisabled-11.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex flex-col items-start justify-start gap-[4px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="w-[79px] h-[26px] relative font-extrabold inline-block z-[1] mq800:text-lg">
                      BE-HER
                    </div>
                    <div className="w-[129px] h-[22px] relative text-lg text-gray-900 inline-block z-[2] mt-[-1px]">
                      Shoulder bag XS
                    </div>
                  </div>
                  <b className="w-[152px] h-[22px] relative text-lg inline-block text-gray-900 z-[1]">
                    KSH2399 incl. VAT
                  </b>
                </div>
              </div>
            </div>
            <Button className="self-stretch h-[59px] z-[1]" variant="contained">
              Add to Cart
            </Button>
          </div>
          <Link
            image2="/image-2@2x.png"
            selection="/selection.svg"
            selectionDisabled="/selectiondisabled.svg"
            selectionDisabled1="/selectiondisabled-11.svg"
            propPadding="9px 0px 0px"
            propWidth="327px"
          />
        </div>
      </div>
    </div>
  );
};

export default Ksh;
