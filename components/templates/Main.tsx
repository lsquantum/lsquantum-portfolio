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
            <div className='w-auto mx-8'>
              <div className='w-auto'>
                <div className='w-64 ml-3 inline-block border-b-4 border-green-600'>
                  <span className='inline-block w-auto text-sm font-medium'>
                    Ventura Yazılım A.Ş
                  </span>
                </div>
              </div>
              <div className='w-auto'>
                <div className='w-64 inline-block'>
                </div>
                <div className='w-64 ml-4 inline-block border-b-4 border-gray-900'>
                  <span className='inline-block w-auto text-sm font-medium'>
                    Türk Silahlı Kuvvetleri
                  </span>
                </div>
              </div>
              <div className='w-auto'>
                <div className='w-80 inline-block'>
                </div>
                <div className='w-4/12 ml-56 inline-block border-b-4 border-blue-900'>
                  <span className='inline-block w-auto text-sm font-medium'>
                    Ventura Yazılım A.Ş
                  </span>
                </div>
              </div>
              <div className='w-auto'>
                <div className='w-96 inline-block'>
                </div>
                <div className='w-80 inline-block'>
                </div>
                <div className='w-36 ml-60 inline-block border-b-4 border-purple-700'>
                  <span className='inline-block w-auto text-sm font-medium'>
                    DIAS Teknoloji
                  </span>
                </div>
              </div>
              <div className='w-auto'>
                <div className='w-96 inline-block'>
                </div>
                <div className='w-96 inline-block'>
                </div>
                <div className='w-24 ml-80 inline-block border-b-4 border-blue-500'>
                  <span className='inline-block w-auto text-sm font-medium'>
                    NETAŞ
                  </span>
                </div>
              </div>
              <div className='m-2'>
                <div className="'w-auto border-t-2 border-gray-600"></div>
                <div className="w-full">
                  <div className='w-1/4 inline-block'>
                    <span className='font-medium'>2017</span>
                  </div>
                  <div className='w-1/4 inline-block'>
                    <span className='font-medium'>2019</span>
                  </div>
                  <div className='w-1/4 inline-block'>
                    <span className='font-medium'>2020</span>
                  </div>
                  <div className='w-1/4 inline-block'>
                    <span className='font-medium'>2021</span>
                    <span className='float-right font-medium'>Present</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-auto bg-gray-100 shadow-md rounded">
            <div className='flex flex-nowrap'>
              <div className='my-3 ml-4 mr-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className='my-3 text-xl font-bold tex'>
                Work Experience
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Background>
  </>
);

export { Main };