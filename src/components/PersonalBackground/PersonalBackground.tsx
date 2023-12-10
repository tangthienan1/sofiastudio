import { FC, useRef } from 'react';
import { DetailType } from './Detail';

import khonggianngoai1 from '../../../public/images/studio/khonggianngoai1.jpg';
import khonggianngoai2 from '../../../public/images/studio/khonggianngoai2.jpg';
import khonggianngoai3 from '../../../public/images/studio/khonggianngoai3.jpg';
import khonggianngoai4 from '../../../public/images/studio/khonggianngoai4.jpg';
import khonggianngoai5 from '../../../public/images/studio/khonggianngoai5.jpg';
import khonggiantrong1 from '../../../public/images/studio/khonggiantrong1.jpg';
import khonggiantrong2 from '../../../public/images/studio/khonggiantrong2.jpg';
import AnimatedImage from '../AnimatedImage';

type PersonalBackgroundType = {
    title: string;
    details: DetailType[];
};
const PersonalBackground: FC<PersonalBackgroundType> = ({ title }) => {
    const ref = useRef(null);

    return (
        <div className="grid my-32 ">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                {title}
            </h2>
            <section className="grid grid-cols-2 gap-9">
                <AnimatedImage
                    alt="out space 1"
                    className="w-full h-auto object-cover aspect-square"
                    src={khonggianngoai1}
                />
                <div>
                    <h2 className="text-2xl font-bold mb-4">Không gian ngoài .</h2>
                    <p className="mb-4">
                        Chiếm phần lớn diện tích của studio, có thể set up để livestream hoặc ghi
                        hình các buổi phỏng vấn, podcast,...
                    </p>
                    <p>
                        Taking up a significant portion of the studio space, it can be set up for
                        livestreaming or recording various activities such as interviews, podcasts,
                        and more.
                    </p>
                    <AnimatedImage
                        alt="out space 2"
                        className="w-full h-auto mt-4 object-cover aspect-square"
                        src={khonggianngoai2}
                    />
                </div>
            </section>
            <section className="grid grid-cols-3 gap-4 mt-8">
                <div>
                    <AnimatedImage
                        alt="out space 3"
                        className="w-full h-auto mb-2 object-cover aspect-square"
                        src={khonggianngoai3}
                    />
                    <h3 className="text-xl font-bold mb-2">Không gian trong phòng.</h3>
                    <p className="mb-4">
                        Diện tích không to, thể hiện sự ấm cúng, thích hợp để chụp cá nhân, thể hiện
                        rõ hơn nét cá tính
                    </p>
                    <p>
                        With a cozy, intimate space, it's perfect for personal photoshoots, allowing
                        one's personality to shine through more distinctly.
                    </p>
                </div>

                <div>
                    <AnimatedImage
                        alt="out space 4"
                        className="w-full h-auto object-cover aspect-square"
                        src={khonggianngoai4}
                    />
                    <AnimatedImage
                        alt="in space 1"
                        className="w-full h-auto mt-4 object-cover aspect-square"
                        src={khonggiantrong1}
                    />
                </div>

                <div>
                    <AnimatedImage
                        alt="in space 1"
                        className="w-full h-auto object-cover aspect-square"
                        src={khonggianngoai5}
                    />
                    <AnimatedImage
                        alt="in space 2"
                        className="w-full h-auto mt-4 object-cover aspect-square"
                        src={khonggiantrong2}
                    />
                </div>
            </section>
            <section className="grid grid-cols-3 gap-4 mt-8">
                <div>
                    <h3 className="text-xl font-bold">Hổ trợ móc</h3>
                    <AnimatedImage
                        alt="Services"
                        className="w-full h-auto mt-4 object-cover aspect-square"
                        src={khonggiantrong2}
                    />
                </div>
                <div>
                    <h3 className="text-xl font-bold">Hổ trợ bàn ủi</h3>
                    <AnimatedImage
                        alt="Contact"
                        className="w-full h-auto mt-4 object-cover aspect-square"
                        src={khonggiantrong2}
                    />
                </div>
                <div>
                    <AnimatedImage
                        alt="Create Your Portfolio"
                        className="w-full h-auto object-cover aspect-square"
                        src={khonggiantrong2}
                    />
                    <h3 className="text-xl font-bold mt-4 mb-2">CREATE YOUR PORTFOLIO</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                        luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default PersonalBackground;
