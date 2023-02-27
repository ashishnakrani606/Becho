import Image from "next/image";
import React, { useState } from "react";
import Button from "@/components/ui/Button";
import RadioCircle from "@/assets/images/icon/radio-circle.svg";
import CustomerPhoto from "@/assets/images/users/customer-photo.png";
import Camera from "@/assets/images/icon/camera.svg";
import PageHeader from "@/components/ui/PageHeader";
import UnsavedChanges from "@/components/ui/UnsavedChanges";
import InputContent from "@/components/ui/InputContent";
import VarientDropdown from "@/components/ui/SelectOption";
import MultiselectDropdown from "@/components/ui/MultiselectDropdown";
import Layout from "@/layouts/layout";

const Customers = () => {
  const [radiioBtn, setRadiioBtn] = useState(false);

  const ProductTypeHandler = () => {
    setRadiioBtn(!radiioBtn);
  };

  return (
    <Layout container>
      <UnsavedChanges>
        <Button
          color={"white"}
          name={"Discard"}
          size={"small"}
          outline={"true"}
          className={"!text-xs mr-5 dark:border-blacklight dark:text-black"}
        />
        <Button color={"green"} name={"Save"} className={"!text-xs"} />
      </UnsavedChanges>
      <PageHeader
        className={"mb-5 sm:flex-nowrap flex-wrap gap-5"}
        orderid={"New customer"}
        Badgesdata={[]}
      ></PageHeader>
      <div className="flex flex-wrap justify-between gap-y-5 mb-4">
        <div className="w-full md:max-w-[63%] max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl lg:pt-4 lg:pb-5 lg:pl-6 lg:pr-11 p-5 sm:px-5 px-3">
          <div className="grid sm:grid-cols-2 sm:gap-6 ">
            <InputContent ontent title={"First name"} className="dark:bg-black/40">
              <input type="text" name="" value="Baalkrishan" className="w-full dark:bg-transparent" />
            </InputContent>
            <InputContent title={"Last name"} className="dark:bg-black/40">
              <input type="text" name="" value="Lal Sani" className="w-full dark:bg-transparent" />
            </InputContent>
          </div>
          <InputContent className={"!py-[10px] dark:bg-black/40 dark:text-white/40"}>
            <VarientDropdown
              selectitem={[
                { id: 1, name: "Select Language..." },
                { id: 2, name: "Maximum discount uses 2" },
                { id: 3, name: "Maximum discount uses 3" },
              ]}
              className="dark:text-white/40"
            />
          </InputContent>
          <InputContent className={"!py-2.5 dark:bg-black/40"}>
            <input
              type="text"
              name=""
              value=""
              placeholder="Email"
              className="dark:bg-transparent dark:text-white/40 dark:placeholder-white/40"
            />
          </InputContent>
          <div className="grid sm:grid-cols-2 sm:gap-6">
            <InputContent title={"Country code"} className={"dark:bg-black/40 dark:text-white/40"}>
              <VarientDropdown
                selectitem={[
                  { id: 1, name: "+91" },
                  { id: 2, name: "Select2" },
                ]}
                className="dark:text-white/40"
              />
            </InputContent>
            <InputContent title={"Phone number"} className="dark:bg-black/40">
              <input type="number" name="" value="8073589105" className="w-full dark:bg-transparent" />
            </InputContent>
          </div>
          <div className="product-type-radio grid">
            <input
              id="product-type-1"
              type="radio"
              value=""
              name="product-type"
              className="h-0 w-0"
              onClick={ProductTypeHandler}
            />
            <input
              id="product-type-2"
              type="radio"
              value=""
              name="product-type"
              className="h-0 w-0"
              onClick={ProductTypeHandler}
            />
            <div className="grid sm:grid-cols-2 sm:gap-6">
              <label
                for="product-type-1"
                className={`cursor-pointer bg-white border border-black/10 rounded-lg py-6 px-5 mb-3  dark:bg-black/40 relative ${
                  !radiioBtn ? "border-black dark:border-secondary-purpleb" : "border-black/10"
                }`}
              >
                {!radiioBtn ? (
                  <svg
                    width="26"
                    height="26"
                    className="absolute right-3 top-3"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.19089 12.777C8.00482 12.5992 7.75736 12.5 7.5 12.5C7.49979 12.5 7.47732 12.5003 7.47732 12.5003C7.21217 12.5063 6.96027 12.6174 6.77704 12.8091C6.59923 12.9952 6.5 13.2426 6.5 13.5L6.50026 13.5227C6.50627 13.7878 6.61737 14.0397 6.80911 14.223L10.4716 17.723C10.8579 18.0921 11.4662 18.0924 11.8528 17.7236L19.19 10.7238C19.3819 10.5407 19.4935 10.2887 19.4997 10.0235C19.5001 10.0075 19.5001 9.9915 19.4997 9.97548C19.4936 9.72695 19.3952 9.48961 19.2236 9.30973C19.0348 9.11192 18.7734 9 18.5 9L18.4718 9.0004C18.2245 9.00738 17.9887 9.10573 17.8097 9.27645L11.1631 15.6174L8.19089 12.777Z"
                      fill="black"
                      className="dark:fill-secondary-purpleb"
                      fill-opacity="0.8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 0C13 0 15.6442 0 18.0605 1.02201C18.0605 1.02201 20.3936 2.00884 22.1924 3.80761C22.1924 3.80761 23.9912 5.60638 24.978 7.93951C24.978 7.93951 26 10.3558 26 13C26 13 26 15.6442 24.978 18.0605C24.978 18.0605 23.9912 20.3936 22.1924 22.1924C22.1924 22.1924 20.3936 23.9912 18.0605 24.978C18.0605 24.978 15.6442 26 13 26C13 26 10.3558 26 7.93951 24.978C7.93951 24.978 5.60638 23.9912 3.80761 22.1924C3.80761 22.1924 2.00884 20.3936 1.02202 18.0605C1.02202 18.0605 0 15.6442 0 13C0 13 0 10.3558 1.02202 7.93951C1.02202 7.93951 2.00885 5.60638 3.80761 3.80761C3.80761 3.80761 5.60638 2.00884 7.93951 1.02201C7.93951 1.02201 10.3558 0 13 0ZM13 2C13 2 10.7614 2 8.71861 2.86402C8.71861 2.86402 6.74476 3.69889 5.22183 5.22182C5.22183 5.22182 3.6989 6.74476 2.86402 8.71861C2.86402 8.71861 2 10.7614 2 13C2 13 2 15.2386 2.86402 17.2814C2.86402 17.2814 3.69889 19.2552 5.22183 20.7782C5.22183 20.7782 6.74476 22.3011 8.71861 23.136C8.71861 23.136 10.7614 24 13 24C13 24 15.2386 24 17.2814 23.136C17.2814 23.136 19.2552 22.3011 20.7782 20.7782C20.7782 20.7782 22.3011 19.2552 23.136 17.2814C23.136 17.2814 24 15.2386 24 13C24 13 24 10.7614 23.136 8.71861C23.136 8.71861 22.3011 6.74476 20.7782 5.22183C20.7782 5.22183 19.2552 3.69889 17.2814 2.86402C17.2814 2.86402 15.2386 2 13 2Z"
                      fill="black"
                      className="dark:fill-secondary-purpleb"
                      fill-opacity="0.8"
                    />
                  </svg>
                ) : (
                  <Image src={RadioCircle} alt="" className="absolute right-3 top-3 dark:invert" />
                )}
                <h3
                  className={`mb-1 font-semibold dark:text-white/80 ${
                    !radiioBtn ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"
                  }`}
                >
                  Email subscription
                </h3>
                <p
                  className={` ${!radiioBtn ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"}`}
                >
                  Customer agreed to receive marketing emails.
                </p>
              </label>
              <label
                for="product-type-2"
                className={`cursor-pointer bg-white border border-black/10 rounded-lg py-6 px-5 mb-3 dark:bg-black/40  dark:border-white/10 relative ${
                  radiioBtn ? "border-black dark:border-secondary-purpleb" : "border-black/10"
                }`}
              >
                {radiioBtn ? (
                  <svg
                    width="26"
                    height="26"
                    className="absolute right-3 top-3"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.19089 12.777C8.00482 12.5992 7.75736 12.5 7.5 12.5C7.49979 12.5 7.47732 12.5003 7.47732 12.5003C7.21217 12.5063 6.96027 12.6174 6.77704 12.8091C6.59923 12.9952 6.5 13.2426 6.5 13.5L6.50026 13.5227C6.50627 13.7878 6.61737 14.0397 6.80911 14.223L10.4716 17.723C10.8579 18.0921 11.4662 18.0924 11.8528 17.7236L19.19 10.7238C19.3819 10.5407 19.4935 10.2887 19.4997 10.0235C19.5001 10.0075 19.5001 9.9915 19.4997 9.97548C19.4936 9.72695 19.3952 9.48961 19.2236 9.30973C19.0348 9.11192 18.7734 9 18.5 9L18.4718 9.0004C18.2245 9.00738 17.9887 9.10573 17.8097 9.27645L11.1631 15.6174L8.19089 12.777Z"
                      fill="black"
                      className="dark:fill-secondary-purpleb"
                      fill-opacity="0.8"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 0C13 0 15.6442 0 18.0605 1.02201C18.0605 1.02201 20.3936 2.00884 22.1924 3.80761C22.1924 3.80761 23.9912 5.60638 24.978 7.93951C24.978 7.93951 26 10.3558 26 13C26 13 26 15.6442 24.978 18.0605C24.978 18.0605 23.9912 20.3936 22.1924 22.1924C22.1924 22.1924 20.3936 23.9912 18.0605 24.978C18.0605 24.978 15.6442 26 13 26C13 26 10.3558 26 7.93951 24.978C7.93951 24.978 5.60638 23.9912 3.80761 22.1924C3.80761 22.1924 2.00884 20.3936 1.02202 18.0605C1.02202 18.0605 0 15.6442 0 13C0 13 0 10.3558 1.02202 7.93951C1.02202 7.93951 2.00885 5.60638 3.80761 3.80761C3.80761 3.80761 5.60638 2.00884 7.93951 1.02201C7.93951 1.02201 10.3558 0 13 0ZM13 2C13 2 10.7614 2 8.71861 2.86402C8.71861 2.86402 6.74476 3.69889 5.22183 5.22182C5.22183 5.22182 3.6989 6.74476 2.86402 8.71861C2.86402 8.71861 2 10.7614 2 13C2 13 2 15.2386 2.86402 17.2814C2.86402 17.2814 3.69889 19.2552 5.22183 20.7782C5.22183 20.7782 6.74476 22.3011 8.71861 23.136C8.71861 23.136 10.7614 24 13 24C13 24 15.2386 24 17.2814 23.136C17.2814 23.136 19.2552 22.3011 20.7782 20.7782C20.7782 20.7782 22.3011 19.2552 23.136 17.2814C23.136 17.2814 24 15.2386 24 13C24 13 24 10.7614 23.136 8.71861C23.136 8.71861 22.3011 6.74476 20.7782 5.22183C20.7782 5.22183 19.2552 3.69889 17.2814 2.86402C17.2814 2.86402 15.2386 2 13 2Z"
                      fill="black"
                      className="dark:fill-secondary-purpleb"
                      fill-opacity="0.8"
                    />
                  </svg>
                ) : (
                  <Image src={RadioCircle} alt="" className="absolute right-3 top-3 dark:invert" />
                )}
                <h3
                  className={`mb-1 font-semibold dark:text-white/80 ${
                    radiioBtn ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"
                  }`}
                >
                  SMS subscription
                </h3>
                <p
                  className={` ${radiioBtn ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"}`}
                >
                  Customer agreed to receive SMS marketing text messages.
                </p>
              </label>
            </div>
          </div>
          <h3 className="text-lg font-semibold pb-4">Address</h3>
          <InputContent className={"!py-[10px] dark:bg-black/40 dark:text-white/40 "}>
            <VarientDropdown
              selectitem={[
                { id: 1, name: "Select Language..." },
                { id: 2, name: "Maximum discount uses 2" },
                { id: 3, name: "Maximum discount uses 3" },
              ]}
              className="dark:text-white/40"
            />
          </InputContent>
          <div className="grid sm:grid-cols-2 sm:gap-6">
            <InputContent title={"First name"} className="dark:bg-black/40">
              <input type="text" name="" value="Baalkrishan" className="w-full dark:bg-transparent" />
            </InputContent>
            <InputContent title={"Last name"} className="dark:bg-black/40">
              <input type="text" name="" value="Lal Sani" className="w-full dark:bg-transparent" />
            </InputContent>
          </div>
          <InputContent title={"Company"} className="dark:bg-black/40">
            <input type="text" name="" value="Company name" className="w-full dark:bg-transparent" />
          </InputContent>
          <InputContent title={"Address"} className="dark:bg-black/40">
            <input
              type="text"
              name=""
              value="Exploit Cross-Platform Mindshare 52, Ekbal Society, ShwetaPur Pilani"
              className="w-full dark:bg-transparent"
            />
          </InputContent>
          <InputContent title={"Apartment etc."} className="dark:bg-black/40">
            <input type="text" name="" value="Apartment, suite, etc" className="w-full dark:bg-transparent" />
          </InputContent>
          <div className="grid sm:grid-cols-2 sm:gap-6">
            <InputContent title={"City"} className="dark:bg-black/40">
              <input type="text" name="" value="Pilani" className="w-full dark:bg-transparent" />
            </InputContent>
            <InputContent title={"State"} className="dark:bg-black/40 dark:text-white/40">
              <VarientDropdown
                selectitem={[
                  { id: 1, name: "Rajasthan" },
                  { id: 2, name: "Select2" },
                ]}
              />
            </InputContent>
          </div>
          <div className="grid sm:grid-cols-2 sm:gap-6">
            <InputContent title={"Country code"} className="dark:bg-black/40 ">
              <VarientDropdown
                selectitem={[
                  { id: 1, name: "+91" },
                  { id: 2, name: "Select2" },
                ]}
              />
            </InputContent>
            <InputContent title={"Phone number"} className="dark:bg-black/40">
              <input type="number" name="" value="8073589105" className="w-full dark:bg-transparent" />
            </InputContent>
          </div>

          <p className="mb-[6px] text-black/40 dark:text-white/40">Other options</p>
          <InputContent title={"Notes"} className="dark:bg-black/40">
            <input type="text" name="" value="Text" className="w-full dark:bg-transparent" />
          </InputContent>
          <InputContent title={"Add tags"} className={"mt-3 w-full cursor-pointer"}>
            <MultiselectDropdown
              options={[
                {
                  cat: "tag 1",
                  key: "tag 1",
                },
                {
                  cat: "tag 2",
                  key: "tag 2",
                },
                {
                  cat: "tag 3",
                  key: "tag 3",
                },
                {
                  cat: "tag 4",
                  key: "tag 4",
                },
              ]}
              selectedValues={[
                {
                  cat: "tag",
                  key: "tag",
                },
                {
                  cat: "tag",
                  key: "tag",
                },
              ]}
            />
          </InputContent>
          <div className="flex justify-end sm:py-9 py-5 pt-7 flex-wrap gap-4">
            <Button name={"Save"} className="font-normal text-sm !px-4 text-white " color="green" size="large" />
          </div>
        </div>
        <div className="w-full md:max-w-[35%] ">
          <div className="bg-primary-light rounded-2xl lg:pt-4 lg:pb-5 lg:pl-6 lg:pr-8 sm:px-5 py-5 px-3 mb-7 dark:bg-white/5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Media</h3>
              <label className="bg-primary-blue text-xs font-semibold rounded-lg px-2 py-[5px] cursor-pointer dark:text-black">
                {" "}
                Add
                <input className="font-semibold " type="file" />
              </label>
            </div>
            <div className="relative group max-w-[120px] w-full">
              <Image src={CustomerPhoto} alt="" className="rounded-lg cursor-pointer" />
              <Image
                src={Camera}
                alt=""
                className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
            <p className="my-[10px] text-black/40 dark:text-white/40">Allowed file types: png, jpg, jpeg.</p>
          </div>
          <div className="bg-primary-light rounded-2xl lg:pt-4 lg:pb-5 lg:pl-6 lg:pr-8 sm:p-5 py-5 px-3 mb-8 dark:bg-white/5">
            <h3 className="text-lg font-semibold">Last placed orders</h3>
            <p className="text-lg font-semibold text-black/40 py-[13px] dark:text-white/40">
              This customer hasn’t placed any orders.
            </p>
            <div>
              <Button
                name={"Create order"}
                color={"purple"}
                secondary={"true"}
                className="font-normal text-sm "
                size="large"
              />
            </div>
          </div>
          <div className="bg-primary-light rounded-2xl lg:pt-4 lg:pb-5 lg:pl-6 lg:pr-8 sm:p-5 py-5 px-3 dark:bg-white/5">
            <h3 className="text-lg font-semibold mb-[10px]">Last placed orders</h3>
            <div className="flex justify-between bg-white py-[10px] px-4 mb-3 border-b border-black/5 dark:bg-black/40 dark:border-white/10">
              <h2 className="text-sm text-blacklight font-semibold border-black/5 dark:text-white">Total orders</h2>
              <h2 className="text-sm text-blacklight font-semibold dark:text-white">2</h2>
            </div>
            <div className="flex justify-between py-[11px] px-4 bg-white mb-3 border-b border-black/5 dark:bg-black/40 dark:border-white/10">
              <p className="text-blacklight text-xs	leading-[18px] dark:text-white">#CM9805</p>
              <p className="text-primary-green text-xs leading-[18px]">View details</p>
            </div>
            <div className="flex justify-between py-[11px] px-4 bg-white mb-3 border-b border-black/5 dark:bg-black/40 dark:border-white/10">
              <p className="text-blacklight text-xs	leading-[18px] dark:text-white">#CM9805</p>
              <p className="text-primary-green text-xs  leading-[18px]">View details</p>
            </div>
            <div>
              <Button name={"Create order"} color={"purple"} secondary={"true"} className="text-sm" size="large" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Customers;
