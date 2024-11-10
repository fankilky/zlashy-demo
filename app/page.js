'use client';
import Image from "next/image";
import bgMobile from "../public/bg/Background_Green.png";
import bg from "../public/bg/Background_Desktop.png";

import logo from "../public/landing/Living_your_8alance.svg";
import bubble1 from "../public/landing/Bubble1.png";
import bubble2 from "../public/landing/Bubble2.png";
import bubble3 from "../public/landing/Bubble3.png";
import bubble4 from "../public/landing/Bubble4.png";
import bubble5 from "../public/landing/Bubble5.png";

import mobile1 from "../public/wellness-community/Mobile1_EN.png";
import mobile2 from "../public/wellness-community/Mobile2_EN.png";
import grass from "../public/wellness-community/Grass.png";
import ecoSystem from "../public/wellness-community/Eco_system.png";

import sphere from "../public/power-of-balance/Beige_CurveBG.svg";
import dots from "../public/power-of-balance/ColouredDots.png";

import stepcounterBgMobile from "../public/step-challenge/stepcounter-1-m.png";
import stepcounterBg from "../public/step-challenge/stepcounter-1.png";
import stepcounterDollMobile from "../public/step-challenge/stepcounter-2-m.png";
import stepcounterPhoneMobile from "../public/step-challenge/stepcounter-3-m.png";
import stepcounterPhone from "../public/step-challenge/stepcounter-3.png";
import stepcounterHill from "../public/step-challenge/stepcounter-2.png";
import stepcounterDoll from "../public/step-challenge/stepcounter-4.png";

import vitalScanningBgMobile from "../public/vital-scanning/vitalscanning-1-m.png";
import vitalScanningMenMobile from "../public/vital-scanning/vitalscanning-2-m.png";
import vitalScanningPhoneMobile from "../public/vital-scanning/vitalscanning-3-m.png";
import vitalScanningBg from "../public/vital-scanning/Vitalscan-1.png";
import vitalScanningGraph from "../public/vital-scanning/Vitalscan-2.png";
import vitalScanningMen from "../public/vital-scanning/Vitalscan-3.png";
import vitalScanningPhone from "../public/vital-scanning/Vitalscan-4.png";

import deskerciseBgMobile from "../public/deskercise/Button1_1_m.png";
import deskerciseBg from "../public/deskercise/Button1_1.png";
import deskercisePhoneMobile from "../public/deskercise/Screen1_EN_m.png";
import deskercisePhone from "../public/deskercise/Screen1_EN.png";
import deskerciseWomenMobile from "../public/deskercise/Button1_2_m.png";
import deskerciseWomen from "../public/deskercise/Button1_2.png";
import deskerciseDog from "../public/deskercise/Button1_3.png";

import waterTrackerBgMobile from "../public/water-tracker/Button2_1_m.png";
import waterTrackerBg from "../public/water-tracker/Button2_1.png";
import waterTrackerPhoneMobile from "../public/water-tracker/Screen0_EN_m.png";
import waterTrackerPhone from "../public/water-tracker/Screen0_EN.png";
import waterTrackerMenFlowerMobile from "../public/water-tracker/Button2_2_m.png";
import waterTrackerMenFlower from "../public/water-tracker/Button2_2.png";
import waterTrackerWatering from "../public/water-tracker/Button2_3.png";

import mindfulPauseBgMobile from "../public/mindful-pause/Button3_1_m.png";
import mindfulPauseBg from "../public/mindful-pause/Button3_1.png";
import mindfulPausePhoneMobile from "../public/mindful-pause/Screen3_EN_m.png";
import mindfulPausePhone from "../public/mindful-pause/Screen2_EN.png";
import mindfulPauseMenMobile from "../public/mindful-pause/Button3_2_m.png";
import mindfulPauseMen from "../public/mindful-pause/breathing-2.png";
import mindfulPauseWomen from "../public/mindful-pause/Button3_3.png";

