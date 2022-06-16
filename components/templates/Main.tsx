import Link from 'next/link';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Main = () => (
  <>
    <Background color="bg-gray-100">
      <Section yPadding="py-4">
        <NavbarTwoColumns logo={<Logo xl />}>
          <div className='mr-5'>
            <Link href="https://github.com/lsquantum">
              <a>GitHub</a>
            </Link>
          </div>
          <div>
            <Link href="/">
              <a>LinkedIn</a>
            </Link>
          </div>
        </NavbarTwoColumns>
      </Section>
    </Background>
    <Background color="bg-white">
      <Section yPadding="pt-6 pb-12">
        <div className="space-y-4">
          <div className="w-full bg-gray-100 shadow-md rounded">
            <div className="p-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 border-b border-gray-300">
              <div className='w-full col-span-2'>
                <img className="w-42 h-42 rounded-full mx-auto shadow-xl" src="/assets/images/profile-pic.png" alt="" width="384" height="384" />
              </div>
              <div className='w-auto ml-5 col-span-7'>
                <div>
                  <p className='font-bold text-2xl'>Ahmet Umut Serefoglu</p>
                  <p className='font-semibold text-xl'>Software Developer</p>
                  <div className='mt-3 ml-3'>
                    <ul className="mr-10 mt-2 ml-5 list-disc">
                      <li>Now this is a story all about how, my life got flipped turned upside down. Lorem ipsum dumy text.</li>
                    </ul>
                    <ul className="mr-10 mt-2 ml-5 list-disc">
                      <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                    </ul>
                    <ul className="mr-10 mt-2 ml-5 list-disc">
                      <li>Now this is a story all about how, my life got flipped turned upside down. Lorem ipsum dumy text.</li>
                    </ul>
                  </div>
                </div>
                <div className='flex flex-wrap m-4 justify-center'>
                  <div className="rounded-full py-1 px-6 m-1 bg-gray-500 hover:bg-slate-500 font-medium text-black cursor-pointer">React.js</div>
                  <div className="rounded-full py-1 px-6 m-1 bg-gray-500 hover:bg-slate-500 font-medium text-black cursor-pointer">React Native</div>
                  <div className="rounded-full py-1 px-6 m-1 bg-gray-500 hover:bg-slate-500 font-medium text-black cursor-pointer">JavaScript</div>
                  <div className="rounded-full py-1 px-6 m-1 bg-gray-500 hover:bg-slate-500 font-medium text-black cursor-pointer">TypeScript</div>
                  <div className="rounded-full py-1 px-6 m-1 bg-gray-500 hover:bg-slate-500 font-medium text-black cursor-pointer">.NET Core</div>
                </div>
              </div>
              <div className='w-full col-span-3 lg:border-l border-gray-300'>
                <div className='mt-2 ml-3 mb-3 flex'>
                  <div className="h-6 w-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className='ml-2'><p>ahmetumut@email.com</p></div>
                </div>
                <div className='ml-3 flex flex-nowrap border-b border-gray-300'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className='ml-2 pb-4'><p>+90 (545) 510-1515</p></div>
                </div>
                <div className='ml-3 flex flex-nowrap mt-3'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                    </svg>
                  </div>
                  <div className='ml-2 pb-4'><p>18/06/1994</p></div>
                </div>
                <div className='ml-3 flex flex-nowrap'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className='ml-2 pb-4'><p>Married</p></div>
                </div>
              </div>
            </div>
            <div className="p-4 grid grid-cols-2 gap-3 place-items-center	">
              <div className='flex flex-nowrap'>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className='mt-1 ml-2'>
                  <p>Ankara, TURKEY, TR</p>
                </div>
              </div>
              <div>
                <div className='flex flex-nowrap'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className='mt-1 ml-2'>
                    <p>5 years of experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-auto bg-gray-100 shadow-md rounded">
            <div className='flex flex-nowrap'>
              <div className='my-3 ml-4 mr-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className='my-3 text-xl font-bold tex'>
                Timeline
              </div>
            </div>
            <div className='mx-14 mb-5 grid grid-cols-10 gap-0'>
              <div className='ml-3 mr-7 col-span-2 border-b-4 border-gray-500 font-semibold hover:text-gray-700 hover:cursor-pointer'>
                Ventura Yazılım
              </div>
              <div className='-ml-5 mr-10 col-span-2 border-b-4 border-gray-500 font-semibold hover:text-gray-700 hover:cursor-pointer'>
                Military Service
              </div>
              <div className='-ml-8 -mr-6 col-span-3 border-b-4 border-gray-500 font-semibold hover:text-gray-700 hover:cursor-pointer'>
                Ventura Yazılım
              </div>
              <div className='ml-7 mr-12 col-span-2 border-b-4 border-gray-500 font-semibold hover:text-gray-700 hover:cursor-pointer'>
                DIAS Teknoloji
              </div>
              <div className='-ml-10 col-span-1 border-b-4 border-gray-500 font-semibold hover:text-gray-700 hover:cursor-pointer'>
                NETAŞ
              </div>
            </div>
            <div className='mx-14 border-t border-gray-600'>
            </div>
            <div className='mx-14 grid grid-cols-5 gap-0'>
              <div><p className=''>2017</p></div>
              <div>2019</div>
              <div>2020</div>
              <div>2021</div>
              <div className='grid grid-cols-2'><div>2022</div><div className='text-right'>Present</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Background>
  </>
);

export { Main };
