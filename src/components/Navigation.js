import { useMemo } from "react";

const Navigation = ({ carbonlocation, navigationTop, navigationPosition }) => {
  const navigationStyle = useMemo(() => {
    return {
      top: navigationTop,
      position: navigationPosition,
    };
  }, [navigationTop, navigationPosition]);

  return (
    <div
      className="self-stretch bg-gray-400 flex flex-row items-start justify-start pt-4 pb-[11px] pr-[68px] pl-[55px] box-border gap-[35.43px] top-[0] z-[99] sticky max-w-full text-left text-5xl text-white font-radio-canada mq1350:gap-[18px] mq1350:pl-[27px] mq1350:pr-[34px] mq1350:box-border mq450:hidden"
      style={navigationStyle}
    >
      <img
        className="h-8 w-8 relative overflow-hidden shrink-0 hidden"
        alt=""
        src={carbonlocation}
      />
      <div className="h-[62px] w-[1440px] relative bg-gray-400 hidden max-w-full" />
      <b className="h-8 w-[153px] relative inline-block whitespace-nowrap z-[1]">
        New Arrivals
      </b>
      <div className="w-[141px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
        <b className="w-[100px] h-8 relative inline-block z-[1]">Luggage</b>
      </div>
      <div className="w-[162px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
        <b className="w-[121px] h-8 relative inline-block z-[1]">Backpacks</b>
      </div>
      <div className="w-[108px] flex flex-col items-start justify-start">
        <b className="w-14 h-8 relative inline-block z-[1]">Bags</b>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
        <b className="w-[133px] h-8 relative inline-block z-[1]">Accessories</b>
      </div>
      <div className="w-[116px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border text-gray-100">
        <b className="w-[75px] h-8 relative inline-block z-[1]">Labels</b>
      </div>
      <div className="w-[117px] flex flex-col items-start justify-start text-gray-100">
        <b className="w-[71px] h-8 relative inline-block z-[1]">Offers</b>
      </div>
      <b className="h-8 w-[99px] relative inline-block text-gray-100 z-[1]">
        Discover
      </b>
    </div>
  );
};

export default Navigation;
