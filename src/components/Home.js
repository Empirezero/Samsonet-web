import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import LogoContainer from "./LogoContainer";
import Navigation from "./Navigation";
import Ksh from "./Ksh";
import GroupComponent5 from "./GroupComponent5";
import HeaderGroup from "./HeaderGroup";
import DropdownContainer from "./DropdownContainer";
import GroupComponent4 from "./GroupComponent4";
import FrameComponent6 from "./FrameComponent6";
import OtherBrandsGroup from "./OtherBrandsGroup";

const Home = () => {
  return (
    <div className="w-[1440px] bg-white overflow-hidden flex flex-col items-center justify-start tracking-[normal]">
      <header className="self-stretch h-[111px] relative bg-white hidden" />
      <LogoContainer />
      <Navigation
        carbonlocation="/carbonlocation.svg"
        navigationTop="0"
        navigationPosition="sticky"
      />
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[90px] box-border max-w-full text-left text-[27px] text-white font-lato mq800:pb-[38px] mq800:box-border mq450:pb-[58px] mq450:box-border">
        <div className="flex-1 flex flex-col items-start justify-start pt-[252px] px-24 pb-[253px] box-border gap-[18px] bg-[url('/public/pic1-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq800:py-[107px] mq800:px-5 mq800:box-border mq1350:py-[164px] mq1350:px-12 mq1350:box-border">
          <img
            className="w-[1440.2px] h-[761.3px] relative object-cover hidden max-w-full"
            alt=""
            src="/pic1-1@2x.png"
          />
          <h3 className="m-0 w-[529.2px] h-[136.9px] relative text-inherit inline-block shrink-0 max-w-full z-[1] font-inherit mq800:text-3xl">
            <p className="m-0 font-extrabold">{`STYLE AND PERFORMANCE `}</p>
            <p className="m-0 font-medium">{`REACH NEW HEIGHTS `}</p>
            <p className="m-0 font-medium">THANKS TO LITE-BOX ALU</p>
          </h3>
          <TextField
            className="[border:none] bg-[transparent] w-[424px] h-[103px] font-lato font-extrabold text-3xl text-black z-[1]"
            sx={{ width: 424 }}
            variant="outlined"
          />
        </div>
      </section>
      <section className="w-[1382px] flex flex-row items-start justify-start pt-0 px-5 pb-[133px] box-border max-w-full mq1350:pb-14 mq1350:box-border mq1150:pb-[86px] mq1150:box-border">
        <div className="w-[1279px] flex flex-col items-end justify-start gap-[66px] max-w-full mq800:gap-[16px] mq1350:gap-[33px]">
          <Ksh />
          <GroupComponent5 />
        </div>
      </section>
      <HeaderGroup />
      <DropdownContainer />
      <GroupComponent4 />
      <section className="self-stretch flex flex-row items-start justify-end py-0 pr-px pl-0 box-border max-w-full">
        <div className="flex-1 flex flex-col items-end justify-start pt-[70px] pb-0 pr-0 pl-[25px] box-border gap-[48px] bg-[url('/public/sand-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[2] mq800:pt-[29px] mq800:box-border mq1350:gap-[24px] mq450:pt-[45px] mq450:box-border">
          <img
            className="self-stretch h-[827px] relative max-w-full overflow-hidden max-h-full object-cover hidden"
            alt=""
            src="/sand-1@2x.png"
          />
          <FrameComponent6 />
          <OtherBrandsGroup />
        </div>
      </section>
    </div>
  );
};

export default Home;
