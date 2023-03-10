import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import Alert from "@/components/ui/Alert";
import UnsavedChanges from "@/components/ui/UnsavedChanges";
import MultiselectDropdown from "@/components/ui/MultiselectDropdown";
import InputContent from "@/components/ui/InputContent";
import pillows from "@/assets/images/users/brown-throw-pillows.png";
import infoicon from "@/assets/images/icon/info-icon.svg";
import Restockicon from "@/assets/images/icon/restockicon.svg";
import userimg from "@/assets/images/users/userprofile.png";
import closeico from "@/assets/images/icon/close-circle.svg";
import Due from "@/assets/images/icon/Add-payment-due.svg";
import NoteCustomer from "@/assets/images/icon/warning-circle.svg";
import Layout from "@/layouts/layout";
import DateSelect from "@/components/ui/DateSelect";
import Modal from "@/components/ui/Modal";
import VarientDropdown from "@/components/ui/SelectOption";

const orders = () => {
  const Fulfilled = [
    {
      id: 1,
      productImg: pillows,
      product: "Brown Throw Pillows",
      productItem: "5",
      price: "₹19.99 × 5",
      totlePrice: "₹99.95",
    },
    {
      id: 2,
      productImg: pillows,
      product: "Brown Throw Pillows",
      productItem: "5",
      price: "₹19.99 × 5",
      totlePrice: "₹99.95",
    },
    {
      id: 3,
      productImg: pillows,
      product: "Brown Throw Pillows",
      productItem: "5",
      price: "₹19.99 × 5",
      totlePrice: "₹99.95",
    },
    {
      id: 4,
      productImg: pillows,
      product: "Brown Throw Pillows",
      productItem: "5",
      price: "₹19.99 × 5",
      totlePrice: "₹99.95",
    },
  ];

  const customer = [
    {
      id: 1,
      name: "Baalkrishan Lal Sani",
      phone: "",
      email: "",
      address:
        "Baalkrishan Lal Sani Exploit Cross-Platform Mindshare 52, Ekbal Society, ShwetaPur Pilani 459501 Pilani Rajasthan India",
      mobile: "+91 80735 89105",
    },
  ];
  const [customerData, setCustomerData] = useState(false);

  const [open, setOpen] = useState(false);
  const [openrestock, setOpenrestock] = useState(false);

  return (
    <Layout container>
      <PageHeader
        arrow={true}
        className={"mb-[28px] gap-y-3"}
        orderid={"#CM9805"}
        Badgesdata={[
          { color: "yellow", name: "Payment pending" },
          { color: "red", name: "Unfulfilled" },
          { color: "dot", name: "Paid" },
          { color: "dot", name: "Fulfilled" },
        ]}
      >
        <button className="py-[5px] sm:px-2 px-[1px] sm:mr-2 text-xs" type="button" onClick={() => setOpenrestock(true)}>
          Restock
        </button>
        <button className="py-[5px] sm:px-2 px-[1px] sm:mr-2 text-xs" type="button">
          Edit order
        </button>
        <Dropdown
          className="right-0 left-[unset] text-xs"
          itemsclass="left-2 top-[28px]"
          button={
            <div className="flex gap-2 items-center py-3 px-2 justify-end">
              More actions
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.646447 0.659675C0.841709 0.446775 1.15829 0.446775 1.35355 0.659675L4.64645 4.25C4.84171 4.4629 5.15829 4.4629 5.35355 4.25L8.64645 0.659676C8.84171 0.446776 9.15829 0.446776 9.35355 0.659676C9.54882 0.872575 9.54882 1.21775 9.35355 1.43065L6.06066 5.02098C5.47487 5.65967 4.52513 5.65968 3.93934 5.02098L0.646447 1.43065C0.451184 1.21775 0.451184 0.872574 0.646447 0.659675Z"
                  fill="black"
                  className="fill-black dark:fill-white"
                ></path>
              </svg>
            </div>
          }
          dropdownitem={[
            { id: 1, title: "Download", link: "/" },
            { id: 2, title: "Download", link: "/" },
          ]}
        />
      </PageHeader>
      <UnsavedChanges className={""}>
        <Button
          color={"white"}
          outline={"true"}
          size={"small"}
          name={"Discard"}
          className={"mr-5 dark:!border-blacklight dark:!text-blacklight !py-1"}
        />
        <Button color={"primarygreen"} name={"Save Changes"} className={"!py-[5px]"} />
      </UnsavedChanges>
      <div className="my-7">
        <Alert
          color={"green"}
          title={"Items fulfilled."}
          description={"20 items have been fulfilled."}
          alertStyle={"pb-3.5 outline-primary-greenb outline outline-1 border-0"}
        />
        <div className="mt-7">
          <Alert
            color={"green"}
            title={"Payment collected."}
            description={"Successfully marked payment as received."}
            alertStyle={"pb-3.5 outline-primary-greenb outline outline-1 border-0"}
          />
        </div>
        <div className="flex justify-between md:flex-row flex-col items-start xl:mt-9 mt-6 gap-y-8">
          <div className="bg-primary-light dark:bg-white/5 md:px-6 md:py-4 p-3 rounded-2xl w-full md:max-w-[52%]">
            <h2 className="text-blacklight dark:text-white font-semibold text-sm leading-5 pb-4"> Unfulfilled(4)</h2>
            <div className="bg-white dark:bg-black/40">
              <div className="overflow-x-auto">
                <table className="w-[640px] sm:w-full">
                  <tbody>
                    {Fulfilled.map((item, index) => (
                      <tr
                        className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5"
                        key={index}
                      >
                        <td className="py-2 pl-4 pr-2 max-w-[4%] w-full">
                          <Image src={item.productImg} alt="" className="w-full min-w-[24px] " />
                        </td>
                        <td className="py-2 max-w-[41%] w-full text-xs leading-[18px] font-normal whitespace-nowrap">
                          {item.product}
                        </td>
                        <td className="py-2 px-4 max-w-[9%] w-full text-xs leading-[18px] font-normal">
                          {item.productItem}
                        </td>
                        <td className="py-2 pr-4 max-w-[13%] w-full text-xs leading-[18px] font-normal whitespace-nowrap">
                          {item.price}
                        </td>
                        <td className="py-2 px-4 max-w-[7%] w-full text-xs leading-[18px] font-normal">
                          {item.totlePrice}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-end gap-4 w-full py-4 pr-7 border-b border-black/10 dark:border-white/10">
                <Button
                  secondary={"true"}
                  name={"Hold fulfillment"}
                  outline={"true"}
                  color={"grey"}
                  className="text-sm leading-[18px]"
                  size={"medium"}
                />
                <Button
                  color={"primarygreen"}
                  name={"Fulfill items"}
                  className="text-sm whitespace-nowrap leading-5"
                  size={"medium"}
                />
              </div>
            </div>
            <h2 className="text-blacklight dark:text-white font-semibold text-sm leading-5 pt-4 pb-3.5">Pending</h2>
            <div className="bg-white dark:bg-black/40 mb-3.5">
              <div className="overflow-x-auto">
                <table className="w-[640px] sm:w-full">
                  <tbody className="w-full">
                    <tr className="text-blacklight border-b dark:text-white border-black/5 dark:border-white/5 w-full">
                      <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] pl-4">
                        Subtotal
                      </td>
                      <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] px-4">
                        20 items
                      </td>
                      <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] text-right pr-4">
                        ₹1,019.91
                      </td>
                    </tr>
                    <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                      <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] pl-4">Tax</td>
                      <td className="font-normal text-xs leading-[18px] text-green2 max-w-[33.33%] w-full py-[11px] px-4">
                        <Link className="flex whitespace-nowrap text-primary-greenb" href={"/"}>
                          Show tax details
                          <Image src={infoicon} alt="" className="ml-[5px]" />
                        </Link>
                      </td>
                      <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] text-right pr-4">
                        ₹183.58
                      </td>
                    </tr>
                    <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                      <td className="font-semibold text-sm max-w-[33.33%] w-full py-2.5 pl-4">Total</td>
                      <td className="max-w-[33.33%] w-full py-2.5	px-4"></td>
                      <td className="font-semibold text-sm max-w-[33.33%] w-full py-2.5	pr-4 text-right">₹1,203.49</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white dark:bg-black/40">
              <table className="w-full">
                <tbody className="w-full">
                  <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                    <td className="w-full max-w-[50%] pl-4 py-[11px] text-xs leading-[18px]">Paid by customer</td>
                    <td className="w-full max-w-[50%] pr-4 py-[11px] text-xs leading-[18px] text-right">₹0.00</td>
                  </tr>
                  <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                    <td className="w-full max-w-[50%] pl-4 py-[11px] text-xs leading-[18px]">No payment due date</td>
                    <td className="w-full max-w-[50%] pr-4 py-[11px] font-normal text-xs leading-[18px] text-green2 relative">
                      <div
                       className="flex justify-end text-primary-greenb">
                        <DateSelect placeholder={"Add due date"} className=""></DateSelect>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                    <td className="w-full max-w-[50%] pl-4 py-2.5 text-sm font-semibold">Balance (owed by customer)</td>
                    <td className="w-full max-w-[50%] pr-4 py-2.5 text-sm font-semibold text-right">₹1,203.49</td>
                  </tr>
                </tbody>
              </table>
              <div className="py-4 px-4 flex gap-4 justify-end border-b items-center border-black/10 dark:border-white/10 sm:flex-nowrap flex-wrap">
                <Button
                  outline={"true"}
                  secondary={"true"}
                  color={"grey"}
                  name={"Send invoice"}
                  className="text-lg leading-[18px]"
                  size={"medium"}
                />
                <Dropdown
                  className="right-0 left-[unset] flex justify-end"
                  itemsclass="p-2 z-[1]"
                  button={
                    <div className="flex gap-2 items-center px-4 justify-end py-2 text-sm lg:text-lg font-semibold transition-all duration-500 rounded-lg text-white bg-primary-greenb">
                      Collect payment
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.55806 7.07459C4.80214 6.80847 5.19786 6.80847 5.44194 7.07459L9.55806 11.5625C9.80214 11.8286 10.1979 11.8286 10.4419 11.5625L14.5581 7.07459C14.8021 6.80847 15.1979 6.80847 15.4419 7.07459C15.686 7.34072 15.686 7.77219 15.4419 8.03832L11.3258 12.5262C10.5936 13.3246 9.40641 13.3246 8.67418 12.5262L4.55806 8.03831C4.31398 7.77219 4.31398 7.34072 4.55806 7.07459Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  }
                  dropdownitem={[
                    { id: 1, title: "Enter credit card", link: "/" },
                    { id: 2, title: "Mark as paid", link: "/" },
                    { id: 3, title: "Mark as COD", link: "/" },
                  ]}
                />
              </div>
            </div>
            <InputContent title={"Add tags"} className={"mt-4 w-full max-w-[400px] cursor-pointer"}>
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
            <div className="max-w-[400px] w-full mt-4"></div>
          </div>
          <div className="bg-primary-light dark:bg-white/5 py-5 px-4 rounded-2xl w-full md:max-w-[46%]">
            <div className="bg-primary-purple/50 dark:bg-black/40 flex items-start p-4 rounded-lg">
              <Image src={NoteCustomer} alt="" className="mr-1 font-normal text-sm dark:invert" />
              <div>
                <h4 className="flex">Note from customer</h4>
                <p className="text-sm leading-[18px] text-black/40 dark:text-white/40">
                  Sample note from customer during checkout.
                </p>
              </div>
            </div>
            <div>
              <div className="flex justify-between sm:flex-nowrap flex-wrap my-[15px] items-center gap-2">
                <h3 className="text-blacklight dark:text-white font-semibold text-sm">Customer Details</h3>

                <div className="flex gap-1">
                  <Button
                    color={"blacklight"}
                    name={"Remove Customer"}
                    className="!py-2 px-[12px] leading-[18px]"
                    onClick={() => setCustomerData(true)}
                  />
                  <Button
                    color={"blacklight"}
                    name={"Add Customer"}
                    className="!py-2 px-[12px] leading-[18px]"
                    onClick={() => setOpen(true)}
                  />
                </div>


              </div>

              <>
                {customer.map((item, index) => (
                  <div key={index}>
                    <div className="flex w-full mb-4 flex-wrap sm:flex-nowrap">
                      <p className="text-black/40 dark:text-white/40 text-xs leading-[18px] font-normal  sm:max-w-[44%] w-full">
                        Name
                      </p>
                      <p className="text-blacklight dark:text-white text-sm font-normal">
                        {item.name ? (
                          item.name
                        ) : (
                          <>
                            No name provided
                            <Button
                              secondary={"true"}
                              name={"Add Name"}
                              outline={"true"}
                              color={"grey"}
                              className="text-sm leading-[18px] ml-2"
                              size={"medium"}
                            />
                          </>
                        )}
                      </p>
                    </div>
                    <div className="flex mb-4 w-full flex-wrap sm:flex-nowrap items-center">
                      <p className="text-black/40 dark:text-white/40 text-xs leading-[18px] font-normal sm:max-w-[44%] w-full ">
                        Phone
                      </p>
                      <p className="text-blacklight dark:text-white text-sm font-normal ">
                        {item.phone ? (
                          item.phone
                        ) : (
                          <>
                            No phone provided
                            <Button
                              secondary={"true"}
                              name={"Add Phone"}
                              outline={"true"}
                              color={"grey"}
                              className="text-sm leading-[18px] ml-2"
                              size={"medium"}
                            />
                          </>
                        )}
                      </p>
                    </div>
                    <div className="flex mb-4 w-full flex-wrap sm:flex-nowrap items-center">
                      <p className="text-black/40 dark:text-white/40 text-xs leading-[18px] font-normal sm:max-w-[44%] w-full">
                        Email
                      </p>
                      <p className="text-blacklight dark:text-white text-sm font-normal ">
                        {item.email ? (
                          item.email
                        ) : (
                          <>
                            No email provided
                            <Button
                              secondary={"true"}
                              name={"Add email"}
                              outline={"true"}
                              color={"grey"}
                              className="text-sm leading-[18px] ml-2"
                              size={"medium"}
                            />
                          </>
                        )}
                      </p>
                    </div>
                    <div className="flex w-full flex-wrap sm:flex-nowrap">
                      <p className="text-black/40 dark:text-white/40 text-xs leading-[18px] font-normal sm:max-w-[44%] w-full">
                        Address
                      </p>
                      {item.address ? (
                        <div className="text-blacklight dark:text-white text-sm font-normal lg:max-w-[55%] w-full flex items-center ">
                          <p>
                            {item.address}
                            <Link className="block" href={""}>
                              {item.mobile}
                            </Link>
                          </p>
                          <Button
                            secondary={"true"}
                            size={"medium"}
                            color={"grey"}
                            outline={"true"}
                            name={"Edit"}
                            className="md:ml-2 leading-[18px]"
                          />
                        </div>
                      ) : (
                        <>
                          No address provided
                          <Button
                            secondary={"true"}
                            name={"Add address"}
                            outline={"true"}
                            color={"grey"}
                            className="text-sm leading-[18px] ml-2"
                            size={"medium"}
                          />
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </>

            </div>
          </div>
        </div>
      </div>
      <Modal open={openrestock} setOpen={setOpenrestock}>
        <div className="sm:p-2">
          <Image src={Restockicon} className={"mx-auto"} />
          <div className="text-center md:py-8 py-5 max-w-[672px] w-full">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">Restock items</h2>
            <p className="text-black/40 dark:text-white/40 md:pt-8 pt-5">Restocking will update the inventory of the selected items to the specified quantity. This will allow customers to purchase the items that were previously out of stock. Are you sure you want to restock these items?</p>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              color="lightgrey"
              onClick={() => setOpenrestock(false)}
              secondary="true"
              name={"Cancel"}
              className={"text-sm sm:!py-[18px] !py-3 max-w-[232px] w-full font-semibold"}
            ></Button>
            <Button color="bluedark" className={"sm:!py-[18px] !py-3 text-sm font-semibold max-w-[232px] w-full"} name={"Restock items"}></Button>
          </div>
        </div>
      </Modal>
      <Modal open={open} setOpen={setOpen} className={"max-w-[544px] w-full mx-auto sm:px-6 px-3"}>
        <div className="sm:px-2">
          <div className="flex items-center justify-between md:pb-8 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">Add customer to order</h2>
            <Image src={closeico} alt="" onClick={() => setOpen(false)} className={"cursor-pointer dark:invert"} />
          </div>
          <p className="text-black/80  dark:text-white/80 font-semibold">Select customer</p>
          <InputContent className={"mt-4 cursor-pointer py-3 px-4"}>
            <MultiselectDropdown
              className={"itemselect"}
              roundClose
              options={[
                {
                  cat: "tag 1",
                  key: "Kathryn Murphy",
                },
                {
                  cat: "tag 2",
                  key: "Kathryn Murphy",
                },
                {
                  cat: "tag 3",
                  key: "Kathryn Murphy",
                },
              ]}
              selectedValues={[
                {
                  cat: "heena09887@gmail.com",
                  key: "Kathryn Murphy",
                },
              ]}
            />
          </InputContent>
          <div className="flex justify-end items-center gap-4 md:pt-6 pt-2 mx-auto">
            <Button
              color="lightgrey"
              secondary="true"
              name={"Cancel"}
              className={"sm:!py-[18px] !py-3 text-sm !px-3 w-full rounded-2xl font-semibold"}
              onClick={() => setOpen(false)}
            ></Button>
            <Button
              color="bluedark"
              secondary="true"
              name={"Add customer"}
              className={"sm:!py-[18px] !py-3 text-sm !px-3 w-full rounded-2xl font-semibold"}
            ></Button>
          </div>
        </div>
      </Modal>

      <Modal open={customerData} setOpen={setCustomerData} className={"max-w-[544px] w-full mx-auto sm:px-6 px-3"}>
        <div className="sm:px-2 pb-2">
          <div className="flex items-center justify-between md:pb-8 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">
              Remove customer from order
            </h2>
            <Image
              src={closeico}
              alt=""
              onClick={() => setCustomerData(false)}
              className={"cursor-pointer dark:invert"}
            />
          </div>
          <p className="text-black/40 dark:text-white/40">
            Are you sure you want to remove this customer from the order? Removing the customer from the order will disassociate the order from the customer's account. Please confirm if you want to proceed with removing the customer from the order.
          </p>
          <div className="flex items-center gap-4 py-8">
            <Image src={userimg} alt="" />
            <div>
              <h3 className="font-semibold text-black/80 dark:text-white/80">Kathryn Murphy</h3>
              <Link href={""} className={"text-black/80 dark:text-white/80 pt-2 block break-all"}>
                KathrynMurphy5286@email.com
              </Link>
            </div>
          </div>
          <div className="flex justify-end sm:flex-nowrap flex-wrap items-center gap-4 mx-auto">
            <Button
              color="winered"
              name={"Transfer ownership"}
              className={"sm:!py-[18px] !py-3 text-sm sm:!px-4 w-full rounded-2xl font-semibold"}
            ></Button>
            <Button
              color="lightgrey"
              secondary="true"
              name={"Cancel"}
              className={"sm:!py-[18px] !py-3 text-sm sm:!px-4 w-full rounded-2xl font-semibold"}
              onClick={() => setCustomerData(false)}
            ></Button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default orders;
