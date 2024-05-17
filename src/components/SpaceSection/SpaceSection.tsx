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
                    <h2 className="text-2xl font-bold mb-4">Set 1</h2>
                    <Text className="mb-4">
                    Không gian mở, với cửa kính lớn để ánh sáng tự nhiên dễ dàng chiếu vào, tạo nên bầu không khí trong lành và sáng sủa, phù hợp để Livestream, quay content, chụp mẫu…
                    </Text>
                    <Text>
                    An open space with large glass doors allowing natural light to flood in, creating a bright and airy atmosphere, suitable for livestreaming, content creation, and model photography.
                    </Text>
                </div>
                <div>
                <h2 className="text-2xl font-bold mb-4">Set 2</h2>
                    <Text className="mb-4">
                    Được decor với một sofa lớn, tường phía sau được trang trí bằng những bức tranh nghệ thuật, tạo ra một không gian chụp ảnh vừa sang trọng vừa nghệ thuật, có thể setup quay podcast, phỏng vấn, quay hình…
                    </Text>
                    <Text>
                    Decorated with a large sofa and artistic wall paintings, creating an elegant and artistic photography space, suitable for podcast setups, interviews, and filming.
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
                    <h3 className="text-xl font-bold mb-2">Sảnh chờ </h3>
                    <Text className="mb-4">
                    Chiếm một phần của studio để lưu trữ đồ, phụ kiện, fresh up và thư giãn trước buổi quay chụp. Ngoài ra đối diện là một khoảng không gian bếp mang phong cách cổ điển sang trọng có thể phục vụ cho việc sản xuất hình ảnh…
                    </Text>
                    <Text>
                    Occupies a part of the studio for storing equipment, accessories, freshening up, and relaxing before shoots. Additionally, opposite this area is a kitchen space with a luxurious classic style, suitable for image production.                    </Text>
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

            {/* Ban công */}
            <section className="grid grid-cols-3 grid-rows-2 gap-4 mt-8 sm:grid-cols-2">
                <div className="row-span-2 sm:row-span-1">
                    <h3 className="text-xl font-bold mb-2">Ban công</h3>
                    <Text className="mb-4">
                    Một không gian ngoài trời thoáng đãng, với ban công lát gỗ, được trang trí bởi những chậu cây xanh mướt và hoa nở rộ, tạo nên một bầu không khí thư giãn và trong lành, có trang bị ghế ngồi phù hợp checkin, sản xuất hình ảnh.
                    </Text>
                    <Text>
                        An airy outdoor space with a wooden-floored balcony, decorated with lush green potted plants and blooming flowers, providing a relaxing and fresh atmosphere, equipped with seating suitable for check-ins and image production.
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
