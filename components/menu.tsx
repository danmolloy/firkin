
export default function Menu(props: {
  setShowMenu: (arg: boolean) => void
}) {
  const { setShowMenu } = props;
  return (
    <div className="bg-white absolute flex flex-col right-0 mt-3 font-title w-1/2 md:w-1/4">
      <a onClick={() => setTimeout(() =>setShowMenu(false), 250)} href="/#about" className="p-2 hover:bg-blue-50 m-1">About</a>
      <a onClick={() => setTimeout(() =>setShowMenu(false), 250)} href="/#calendar" className="p-2 hover:bg-blue-50 m-1">Calendar</a>
      <a onClick={() => setTimeout(() =>setShowMenu(false), 250)} href="/#musicians" className="p-2 hover:bg-blue-50 m-1">Musicians</a>
      <a onClick={() => setTimeout(() =>setShowMenu(false), 250)} href="/#contact" className="p-2 hover:bg-blue-50 m-1">Contact</a>
{/*       <a className="p-2 hover:bg-blue-50 m-1">Donate</a>
 */}    </div>
  )
}