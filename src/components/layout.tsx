import { ReactNode } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { TbDeviceDesktopCode } from 'react-icons/tb'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="bg-[#161b22] w-full">
        <nav className="flex justify-between p-4">
          <div className="flex justify-between items-center gap-6">
            <TbDeviceDesktopCode fontSize={'1.8rem'} />
            <h1 className="text-lg">devBlog</h1>
          </div>

          <div className="flex justify-around gap-20">
            <input
              type="text"
              placeholder={'Pesquisar'}
              className="bg-[#000] text-[#fff] border-[1px] border-[#aaa] rounded-[3px] py-[0.3rem] pl-3 pr-12"
            />

            <ul>
              <li className="hover:cursor-pointer">
                <RxHamburgerMenu fontSize={'1.8rem'} />
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {children}
    </>
  )
}
