import React, { useState } from "react";
import TabList from "@/components/store-settings/tab-list";
import Usdrupee from "@/assets/images/icon/usd.svg";
import Button from "@/components/ui/Button";
import closeico from "@/assets/images/icon/close-circle.svg";
import Doller from "@/assets/images/icon/doller.svg";
import Badges from "@/components/ui/Badges";
import VarientDropdown from "@/components/ui/SelectOption";
import Layout from "@/layouts/layout";
import Modal from "@/components/ui/Modal";
import Toggle from "@/components/ui/Toggle";
import Image from "next/image";
import InputContent from "@/components/ui/InputContent";

const ShippingDelivery = () => {

  // radio
  const [radiioBtn, setRadiioBtn] = useState(true);
  const [radiioBtnTwo, setRadiioBtnTwo] = useState(false);
  const radiioBtnHandler = () => {
    setRadiioBtn(true);
    setRadiioBtnTwo(false);
  };
  const radiioBtnTwoHandler = () => {
    setRadiioBtn(false);
    setRadiioBtnTwo(true);
  };

  const [learnMore, setLearnMore] = useState(false);
  const [open, setOpen] = useState(false);
  const [openreStock, setOpenreStock] = useState(false);
  const para =
    "Inform your customers of expected delivery dates by specifying a processing time of 2 business days or less. This processing period will be added with the shipping transit time to give a complete delivery estimate. Inform your customers complete delivery estimate. ";

  return (
    <Layout container>
      <TabList />
      {/*********  Shipping & Delivery start***********/}
      <div className="flex justify-between flex-wrap gap-y-5">
        <div className="w-full md:max-w-[49%] max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl p-6">
          <h2 className="font-semibold text-sm leading-5 md:pb-[34px] pb-5">General shipping rates</h2>
          <p className="text-xs text-black/40 dark:text-white/40 leading-[18px]">
            Manage rates for domestic & international orders for all products.
          </p>
          <div className="md:pt-16 pt-7 gap-5 flex justify-between items-center">
            <span className="text-xs text-black/40 dark:text-white/40">All products</span>
            <Button
              color="teal"
              name={"Manage"}
              size={"small"}
              className={" !text-blacklight"}
              onClick={() => setOpen(true)}
            ></Button>
          </div>
        </div>
        <div className="w-full md:max-w-[49%] max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl p-6">
          <h2 className="font-semibold text-sm leading-5 md:pb-8 pb-5">Custom shipping rates</h2>
          <p className="text-xs text-black/40 dark:text-white/40 leading-[18px]">
            Add custom rates or destination restrictions for groups of products.
          </p>
          <div className="md:pt-16 pt-7 gap-5 flex justify-between items-center">
            <span className="text-xs text-black/40 dark:text-white/40">Jun 10, 2022</span>
            <Button
              color="teal"
              size={"small"}
              name={"Manage"}
              className={"!text-blacklight"}
              onClick={() => setOpenreStock(true)}
            ></Button>
          </div>
        </div>
      </div>
      <div className="p-4 bg-primary-light dark:bg-white/5 mt-6 rounded-2xl">
        <div className="flex justify-between gap-4 flex-wrap">
          <div className="flex gap-3 items-center">
            <h3 className="text-sm font-semibold">Processing time</h3>
            <Badges name="Active" color="green" />
          </div>
          <Button color={"lightgrey"} size={"small"} name={"Manage"} secondary={"true"} />
        </div>
        <p className="text-xs leading-[18px] text-black/40 dark:text-white/40 mt-5">
          {learnMore ? [para] : `${para.substring(0, 215)}`}
          <button className="btn text-primary-green" onClick={() => setLearnMore(!learnMore)}>
            {learnMore ? " Learn less " : " Learn more "}
          </button>
        </p>
      </div>
      {/*********  Shipping & Delivery end ***********/}
      {open &&
      <Modal open={open} setOpen={setOpen} className={"max-w-[544px] w-full mx-auto sm:px-6 px-3"}>
        <div className="sm:px-2">
          <div className="flex items-center justify-between md:pb-8 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">Manage general rates</h2>
            <Image src={closeico} alt="" onClick={() => setOpen(false)} className={"cursor-pointer dark:invert"} />
          </div>
          <p className="text-black/80 dark:text-white/80 font-semibold text-sm pb-5">
            Manage rates for domestic & international orders for all products.
          </p>
          <div className="border-[2px] border-black/10 dark:border-white/10 rounded-xl mb-6">
            <div className="flex justify-between p-4 items-center gap-1">
              <div className="flex gap-2 items-center">
                <span className="flex items-center">₹ 
                <input type="number" name="" defaultValue="250.00" className="sm:min-w-[55px] w-14 bg-transparent" />
              </span>
                <Badges color={"greenlight"} name={"domentic"} className={"py-[2px] px-2 rounded-md"} />
              </div>
              <div className="flex gap-2 items-center">
                <Image src={Usdrupee} alt="" />
                <VarientDropdown
                  className={"!text-black/80 dark:!text-white/80 sm:pr-8 pr-5"}
                  selectitem={[
                    { id: 1, name: "INR" },
                    { id: 2, name: "INR" },
                    { id: 3, name: "INR" },
                  ]}
                  arrowmodel
                />
              </div>
            </div>
            <div className="flex justify-between gap-1 p-4 items-center border-t border-black/10 dark:border-white/10">
              <div className="flex gap-2 items-center">
                <span className="flex items-center">$ 
                <input type="number" name="" defaultValue="7.15" className="sm:min-w-[55px] w-9 bg-transparent" />
                </span>
                <Badges color={"purplelight"} name={"international"} className={"py-[2px] px-2 rounded-md"} />
              </div>
              <div className="flex gap-2 items-center">
                <Image src={Doller} alt="" />
                <VarientDropdown
                  className={"!text-black/80 dark:!text-white/80 sm:pr-8 pr-5"}
                  selectitem={[
                    { id: 1, name: "USD" },
                    { id: 2, name: "USD" },
                    { id: 3, name: "USD" },
                  ]}
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-black/80 dark:text-white/80 text-lg font-semibold pb-5">Free delivery above</h2>
            <div className="border-[2px] border-black/10 dark:border-white/10 rounded-xl mb-6">
              <div className="flex justify-between p-4 items-center gap-1">
                <div className="flex gap-2 items-center">
                <span className="flex items-center">₹ 
                <input type="number" name="" defaultValue="5000.00" className="sm:min-w-[63px] w-[63px] bg-transparent" />
                </span>
                  <Badges color={"greenlight"} name={"domentic"} className={"py-[2px] px-2 rounded-md"} />
                </div>
                <div className="flex gap-2 items-center">
                  <Image src={Usdrupee} alt="" />
                  <VarientDropdown
                    className={"!text-black/80 dark:!text-white/80 sm:pr-8 pr-5"}
                    selectitem={[
                      { id: 1, name: "INR" },
                      { id: 2, name: "INR" },
                      { id: 3, name: "INR" },
                    ]}
                  />
                </div>
              </div>
              <div className="flex justify-between p-4 items-center gap-1 border-t border-black/10 dark:border-white/10">
                <div className="flex gap-2 items-center">
                <span className="flex items-center">$ 
                <input type="number" name="" defaultValue="100" className="sm:min-w-[33px] w-[33px] bg-transparent" />
                </span>
                  {/* <span className="sm:min-w-[63px]">$100</span> */}
                  <Badges color={"purplelight"} name={"international"} className={"py-[2px] px-2 rounded-md"} />
                </div>
                <div className="flex gap-2 items-center">
                  <Image src={Doller} alt="" />
                  <VarientDropdown
                    className={"!text-black/80 dark:!text-white/80 sm:pr-8 pr-5"}
                    selectitem={[
                      { id: 1, name: "USD" },
                      { id: 2, name: "USD" },
                      { id: 3, name: "USD" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              color="lightgrey"
              secondary="true"
              name={"Cancel"}
              onClick={() => setOpen(false)}
              className={"sm:!py-[18px] !py-4 text-sm !px-4 w-full rounded-2xl font-semibold"}
            ></Button>
            <Button
              color="bluedark"
              secondary="true"
              name={"Save"}
              className={"sm:!py-[18px] !py-4 text-sm !px-4 w-full rounded-2xl font-semibold"}
            ></Button>
          </div>
        </div>
      </Modal>}

      
      {openreStock &&
      <>
      {/* modal-2 */}
        <Modal open={openreStock} setOpen={setOpenreStock} className={"max-w-[544px] w-full mx-auto sm:px-6 px-3"}>
          <div className="sm:px-2">
            <div className="flex items-center justify-between md:pb-8 pb-5">
              <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">Add custom rate</h2>
              <Image
                src={closeico}
                alt=""
                onClick={() => setOpenreStock(false)}
                className={"cursor-pointer dark:invert"}
              />
            </div>
            <p className="text-black/40 dark:text-white/40 text-sm pb-5">
              Rate name (will be shown to customer at checkout)
            </p>
            <InputContent className={"px-4 py-[18px] mb-6"}>
              <input type="text" name="" id="message" defaultValue="Title" className="bg-transparent w-full" />
            </InputContent>
            <>
              <div>
                <fieldset className="my-6">
                  <legend className="sr-only">Notification method</legend>
                  <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                    <div className="flex items-center gap-8">
                      <div className="flex items-center gap-2">
                        <input
                          name="notification-method"
                          type="radio"
                          value=""
                          defaultChecked                        
                          className="h-4 w-4 border-2 border-blue-1 text-indigo-600 focus:ring-blue-1 cursor-pointer"
                          onClick={radiioBtnHandler}
                        />
                        <label htmlFor={""} className="block text-sm font-medium">
                          Item weight
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          name="notification-method"
                          type="radio"
                          className="h-4 w-4 border-2 border-blue-1 text-indigo-600 focus:ring-blue-1 cursor-pointer"
                          onClick={radiioBtnTwoHandler}
                        />
                        <label htmlFor={""} className="block text-sm font-medium">
                          Order price
                        </label>
                      </div>
                    </div>
                    
                  </div>
                </fieldset>
              </div>
            </> 
            {radiioBtn &&
              <div>
                <h2 className="text-black/80 dark:text-white/80 text-sm font-semibold pb-4">Price</h2>
                <div className="border-[2px] border-black/10 dark:border-white/10 rounded-xl mb-6">
                  <div className="flex justify-between p-4 items-center gap-1">
                    <div className="flex gap-2 items-center">
                      <span className="flex items-center">₹ 
                        <input type="number" name="" defaultValue="250.00" className="sm:min-w-[55px] w-14 bg-transparent" />
                    </span>
                      <Badges color={"greenlight"} name={"domentic"} className={"py-[2px] px-2 rounded-md"} />
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image src={Usdrupee} alt="" />
                      <VarientDropdown
                        className={"!text-black/80 dark:!text-white/80 sm:pr-8 pr-5"}
                        selectitem={[
                          { id: 1, name: "INR" },
                          { id: 2, name: "INR" },
                          { id: 3, name: "INR" },
                        ]}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between p-4 items-center border-t border-black/10 dark:border-white/10">
                    <div className="flex gap-2 items-center">
                      <span className="flex items-center">$ 
                        <input type="number" name="" defaultValue="7.15" className="sm:min-w-[55px] w-9 bg-transparent" />
                      </span>
                      <Badges color={"purplelight"} name={"international"} className={"py-[2px] px-2 rounded-md"} />
                    </div>
                    <div className="flex gap-2 items-center">
                      <Image src={Doller} alt="" />
                      <VarientDropdown
                        className={"!text-black/80 dark:!text-white/80 sm:pr-8 pr-5"}
                        selectitem={[
                          { id: 1, name: "USD" },
                          { id: 2, name: "USD" },
                          { id: 3, name: "USD" },
                        ]}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <InputContent className={"px-4 py-[18px] relative"}>
                    <input
                      type="number"
                      name=""
                      id="message"
                      defaultValue="5.01"
                      className="bg-transparent w-full text-black/80 dark:text-white/80 font-semibold"
                    />
                    <span className="absolute top-[50%] translate-y-[-50%] right-5 font-semibold">KG</span>
                  </InputContent>
                  <InputContent className={"px-4 py-[18px] relative"}>
                    <input
                      type="number"
                      name=""
                      id="message"
                      defaultValue="15.10"
                      className="bg-transparent w-full text-black/80 dark:text-white/80 font-semibold"
                    />
                    <span className="absolute top-[50%] translate-y-[-50%] right-5 font-semibold">KG</span>
                  </InputContent>
                </div>
              </div>}
          
            {radiioBtnTwo &&    
            <div>
              <h2 className="text-black/80 dark:text-white/80 text-sm font-semibold pb-4">Domestic</h2>
              <div className="border-[2px] border-black/10 dark:border-white/10 rounded-xl mb-6">
                <div className="flex justify-between p-4 items-center gap-1">
                  <div className="flex gap-2 items-center">
                      <span className="flex items-center">₹ 
                        <input type="number" name="" defaultValue="250.00" className="sm:min-w-[54px] w-[45px] bg-transparent" />
                      </span>
                    <Badges color={"blue"} name={"shipping rate"} className={"py-[2px] px-2 rounded-md"} />
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image src={Usdrupee} alt="" />
                    <VarientDropdown
                      className={"!text-black/80 dark:!text-white/80 sm:pr-8 pr-5"}
                      selectitem={[
                        { id: 1, name: "INR" },
                        { id: 2, name: "INR" },
                        { id: 3, name: "INR" },
                      ]}
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-black/40 dark:text-white/40 text-sm font-semibold pb-6">Domestic Price range</h3>
              <div className="flex items-center gap-4">
                <InputContent className={"px-4 py-[18px] mb-8 relative"}>
                  <input
                    type="number"
                    name=""
                    id="message"
                    defaultValue="1500.00"
                    className="bg-transparent w-full text-black/80 dark:text-white/80 font-semibold"
                  />
                  <span className="absolute top-[50%] translate-y-[-50%] right-5 font-semibold">INR</span>
                </InputContent>
                <InputContent className={"px-4 py-[18px] mb-8 relative"}>
                  <input
                    type="number"
                    name=""
                    id="message"
                    defaultValue="2500.50"
                    className="bg-transparent w-full text-black/80 dark:text-white/80 font-semibold"
                  />
                  <span className="absolute top-[50%] translate-y-[-50%] right-5 font-semibold">INR</span>
                </InputContent>
              </div>
              <h2 className="text-black/80 dark:text-white/80 text-sm font-semibold pb-4">International</h2>
              <div className="border-[2px] border-black/10 dark:border-white/10 rounded-xl mb-6">
                <div className="flex justify-between p-4 items-center gap-1">
                  <div className="flex gap-2 items-center">
                  <span className="flex items-center">$ 
                        <input type="number" name="" defaultValue="5.00" className="sm:min-w-[39px] w-[39px] bg-transparent" />
                      </span>
                    <Badges color={"blue"} name={"shipping rate"} className={"py-[2px] px-2 rounded-md"} />
                  </div>
                  <div className="flex gap-2 items-center">
                    <Image src={Doller} alt="" />
                    <VarientDropdown
                      className={"!text-black/80 dark:!text-white/80 sm:pr-8 pr-5"}
                      selectitem={[
                        { id: 1, name: "USD" },
                        { id: 2, name: "USD" },
                        { id: 3, name: "USD" },
                      ]}
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-black/40 dark:text-white/40 text-sm font-semibold pb-6">International Price range</h3>
              <div className="flex items-center gap-4">
                <InputContent className={"px-4 py-[18px] mb-8 relative"}>
                  <input
                    type="number"
                    name=""
                    id="message"
                    defaultValue="150.00"
                    className="bg-transparent w-full text-black/80 dark:text-white/80 font-semibold"
                  />
                  <span className="absolute top-[50%] translate-y-[-50%] right-5 font-semibold">USD</span>
                </InputContent>
                <InputContent className={"px-4 py-[18px] mb-8 relative"}>
                  <input
                    type="number"
                    name=""
                    id="message"
                    defaultValue="250.00"
                    className="bg-transparent w-full text-black/80 dark:text-white/80 font-semibold"
                  />
                  <span className="absolute top-[50%] translate-y-[-50%] right-5 font-semibold">USD</span>
                </InputContent>
              </div>
            </div>
            }
            
            <div className="flex justify-center gap-4">
              <Button
                color="lightgrey"
                secondary="true"
                name={"Cancel"}
                onClick={() => setOpenreStock(false)}
                className={"sm:!py-[18px] !py-4 text-sm !px-4 w-full rounded-2xl font-semibold"}
              ></Button>
              <Button
                color="bluedark"
                secondary="true"
                name={"Save"}
                className={"sm:!py-[18px] !py-4 text-sm !px-4 w-full rounded-2xl font-semibold"}
              ></Button>
            </div>
          </div>
        </Modal>
      </>
    }
    </Layout>
  );
};

export default ShippingDelivery;
