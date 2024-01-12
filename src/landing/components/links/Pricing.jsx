import {motion} from 'framer-motion';


export const Pricing = () => {
  return (
          <motion.div
              className="bg-dark my-16 sm:my-32"
              initial= {{opacity: 0, y: 40, scale: .95}}
              animate= {{opacity: 1, y: 0, scale: 1 }}
              exit= {{opacity: 0, y: 40, scale: .95 }}
          >
        <div className="mx-auto max-w-7xl px-8 lg:px-8">
          <div className="mx-auto max-w-4xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-lila">Pricing</h2>
            <h2 className="text-3xl font-bold tracking-tight mt-2 text-white sm:text-4xl">Simple no-tricks pricing</h2>
            <p className="mt-6 text-md leading-8 text-gray-text">Experience the simplicity of our no-tricks pricing model. We take pride in offering a straightforward approach, where a single payment grants you a lifetime of access. No hidden fees, no recurring charges—just one payment for a lifetime of value.</p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-white">Lifetime membership</h3>
              <p className="mt-6 text-base leading-7 text-gray-text"> Join us and enjoy the ease of a transparent and hassle-free experience that lasts a lifetime. We offer a comprehensive suite of features to help you stay on top of your tasks.</p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-lila">What’s included with Hazzly</h4>
                <div className="h-px flex-auto bg-gray-text rounded"></div>
              </div>
              <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-text sm:grid-cols-2 sm:gap-6">
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-lila" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Intuitive Task Tracking
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-lila" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Real-time Notifications
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-lila" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Entry to annual conference
                </li>
                <li className="flex gap-x-3">
                  <svg className="h-6 w-5 flex-none text-lila" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  Collaboration with team members
                </li>
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-[#2F2F2F] py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-white">Pay once, own it forever</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-white">$349</span>
                    <span className="text-sm font-semibold leading-relaxed tracking-wide text-white">USD</span>
                  </p>
                  <button href="#" className="mt-10 block w-full rounded-md bg-lila px-3 py-3 text-center text-sm font-semibold text-dark shadow-sm hover:opacity-80 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get access</button>
                  <p className="mt-6 text-xs leading-relaxed text-gray-text">Invoices and receipts available for easy company reimbursement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
  )
}