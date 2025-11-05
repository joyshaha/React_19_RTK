import React from "react";
// import logo from "../assets/html/logo.jpg";
import tranzo from "../assets/tranzo.jpg";
// import joy from "../assets/html/joy.jpg";
import solehin from "../assets/solehin.jpg";
import sabbir from "../assets/sabbir.jpg";
import suha from "../assets/suha.jpg";
import { Link } from "react-router-dom";

export default function Basic() {
  return (
    <>
      <body className="text-md md:text-lg font-normal text-slate-600">
        <div className="container mx-auto p-5 md:p-0">
          <header>
            <section className="md:h-screen h-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6">
              <div>
                <img
                  className="w-48 mb-4 object-cover rounded-md"
                  src={tranzo}
                  alt="Logo"
                />
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-800 mb-4">
                  Tranzo.AI - AI powered expense tracking
                </h1>
                <p className="text-sm text-gray-500 mb-8">
                  Join with TranzoAI to track your expenses with AI, the world's
                  most advanced expense tracking system. The bootstrapped
                  startup from India is the future of expense tracking.
                </p>
                <ul className="flex gap-6">
                  <li>
                    <Link
                      to="/"
                      className="bg-sky-500 hover:bg-sky-900 text-white px-8 py-4 rounded-md inline-block"
                    >
                      Get Started
                    </Link>
                  </li>
                  <li>
                    <a
                      className="bg-slate-500 hover:bg-slate-900 text-white px-8 py-4 rounded-md inline-block"
                      href="https://tranzo.ai"
                      target="_blank"
                    >
                      Learn More
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center items-center">
                <img
                  className="w-3/4 md:max-w-full object-cover rounded-[100%] object-center"
                  src={solehin}
                  alt="Logo"
                />
              </div>
            </section>
          </header>
          <main>
            <section>
              <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="mt-2 text-4xl font-bold tracking-tight text-pretty text-slate-900 sm:text-5xl lg:text-balance">
                      How it works
                    </h2>
                    <p className="mt-6">
                      TranzoAI is a platform for AI-powered expense tracking. It uses AI to track your expenses and provide you with a summary of your expenses.

                    </p>
                  </div>
                  <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                      <div className="relative pl-16">
                        <dt className="text-lg font-bold text-slate-900">
                          <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-sky-500">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              data-slot="icon"
                              aria-hidden="true"
                              className="size-6 text-white"
                            >
                              <path
                                d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                            {/* <ion-icon className="size-6 text-white" name="push-outline"></ion-icon> */}
                          </div>
                          AI-powered expense tracking
                        </dt>
                        <dd className="mt-2">
                          TranzoAI uses AI to track your expenses and provide you with a summary of your expenses.
                        </dd>
                      </div>
                      <div className="relative pl-16">
                        <dt className="text-base/7 font-semibold text-gray-900">
                          <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              data-slot="icon"
                              aria-hidden="true"
                              className="size-6 text-white"
                            >
                              <path
                                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          Easy to use
                        </dt>
                        <dd className="mt-2 text-base/7 text-gray-600">
                          TranzoAI is easy to use and provides a user-friendly interface for tracking your expenses.
                        </dd>
                      </div>
                      <div className="relative pl-16">
                        <dt className="text-base/7 font-semibold text-gray-900">
                          <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              data-slot="icon"
                              aria-hidden="true"
                              className="size-6 text-white"
                            >
                              <path
                                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          Accurate expense tracking
                        </dt>
                        <dd className="mt-2 text-base/7 text-gray-600">
                          TranzoAI is accurate and provides a detailed summary of your expenses.
                        </dd>
                      </div>
                      <div className="relative pl-16">
                        <dt className="text-lg font-bold text-slate-900">
                          <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-sky-500">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              data-slot="icon"
                              aria-hidden="true"
                              className="size-6 text-white"
                            >
                              <path
                                d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          Real-time expense tracking
                        </dt>
                        <dd className="mt-2">
                          TranzoAI is real-time and provides a detailed summary of your expenses.
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 mb-64">
              <div className="bg-teal-500 max-w-3xl h-full w-full rounded-md p-4 sm:p-8 md:p-12 text-center text-white">
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-4xl font-bold tracking-tight text-pretty mb-4 text-center">
                    Technical Lead at TechCare
                  </h2>
                </div>
                <div className="p-4 mb-4">
                  <p>
                    I am the Technical Lead at TechCare. I am responsible for the technical direction of the company.
                  </p>
                </div>
                <div className="flex justify-center items-center w-2/3 mx-auto mb-4">
                  <img
                    className="w-3/4 md:max-w-full object-cover rounded-[100%] object-center"
                    src={sabbir}
                    alt="Logo"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <a
                    className="bg-white text-sky-500 hover:bg-sky-900 px-8 py-4 rounded-md inline-block"
                    href="https://techcare.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="bg-gray-500 max-w-3xl h-full w-full rounded-md p-4 sm:p-8 md:p-12 text-center text-white">
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-4xl font-bold tracking-tight text-pretty mb-4 text-center">
                    Technical Project Manager at TechCare
                  </h2>
                </div>
                <div className="p-4 mb-4">
                  <p>
                    I am the Technical Project Manager at TechCare. I am responsible for the technical direction of the company.
                  </p>
                </div>
                <div className="flex justify-center items-center w-2/3 mx-auto mb-4">
                  <img
                    className="w-3/4 md:max-w-full object-cover rounded-[100%] object-center"
                    src={suha}
                    alt="Logo"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <a
                    className="bg-white text-sky-500 hover:bg-sky-900 px-8 py-4 rounded-md inline-block"
                    href="https://techcare.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </section>
            <section className="flex justify-center items-center mb-64">
              <div className="bg-emerald-500 max-w-3xl rounded-md p-4 sm:p-8 md:p-12 text-center text-white">
                <h2 className="text-4xl font-bold tracking-tight text-pretty mb-4">
                  It's time to visit TechCare
                </h2>
                <p className="mb-4">
                  TechCare is a platform for tech enthusiasts to connect and
                  share their knowledge.
                </p>
                <a
                  className="bg-white text-sky-500 hover:bg-sky-900 px-8 py-4 rounded-md inline-block"
                  href="https://techcare.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
              </div>
            </section>
          </main>
        </div>
        <footer className="text-center py-4 bg-slate-100">
          <p>@ Copyright 2025 TranzoAI</p>
        </footer>
      </body>
    </>
  );
}
