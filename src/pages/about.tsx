import AnimatedText from '@/components/AnimatedText';
import CustomHead from '@/components/CustomHead';
import Layout from '@/components/Layout';
import SpaceSection from '@/components/SpaceSection';

import { aboutTitle } from '@/data/aboutPageData';

import BottomFixedBtn from '@/components/BottomFixedBtn';
import PriceTable from '@/components/PriceTable';
import Text from '@/components/Text';

const About = () => {
    return (
        <>
            <CustomHead title="About Page" content="Thong tin thêm về studio" />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout>
                    <AnimatedText text={aboutTitle} className="mb-16 sm:mb-8" />
                    <div className="flex items-center w-full lg:flex-col gap-16">
                        <div className="w-1/2 md:w-full">
                            <PriceTable />
                        </div>

                        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center gap-3">
                            <AnimatedText
                                text="**Ekip tối đa 5 người, từ người thứ 6 sẽ phụ thu 50.000vnd/ng."
                                className="!text-3xl !text-left xl:!text-2xl lg:!text-center "
                            />
                            <div className="text-left">
                                <Text className="my-4 font-medium">
                                    Hỗ trợ phông nền, tấm hất sáng 2 màu (bạc và vàng), đèn chụp ảnh
                                    chuyên nghiệp 150W (cao 2m1), gậy chụp ảnh, đạo cụ bàn ghế, bàn
                                    ủi hơi nước, sào treo đồ, máy lạnh, wc riêng.
                                </Text>
                                <Text className="my-4 font-medium">
                                    Khách cần dời sofa/gương vui lòng gọi{' '}
                                    <a className="underline" href="tel:0945355824">
                                        ‭094 5355824‬
                                    </a>
                                    ( Hoàng ) để được hổ trợ.
                                </Text>
                            </div>

                            <AnimatedText
                                text="**Team maximum of 5 people, from the 6th person onwards, additional charge of 50,000 VND per person."
                                className="!text-3xl !text-left xl:!text-2xl lg:!text-center "
                            />
                            <div>
                                <Text className="my-4 font-medium">
                                    We provide support for background setup, with a two-tone
                                    backdrop (silver and gold), professional photography lights of
                                    150W (height 2.1m), camera tripod, props, chairs, steam ironing
                                    table, clothes rack, AC, and a private restroom.
                                </Text>
                                <Text className="my-4 font-medium">
                                    If you need to move the sofa or mirror, please call{' '}
                                    <a className="underline" href="tel:0945355824">
                                        ‭094 5355824‬
                                    </a>{' '}
                                    (Hoàng) for assistance.
                                </Text>
                            </div>
                        </div>
                    </div>
                    <SpaceSection title="Không gian" />
                </Layout>
                <BottomFixedBtn />
            </main>
        </>
    );
};

export default About;
