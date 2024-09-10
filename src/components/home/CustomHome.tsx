/*
 * @Author: cci
 * @Date: 2024-08-29 22:58:43
 * @LastEditors: cci
 * @LastEditTime: 2024-09-11 03:41:58
 * @Description: 
 * 
 * Copyright (c) 2024 by TGM All Rights Reserved. 
 */

'use client';
import Image from 'next/image'
import CustomButton from '../common/CustomButton'
const CustomHome = () => {
    const handleScroll = () => {
        console.log("scroll")
    }
    return (
        <div className='home'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='home__title'>
                    锈化动力，探索世界的可靠伙伴
                </h1>
                <p className='home__subtitle'>
                    致力于为您提供可靠、实用、省心的汽车购买平台
                </p>
                <CustomButton
                    title="探索车型"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className='home__image-container'>
                <div className='home__image'>
                    <Image src="/home.png"
                        alt='home'
                        fill className='object-contain'
                    />
                    
                </div>
                <div className='home__image-overlay' />
            </div>
        </div>
    )
}

export default CustomHome