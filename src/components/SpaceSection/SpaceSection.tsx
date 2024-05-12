/* eslint-disable react/no-unescaped-entities */
import { FC } from 'react';

import khonggianngoai1 from 'public/images/studio/khonggianngoai1.jpg';
import khonggianngoai2 from 'public/images/studio/khonggianngoai2.jpg';
import khonggianngoai3 from 'public/images/studio/khonggianngoai3.jpg';
import khonggianngoai4 from 'public/images/studio/khonggianngoai4.jpg';
import khonggianngoai5 from 'public/images/studio/khonggianngoai5.jpg';
import khonggiantrong1 from 'public/images/studio/khonggiantrong1.jpg';
import khonggiantrong2 from 'public/images/studio/khonggiantrong2.jpg';
import khonggiantrongdoc from 'public/images/studio/khonggiantrongdoc.jpg';
import maysay from 'public/images/studio/maysay.jpg';
import moctreodo from 'public/images/studio/moctreodo.jpg';

import { SpaceSectionType } from './type';
import { AnimatedImage } from '../AnimatedImage';
import { Text } from '../Text';

export const SpaceSection: FC<SpaceSectionType> = ({ title }) => {
    return (
        <div className="grid my-32 ">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                {title}
            </h2>

            {/* Khong gian ngoai */}
            <section className="grid grid-cols-2 gap-9">
                <div>
                    <AnimatedImage
                        alt="out space 1"
                        className="w-full rounded-2xl h-auto object-cover aspect-square xs:aspect-auto "
                        src={khonggianngoai1}
                    />
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Bên ngoài / Outside</h2>
                    <Text className="mb-4">
                        Chiếm phần lớn diện tích của studio, có thể set up để livestream hoặc ghi
                        hình các buổi phỏng vấn, podcast,...
                    </Text>
                    <Text>
                        Taking up the major of space in the studio space, it can be set up for live
                        streaming or recording various activities such as interviews, podcasts,...
                    </Text>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Bên ngoài / Outside</h2>
                    <Text className="mb-4">
                        Chiếm phần lớn diện tích của studio, có thể set up để livestream hoặc ghi
                        hình các buổi phỏng vấn, podcast,...
                    </Text>
                    <Text>
                        Taking up the major of space in the studio space, it can be set up for
                        livestreaming or recording various activities such as interviews,
                        podcasts,...
                    </Text>
                </div>
                <div className="col-start-2">
                    <AnimatedImage
                        alt="out space 2"
                        className="w-full rounded-2xl h-auto mt-4 object-cover aspect-square xs:aspect-auto"
                        src={khonggianngoai2}
                    />
                </div>
            </section>

            {/* Khong gian ngoai Sub */}
            <section className="grid grid-cols-3 gap-4 mt-8">
                <AnimatedImage
                    alt="out space 3"
                    className="w-full rounded-2xl h-auto mt-[-1.25rem] object-cover aspect-square"
                    src={khonggianngoai3}
                />

                <AnimatedImage
                    alt="out space 4"
                    className="w-full rounded-2xl h-auto mt-5 object-cover aspect-square"
                    src={khonggianngoai4}
                />

                <AnimatedImage
                    alt="in space 1"
                    className="w-full rounded-2xl h-auto object-cover aspect-square"
                    src={khonggianngoai5}
                />
            </section>

            {/* Khong gian trong */}
            <section className="grid grid-cols-3 grid-rows-2 gap-4 mt-8 sm:grid-cols-2">
                <div className="row-span-2 sm:row-span-1">
                    <h3 className="text-xl font-bold mb-2">Bên trong / Inside</h3>
                    <Text className="mb-4">
                        Diện tích không to, thể hiện sự ấm cúng, thích hợp để chụp cá nhân, thể hiện
                        rõ hơn nét cá tính.
                    </Text>
                    <Text>
                        With a cozy, intimate space, it's perfect for personal photoshoots, allowing
                        one's personality to shine through more distinctly.
                    </Text>
                </div>

                <AnimatedImage
                    alt="out space 4"
                    className="w-full rounded-2xl h-auto object-cover aspect-square sm:aspect-auto"
                    src={khonggiantrong1}
                />
                <div className="col-start-2 row-start-2">
                    <AnimatedImage
                        alt="in space 1"
                        className="w-full rounded-2xl h-auto object-cover aspect-square sm:aspect-auto"
                        src={khonggiantrong2}
                    />
                </div>

                <div className="row-span-2">
                    <AnimatedImage
                        alt="out space 4"
                        className="w-full mt-6 h-auto rounded-2xl object-cover sm:aspect-auto"
                        src={khonggiantrongdoc}
                    />
                </div>
            </section>

            <section className="grid grid-cols-3 gap-4 mt-8">
                <div>
                    <h3 className="text-xl font-bold">Hỗ trợ móc</h3>
                    <AnimatedImage
                        alt="moc treo"
                        className="w-full rounded-2xl h-auto object-cover aspect-square"
                        src={moctreodo}
                    />
                </div>

                <div>
                    <h3 className="text-xl font-bold">Hỗ trợ máy sáy</h3>
                    <AnimatedImage
                        alt="May say"
                        className="w-full rounded-2xl h-auto mt-7 object-cover aspect-square"
                        src={maysay}
                    />
                </div>

                <div>
                    <h3 className="text-xl font-bold">Hỗ trợ bàn ủi </h3>
                    <AnimatedImage
                        alt="in space 1"
                        className="w-full rounded-2xl h-auto mt-4 object-cover aspect-square"
                        src={khonggianngoai5}
                    />
                </div>
            </section>
        </div>
    );
};
