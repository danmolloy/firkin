import Image from "next/image";
import bandSunshine from "../public/bandSunshine.png"
/* border-[#49cfd6] */

export default function About() {
  return (
    <div id="about" data-testid="about-section"  className=" min-h-screen px-12 sm:px-24   flex flex-col py-16  font-text">
      <h2 className="text-5xl font-extrabold">ABOUT</h2>
      <div data-testid="about-blurb" className="py-12 text-lg font-normal">
        <p className="">
          The Big Firkin Band is a collective of world class jazz musicians, based in Lewisham and South East London, who come together once a month to perform classic Big Band music made famous by the great bands of Duke Ellington, Count Basie, Buddy Rich, Thad Jones, Stan Kenton and Woody Herman.        
        </p>
        <p className="mt-12">
          Expect to hear the greatest tunes from the golden age of jazz and swing performed by the best musicians in London, all in a relaxed and comfortable fashion at The Fox & Firkin on a Sunday afternoon.
        </p>
      </div>
      <div className="rounded overflow-hidden self-center">
      

        <Image data-testid={"band-img"} src={bandSunshine} width={500} alt="Placeholder for band photo" title="Band photo placeholder" className="self-center"/>
        </div>
    </div>
  )
}