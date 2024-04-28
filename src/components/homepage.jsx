import { TypeAnimation } from 'react-type-animation';
import images from "../components/image";

const socials = [
  {
    logo: images.LogoLinkedin,
    alt: "Linkedin Logo",
    link: "https://www.linkedin.com/in/chaliyaporn-sts/",
  },
  {
    logo: images.LogoGithub,
    alt: "Github Logo",
    link: "https://github.com/chaliyapornsts",
  },
];

const homepage = () => {
  return (
    <div id="home" className="flex flex-col h-full bg-gray-800 justify-center items-center text-white">
      <h6 className="p-3 text-[15px] md:text-[17.5px] lg:text-[20px]">I AM</h6>
      <div className="typeanimation text-[32px] md:text-[49px] lg:text-[69px]">
        <TypeAnimation
          sequence={[
            "CHALIYAPORN.",
            500,
            "",
            500,
          ]}
          wrapper="span"
          speed={{ type: 'keyStrokeDelayInMs', value: 250 }}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
        />
      </div>
      <div className="flex w-full justify-center m-3">
        {socials.map((social, index) => (
          <div
            key={index}
            className="p-3 bg-slate-600 m-2 rounded-full cursor-pointer"
            onClick={() => window.open(social.link, '_blank')}
          >
            <img
              src={social.logo}
              alt={social.alt}
              width={25}
              height={25}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default homepage;