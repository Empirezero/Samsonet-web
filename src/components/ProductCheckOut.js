import { Button } from "@mui/material";
import ChildrenFrame from "./ChildrenFrame";
import Navigation from "./Navigation";
import GroupComponent1 from "./GroupComponent1";
import GroupComponent from "./GroupComponent";

const ProductCheckOut = () => {
  return (
    <div className="w-[1440px] bg-white overflow-hidden flex flex-col items-start justify-start gap-[90px] tracking-[normal] mq800:gap-[45px] mq450:gap-[22px]">
      <header className="self-stretch h-[111px] relative bg-white hidden" />
      <section className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full shrink-0 text-left text-5xl text-black font-lato">
        <ChildrenFrame />
        <Navigation
          carbonlocation="/carbonlocation.svg"
          navigationTop="0"
          navigationPosition="sticky"
        />
        <div className="flex flex-row items-start justify-start py-0 px-[55px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="h-[29px] w-[250px] relative font-light inline-block mq450:text-lgi">{`HOME > SHOP > CART`}</div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start max-w-full text-17xl">
          <img
            className="self-stretch h-[245px] relative max-w-full overflow-hidden max-h-full object-cover"
            loading="eager"
            alt=""
            src="/samsonitecoverfallbackfinal-1@2x.png"
          />
          <div className="w-[1307px] rounded-3xs bg-white box-border flex flex-col items-center justify-start pt-[35px] pb-[38px] pr-[54px] pl-9 gap-[34px] max-w-full z-[1] mt-[-122px] border-[1px] border-solid border-black mq800:gap-[17px] mq800:pb-5 mq800:box-border mq1350:pr-[27px] mq1350:pb-[25px] mq1350:box-border mq1350:w-[calc(100%_-_40px)]">
            <div className="w-[1307px] h-[1237px] relative rounded-3xs bg-white box-border hidden max-w-full border-[1px] border-solid border-black" />
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[17px]">
              <h3 className="m-0 h-[43px] w-[94px] relative text-inherit font-semibold font-inherit inline-block z-[2] mq800:text-10xl mq450:text-3xl">
                CART
              </h3>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[43px] max-w-full text-xl mq800:gap-[21px]">
              <div className="self-stretch flex flex-row items-start justify-start gap-[33px] max-w-full mq800:gap-[16px] mq1150:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[401px] max-w-full mq800:min-w-full">
                  <div className="w-[258px] h-6 relative font-medium whitespace-pre-wrap inline-block z-[2] mq450:text-base">
                    PRODUCTS IN YOUR CART:
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[14px] max-w-full text-base text-gray-900">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[61px] px-0 pb-0 box-border max-w-[calc(100%_-_15px)]">
                      <div className="self-stretch flex flex-col items-end justify-start gap-[10px] max-w-full">
                        <div className="w-[542px] flex flex-row items-start justify-start py-0 px-[60px] box-border max-w-full mq800:pl-[30px] mq800:pr-[30px] mq800:box-border">
                          <div className="flex-1 flex flex-row items-start justify-between py-0 pr-px pl-0 box-border gap-[20px] max-w-full mq450:flex-wrap">
                            <div className="h-[19px] w-[57px] relative font-medium inline-block z-[2]">
                              Product
                            </div>
                            <div className="h-[19px] w-[37px] relative font-medium inline-block z-[2]">
                              Price
                            </div>
                            <div className="h-[19px] w-[63px] relative font-medium inline-block z-[2]">
                              Quantity
                            </div>
                            <div className="h-[19px] w-[60px] relative font-medium inline-block z-[2]">
                              Subtotal
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch bg-gainsboro-100 flex flex-row items-start justify-between pt-[38px] pb-[42px] pr-[29px] pl-0 box-border gap-[20px] max-w-full z-[2] text-lg text-black mq800:flex-wrap mq800:pl-5 mq800:pr-5 mq800:box-border">
                          <div className="h-[149px] w-[603px] relative bg-gainsboro-100 hidden max-w-full" />
                          <div className="flex flex-row items-start justify-start gap-[2px] text-xl">
                            <img
                              className="h-[69px] w-[103px] relative object-cover z-[1]"
                              alt=""
                              src="/support-f-a-qs-group@2x.png"
                            />
                            <div className="h-6 w-[65px] relative inline-block z-[1] mq450:text-base">
                              Be-Her
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 pr-[45px] pl-0 gap-[38px]">
                            <b className="h-[22px] w-[78px] relative inline-block z-[1]">
                              KSH2399
                            </b>
                            <div className="h-6 w-3 relative text-xl inline-block z-[1] mq450:text-base">
                              1
                            </div>
                          </div>
                          <b className="h-[22px] w-[78px] relative inline-block z-[1]">
                            KSH2399
                          </b>
                        </div>
                      </div>
                    </div>
                    <div className="h-[942px] w-px relative bg-black box-border z-[2] border-r-[1px] border-solid border-black" />
                  </div>
                </div>
                <div className="w-[565px] flex flex-col items-start justify-start gap-[43px] min-w-[565px] max-w-full mq800:gap-[21px] mq800:min-w-full mq1150:flex-1">
                  <div className="w-[538px] flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full">
                    <div className="flex-1 flex flex-col items-center justify-start gap-[26px] max-w-full">
                      <div className="w-[204px] flex flex-row items-start justify-start">
                        <div className="h-6 w-32 relative font-semibold inline-block z-[2] mq450:text-base">
                          CART TOTALS
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-end justify-start gap-[7px] max-w-full">
                        <div className="w-[502px] h-0 flex flex-row items-start justify-start py-0 pr-[9px] pl-2.5 box-border max-w-full">
                          <div className="h-px flex-1 relative box-border opacity-[0.75] max-w-full z-[2] border-t-[1px] border-solid border-black" />
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                          <div className="flex flex-col items-start justify-start gap-[48px]">
                            <div className="w-[109px] h-6 relative font-semibold inline-block whitespace-nowrap z-[2] mq450:text-base">
                              SUBTOTALS
                            </div>
                            <div className="w-[93px] h-6 relative font-semibold inline-block z-[2] mq450:text-base">
                              SHIPPING
                            </div>
                            <div className="w-[67px] h-6 relative font-semibold inline-block z-[2] mq450:text-base">
                              TOTAL:
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5 text-lg text-gray-900">
                            <div className="flex flex-col items-start justify-start gap-[46px]">
                              <b className="w-[75px] h-[22px] relative inline-block whitespace-nowrap z-[2]">
                                KSH2399
                              </b>
                              <b className="w-[75px] h-[22px] relative inline-block whitespace-nowrap z-[2]">
                                KSH2399
                              </b>
                              <b className="w-[75px] h-[22px] relative inline-block whitespace-nowrap z-[2]">
                                KSH2399
                              </b>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-0 flex flex-row items-start justify-start py-0 pr-2.5 pl-8 box-border max-w-full">
                        <div className="h-px flex-1 relative box-border opacity-[0.75] max-w-full z-[2] border-t-[1px] border-solid border-black" />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2 pr-0 pl-9 box-border max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start max-w-full z-[2]">
                      <GroupComponent1
                        name1="Name"
                        propGap="0.375rem"
                        propHeight="3.156rem"
                      />
                      <GroupComponent1
                        name1="Email"
                        propGap="6px"
                        propWidth="59px"
                        propHeight="49.3px"
                      />
                      <GroupComponent1
                        name1="Phone"
                        propGap="5px"
                        propWidth="83px"
                        propHeight="48.1px"
                      />
                      <GroupComponent1
                        name1="Country/Region"
                        propGap="6px"
                        propWidth="169px"
                        propHeight="48.7px"
                      />
                      <GroupComponent1
                        name1="City"
                        propGap="6px"
                        propWidth="63px"
                        propHeight="48.7px"
                      />
                      <GroupComponent1
                        name1="Postal code"
                        propGap="6px"
                        propWidth="145px"
                        propHeight="48.7px"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[19px] max-w-full text-5xl">
                    <div className="flex flex-row items-end justify-start gap-[31px] mq450:flex-wrap mq450:gap-[15px]">
                      <div className="flex flex-row items-end justify-start gap-[7px]">
                        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
                          <div className="w-[13px] h-[13px] relative rounded-[50%] bg-gainsboro-100 z-[2]" />
                        </div>
                        <div className="h-[29px] w-[172px] relative inline-block z-[2] mq450:text-lgi">
                          Visa/Mastercard
                        </div>
                      </div>
                      <img
                        className="self-stretch w-[103px] relative max-h-full object-cover min-h-[32px] z-[2]"
                        loading="eager"
                        alt=""
                        src="/visa-mastercard-1@2x.png"
                      />
                    </div>
                    <div className="w-[316px] flex flex-col items-start justify-start gap-[8px]">
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                        <div className="flex flex-row items-end justify-start gap-[7px]">
                          <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
                            <div className="w-[13px] h-[13px] relative rounded-[50%] bg-gainsboro-100 z-[2]" />
                          </div>
                          <div className="h-[29px] w-20 relative inline-block z-[2] mq450:text-lgi">
                            PayTabs
                          </div>
                        </div>
                        <img
                          className="h-6 w-[72px] relative object-cover z-[2]"
                          loading="eager"
                          alt=""
                          src="/valu-1@2x.png"
                        />
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
                        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-1.5">
                          <div className="flex flex-row items-end justify-start gap-[7px]">
                            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
                              <div className="w-[13px] h-[13px] relative rounded-[50%] bg-gainsboro-100 z-[2]" />
                            </div>
                            <div className="h-[29px] w-[66px] relative inline-block z-[2] mq450:text-lgi">
                              Mpesa
                            </div>
                          </div>
                        </div>
                        <img
                          className="h-[57px] w-[77px] relative object-cover z-[2]"
                          loading="eager"
                          alt=""
                          src="/images-1@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[478px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <Button
                  className="h-[62px] w-[314px] z-[2]"
                  sx={{ width: 314 }}
                  variant="contained"
                >
                  CHECKOUT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GroupComponent />
    </div>
  );
};

export default ProductCheckOut;
