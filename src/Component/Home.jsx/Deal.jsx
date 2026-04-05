import React, { useState, useEffect } from 'react';
import dealfireimg from '../../assets/DealFireimg.png'
import readmiimg from '../../assets/redmi.png'

const Deal = () => {
    const calculateTimeLeft = () => {
        const now = new Date();
        const endOfDay = new Date();
        endOfDay.setHours(23, 59, 59, 999);
        const difference = endOfDay - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: String(Math.floor((difference / (1000 * 60 * 60)))).padStart(2, '0'),
                minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
                seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0')
            };
        } else {
            timeLeft = { hours: '00', minutes: '00', seconds: '00' };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const deals = [
        {
            id: 1,
            image: readmiimg,
            discount: '10% off',
            name: 'REDMI NOTE 15 8GB/256...',
            rating: 5.0,
            reviews: 122,
            originalPrice: '$400',
            price: '$360'
        },
        {
            id: 2,
            image: '/icons.svg',
            discount: '34% off',
            name: 'SONY BRAVIA 2 43 INCH L...',
            rating: 5.0,
            reviews: 1321,
            originalPrice: '$1200',
            price: '$800'
        },
        {
            id: 3,
            image: '/icons.svg',
            discount: '15% off',
            name: 'KELVINATOR 537L INVERT...',
            rating: 5.0,
            reviews: 232,
            originalPrice: '$1350',
            price: '$1115'
        },
        {
            id: 4,
            image: '/icons.svg',
            discount: '15% off',
            name: 'HAIER 1.5 TON AQUACOOL...',
            rating: 5.0,
            reviews: 82,
            originalPrice: '$650',
            price: '$500'
        },
        {
            id: 5,
            image: '/icons.svg',
            discount: '35% off',
            name: 'HAIER 8KG TOP LOAD AUT...',
            rating: 5.0,
            reviews: 23,
            originalPrice: '$300',
            price: '$210'
        },
        {
            id: 6,
            image: '/icons.svg',
            discount: '12% off',
            name: 'KIESLECKT KS 3 CURVED A...',
            rating: 5.0,
            reviews: 321,
            originalPrice: '$70',
            price: '$60'
        },
        {
            id: 7,
            image: '/icons.svg',
            discount: '21% off',
            name: 'HAYLOU S40 ANC BLUETO...',
            rating: 5.0,
            reviews: 342,
            originalPrice: '$70',
            price: '$55'
        },
        {
            id: 8,
            image: '/icons.svg',
            discount: '15% off',
            name: 'TQIU S3 GLASS WINDOW D...',
            rating: 5.0,
            reviews: 243,
            originalPrice: '$110',
            price: '$89'
        },
        {
            id: 9,
            image: '/icons.svg',
            discount: '40% off',
            name: 'PANASONIC 1200W 3 JAR...',
            rating: 5.0,
            reviews: 169,
            originalPrice: '$137',
            price: '$78'
        },
        {
            id: 10,
            image: '/icons.svg',
            discount: '50% off',
            name: 'HAIER 8KG TOP LOAD AUT...',
            rating: 5.0,
            reviews: 777,
            originalPrice: '$30',
            price: '$15'
        }
    ];

    return (
        <div className='bg-[#f5a623] rounded-xl p-8 w-full mx-auto my-10'>
            <div className='flex justify-between items-center mb-5'>
                <div className='flex items-center gap-3'>
                    <span className='text-3xl'>🔥</span>
                    <h2 className='text-2xl font-bold text-[#1a1a1a]'>DEAL OF THE DAY</h2>
                </div>
                <div className='flex gap-2'>
                    <span className='bg-[#4a3728] text-white px-4 py-2 rounded-md text-base font-bold min-w-[50px] text-center'>{timeLeft.hours}H</span>
                    <span className='bg-[#4a3728] text-white px-4 py-2 rounded-md text-base font-bold min-w-[50px] text-center'>{timeLeft.minutes}M</span>
                    <span className='bg-[#4a3728] text-white px-4 py-2 rounded-md text-base font-bold min-w-[50px] text-center'>{timeLeft.seconds}S</span>
                </div>
            </div>

            <div className='bg-gradient-to-br from-[#1a0a00] via-[#4a1a00] to-[#1a0a00] rounded-xl mb-8 text-center relative overflow-hidden min-h-[250px]' style={{ backgroundImage: `url(${dealfireimg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className='relative z-10 p-10'>
                    <h3 className='text-3xl text-white font-bold mb-2'></h3>
                    <p className='text-xl text-white my-2'></p>
                    <h3 className='text-3xl text-white font-bold mb-2'></h3>
                    <p className='text-base text-white mt-4'></p>
                </div>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-8'>
                {deals.map((deal) => (
                    <div className='bg-white rounded-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg' key={deal.id}>
                        <div className='relative h-[180px] flex items-center justify-center mb-4'>
                            <span className='absolute top-2 right-2 bg-[#87CEEB] text-[#1a1a1a] px-2 py-1 rounded text-xs font-semibold'>{deal.discount}</span>
                            <img src={deal.image} alt={deal.name} className='max-w-full max-h-full object-contain' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h4 className='text-sm font-semibold text-[#1a1a1a] whitespace-nowrap overflow-hidden text-ellipsis'>{deal.name}</h4>
                            <div className='flex items-center gap-1 text-xs'>
                                <span>⭐ {deal.rating}</span>
                                <span className='text-gray-600'>({deal.reviews})</span>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-xs text-gray-400 line-through'>{deal.originalPrice}</span>
                                <span className='text-base font-bold text-[#1a1a1a]'>{deal.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='text-center'>
                <button className='bg-transparent border-2 border-[#1a1a1a] text-[#1a1a1a] px-8 py-3 rounded-lg text-sm font-semibold hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 cursor-pointer'>
                    SEE MORE
                </button>
            </div>
        </div>
    );
};

export default Deal;
