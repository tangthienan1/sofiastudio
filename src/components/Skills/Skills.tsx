import { motion } from 'framer-motion';
import SkillItem from './SkillItem';

const Skills = () => {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
                <motion.div
                    className="flex items-center justify-center rounded-full font-semibold bg-dark
        text-light p-8 shadow-dark cursor-pointer  dark:text-dark dark:bg-light"
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>

                <SkillItem name={'HTML'} x={'-25vw'} y={'2vw'} />
                <SkillItem name={'CSS'} x={'-5vw'} y={'-10vw'} />
                <SkillItem name={'Javascript'} x={'20vw'} y={'6vw'} />
                <SkillItem name={'ReactJS'} x={'0vw'} y={'12vw'} />
                <SkillItem name={'NextJS'} x={'-20vw'} y={'-15vw'} />
                <SkillItem name={'GatsbyJS'} x={'15vw'} y={'-12vw'} />
                <SkillItem name={'Web Design'} x={'32vw'} y={'-5vw'} />
                <SkillItem name={'Figma'} x={'0vw'} y={'-20vw'} />
                <SkillItem name={'AWS'} x={'-25vw'} y={'18vw'} />
                <SkillItem name={'NodeJS'} x={'18vw'} y={'18vw'} />
            </div>
        </>
    );
};

export default Skills;
