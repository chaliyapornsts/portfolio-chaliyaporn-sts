import images from "../components/image";

const RamaIXArt = [
    {
        logo: images.LogoLink,
        alt: "Link Logo",
        link: "https://project-rama9art.vercel.app/"
    },
    {
        logo: images.LogoGithubJect,
        alt: "Github Logo",
        link: "https://github.com/chaliyapornsts/project-rama9art/"
    }
];

const BBL80Years = [
    {
        logo: images.LogoLink,
        alt: "Link Logo",
        link: "https://bangkokbank80years.com/",
    }
];

const hifine = [
    {
        logo: images.LogoGithubJect,
        alt: "Github Logo",
        link: "https://github.com/HiFineProject/hifine-project-frontend"
    }
];

const portfolio = [
    {
        logo: images.LogoLink,
        alt: "Link Logo",
        link: "#home"
    },
    {
        logo: images.LogoGithubJect,
        alt: "Github Logo",
        link: "https://github.com/chaliyapornsts/portfolio-chaliyaporn-"
    }
];

const ProjectPage = () => {
    return (
        <div id="projects" className="bg-gray-800 text-white pt-24">
            <h1 className="aboutme flex tracking-[0.1em] justify-center lg:justify-start text-[30px] md:text-[45px] lg:text-[40px] pt-8 px-10">
                PROJECTS
            </h1>
            <div>
                <div className="flex p-10 flex-col lg:flex-row md:items-center lg:pb-10">
                    <img
                        className="flex relative lg:-top-10 cursor-pointer rounded-xl hover:scale-105 duration-500"
                        src={images.TypingAnime}
                        alt="Image Fai"
                    />
                    <div className="flex flex-col lg:pl-16 p-5">
                        <h3 className="font-semibold text-2xl mb-4">Rama IX Art Foundation website</h3>
                        <p className="mb-8">{`Responsible for developing the Artist pages, including both the Artist list and Artist detail, for the Rama IX Art Museum Foundation website. Used mock data as the website is still in progress. The project was built using React, TypeScript, Next.js, and TailwindCSS.`}
                            <div className="flex justify-start w-72 sm:w-full">
                                {RamaIXArt.map((RamaIXArtject, index) => (
                                    <div key={index} className="pt-5">
                                        <a className="flex px-5 py-2 ml-4 bg-slate-600 rounded-full" href={RamaIXArtject.link} target="_blank">
                                            <img
                                                src={RamaIXArtject.logo}
                                                alt={RamaIXArtject.alt}
                                                width={30}
                                                height={30}
                                            />
                                            <span className="flex items-center pl-2">
                                                {RamaIXArtject.alt === "Link Logo" ? "Link" : "Github"}
                                            </span>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </p>
                        <hr className="p-5" />
                        <h3 className="font-semibold text-2xl mb-4">Bangkok Bank 80 years</h3>
                        <p className="mb-8">{`Developed key pages, including "เพื่อนคู่คิด มิตรคู่บ้าน," "ประโยชน์ใช้สอย," and "หมายเหตุ," for the Bangkok Bank 80 Years website. Utilized React and the UI Kit CSS framework to ensure a cohesive design and functionality.`}
                            <div className="flex justify-start w-72 sm:w-full">
                                {BBL80Years.map((RamaIXArtject, index) => (
                                    <div key={index} className="pt-5">
                                        <a className="flex px-5 py-2 ml-4 bg-slate-600 rounded-full" href={RamaIXArtject.link} target="_blank">
                                            <img
                                                src={RamaIXArtject.logo}
                                                alt={RamaIXArtject.alt}
                                                width={30}
                                                height={30}
                                            />
                                            <span className="flex items-center pl-2">
                                                {RamaIXArtject.alt === "Link Logo" ? "Link" : "Github"}
                                            </span>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </p>
                        <hr className="p-5" />
                        <h3 className="font-semibold text-2xl mb-4">HiFine Project</h3>
                        <p className="mb-8">{`"HiFine" is a web app designed for the exercise community to track and share workout routines and photos with friends.
                        It's built using HTML, CSS, React.js, Tailwind CSS, Node.js, and Express.js, with design done in Figma and project management handled through Trello.`}
                            <div className="flex justify-start w-72 sm:w-full">
                                {hifine.map((RamaIXArtject, index) => (
                                    <div key={index} className="pt-5">
                                        <a className="flex px-5 py-2 ml-4 bg-slate-600 rounded-full" href={RamaIXArtject.link} target="_blank">
                                            <img
                                                src={RamaIXArtject.logo}
                                                alt={RamaIXArtject.alt}
                                                width={30}
                                                height={30}
                                            />
                                            <span className="flex items-center pl-2">
                                                {RamaIXArtject.alt === "Link Logo" ? "Link" : "Github"}
                                            </span>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </p>
                        <hr className="p-5" />
                        <h3 className="font-semibold text-2xl mb-4">Portfolio</h3>
                        <p className="mb-8">{`"Portfolio" is designed to be easily accessible and usable for users without worrying about screen sizes. Developed using HTML, CSS, React.js,
                        Tailwind CSS, and designed through Figma.`}
                            <div className="flex justify-start w-72 sm:w-full">
                                {portfolio.map((port, index) => (
                                    <div key={index} className="pt-5">
                                        <a className="flex px-5 py-2 ml-4 bg-slate-600 rounded-full" href={port.link} target={port.link.startsWith("http") ? "_blank" : ""}>
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
