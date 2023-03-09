import React ,{useState} from "react";
import InputContent from "@/components/ui/InputContent";
import DAtePicker from "@/components/ui/DatePicker";
import Button from "@/components/ui/Button";
function OneTimeRadioBtn({ radiioBtn }) {
   const [accountCardOpen, setAccountCardOpen] = useState(true)
   const [cashCardOpen, setCashCardOpen] = useState(false)

   const accountcardHandlar  =()=> {
    setAccountCardOpen(true)
    setCashCardOpen(false)
   }
   const cashCardHandlar = () =>{
    setAccountCardOpen(false)
    setCashCardOpen(true)
   }
    return (
        <div className={`gap-y-5 mb-4 justify-between flex-wrap ${radiioBtn ? "flex" : "hidden"}`}>
            <div className="w-full md:max-w-[63%] max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl lg:pt-4 lg:pb-5 lg:px-6 p-5 sm:px-5 px-3">
                <div className={``}>
                    <h3 className="text-blacklight dark:text-white font-semibold text-lg leading-5 pb-4"> Details</h3>
                    <InputContent title={"Expense Name"} titlestyle={"!mb-1"}>
                        <input type="text" name="" id="message" defaultValue="Dustbin picker" className="bg-transparent w-full" />
                    </InputContent>
                    <InputContent title={"date"} titlestyle={"mb-1"}>
                        <DAtePicker placeholder={"Pick a date"}></DAtePicker>
                    </InputContent>
                    <InputContent title={"Amount"} titlestyle={"!mb-1"}>
                        <span className="flex items-center">
                            ₹
                            <input type="number" name="" defaultValue="10000" className="w-full bg-transparent ml-1" />
                        </span>
                    </InputContent>
                    <InputContent title={"Type"}>
                        <div className="flex md:items-center items-start sm:flex-nowrap flex-wrap gap-1 sm:gap-5">
                            <div className={`checkbox-icon inline-block relative `} onClick={accountcardHandlar}>
                                <input className="styled-checkbox" id="account" type="radio" name="Type" />
                                <label htmlFor="account" className="relative cursor-pointer text-sm flex sm:items-center">
                                    Account Payment (GST)
                                </label>
                            </div>
                            <div className={`checkbox-icon inline-block relative`} onClick={cashCardHandlar}>
                                <input className="styled-checkbox" id="Cash" type="radio" name="Type" />
                                <label htmlFor="Cash" className="relative cursor-pointer text-sm flex sm:items-center">
                                    Cash/Self (No GST)
                                </label>
                            </div>
                        </div>
                    </InputContent>
                    <InputContent title={"GST (18%)"} titlestyle={"!mb-1"} className={`${accountCardOpen ? "block" : "hidden"}`}>
                        <input type="text" name="" id="message" defaultValue="This will be automatically calculated" className="bg-transparent w-full" />
                    </InputContent>
                    <InputContent title={"Sub Total"} titlestyle={"!mb-1"} className={`${accountCardOpen ? "block" : "hidden"}`}>
                        <span className="flex items-center">
                            ₹
                            <input type="number" name="" id="message" defaultValue="11800" className="bg-transparent w-full  ml-1" />
                        </span>
                    </InputContent>
                    <InputContent title={"Deduction"} titlestyle={"!mb-1"}>
                        <span className="flex items-center">
                            ₹
                            <input type="number" name="" id="message" defaultValue="1000" className="bg-transparent w-full ml-1" />
                        </span>
                    </InputContent>
                    <InputContent title={"Total after deduction"} titlestyle={"!mb-1"} className={`${accountCardOpen ? "block" : "hidden"}`}>
                        <span className="flex items-center">
                            ₹
                            <input type="number" name="" id="message" defaultValue="10800" className="bg-transparent w-full ml-1" />
                        </span>
                    </InputContent>
                    <InputContent title={"Total after deduction"} titlestyle={"!mb-1"} className={`${cashCardOpen ? "block" : "hidden"}`}>
                        <span className="flex items-center">
                            ₹
                            <input type="number" name="" id="message" defaultValue="9000" className="bg-transparent w-full ml-1" />
                        </span>
                    </InputContent>
                    <InputContent title={"Notes"} titlestyle={"!mb-1"}>
                        <input type="text" name="" id="message" defaultValue="Note is optional" className="bg-transparent w-full" />
                    </InputContent>
                    <div className="border-y border-black/5 dark:border-white/5 py-[18px] flex justify-end items-center">
                        <Button color="lightgrey" size="large" name={"Discard"} secondary={"true"} className={"!text-sm !px-4"}></Button>
                        <Button color="blacklight" size="large" className={"ml-4 !text-sm font-semibold !px-4 mr-7"} name={"Save Changes"}></Button>
                    </div>
                </div>
            </div>
            <div className="w-full md:max-w-[35%]">
                <div className="bg-primary-light dark:bg-white/5 rounded-2xl lg:pt-4 lg:pb-5 lg:px-6 sm:px-5 py-5 px-3 mb-7">
                <div className={`${accountCardOpen ? "block" : "hidden"}`}>
                    <h3 className="text-blacklight dark:text-white font-semibold text-lg leading-7"> Summary</h3>
                    <div>
                        <h4 className="text-2xl leading-9 text- font-semibold ">Total - ₹ 10,800</h4>
                        <div>
                            <ul className="text-xs leading-normal">
                                <li className="list-disc ml-[26px]">13th April 2023</li>
                                <li className="list-disc ml-[26px]">Amount - ₹10000</li>
                                <li className="list-disc ml-[26px]">GST - ₹1800</li>
                                <li className="list-disc ml-[26px]">Sub Total - ₹11800</li>
                                <li className="list-disc ml-[26px]">Deduction - ₹1000</li>
                                <li className="list-disc ml-[26px]">Total - ₹10800</li>
                            </ul>
                            <p className=" leading-normal text-xs">Note: Paid this to Mehboob</p>
                        </div>
                    </div>
                </div>
                <div className={`${cashCardOpen ? "block" : "hidden"}`}>
                    <h3 className="text-blacklight dark:text-white font-semibold text-lg leading-5"> Summary</h3>
                    <div>
                        <h4 className="text-2xl leading-9 text- font-semibold ">Total - ₹ 9,000</h4>
                        <div>
                            <ul className="text-xs leading-normal">
                                <li className="list-disc ml-[26px]">13th April 2023</li>
                                <li className="list-disc ml-[26px]">Amount - ₹10000</li>
                                <li className="list-disc ml-[26px]">Sub Total - ₹11800</li>
                                <li className="list-disc ml-[26px]">Deduction - ₹1000</li>
                                <li className="list-disc ml-[26px]">Total - ₹10800</li>
                            </ul>
                            <p className=" leading-normal text-xs">Note: Paid this to Mehboob </p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
export default OneTimeRadioBtn;
