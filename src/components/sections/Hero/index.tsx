
import Image from 'next/image';
// import Link from "next/link";

const Hero = () => {
    return (
        <div className="mx-auto flex h-[calc(100vh-86px)] w-full flex-col justify-center gap-8 px-8 py-30">
            {/* Large Text */}
            <h1 className="text-8xl font-semibold tracking-tight">
                HEY{" "} I&apos;M{" "}
                <Image
                    className="inline-block align-middle mb-5 "
                    src="\svg\hero-windmill-1.svg"
                    alt="Special image"
                    width={75}
                    height={75}
                />{" "}
                <br />
                SAI DEEPAK{" "}
                <Image
                    className="inline-block align-middle mb-5 animate-spin-360"
                    src="\svg\hero-windmill-2.svg"
                    alt="Special image"
                    width={100}
                    height={100}
                />{" "} PERUMBUDUR
            </h1>
            <div className="md:text-lg text-center">
                <p>
                    I am a full stack web developer and a computer science engineer.
                    I am passionate about web development, cloud computing, and
                    cybersecurity. I love to learn new technologies and implement them.
                </p>
            </div>
        </div>
    );
};

export default Hero;
