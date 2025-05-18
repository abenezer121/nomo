'use client'
import React from 'react'


import Image from 'next/image'
import { useState } from 'react'

const LanguageDropDown = () => {
  const [isDropdownVisible, setIsDropDownVisible] = useState(false)

  const handleDropDown = () => {
    setIsDropDownVisible((prevState) => !prevState)
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-3" onClick={handleDropDown}>
        <Image
          src="/language.svg"
          alt="Language"
          width={42}
          height={42}
          loading="lazy"
          className="h-8 w-8 sm:h-[42px] sm:w-[42px]"
        />
        <div className="mr-2">
          <span className="font-inter truncate text-[24px] font-normal leading-[100%] tracking-[0%] text-white hover:text-orange-500">
            Українська
          </span>
        </div>
      </div>

      {isDropdownVisible && (
        <div className="absolute top-full right-0 z-10 mt-2 w-full max-w-[200px] rounded-md border border-gray-300 bg-white py-2 shadow-lg sm:w-auto">
          <ul>
            <li className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-3 py-2 text-base outline-none transition-colors hover:bg-gray-100 focus:bg-neutral-100 focus:text-neutral-900">
              <span className="truncate text-slate-900">Language 1</span>
            </li>
            <li className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-3 py-2 text-base outline-none transition-colors hover:bg-gray-100 focus:bg-neutral-100 focus:text-neutral-900">
              <span className="truncate text-slate-900">Language 2</span>
            </li>
            <li className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-3 py-2 text-base outline-none transition-colors hover:bg-gray-100 focus:bg-neutral-100 focus:text-neutral-900">
              <span className="truncate text-slate-900">Language 3</span>
            </li>
            <li className="relative flex cursor-default select-none items-center gap-2 rounded-sm px-3 py-2 text-base outline-none transition-colors hover:bg-gray-100 focus:bg-neutral-100 focus:text-neutral-900">
              <span className="truncate text-slate-900">Language 4</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

const Header: React.FC = () => {
  return (
    <nav className="flex h-[125.5px] items-center justify-between bg-[#0f0f0f] px-[33px] py-[14px] sm:px-[34px] sm:py-[21px] md:px-10 lg:px-20">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt="NomoCashback"
          width={82.5}
          height={83.5}
          className="h-[83.5px] w-[82.5px] sm:h-[83.5px] sm:w-[82.5px]"
          loading="lazy"
        />
      </div>

      <ul className="flex flex-col items-start gap-[38px] font-bold md:flex md:space-y-0 lg:flex-row lg:items-center">
        <li>
          <a className="text-orange-500 hover:text-orange-500" href="/cashback">
            Кешбек
          </a>
        </li>
        <li>
          <a className="transition-colors hover:text-orange-500" href="/map">
            Карта
          </a>
        </li>
        <li>
          <a className="transition-colors hover:text-orange-500" href="/">
            Криптовалюта
          </a>
        </li>
        <li>
          <a
            className="transition-colors hover:text-orange-500"
            href="/partnership"
          >
            Партнерство
          </a>
        </li>
        <li>
          <a className="transition-colors hover:text-orange-500" href="/we">
            Хто Ми
          </a>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <button className="rounded-[40px] bg-orange-500 py-[10px] text-[17px] font-bold transition-colors hover:bg-[#FFBF88] sm:px-[30px] sm:py-[10px] sm:text-[17px]">
          Exit
        </button>
        <LanguageDropDown />
      </div>
    </nav>
  )
}

export default Header
