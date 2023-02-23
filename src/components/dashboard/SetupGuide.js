import React, { useState, useEffect } from 'react'
import SetupGuideBox from "../../components/dashboard/SetupGuideBox";
import Link from 'next/link'; 
import Image from 'next/image';
import Button from '../ui/Button';
import Subtract from "../../assets/images/icon/Subtract.svg";
import AddBrandAssets from "../../assets/images/img/add-brand-assets.svg";
import customDomain from "../../assets/images/img/custom-domain.svg";
import firstProduct from "../../assets/images/img/first-product.svg";
 
const SetupGuide = ({setOpenDashboard}) => {

  const [openkey, setOpenkey] = useState('brand_assets'); 
 
  const brandassetsHandler= () =>  { 
    openkey == 'brand_assets' ? (setOpenkey('first_product')) : "" 
  }

  const firstProductHandler= () =>  { 
    openkey == 'first_product' ? (setOpenkey('custom_domain')) : ""
  }
  
  const AddDomainHandler= () =>  { 
    openkey == 'first_product' ? (setOpenkey('custom_domain')) : ""
    setOpenDashboard(true)
  }

  console.log('openkey', openkey);
 
  return (
    <>
      <div className="md:px-3 w-full max-w-[456px] mx-auto pb-[21px]">
        <div className="flex items-center text-blacklight dark:text-white justify-between mb-4">
          <h3 className="font-semibold">Setup Guide</h3>
        </div> 
        <SetupGuideBox
          title={'Add brand assets'}
          openKey={'brand_assets'}
          iconOpacity={`${openkey == 'first_product' || openkey == 'custom_domain' ? 'opacity-100 dark:opacity-100 ' : 'opacity-10 dark:opacity-100  dark:invert'}`} 
          isActive={openkey}  
          className={""}>
          <div className={'flex mt-4 pl-2 sm:flex-row flex-col'}>
          <Image src={AddBrandAssets} alt=""/>
            <div className='mt-[19px] pl-6'>
              <h3 className='font-semibold mb-[6px] text-black'>Add brand assets</h3>
              <p className='text-xs text-black'>
                Boost your brand with a logo and other assets. 
                <Link href={"#0"} className={'text-[#2F80ED]'}> Learn more about branding.</Link>
              </p>
              <div className='mt-3 flex' >
                <Button color="yellow" name={'Add brand assets'} secondary={"true"} className="font-semibold text-blacklight" onClick={brandassetsHandler} /> 
              </div>
              <Image className={`absolute right-4 bottom-3 opacity-10 dark:invert dark:opacity-100`} src={Subtract} alt="" />
            </div>  
          </div>
        </SetupGuideBox> 
        <SetupGuideBox  
          title={'Add your first product'} 
          openKey={'first_product'}
          iconOpacity={`${openkey == 'custom_domain' ? 'opacity-100 dark:opacity-100' : 'opacity-10 dark:opacity-100  dark:invert'}`} 
          isActive={openkey}>
          <div className={'flex mt-4 pl-2 sm:flex-row flex-col'}>
            <Image src={firstProduct} alt="" className=''/>
            <div className='mt-[19px] pl-6'>
              <h3 className='font-semibold mb-[6px] text-blacklight'>Add your first product</h3>
              <p className='text-xs text-blacklight'>
                Create product descriptions, add images, and set prices for items to be sold. Learn about products.
              </p>
              <div className='mt-3 flex '>
                <Button color="yellow" name={"Add product"} secondary={"true"} className="font-semibold" onClick={firstProductHandler} />
                <Button color="grey" name={'Import'} secondary={"true"} className="font-semibold ml-5" />
              </div>
              <Image className={`absolute right-4 bottom-3 opacity-10 dark:opacity-100 dark:invert`} src={Subtract} alt="" />
            </div>  
          </div>
        </SetupGuideBox> 
        <SetupGuideBox 
          title={'Add a custom domain'} 
          openKey={'custom_domain'}
          iconOpacity={'opacity-10 dark:opacity-100 dark:invert'} 
          isActive={openkey}>
          <div className={'flex mt-4 pl-2 sm:flex-row flex-col'}>
            <Image src={customDomain} alt="" className=''/>
            <div className='mt-[19px] pl-6'>
              <h3 className='font-semibold mb-[6px] text-blacklight'>Add a custom domain</h3>
              <p className='text-xs text-blacklight'>
                Use custom domain to make it easier for customers to find your store. Learn about domains.
              </p>
              <div className='mt-3 flex '>
                <Button color="yellow" name={"Add domain"} secondary={"true"} className="font-semibold text-blacklight" onClick={AddDomainHandler} /> 
              </div>
              <Image className={`absolute right-4 bottom-3 opacity-10 dark:opacity-100 dark:invert`} src={Subtract} alt="" />
            </div>  
          </div>
        </SetupGuideBox> 
      </div>
    </>
  )
}

export default SetupGuide
