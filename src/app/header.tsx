import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-background h-[64px] border-0 border-b border-gray">
            <div className="relative flex w-full items-center justify-between px-[var(--layout-padding)] flex items-center justify-between">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <img src="/logo.svg" alt="Logo" className="mr-8" />
                    </div>
                    <nav className="space-x-4 text-primary">
                        <Link href="/">
                            Services
                        </Link>
                        <Link href="/about">
                            Contact
                        </Link>
                    </nav>
                </div>
                <div className="h-[64px] flex items-center justify-between">
                    <button className="bg-green px-4 h-full flex items-center gap-2">
                        <Image src="/whatsapp.svg" alt="Whatsapp" width={36} height={36}/><span className="font-size-16 text-white">Chat on Whatsapp</span>
                    </button>
                    <button className="bg-black px-4 h-full flex items-center gap-2">
                        <Image src="/call.svg" alt="Call" width={36} height={36}/><span className="font-size-16 text-white"> +971 55 796 7733</span>
                    </button>
                </div>
            </div>
        </header>)
}