import React from 'react';
import Accordian from '../Footer/Accordian';

export default function Footer() {
  const now = new Date();
  const year = now.getFullYear();
  const contacts = ['+447771046375', 't.okonbaeva92@gmail.com'];

  const quickLinks = ['Home', 'Portfolio', 'About-me'];

  return (
    <div id="footer" className="mt-[5px]">
      <div className="bg-white pt-0 sm:mt-8 lg:pt-[100px]"></div>
      <footer className="bg-[#232323]">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="container mx-auto mt-3 block  p-4 md:hidden">
            <Accordian title="Contacts" content={contacts} />
            <Accordian title="QuickLinks" content={quickLinks} />
            <div className="md:hidden">
              <p className="font-sans mt-4 max-w-xs text-center text-[#7b858b]">
                All rights reserved.
              </p>
              <p className="font-sans mt-5 max-w-xs text-center text-xs text-[#7b858b]">
                &copy; {year} Turdugul
              </p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-8 md:pt-10">
            <div className="hidden md:block">
              <p className="font-sans mt-4 max-w-xs text-[#7b858b] ">
                All rights reserved.
              </p>
              <p className="font-sans max-w-xs text-xs text-[#7b858b] ">
                &copy; 2024 Turdugul Okonbaeva
              </p>
            </div>

            <div className="hidden md:block">
              <p className="font-medium font-sans text-white">Contacts</p>
              <ul className="mt-6 space-y-4 text-sm">
                {contacts.map((item) => (
                  <li key={item}>
                    <a className="font-sans cursor-pointer text-[#7b858b] hover:opacity-75">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block">
              <p className="font-medium font-sans text-white">QuickLinks</p>
              <ul className="mt-6 space-y-4 text-sm">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`/#${link.toLowerCase()}`}
                      className="font-sans cursor-pointer text-[#7b858b] hover:opacity-75"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden md:block">
              <p className="font-medium font-sans text-white">
                Let&apos;s Connect
              </p>
              <ul className="mt-6 space-y-4  text-sm">
                <li>
                  {' '}
                  <div className="mb-2 flex w-1/4 justify-start  sm:mb-0 sm:w-auto">
                    <a
                      className="group flex flex-row items-center justify-center gap-2"
                      target="_blank"
                      href="https://github.com/Turdugul"
                      rel="noreferrer"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 496 512"
                        className="size-6 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                      </svg>
                      <p className="font-sans font-recoleta text-sm text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE] sm:text-base lg:mt-3 xl:mt-1">
                        GitHub
                      </p>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex w-1/4 justify-start sm:mb-0 sm:w-auto">
                    <a
                      className="group flex flex-row items-center justify-center gap-2"
                      target="_blank"
                      href="https://www.linkedin.com/in/turdugul/"
                      rel="noreferrer"
                    >
                      {' '}
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 448 512"
                        className="size-6 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                      </svg>
                      <p className="font-sans mt-1 font-recoleta text-sm text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE] sm:text-base lg:mt-3 xl:mt-1">
                        Linkedin
                      </p>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="mb-2 flex w-1/4 justify-start sm:mb-0 sm:w-auto">
                    <a
                      className="group flex flex-row items-center justify-center gap-2"
                      target="_blank"
                      href="mailto:t.okonbaeva92@gmail.com"
                      rel="noreferrer"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        className="size-6 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                      </svg>
                      <p className="font-sans mt-1 font-recoleta text-sm text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE] sm:text-base  lg:mt-3 xl:mt-1">
                        Gmail
                      </p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto block overflow-hidden px-10 sm:py-10 md:hidden md:px-20 xl:max-w-6xl xl:px-44 2xl:max-w-7xl">
            <div className="flex  flex-wrap items-center justify-between">
              <div className="mb-10 w-1/3 sm:mx-4 sm:mb-0 sm:w-auto">
                <a
                  className="group flex flex-col items-center justify-center"
                  target="_blank"
                  href="https://github.com/Turdugul"
                  rel="noreferrer"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 496 512"
                    className="size-8 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                  </svg>
                  <h5 className="font-sans mt-1 font-recoleta text-sm text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE] sm:text-base lg:mt-3 xl:mt-5">
                    GitHub
                  </h5>
                </a>
              </div>

              <div className="mb-10 w-1/3 sm:mx-4 sm:mb-0 sm:w-auto">
                <a
                  className="group flex flex-col items-center justify-center"
                  target="_blank"
                  href="https://www.linkedin.com/in/turdugul/"
                  rel="noreferrer"
                >
                  {' '}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="size-8 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                  </svg>
                  <h5 className="font-sans mt-1 font-recoleta text-sm text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE] sm:text-base lg:mt-3 xl:mt-5">
                    Linkedin
                  </h5>
                </a>
              </div>

              <div className="mb-10 w-1/3 sm:mx-4 sm:mb-0 sm:w-auto">
                <a
                  className="group flex flex-col items-center justify-center"
                  target="_blank"
                  href="mailto: t.okonbaeva92@gmail.com"
                  rel="noreferrer"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="size-8 text-gray-300 transition-colors duration-300 group-hover:text-[#48AFDE]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                  </svg>
                  <h5 className="font-sans mt-1 font-recoleta text-sm text-gray-200 transition-colors duration-300 group-hover:text-[#48AFDE] sm:text-base lg:mt-3 xl:mt-5">
                    Gmail
                  </h5>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
