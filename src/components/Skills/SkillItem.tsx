import { FC } from 'react';
import { motion } from 'framer-motion';
type SkillType = {
    name: string;
    x: string;
    y: string;
};

const SkillItem: FC<SkillType> = ({ name, x, y }) => {
    return (
        <motion.div
            className="flex items-center justify-center rounded-full font-semibold bg-dark
        text-light py-3 px-6 shadow-dark cursor-pointer absolute"
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x, y }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
        >
            {name}
        </motion.div>
    );
};

export default SkillItem