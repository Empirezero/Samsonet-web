import Link from "./Link";

const GroupComponent5 = () => {
  return (
    <div className="w-[1131px] overflow-x-auto flex flex-row items-end justify-start gap-[68px] max-w-full text-left text-xl text-black font-radio-canada mq1350:gap-[17px] mq1150:gap-[34px]">
      <Link
        image2="/image-2@2x.png"
        selection="/selection.svg"
        selectionDisabled="/selectiondisabled.svg"
        selectionDisabled1="/selectiondisabled-11.svg"
        propPadding="0px 0px 7px"
        propWidth="327px"
      />
      <Link
        image2="/image-2@2x.png"
        selection="/selection.svg"
        selectionDisabled="/selectiondisabled.svg"
        selectionDisabled1="/selectiondisabled-11.svg"
        propPadding="0px 14px 0px 0px"
        propWidth="341px"
      />
      <div className="w-[327px] bg-gainsboro-300 shrink-0 flex flex-col items-center justify-start pt-[7px] pb-[25px] pr-[45px] pl-7 box-border gap-[11px]">
        <div className="w-[327px] h-[500px] relative bg-gainsboro-300 hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-4">
          <img
            className="h-[358px] flex-1 relative rounded-3xs max-w-full overflow-hidden object-cover z-[1]"
            alt=""
            src="/image-2@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex flex-col items-end justify-start gap-[5px]">
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
            <div className="flex flex-row items-start justify-start py-0 pr-[39px] pl-0">
              <div className="flex flex-col items-start justify-start">
                <b className="w-[120px] h-6 relative inline-block whitespace-nowrap z-[1] mq800:text-base">
                  MAJOR-LITE
                </b>
                <div className="w-[105px] h-[19px] relative text-base inline-block z-[1]">
                  Spinner 69cm
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start">
          <b className="h-6 w-[105px] relative inline-block z-[1] mq800:text-base">
            Ksh 61999
          </b>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent5;
