'use client';

import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { MENUS, MENUS_POLICY_TERMS } from '@/app/routes';

const LOGOS = [
  <FaFacebookSquare key={1} size={20} className="text-slate-600" />,
  <FaInstagram key={2} size={20} className="text-slate-600" />,
  <FaTwitter key={3} size={20} className="text-slate-600" />
];

export default function Footer() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="h-auto w-full flex-none"
      >
        <footer className="relative flex h-min w-full max-w-7xl flex-col flex-nowrap content-center items-center justify-center gap-0 overflow-visible px-6 py-8 opacity-100">
          <div className="w-full opacity-100">
            <div className="mb-2 flex-shrink-0">
              <Link href="/">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                  src="/towedd.svg"
                  alt="ToWedd Logo"
                  width={170}
                  height={40}
                  priority
                />
              </Link>
            </div>
            <div className="relative flex h-auto w-[249px] flex-shrink-0 flex-col justify-start overflow-hidden whitespace-pre-wrap outline-none">
              <p className="font-neulis-alt-medium text-sm text-gray-700">
                Platform undangan online based on Indonesia.
              </p>
            </div>
          </div>
          <div className=" relative my-8 grid h-min w-full max-w-full auto-rows-min grid-cols-[repeat(2,minmax(200px,1fr))] grid-rows-[repeat(1,min-content)] justify-center gap-8 content-[unset]">
            <div className="relative flex h-min w-full flex-col flex-nowrap items-start justify-start gap-[15px] self-start justify-self-start overflow-visible p-0 opacity-100">
              <div className="relative flex h-auto w-auto flex-shrink-0 transform-none flex-col justify-start whitespace-pre opacity-100 outline-none">
                <p className="font-neulis-alt-medium text-slate-700">MENU</p>
              </div>
              <div className="relative flex h-min w-full flex-col flex-nowrap content-start items-start justify-start gap-2 p-0">
                {MENUS.filter((a) => a.name !== 'Home').map((menu, index) => (
                  <div
                    key={index}
                    className="relative flex h-auto w-full flex-shrink-0 flex-col justify-start overflow-hidden whitespace-pre-wrap outline-none"
                  >
                    <div className="font-neulis-alt-medium text-base text-slate-500 transition-all duration-200">
                      <Link href={menu.url} className="hover:text-slate-800 hover:underline">
                        {menu.name}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex h-min w-full flex-col flex-nowrap items-start justify-start gap-[15px] self-start justify-self-start overflow-visible p-0 opacity-100">
              <div className="relative flex h-auto w-auto flex-shrink-0 transform-none flex-col justify-start whitespace-pre opacity-100 outline-none">
                <p className="font-neulis-alt-medium text-slate-700">OTHERS</p>
              </div>
              <div className="relative flex h-min w-full flex-col flex-nowrap content-start items-start justify-start gap-2 p-0">
                {MENUS_POLICY_TERMS.map((menu, index) => (
                  <div
                    key={index}
                    className="relative flex h-auto w-full flex-shrink-0 flex-col justify-start overflow-hidden whitespace-pre-wrap outline-none"
                  >
                    <div className="font-neulis-alt-medium text-base text-slate-500 transition-all duration-200">
                      <Link href={menu.url} className="hover:text-slate-800 hover:underline">
                        {menu.name}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex h-min w-full flex-row flex-nowrap content-center items-center justify-between overflow-visible border-t border-[rgb(229,211,196)] pt-6">
            <div className="relative flex h-auto w-auto flex-shrink-0 flex-col justify-start whitespace-pre outline-none">
              <p className=" font-neulis-alt-medium text-[14px] text-gray-500/80">
                &copy; {new Date().getFullYear()} Towedd. All Rights reserved
              </p>
            </div>
            <div className="relative flex h-min w-min flex-row flex-nowrap content-center items-center justify-start gap-6 p-0">
              {LOGOS.map((logo, index) => (
                <div key={index} className="relative aspect-square h-auto w-[20px] flex-none">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </footer>
      </motion.div>
    </>
  );
}
