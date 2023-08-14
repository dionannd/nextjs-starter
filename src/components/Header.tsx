'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import { useTheme } from 'next-themes';
import React from 'react';

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <Navbar>
      <NavbarBrand>
        <p className='font-bold text-inherit'>ACME</p>
      </NavbarBrand>
      <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Tokopedia
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='#' aria-current='page'>
            Lazada
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            Shopee
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <Button
          isIconOnly
          variant='light'
          size='sm'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <SunIcon className='h-6 w-6' />
          ) : (
            <MoonIcon className='h-6 w-6' />
          )}
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
