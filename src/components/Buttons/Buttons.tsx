import styled from "styled-components";
import tw from "twin.macro";
import { Link as RouterLink } from "react-router-dom";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";

export const MintButton = styled(RouterLink)`
    ${tw`
        text-lg
        relative
        font-bold
    `};

    border: 2px solid #2d2d2d;
    border-radius: 30px;
    margin: 1.2rem 1rem;
    padding: 0.5rem 1.5rem;
    color: #2d2d2d;
    transition: all 200ms ease-in-out;

    &:hover {
        background: #ffe9fb;
    }
`;

export const ConnectButton = styled(WalletDialogButton)`
    ${tw`
        text-sm
        lg:text-lg
        relative
        font-bold
    `};

    border: 2px solid #2d2d2d;
    border-radius: 30px;
    margin: 1.2rem 0;
    margin-left: 1rem;
    padding: 0.5rem 1.5rem;
    color: #2d2d2d;
    transition: all 200ms ease-in-out;
    border: 2px solid #2d2d2d;
    border-radius: 30px;
    margin: 4rem 0 0 0;
    padding: 0.5rem 2rem;
    color: #2d2d2d;
    transition: all 200ms ease-in-out;

    &:hover {
        background: #eeeaff;
    }
`;

export const MainButton = styled(RouterLink)`
    ${tw`
        relative
        text-lg
        font-bold
        w-36
    `};
    padding: 0.5rem 1.5rem;
    background: linear-gradient(229.4deg, #ffffff 21.43%, #fabcee 78.25%);
    border-radius: 27px;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
    }
`;

export const MintPageButton = styled(WalletDialogButton)`
    ${tw`
        text-xl
        relative
        font-bold
    `};

    border: 2px solid #2d2d2d;
    border-radius: 30px;
    margin: 4rem 0 0 0;
    padding: 0.5rem 2rem;
    color: #2d2d2d;
    transition: all 200ms ease-in-out;

    &:hover {
        background: #eeeaff;
    }
`;
