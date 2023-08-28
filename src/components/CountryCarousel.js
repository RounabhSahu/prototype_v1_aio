import React, { useState } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'

const Carousel = () => {
    const mockItems = [
        {
            id: 'item-1',
            title: 'Canada',
            url:'https://img.freepik.com/free-photo/toronto-sunrise_649448-3470.jpg?w=1380&t=st=1693260071~exp=1693260671~hmac=8e4553fc29409f836ea7e1de3920f336b09e46bdc198d372697d8a04c1c9e1f8'
        },
        {
            id: 'item-2',
            title: 'Australia',
            url:'https://img.freepik.com/free-photo/beautiful-shot-sydney-harbor-bridge-with-light-pink-blue-sky_181624-16041.jpg?w=1380&t=st=1693260144~exp=1693260744~hmac=e169f13474ef9d42fcff9c988520949f863fa3c602ab3e0d709f61503d190e25'
        },
        {
            id: 'item-3',
            title: 'USA',
            url:'https://img.freepik.com/free-photo/beautiful-manhattan-bridge-new-york-usa_181624-48458.jpg?w=1380&t=st=1693260174~exp=1693260774~hmac=84d32e8d22648f41423566ddaf3abced3f1d7fcd73d6ecde308858ece73732d6'
        },
        {
            id: 'item-4',
            title: 'Russia',
            url:'https://img.freepik.com/free-photo/saint-basil-s-cathedral-red-square-moscow-russia_181624-2329.jpg?w=740&t=st=1693260252~exp=1693260852~hmac=06030e3d7a6c7932077abef48079d9234a03ff0f2fcd3dfd18796dd2b2341290'
        },
        {
            id: 'item-5',
            title: 'Germany',
            url:'https://img.freepik.com/free-photo/theatine-church-sunlight-cloudy-sky-munich-germany_181624-10436.jpg?w=1380&t=st=1693260223~exp=1693260823~hmac=2c13d42f53c2d8e8e16cccfa4e9f0431919ed4789217e4c8580b1f07cd338935'
        },
    ]
    const [currentSlide, setCurrentSlide] = useState(mockItems[0].id)
    const isSmallerThanTablet=()=>{
        return window.innerWidth < 1300; // Adjust the breakpoint as needed
    }
    const {
        carouselFragment,
        slideToPrevItem, // go back to previous slide
        slideToNextItem, // move to next slide
        useListenToCustomEvent //custom hook to listen event when the slide changes
    } = useSpringCarousel({
        itemsPerSlide: isSmallerThanTablet()?3: mockItems.length, // number of slides per view
        withLoop: true, // will loop
        initialStartingPosition: 'center', // the active slide will be at the center
        gutter: 24, // to add the space between slides
        items: mockItems.map((item) => {
            return {
                ...item,
                renderItem: (
                    <div
                        className={`grid relative aspect-[1] w-full place-items-center text-2xl text-white transition-all duration-700 rounded drop-shadow-xl ${currentSlide === item.id
                            ? ' z-[5] scale-150 bg-yellow-600'
                            : 'bg-violet-500 md:scale-90 scale-[0.4] rounded-lg'
                        }`}
                        style={{ backgroundImage: `url(${item.url})`, backgroundSize: 'cover',backgroundRepeat:"no-repeat", }}
                    >
                        <div className={`w-full h-full absolute bg-black/50 transition-all duration-500 ${currentSlide !== item.id?'opacity-100':'opacity-0'} `}></div>
                        <div className={`bg-black/50 w-full text-center py-4 transition-all duration-500 ${currentSlide === item.id?'opacity-100':'opacity-0'} `}>{item.title}</div>
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

    return (
        <div className="py-20 relative">
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
    )
}

export default Carousel
