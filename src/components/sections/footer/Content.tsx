import Link from 'next/link'
import { Linkedin, Github, CircleArrowRight } from 'lucide-react'

export default function Content() {
    return (
        <footer className="py-8 px-4 text-gray-800 dark:text-gray-300">
            <div className="w-vw mx-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h2 className="text-xl font-bold mb-4">
                            Where <span className="text-indigo-400 dark:text-indigo-300">aesthetics</span> & <br />
                            <span className="text-teal-400 dark:text-teal-300">functionality</span> meet
                        </h2>
                    </div>
                    <div>
                        <h3 className="text-amber-400 dark:text-amber-300 font-semibold mb-2">Explore</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="hover:text-amber-300 dark:hover:text-amber-200 transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-amber-300 dark:hover:text-amber-200 transition-colors">About Me</Link></li>
                            <li><Link href="/contact" className="hover:text-amber-300 dark:hover:text-amber-200 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-teal-400 dark:text-teal-300 font-semibold mb-2">Follow Me</h3>
                        <ul className="space-y-2">
                            <li><Link href="https://www.linkedin.com/in/sai-deepak-perumbudur/" className="flex items-center hover:text-teal-300 dark:hover:text-teal-200 transition-colors"><Linkedin className="w-5 h-5 mr-2" /> LinkedIn</Link></li>
                            <li><Link href="https://github.com/Sai-Deepak-1" className="flex items-center hover:text-teal-300 dark:hover:text-teal-200 transition-colors"><Github className="w-5 h-5 mr-2" /> Github</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <Link href="/contact" className="flex justify-between gap-2 pt-3 group">
                            <div>
                                <div>
                                    <span className="text-xl font-semibold transition-all group-hover:text-cyan-500">Contact Me</span>
                                </div>
                                <h1 className="pb-2 text-sm text-sectext">Say Hello !</h1>
                            </div>
                            <div>
                                <div>
                                    <CircleArrowRight size={48} strokeWidth={1} className="transition-all ease-in-out rotate-0 group-hover:-rotate-45 [&_svg]bg-green-400" />
                                </div>
                            </div>
                        </Link>
                        <Link href="/projects" className="flex justify-between gap-2 pt-3 group">
                            <div>
                                <div>
                                    <span className="text-xl font-semibold transition-all group-hover:text-cyan-500">My Projects</span>
                                </div>
                                <h1 className="pb-2 text-sm text-sectext">Explore Projects</h1>
                            </div>
                            <div>
                                <div>
                                    <CircleArrowRight size={48} strokeWidth={1} className="transition-all ease-in-out rotate-0 group-hover:-rotate-45 [&_svg]bg-green-400" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <h1 className="text-center mt-20 text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-100 dark:from-gray-800 to-gray-300 dark:to-gray-600">
                    Sai Deepak
                </h1>
                <div className="border-t border-gray-700 dark:border-gray-600 pt-8 mt-8 relative overflow-hidden">
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-800 dark:text-gray-500">
                        <p className="mb-2 sm:mb-0">Sai Deepak ©2024</p>
                        <p>Hyderabad, India</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}