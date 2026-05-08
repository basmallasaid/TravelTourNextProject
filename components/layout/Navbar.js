"use client";
import { useState, Fragment, useEffect } from "react"; // أضفنا useEffect
import { usePathname } from "next/navigation"; 
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link"; 

const navigation = {
  categories: [
    { name: "Home", href: "/" },
    { name: "Travel", href: "/destinations" },
    {
      name: "Pages",
      href: "#",
      sections: [
        { name: "About Us", href: "/about" },
        { name: "Search", href: "/search" },
        { name: "Admin", href: "/admin" },
      ],
    },
    { name: "Blog", href: "/blog" },
  ],
};

export default function LoveTravelNavbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // حالة للتأكد من التحميل في المتصفح
  const pathname = usePathname(); 

  // تفعيل الحالة بعد أول ريندر في المتصفح فقط
  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (href) => (mounted ? pathname === href : false);
  
  const isSectionActive = (sections) => {
    if (!mounted) return false;
    return sections?.some(section => pathname === section.href);
  };

  return (
    <div className="sticky top-0 z-50 w-full shadow-md">
      {/* Mobile Menu */}
      <Transition show={open} as={Fragment}>
        <Dialog as="div" className="relative z-100 lg:hidden" onClose={setOpen}>
          <div className="fixed inset-0 z-40 flex">
            <TransitionChild as={Fragment}>
              <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button type="button" onClick={() => setOpen(false)} suppressHydrationWarning>
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-100 px-4 py-6 text-left">
                  {navigation.categories.map((category) => (
                    <div key={category.name} className="flow-root">
                      <Link 
                        href={category.href} 
                        className={`-m-2 block p-2 font-medium ${isActive(category.href) ? 'text-[#d97d4a]' : 'text-gray-900'}`}
                        onClick={() => setOpen(false)}
                      >
                        {category.name}
                      </Link>
                      {category.sections && (
                         <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-50">
                            {category.sections.map((sub) => (
                                <Link 
                                  key={sub.name} 
                                  href={sub.href} 
                                  className={`block text-sm py-1 uppercase ${isActive(sub.href) ? 'text-[#d97d4a] font-bold' : 'text-gray-500'}`}
                                  onClick={() => setOpen(false)}
                                >
                                  {sub.name}
                                </Link>
                            ))}
                         </div>
                      )}
                    </div>
                  ))}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      {/* Top Bar */}
      <div className="bg-[#1e2a5e] text-white text-[13px] py-2 px-4 lg:px-20 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="hidden sm:inline">Contact us at +1 836 483 384</span>
          <span className="text-[#d97d4a] hidden sm:inline">•</span>
          <a href="#" className="hover:underline italic font-serif">Travel Itinerary</a>
        </div>
        <div>info@travel.com</div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-100 h-20">
        <nav className="mx-auto flex h-full items-center justify-between pl-4 lg:pl-12 pr-0">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logov3.png" width={160} height={50} alt="logo" className="object-contain" />
          </Link>

          {/* Desktop Menu */}
          <PopoverGroup className="hidden lg:flex items-center space-x-6">
            {navigation.categories.map((category, index) => (
              <div key={category.name} className="flex items-center">
                {category.sections ? (
                  <Popover className="relative">
                    <PopoverButton 
                      suppressHydrationWarning // تمنع الخطأ الناتج عن إضافات المتصفح
                      className={`text-[15px] font-bold outline-none hover:text-[#d97d4a] transition-colors ${isSectionActive(category.sections) ? 'text-[#d97d4a]' : 'text-black'}`}
                    >
                      {category.name}
                    </PopoverButton>
                    <PopoverPanel className="absolute left-1/2 -translate-x-1/2 top-full mt-7 w-52 bg-[#1e2a5e] py-4 shadow-xl">
                      {category.sections.map((item) => (
                        <Link 
                          key={item.name} 
                          href={item.href} 
                          className={`block px-8 py-3 text-[13px] transition-colors ${isActive(item.href) ? 'text-[#d97d4a] font-bold' : 'text-white hover:bg-[#28397a]'}`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </PopoverPanel>
                  </Popover>
                ) : (
                  <Link 
                    href={category.href} 
                    className={`text-[15px] font-bold transition-colors ${isActive(category.href) ? 'text-[#d97d4a]' : 'text-black hover:text-[#d97d4a]'}`}
                  >
                    {category.name}
                  </Link>
                )}
                {index !== navigation.categories.length - 1 && (
                  <span className="ml-6 text-[#d97d4a] text-lg font-bold">•</span>
                )}
              </div>
            ))}
          </PopoverGroup>

          <div className="flex h-full items-center">
            <div className="hidden lg:flex h-full items-center">
              <Image src="/bgnav.png" width={33} height={80} alt="bg" className="h-full object-cover" />
              <Link 
                href="/search" 
                className={`h-full text-white font-extrabold text-lg px-10 flex items-center justify-center transition-all ${isActive('/search') ? 'bg-[#D57C48]' : 'bg-[#D57C48] hover:bg-[#D57C48]'}`}
              >
                Search Travel
              </Link>
            </div>
            <button onClick={() => setOpen(true)} className="lg:hidden p-4 text-[#1e2a5e]" suppressHydrationWarning>
              <Bars3Icon className="h-8 w-8" />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}