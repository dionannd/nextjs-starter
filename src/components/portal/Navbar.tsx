'use client';

import { menus } from '@/app/routes';
import clxsm from '@/lib/utils/clxsm';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [activePageIndex, setActivePageIndex] = useState<number | null>(null);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState<number>(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState<number>(0);

  const ref = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (activePageIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = ref.current[activePageIndex] as HTMLElement;
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.offsetWidth ?? 0);
    };

    setTabPosition();
  }, [activePageIndex]);

  return (
    <nav className="mb-10 w-full py-3">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex w-full items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
                  src="/towedd.svg"
                  alt="ToWedd Logo"
                  width={170}
                  height={40}
                  priority
                  onClick={() => setActivePageIndex(0)}
                />
              </Link>
            </div>
            <div className="relative mx-auto flex flex-row justify-between px-2 py-3.5 backdrop-blur-sm">
              <span
                className="absolute bottom-0 top-0 -z-10 flex overflow-hidden py-2 transition-all duration-300"
                style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
              >
                <span className="h-full w-full rounded-xl bg-gray-300/30" />
              </span>
              {menus.map((menu, index) => {
                const isActive = activePageIndex === index;

                return (
                  <Link key={index} href={menu.url}>
                    <button
                      ref={(el) => (ref.current[index] = el)}
                      className={clxsm(
                        'text-centerk my-auto cursor-pointer select-none rounded-full px-4 font-medium text-neutral-400',
                        isActive ? 'text-neutral-700' : 'hover:text-neutral-700'
                      )}
                      onClick={() => setActivePageIndex(index)}
                    >
                      {menu.name}
                    </button>
                  </Link>
                );
              })}
            </div>
            <div className="flex items-center gap-1 font-medium">
              <Link href="/dashboard/login">
                <button className="rounded-full bg-black/70 px-5 py-2 text-white">Login</button>
              </Link>

              <Link href="/dashboard/signup">
                <button className="rounded-full border border-purple-500 bg-transparent px-5 py-2 text-purple-500 transition-all duration-300 hover:bg-purple-500 hover:text-white">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
