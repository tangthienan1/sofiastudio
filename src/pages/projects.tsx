import AnimatedText from '@/components/AnimatedText';
import CustomHead from '@/components/CustomHead';
import FeaturedProjectCard from '@/components/FeaturedProjectCard';
import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { projectPageTitle, projects } from '@/data/projectPageData';

const Projects = () => {
    return (
        <>
            <CustomHead title="project" content="any" />
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="pt-16">
                    <AnimatedText text={projectPageTitle} className="mb-16 " />

                    <div className="grid grid-cols-12 gap-24 gap-y-32">
                        {projects.map((project, index) => {
                            if (index === 0) {
                                return (
                                    <div className="col-span-12" key={index}>
                                        <FeaturedProjectCard {...project} />
                                    </div>
                                );
                            }
                            return (
                                <div className="col-span-6" key={index}>
                                    <ProjectCard {...project} />
                                </div>
                            );
                        })}
                    </div>
                </Layout>
            </main>
        </>
    );
};

export default Projects;
