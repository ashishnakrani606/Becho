import React from "react";
import InputContent from "@/components/ui/InputContent";
import DAtePicker from "@/components/ui/DatePicker";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Check from "@/assets/images/icon/Check.svg";
function ElectricityRadioBtn({ radiioBtnThree }) {
    return (
        <div className={`gap-y-5 mb-4 justify-between flex-wrap ${radiioBtnThree ? "flex" : "hidden"}`}>
            <div className="w-full md:max-w-[63%] max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl lg:pt-4 lg:pb-5 lg:px-6 p-5 sm:px-5 px-3">
                <div className={``}>
                    <h3 className="text-blacklight dark:text-white font-semibold text-lg leading-5 pb-4"> Details</h3>
                    <InputContent title={"Bill Generated on (by Electricity Department)"} titlestyle={"mb-1"}>
                        <DAtePicker placeholder={"Pick a date"}></DAtePicker>
                    </InputContent>
                    <InputContent title={"Amount"} titlestyle={"!mb-1"}>
                        <span className="flex items-center">
                            ₹
                            <input type="text" name="" id="message" defaultValue="83867" titlestyle={"!mb-1"} className="ml-1 bg-transparent w-full" />
                        </span>
                    </InputContent>
                    <InputContent title={"Units"} titlestyle={"!mb-1"}>
                        <span className="flex items-center">
                            ₹
                            <input type="text" name="" id="message" defaultValue="21665" titlestyle={"!mb-1"} className="ml-1 bg-transparent w-full" />
                        </span>
                    </InputContent>
                    <div className="border-y border-black/5 dark:border-white/5 py-[18px] flex justify-end items-center">
                        <Button color="lightgrey" size="large" name={"Discard"} secondary={"true"} className={"!text-sm !px-4"}></Button>
                        <Button color="blacklight" size="large" className={"ml-4 !px-4 !text-sm font-semibold mr-7"} name={"Save Changes"}></Button>
                    </div>
                    <div className="border-b border-blacklight/10 dark:border-white/10 flex justify-end items-center pb-4 pt-8  pr-7 ">
                        <Button color={"green"} className={"flex items-center justify-center"}>
                            <span>Bill Paid?</span>
                            <Image src={Check} className="ml-1" alt="" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full md:max-w-[35%]">
                <div className="bg-primary-light dark:bg-white/5 rounded-2xl lg:pt-4 lg:pb-5 lg:px-6 sm:px-5 py-5 px-3 mb-7">
                    <h3 className="text-blacklight dark:text-white font-semibold text-lg leading-5"> Summary</h3>
                    <div>
                        <h4 className="text-2xl leading-9 text- font-semibold ">13 April - ₹ 83,867</h4>
                        <div>
                            <ul className="text-xs leading-normal">
                                <li className="list-disc ml-[26px]"> April Bill - ₹83,867 </li>
                                <li className="list-disc ml-[26px]">Units - 21665</li>
                                <li className="list-disc ml-[26px] font-bold">Unpaid </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ElectricityRadioBtn;
