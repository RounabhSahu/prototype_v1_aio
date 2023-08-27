import logo from './logo.png'

import { Dropdown, Navbar } from 'flowbite-react';

export default function NavbarWithDropdown() {
    return (
        <Navbar
            fluid
            rounded
            className='absolute top-0 md:left-1/2 md:w-1/2 w-full z-10 md:-translate-x-1/2'
        >
            <Navbar.Brand href="#">
                <img
                    alt="Flowbite React Logo"
                    className="mr-3 h-6 sm:h-9"
                    src={logo}
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          All In One
        </span>
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Navbar.Link
                    active
                    href="#"
                >
                    <p>
                        Home
                    </p>
                </Navbar.Link>
                <Navbar.Link href="#">
                    About
                </Navbar.Link>
                <Navbar.Link href="#">
                    <div className="flex md:order-2">
                        <Dropdown
                            inline
                            label={'Services'}
                            className='px-4'
                        >
                            <li>
                                Dashboard
                            </li>
                            <li>
                                Settings
                            </li>
                            <li>
                                Earnings
                            </li>
                            <li>
                                Sign out
                            </li>
                        </Dropdown>
                    </div>
                </Navbar.Link>
                <Navbar.Link href="#">
                    Pricing
                </Navbar.Link>
                <Navbar.Link href="#">
                    Contact
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}


