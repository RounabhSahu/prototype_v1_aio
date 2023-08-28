import React, {useState} from 'react';
const Steps = () => {
    const arr = [
        { num: '1.', desc: 'Document Collection' ,details:'This stage involves gathering essential documents required for the consultation process. These documents include Passport, Aadhar card, PAN card, Passport size photo, Digital Signature, and Scholarship Result.'},
        { num: '2.', desc: 'Language Proficiency Tests' ,details:'In this stage, you\'ll focus on language proficiency tests such as GRE, IELTS, TOEFL, and Duolingo. Provide information about the credentials needed for each test.' },
        { num: '3.', desc: 'College Shortlisting and Application' ,details:'Create a table listing the colleges you\'ve applied to, along with the application dates. This helps in tracking your progress during the application process.' },
        { num: '5.', desc: 'Loan Process' ,details:'This stage involves preparing for the financial aspects of your education. Depending on your situation, you might need to provide collateral (like land certificates) or non-collateral documents (bank statements, ITR, Agriculture Income Certificate).' },
        { num: '6.', desc: 'Finalizing College' ,details:'Once you receive admissions and I-20 forms, this stage helps you decide on a college. Explain the process for handling conditional and non-conditional I-20s.' },
        { num: '7.', desc: 'Visa Application & Slot Booking' ,details:'This stage includes filling out the DS-160 form, applying for a visa, and booking a visa appointment. You can also mention flight ticket booking here.' },
        { num: '8.', desc: 'SEVIS Fee Payment' ,details:'Provide information about paying the SEVIS fee, which should be done approximately one week before your biometrics appointment.' },
        { num: '9.', desc: 'Mock Interviews' ,details:'We offer resources for mock interviews, such as FAQs and videos to help prepare for visa interviews.' },
    ];
    const [curr, setCurr] = useState(-1);
    const handleClick=(index)=>{
        if(index===curr)
            setCurr(-1)
        else
            setCurr(index)
    }
    return (
        <div className='bg-cyan-200 w-full  steps-bg' id='Contact'>
            <div className="w-full md:h-1/2 md:w-1/2 mx-auto py-4 ">
                <div className="flex flex-col flex-wrap justify-evenly items-center w-full">
                    <div className='text-6xl font-extrabold font-sans text-sky-800 my-2 text-center basis-full  font-volkhorn--serif'>Way to Your Journey !</div>
                    {arr.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="w-full my-2"
                            >
                                <div className={`w-full flex flex-row justify-start items-center border-t border-x border-slate-400 rounded-t transition-all ease-in-out duration-1000 bg-plat/40 ${curr===index?'h-fit opacity-100 rounded-tl-3xl':'rounded-t border-b  hover:bg-sky-500/20 cursor-pointer'}`} onClick={()=>handleClick(index)}>
                                    <div className={`text-2xl text-white/80  font-extrabold pl-8 pr-4 bg-sky-900/80 py-2 transition-all ease-in-out duration-1000 ${curr === index ? 'h-fit opacity-100 rounded-tl-3xl' : 'rounded-t hover:bg-sky-500'}`}>{item.num}</div>
                                    <div className={`text-2xl text-teal-800  font-bold pl-4 w-full ${curr === index ? 'cursor-pointer' : ''}`}>{item.desc}</div>
                                </div>
                                <div className={`bg-sky-900/80 text-white text-lg border-b border-x border-slate-400 rounded-b pl-20 py-4 pr-8 transition-all ease-in-out duration-1000 backdrop-blur font-josefin ${curr===index?'h-fit opacity-100':'h-0 opacity-0'}`}>
                                    {item.details}
                                </div>

                            </div>

                        );
                    })}
                    <div className='text-2xl font-bold font-sans text-blue my-2 text-center basis-full '>
                        <div className='border-2 py-2 px-4 border-blue mx-auto w-fit rounded hover:border-black hover:bg-amber-400 hover:text-slate-900 cursor-pointer'>Know More</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;
