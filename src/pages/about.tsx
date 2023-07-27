/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

import AnimatedText from '@/components/AnimatedText';
import HighlightNumberByText from '@/components/HighlightNumberByText';
import Layout from '@/components/Layout';
import PersonalBackground from '@/components/PersonalBackground';
import experiences from '@/components/PersonalBackground/experiences';
import Skills from '@/components/Skills';
import CustomHead from '@/components/CustomHead';

import { aboutTitle, biographyContentsData, educations, highlightContentsData } from '@/data/aboutPageData';

import profilePic from '../../public/images/profile/developer-pic-2.jpg';

const About = () => {
    return (
        <>
            <CustomHead title="About Page" content="any"/>
            <main className="flex w-full flex-col items-center justify-center">
                <Layout>
                    <AnimatedText text={aboutTitle} className="mb-16" />
                    <div className="grid w-full grid-cols-8 gap-16">
                        <div className="col-span-3 flex flex-col items-start justify-start">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                                Biography
                            </h2>
                            {biographyContentsData.map((content, index) => (
                                <p className="font-medium" key={index}>
                                    {content}
                                </p>
                            ))}
                        </div>

                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
                            <Image
                                src={profilePic}
                                alt="Andy"
                                className="w-ful h-auto rounded-2xl"
                            />
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-between">
                            {highlightContentsData.map((highlightContent, index) => (
                                <HighlightNumberByText {...highlightContent} key={index} />
                            ))}
                        </div>
                    </div>
                    <Skills />
                    <PersonalBackground title="Experience" details={experiences} />
                    <PersonalBackground title="Education" details={educations} />
                </Layout>
            </main>
        </>
    );
};

export default About;
