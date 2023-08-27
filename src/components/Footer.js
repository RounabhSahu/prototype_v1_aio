import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function FooterSitemapLinks() {
    const textCol='text-white/80';
    return (
        <Footer className={'bg-sky-900 relative'}>
            <div className={'h-2 bg-black/50 w-full absolute top-0'}/>
            <div className="w-full md:w-1/2 mx-auto">
                <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                    <div>
                        <Footer.Title title="All In One" className='text-white'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href="#" className={textCol}>
                                About
                            </Footer.Link>
                            <Footer.Link href="#" className={textCol}>
                                Careers
                            </Footer.Link>
                            <Footer.Link href="#" className={textCol}>
                                Brand Center
                            </Footer.Link>
                            <Footer.Link href="#" className={textCol}>
                                Blog
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="help center"  className='text-white'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href="#" className={textCol}>
                                Discord Server
                            </Footer.Link>
                            <Footer.Link href="#" className={textCol}>
                                Twitter
                            </Footer.Link>
                            <Footer.Link href="#" className={textCol}>
                                Facebook
                            </Footer.Link>
                            <Footer.Link href="#" className={textCol}>
                                Contact Us
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="legal"  className='text-white'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href="#" className={textCol}>
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link href="#" className={textCol}>
                                Licensing
                            </Footer.Link>
                            <Footer.Link href="#" className={textCol}>
                                Terms & Conditions
                            </Footer.Link>
                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title title="Subscribe"  className='text-white'/>
                        <Footer.LinkGroup col>
                            <div className="text-md  flex flex-row items-center overflow-hidden">

                                <input type="email" placeholder="your mail" className='w-full h-7 text-sm p-0 pl-2 text-slate-900'/>
                                {/*<input type="email" placeholder="yourmail@example.com"*/}
                                {/*       className="flex-1 appearance-none rounded shadow p-3 text-grey-dark focus:outline-none  text-md"/>*/}
                                <button type="submit"
                                        className="bg-slate-700 text-white w-24 py-1 font-semibold shadow-md hover:bg-indigo-600 -pt-1 font-bold scale-110  text-md">→
                                </button>

                            </div>
                            <div className={textCol}>
                                Get the latest news and updates right at your inbox.
                            </div>
                        </Footer.LinkGroup>
                    </div>
                </div>
                <div className="w-full bg-sky-950 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        by="AllInOne™"
                        href="#"
                        year={2018}
                        className='text-white'
                    />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon
                            href="#"
                            icon={BsFacebook}
                            className={textCol}
                        />
                        <Footer.Icon
                            href="#"
                            icon={BsInstagram}
                            className={textCol}
                        />
                        <Footer.Icon
                            href="#"
                            icon={BsTwitter}
                            className={textCol}
                        />
                        <Footer.Icon
                            href="#"
                            icon={BsGithub}
                            className={textCol}
                        />
                        <Footer.Icon
                            href="#"
                            icon={BsDribbble}
                            className={textCol}
                        />
                    </div>
                </div>
            </div>
        </Footer>
    )
}


