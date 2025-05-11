import Image from "next/image";
import squareSunshine from "../public/squareSunshine.png"
import bandFront from '../public/bandFront.jpg'
import bandDetail from '../public/bandDetail.jpg'
import squareEoghan from '../public/squareEoghan.jpg'
import fluteDetail from '../public/fluteDetail.jpg'
import squareBush from '../public/squareBush.jpg'
import squareSolo from '../public/squareSolo.jpg'
import squareHero from '../public/squareHero.jpg'
import squarePiano from '../public/squarePiano.jpg'

export default function PhotoAlbum() {
  return (
    <div className=" relative w-screen  flex flex-row flex-wrap">
              <div className="w-full aspect-square  md:w-1/2 relative lg:w-1/3">
              <Image data-testid={"band-img"}  fill={true} src={squareSolo}  alt="Band photo" title="Band photo placeholder" className="self-center"/>
</div>
              <div className="w-full aspect-square  md:w-1/2 relative lg:w-1/3">

              <Image data-testid={"band-img"}  fill={true} src={squareHero}  alt="Band photo" title="Band photo placeholder" className="self-center"/>
             </div>
              <div className="w-full aspect-square  md:w-1/2 relative lg:w-1/3">

              <Image data-testid={"band-img"}  fill={true} src={squarePiano}  alt="Band photo" title="Band photo placeholder" className="self-center"/>
             </div>
              <div className="w-full aspect-square  md:w-1/2 relative lg:w-1/3">

              <Image data-testid={"band-img"}  fill={true} src={squareBush}  alt="Band photo" title="Band photo placeholder" className="self-center"/>
         </div>
              <div className="w-full aspect-square  md:w-1/2 relative lg:w-1/3">

          <Image data-testid={"band-leader-img"} src={squareEoghan} fill={true}  alt="Band leader Eoghan Kelly playing his trombone" title="Band leader Eoghan Kelly playing his trombone" className="self-center"/>
         </div>
              <div className="w-full aspect-square  md:w-1/2 relative lg:w-1/3">

          <Image data-testid={"band-leader-img"} src={squareSunshine} fill={true}  alt="Band in the sunshine" title="Band in the sunshine" className="self-center"/>
</div>

    </div>
  )
}