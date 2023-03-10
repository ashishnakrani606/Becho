import React, {useState , useEffect} from "react";
import TabList from "@/components/store-settings/tab-list";
import Fulllogo from "@/assets/images/img/full-logo.png";
import Squarelogo from "@/assets/images/img/square-logo.png";
import CoverImage from "@/assets/images/img/cover-image.png";
import EditImageIcon from "@/assets/images/icon/edit-Image-icon.svg";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Layout from "@/layouts/layout";
import InputColor from 'react-input-color';

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

  const [primaryColor, setPrimaryColor] = useState({});
  const [contrastingColor, setContrastingColor] = useState({});
  const [secondaryColor, setSecondaryColor] = useState({});

  // fulllogo
  const [fulllogo, setFullLogo] = useState()
  const [previewFulllogo, setPreviewFulllogo] = useState()
  useEffect(() => {
    if (!fulllogo) {
        setPreviewFulllogo(undefined)
        return
    }
    const objectUrl = URL.createObjectURL(fulllogo)
    setPreviewFulllogo(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [fulllogo])
  const onSelectFullLogo = e => {
    if (!e.target.files || e.target.files.length === 0) {
        setFullLogo(undefined)
        return
    }
    setFullLogo(e.target.files[0])
  } 
  // squareLogo
  const [squareLogo, setSquareLogo] = useState()
  const [previewSquareLogo, setPreviewSquareLogo] = useState()
  useEffect(() => {
    if (!squareLogo) {
        setPreviewSquareLogo(undefined)
        return
    }
    const objectUrl = URL.createObjectURL(squareLogo)
    setPreviewSquareLogo(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [squareLogo])
  const onSelectSquareLogo = e => {
    if (!e.target.files || e.target.files.length === 0) {
        setSquareLogo(undefined)
        return
    }
    setSquareLogo(e.target.files[0])
  } 
  // CoverImage
  const [coverImage, setCoverImage] = useState()
  const [previewCoverImage, setPreviewCoverImage] = useState()
  useEffect(() => {
    if (!coverImage) {
        setPreviewCoverImage(undefined)
        return
    }
    const objectUrl = URL.createObjectURL(coverImage)
    setPreviewCoverImage(objectUrl)
    return () => URL.revokeObjectURL(objectUrl)
  }, [coverImage])
  const onSelectCoverImage = e => {
    if (!e.target.files || e.target.files.length === 0) {
        setCoverImage(undefined)
        return
    }
    setCoverImage(e.target.files[0])
  }

  return (
    <Layout container>
      <TabList />
      <div>
        <div className="pb-2.5 border-b border-black/20 dark:border-white/20 max-w-[571px]">
          <h3 className="text-blacklight dark:text-white text-lg font-semibold">Logos & cover image</h3>
          <div>
            <div className="flex items-center">
              {fulllogo ?
                <img src={previewFulllogo} alt="" className="pt-2.5 pb-[11px] dark:invert" /> 
                :
                <Image src={Fulllogo} alt="" className="pt-2.5 pb-[11px] dark:invert" />
              }
              <label htmlFor="full-logo" className="p-1.5 ml-4 cursor-pointer border border-black/10 rounded-2xl min-w-[30px]">
                <Image src={EditImageIcon} alt="" width="" className="dark:invert" />
                <input type='file' id='full-logo' onChange={onSelectFullLogo} />
              </label>
            </div>
            {/* {fulllogo &&  <img src={preview} />} */}
            <p className="text-black/80 dark:text-white/80 text-xs leading-[18px]">
              Full Logo: 
              <span className="text-black/40 dark:text-white/40 pl-1">
                Allowed file types: png, jpg, jpeg. Recommended width: 512 pixels minimum
              </span>
            </p>
          </div>
          <div>
            <div className="flex items-center">
              {squareLogo ?
                <img src={previewSquareLogo} alt="" className="pt-2.5 pb-[11px] dark:invert" /> 
              :  
                <Image src={Squarelogo} alt="" className="pt-2.5 pb-[11px] dark:invert" />
              }
              <label htmlFor="square-logo" className="p-1.5 ml-4 cursor-pointer border border-black/10 rounded-2xl min-w-[30px]">
                <Image src={EditImageIcon} alt="" className="dark:invert" />
                <input type='file' id='square-logo' onChange={onSelectSquareLogo} /> 
              </label>
            </div>
            <p className="text-black/80 dark:text-white/80 text-xs	leading-[18px]">
              Square Logo: 
              <span className="text-black/40 dark:text-white/40 pl-1">
                Allowed file types: png, jpg, jpeg. Recommended: 512x512 pixels minimum
              </span>
            </p>
          </div>
          <div>
            <div className="flex items-center">
              {coverImage ?
                <img src={previewCoverImage} alt="" className="pt-2.5 pb-[11px] dark:invert" /> 
              :  
                <Image src={CoverImage} alt="" className="pt-2.5 pb-[11px] dark:invert" />
              }
              <label htmlFor="coverImage" className="p-1.5 ml-4 cursor-pointer border border-black/10 rounded-2xl min-w-[30px]">
                <Image src={EditImageIcon} alt="" className="dark:invert" />
                <input type='file' id='coverImage' onChange={onSelectCoverImage} /> 
              </label>
            </div>
            <p className="text-black/80 dark:text-white/80 text-xs	leading-[18px]">
              Cover Image:
              <span className="text-black/40 dark:text-white/40 pl-1">Allowed file types: png, jpg, jpeg. Ratio: 16:9</span>
            </p>
          </div>
        </div> 
        <div className="py-2.5 border-b border-black/20 dark:border-white/20 max-w-[571px]">
          <h3 className="font-semibold text-lg">Colors</h3>
          <div className="max-w-[75px] w-full h-[75px] rounded-[10px] my-2.5 overflow-hidden">
            <InputColor initialValue="#00A82D" onChange={setPrimaryColor} placement="right" 
              style={{ 
                backgroundColor: primaryColor.rgba, 
                width: '100%',
                height: '100%',
                border: 'none',
              }}/>
          </div>
          <p className="text-xs leading-[18px]">Primary color: {primaryColor.hex}</p>
          <div className="max-w-[75px] w-full h-[75px] rounded-[10px] my-2.5 overflow-hidden">
            <InputColor initialValue="#333333" onChange={setContrastingColor} placement="right" 
              style={{ 
                backgroundColor: contrastingColor.rgba, 
                width: '100%',
                height: '100%',
                border: 'none',
              }}/>
          </div>
          <p className="text-xs leading-[18px]">Contrasting color: {contrastingColor.hex}</p>
          <div className="max-w-[75px] w-full h-[75px] rounded-[10px] my-2.5 overflow-hidden">
            <InputColor initialValue="#FFE899" onChange={setSecondaryColor} placement="right" 
              style={{ 
                backgroundColor: secondaryColor.rgba, 
                width: '100%',
                height: '100%',
                border: 'none',
              }}/>
          </div>
          <p className="text-xs leading-[18px]">Secondary color: {secondaryColor.hex}</p>
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
