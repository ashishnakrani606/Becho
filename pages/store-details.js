import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CheckBox from "../src/components/ui/CheckBox";
import InputContent from "../src/components/ui/InputContent";
import Button from "../src/components/ui/Button";
import SetupUpdate from "../src/components/ui/SetupUpdate";
import Badges from "../src/components/ui/Badges"
const StoreDetails = () => {
  
  return (
    <>
      <Tabs>
        <TabList>
          <Tab>Store Details</Tab>
          <Tab>Permissions</Tab>
          <Tab>Checkout</Tab>
          <Tab>Payment Gateways</Tab>
          <Tab>Shipping & Delivery</Tab>
          <Tab>Taxes</Tab>
          <Tab>Brand Assets</Tab>
          <Tab>Email Settings</Tab>
        </TabList>

        <TabPanel>
          <div className="w-full bg-[#F7F9FB] rounded-2xl md:p-6 p-4">
            <h4 className="text-lg font-semibold">Becho Store</h4>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Permissions</h2>
        </TabPanel>
        <TabPanel>
          <div className="w-full bg-[#F7F9FB] rounded-2xl lg:p-6 lg:pb-8 py-6 sm:px-5 px-3">
            <div className="flex justify-between items-center flex-wrap gap-5">
              <h2 className="text-blacklight font-semibold text-sm leading-5">Checkout</h2>
              <div className="flex justify-end items-center gap-2">
                <Button
                  color="lightgrey"
                  size="large"
                  name={"Discard"}
                  className={"leading-[18px] text-xs !px-2 !py-[5px]"}
                ></Button>
                <Button
                  color="blacklight"
                  size="large"
                  className={"text-xs !px-2 !py-[5px] leading-[18px]"}
                  name={"Save Changes"}
                ></Button>
              </div>
            </div>
            <div className="flex justify-between items-center px-3 py-6 border-b border-black/10 mb-5">
              <h2 className="text-sm leading-5">Customer contact method</h2>
              <div className="flex justify-end items-center gap-2">
                <div className="flex md:items-center items-start sm:flex-nowrap flex-wrap gap-1 sm:gap-9">
                  <CheckBox name={"percentage"}>Email</CheckBox>
                  <CheckBox name={"fixed"}>Phone</CheckBox>
                </div>
              </div>
            </div>
            <SetupUpdate
              color={"red"}
              className={"mb-4"}
              title={"Email updates"}
              description={"To send email updates, please enter details."}
            >
              <Button color={"redlight"} name={"Setup emails"} />
            </SetupUpdate>
            <SetupUpdate color={"red"} title={"SMS Updates"} description={"To send SMS updates, please enter details."}>
              <Button color={"redlight"} name={"Setup SMS"} />
            </SetupUpdate>
          </div>
          <div className="w-full bg-[#F7F9FB] rounded-2xl lg:p-6 sm:px-5 py-6 px-3 mt-7">
            <div className="flex justify-between items-center flex-wrap gap-5">
              <h2 className="text-blacklight font-semibold text-sm leading-5">Customer information for checkout</h2>
              <div className="flex justify-end items-center gap-2">
                <Button
                  color="lightgrey"
                  size="large"
                  name={"Discard"}
                  className={"leading-[18px] text-xs !px-2 !py-[5px]"}
                ></Button>
                <Button
                  color="blacklight"
                  size="large"
                  className={"text-xs !px-2 !py-[5px] leading-[18px]"}
                  name={"Save Changes"}
                ></Button>
              </div>
            </div>
            <div>
              <div className="flex items-center md:items-center gap-3 sm:px-5 py-4 border-b border-black/10">
                <CheckBox name={"Require"}></CheckBox>
                <div>
                  <p className="text-sm font-semibold">Require full name</p>
                  <span className="text-xs text-black/40">
                    Select if full name is required for checkout. If not selected, only the first name will be required.
                  </span>
                </div>
              </div>
              <div className="flex items-center md:items-center gap-3 sm:px-5 py-4 border-b border-black/10">
                <CheckBox name={"Requirecompany"}></CheckBox>
                <div>
                  <p className="text-sm font-semibold">Require company name</p>
                  <span className="text-xs text-black/40">
                    Select if customer’s company name is required.
                  </span>
                </div>
              </div>
              <div className="flex items-center md:items-center p gap-3 sm:px-5 py-4 border-b border-black/10">
                <CheckBox name={"Requirephone"}></CheckBox>
                <div>
                  <p className="text-sm font-semibold">Require phone number</p>
                  <span className="text-xs text-black/40">
                  Select if customer’s phone number is required.
                  </span>
                </div>
              </div>
              <div className="flex items-center md:items-center gap-3 sm:px-5 pt-4">
                <CheckBox name={"shippingaddress"}></CheckBox>
                <div>
                  <p className="text-sm font-semibold">Use shipping address as billing address by default</p>
                  <span className="text-xs text-black/40">
                  If not selected, the customer will be required to add both addresses before checkout.
                  </span>
                </div>
              </div>             
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Payment Gateways</h2>
        </TabPanel>
        <TabPanel>
          <div className="flex justify-between flex-wrap">
            <div className="w-full md:max-w-[49%] max-w-[100%] bg-[#F7F9FB] rounded-2xl p-6">
              <h2 className="text-blacklight font-semibold text-sm leading-5 pb-8">General shipping rates</h2>
              <p className="text-xs text-black/40">Manage rates for domestic & international orders for all products.</p>
              <div>               
                <div className="pt-16  flex justify-between items-center">
                  <span className="text-xs text-black/40">All products</span>
                  <Button color="teal" size="large" name={"Manage"} className={"!px-2 !py-[5px] leading-[18px]"}></Button>                 
                </div>
              </div>
            </div>
            <div className="w-full md:max-w-[49%] max-w-[100%] bg-[#F7F9FB] rounded-2xl p-6">
              <h2 className="text-blacklight font-semibold text-sm leading-5 pb-8">Custom shipping rates</h2>
              <p className="text-xs text-black/40">Add custom rates or destination restrictions for groups of products.</p>
              <div>               
                <div className="pt-16  flex justify-between items-center">
                  <span className="text-xs text-black/40">Jun 10, 2022</span>
                  <Button color="teal" size="large" name={"Manage"} className={"!px-2 !py-[5px] leading-[18px]"}></Button>                 
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-[#F7F9FB] mt-6">
            <div className="flex justify-between">
              <div className="flex gap-3 items-center">
                <h3 className="text-sm font-semibold">Processing time</h3>
                <Badges name="Active" color= "green"                
                />
              </div>
                <Button color={"lightgrey"} name={"Manage"} />
            </div>
            <p className="text-black/40 pr-20 mt-4">Inform your customers of expected delivery dates by specifying a processing time of 2 business days or less. This processing period will be added with the shipping transit time to give a complete delivery estimate.<span className="text-primary-green"> Learn more.</span></p>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Taxes</h2>
        </TabPanel>
        <TabPanel>
          <h2>Brand Assets</h2>
        </TabPanel>
        <TabPanel>
          <h2>Email Settings</h2>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default StoreDetails;
