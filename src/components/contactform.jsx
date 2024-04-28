import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import EmailImg from "../assets/contact/email.png"

export const Contactform = () => {
    const form = useRef();
    const [sending, setSending] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const { user_name, user_email, message } = formData;

        if (!user_name || !user_email || !message) {
            setStatusMessage("Please fill in all fields.");
            clearStatusMessageAfterDelay();
            return;
        }

        if (!validateEmail(user_email)) {
            setStatusMessage("Please enter a valid email address.");
            clearStatusMessageAfterDelay();
            return;
        }

        setSending(true);

        emailjs
            .sendForm("service_9ytping", "template_ebtf1jd", form.current, {
                publicKey: "R99ivxidHRW4QBmag",
            })
            .then(
                (response) => {
                    if (response.status === 200 || response.text === "OK") {
                        setStatusMessage("Email sent successfully! ✅");
                        clearStatusMessageAfterDelay();
                        clearFormData();
                    } else {
                        setStatusMessage("Failed to send email. ❌");
                        clearStatusMessageAfterDelay();
                    }
                },
                (error) => {
                    setStatusMessage("Error: " + error.text);
                    clearStatusMessageAfterDelay();
                }
            )
            .finally(() => {
                setSending(false);
            });
    };

    const clearStatusMessageAfterDelay = () => {
        setTimeout(() => {
            setStatusMessage("");
        }, 4000);
    };

    const clearFormData = () => {
        setFormData({
            user_name: "",
            user_email: "",
            message: ""
        });
    };

    const getStatusMessageColor = (statusMessage) => {
        if (statusMessage.startsWith("Email sent successfully")) {
            return "text-green-500";
        } else if (statusMessage.startsWith("Please fill") || statusMessage.startsWith("Please enter") || statusMessage.startsWith("Failed to send email") || statusMessage.startsWith("Error")) {
            return "text-red-500";
        } else {
            return "text-red-500";
        }
    };

    return (
        <div id="contact" className="flex flex-col h-auto lg:h-full bg-gray-800 text-white pt-24 p-10 lg:flex-row md:items-center lg:pb-10">            <div className="flex flex-col h-full w-full">
            <h1 className="contacts tracking-[0.1em] text-[30px] md:text-[45px] lg:text-[40px] pt-8 px-10">
                CONTACT
            </h1>
            <p className="px-11 pt-3">{`If you're interested in learning more about me, Let's connect!`}</p>
            <div>
                <p className="px-11 pt-1">Say hello at :&nbsp;&nbsp;&nbsp;
                    <a href="mailto:chaliyaporn.sts@gmail.com" className="cursor-pointer underline underline-offset-8 hover:text-gray-300">
                        chaliyaporn.sts@gmail.com
                    </a>
                </p>
            </div>
            <div>
                <p className="px-11 pt-2 pb-5">{`For more info, here's my phone number :`}&nbsp;&nbsp;&nbsp;
                    <p className="cursor-pointer underline underline-offset-8 hover:text-gray-300 w-[100px]">
                        0948655429
                    </p>
                </p>
            </div>
            <img src={EmailImg} alt="HiFineJect" />
        </div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col h-full w-full px-10 py-14 lg:py-10 relative">
                <label className="pb-5">Name</label>
                <input type="text" className="text-gray-800 rounded-lg p-3" name="user_name" value={formData.user_name} onChange={handleInputChange} placeholder="Name" />
                <label className="py-5">Email</label>
                <input type="email" className="text-gray-800 rounded-lg p-3" name="user_email" value={formData.user_email} onChange={handleInputChange} placeholder="you@example.com" />
                <label className="py-5">Message</label>
                <textarea className="text-gray-800 rounded-lg p-3" name="message" value={formData.message} onChange={handleInputChange} placeholder="Let's talk about..." />
                <span className="pt-5"></span>
                <div className="relative">
                    <button type="submit" className="w-full h-12 overflow-hidden rounded-xl border border-indigo-500 text-indigo-500 shadow-2xl hover:text-white hover:shadow-indigo-900 hover:bg-indigo-600">
                        <span className={`absolute inset-0 flex items-center justify-center ${sending ? 'opacity-0' : ''}`}>
                            Send
                        </span>
                        {sending ? (
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="fill-current text-white ml-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                            >
                                <path
                                    d="M12,23a9.63,9.63,0,0,1-8-9.5,9.51,9.51,0,0,1,6.79-9.1A1.66,1.66,0,0,0,12,2.81h0a1.67,1.67,0,0,0-1.94-1.64A11,11,0,0,0,12,23Z"
                                >
                                    <animateTransform
                                        attributeName="transform"
                                        type="rotate"
                                        dur="0.75s"
                                        values="0 12 12;360 12 12"
                                        repeatCount="indefinite"
                                    />
                                </path>
                            </svg>
                        ) : null}
                    </button>
                    {statusMessage && (
                        <span className={`absolute inset-x-0 bottom-[-4rem] md:bottom-[-2.5rem] text-center text-md ${getStatusMessageColor(statusMessage)}`}>{statusMessage}</span>
                    )}
                </div>
            </form>
        </div>
    );
};
