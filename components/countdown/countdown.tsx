'use client'

import {Rubik_Dirt} from 'next/font/google'
import {useState} from "react";

import styles from './countdown.module.css'

const rubik = Rubik_Dirt({subsets: ['latin'], display: 'auto', weight: ['400']})

type Props = {
  minutesInitial: number
  secondsInitial: number
  onFinish?: () => void
}

const Countdown = ({minutesInitial, secondsInitial, onFinish}: Props) => {
  const [minutes, setMinutes] = useState(minutesInitial)
  const [seconds, setSeconds] = useState(secondsInitial)

  const nextSecond = seconds - 1

  console.log(`minutes: ${minutes} seconds: ${seconds}`)
  console.log(`nextSecond: ${nextSecond}`)

  if (nextSecond < 0 && minutes > 0) {
    setTimeout(() => {
      setSeconds(59)
      setMinutes(minutes - 1)
    }, 1000)
  }

  if (nextSecond >= 0) {
    setTimeout(() => {
      setSeconds(nextSecond)
    }, 1000)
  }

  if (minutes == 0 && nextSecond == 0) {
    console.log('the next is the last second')
    setTimeout(() => {
      setSeconds(0)
      console.log(`call onFinish`)
      onFinish?.()
    }, 2000)
  }

  return (
    <h1
      className={`${styles.countdownAnimation} ${rubik.className} text-[10vw] font-bold text-[#C09460] drop-shadow-lg shadow-white duration-500`}
      style={{textShadow: '3px 9px #193D5A'}}>
      {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </h1>
  )
}

export default Countdown