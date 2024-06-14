import Link from 'next/link'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input } from '@nextui-org/react'

import HeaderAuth from '@/components/header-auth'

export default function Header() {
  return (
    <Navbar className="mb-6 shadow">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input placeholder="Search" />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  )
}
