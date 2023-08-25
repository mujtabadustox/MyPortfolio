"use client"

import React , {useState, useEffect, useRef} from 'react'
import { courier_prime } from '@/app/fonts';

interface GreetingsProps {
    data: string[]; // This is an array of strings
  }


  const Greetings = ({ data }: GreetingsProps) => {


    
    const [print,setPrint] = useState("")
    const [printNext,setPrintNext] = useState(false)
    const wordIndexRef = useRef(0);


  useEffect(()=>{


    

 
    




    if(wordIndexRef.current === data.length){
      wordIndexRef.current = 0;
    }

    const words = data[wordIndexRef.current].split("");

    const delay: number = 500;
    let index: number = 0;
    let newWords : string = ""
  
    const interval = setInterval(() => {
      if (index < words.length) {
        newWords+=words[index]
        setPrint(newWords);
        index++;
      } else {
        clearInterval(interval);
        setPrint("")
        setPrintNext(!printNext)
        
        wordIndexRef.current = wordIndexRef.current + 1;
      }
    }, delay);

  },[printNext])



  return (
    <><div className={`${courier_prime.variable} mono text-[#949494] text-2xl`} >
    <span className="cursor">
   <span className="wave"> 👋</span>
   {print}
        </span>
      </div>
    </>
  )
}

export default Greetings