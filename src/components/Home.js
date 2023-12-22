import React from 'react'
import dices from '../assets/dices.png'

export default function Home() {
    return (
        <div>
            <div className='flex gap-[5px]' style={{ width: "1182px", height: "522px", marginTop: "180px", marginLeft: "129px" }}>
                <div>
                    <img src={dices} alt="dices image" />
                </div>
                <div className='flex items-center' >
                    <div className='flex flex-col items-center' style={{ width: "528px", height: "188px" }}>
                        <div style={{ fontFamily: "poppins", fontSize: "96px", fontWeight: "700", lineHeight: "144px" }}>
                            DICE GAME
                        </div>
                        <div className='ml-[300px]'>
                            <button className="border w-[220px] h-[44px] rounded-[5px] bg-[rgba(0,0,0,1)] text-white text-lg font-bold">Play Now</button>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    )
}
