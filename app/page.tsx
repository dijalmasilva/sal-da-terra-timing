'use client'

import Countdown from "@/components/countdown/countdown";
import Image from "next/image";
import {useState} from "react";
import SlideText from "@/components/slide-text/slide";

export default function Home({ searchParams: { minutos = 10, segundos = 0 } }: { searchParams: { minutos: number, segundos: number } }) {
  const [start, setStart] = useState(false)
  const [hideFooter, setHideFooter] = useState(false)

  const onFinishCount = () => {
    console.log('finish')
    setStart(true)
  }

  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-24">
      <div className="fixed top-0 left-0 w-full h-screen z-[-1]">
        <video autoPlay loop muted id="video" className="w-full h-full">
          <source src="/assets/videos/bg-blue-effects.mp4" type="video/mp4" className="bg-cover"/>
        </video>
      </div>
      <div className="absolute inset-0 bg-[#00000080] w-full h-screen opacity-90"/>
      <div className="w-full h-screen fixed top-0 flex flex-col justify-center items-center">
        {
          !start && (
            <Countdown minutesInitial={minutos} secondsInitial={segundos} onFinish={onFinishCount} />
          )
        }
        {
          start && (
            <div className="px-8 text-center">
              <SlideText texts={[
                (
                  <>
                    {`O culto vai começar.`}
                  </>
                ),
                (
                  <>
                    {`Bem vindo à igreja`}
                    <br/>
                    Sal da Terra
                  </>
                ),
                (
                  <>
                    {`Jesus te ama`}
                  </>
                ),
                (
                  <div key="last" className="w-screen h-screen relative" onLoad={() => setHideFooter(true)}>
                    <Image src="/assets/images/sal-da-terra.png" alt="sal-da-terra" fill
                           style={{objectFit: 'contain', width: '100%', height: '100%'}}/>
                  </div>
                )
              ]}/>
            </div>
          )
        }
        {
          !hideFooter && (
            <div className="w-[30vw] h-[20vh] absolute bottom-0">
              <Image src="/assets/images/sal-da-terra.png" alt="sal-da-terra" fill
                     style={{objectFit: 'contain', width: '100%', height: '100%'}}/>
            </div>
          )
        }
      </div>
    </main>
  )
}
