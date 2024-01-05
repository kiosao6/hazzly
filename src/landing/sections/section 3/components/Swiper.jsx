


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../../../../src/index.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export const Swiperr = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[33rem] sm:h-[16rem] rounded-3xl shadow-md"
      >
        
        <SwiperSlide className='bg-light rounded-3xl py-8 px-8 !flex flex-col !items-start gap-3 sm:flex-row sm:justify-between'>
          <div className='max-w-xl flex flex-col gap-3'>
            <h3 className='text-gray-800 font-bold text-xl tracking-tight'>Intuitive Task Tracking:</h3>
            <p className='font-normal text-gray-500 leading-6 text-sm mb-3'>
            Hazzly simplifies project management: track tasks effortlessly, stay updated on statuses and deadlines, and collaborate seamlessly with a user-friendly interface for easy task management, reassignment, and completion.</p>
          </div>
          <img className='w-[280px] sm:h-full sm:!w-auto' src="src/images/tasks.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className='bg-light rounded-3xl py-8 px-8 !flex flex-col !items-start gap-3 sm:flex-row sm:justify-between'>
          <div className='max-w-xl flex flex-col gap-3'>
            <h3 className='text-gray-800 font-bold text-xl tracking-tight'>Collaboration with team members</h3>
            <p className='font-normal text-gray-500 leading-6 text-sm mb-3'>
            Work together seamlessly with your team, assign tasks to team members, and communicate easily with our messaging system.</p>
          </div>
          <img className='w-[280px] sm:h-full sm:!w-auto' src="/src/images/swiper1.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className='bg-light rounded-3xl py-8 px-8 !flex flex-col !items-start gap-3 sm:flex-row sm:justify-between'>
          <div className='max-w-xl flex flex-col gap-3'>
            <h3 className='text-gray-800 font-bold text-xl tracking-tight'>Real-time Notifications</h3>
            <p className='font-normal text-gray-500 leading-6 text-sm mb-3'>
            Hazzly keeps you connected and informed with real-time notifications on task updates, comments, and deadlines, ensuring prompt responses for enhanced productivity, whether you're on the go or focused on other tasks.</p>
          </div>
          <img className='w-[280px] sm:h-full sm:!w-auto' src="src/images/notification.png" alt="" />
        </SwiperSlide>

      </Swiper>
    </>
  );
}