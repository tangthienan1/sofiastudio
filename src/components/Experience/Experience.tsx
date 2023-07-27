import { useRef } from 'react';
import ExperienceDetail from './ExperienceDetails';
import experiences from './experiences';
import { motion, useScroll } from 'framer-motion';

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        //The offset type is missing on useScroll package but can use normally
        offset: ['start end', 'center start'],
    });

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center">Experience</h2>
            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
                />

                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    {experiences.map((experience, index) => (
                        <ExperienceDetail {...{ ...experience }} key={index} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Experience;
