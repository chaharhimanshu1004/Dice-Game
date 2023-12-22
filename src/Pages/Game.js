import React from 'react'

export default function Game() {
  return (
    <div>
        <div className='flex gap-[593px] w-[1280px] h-[151px] mt-[64px] ml-[80px]'>
            <div className='w-[135px] h-[151px] mt-[-30px]'>
                <div className='flex flex-col'>
                    <p style={{fontSize:"100px",fontFamily:"poppins",fontWeight:"500"}}>0</p>
                    <p className='mt-[-35px]' style={{fontSize:"24px",fontFamily:"poppins",fontWeight:"500"}} >Total Score</p>
                </div>
            </div>
            <div className='w-[552px] h-[138px]  '>
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

    </div>
  )
}
