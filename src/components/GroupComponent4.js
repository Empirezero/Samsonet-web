const GroupComponent4 = () => {
  return (
    <section className="self-stretch bg-gainsboro-100 flex flex-col items-center justify-start pt-[29px] pb-[19px] pr-[63px] pl-5 box-border gap-[28px] max-w-full text-left text-21xl text-black font-radio-canada mq800:pr-5 mq800:box-border">
      <div className="w-[1439px] h-[209px] relative bg-gainsboro-100 hidden max-w-full" />
      <div className="flex flex-col items-center justify-start">
        <h1 className="m-0 w-[272px] h-[49px] relative text-inherit font-bold font-inherit inline-block z-[1] mq800:text-5xl mq1350:text-13xl">
          NEWSLETTER
        </h1>
        <div className="w-[242px] flex flex-row items-start justify-start py-0 pr-0 pl-1.5 box-border text-10xl">
          <h3 className="m-0 h-[33px] flex-1 relative text-inherit font-normal font-inherit inline-block z-[1] mq800:text-4xl">
            Stay by our side
          </h3>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start py-0 pr-0 pl-2.5">
        <button className="cursor-pointer [border:none] pt-[11px] pb-2.5 pr-[5px] pl-2.5 bg-gray-300 flex flex-row items-center justify-center whitespace-nowrap z-[1] hover:bg-darkslategray">
          <div className="h-[51px] w-[194px] relative bg-gray-300 hidden" />
          <b className="h-[30px] w-[179px] relative text-xl inline-block font-radio-canada text-white text-left z-[1]">
            SUBSCRIBE NOW
          </b>
        </button>
      </div>
    </section>
  );
};

export default GroupComponent4;
