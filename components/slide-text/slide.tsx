'use client'

import {Rubik_Dirt} from 'next/font/google'
import {ReactNode, useState} from "react";

const rubik = Rubik_Dirt({subsets: ['latin'], display: 'auto', weight: ['400']})

type Props = {
  texts: ReactNode[]
}

const SlideText = ({texts}: Props) => {
  const [actual, setActual] = useState(0)

  if (actual < texts.length - 1) {
    setTimeout(() => {
      setActual(actual + 1)
    }, 3000)
  }

  return (
    <h1 className={`${rubik.className} text-[7vw] font-bold text-[#C09460] drop-shadow-lg shadow-white duration-500`}
        style={{textShadow: '3px 9px #193D5A'}}>
      {texts[actual]}
    </h1>
  )
}

export default SlideText