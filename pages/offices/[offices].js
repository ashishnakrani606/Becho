import React, { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import Alert from "@/components/ui/Alert";
import InputContent from "@/components/ui/InputContent";
import Layout from "@/layouts/layout";
import Modal from "@/components/ui/Modal";
import VarientDropdown from "@/components/ui/SelectOption";
import DatePicker from "@/components/ui/DatePicker";

const Office = () => {
  const [open, setOpen] = useState(false);
  return (
    <Layout container>
      <PageHeader arrow={true} className={"mb-[28px] gap-y-3"} orderid={"Add Office"} Badgesdata={[]}>
        <Button
          href={"/#"}
          className="bg-black/20 dark:bg-white/20  dark:text-white/80 text-xs rounded-lg px-2 py-[5px] text-black/80" secondary={"true"} name={"Duplicate"}
        />
        <Button className="py-[5px] sm:px-2 px-[1px] sm:mr-2 text-xs text-secondary-red" secondary={"true"} name={" Delete Office"} />
      </PageHeader>
      <div className="my-7">
        <Alert
          color={"red"}
          title={"There is 1 error with this offer:"}
          description={"Start date can’t be blank"}
          alertStyle={"pb-3.5 outline-secondary-red outline outline-1 border-0"}
        />
      </div>
      <div className="flex ">
        <div className="w-full  md:max-w-[52%]">
          <h3 className="text-lg font-semibold text-blacklight mb-3">Office floor</h3>
          <InputContent
            title={"Floor"}
            className="!mb-0"
            titlestyle="mb-1 text-black/80 dark:text-white/80 leading-[18px]"
          >
            <VarientDropdown
              className={"!text-black/20 dark:!text-white/20 "}
              selectitem={[
                { id: 1, name: "select" },
                { id: 2, name: "5th Floor" },
                { id: 3, name: "Style 3" },
              ]}
            />
          </InputContent>
        </div>
      </div>
      <div className="flex justify-between md:flex-row flex-col items-start xl:mt-7 mt-6 gap-y-8">
        <div className="w-full  md:max-w-[52%]">
          <div className="bg-primary-light dark:bg-white/5 md:px-6 md:py-4 p-3 rounded-2xl">
            <h2 className="text-blacklight dark:text-white font-semibold text-lg leading-7 pb-4"> Details</h2>
            <div>
              <InputContent title={"Office Name"} titlestyle={"!mb-1"}>
                <input type="text" name="" defaultValue="Right side 1st" className="w-full bg-transparent ml-1 text-sm" />
              </InputContent>
              <InputContent title={"Number of Seats"} titlestyle={"!mb-1"}>
                <input type="number" name="" defaultValue="28" className="w-full bg-transparent ml-1 text-sm" />
              </InputContent>
              <InputContent title={"Usual Rent (+GST by Default)"} titlestyle={"!mb-1"}>
                <span className="flex items-center">
                  ₹
                  <input type="number" name="" defaultValue="168000" className="w-full bg-transparent ml-1 text-sm" />
                </span>
              </InputContent>
              <InputContent title={"Notes"} titlestyle={"!mb-1"}>
                <input type="text" name="" defaultValue="Note is optional" className="w-full bg-transparent ml-1 text-sm" />
              </InputContent>
              <div className="border-y border-black/5 gap-4 flex-wrap dark:border-white/5 py-[18px] flex justify-end items-center">
                <Button
                  color="lightgrey"
                  size="large"
                  name={"Discard"}
                  secondary={"true"}
                  className={"!text-sm !px-4"}
                />
                <Button
                  color="blacklight"
                  size="large"
                  className={"!text-sm font-semibold sm:mr-7 !px-4"}
                  name={"Save Changes"}
                />
              </div>
            </div>
          </div>
          <div className="bg-primary-light dark:bg-white/5 md:px-6 md:py-4 p-3 rounded-2xl mt-6">
            <h2 className="text-blacklight dark:text-white font-semibold text-lg leading-7 pb-4">
              Current Company in this Office
            </h2>
            <div>
              <InputContent title={"Select company"} className="">
                <VarientDropdown
                  className={"!text-black/80 dark:!text-white/80 "}
                  selectitem={[
                    { id: 1, name: "select" },
                    { id: 2, name: "Rage Coffee LLC" },
                    { id: 3, name: "Style 3" },
                  ]}
                />
              </InputContent>
              <InputContent title={"Current Rent"} titlestyle={"!mb-1"}>
                <span className="flex items-center">
                  ₹
                  <input type="number" name="" defaultValue="140000" className="w-full bg-transparent ml-1 text-sm" />
                </span>
              </InputContent>
              <InputContent title={"Rent Type"} className="">
                <VarientDropdown
                  className={"!text-black/80 dark:!text-white/80 "}
                  selectitem={[
                    { id: 1, name: "Account with GST" },
                    { id: 2, name: "Rage Coffee LLC" },
                    { id: 3, name: "Style 3" },
                  ]}
                />
              </InputContent>
              <InputContent title={"18% GST (Auto Calculated)"} titlestyle={"!mb-1"}>
                <span className="flex items-center">
                  ₹
                  <input type="number" name="" defaultValue="25200" className="w-full bg-transparent ml-1 text-sm" />
                </span>
              </InputContent>
              <InputContent title={"Total Rent (Auto Calculated)"} titlestyle={"!mb-1"}>
                <span className="flex items-center">
                  ₹
                  <input type="number" name="" defaultValue="165200" className="w-full bg-transparent ml-1 text-sm" />
                </span>
              </InputContent>
              <InputContent title={"Start date"} titlestyle={"mb-1"}>
                <DatePicker placeholder={"Pick a date"}></DatePicker>
              </InputContent>
              <InputContent title={"Lock in Till Date"} titlestyle={"mb-1"}>
                <DatePicker placeholder={"Pick a date"}></DatePicker>
              </InputContent>
              <div className="border-y border-black/5 flex-wrap dark:border-white/5 py-[18px] gap-4 flex justify-end items-center">
                <Button
                  color="lightgrey"
                  size="large"
                  name={"Discard"}
                  secondary={"true"}
                  className={"!text-sm !px-4"}
                />
                <Button
                  color="blacklight"
                  size="large"
                  className={"!text-sm font-semibold sm:mr-7 !px-4"}
                  name={"Save Changes"}
                />
              </div>
              <div className="border-b border-blacklight/10 gap-4 dark:border-white/10 flex flex-wrap justify-end items-center pb-4 pt-8 sm:pr-7 ">
                <Button
                  name={"Leaving Office?"}
                  outline={"true"}
                  secondary={"true"}
                  size={"medium"}
                  className="!leading-[18px] !text-sm"
                />
                <Button
                  color={"primarygreen"}
                  size={"large"}
                  name={"Shifting Office?"}
                  className={"!px-4 flex text-lg font-semibold leading-7 items-center justify-center"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`w-full md:max-w-[46%] `}>
          <div className="bg-primary-light dark:bg-white/5 rounded-2xl lg:pt-4 lg:pb-5 lg:px-6 sm:px-5 py-5 px-3 mb-7">
            <h3 className="text-blacklight dark:text-white font-semibold text-lg"> Vacant</h3>
            <div>
              <h4 className="text-2xl leading-9 text- font-semibold ">Rent - ₹ 1,68,000 + GST</h4>
              <p className="pt-4 text-xs leading-[18px]">Note: Note will be displayed here</p>
            </div>
          </div>
          <div className="bg-primary-light dark:bg-white/5 rounded-2xl lg:pt-4 lg:pb-6 lg:px-6 sm:px-5 py-5 px-3 mb-7">
            <h3 className="text-blacklight dark:text-white font-semibold text-lg leading-7">
              On rent - Rage Coffee LLC
            </h3>
            <div>
              <h4 className="text-2xl leading-9 text- font-semibold ">Rent - ₹ 1,65,200</h4>
              <ul className="text-xs leading-normal">
                <li className="list-disc ml-6">From 13th April 2023</li>
                <li className="list-disc ml-6">Lock in Till 13th April 2024</li>
                <li className="list-disc ml-6">Rent Type - Account with GST </li>
                <li className="list-disc ml-6">Rent - ₹1,40,000 </li>
                <li className="list-disc ml-6">GST - ₹25,200</li>
                <li className="list-disc ml-6">Total - ₹1,65,200</li>
              </ul>
              <p className="text-xs leading-[18px]">Note: Note will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
      <Modal title={"Add Customer"} open={open} setOpen={setOpen}>
        <div className="mt-4">
          <InputContent title={"Name"} className={"!px-4 py-3 cursor-pointer"}>
            <input
              type="text"
              name=""
              placeholder="Name"
              className="bg-transparent w-full placeholder:text-black/40 placeholder:dark:text-white/40"
            />
          </InputContent>
          <InputContent title={"Phone"} className={"!px-4 py-3 cursor-pointer"}>
            <input
              type="number"
              name=""
              placeholder="Phone"
              className="bg-transparent w-full placeholder:text-black/40 placeholder:dark:text-white/40"
            />
          </InputContent>
          <InputContent title={"Email"} className={"!px-4 py-3 cursor-pointer"}>
            <input
              type="email"
              name=""
              placeholder="Email"
              className="bg-transparent w-full placeholder:text-black/40 placeholder:dark:text-white/40"
            />
          </InputContent>
          <InputContent title={"Address"} className={"!px-4 py-3 cursor-pointer"}>
            <textarea
              rows="5"
              className="w-full dark:bg-transparent resize-none placeholder:text-black/40 placeholder:dark:text-white/40"
              placeholder="Address"
            ></textarea>
          </InputContent>
        </div>
        <div className="py-3 flex justify-end items-center">
          <Button
            color="lightgrey"
            onClick={() => setOpen(false)}
            size="large"
            secondary="true"
            name={"Cancel"}
            className={"text-sm !px-4"}
          ></Button>
          <Button
            color="primarygreen"
            size="large"
            className={"ml-4 !px-4 text-sm font-semibold"}
            name={"Save"}
          ></Button>
        </div>
      </Modal>
    </Layout>
  );
};

export default Office;
