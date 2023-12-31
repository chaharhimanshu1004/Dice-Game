import React from 'react'
import { useState } from 'react';

export default function Game() {
    const [currentNum,setCurrentNum] = useState(1);
    const [userNum,setUserNum] = useState(undefined);
    const [activeState,setActiveState] = useState(null);
    const [score,setScore] = useState(0);
    const [showRules,setShowRules] = useState(false);
    const [error,setError] = useState("");
    const[btnColor,setBtnColor] = useState([
        {bg:'rgba(255,255,255,1)',text:'black'},
        {bg:'rgba(255,255,255,1)',text:'black'},
        {bg:'rgba(255,255,255,1)',text:'black'},
        {bg:'rgba(255,255,255,1)',text:'black'},
        {bg:'rgba(255,255,255,1)',text:'black'},
        {bg:'rgba(255,255,255,1)',text:'black'},
    ])  

    function generateRandom(){
        return Math.floor(Math.random() * 6) + 1;
    }
    function setTostate(e){
        
        if(!activeState){
            setError("You have not selected any number");
            return;
        }
        setError(false);
        const randomNum = generateRandom();
        setCurrentNum(randomNum);
        if(userNum==randomNum){
            setScore((prev)=>prev+randomNum);
        }else{
            setScore((prev)=>prev-2);
        }
        setActiveState(null);
        changeColor();
    }
    function handleClick(e){
        setUserNum(e.target.value);
        setActiveState(e.target.value);
        changeColor(e.target.value);
    }
    // onClick -- >> active state bna diya -->>
    // then us active state pe sbke colors change kiya -->>  if active state h to color change krdo vrna white bg hi rehne do..hr bar re render har bar change krna h yeh
    function changeColor(value){
        const newColors = btnColor.map((btn, index) => {
            return {
              bg: index + 1 === parseInt(value, 10) ? 'black' : 'rgba(255,255,255,1)',
              text: index + 1 === parseInt(value, 10) ? 'white' : 'black',
            };
        });
        setBtnColor(newColors);
    }
    function resetSc(){
        setScore(0);
    }

    
  return (
<div>
    {/* // 6 values --->> sirf ek value ko hi change to kaise?? */}

    <div>
        <div className='flex gap-[593px] w-[1280px] h-[151px] mt-[64px] ml-[80px]'>
            <div className='w-[135px] h-[151px] mt-[-30px]'>
                <div className='flex flex-col'>
                    <p style={{fontSize:"100px",fontFamily:"poppins",fontWeight:"500"}}>{score}</p>
                    <p className='mt-[-35px]' style={{fontSize:"24px",fontFamily:"poppins",fontWeight:"500"}} >Total Score</p>
                </div>
            </div>

            
            <div className='w-[552px] h-[138px] '>
                <p style={{color:'red'}} className='ml-[260px] font-semibold text-lg'>{error}</p>
                <div className='flex gap-[30px] '>
                <button value='1' onClick={handleClick}  style={{backgroundColor:btnColor[0].bg,color:btnColor[0].text}} className=' border-[1px] border-black w-[72px] h-[72px] font-bold'>1</button>
                <button value='2' onClick={handleClick}  style={{backgroundColor:btnColor[1].bg,color:btnColor[1].text}}  className='border-[1px]  border-black w-[72px] h-[72px] font-bold'>2</button>
                <button value='3' onClick={handleClick}  style={{backgroundColor:btnColor[2].bg,color:btnColor[2].text}} className='border-[1px]  border-black w-[72px] h-[72px] font-bold'>3</button>
                <button value='4' onClick={handleClick}  style={{backgroundColor:btnColor[3].bg,color:btnColor[3].text}} className='border-[1px]  border-black w-[72px] h-[72px] font-bold'>4</button>
                <button value='5' onClick={handleClick}  style={{backgroundColor:btnColor[4].bg,color:btnColor[4].text}} className='border-[1px]  border-black w-[72px] h-[72px] font-bold'>5</button>
                <button value='6' onClick={handleClick}  style={{backgroundColor:btnColor[5].bg,color:btnColor[5].text}} className='border-[1px]  border-black w-[72px] h-[72px] font-bold'>6</button>
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
                    <button onClick={resetSc} style={{fontFamily:"poppins",fontWeight:"600",padding:"10px 15px 10px 15px"}} className='w-[157px] rounded-sm border-[1px] border-black'>Reset Score</button>

                </div>
                <div onClick={()=>setShowRules((prev)=>!prev)} className='text-white rounded-sm bg-[rgba(0,0,0,1)]'>
                    <button  style={{fontFamily:"poppins",fontWeight:"600",padding:"10px 15px 10px 15px"}} className='w-[157px] rounded-sm border-[1px] border-black'>Show rules</button>
                </div>
            </div>

        </div>
        

    </div>
    {
        showRules && 
        <div style={{background:"rgba(251, 241, 241, 1)"}} className='mt-3  flex flex-col  w-[749px] h-[140px] ml-[370px] '>
            <div>
                <h1 className='font-bold text-lg mt-2 ml-4'>How to play dice game</h1>
            </div>
            <div className=' w-[754px] mt-2 h-[108px]'>
                <p className='text-sm ml-4'>Select any number</p>
                <p className='text-sm ml-4'>Click on dice image</p>
                <p className='text-sm ml-4'>After click on  dice  if selected number is equal to dice number you will get same point as dice if you get wrong guess then  2 point will be dedcuted  </p>
            </div>
        </div>
        
    }
    </div>
    

  )
}
