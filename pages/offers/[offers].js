import React from "react";
import { useState } from "react";
import Button from "../../src/components/ui/Button";
import PageHeader from "../../src/components/ui/PageHeader";
import Alert from "../../src/components/ui/Alert";
import Link from "next/link";
import InputContent from "../../src/components/ui/InputContent";
import VarientDropdown from "../../src/components/ui/SelectOption";
import CheckBox from "../../src/components/ui/CheckBox";
import UnsavedChanges from "../../src/components/ui/UnsavedChanges";
import DAtePicker from "../../src/components/ui/DatePicker";

const offers = () => {
  return (
    <>
      <UnsavedChanges>
        <Button
          color={"white"}
          name={"Discard"}
          outline={"true"}
          className={"md:mr-5 mr-4 dark:border-blacklight  dark:text-blacklight"}
        />
        <Button color={"green"} name={"Save Changes"} />
      </UnsavedChanges>
      <PageHeader
        arrow={true}
        className={"mb-5 flex-wrap gap-5"}
        orderid={"EKHKSS3S266H"}
        orderidcopy={"Copy of EKHKSS3S266H"}
        Badgesdata={[{ color: "green", name: "Active" }]}
      >
        <Link
          href={"#0"}
          className={
            "hover:bg-black/20 hover:dark:bg-white/20 text-black/40 dark:text-white/40 text-xs rounded-lg sm:px-2 py-[5px] hover:text-black/80"
          }
        >
          Duplicate
        </Link>
        <Link
          href={"#0"}
          className="hover:bg-black/20 hover:dark:bg-white/20 text-black/40 dark:text-white/40 text-xs rounded-lg sm:px-2 py-[5px] hover:text-black/80"
        >
          Deactivate
        </Link>
        <Link href={"#0"} className="py-[5px] sm:px-2 sm:mr-2 whitespace-nowrap text-xs text-secondary-red">
          Delete Discount
        </Link>
      </PageHeader>
      <div className="mb-7">
        <Alert color={"red"} title={"There is 1 error with this offer:"} description={"Start date can’t be blank"} />
      </div>
      <div className="mb-7">
        <Alert
          color={"green"}
          title={"Copy of EKHKSS3S266H was created successfully. What’s next?"}
          description={
            "Promote your discount code via email or social media by sharing a unique link. Customers will receive the discount when they use this link during checkout."
          }
        />
      </div>
      <div className="flex justify-between  flex-wrap">
        <div className="w-full md:max-w-[63%] max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl py-4 lg:px-6 sm:px-5 px-3">
          <h2 className="text-blacklight font-semibold text-lg leading-5 pb-4 dark:text-white">Amount off on order</h2>
          <div>
            <InputContent title={"Type"}>
              <div className="flex md:items-center items-start sm:flex-nowrap flex-wrap gap-1 sm:gap-5">
                <CheckBox name={"discount"}>Discount code</CheckBox>
                <CheckBox name={"automatic"}>Automatic discount</CheckBox>
              </div>
            </InputContent>
            <InputContent title={"Discount Code"}>
              <input type="text" name="" value="EKHKSS3S266H" className="bg-transparent" />
            </InputContent>
            <InputContent title={"Value Type"}>
              <div className="flex md:items-center items-start sm:flex-nowrap flex-wrap gap-1 sm:gap-5">
                <CheckBox name={"percentage"}>Percentage</CheckBox>
                <CheckBox name={"fixed"}>Fixed amount</CheckBox>
              </div>
            </InputContent>
            <InputContent title={"Percentage %"}>
              <input type="text" name="" value="40" className="bg-transparent" />
            </InputContent>
            <InputContent>
              <VarientDropdown
                className={"py-2.5 text-black/20"}
                selectitem={[
                  { id: 1, name: "Minimum purchase requirement" },
                  { id: 2, name: "Minimum purchase requirement 2" },
                  { id: 3, name: "Minimum purchase requirement 3" },
                ]}
              />
            </InputContent>
            <InputContent>
              <VarientDropdown
                className={"py-2.5"}
                selectitem={[
                  { id: 1, name: "Customer eligibility criteria" },
                  { id: 2, name: "Customer eligibility criteria 2" },
                  { id: 3, name: "Customer eligibility criteria 3" },
                ]}
              />
            </InputContent>
            <InputContent>
              <VarientDropdown
                className={"py-2.5"}
                selectitem={[
                  { id: 1, name: "Maximum discount uses" },
                  { id: 2, name: "Maximum discount uses 2" },
                  { id: 3, name: "Maximum discount uses 3" },
                ]}
              />
            </InputContent>
            <InputContent title={"Start date"}>
              <DAtePicker placeholder={"Pick a date"}></DAtePicker>
            </InputContent>
            <InputContent title={"End date (optional)"}>
              <DAtePicker placeholder={"Pick a date"}></DAtePicker>
            </InputContent>
            <div className="border-y border-black/5 dark:border-white/5 py-[18px] flex justify-end items-center">
              <Button color="lightgrey" size="large" name={"Discard"} secondary={"true"} className={"text-sm px-4"}></Button>
              <Button
                color="blacklight"
                size="large"
                className={"ml-4 text-sm font-semibold mr-7"}
                name={"Save Changes"}
              ></Button>
            </div>
          </div>
        </div>
        <div className="w-full md:max-w-[35%] max-w-[100%] mt-4 md:mt-0">
          <div className="bg-primary-light dark:bg-white/5 rounded-2xl pt-4 pb-5 lg:px-6 sm:px-5  px-3">
            <h3 className="text-lg font-semibold">Summary</h3>
            <h4 className="text-2xl text- font-semibold ">EKH KSS3S266H</h4>
            <div>
              <ul className="mt-1 text-xs leading-[18px]">
                type and method
                <li className="list-disc ml-[26px]">Amount off order</li>
                <li className="list-disc ml-[26px]">Code</li>
              </ul>
              <ul className="text-xs leading-[18px]">
                details
                <li className="list-disc ml-[26px]">40% off entire order</li>
                <li className="list-disc ml-[26px]">No minimum purchase requirement</li>
                <li className="list-disc ml-[26px]">All customers</li>
                <li className="list-disc ml-[26px]">Limit of 5 uses, one per customer</li>
                <li className="list-disc ml-[26px]">Can’t combine with other discounts</li>
                <li className="list-disc ml-[26px]">Active from today until Feb 17</li>
              </ul>
              <ul className="font-semibold mt-5 leading-[18px] text-xs">
                Performance
                <li className="list-disc ml-[26px] font-normal">0 used </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default offers;
