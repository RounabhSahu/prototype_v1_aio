import React from 'react';

const Hero = () => {
    const arr = [
        { num: '100+', desc: 'Universities tie ups' },

        { num: '10+', desc: 'Countries covered' },
        { num: '3000+', desc: 'Students Successfully placed abroad' },
    ];

    return (
        <div className="w-full md:h-1/2 md:w-1/2 mx-auto py-4">
            <div className="flex flex-row flex-wrap justify-evenly items-center w-full">
                <div className='text-6xl font-extrabold font-sans text-sky-800 my-2 text-center basis-full'>OUR JOURNEY</div>
                {arr.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex-1 w-1/3 h-48 bg-gradient-to-b from-lime-400 hover:from-sky-800 to-plat hover:bg-gradient-to-t border-4 border-sky-700 p-4 m-2 hover:bg-darkblue group rounded-xl hover:scale-110 transition-all ease-linear"
                        >
                            <div className="text-6xl text-slate-600 group-hover:text-white font-extrabold">{item.num}</div>
                            <div className="text-2xl text-blue group-hover:text-amber-300 font-bold">{item.desc}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Hero;
