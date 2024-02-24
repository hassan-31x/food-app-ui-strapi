import Image from 'next/image'

type Props = {}

function HeaderMenu({}: Props) {
  return (
    <div className="flex flex-col items-center  justify-center w-[15%] lg:w-[10%] h-full">
    <div className="flex flex-row w-full h-[30%]  justify-between items-center">
      <div className="w-[35%] h-full relative items-center flex">
        <Image
          src="/LandingPageImages/Navbar/MenuIcon.svg"
          fill
          className="object-contain"
          alt="Facebook"
        />
      </div>
     <h3 className='blanch  md:text-2xl lg:text-4xl text-xl text-black'>MENÜ</h3>
    </div>
    <div className="w-full h-4 relative">
      <Image
        src="/LandingPageImages/Navbar/MenuUnderline.svg"
        fill
        className="object-contain"
        alt="Underline"
      />
    </div>
  </div>
  )
}

export default HeaderMenu