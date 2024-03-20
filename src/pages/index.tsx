import Image from 'next/image';
import Link from 'next/link';
import { FC, useRef } from 'react';

import cameraIcon from '../../public/images/svgs/flat-camera.svg';

import AnimatedText from '@/components/AnimatedText';
import ButtonAsLink from '@/components/ButtonAsLink';
import CustomHead from '@/components/CustomHead';
import Layout from '@/components/Layout';
import { FACEBOOK_URL } from '@/const/links';
import { landingPageDescription, landingPageTitle } from '@/data/landingPageData';

const Home: FC = () => {
    const videoRef: any = useRef();

    return (
        <>
            <CustomHead title={'Sofia Studio'} content={'Sofia Studio'} />
            <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
                <Layout className="pt-0 md:pt-16 sm:pt-8">
                    <div className="flex items-center w-full lg:flex-col gap-7">
                        <div className="w-1/3 md:w-full">
                            <div
                                className="relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8
                        dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
                            >
                                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                                <video
                                    onClick={() => (videoRef.current.muted = !videoRef.current.muted)}
                                    ref={videoRef}
                                    autoPlay
                                    playsInline
                                    muted
                                    className="w-ful h-auto rounded-2xl m-auto"
                                >
                                    <source src="/studio.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>

                        <div className="w-2/3 flex flex-col items-center justify-center lg:w-full lg:text-center">
                            <AnimatedText
                                text={landingPageTitle}
                                className="!text-6xl xl:!text-5xl !text-center "
                            />

                            <div>
                                <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                                    {landingPageDescription}
                                </p>
                                <p className="text-end">--Một cổ nhân nào đó--</p>
                            </div>

                            <div className="flex items-center mt-6 lg:self-center">
                                <ButtonAsLink
                                    href={FACEBOOK_URL}
                                    isDownLoadable={true}
                                    content="Book luôn 🥳"
                                />
                                <Link
                                    href="/about"
                                    className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-basel"
                                >
                                    Bảng giá
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>
                <div className="absolute right-8 bottom-0 inline-block w-40 md:hidden">
                    <Image src={cameraIcon} alt="light" className="w-full h-auto" />
                </div>
            </main>
        </>
    );
};

export default Home;