import feelGoodBgMobile from "../public/feel-good/Button4_1_m.png";
import feelGoodBg from "../public/feel-good/moodplaylist-1.png";
import feelGoodPlaylistMobile from "../public/feel-good/Button4_2_m.png";
import feelGoodPlaylist from "../public/feel-good/Button4_3.png";
import feelGoodBee from "../public/feel-good/Button4_2.png";

import coach from "../public/balance-path/pocketfitnesscoach.png";
import socialScore from "../public/balance-path/TheRoadToWellness_3.png";

import downloadPhone from "../public/download/Mobile3_EN.png";
import downloadSearch from "../public/download/ALIFE_search.png";
import downloadQrcode from "../public/download/ALIFE_QR_code.png";
import downloadApple from "../public/download/App_Store.png";
import downloadGoogle from "../public/download/Google_Play.png";

import footerLogo from "../public/header/BalanceLogo.png";
import footerLinkedin from "../public/footer/Linkedin.png";
import footerMail from "../public/footer/Mail.svg";
import footerMap from "../public/footer/Map_Pin.svg";

export default function Home() {
  return (
    <>
      <div className={`bg-[#387e78]`}>
        <div id={`main`} className={`relative w-full h-full animate-scaleDown [animation-timeline:view()] [animation-range: exit -200px] [transform-origin:bottom center;]`}>
          <Image className={`h-svh xl:hidden`} objectFit="contain" style={{ width: '100%'}} src={bgMobile} alt="bg-mobile" />
          <Image className={`hidden xl:block max-w-full`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={bg} alt="bg" />
          <div className={`absolute top-0 left-0 w-full h-dvh flex justify-center items-center`}>
            <Image className={`max-w-[50%] 2xl:max-w-[40%] 3xl:max-w-[30%]`} width={800} src={logo} alt="logo" />
          </div>
          <div id={`bubbles`} className={`absolute top-0 left-0 w-full h-full overflow-x-hidden`}>
            <div className={`relative w-full h-full`}>
              <Image id={`bubble1`} className={`animate-wiggle absolute max-w-36 top-24 right-3     xl:max-w-52 xl:left-9    xl:top-36     3xl:max-w-none 4xl:left-48 `} width={350} src={bubble1} alt="bubble1" />
              <Image id={`bubble2`} className={`animate-wiggle absolute max-w-40 bottom-52 -right-3 xl:max-w-72 xl:-right-10 xl:top-[28rem]     3xl:max-w-[34rem] 3xl:top-[20rem] 4xl:top-40 4xl:max-w-none`} width={700} src={bubble2} alt="bubble2" />
              <Image id={`bubble3`} className={`animate-wiggle absolute max-w-44 top-32 -left-4     xl:max-w-[25rem] xl:-left-24 xl:top-[35rem]  3xl:max-w-[30rem] 3xl:bottom-[unset] 3xl:top-[40rem] 4xl:max-w-[70%] 4xl:top-[35rem]`} width={700} src={bubble3} alt="bubble3" />
              <Image id={`bubble4`} className={`animate-wiggle absolute max-w-44 bottom-32 -left-4  xl:max-w-60 xl:left-96 xl:bottom-[unset] xl:top-[45rem]  3xl:max-w-[28rem] 3xl:top-[65rem] 3xl:left-[38rem] 4xl:top-[70rem] 4xl:max-w-[35%]`} width={700} src={bubble4} alt="bubble4" />
              <Image id={`bubble5`} className={`animate-wiggle absolute max-w-44 bottom-5 right-8   xl:max-w-60 xl:left-60 xl:right-[unset] xl:bottom-[unset] xl:top-[60rem]  3xl:max-w-[30rem] 3xl:top-[90rem] 4xl:top-[110rem] 4xl:max-w-[37%]`} width={700} src={bubble5} alt="bubble5" />
            </div>
          </div>
        </div>
        <div id={`phone`} className={`relative w-full h-full bg-[#387e78]`}>
          <Image className={`animate-phoneFadeOut [animation-timeline:view(50%)] [animation-range: cover 50% cover 100%] max-w-full mx-auto my-0`} width={800} src={mobile1} alt="mobile1" />
          <div id={`community-of-rewards`} className={`relative `}>
            <h3 className={`animate-fadeInUp [animation-timeline:view()] text-white text-center text-xl lg:text-3xl xl:text-5xl font-bold my-10 xl:my-20`}>Dive into our wellness <br/> community of rewards</h3>
            <div id={`triangle`} className={`py-24`}>
              <Image className={`animate-fadeInUp [animation-timeline:view()] [animation-range: cover 0% cover 30%] max-w-[70%] xl:max-w-[80%] 3xl:max-w-none place-self-end 3xl:place-self-center 3xl:ml-80`} width={800} src={ecoSystem} alt={`ecoSystem`} />
              <Image className={`animate-fadeInUp [animation-timeline:view()] [animation-range: cover 10% cover 45%] max-w-[40%] 3xl:max-w-[50%] 5xl:max-w-none absolute bottom-11 -left-8 3xl:-left-60`} width={700} src={grass} alt={`grass`} />
              <Image className={`animate-fadeInUp [animation-timeline:view()] [animation-range: cover 10% cover 45%] max-w-[30%] 4xl:max-w-[20%] 5xl:max-w-none absolute top-40 left-6 4xl:top-60 4xl:left-40`} width={500} src={mobile2} alt={`mobile2`} />
            </div>
          </div>
        </div>
      </div>
      <Image className={`bg-[#387e78]`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={sphere} alt="sphere" />
      <div id={`unlock-balance`} className={`relative h-44 flex flex-col items-center lg:mb-24`}>
        <h1 className={`sphere text-black text-center text-2xl font-bold my-3 lg:text-5xl`}>Unlock the power of balance</h1>
        <Image className={`lg:!w-[20%]`} objectFit="contain" style={{ width: '40%', height: 'auto' }} src={dots} alt="dots" />
        <div className={`flex justify-center items-center bg-white rounded-full my-8`}>
          <button className={`bg-[#387e78] text-white py-3 px-8 rounded-full`}>To Prosper</button>
          <button className={`text-[#a6a6a6] py-3 px-5 rounded-full `}>To Learn & Earn</button>
        </div>
      </div>
      <div className={`flex flex-col gap-20 my-10`}>
        <CardLeft 
          name="step-challenge"
          mobileBg={stepcounterBgMobile}
          mobileElement1={stepcounterDollMobile}
          bg={stepcounterBg}
          element1={stepcounterHill}
          element2={stepcounterDoll}
          mobileKeyImage={stepcounterPhoneMobile}
          keyImage={stepcounterPhone}
          tag="Fitness"
          title="Step Challenges"
          desc="Embark on a GPS-based ESG adventure with Adventure Hunt ( and the soon-to-come Eco Hunt ) around Hong Kong. Track your daily steps using Step Counter to achieve your health goals."
        />
        <CardRight 
          name="vital-scanning"
          mobileBg={vitalScanningBgMobile}
          mobileElement1={vitalScanningMenMobile}
          bg={vitalScanningBg}
          element1={vitalScanningGraph}
          element2={vitalScanningMen}
          mobileKeyImage={vitalScanningPhoneMobile}
          keyImage={vitalScanningPhone}
          tag="Monitor"
          title="Daily vital scan"
          desc="Keep track of your health scoore every day to improve wellness over time."
        />
        <CardLeft 
          name="deskercise"
          mobileBg={deskerciseBgMobile}
          mobileElement1={deskerciseWomenMobile}
          bg={deskerciseBg}
          element1={deskerciseDog}
          element2={deskerciseWomen}
          mobileKeyImage={deskercisePhoneMobile}
          keyImage={deskercisePhone}
          tag="Stretch"
          title="Deskercise"
          desc="Take your pocket stretch trainer with you anywhere to bid farewell to tight shoulders and neck."
        />
        <CardRight 
          name="water-tracker"
          mobileBg={waterTrackerBgMobile}
          mobileElement1={waterTrackerMenFlowerMobile}
          bg={waterTrackerBg}
          element1={waterTrackerMenFlower}
          element2={waterTrackerWatering}
          mobileKeyImage={waterTrackerPhoneMobile}
          keyImage={waterTrackerPhone}
          tag="Hydration"
          title="Water Tracker"
          desc="Receive periodic reminders for hydration breaks to stay active throughtout the day."
        />
        <CardLeft 
          name="mindful-pause"
          mobileBg={mindfulPauseBgMobile}
          mobileElement1={mindfulPauseMenMobile}
          bg={mindfulPauseBg}
          element1={mindfulPauseMen}
          element2={mindfulPauseWomen}
          mobileKeyImage={mindfulPausePhoneMobile}
          keyImage={mindfulPausePhone}
          tag="Breathe"
          title="Mindful Pause"
          desc="Take conscious control of your breathe to regulate your mind and alleviate stress."
        />
        <CardRight 
          name="feel-good"
          mobileBg={feelGoodBgMobile}
          mobileElement1={feelGoodPlaylistMobile}
          bg={feelGoodBg}
          element1={feelGoodPlaylist}
          element2={feelGoodBee}
          mobileKeyImage={waterTrackerPhoneMobile}
          keyImage={waterTrackerPhone}
          tag="Booster"
          title="Feel-good playlists"
          desc="Listen to mood-boosting playlists tailored to your emotions to stay motivated and inspired."
        />
      </div>
      <div className={`balance-path relative mt-32 px-5 bg-[#cddee6] py-10 flex flex-col justify-center items-center gap-3`}>
          <h1 className={`text-2xl text-center font-bold lg:text-5xl`}>Leading a balanced path</h1>
          <Image className={`lg:!w-[20%] my-0 mx-auto`} objectFit="contain" style={{ width: '40%', height: 'auto' }} src={dots} alt="dots" />
          <p className={`text-center`}>Stay tuned for these exciting features in our upcoming releases!</p>
          <div className={`grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 justify-center gap-3 mx-10 lg:gap-5 lg:mx-20 pb-10`}>
            <div className={`card flex flex-col flex-nowrap animate-fadeInUp [animation-timeline:view()] [animation-range: cover 0% cover 45%;]`}>
              <Image className={``} objectFit="contain" style={{ width: '100%', height: 'auto' }} src={coach} alt="coach" />
              <div className={`caption text-center bg-white rounded-b-3xl lg:rounded-b-[4.5rem] px-5`}>
                <h2 className={`title text-[#387e78] text-xl my-3`}>Pocket fitness coach</h2>
                <p className={`desc text-sm mb-5`}>Do squats and pushups more effectively under the guidance of our smart virtual coach.</p>
              </div>
            </div>
            <div className={`card flex flex-col flex-nowrap animate-fadeInUp [animation-timeline:view()] [animation-range: cover 0% cover 45%;]`}>
              <Image className={`rounded-t-3xl lg:rounded-t-[4.5rem]`} objectFit="contain" style={{ width: '100%', height: 'auto' }} src={socialScore} alt="socialScore" />
              <div className={`caption text-center bg-white rounded-b-3xl lg:rounded-b-[4.5rem] px-5`}>
                <h2 className={`title text-[#387e78] text-xl my-3`}>Social coins</h2>
                <p className={`desc text-sm mb-5`}>Discover a new way to earn and redeem within our ecosystem with our innovative social cryptocurrency.</p>
              </div>
            </div>
          </div>
      </div>
      <div className={`find-balance relative mt-32 mx-5 flex flex-col justify-center items-center gap-3`}>
        <h1 className={`text-2xl text-center font-bold lg:text-5xl`}>Find your balance now</h1>
        <Image className={`lg:!w-[20%] my-0 mx-auto`} objectFit="contain" style={{ width: '40%', height: 'auto' }} src={dots} alt="dots" />
        <p className={`text-center`}>Embrace a balanced life by joining the 8alance community.</p>
        <p className={`text-center underline text-[#387e78]`}>Download user guide</p>
      </div>
      <div className={`download relative mt-32 mx-16 lg:mx-32`}>
        <div className={`bg-[#426d8c] rounded-3xl grid grid-row-2 lg:grid-cols-2 lg:rounded-[4.5rem]`}>
          <div className={`col-span-1 order-last lg:order-first place-content-end`}>
            <Image className={`animate-fadeInRight [animation-timeline:view(250px)]`} objectFit="contain" style={{ width: '100%', height: 'auto' }} src={downloadPhone} alt="downloadPhone" />
          </div>
          <div className={`col-span-1 z-10 mx-10 my-5 text-white text-center flex flex-col justify-center gap-5 animate-fadeInUp [animation-timeline:view()]`}>
            <div className={`text-base lg:text-2xl`}>Step 1</div>
            <div className={`text-2xl lg:text-5xl font-bold`}>Downlad 8alance</div>
            <div className={`text-sm lg:text-lg lg:mb-10`}>Currently open to FTLife and NWS users only. Stay tuned for future updates!</div>
            <Image className={``} objectFit="contain" style={{ width: '100%', height: 'auto' }} src={downloadSearch} alt="downloadSearch" />
            <div className="grid grid-rows-2 grid-flow-col place-items-center lg:my-5">
              <div className="row-span-3 p-2 ">
                <Image className={``} objectFit="contain" style={{ width: '100%', height: 'auto' }} src={downloadQrcode} alt="downloadQrcode" />
                </div>
              <div className="row-end-2">
                <Image className={``} objectFit="contain" style={{ width: '100%', height: 'auto' }} src={downloadApple} alt="downloadApple" />
              </div>
              <div className="row-span-2">
                <Image className={``} objectFit="contain" style={{ width: '100%', height: 'auto' }} src={downloadGoogle} alt="downloadGoogle" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`footer bg-[#387e78] text-white mt-10`}>   
        <div className="grid grid-cols-3 grid-rows-4 lg:grid-cols-6 lg:grid-rows-2 p-5 gap-3">
            <div className="col-span-2 content-center">
              <Image className={`brightness-[10]`} width={170} src={footerLogo} alt="footerLogo" />
              <div className={`text-sm`}>Powered by EN-Novelty</div>
            </div>
            <div className="col-start-3 lg:col-start-6 place-items-end content-center lg:content-end">
              <Image className={``} width={50} src={footerLinkedin} alt="footerLinkedin" />
            </div>
            <div className="col-span-3 row-start-2 lg:row-start-1 lg:col-start-3 content-center lg:content-end">
              <div className="email">
                <Image className={`inline-block mr-1`} width={20} src={footerMail} alt="footerMail" />
                hello@en-novelty.com
              </div>
              <div className="address">
                <Image className={`inline-block mr-1`} width={20} src={footerMap} alt="footerMap" />
                713, K11 Atelier, 728 King's Road, Quarry Bay
              </div>
            </div>
            <div className="col-span-3 row-start-3 lg:col-span-4 lg:row-start-2 flex flex-col lg:flex-row lg:gap-5 content-center lg:items-center">
              <a href="/termsandcondition">Term and Condition</a>
              <a href="/privacy">Privacy Pollicy</a>
              <a href="/personalinformation">Personal Information Collection Statment</a>
            </div>
            <div className="col-span-3 row-start-4 lg:col-span-2 lg:col-start-5 lg:row-start-2 text-xs content-center">@2024 En-Novelty Limited</div>
        </div>
    
      </div>
    </>

  );
}


function CardLeft({ name, mobileBg, mobileElement1, mobileKeyImage, bg, element1, element2, keyImage, tag, title, desc }){
  return (
    <div id={name} className={`w-full relative`}>
      <Image className={`animate-fadeInLeft [animation-timeline:view()] [animation-range: cover 0% cover 45%;] block lg:hidden`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={mobileBg} alt={`${name}-bg-mobile`} />
      <Image className={`animate-fadeInUp [animation-timeline:view()] [animation-range: cover 0% cover 45%;] block lg:hidden absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={mobileElement1} alt={`${name}-element1-mobile`} />

      <Image className={`animate-fadeInLeft [animation-timeline:view()] hidden lg:block `} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={bg} alt={`${name}-bg`} />
      <Image className={`animate-fadeInUp [animation-timeline:view(250px)] opacity-0 hidden lg:block absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={element1} alt={`${name}-element1`} />
      <Image className={`animate-fadeInUp [animation-timeline:view(250px)] opacity-0 hidden lg:block absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={element2} alt={`${name}-element2`} />
      <div className="absolute top-0 left-0 grid grid-cols-5 grid-rows-4 gap-4 w-full h-full">
          <div className="col-span-2 row-span-4 ">
            <Image className={`animate-fadeInRight [animation-timeline:view(250px)] [animation-range: cover 10% cover 45%] opacity-0 block lg:hidden`} fill src={mobileKeyImage} alt={`${name}-key-image-mobile`} />
            <Image className={`animate-fadeInRight [animation-timeline:view(250px)] [animation-range: cover 10% cover 45%] opacity-0 hidden lg:block`} fill src={keyImage} alt={`${name}-key-image`} />
          </div>
          <div className="animate-fadeInUp [animation-timeline:view()] col-span-3 col-start-3 row-start-2">
            <div className={`bg-white rounded-full py-1 px-7 inline-block text-sm`}>{tag}</div>
            <h2 className={`font-extrabold text-3xl`}>{title}</h2>
            <p className={`text-sm`}>{desc}</p>
          </div>
      </div>
    </div>
  )
}

function CardRight({ name, mobileBg, mobileElement1, mobileKeyImage, bg, element1, element2, keyImage, tag, title, desc }){
  return (
    <div id={name} className={`w-full relative`}>
      <Image className={`animate-fadeInRight [animation-timeline:view()] [animation-range: cover 0% cover 45%;] block lg:hidden`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={mobileBg} alt={`${name}-bg-mobile`} />
      <Image className={`animate-fadeInUp [animation-timeline:view()] [animation-range: cover 0% cover 45%;] block lg:hidden absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={mobileElement1} alt={`${name}-element1-mobile`} />

      <Image className={`animate-fadeInRight [animation-timeline:view()] hidden lg:block `} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={bg} alt={`${name}-bg`} />
      <Image className={`animate-fadeInUp [animation-timeline:view(250px)] opacity-0 hidden lg:block absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={element1} alt={`${name}-element1`} />
      <Image className={`animate-fadeInUp [animation-timeline:view(250px)] opacity-0 hidden lg:block absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={element2} alt={`${name}-element2`} />
      <div className="absolute top-0 left-0 grid grid-cols-5 grid-rows-4 gap-4 w-full h-full">
        <div className="col-span-2 row-span-4 col-start-4">
            <Image className={`animate-fadeInLeft [animation-timeline:view(250px)] [animation-range: cover 10% cover 45%] opacity-0 block lg:hidden`} fill sizes="cover" src={mobileKeyImage} alt={`${name}-key-image-mobile`} />
            <Image className={`animate-fadeInLeft [animation-timeline:view(250px)] [animation-range: cover 10% cover 45%] opacity-0 hidden lg:block`} fill sizes="cover" src={keyImage} alt={`${name}-key-image`} />
          </div>
          <div className="animate-fadeInUp [animation-timeline:view()] col-span-3 row-start-2 ml-5">
            <div className={`bg-white rounded-full py-1 px-7 inline-block text-sm`}>{tag}</div>
            <h2 className={`font-extrabold text-3xl`}>{title}</h2>
            <p className={`text-sm`}>{desc}</p>
          </div>
      </div>
    </div>
  )
}

