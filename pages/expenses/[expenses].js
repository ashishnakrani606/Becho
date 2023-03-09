import Image from "next/image";
import React, { useState } from "react";
import Button from "@/components/ui/Button";
import RadioCircle from "@/assets/images/icon/radio-circle.svg";
import PageHeader from "@/components/ui/PageHeader";
import Alert from "@/components/ui/Alert";
import Layout from "@/layouts/layout";
import OneTimeRadioBtn from "@/components/Expense/exppensesonetime";
import MonthlyRadioBtn from "@/components/Expense/expensesmonthly";
import ElectricityRadioBtn from "@/components/Expense/expenseselectricity";

const expenses = () => {
  const [radiioBtn, setRadiioBtn] = useState(true);
  const [radiioBtnTwo, setRadiioBtnTwo] = useState(false);
  const [radiioBtnThree, setRadiioBtnThree] = useState(false);
  const radiioBtnHendler = () => {
    setRadiioBtn(true);
    setRadiioBtnTwo(false);
    setRadiioBtnThree(false);
  };
  const radiioBtnTwoHendler = () => {
    setRadiioBtn(false);
    setRadiioBtnTwo(true);
    setRadiioBtnThree(false);
  };
  const radiioBtnThreeHendler = () => {
    setRadiioBtn(false);
    setRadiioBtnTwo(false);
    setRadiioBtnThree(true);
  };

  return (
    <Layout container>
      <PageHeader arrow={true} className={"mb-5 flex-wrap gap-5 mt-5"} orderid={"Add Expense"} Badgesdata={[]}>
        <Button secondary={"true"} name={"Duplicate"}  className={"bg-black/20 text-black/80 mr-2"}/>
        <Button secondary={"true"} name={"Delete Expense"}  className={"text-secondary-red"}/>
      </PageHeader>
      <div className={"my-5"}>
        <Alert color={"red"} title={"There is 1 error with this offer:"} description={"Start date can’t be blank"} />
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-3">Expense type</h4>
        <div className="product-type-radio grid">
          <div className="grid mb-7 product-type-radio">
            <div className=" flex flex-wrap sm:gap-6 gap-3 ">
              <div className=" inline-block min-h-[1.5rem] flex-grow sm:flex-grow-0">
                <div
                  onClick={() => radiioBtnHendler()}
                  className={`cursor-pointer min-h-[132px] sm:max-w-[278px] bg-white dark:bg-black/40 dark:border-white/10 border border-black/10 rounded-lg py-6 px-5 relative ${
                    radiioBtn ? "dark:border-secondary-purpleb border-black" : "border-black/10"
                  }`}
                >
                  {radiioBtn ? (
                    <svg
                      width="26"
                      height="26"
                      className="absolute right-[15px] top-[15px]"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.19089 12.777C8.00482 12.5992 7.75736 12.5 7.5 12.5C7.49979 12.5 7.47732 12.5003 7.47732 12.5003C7.21217 12.5063 6.96027 12.6174 6.77704 12.8091C6.59923 12.9952 6.5 13.2426 6.5 13.5L6.50026 13.5227C6.50627 13.7878 6.61737 14.0397 6.80911 14.223L10.4716 17.723C10.8579 18.0921 11.4662 18.0924 11.8528 17.7236L19.19 10.7238C19.3819 10.5407 19.4935 10.2887 19.4997 10.0235C19.5001 10.0075 19.5001 9.9915 19.4997 9.97548C19.4936 9.72695 19.3952 9.48961 19.2236 9.30973C19.0348 9.11192 18.7734 9 18.5 9L18.4718 9.0004C18.2245 9.00738 17.9887 9.10573 17.8097 9.27645L11.1631 15.6174L8.19089 12.777Z"
                        fill="black"
                        className="dark:fill-secondary-purpleb"
                        fillOpacity="0.8"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 0C13 0 15.6442 0 18.0605 1.02201C18.0605 1.02201 20.3936 2.00884 22.1924 3.80761C22.1924 3.80761 23.9912 5.60638 24.978 7.93951C24.978 7.93951 26 10.3558 26 13C26 13 26 15.6442 24.978 18.0605C24.978 18.0605 23.9912 20.3936 22.1924 22.1924C22.1924 22.1924 20.3936 23.9912 18.0605 24.978C18.0605 24.978 15.6442 26 13 26C13 26 10.3558 26 7.93951 24.978C7.93951 24.978 5.60638 23.9912 3.80761 22.1924C3.80761 22.1924 2.00884 20.3936 1.02202 18.0605C1.02202 18.0605 0 15.6442 0 13C0 13 0 10.3558 1.02202 7.93951C1.02202 7.93951 2.00885 5.60638 3.80761 3.80761C3.80761 3.80761 5.60638 2.00884 7.93951 1.02201C7.93951 1.02201 10.3558 0 13 0ZM13 2C13 2 10.7614 2 8.71861 2.86402C8.71861 2.86402 6.74476 3.69889 5.22183 5.22182C5.22183 5.22182 3.6989 6.74476 2.86402 8.71861C2.86402 8.71861 2 10.7614 2 13C2 13 2 15.2386 2.86402 17.2814C2.86402 17.2814 3.69889 19.2552 5.22183 20.7782C5.22183 20.7782 6.74476 22.3011 8.71861 23.136C8.71861 23.136 10.7614 24 13 24C13 24 15.2386 24 17.2814 23.136C17.2814 23.136 19.2552 22.3011 20.7782 20.7782C20.7782 20.7782 22.3011 19.2552 23.136 17.2814C23.136 17.2814 24 15.2386 24 13C24 13 24 10.7614 23.136 8.71861C23.136 8.71861 22.3011 6.74476 20.7782 5.22183C20.7782 5.22183 19.2552 3.69889 17.2814 2.86402C17.2814 2.86402 15.2386 2 13 2Z"
                        fill="black"
                        className="dark:fill-secondary-purpleb"
                        fillOpacity="0.8"
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
                    One-time
                  </h3>
                  <p
                    className={` ${
                      radiioBtn ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"
                    }`}
                  >
                    One time expense like housekeeping material, painter, glass cleaning etc.
                  </p>
                </div>
              </div>
              <div className=" inline-block min-h-[1.5rem] flex-grow sm:flex-grow-0">
                <div
                  onClick={() => radiioBtnTwoHendler()}
                  className={`cursor-pointer min-h-[132px] sm:max-w-[278px] bg-white dark:bg-black/40  border border-black/10 rounded-lg py-6 px-5 relative ${
                    radiioBtnTwo ? "dark:border-secondary-purpleb border-black" : "border-black/10 "
                  }`}
                >
                  {radiioBtnTwo ? (
                    <svg
                      width="26"
                      height="26"
                      className="absolute right-[15px] top-[15px]"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.19089 12.777C8.00482 12.5992 7.75736 12.5 7.5 12.5C7.49979 12.5 7.47732 12.5003 7.47732 12.5003C7.21217 12.5063 6.96027 12.6174 6.77704 12.8091C6.59923 12.9952 6.5 13.2426 6.5 13.5L6.50026 13.5227C6.50627 13.7878 6.61737 14.0397 6.80911 14.223L10.4716 17.723C10.8579 18.0921 11.4662 18.0924 11.8528 17.7236L19.19 10.7238C19.3819 10.5407 19.4935 10.2887 19.4997 10.0235C19.5001 10.0075 19.5001 9.9915 19.4997 9.97548C19.4936 9.72695 19.3952 9.48961 19.2236 9.30973C19.0348 9.11192 18.7734 9 18.5 9L18.4718 9.0004C18.2245 9.00738 17.9887 9.10573 17.8097 9.27645L11.1631 15.6174L8.19089 12.777Z"
                        fill="black"
                        className="dark:fill-secondary-purpleb"
                        fillOpacity="0.8"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 0C13 0 15.6442 0 18.0605 1.02201C18.0605 1.02201 20.3936 2.00884 22.1924 3.80761C22.1924 3.80761 23.9912 5.60638 24.978 7.93951C24.978 7.93951 26 10.3558 26 13C26 13 26 15.6442 24.978 18.0605C24.978 18.0605 23.9912 20.3936 22.1924 22.1924C22.1924 22.1924 20.3936 23.9912 18.0605 24.978C18.0605 24.978 15.6442 26 13 26C13 26 10.3558 26 7.93951 24.978C7.93951 24.978 5.60638 23.9912 3.80761 22.1924C3.80761 22.1924 2.00884 20.3936 1.02202 18.0605C1.02202 18.0605 0 15.6442 0 13C0 13 0 10.3558 1.02202 7.93951C1.02202 7.93951 2.00885 5.60638 3.80761 3.80761C3.80761 3.80761 5.60638 2.00884 7.93951 1.02201C7.93951 1.02201 10.3558 0 13 0ZM13 2C13 2 10.7614 2 8.71861 2.86402C8.71861 2.86402 6.74476 3.69889 5.22183 5.22182C5.22183 5.22182 3.6989 6.74476 2.86402 8.71861C2.86402 8.71861 2 10.7614 2 13C2 13 2 15.2386 2.86402 17.2814C2.86402 17.2814 3.69889 19.2552 5.22183 20.7782C5.22183 20.7782 6.74476 22.3011 8.71861 23.136C8.71861 23.136 10.7614 24 13 24C13 24 15.2386 24 17.2814 23.136C17.2814 23.136 19.2552 22.3011 20.7782 20.7782C20.7782 20.7782 22.3011 19.2552 23.136 17.2814C23.136 17.2814 24 15.2386 24 13C24 13 24 10.7614 23.136 8.71861C23.136 8.71861 22.3011 6.74476 20.7782 5.22183C20.7782 5.22183 19.2552 3.69889 17.2814 2.86402C17.2814 2.86402 15.2386 2 13 2Z"
                        fill="black"
                        className="dark:fill-secondary-purpleb"
                        fillOpacity="0.8"
                      />
                    </svg>
                  ) : (
                    <Image src={RadioCircle} alt="" className="absolute right-3 top-3 dark:invert" />
                  )}
                  <h3
                    className={`mb-1 font-semibold text-black/80 dark:text-white/80 ${
                      radiioBtnTwo ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"
                    }`}
                  >
                    Monthly
                  </h3>
                  <p
                    className={` ${
                      radiioBtnTwo ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"
                    }`}
                  >
                    Automatic monthly expenses like staff salaries, maintenance work etc.
                  </p>
                </div>
              </div>
              <div className=" inline-block min-h-[1.5rem] flex-grow sm:flex-grow-0">
                <div
                  onClick={() => radiioBtnThreeHendler()}
                  className={`cursor-pointer min-h-[132px] sm:max-w-[278px] bg-white dark:bg-black/40  border border-black/10 rounded-lg py-6 px-5 relative ${
                    radiioBtnThree ? "dark:border-secondary-purpleb border-black" : "border-black/10 "
                  }`}
                >
                  {radiioBtnThree ? (
                    <svg
                      width="26"
                      height="26"
                      className="absolute right-[15px] top-[15px]"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.19089 12.777C8.00482 12.5992 7.75736 12.5 7.5 12.5C7.49979 12.5 7.47732 12.5003 7.47732 12.5003C7.21217 12.5063 6.96027 12.6174 6.77704 12.8091C6.59923 12.9952 6.5 13.2426 6.5 13.5L6.50026 13.5227C6.50627 13.7878 6.61737 14.0397 6.80911 14.223L10.4716 17.723C10.8579 18.0921 11.4662 18.0924 11.8528 17.7236L19.19 10.7238C19.3819 10.5407 19.4935 10.2887 19.4997 10.0235C19.5001 10.0075 19.5001 9.9915 19.4997 9.97548C19.4936 9.72695 19.3952 9.48961 19.2236 9.30973C19.0348 9.11192 18.7734 9 18.5 9L18.4718 9.0004C18.2245 9.00738 17.9887 9.10573 17.8097 9.27645L11.1631 15.6174L8.19089 12.777Z"
                        fill="black"
                        className="dark:fill-secondary-purpleb"
                        fillOpacity="0.8"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13 0C13 0 15.6442 0 18.0605 1.02201C18.0605 1.02201 20.3936 2.00884 22.1924 3.80761C22.1924 3.80761 23.9912 5.60638 24.978 7.93951C24.978 7.93951 26 10.3558 26 13C26 13 26 15.6442 24.978 18.0605C24.978 18.0605 23.9912 20.3936 22.1924 22.1924C22.1924 22.1924 20.3936 23.9912 18.0605 24.978C18.0605 24.978 15.6442 26 13 26C13 26 10.3558 26 7.93951 24.978C7.93951 24.978 5.60638 23.9912 3.80761 22.1924C3.80761 22.1924 2.00884 20.3936 1.02202 18.0605C1.02202 18.0605 0 15.6442 0 13C0 13 0 10.3558 1.02202 7.93951C1.02202 7.93951 2.00885 5.60638 3.80761 3.80761C3.80761 3.80761 5.60638 2.00884 7.93951 1.02201C7.93951 1.02201 10.3558 0 13 0ZM13 2C13 2 10.7614 2 8.71861 2.86402C8.71861 2.86402 6.74476 3.69889 5.22183 5.22182C5.22183 5.22182 3.6989 6.74476 2.86402 8.71861C2.86402 8.71861 2 10.7614 2 13C2 13 2 15.2386 2.86402 17.2814C2.86402 17.2814 3.69889 19.2552 5.22183 20.7782C5.22183 20.7782 6.74476 22.3011 8.71861 23.136C8.71861 23.136 10.7614 24 13 24C13 24 15.2386 24 17.2814 23.136C17.2814 23.136 19.2552 22.3011 20.7782 20.7782C20.7782 20.7782 22.3011 19.2552 23.136 17.2814C23.136 17.2814 24 15.2386 24 13C24 13 24 10.7614 23.136 8.71861C23.136 8.71861 22.3011 6.74476 20.7782 5.22183C20.7782 5.22183 19.2552 3.69889 17.2814 2.86402C17.2814 2.86402 15.2386 2 13 2Z"
                        fill="black"
                        className="dark:fill-secondary-purpleb"
                        fillOpacity="0.8"
                      />
                    </svg>
                  ) : (
                    <Image src={RadioCircle} alt="" className="absolute right-3 top-3 dark:invert" />
                  )}
                  <h3
                    className={`mb-1 font-semibold text-black/80 dark:text-white/80 ${
                      radiioBtnThree ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"
                    }`}
                  >
                    Electricity
                  </h3>
                  <p
                    className={` ${
                      radiioBtnThree ? "text-black/80 dark:text-white/80" : "text-black/40 dark:text-white/40"
                    }`}
                  >
                    Electricity bill, although monthly, is counted different than monthly expenses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <OneTimeRadioBtn radiioBtn={radiioBtn} />
        <MonthlyRadioBtn radiioBtnTwo={radiioBtnTwo} />
        <ElectricityRadioBtn radiioBtnThree={radiioBtnThree} />
      </div>
    </Layout>
  );
};

export default expenses;
