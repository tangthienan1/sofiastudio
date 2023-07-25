import Layout from '@/components/Layout';
import Image from 'next/image';
import { FC } from 'react';
import profile from '../../public/images/profile/developer-pic-1.png';
import Link from 'next/link';
import AnimatedText from '@/components/AnimatedText';

const HOME_ANIMATED_TEXT = 'Turning Vision Into Reality With Code And Design.';
const HOME_DESCRIPTION_TEXT =
    'As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development. ';

const Home: FC = () => {
    return (
        <main className="flex items-center text-dark w-full min-h-screen">
            <Layout className="pt-0">
                <div className="flex items-center justify-between w-full">
                    <div className="w-1/2">
                        <Image src={profile} alt={'Me'} className="w-full h-auto" />
                    </div>
                    <div className="w-1/2 flex flex-col items-center self-center">
                        <AnimatedText text={HOME_ANIMATED_TEXT} className="!text-6xl !text-left" />
                        <p className="my-4 text-base font-medium">{HOME_DESCRIPTION_TEXT}</p>
                        <div className="flex items-center self-start mt-2">
                            <Link
                                href={'/Resume-Tang-Thien-An.pdf'}
                                className="flex items-center bg-dark text-light p-2.5 px-6
                                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                                border-2 border-solid border-transparent hover:border-dark"
                                download={true}
                            >
                                Resume <LinkArrow className="w-6 ml-1" />
                            </Link>
                            <Link
                                href="mailto:tangthienan9@gmail.com"
                                className="ml-4 text-lg font-medium capitalize text-dark underline"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </main>
    );
};

export default Home;
