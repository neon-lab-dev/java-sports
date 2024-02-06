const AppDesktopNavbar = () => {
  const navLinks = ['Appreal', 'Batting Gears', 'bats', 'Balls', 'Wicket Keeping', 'Shoes', 'Helmate', 'Kitbags', 'Protection', 'Accessories'];

  return (
    <div className="mt-[20px] bg-white flex items-center">
      <div className="wrapper flex items-center capitalize">
        <ul className="flex flex-1 items-center h-[83px] font-Jakarta text-[1.5rem] font-500 leading-6 overflow-x-auto whitespace-nowrap gap-[4.25rem] cursor-pointer">
          { navLinks && navLinks.map((item, index) => <li key={ index } className="pointer">{ item }</li>) }
        </ul>
      </div>
    </div>
  )
}

export default AppDesktopNavbar