import { motion } from 'framer-motion';

<svg className="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M15.6501 4.2629L16.4635 4.3642C18.3408 4.59801 19.75 6.19359 19.75 8.08545V18.5749C19.75 20.4118 18.3817 21.961 16.5589 22.188C13.5313 22.5651 10.4687 22.5651 7.44107 22.188C5.61826 21.961 4.25 20.4118 4.25 18.5749V8.08545C4.25 6.19359 5.6592 4.59801 7.53655 4.3642L8.3499 4.2629C8.67208 3.10206 9.73654 2.25 11 2.25H13C14.2635 2.25 15.3279 3.10206 15.6501 4.2629ZM8.25 5.78693L7.72193 5.8527C6.59552 5.99299 5.75 6.95034 5.75 8.08545V18.5749C5.75 19.655 6.55458 20.566 7.62645 20.6995C10.5309 21.0612 13.4691 21.0612 16.3735 20.6995C17.4454 20.566 18.25 19.655 18.25 18.5749V8.08545C18.25 6.95034 17.4045 5.99299 16.2781 5.8527L15.75 5.78693V7C15.75 7.41421 15.4142 7.75 15 7.75H9C8.58579 7.75 8.25 7.41421 8.25 7V5.78693ZM9.75 5C9.75 4.30964 10.3096 3.75 11 3.75H13C13.6904 3.75 14.25 4.30964 14.25 5V6.25H9.75V5Z" fill="black"/>
<path d="M15.75 11.75C15.75 11.3358 15.4142 11 15 11H9C8.58579 11 8.25 11.3358 8.25 11.75C8.25 12.1642 8.58579 12.5 9 12.5H15C15.4142 12.5 15.75 12.1642 15.75 11.75Z" fill="black"/>
<path d="M14.75 14.75C14.75 14.3358 14.4142 14 14 14H9C8.58579 14 8.25 14.3358 8.25 14.75C8.25 15.1642 8.58579 15.5 9 15.5H14C14.4142 15.5 14.75 15.1642 14.75 14.75Z" fill="black"/>
</svg>


