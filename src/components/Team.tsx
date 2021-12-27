import { useEffect } from "react";

import styled from "styled-components";
import tw from "twin.macro";
import Aos from "aos";
import "aos/dist/aos.css";

import { BsDiscord, BsTwitter } from "react-icons/bs";
import wave from "../assets/team-wave.svg";
import girl1 from "../assets/avatars/1.png";
import girl2 from "../assets/avatars/2.png";
import girl3 from "../assets/avatars/3.png";
import girl4 from "../assets/avatars/4.png";

const TeamCard = styled.div`
    ${tw`
        flex
        flex-col
        p-10
        items-center
        justify-center
        max-w-sm
        bg-white
        m-5
        

 `};
    min-height: 30rem;
`;

const Avatar = styled.img`
    ${tw`
        w-max
    `};
`;
const Name = styled.h1`
    ${tw`
        font-extrabold
        py-5
        text-3xl
    `};
`;

const Description = styled.h2`
    ${tw`
        font-semibold
        py-2
        text-xl
    `};
`;

const SocialIcon = styled.a`
    ${tw`
        text-4xl
        mx-5
        cursor-pointer
      text-black 
        transition-all 
        duration-300
    `};
`;

const Team = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <div
                id="team"
                className="overflow-hidden relative min-h-full flex flex-col justify-start items-center font-body bg-purple-light"
            >
                <img
                    src={wave}
                    alt="wave vector"
                    className="absolute bottom-0 w-full"
                />
                <h1 className="font-bold text-4xl md:text-5xl mt-24 mb-12">
                    Meet the Team
                </h1>
                <div className="flex flex-row flex-wrap justify-center items-center mb-24">
                    <TeamCard data-aos="slide-up">
                        <Avatar src={girl1} />
                        <Name>Slutty Josh</Name>
                        <Description>
                            Founder and project developer specialising in
                            community management and marketing. Part time slut
                            but fully dedicated to this project and community.
                        </Description>
                    </TeamCard>
                    <TeamCard data-aos="slide-up">
                        <Avatar src={girl2} />
                        <Name>Slutty Mel</Name>
                        <Description>
                            Marketing director with 6 years experience in social
                            media and business marketing. Full time marketer and
                            casual slut on weekends.
                        </Description>
                    </TeamCard>
                    <TeamCard data-aos="slide-up">
                        <Avatar src={girl3} />
                        <Name>Slutty Rabbit</Name>
                        <Description>
                            Web and smart contract developer with 4 years
                            experience in programming and blockchain. Enjoys a
                            slut or two when he isn't busy coding.
                        </Description>
                    </TeamCard>
                    <TeamCard data-aos="slide-up">
                        <Avatar src={girl4} />
                        <Name>Slut Pimp</Name>
                        <Description>
                            Graphics artist with 10 years experience in 2D
                            animation and drawing who is experienced in the NFT
                            space. When he’s not in a slut he’s creating visual
                            art and marketing.
                        </Description>
                    </TeamCard>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center my-10">
                    <SocialIcon
                        href="https://twitter.com/SolanaSluts"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsTwitter />
                    </SocialIcon>
                    <SocialIcon
                        href="https://discord.gg/SY5c6tQKrd"
                        aria-label="Discord"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BsDiscord />
                    </SocialIcon>
                </div>
                <div>
                    <h2 className="font-medium text-black opacity-50 mb-12">
                        © 2021 Sol Sluts
                    </h2>
                </div>
            </div>
        </>
    );
};

export default Team;
