/* eslint-disable react/no-unescaped-entities */

import AnimatedText from '@/components/AnimatedText';
import CustomHead from '@/components/CustomHead';
import Layout from '@/components/Layout';
import PersonalBackground from '@/components/PersonalBackground';

import { aboutTitle, educations, experiences } from '@/data/aboutPageData';

import AnimatedImage from '@/components/AnimatedImage';
import BottomFixedBtn from '@/components/BottomFixedBtn';
import priceList from '../../public/images/ref/bangiaonly.png';

const About = () => {
    return (
        <>
            <CustomHead title="About Page" content="Thong tin thêm về studio" />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout>
                    <AnimatedText text={aboutTitle} className="mb-16 sm:mb-8" />
                    <div className="flex items-center w-full lg:flex-col gap-16">
                        <div className="w-1/2 md:w-full">
                            <AnimatedImage src={priceList} alt="bang gia" />
                        </div>

                        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center gap-3">
                            <AnimatedText
                                text="**Ekip tối đa 5 người, từ người thứ 6 sẽ phụ thu 50.000vnd/ng."
                                className="!text-3xl !text-left xl:!text-2xl lg:!text-center "
                            />
                            <div>
                                <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                                    Hỗ trợ phông nền, tấm hất sáng 2 màu (bạc và vàng), đèn chụp ảnh
                                    chuyên nghiệp 150W (cao 2m1), gậy chụp ảnh, đạo cụ bàn ghế, bàn
                                    ủi hơi nước, sào treo đồ, máy lạnh, wc riêng.
                                </p>
                                <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                                    Khách cần dời sofa/gương vui lòng gọi ‭094 5355824‬ ( Hoàng ) để
                                    được hổ trợ.
                                </p>
                            </div>

                            <AnimatedText
                                text="**Team maximum of 5 people, from the 6th person onwards, additional charge of 50,000 VND per person."
                                className="!text-3xl !text-left xl:!text-2xl lg:!text-center "
                            />
                            <div>
                                <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                                    We provide support for background setup, with a two-tone
                                    backdrop (silver and gold), professional photography lights of
                                    150W (height 2.1m), camera tripod, props, chairs, steam ironing
                                    table, clothes rack, AC, and a private restroom.
                                </p>
                                <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                                    If you need to move the sofa or mirror, please call ‭094 5355824‬
                                    (Hoàng) for assistance.
                                </p>
                            </div>
                        </div>
                    </div>
                    <PersonalBackground title="Không gian" details={experiences} />
                </Layout>
                <BottomFixedBtn/>
            </main>
        </>
    );
};

export default About;