export const Features = () => {
  return (
    <>
      <motion.div
          className="bg-dark section my-16 sm:my-32"
          initial= {{opacity: 0, y: 40, scale: .95}}
          animate= {{opacity: 1, y: 0, scale: 1}}
          exit= {{opacity: 0, y: 40, scale: .95}}
      >
  <div className="mx-auto max-w-7xl px-8 lg:px-8">
    <div className="mx-auto max-w-4xl sm:text-center">
      <h2 className="text-base font-semibold leading-7 text-lila">Stay organized</h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Get control of your tasks</p>
      <p className="mt-6 text-md leading-8 text-gray-text">Discover the effortless way to take command of your tasks with our innovative app. We've designed a user-friendly solution that puts you in full control, making task management a breeze. Seamlessly navigate through your responsibilities and enhance your productivity with our intuitive features.</p>
    </div>

    
    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
      <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
        <div className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-white">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-lila">
            <svg className="h-6 w-6 text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.6501 4.2629L16.4635 4.3642C18.3408 4.59801 19.75 6.19359 19.75 8.08545V18.5749C19.75 20.4118 18.3817 21.961 16.5589 22.188C13.5313 22.5651 10.4687 22.5651 7.44107 22.188C5.61826 21.961 4.25 20.4118 4.25 18.5749V8.08545C4.25 6.19359 5.6592 4.59801 7.53655 4.3642L8.3499 4.2629C8.67208 3.10206 9.73654 2.25 11 2.25H13C14.2635 2.25 15.3279 3.10206 15.6501 4.2629ZM8.25 5.78693L7.72193 5.8527C6.59552 5.99299 5.75 6.95034 5.75 8.08545V18.5749C5.75 19.655 6.55458 20.566 7.62645 20.6995C10.5309 21.0612 13.4691 21.0612 16.3735 20.6995C17.4454 20.566 18.25 19.655 18.25 18.5749V8.08545C18.25 6.95034 17.4045 5.99299 16.2781 5.8527L15.75 5.78693V7C15.75 7.41421 15.4142 7.75 15 7.75H9C8.58579 7.75 8.25 7.41421 8.25 7V5.78693ZM9.75 5C9.75 4.30964 10.3096 3.75 11 3.75H13C13.6904 3.75 14.25 4.30964 14.25 5V6.25H9.75V5Z" fill="#1b1b1b"/>
                <path d="M15.75 11.75C15.75 11.3358 15.4142 11 15 11H9C8.58579 11 8.25 11.3358 8.25 11.75C8.25 12.1642 8.58579 12.5 9 12.5H15C15.4142 12.5 15.75 12.1642 15.75 11.75Z" fill="#1b1b1b"/>
                <path d="M14.75 14.75C14.75 14.3358 14.4142 14 14 14H9C8.58579 14 8.25 14.3358 8.25 14.75C8.25 15.1642 8.58579 15.5 9 15.5H14C14.4142 15.5 14.75 15.1642 14.75 14.75Z" fill="#1b1b1b"/>
              </svg>
            </div>
            Intuitive Task Tracking
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-text">Hazzly streamlines project management with a user-friendly interface for efficient task tracking, real-time updates, and seamless collaboration</dd>
        </div>
        <div className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-white">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-lila">
            <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V3.75H10.4426C8.21751 3.75 6.37591 5.48001 6.23702 7.70074L6.01601 11.2342C5.93175 12.5814 5.47946 13.8797 4.7084 14.9876C4.01172 15.9886 4.63194 17.3712 5.84287 17.5165L9.25 17.9254V19C9.25 20.5188 10.4812 21.75 12 21.75C13.5188 21.75 14.75 20.5188 14.75 19V17.9254L18.1571 17.5165C19.3681 17.3712 19.9883 15.9886 19.2916 14.9876C18.5205 13.8797 18.0682 12.5814 17.984 11.2342L17.763 7.70074C17.6241 5.48001 15.7825 3.75 13.5574 3.75H13V3ZM10.4426 5.25C9.00958 5.25 7.82354 6.36417 7.73409 7.79438L7.51309 11.3278C7.41169 12.949 6.86744 14.5112 5.93959 15.8444C5.88924 15.9168 5.93406 16.0167 6.02159 16.0272L9.75925 16.4757C11.2477 16.6543 12.7523 16.6543 14.2407 16.4757L17.9784 16.0272C18.0659 16.0167 18.1108 15.9168 18.0604 15.8444C17.1326 14.5112 16.5883 12.949 16.4869 11.3278L16.2659 7.79438C16.1764 6.36417 14.9904 5.25 13.5574 5.25H10.4426ZM12 20.25C11.3096 20.25 10.75 19.6904 10.75 19V18.25H13.25V19C13.25 19.6904 12.6904 20.25 12 20.25Z" fill="#1b1b1b"/>
            </svg>


            </div>
            Real-time Notifications
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-text"> Hazzly boosts productivity with real-time notifications for task updates, comments, and deadlines, ensuring prompt responses whether you're on the go or focused on other tasks.</dd>
        </div>
        <div className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-white">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-lila">
            <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.75 7.5C6.75 5.15279 8.65279 3.25 11 3.25C13.3472 3.25 15.25 5.15279 15.25 7.5C15.25 9.84721 13.3472 11.75 11 11.75C8.65279 11.75 6.75 9.84721 6.75 7.5ZM11 4.75C9.48122 4.75 8.25 5.98122 8.25 7.5C8.25 9.01878 9.48122 10.25 11 10.25C12.5188 10.25 13.75 9.01878 13.75 7.5C13.75 5.98122 12.5188 4.75 11 4.75Z" fill="#1b1b1b"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M3.25 17C3.25 14.9289 4.92893 13.25 7 13.25H7.34087C7.52536 13.25 7.70869 13.2792 7.88407 13.3364L8.74959 13.6191C10.2119 14.0965 11.7881 14.0965 13.2504 13.6191L14.1159 13.3364C14.2913 13.2792 14.4746 13.25 14.6591 13.25H15C17.0711 13.25 18.75 14.9289 18.75 17V18.1883C18.75 18.9415 18.2041 19.5837 17.4607 19.7051C13.1819 20.4037 8.8181 20.4037 4.53927 19.7051C3.79588 19.5837 3.25 18.9415 3.25 18.1883V17ZM7 14.75C5.75736 14.75 4.75 15.7574 4.75 17V18.1883C4.75 18.2064 4.76311 18.2218 4.78097 18.2247C8.89972 18.8972 13.1003 18.8972 17.219 18.2247C17.2369 18.2218 17.25 18.2064 17.25 18.1883V17C17.25 15.7574 16.2426 14.75 15 14.75H14.6591C14.6328 14.75 14.6066 14.7542 14.5815 14.7623L13.716 15.045C11.9512 15.6212 10.0488 15.6212 8.28398 15.045L7.41847 14.7623C7.39342 14.7542 7.36722 14.75 7.34087 14.75H7Z" fill="#1b1b1b"/>
                <path d="M19.5 6.25C19.9142 6.25 20.25 6.58579 20.25 7V8.75H22C22.4142 8.75 22.75 9.08579 22.75 9.5C22.75 9.91421 22.4142 10.25 22 10.25H20.25V12C20.25 12.4142 19.9142 12.75 19.5 12.75C19.0858 12.75 18.75 12.4142 18.75 12V10.25H17C16.5858 10.25 16.25 9.91421 16.25 9.5C16.25 9.08579 16.5858 8.75 17 8.75H18.75V7C18.75 6.58579 19.0858 6.25 19.5 6.25Z" fill="#1b1b1b"/>
            </svg>

            </div>
            Collaboration with team members
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-text"> Work together seamlessly with your team, assign tasks to team members, and communicate easily with our messaging system.</dd>
        </div>
        <div className="relative pl-16">
          <dt className="text-base font-semibold leading-7 text-white">
            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-lila">
              <svg className="h-6 w-6 text-dark" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
              </svg>
            </div>
            Advanced security
          </dt>
          <dd className="mt-2 text-base leading-7 text-gray-text">Our system prioritizes advanced security measures, employing cutting-edge encryption and continuous monitoring to ensure the protection of sensitive data.</dd>
        </div>
      </dl>
    </div>
  </div>
</motion.div>
    </>
  )
}