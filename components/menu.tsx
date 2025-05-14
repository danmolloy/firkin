import { useState } from "react";
import { createPortal } from "react-dom";

export default function Menu(props: {
  setShowMenu: (arg: boolean) => void
}) {
  const [focused, setFocused] = useState<number|null>(null);
  const { setShowMenu } = props;
  return createPortal(
    <div className="  fixed flex flex-col justify-evenly right-0 top-0  pb-32 text-2xl font-title w-full h-screen bg-black text-white mix-blend-normal z-10">
      <a onMouseEnter={() => setFocused(0)} onMouseLeave={() => setFocused(null)} onClick={() => setTimeout(() =>setShowMenu(false), 250)} href="/#about" className={`p-2  m-1 ${focused === 0 ? 'text-yellow-200' : focused !== 0 && focused !== null ? "opacity-20" :""} transition-all duration-1000`}>About</a>
      <a onMouseEnter={() => setFocused(1)} onMouseLeave={() => setFocused(null)} onClick={() => setTimeout(() =>setShowMenu(false), 250)} href="/#calendar" className={`p-2  m-1 ${focused === 1 ? 'text-yellow-200' : focused !== 1 && focused !== null ? "opacity-20" :""} transition-all duration-1000`}>Calendar</a>
      <a onMouseEnter={() => setFocused(2)} onMouseLeave={() => setFocused(null)} onClick={() => setTimeout(() =>setShowMenu(false), 250)} href="/#musicians" className={`p-2  m-1 ${focused === 2 ? 'text-yellow-200' : focused !== 2 && focused !== null ? "opacity-20" :""} transition-all duration-1000`}>Musicians</a>
      <a onMouseEnter={() => setFocused(3)} onMouseLeave={() => setFocused(null)} onClick={() => setTimeout(() =>setShowMenu(false), 250)} href="/#contact" className={`p-2  m-1 ${focused === 3 ? 'text-yellow-200' : focused !== 3 && focused !== null ? "opacity-20" :""} transition-all duration-1000`}>Contact</a>
{/*       <a className="p-2 hover:bg-blue-50 m-1">Donate</a>
 */}    </div>,
 document.body
  )
}