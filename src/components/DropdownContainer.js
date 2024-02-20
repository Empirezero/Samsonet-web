import Item1 from "./Item1";
import Item from "./Item";

const DropdownContainer = () => {
  return (
    <section className="w-[1422px] flex flex-row items-start justify-start pt-0 pb-[245px] pr-[31px] pl-5 box-border max-w-full text-left text-5xl text-black font-radio-canada mq800:pb-[67px] mq800:box-border mq450:pb-[103px] mq450:box-border mq1150:pb-[159px] mq1150:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[29px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq800:flex-wrap">
          <b className="h-7 w-[71px] relative inline-block mq800:text-lgi">
            SORT
          </b>
          <b className="h-7 w-[154px] relative inline-block shrink-0 mq800:text-lgi">
            FILTER BY
          </b>
        </div>
        <div className="w-[1363px] h-[1514px] overflow-x-auto shrink-0 flex flex-row flex-wrap items-start justify-start gap-[31.27px] max-w-full text-xl mq1350:gap-[16px]">
          <Item1
            image2="/image-2-5@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-12.svg"
            selectionDisabled1="/selectiondisabled-13.svg"
            propPadding="0rem 0rem 0rem 1rem"
            propGap="0rem 0.75rem"
            propWidth="9.556rem"
          />
          <Item
            image2="/image-2-6@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-14.svg"
            selectionDisabled1="/selectiondisabled-15.svg"
          />
          <Item1
            image2="/image-2-7@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-14.svg"
            selectionDisabled1="/selectiondisabled-15.svg"
            propPadding="0px 1px 0px 15px"
            propPadding1="0px 0px 0px 2px"
            propGap="10px"
            propPadding2="0px 1px 0px 0px"
            propWidth="151px"
          />
          <Item1
            image2="/image-2-8@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-14.svg"
            selectionDisabled1="/selectiondisabled-15.svg"
            propPadding="0px 0px 0px 16px"
            propPadding1="0px 0px 0px 1px"
            propGap="11px"
            propPadding2="unset"
            propWidth="151px"
          />
          <Item1
            image2="/image-2-5@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-12.svg"
            selectionDisabled1="/selectiondisabled-13.svg"
            propPadding="0px 0px 0px 16px"
            propPadding1="unset"
            propGap="12px"
            propPadding2="unset"
            propWidth="152.9px"
          />
          <Item
            image2="/image-2-6@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-14.svg"
            selectionDisabled1="/selectiondisabled-15.svg"
          />
          <Item1
            image2="/image-2-7@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-14.svg"
            selectionDisabled1="/selectiondisabled-15.svg"
            propPadding="0px 1px 0px 15px"
            propPadding1="0px 0px 0px 2px"
            propGap="10px"
            propPadding2="0px 1px 0px 0px"
            propWidth="151px"
          />
          <Item1
            image2="/image-2-8@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-14.svg"
            selectionDisabled1="/selectiondisabled-15.svg"
            propPadding="0px 0px 0px 16px"
            propPadding1="0px 0px 0px 1px"
            propGap="11px"
            propPadding2="unset"
            propWidth="151px"
          />
          <Item1
            image2="/image-2-5@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-12.svg"
            selectionDisabled1="/selectiondisabled-13.svg"
            propPadding="0px 0px 0px 16px"
            propPadding1="unset"
            propGap="12px"
            propPadding2="unset"
            propWidth="152.9px"
          />
          <Item
            image2="/image-2-6@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-14.svg"
            selectionDisabled1="/selectiondisabled-15.svg"
          />
          <Item1
            image2="/image-2-7@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-14.svg"
            selectionDisabled1="/selectiondisabled-15.svg"
            propPadding="0px 1px 0px 15px"
            propPadding1="0px 0px 0px 2px"
            propGap="10px"
            propPadding2="0px 1px 0px 0px"
            propWidth="151px"
          />
          <Item1
            image2="/image-2-8@2x.png"
            selection="/selection-6.svg"
            selectionDisabled="/selectiondisabled-14.svg"
            selectionDisabled1="/selectiondisabled-15.svg"
            propPadding="0px 0px 0px 16px"
            propPadding1="0px 0px 0px 1px"
            propGap="11px"
            propPadding2="unset"
            propWidth="151px"
          />
        </div>
      </div>
    </section>
  );
};

export default DropdownContainer;
