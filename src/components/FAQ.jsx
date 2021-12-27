import Faq from "react-faq-component"

const data = {
    rows: [
        {
            title: "When will the sluts be available to mint?",
            content: `Pre-sale: 27 Dec 2pm UTC${"&ensp;"} | ${"&ensp;"} Public sale: 28th Dec 12pm UTC`,
            content: `Early bird pre-sale: 27 Dec 2pm UTC${"&ensp;"} | ${"&ensp;"} Pre-sale: 3rd Jan 2pm UTC${"&ensp;"}  | ${"&ensp;"}Public: 6th Jan 2pm UTC`,
        },
        {
            title: "What form of payment do they take?",
            content: `These sluts aren't a fan of high gas fees and only take Solana as payment`,
        },
        {
            title: "How many sluts are there?",
            content: `There will only be 6969 sluts available`,
        },
        {
            title: "What is the hourly rate (mint price) for the sluts?",
            content: "The hourly rate (and mint price) will be 0.5 SOL for pre-sale and 0.69 for public sale",
        },
        {
            title: "How to get access to the pre-sale?",
            content: `Join our discord and invite 3 friends to get whitelisted for pre-sale access.`,
        },
        {
            title: "How do I earn passive income on these NFTs?",
            content:
                "After purchasing one of our sluts (NFTs) you will have access to our play to earn game - Slut Society, in which passive income can be earned by renting out your slut.",
        },
    ],
};

const styles = {
    titleTextColor: "#2D2D2D",
    rowTitleColor: "#2D2D2D",
    rowTitleTextSize: "1.4rem",
    rowContentTextSize: "1.15rem",
    rowContentPaddingTop: "1rem",
    rowContentPaddingBottom: "1.3rem",
    rowContentPaddingLeft: "2rem",
    rowContentPaddingRight: "2rem",
    
};

const config = {
    animate: true,
    tabFocus: true,
};

const FAQ = () => {
    return (
        <div id="faq" className="flex flex-col items-center">
            <h1 className="flex font-body font-bold text-5xl mt-24 mx-10">
                FAQ
            </h1>
            <div className="relative flex font-semibold justify-center items-center">
                <div className="font-body w-4/5 mb-36 mt-12">
                     <Faq data={data} styles={styles} config={config} />
                </div>
            </div>
        </div>
    );
};

export default FAQ;
