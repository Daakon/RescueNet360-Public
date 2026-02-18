import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigation = [
        { name: 'The Problem', href: '#problem' },
        { name: 'The Solution', href: '#solution' },
        { name: 'Technology', href: '#technology' },
        { name: 'Market', href: '#market' },
        { name: 'Team', href: '#team' },
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-2' : 'bg-transparent py-4'
                }`}
        >
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
                <div className="flex items-center justify-between h-16">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2 group">
                            <span className="sr-only">RescueNet360</span>
                            {/* Logo Placeholder - Matches site aesthetic */}
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white font-bold shadow-md group-hover:scale-105 transition-transform duration-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                    </svg>
                                </div>
                                <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                                    RescueNet<span className="text-primary">360</span>
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex lg:gap-x-8">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium leading-6 transition-colors duration-200 hover:text-primary ${scrolled ? 'text-gray-700' : 'text-gray-800'
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a
                            href="#waitlist"
                            className="rounded-full bg-secondary px-6 py-2 text-xs font-bold uppercase text-white shadow-md hover:bg-secondary/90 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary transition-all transform hover:-translate-y-0.5 duration-200 tracking-wider"
                        >
                            Join Waitlist
                        </a>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <div className={`lg:hidden absolute inset-x-0 top-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'
                }`}>
                <div className="space-y-1 px-4 pb-6 pt-4">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="block rounded-lg px-4 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="mt-6 px-4">
                        <a
                            href="#waitlist"
                            className="block w-full text-center rounded-full bg-secondary px-4 py-3 text-sm font-bold uppercase text-white shadow hover:bg-secondary/90 transition-all tracking-wider"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Join Waitlist
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
