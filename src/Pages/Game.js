import React from 'react'
import { useState } from 'react';



export default function Game() {
    const [currentNum,setCurrentNum] = useState(1);

    function generateRandom(){
        return Math.floor(Math.random() * 6) + 1;
    }
    function setTostate(){
        const randomNum = generateRandom();
        setCurrentNum((prev)=>randomNum);
    }
    console.log(currentNum);
    

    
  return (

    <div>
        <div className='flex gap-[593px] w-[1280px] h-[151px] mt-[64px] ml-[80px]'>
            <div className='w-[135px] h-[151px] mt-[-30px]'>
                <div className='flex flex-col'>
                    <p style={{fontSize:"100px",fontFamily:"poppins",fontWeight:"500"}}>0</p>
                    <p className='mt-[-35px]' style={{fontSize:"24px",fontFamily:"poppins",fontWeight:"500"}} >Total Score</p>
                </div>
            </div>
            <div className='w-[552px] h-[138px] '>
                <div className='flex gap-[30px] '>
                <button className='border-[1px] border-black w-[72px] h-[72px] font-bold'>1</button>
                <button className='border-[1px] border-black w-[72px] h-[72px] font-bold'>2</button>
                <button className='border-[1px] border-black w-[72px] h-[72px] font-bold'>3</button>
                <button className='border-[1px] border-black w-[72px] h-[72px] font-bold'>4</button>
                <button className='border-[1px] border-black w-[72px] h-[72px] font-bold'>5</button>
                <button className='border-[1px] border-black w-[72px] h-[72px] font-bold'>6</button>
                </div>
                <div className='w-[182px] h-[36px] mt-4 ml-[431px]'>
                    <h1 className='font-bold' style={{fontFamily:"poppins"}}>Select Number</h1>
                </div>
                
            </div>
        </div>
        <div className='max-w-[250px] max-h-[449px] mt-[70px] ml-[595px] flex flex-col items-center justify-center'>
            <div className='max-w-[170px] max-h-[160px]'>
                <button onClick={setTostate}>
                    <img src ={`/images/assets/dice${currentNum}.png`} alt="cube image" />
                </button>   
            </div>
            <div className='ml-1'>
                <p className='mt-6' style={{fontFamily:"poppins",fontWeight:"600"}}>Click on dice to roll</p>
            </div>
            <div   className='flex mt-7 ml-1 flex-col gap-[18px]'>
                <div className='rounded-sm'>
                    <button style={{fontFamily:"poppins",fontWeight:"600",padding:"10px 15px 10px 15px"}} className='w-[157px] rounded-sm border-[1px] border-black'>Reset Score</button>

                </div>
                <div className='text-white rounded-sm bg-[rgba(0,0,0,1)]'>
                    <button  style={{fontFamily:"poppins",fontWeight:"600",padding:"10px 15px 10px 15px"}} className='w-[157px] rounded-sm border-[1px] border-black'>Show rules</button>

                </div>
            </div>

        </div>

    </div>
  )
}
