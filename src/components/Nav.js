import logo from './logo.png'

import { Dropdown, Navbar } from 'flowbite-react';

export default function Nav({toggleAccountBox}) {
    return (
        <div className='sticky top-0 z-10 w-full bg-plat pb-2 pt-2 backdrop-blur'>
            <Navbar
                fluid
                rounded
                className='mx-auto md:left-1/2 md:w-1/2 w-full  text-xl bg-transparent'
            >
                <Navbar.Brand href="#">
                    <img
                        alt="Flowbite React Logo"
                        className="mr-3 h-6 sm:h-9"
                        src={logo}
                    />
                    <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
          All In One
        </span>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className='text-xl'>
                    <Navbar.Link
                        active
                        href="#"
                    >
                        <p className='text-xl'>
                            Home
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="#" className='text-xl'>
                        About
                    </Navbar.Link>
                    <Navbar.Link href="#" className='text-xl'>
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
                    <Navbar.Link href="#" className='text-xl'>
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="#" className='text-xl' onClick={toggleAccountBox}>
                        <div onClick={toggleAccountBox}>SignIn</div>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}


