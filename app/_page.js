'use client';
import Image from "next/image";
import bgMobile from "../public/bg/Background_Green.png";
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

  // useEffect(() => { 
  //   window.addEventListener('scroll', () => {
  //       const currentScroll = window.scrollY;
  //       //console.log(currentScroll)
  //       console.log(document.getElementById('session3').scrollHeight)
  //       if (currentScroll >= document.body.scrollHeight - window.innerHeight) {
            
  //       }
  //   });
  // },[]);

  return (
    <>
      <div id={`session1`} className={`relative h-svh lg:h-[2000px] flex justify-center items-center lg:block overflow-hidden bg-[#387e78]`}>
          <Image className={``} fill src={bgMobile} alt="bg-mobile" />
          <div className={`relative m-0 p-0 w-full h-40 lg:h-80 lg:mt-72`}>
            <span className={`absolute top-0 left-0 w-full h-full bg-no-repeat bg-contain bg-center`} style={{ backgroundImage: `url('../landing/Living_your_8alance.svg')`}}></span>
          </div>
          <div id={`Bubble1`} className={`animate-wiggle absolute w-40 right-3 top-12 lg:w-96 lg:left-0 lg:top-36 `}>
            <div className={`relative m-0 p-0 w-full h-80`}>
              <span className={`absolute top-0 left-0 w-full h-full bg-no-repeat bg-contain bg-center`} style={{ backgroundImage: `url('../landing/Bubble1.png')`}}></span>
            </div>
          </div>
          <div id={`Bubble2`} className={`animate-wiggle absolute w-48 -right-3 bottom-36 lg:w-[35rem] lg:-right-10 lg:bottom-[45rem]`}>
            <div className={`relative m-0 p-0 w-full h-80 lg:h-[35rem]`}>
              <span className={`absolute top-0 left-0 w-full h-full bg-no-repeat bg-contain bg-center`} style={{ backgroundImage: `url('../landing/Bubble2.png')`}}></span>
            </div>
          </div>
          <div id={`Bubble3`} className={`animate-wiggle absolute w-48 -left-2 top-24 lg:w-[30rem] lg:-left-20 lg:top-[45rem]`}>
            <div className={`relative m-0 p-0 w-full h-80 lg:h-[30rem]`}>
              <span className={`absolute top-0 left-0 w-full h-full bg-no-repeat bg-contain bg-center`} style={{ backgroundImage: `url('../landing/Bubble3.png')`}}></span>
            </div>
          </div>
          <div id={`Bubble4`} className={`animate-wiggle absolute w-44 -left-3 bottom-28 lg:w-[18rem] lg:left-[80rem] lg:bottom-[20rem]`}>
            <div className={`relative m-0 p-0 w-full h-80`}>
              <span className={`absolute top-0 left-0 w-full h-full bg-no-repeat bg-contain bg-center`} style={{ backgroundImage: `url('../landing/Bubble4.png')`}}></span>
            </div>
          </div>
          <div id={`Bubble5`} className={`animate-wiggle absolute w-48 right-14 -bottom-12 lg:w-[20rem] lg:right-[80rem] lg:bottom-[3rem]`}>
            <div className={`relative m-0 p-0 w-full h-80`}>
              <span className={`absolute top-0 left-0 w-full h-full bg-no-repeat bg-contain bg-center`} style={{ backgroundImage: `url('../landing/Bubble5.png')`}}></span>
            </div>
          </div>    
      </div>—
      {/* <div id={`phone`}  className={`block lg:hidden relative py-8 bg-[#387e78]`}>
          <div className={`relative aspect-[1398/840]`}>
            <Image className={``} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={mobile1} alt="mobile1" />
          </div>
      </div>
      <div id={`phone`} className={`hidden lg:block relative py-8 bg-[#387e78]`}>
          <div className={`relative`}>
            <Image className={`my-0 mx-auto`} width={800} src={mobile1} alt="mobile1" />
          </div>
      </div>
      <div id={`triangle`} className={`relative py-8 lg:py-16 bg-[#387e78]`}>

          <h3 className={`text-white text-center text-xl lg:text-5xl font-bold my-5`}>Dive into our wellness <br/> community of rewards</h3>
          <div className={`block lg:hidden relative h-96 ml-20 mr-8`}>
            <Image className={`aspect-[2547/2259]`} objectFit="contain" layout="fill" src={ecoSystem} alt="ecoSystem" />
            <Image className={`absolute top-8 -left-12`} width={100} src={mobile2} alt="mobile2" />
            <Image className={`absolute top-64 -left-32`} width={150} src={grass} alt="grass" />
          </div>
          <div className={`hidden lg:block relative lg:h-[45rem] xl:mr-[30rem]`}>
            <Image className={`place-self-end mr-10 mt-10`} width={800} src={ecoSystem} alt="ecoSystem" />
            <Image className={`absolute top-[13rem] left-[-8rem]`} width={550} src={grass} alt="grass" />
            <Image className={`absolute top-[0rem] left-[5rem]`} width={400} src={mobile2} alt="mobile2" />
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
      </div> */}


      {/* Mobile */}
      {/* <div className={`flex flex-col gap-20 my-10`}>
        <Animation
          id="step-challenge"
          animation="slideUp"
          duration={800}
          distance={100}
          once={false} // Enable reverse animation
          threshold={0.5} // Higher threshold for better control
        >
        <div className={`w-full relative`}>
          <Image className={`block lg:hidden`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={stepcounterBgMobile} alt="stepcounterBgMobile" />
          <Image className={`block lg:hidden absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={stepcounterDollMobile} alt="stepcounterDollMobile" />

          <Image className={`hidden lg:block `} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={stepcounterBg} alt="stepcounterBg" />
          <Image className={`hidden lg:block absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={stepcounterHill} alt="stepcounterHill" />
          <Image className={`hidden lg:block absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={stepcounterDoll} alt="stepcounterDoll" />
          <div className="absolute top-0 left-0 grid grid-cols-5 grid-rows-4 gap-4 w-full h-full">
              <div className="col-span-2 row-span-4 ">
                <Image className={`block lg:hidden`} fill src={stepcounterPhoneMobile} alt="stepcounterPhoneMobile" />
                <Image className={`hidden lg:block`} fill src={stepcounterPhone} alt="stepcounterPhone" />
              </div>
              <div className="col-span-3 col-start-3 row-start-2">
                <div className={`bg-white rounded-full py-1 px-7 inline-block text-sm`}>Fitness</div>
                <h2 className={`font-extrabold text-3xl`}>Step Challenges</h2>
                <p className={`text-sm`}>Embark on a GPS-based ESG adventure with Adventure Hunt ( and the soon-to-come Eco Hunt ) around Hong Kong. Track your daily steps using Step Counter to achieve your health goals.</p>
              </div>
          </div>
        </div>
        </Animation>

        <Animation
          id="vital-scanning"
          animation="slideUp"
          duration={800}
          distance={100}
          once={false} // Enable reverse animation
          threshold={0.5} // Higher threshold for better control
        >
        <div className={`w-full relative`}>
          <Image className={`block lg:hidden `} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={vitalScanningBgMobile} alt="vitalScanningBgMobile" />
          <Image className={`block lg:hidden absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={vitalScanningMenMobile} alt="vitalScanningMenMobile" />

          <Image className={`hidden lg:block`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={vitalScanningBg} alt="vitalScanningBg" />
          <Image className={`hidden lg:block absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={vitalScanningGraph} alt="vitalScanningGraph" />
          <Image className={`hidden lg:block absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={vitalScanningMen} alt="vitalScanningMen" />

          <div className="absolute top-0 left-0 grid grid-cols-5 grid-rows-4 gap-4 w-full h-full">
              <div className="col-span-2 row-span-4 col-start-4">
                <Image className={`block lg:hidden`} fill src={vitalScanningPhoneMobile} alt="vitalScanningPhoneMobile" />
                <Image className={`hidden lg:block`} fill src={vitalScanningPhone} alt="vitalScanningPhone" />
              </div>
              <div className="col-span-3 row-start-2 ml-5">
                <div className={`bg-white rounded-full py-1 px-7 inline-block text-sm`}>Monitor</div>
                <h2 className={`font-extrabold text-3xl`}>Daily vital scan</h2>
                <p className={`text-sm`}>Keep track of your health scoore every day to improve wellness over time.</p>
              </div>
          </div>
        </div>
        </Animation>

        <Animation
          id="deskercise"
          animation="slideUp"
          duration={800}
          distance={100}
          once={false} // Enable reverse animation
          threshold={0.5} // Higher threshold for better control
        >
        <div className={`w-full relative`}>
          <Image className={`block lg:hidden`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={deskerciseBgMobile} alt="deskerciseBgMobile" />
          <Image className={`block lg:hidden absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={deskerciseWomenMobile} alt="deskerciseWomenMobile" />

          <Image className={`hidden lg:block`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={deskerciseBg} alt="deskerciseBg" />
          <Image className={`hidden lg:block absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={deskerciseDog} alt="deskerciseDog" />
          <Image className={`hidden lg:block absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={deskerciseWomen} alt="deskerciseWomen" />
          <div className="absolute top-0 left-0 grid grid-cols-5 grid-rows-4 gap-4 w-full h-full">
              <div className="col-span-2 row-span-4 ">
                <Image className={`block lg:hidden`} fill src={deskercisePhoneMobile} alt="deskercisePhoneMobile" />
                <Image className={`hidden lg:block`} fill src={deskercisePhone} alt="deskercisePhone" />
              </div>
              <div className="col-span-3 col-start-3 row-start-2">
                <div className={`bg-white rounded-full py-1 px-7 inline-block text-sm`}>Stretch</div>
                <h2 className={`font-extrabold text-3xl`}>Deskercise</h2>
                <p className={`text-sm`}>Take your pocket stretch trainer with you anywhere to bid farewell to tight shoulders and neck.</p>
              </div>
          </div>
        </div>
        </Animation>

        <Animation
          id="water-tracker"
          animation="slideUp"
          duration={800}
          distance={100}
          once={false} // Enable reverse animation
          threshold={0.5} // Higher threshold for better control
        >
          <div className={`w-full relative`}>
            <Image className={`block lg:hidden`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={waterTrackerBgMobile} alt="waterTrackerBgMobile" />
            <Image className={`block lg:hidden absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={waterTrackerMenFlowerMobile} alt="waterTrackerMenFlowerMobile" />

            <Image className={`hidden lg:block`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={waterTrackerBg} alt="waterTrackerBg" />
            <Image className={`hidden lg:block absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={waterTrackerMenFlower} alt="waterTrackerMenFlower" />
            <Image className={`hidden lg:block absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={waterTrackerWatering} alt="waterTrackerWatering" />
            <div className="absolute top-0 left-0 grid grid-cols-5 grid-rows-4 gap-4 w-full h-full">
                <div className="col-span-2 row-span-4 col-start-4">
                  <Image className={`block lg:hidden`} fill src={waterTrackerPhoneMobile} alt="waterTrackerPhoneMobile" />
                  <Image className={`hidden lg:block`} fill src={waterTrackerPhone} alt="waterTrackerPhone" />
                </div>
                <div className="col-span-3 row-start-2 ml-5">
                  <div className={`bg-white rounded-full py-1 px-7 inline-block text-sm`}>Hydration</div>
                  <h2 className={`font-extrabold text-3xl`}>Water Tracker</h2>
                  <p className={`text-sm`}>Receive periodic reminders for hydration breaks to stay active throughtout the day.</p>
                </div>
            </div>
          </div>
        </Animation>

        <Animation
          id="mindful-pause"
          animation="slideUp"
          duration={800}
          distance={100}
          once={false} // Enable reverse animation
          threshold={0.5} // Higher threshold for better control
        >        
          <div className={`w-full relative`}>
            <Image className={`block lg:hidden`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={mindfulPauseBgMobile} alt="mindfulPauseBgMobile" />
            <Image className={`block lg:hidden absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={mindfulPauseMenMobile} alt="mindfulPauseMenMobile" />

            <Image className={`hidden lg:block`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={mindfulPauseBg} alt="mindfulPauseBg" />
            <Image className={`hidden lg:block absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={mindfulPauseMen} alt="mindfulPauseMen" />
            <Image className={`hidden lg:block absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={mindfulPauseWomen} alt="mindfulPauseWomen" />
            <div className="absolute top-0 left-0 grid grid-cols-5 grid-rows-4 gap-4 w-full h-full">
                <div className="col-span-2 row-span-4 ">
                  <Image className={`block lg:hidden`} fill src={mindfulPausePhoneMobile} alt="mindfulPausePhoneMobile" />
                  <Image className={`hidden lg:block`} fill src={mindfulPausePhone} alt="mindfulPausePhone" />
                </div>
                <div className="col-span-3 col-start-3 row-start-2">
                  <div className={`bg-white rounded-full py-1 px-7 inline-block text-sm`}>Breathe</div>
                  <h2 className={`font-extrabold text-3xl`}>Mindful Pause</h2>
                  <p className={`text-sm`}>Take conscious control of your breathe to regulate your mind and alleviate stress.</p>
                </div>
            </div>
          </div>
        </Animation>

        <Animation
          id="feel-good"
          animation="slideUp"
          duration={800}
          distance={100}
          once={false} // Enable reverse animation
          threshold={0.5} // Higher threshold for better control
        > 
          <div className={`w-full relative`}>
            <Image className={`block lg:hidden`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={feelGoodBgMobile} alt="feelGoodBgMobile" />
            <Image className={`block lg:hidden absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={feelGoodPlaylistMobile} alt="feelGoodPlaylistMobile" />

            <Image className={`hidden lg:block`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={feelGoodBg} alt="feelGoodBg" />
            <Image className={`hidden lg:block absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={feelGoodPlaylist} alt="feelGoodPlaylist" />
            <Image className={`hidden lg:block absolute top-0 left-0`} objectFit="cover" style={{ width: '100%', height: 'auto' }} src={feelGoodBee} alt="feelGoodBee" />
            <div className="absolute top-0 left-0 grid grid-cols-5 grid-rows-4 gap-4 w-full h-full">
                <div className="col-span-2 row-span-4 col-start-4">
                  <Image className={`block lg:hidden`} fill src={waterTrackerPhoneMobile} alt="waterTrackerPhoneMobile" />
                  <Image className={`hidden lg:block`} fill src={waterTrackerPhone} alt="waterTrackerPhone" />
                </div>
                <div className="col-span-3 row-start-2 ml-5">
                  <div className={`bg-white rounded-full py-1 px-7 inline-block text-sm`}>Hydration</div>
                  <h2 className={`font-extrabold text-3xl`}>Water Tracker</h2>
                  <p className={`text-sm`}>Receive periodic reminders for hydration breaks to stay active throughtout the day.</p>
                </div>
            </div>
          </div>
        </Animation>
      </div>

      <div className={`balance-path relative mt-32 px-5 bg-[#cddee6] py-10 flex flex-col justify-center items-center gap-3`}>
          <h1 className={`text-2xl text-center font-bold lg:text-5xl`}>Leading a balanced path</h1>
          <Image className={`lg:!w-[20%] my-0 mx-auto`} objectFit="contain" style={{ width: '40%', height: 'auto' }} src={dots} alt="dots" />
          <p className={`text-center`}>Stay tuned for these exciting features in our upcoming releases!</p>
          <div className={`grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 justify-center gap-3 mx-10 lg:gap-5 lg:mx-20 pb-10`}>
            <div className={`card flex flex-col flex-nowrap`}>
              <Image className={``} objectFit="contain" style={{ width: '100%', height: 'auto' }} src={coach} alt="coach" />
              <div className={`caption text-center bg-white rounded-b-3xl lg:rounded-b-[4.5rem] px-5`}>
                <h2 className={`title text-[#387e78] text-xl my-3`}>Pocket fitness coach</h2>
                <p className={`desc text-sm mb-5`}>Do squats and pushups more effectively under the guidance of our smart virtual coach.</p>
              </div>
            </div>
            <div className={`card flex flex-col flex-nowrap`}>
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
            <Image className={``} objectFit="contain" style={{ width: '100%', height: 'auto' }} src={downloadPhone} alt="downloadPhone" />
          </div>
          <div className={`col-span-1 z-10 mx-10 my-5 text-white text-center flex flex-col justify-center gap-5`}>
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
    
      </div> */}
    </>

  );
}
