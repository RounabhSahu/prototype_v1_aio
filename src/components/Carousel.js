import React, {useEffect, useRef, useState} from 'react'
import { useSpringCarousel } from 'react-spring-carousel'

const Carousel = () => {
    const mockItems = [
        {
            id: 'item-1',
            title: 'Make your plans Ahead',
            url:"https://img.freepik.com/premium-photo/illustration-opened-book-with-famous-monuments_250014-514.jpg?w=826",
            desc:"Studying abroad may not look easy but early planning and investment makes it much smoother. We are here to make the the process simpler by providing everything at one place.",
            style:""
        },
        {
            id: 'item-2',
            title: 'Still Confused ?',
            url:"https://img.freepik.com/free-photo/explorer-with-map_1098-15383.jpg?w=1380&t=st=1693252446~exp=1693253046~hmac=4f938b96e0053733912f65c806ad3d7a373674ec54abe1d90d1eea12fa9ac8d8",
            desc:"Worry not we got your back ! You focus on studies, and let us handle the process. Don't let the messy things make a mess out of you.",
            style:""
        },
        {
            id: 'item-3',
            title: 'Find a Program',
            url:"https://img.freepik.com/free-photo/gratuated-colleagues-hugging_23-2148522166.jpg?w=1380&t=st=1693252781~exp=1693253381~hmac=2411b83d9534c5ee4ccfb5f0ba5344c0a8dd92876c098355c5937b400fefbf2e",
            desc:"All In One manages more than 200 programs with participants from more than\n" +
                "180 countries. In the last year alone, more than 29,000 people\n" +
                "participated in HE managed programs.",
            style:""
        },
        {
            id: 'item-4',
            title: 'Grow beyond, Fly farther',
            url:"https://img.freepik.com/free-photo/silhouette-confident-businesspeople_1098-1768.jpg?w=1380&t=st=1693252541~exp=1693253141~hmac=9b96f61fdc0d409b5457dae99885456c688e452dfeffd8104c391eb042b45e6f",
            desc:"Don't limit your skills with meager satisfaction. Don't stop yourself from a leaving a trail behind for others.",
            style:""
        },

        // {
        //     id: 'item-3',
        //     title: 'slide 3',
        //     url:"",
        //     desc:"",
        //     style:""
        // },
        // {
        //     id: 'item-3',
        //     title: 'slide 3',
        //     url:"",
        //     desc:"",
        //     style:""
        // }
    ]
    const isSmallerThanTablet=()=>{
        return window.innerWidth < 1300; // Adjust the breakpoint as needed
    }
    const [currentSlide, setCurrentSlide] = useState(mockItems[0].id)
    const [inView, setInView] = useState(false);

    useEffect(() => {
        // Calculate the maximum height among all slides after rendering
        const maxSlideHeight = Math.max(
            ...Object.values(slideRefs.current).map(ref => ref.offsetHeight)
        );

        // Set the same fixed height for all slides
        Object.values(slideRefs.current).forEach(ref => {
            if(isSmallerThanTablet()){
                ref.style.height = `400px`;
            }
            else{
                ref.style.height = `350px`;
                ref.style.width = `800px`;
            }
        });
    }, [currentSlide]);
    const slideRefs = useRef({});
    const {
        carouselFragment,
        slideToPrevItem, // go back to previous slide
        slideToNextItem, // move to next slide
        useListenToCustomEvent //custom hook to listen event when the slide changes
    } = useSpringCarousel({
        itemsPerSlide: isSmallerThanTablet()? 1 : 3, // number of slides per view
        withLoop: true, // will loop
        initialStartingPosition: 'center', // the active slide will be at the center
        gutter: 24, // to add the space between slides
        items: mockItems.map(item => {
            return {
                ...item,
                renderItem: (
                    <div
                        ref={el => (slideRefs.current[item.id] = el)} // Store a ref to the slide
                        id={item.id} // Assign an ID to each slide
                        className={`w-full place-items-center text-2xl text-white transition-all duration-700 rounded drop-shadow-2xl bg-gradient-to-b from-transparent to-slate-950 ${
                            currentSlide === item.id
                                ? 'z-10 md:scale-150 bg-yellow-600 md:scale-x-[2]'
                                : ' scale-90'
                        }`}
                        style={{ backgroundImage: `url(${item.url})`, backgroundSize: 'cover',backgroundRepeat:"no-repeat", }}
                        // No need to set a fixed height here
                    >
                        <div
                            className={`absolute inset-0 bg-black transition-all duration-500 ${currentSlide === item.id?'opacity-0':'opacity-70'}`}
                            style={{ height: '100%' }}
                        ></div>

                        <div
                            className={`relative w-full h-full flex flex-col justify-end items-center transition-all duration-700 bg-gradient-to-b from-transparent via-transparent to-black ${
                                currentSlide === item.id ? '' : 'hidden'
                            }`}
                            // style={{ backgroundImage: `url(${item.url})`, backgroundSize: 'cover',backgroundRepeat:"no-repeat", }}
                        >
                            <div className='text-2xl font-volkhorn--sans'>{item.title}</div>
                            <div className='text-sm px-8 py-2 text-center font-josefin'>{item.desc}</div>
                        </div>
                    </div>
                )
            }
        })
    })

    useListenToCustomEvent((event) => {
        if (event.eventName === 'onSlideStartChange') {
            setCurrentSlide(event?.nextItem?.id)
        }
    })
    const next=()=> {
        let inter=setInterval(() => {
            slideToNextItem()
        }, 1000)
        return inter
    }
    useEffect(() => {
        console.log(inView)
        if(!inView){
            var a=next();

        }
        return ()=> clearInterval(a)
    }, [inView]);


    if(!isSmallerThanTablet()){
        console.log('small size')
        return (
            <div className="py-20 relative w-full h-full" onMouseEnter={()=>setInView(true)} onMouseLeave={()=>setInView(false)}>
                <button onClick={slideToPrevItem} className="absolute top-1/2 -translate-y-1/2 -translate-x-full left-[10%]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <div className="mx-auto w-[80%] overflow-x-clip py-[4%] relative">
                    {carouselFragment}
                </div>
                <button onClick={slideToNextItem} className="absolute top-1/2 -translate-y-1/2 translate-x-full right-[10%]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        )}
    else
    {
        return (
            <div className="relative flex flex-col w-full" onMouseEnter={() => setInView(true)}
                 onMouseLeave={() => setInView(false)}>

                <div className="mx-auto w-full md:w-[80%] overflow-x-clip py-[4%] relative drop-shadow-2xl">
                    {carouselFragment}
                </div>
                <div className='w-full flex flex-row justify-around h-fit pt-8'>
                    <button onClick={slideToPrevItem} className="scale-150">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                        </svg>
                    </button>
                    <button onClick={slideToNextItem} className="scale-150">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6 shadow drop-shadow-2xl">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                        </svg>
                    </button>
                </div>
            </div>
        )
    }
}

export default Carousel
