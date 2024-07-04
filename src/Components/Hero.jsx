import { TypeAnimation } from 'react-type-animation';
import profilePic from '../assets/me2.png'
const Hero = () => {
    return (
        <div className='grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14'>
            <div className='mzx-w-[800px]'>
                <p className='text-gray-200 md:text-6xl text-3xl tracking-tight'>
                    HEY, I AM <br />
                    <span>MAHTABUL HOQUE CHOWDHURY</span> <br />
                    <TypeAnimation
                      sequence={[
                        "Web-Developer",
                        1000,
                        "Tech-Learner",
                        1000,
                        "Translator",
                        1000,
                        "Writer...",
                        1000
                      ]}
                      speed={50}
                      repeat={Infinity}
                      className='font-bold italic'
                    />

                    
                </p>

                <div className='flex flex-row gap-4 mb-4 md:mb-0'>
                    <button className='transform transition hover:scale-105 hover:shadow-lg
                    z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 bg-gradient-to-r from-[#0e85b4] via-[#083d47] to-[#117583] rounded-xl'>Download CV</button>

                    <button className='transform transition hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2 border border-gray-400 rounded-xl'>View Work</button>
                </div>

            </div>
            <img className='w-[300px] md:w-[500px]' src={profilePic} alt="profilePic" />
        </div>
    );
};

export default Hero;