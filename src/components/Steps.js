import React from 'react';

const Steps = () => {
    const arr = [
        { num: '1.', desc: 'Collect Details' },
        { num: '2.', desc: 'Narrow Down Choices' },
        { num: '3.', desc: 'Checking Requirements' },
        { num: '4.', desc: 'Training Starts' },
    ];

    return (
        <div className="w-full md:h-1/2 md:w-1/2 mx-auto py-4">
            <div className="flex flex-row flex-wrap justify-evenly items-center w-full">
                <div className='text-6xl font-extrabold font-sans text-sky-800 my-2 text-center basis-full'>How It Works !</div>
                {arr.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex-1 w-1/3 h-48 bg-gradient-to-b from-blue hover:from-sky-400 to-plat hover:to-blue hover:bg-sky-700 border-4 border-sky-700 p-4 m-2 hover:bg-darkblue group rounded-xl hover:scale-110 transition-all ease-linear"
                        >
                            <div className="text-6xl text-slate-600 group-hover:text-white font-extrabold">{item.num}</div>
                            <div className="text-2xl text-blue group-hover:text-amber-300 font-bold">{item.desc}</div>
                        </div>
                    );
                })}
                <div className='text-2xl font-bold font-sans text-blue my-2 text-center basis-full '>
                    <div className='border-2 py-2 px-4 border-blue mx-auto w-fit rounded hover:border-black hover:bg-amber-400 hover:text-slate-900 cursor-pointer'>Know More</div>
                </div>
            </div>
        </div>
    );
};

export default Steps;
