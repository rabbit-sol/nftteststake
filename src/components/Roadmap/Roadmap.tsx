import { useState, useEffect } from "react";
import { RoadmapData } from "../../components/Roadmap/Roadmap.data";
import styled from "styled-components";
import tw from "twin.macro";
import Aos from "aos";
import "aos/dist/aos.css";

import thread from "./roadmap-line.svg";
import blobs from "./roadmap-blob.svg";
import lingerie1 from "./roadmap-lingerie1.png";
import lingerie2 from "./roadmap-lingerie2.png";

const Lingerie = styled.img`
    ${tw`
    hidden
    lg:block
 `};
`;

const Heading = styled.h1`
    ${tw`
    font-bold
    text-5xl
    md:text-6xl
    text-black
    mb-10
    z-10
 `};
`;

const Card = styled.div`
    ${tw`
        flex
        text-black
        flex-col
        items-center
        px-10
        h-full
        max-w-xl
        py-2
        bg-white
        m-4
        rounded-2xl
        shadow-md
        
    `};
    @media screen and (min-width: 1024px) {
        min-width: 800px;
    }

    @media screen and (max-width: 1024px) {
        min-width: 90vw;
    }
`;

const Title = styled.h1`
    ${tw`
    
        text-2xl
        font-extrabold
        mt-4
        
    `};
`;

const Text = styled.p`
    ${tw`
        font-semibold
        py-2
        text-lg
        my-2
    `};
`;

const Roadmap = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        Aos.init({ duration: 1000 });
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div
                id="roadmap"
                className="overflow-hidden relative min-h-screen font-body flex flex-col justify-center items-center bg-pink-light py-36"
            >
                <img
                    src={thread}
                    alt="roadmap thread line"
                    className="absolute overflow-hidden h-full"
                ></img>
                <img
                    src={blobs}
                    alt="roadmap blogs"
                    className="top-10 absolute overflow-hidden h-full"
                ></img>
                <Lingerie
                    src={lingerie1}
                    alt="lingerie"
                    className="top-0 left-10 absolute overflow-hidden h-3/5"
                    style={{ transform: `translateY(${offsetY * 0.3}px)` }}
                ></Lingerie>
                <Lingerie
                    src={lingerie2}
                    alt="lingerie"
                    className="right-10 absolute overflow-hidden h-3/5"
                    style={{ transform: `translateY(${offsetY * -0.3}px)` }}
                ></Lingerie>
                <Heading>Roadmap</Heading>
                {RoadmapData.map((data) => {
                    return (
                        <div className="z-10">
                            <Card data-aos="fade-up">
                                <Title>{data.title}</Title>
                                <Text>{data.text}</Text>
                            </Card>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Roadmap;
