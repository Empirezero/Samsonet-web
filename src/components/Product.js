import FrameComponent5 from "./FrameComponent5";
import FrameComponent4 from "./FrameComponent4";
import FrameComponent2 from "./FrameComponent2";
import FrameComponent1 from "./FrameComponent1";
import GroupComponent2 from "./GroupComponent2";

const Product = () => {
  return (
    <div className="w-[1440px] bg-white overflow-hidden flex flex-col items-center justify-start gap-[20px] tracking-[normal]">
      <div className="self-stretch h-[111px] relative bg-white hidden" />
      <FrameComponent5 />
      <div className="w-[1307px] h-[6452px] relative bg-white hidden max-w-full" />
      <section className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[193px] box-border gap-[41px] max-w-full mq800:pb-[34px] mq800:box-border mq1350:gap-[20px] mq450:pb-[53px] mq450:box-border mq1150:pb-[81px] mq1150:box-border">
        <FrameComponent4 />
        <FrameComponent2 />
      </section>
      <div className="w-[576px] flex flex-row items-start justify-start pt-0 px-5 pb-60 box-border max-w-full mq800:pb-[101px] mq800:box-border mq450:pb-[156px] mq450:box-border">
        <img
          className="h-[587px] w-[279px] relative object-cover z-[3]"
          loading="eager"
          alt=""
          src="/prod-col-133763-1041-side-2-1@2x.png"
        />
      </div>
      <div className="w-[800px] flex flex-row items-start justify-start pt-0 px-5 pb-[147px] box-border max-w-full mq1350:pb-24 mq1350:box-border">
        <img
          className="h-[479px] w-[539px] relative object-cover max-w-full z-[3]"
          loading="eager"
          alt=""
          src="/prod-col-133763-1041-interior-2-1@2x.png"
        />
      </div>
      <div className="w-[800px] h-[1366px] flex flex-row items-start justify-start pt-0 px-5 pb-[68px] box-border max-w-full mq1350:pb-[29px] mq1350:box-border mq1150:pb-11 mq1150:box-border">
        <div className="self-stretch w-[547px] flex flex-col items-center justify-start gap-[123px] max-w-full mq800:gap-[31px] mq1350:gap-[61px]">
          <img
            className="self-stretch h-[409px] relative max-w-full overflow-hidden shrink-0 object-cover z-[3]"
            loading="eager"
            alt=""
            src="/material-28-1@2x.png"
          />
          <img
            className="w-[417px] flex-1 relative max-h-full object-cover max-w-full z-[3]"
            loading="eager"
            alt=""
            src="/prod-col-133763-1041-material-2-1@2x.png"
          />
        </div>
      </div>
      <FrameComponent1 />
      <GroupComponent2 />
    </div>
  );
};

export default Product;
