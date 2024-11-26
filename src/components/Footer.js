import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-6">
            <div className='max-w-6xl mx-auto flex flex-col items-center text-center'>
                <p className="text-lg font-semibold">
                    Made with 💗 by {" "}
                    <a
                        href="https://www.linkedin.com/in/vivek-nag-a125482b2/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-500 underline"
                        title="Vivek Nag's Linkedin Profile"
                    >
                        Vivek Nag
                    </a>
                </p>
                <p className="mt-2 text-sm">
                    <span className="mr-1">©️ {year}</span>
                    <a
                        href="https://github.com/vivek4nag/MovieMania-AI"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-teal-400 hover:text-teal-500 underline"
                        title="Movie Mania Github Repository"
                    >
                        Movie-<span className="text-red-400">Mania</span><span className='text-blue-600'> AI</span>
                    </a>
                </p>
                <div className="mt-4 flex gap-4">
                    <a
                        href="https://www.linkedin.com/in/vivek-nag-a125482b2/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-400"
                        title="LinkedIn"
                    >
                        <i className="fab fa-linkedin fa-lg"></i>
                    </a>
                    <a
                        href="https://github.com/vivek4nag"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white"
                        title="GitHub"
                    >
                        <i className="fab fa-github fa-lg"></i>
                    </a>
                    <a
                        href="mailto:viveknag4@gmail.com"
                        className="text-gray-400 hover:text-red-400"
                        title="Email"
                    >
                        <i className="fas fa-envelope fa-lg"></i>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Footer