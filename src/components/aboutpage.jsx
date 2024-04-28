import images from "../components/image";

const logos = [
    {
        image: images.LogoHtml,
        title: "HTML",
    },
    {
        image: images.LogoCss,
        title: "CSS",
    },
    {
        image: images.LogoJavascript,
        title: "JavaScript",
    },
    {
        image: images.LogoSqlite,
        title: "SQLite",
    },
    {
        image: images.LogoGit,
        title: "Git",
    },
    {
        image: images.LogoMongodb,
        title: "MongoDB",
    },
    {
        image: images.LogoExpress,
        title: "Express",
    },
    {
        image: images.LogoReact,
        title: "React",
    },
    {
        image: images.LogoNodejs,
        title: "NodeJS",
    },
    {
        image: images.LogoBootstrap,
        title: "Bootstrap",
    },
    {
        image: images.LogoTailwind,
        title: "Tailwind",
    },
    {
        image: images.LogoFigma,
        title: "Figma",
    },
];

const aboutpage = () => {
    return (
        <div id="about" className="bg-gray-800 text-white pt-24">
            <h1 className="aboutme flex tracking-[0.1em] justify-center lg:justify-start text-[30px] md:text-[45px] lg:text-[40px] pt-8 px-10">
                ABOUT ME
            </h1>
            <div className="flex p-10 flex-col lg:flex-row md:items-center lg:pb-10">
                <img
                    src={images.Me}
                    className="cursor-pointer rounded-xl gray-scale-hover transition duration-500"
                    alt="Image Fai"
                    width={664}
                    height={450}
                />
                <div className="flex flex-col lg:pl-16 p-5">
                    <h2 className="font-semibold text-2xl mb-4">Chaliyaporn Suttisak | Full Stack Developer</h2>
                    <p className="mb-8">Equipped with practical knowledge and hands-on experience, I am confident
                        in my ability to contribute effectively to software development projects. My comprehensive
                        skill set includes proficiency in HTML, CSS, JavaScript, SQL, Git, Bootstrap, and Tailwind.
                        Moreover, my specialization in both front-end and back-end development, coupled with expertise
                        in designing MERN stacks and UIs using Figma, positions me as a versatile and capable
                        Junior Software Developer. I am eager to apply my skills in creating compelling and user-friendly
                        applications that meet the highest standards of functionality and design.</p>
                    <span className="font-semibold text-xl mb-2">CV 📝:</span>
                    <ul className="list-inside list-disc text-white">
                        <li>
                            <a
                                href="https://drive.google.com/file/d/1idpCuIkC9uSHOkbSl0CRVeLNi2ryEi1m/view?usp=sharing"
                                className="underline"
                                target="_blank"
                            >
                                Download
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-gray-700">
                <h4 className="skills tracking-[0.1em] font-semibold flex justify-center text-[20px] md:text-[23px] lg:text-[25px] py-10">
                    SKILLS
                </h4>
                <div className="flex justify-center pb-10">
                    <div className="flex flex-wrap justify-center items-center">
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                className="flex flex-col justify-center items-center m-5 gap-3 w-[100px] md:w-[150px] lg:w-[200px] hover:scale-150 duration-200"
                            >
                                <img
                                    src={logo.image}
                                    alt={logo.title}
                                    width={56}
                                    height={56}
                                />
                                <span className="flex justify-center text-lg">
                                    {logo.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutpage;