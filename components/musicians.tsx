import Image from "next/image";
import bandDetail from '../public/bandDetail.jpg'
import eoghanKelly from '../public/eoghanKelly.jpg'

export default function Musicians() {
  return (
    <div id="musicians" data-testid="musicians-section" className="py-16 px-12 sm:px-24 flex flex-col bg-white text-lg font-normal text-black font-text">
      <h2 className="text-5xl font-extrabold">MUSICIANS</h2>
      <div data-testid="band-musicians " className="py-4 pb-8 flex flex-col">
        <h3 className="text-xl pb-1 font-medium">THE BAND</h3>
        <p className="pb-4 text-lg">
        As of January 2024 members of the band can currently be seen and heard performing in Cabaret at the Kit Kat Club, Guys & Dolls at The Bridge Theatre, My Neighbour Totoro at the Barbican, The Witches at The National Theatre, along with Old Friends, Les Miserables, Wicked and Phantom Of The Opera in the West End, plus a number of nationally touring productions.
        </p>
        <p  className="pb-4 text-lg">
        Along with theatrical performances, the band members have busy careers performing as studio musicians and can be heard playing with London’s top orchestras and seen performing on TV shows such as Strictly Come Dancing, The Crown and the hit movie Maestro.
        </p>
        <p  className="pb-4 text-lg">
        Band members have previously performed with Jazz greats such as Quincy Jones, Georgie Fame, Kenny Wheeler, Jamie Cullum, The BBC Big Band, Ronnie Scott’s Big Band, Syd Lawrence Orchestra, London Jazz Orchestra, The 1 o’clock Lab Band, BBC Concert Orchestra, The Heritage Orchestra, London Symphony Orchestra, Airto Moriero, Deodato, The Dirty Dozen Brass Band, Matthew Herbert Big Band, Rufus Reid and have also played and recorded for such artists as Dionne Warwick, Blur, Florence And The Machine, Liam Gallagher, Mark Ronson, Paul Weller, Steel Pulse, Emelie Sandé, Goldie, Pete Tong, Beverly Night, All Saints, Monthy Python and loads loads more! 
        </p>
        <Image data-testid={"band-img"} src={bandDetail} width={500} alt="The band performing live at the Fox & Firkin" title="The band performing live at the Fox & Firkin" className="self-center"/>
      </div>
      <div data-testid="band-leader" className="py-4 pb-8 flex flex-col ">
        <h3 className="text-xl pb-1 font-medium">BANDLEADER</h3>
        <p className="pb-4 text-lg">
        Eoghan Kelly is a Trombone player originally from Cork City and now based in Catford. Along with directing The Big Firkin Band he plays with a number of other Big Bands in London and freelances with  bands, orchestras and ensembles all over Britain and Ireland. He frequently performs in West End shows and London Jazz venues. He has recorded and performed with many Jazz, Classical and Rock artists including Georgie Fame, the National Symphony Orchestra and Sinead O&apos;Connor. Touring credits include Liam Gallagher, Blur and Florence And The Machine.         
        </p>
        <p className="text-lg">
        Eoghan also has a busy teaching schedule working with Lewisham Music, providing music lessons to young musicians of all abilities throughout the Borough of Lewisham.
        </p>
        <div className="rounded overflow-hidden self-center py-4">
          <Image data-testid={"band-leader-img"} src={eoghanKelly} width={250}  alt="Band leader Eoghan Kelly playing his trombone" title="Band leader Eoghan Kelly playing his trombone" className="self-center"/>
        </div>
      </div>
    </div>
  )
}