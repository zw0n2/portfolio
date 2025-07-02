import NavBar from '@/components/NavBar';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import { FaChevronDown } from 'react-icons/fa';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';

export default function Home() {
    return (
        <>
            <NavBar />
            <main className="w-full max-w-[1216px] min-h-[537px] mx-auto px-0">
                <AboutMe />

                <div className="flex flex-col items-center -space-y-4">
                    <span className="chevron-smooth">
                        <FaChevronDown className="text-4xl text-neutral-300 opacity-80" />
                    </span>
                    <span className="chevron-smooth">
                        <FaChevronDown className="text-4xl text-neutral-300 opacity-40" />
                    </span>
                </div>

                <Skills />
                {<Projects />}
                {<Timeline />}
            </main>
        </>
    );
}
