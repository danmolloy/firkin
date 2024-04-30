import Image from "next/image";
import bandDetail from '../public/bandDetail.jpg'
import eoghanKelly from '../public/eoghanKelly.jpg'

export default function Musicians() {
  return (
    <div id="dark-section" data-testid="musicians-section" className="p-8 flex flex-col bg-black text-white">
      <h2 className="text-2xl font-text">Musicians</h2>
      <div data-testid="band-musicians " className="py-4 flex flex-col">
        <h3 className="text-xl pb-1 font-text">The Band</h3>
        <p className="pb-4 text-lg">
        As of January 2024 members of the band can currently be seen and heard performing in Cabaret at the Kit Kat Club, Guys & Dolls at The Bridge Theatre, My Neighbour Totoro at the Barbican, The Witches at The National Theatre, along with Old Friends, Les Miserables, Wicked and Phantom Of The Opera in the West End, plus a number of nationally touring productions.
        </p>
        <p  className="pb-4 text-lg">
        Along with theatrical performances, the band members have busy careers performing as studio musicians and can be heard playing with London’s top orchestras and seen performing on TV shows such as Strictly Come Dancing, The Crown and the hit movie Maestro.
        </p>
        <p  className="pb-4 text-lg">
        Band members have previously performed with Jazz greats such as Quincy Jones, Georgie Fame, Kenny Wheeler, Jamie Cullum, The BBC Big Band, Ronnie Scott’s Big Band, Syd Lawrence Orchestra, London Jazz Orchestra, The 1 o’clock Lab Band, BBC Concert Orchestra, The Heritage Orchestra, London Symphony Orchestra, Airto Moriero, Deodato, The Dirty Dozen Brass Band, Matthew Herbert Big Band, Rufus Reid and have also played and recorded for such artists as Dionne Warwick, Blur, Florence And The Machine, Liam Gallagher, Mark Ronson, Paul Weller, Steel Pulse, Emelie Sandé, Goldie, Pete Tong, Beverly Night, All Saints, Monthy Python and loads loads more! 
        </p>
        <Image data-testid={"band-img"} src={bandDetail} width={500} alt="Placeholder for band photo" title="Band photo placeholder" className="self-center"/>
      </div>
      <div data-testid="band-leader" className="py-4 flex flex-col">
        <h3 className="text-xl pb-1 font-text">Eoghan Kelly</h3>
        <p className="pb-4 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="rounded overflow-hidden self-center">
          <Image data-testid={"band-leader-img"} src={eoghanKelly} width={250}  alt="Placeholder for a band leader photo" title="Band leader photo placeholder" className="self-center"/>
        </div>
      </div>
    </div>
  )
}