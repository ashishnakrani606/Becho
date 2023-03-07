import React from "react";
import TabList from "@/components/store-settings/tab-list";
import Fulllogo from "@/assets/images/img/full-logo.png";
import Squarelogo from "@/assets/images/img/square-logo.png";
import CoverImage from "@/assets/images/img/cover-image.png";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Layout from "@/layouts/layout";
import { SketchPicker } from 'react-color'

const Social = [
  {
    name: "Facebook",
    text: "pilani",
  },
  {
    name: "Twitter",
    text: "Text",
  },
  {
    name: "Instagram",
    text: "pilani",
  },
  {
    name: "Youtube",
    text: "pilani",
  },
  {
    name: "TikTok",
    text: "pilani",
  },
  {
    name: "Snapchat",
    text: "pilani",
  },
  {
    name: "Koo",
    text: "pilani",
  },
  {
    name: "Pinterest",
    text: "pilani",
  },
];

const BrandAssets = () => {
  return (
    <Layout container>
      <TabList />
      <div>
        <div className="pb-2.5 border-b border-black/20 dark:border-white/20 max-w-[571px]">
          <h3 className="text-blacklight dark:text-white text-lg font-semibold">Logos & cover image</h3>
          <div>
            <Image src={Fulllogo} alt="" className="pt-2.5 pb-[11px] dark:invert" />
            <p className="text-black/80 dark:text-white/80 text-xs leading-[18px]">
              Full Logo:
              <span className="text-black/40 dark:text-white/40">
                Allowed file types: png, jpg, jpeg. Recommended width: 512 pixels minimum
              </span>
            </p>
          </div>
          <div>
            <Image src={Squarelogo} alt="" className="pt-2.5 pb-2" />
            <p className="text-black/80 dark:text-white/80 text-xs	leading-[18px] pl-2">
              Square Logo:
              <span className="text-black/40 dark:text-white/40">
                Allowed file types: png, jpg, jpeg. Recommended: 512x512 pixels minimum
              </span>
            </p>
          </div>
          <div>
            <Image src={CoverImage} alt="" className="pt-2.5 p-0.5	" />
            <p className="text-black/80 dark:text-white/80 text-xs	leading-[18px]">
              Cover Image:
              <span className="text-black/40 dark:text-white/40">Allowed file types: png, jpg, jpeg. Ratio: 16:9</span>
            </p>
          </div>
        </div>
        <div className="py-2.5 border-b border-black/20 dark:border-white/20  max-w-[571px]">
          <h3 className="font-semibold text-lg">Colors</h3>
          <div className="max-w-[75px] w-full h-[75px] bg-[#00A82D] rounded-[10px] my-2.5 "></div>
          <p className="text-xs leading-[18px]">Primary color: #00A82D</p>
          {/* <SketchPicker/> */}
          <div className="max-w-[75px] w-full h-[75px] bg-gray-1 rounded-[10px] my-2.5"></div>
          <p className="text-xs leading-[18px]">Contrasting color: #333333</p>
          <div className="max-w-[75px] w-full h-[75px] bg-[#FFE899] rounded-[10px] my-2.5"></div>
          <p className="text-xs leading-[18px]">Secondary color: #FFE899</p>
        </div>
        <div className="pt-2.5 pb-8">
          <h3 className="text-lg font-semibold mb-2.5">Other details</h3>
          <div className="p-3 sm:py-4  sm:px-5 border rounded-lg	border-black/10 dark:border-white/10 mb-2.5">
            <lable className="text-black/40 dark:text-white/40 text-xs pb-1	leading-[18px]">Slogan</lable>
            <div contenteditable="true" className="text-blacklight dark:text-white text-sm outline-none">
              Brand statement or tagline often used along with your logo
            </div>
          </div>
          <div className="py-4 px-5 border rounded-lg	border-black/10 dark:border-white/10 mb-2.5">
            <label htmlFor={""} className="text-black/40 dark:text-white/40 text-xs pb-1	leading-[18px]">Short description</label>
            <div contentEditable="true" className="text-blacklight dark:text-white text-sm outline-none">
              Organize your thoughts with an outline. Here’s the outlining strategy I use. I promise it works like a
              charm. Not only will it make writing your blog post easier, it’ll help you make your message.
            </div>
          </div>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-[15px] gap-y-2.5 ">
            {Social.map((items , index) => (
              <div className="border rounded-lg border-black/10 dark:border-white/10 px-5 py-4" key={index}>
                <label htmlFor={""} className="text-xs	leading-[18px] pb-1 text-black/40 dark:text-white/40">{items.name}</label>
                <div contenteditable="true" className="text-blacklight text-sm dark:text-white outline-none">{items.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="border-y border-black/5 dark:border-white/5 py-[18px] flex justify-end items-center">
          <Button color="lightgrey" size="large" secondary="true" name={"Discard"} className={"text-sm !px-4"}></Button>
          <Button
            color="blacklight"
            size="large"
            className={"ml-4 mr-7 !px-4 text-sm font-semibold"}
            name={"Save Changes"}
          ></Button>
        </div>
      </div>
    </Layout>
  );
};

export default BrandAssets;
