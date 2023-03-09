import React ,{useState} from "react";
import InputContent from "@/components/ui/InputContent";
import DAtePicker from "@/components/ui/DatePicker";
import VarientDropdown from "@/components/ui/SelectOption";
import Button from "@/components/ui/Button";
function MonthlyRadioBtn({ radiioBtnTwo }) {
    const [salaryCardOpen, setSalaryCardOpen] = useState(true)
   const [expenseCardOpen, setexpenseCardOpen] = useState(false)

   const SalaryCardHandlar  =()=> {
    setSalaryCardOpen(true)
    setexpenseCardOpen(false)
   }
   const ExpenseCardHandlar = () =>{
    setSalaryCardOpen(false)
    setexpenseCardOpen(true)
   }
    return (
        <div className={`gap-y-5 mb-4 justify-between flex-wrap ${radiioBtnTwo ? "flex" : "hidden"}`}>
            <div className="w-full md:max-w-[63%] max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl lg:pt-4 lg:pb-5 lg:px-6 p-5 sm:px-5 px-3">
                <div className={`${radiioBtnTwo ? "dark:border-secondary-purpleb border-black block" : "hidden border-black/10"}`}>
                    <h3 className="text-blacklight dark:text-white font-semibold text-lg leading-5 pb-4"> Details</h3>
                    <InputContent title={"Type"}>
                        <div className="flex md:items-center items-start sm:flex-nowrap flex-wrap gap-1 sm:gap-5">
                            <div className={`checkbox-icon inline-block relative `}  onClick={SalaryCardHandlar}>
                                <input className="styled-checkbox" id="salary" type="radio"  name="typesalary" />
                                <label htmlFor="salary" className="relative cursor-pointer text-sm flex sm:items-center">
                                    Salary
                                </label>
                            </div>
                            <div className={`checkbox-icon inline-block relative `} onClick={ExpenseCardHandlar}>
                                <input className="styled-checkbox" id="expense" type="radio"  name="typesalary"/>
                                <label htmlFor="expense" className="relative cursor-pointer text-sm flex sm:items-center">
                                    Other Expense
                                </label>
                            </div>
                        </div>
                    </InputContent>
                    <div className={`${salaryCardOpen ? "block " : "hidden"}`}>
                    <InputContent title={"Select staff"}  >
                        <VarientDropdown
                            className={"!text-black/80 dark:!text-white/80"}
                            selectitem={[
                                { id: 1, name: "Sunil Kumar" },
                                { id: 2, name: "Style 2" },
                                { id: 3, name: "Style 3" },
                            ]}
                        />
                    </InputContent>
                    <InputContent title={"Amount (Auto Filled)"} titlestyle={"!mb-1"}>
                    <span className="flex items-center">₹
                        <input type="number" name="" defaultValue="25000" className="w-full bg-transparent ml-1" />
                        </span>
                    </InputContent>
                    <InputContent title={"Deduction (Current Month Only)"} titlestyle={"!mb-1"}>
                    <span className="flex items-center">₹
                        <input type="number" name="" defaultValue="1000" className="w-full bg-transparent ml-1" />
                        </span>
                    </InputContent>
                    <InputContent title={"Total after deduction"} titlestyle={"!mb-1"}>
                    <span className="flex items-center">₹
                        <input type="number" name="" defaultValue="24000" className="w-full bg-transparent ml-1" />
                        </span>
                    </InputContent>
                    <InputContent title={"Deduction Reason"} titlestyle={"!mb-1"}>
                    <span className="flex items-center">₹
                        <input type="text" name="" defaultValue="3 holidays" className="w-full bg-transparent ml-1" />
                        </span>
                    </InputContent>
                    </div>
                    <div  className={`${expenseCardOpen ? "block " : "hidden"}`}>

                    <InputContent title={"Expense name"} titlestyle={"!mb-1"}>
                        <input type="text" name="" defaultValue="Guard Service" className="w-full bg-transparent ml-1" />
                    </InputContent>
                    <InputContent title={"Select Type of Payment"}>
                        <div className="flex md:items-center items-start sm:flex-nowrap flex-wrap gap-1 sm:gap-5">
                            <div className={`checkbox-icon inline-block relative `}>
                                <input className="styled-checkbox" id="every" type="radio" name="typepayment" />
                                <label htmlFor="every" className="relative cursor-pointer text-sm flex sm:items-center">
                                    Add automatically every month
                                </label>
                            </div>
                            <div className={`checkbox-icon inline-block relative `}>
                                <input className="styled-checkbox" id="Manual" type="radio" name="typepayment" />
                                <label htmlFor="Manual" className="relative cursor-pointer text-sm flex sm:items-center">
                                    Manual
                                </label>
                            </div>
                        </div>
                    </InputContent>
                    <InputContent title={"Amount (Automatic in case selected)"} titlestyle={"!mb-1"}>
                        <span className="flex items-center">
                            ₹
                            <input type="number" name="" defaultValue="10000" className="w-full bg-transparent ml-1" />
                        </span>
                    </InputContent>
                    <InputContent title={"Type"}>
                        <div className="flex md:items-center items-start sm:flex-nowrap flex-wrap gap-1 sm:gap-5">
                            <div className={`checkbox-icon inline-block relative `}>
                                <input className="styled-checkbox" id="Payment" type="radio" name="Cashpayment" />
                                <label htmlFor="Payment" className="relative cursor-pointer text-sm flex sm:items-center">
                                Account Payment (GST)
                                </label>
                            </div>
                            <div className={`checkbox-icon inline-block relative `}>
                                <input className="styled-checkbox" id="Self" type="radio" name="Cashpayment" />
                                <label htmlFor="Self" className="relative cursor-pointer text-sm flex sm:items-center">
                                Cash/Self (No GST)
                                </label>
                            </div>
                        </div>
                    </InputContent>
                    <InputContent title={"GST (18%)"} titlestyle={"!mb-1"}>
                            <input type="text" name="" defaultValue="This will be automatically calculated" className="w-full bg-transparent ml-1" />
                    </InputContent>
                    <InputContent title={"Sub Total"} titlestyle={"!mb-1"}>
                        <span className="flex items-center">
                            ₹
                            <input type="number" name="" defaultValue="11800" className="w-full bg-transparent ml-1" />
                        </span>
                    </InputContent>
                    <InputContent title={"Deduction"} titlestyle={"!mb-1"}>
                        <span className="flex items-center">
                            ₹
                            <input type="number" name="" defaultValue="1000" className="w-full bg-transparent ml-1" />
                        </span>
                    </InputContent>
                    <InputContent title={"Total after deduction"} titlestyle={"!mb-1"}>
                        <span className="flex items-center">
                            ₹
                            <input type="number" name="" defaultValue="10800" className="w-full bg-transparent ml-1" />
                        </span>
                    </InputContent>
                    <InputContent title={"Deduction Reason"} titlestyle={"!mb-1"}>
                            <input type="text" name="" defaultValue="3 holidays of guards" className="w-full bg-transparent ml-1" />
                    </InputContent>
                    </div>
                    <div className="border-y border-black/5 dark:border-white/5 py-[18px] flex justify-end items-center">
                        <Button color="lightgrey" size="large" name={"Discard"} secondary={"true"} className={"!text-sm !px-4"}></Button>
                        <Button color="blacklight" size="large" className={"ml-4 !text-sm font-semibold mr-7 !px-4"} name={"Save Changes"}></Button>
                    </div>
                </div>
            </div>
            <div className="w-full md:max-w-[35%]">
                <div className="bg-primary-light dark:bg-white/5 rounded-2xl lg:pt-4 lg:pb-5 lg:px-6 sm:px-5 py-5 px-3 mb-7">
                    <div className={`${salaryCardOpen ? "block " : "hidden"}`}>
                    <h3 className="text-blacklight dark:text-white font-semibold text-lg leading-7"> Summary</h3>
                    <div>
                        <h4 className="text-2xl leading-9 text- font-semibold ">Sunil Kumar - ₹ 24,000</h4>
                        <div>
                            <ul className="text-xs leading-normal">
                                <li className="list-disc ml-[26px]">April 2023 Month Salary</li>
                                <li className="list-disc ml-[26px]">Deduction - ₹1000 </li>     
                            </ul>
                            <p className="leading-normal text-xs">Deduction Reason: 3 holidays</p>
                        </div>
                    </div>
                    </div>
                    <div className={`${expenseCardOpen ? "block " : "hidden"}`}>
                    <h3 className="text-blacklight dark:text-white font-semibold text-lg leading-5"> Summary</h3>
                    <div>
                        <h4 className="text-2xl leading-9 text- font-semibold ">Guard Service - ₹ 10,800</h4>
                        <div>
                            <ul className="text-xs leading-normal">
                                <li className="list-disc ml-[26px]">April 2023</li>
                                <li className="list-disc ml-[26px]">Amount - ₹10,000</li>
                                <li className="list-disc ml-[26px]">GST - ₹1800 </li>
                                <li className="list-disc ml-[26px]">Sub Total - ₹11,800</li>
                                <li className="list-disc ml-[26px]">Deduction - ₹1000 </li>
                                <li className="list-disc ml-[26px]">Total - ₹10,800</li>
                            </ul>
                            <p className="leading-normal text-xs">Deduction Reason: 3 holidays of guards</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MonthlyRadioBtn;
