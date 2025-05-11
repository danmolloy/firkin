
export default function Menu(props: {
  setShowMenu: (arg: boolean) => void
}) {
  const { setShowMenu } = props;
  return (
    <div className=" absolute flex flex-col justify-evenly right-0 top-12  pb-32 font-title w-full h-screen bg-white ">
      <a onClick={() => setTimeout(() =>setShowMenu(false), 250)} href="/#about" className="p-2 hover:text-gray-600 m-1">About</a>
      <a onClick={() => setTimeout(() =>setShowMenu(false), 250)} href="/#calendar" className="p-2 hover:text-gray-600 m-1">Calendar</a>
      <a onClick={() => setTimeout(() =>setShowMenu(false), 250)} href="/#musicians" className="p-2 hover:text-gray-600 m-1">Musicians</a>
      <a onClick={() => setTimeout(() =>setShowMenu(false), 250)} href="/#contact" className="p-2 hover:text-gray-600 m-1">Contact</a>
{/*       <a className="p-2 hover:bg-blue-50 m-1">Donate</a>
 */}    </div>
  )
}