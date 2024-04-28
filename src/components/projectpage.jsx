import { useState } from "react";
import images from "../components/image";

const hifine = [
    {
        logo: images.LogoLink,
        alt: "Link Logo",
        link: "https://hifine-project-frontend.vercel.app/",
    },
    {
        logo: images.LogoGithubJect,
        alt: "Github Logo",
        link: "https://github.com/HiFineProject/hifine-project-frontend",
    },
];

const portfolio = [
    {
        logo: images.LogoLink,
        alt: "Link Logo",
        link: "#home",
    },
    {
        logo: images.LogoGithubJect,
        alt: "Github Logo",
        link: "https://github.com/chaliyapornsts/portfolio-chaliyaporn-",
    },
];

const ProjectPage = () => {
    const [imageSrc, setImageSrc] = useState(images.TypingAnime);

    return (
        <div id="projects" className="bg-gray-800 text-white pt-24">
            <h1 className="aboutme flex tracking-[0.1em] justify-center lg:justify-start text-[30px] md:text-[45px] lg:text-[40px] pt-8 px-10">
                PROJECTS
            </h1>
            <div>
                <div className="flex p-10 flex-col lg:flex-row md:items-center lg:pb-10">
                    <img
                        className="flex relative lg:-top-10 cursor-pointer rounded-xl hover:scale-105 duration-500"
                        src={imageSrc}
                        alt="Image Fai"
                    />
                    <div className="flex flex-col lg:pl-16 p-5">
                        <h3 className="font-semibold text-2xl mb-4 cursor-pointer" onMouseEnter={() => setImageSrc(images.HiFineJect)} onMouseLeave={() => setImageSrc(images.TypingAnime)}>HiFine Project</h3>
                        <p className="mb-8">{`"HiFine" is a web app designed for the exercise community to track and share workout routines and photos with friends.
                        It's built using HTML, CSS, React.js, Tailwind CSS, Node.js, and Express.js, with design done in Figma and project management handled through Trello.`}
                            <div className="flex justify-start sm:justify-center w-72 sm:w-full">
                                {hifine.map((hifineject, index) => (
                                    <div key={index} className="p-4">
                                        <a className="flex px-5 py-2 bg-slate-600 rounded-full" href={hifineject.link} target="_blank">
                                            <img
                                                src={hifineject.logo}
                                                alt={hifineject.alt}
                                                width={30}
                                                height={30}
                                            />
                                            <span className="flex items-center pl-2">
                                                {hifineject.alt === "Link Logo" ? "Link" : "Github"}
                                            </span>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </p>
                        <hr className="p-5" />
                        <h3 className="font-semibold text-2xl mb-4 cursor-pointer" onMouseEnter={() => setImageSrc(images.PortFai)} onMouseLeave={() => setImageSrc(images.TypingAnime)}>Portfolio</h3>
                        <p className="mb-8">{`"Portfolio" is designed to be easily accessible and usable for users without worrying about screen sizes. Developed using HTML, CSS, React.js,
                        Tailwind CSS, and designed through Figma.`}
                            <div className="flex justify-start sm:justify-center w-72 sm:w-full">
                                {portfolio.map((port, index) => (
                                    <div key={index} className="p-4">
                                        <a className="flex px-5 py-2 bg-slate-600 rounded-full" href={port.link} target={port.link.startsWith("http") ? "_blank" : ""}>
                                            <img
                                                src={port.logo}
                                                alt={port.alt}
                                                width={30}
                                                height={30}
                                            />
                                            <span className="flex items-center pl-2">
                                                {port.alt === "Link Logo" ? "Link" : "Github"}
                                            </span>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage;
