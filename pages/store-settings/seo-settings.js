import React from 'react'
import Button from '@/components/ui/Button';
import SetupUpdate from "@/components/ui/SetupUpdate";
import Layout from '@/layouts/layout';

const SeoSettings= () => {
  return (
    <Layout container>
      <div className='bg-primary-light dark:bg-white/5 rounded-2xl p-4 md:p-6'>
        <h3 className='text-blacklight dark:text-white text-sm font-semibold mb-4'>Store SEO settings</h3>
        <div className='px-5 py-4 bg-white dark:bg-black/40 rounded-2xl mb-4 border border-black/10 dark:border-white/10 max-w-[520px] w-full'>
          <p className='text-black/40 dark:text-white/40 text-xs leading-[18px] pb-1'>Page title: <span className='font-semibold'>70</span> characters recommended.</p>
          <p className='text-blacklight dark:text-white text-sm	'>The title of your store’s homepage</p>
        </div>
        <div className='px-5 py-4 bg-white dark:bg-black/40 rounded-2xl mb-4 border border-black/10 dark:border-white/10 max-w-[520px] w-full'>
          <p className='text-black/40 text-xs	leading-[18px] dark:text-white/40 pb-1'>Meta description: 
          <span className='font-semibold'>156</span> characters recommended.</p>
          <p className='text-blacklight text-sm	dark:text-white'>Used in meta data and search results</p>
        </div>
        <SetupUpdate  className={"!item-start"} color={"primarypurple"} title={"Get help in writing the SEO title & description"} description={"Read our detailed piece on how to write the perfect SEO title & description for your store."} >
          <Button color={"lightgrey"} name={"Details"} className={"whitespace-nowrap"} secondary={"true"}/>
        </SetupUpdate>
      </div>
    </Layout>
  )
}

export default SeoSettings