import { html } from 'swtl';
import { Tag } from '../components/Tag.js';
const images = import.meta.glob('/src/assets/images/**/*.{avif,jpeg,jpg,webp,png,svg}', { query: 'url', import: 'default', eager: true });

function img(input) {
    return images[`/src/assets/images/${input}`];
}

export function Html(serviceWorker = true) {
    return html`
        <div class="min-h-screen">
            <header class="flex flex-wrap flex-col sm:flex-row items-center text-center justify-center gap-4 sm:gap-8 bg-teal-900 dark:bg-gray-800 dark:contrast-more:bg-gray-900 contrast-more:border-b border-black dark:border-white dark:text-white py-6 px-8">
                <div>
                    <picture>
                        <source srcset="${img`luke.avif`}" type="image/avif">
                        <img
                                alt="Photo of Luke"
                                class="rounded-full max-w-[100px] md:max-w-[150px] w-full h-auto"
                                fetchpriority="high"
                                height="460"
                                width="460"
                                src="${img`luke.jpeg`}"
                        >
                    </picture>
                </div>
                <div>
                    <h1 class="text-white text-4xl font-bold">Luke Warlow</h1>
                    <p class="text-white text-xl">Software Engineer</p>
                </div>
                <div class="hidden absolute right-8 top-8 sm:top-auto sm:right-24">
                    <button id="settingsBtn" aria-label="Settings" title="Settings" aria-expanded="false"
                            class="cursor-pointer text-white">
                        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                    </button>
                </div>
            </header>
            <dialog id="settingsDialog"
                    class="backdrop:bg-black/25 backdrop:transparency-reduce:bg-black/50 rounded min-w-[80%] sm:min-w-[50%] md:min-w-[33%] lg:min-w-[25%] p-6 open:flex flex-col gap-2 z-10 dark:bg-black">
                <h2 class="text-2xl">Settings</h2>
                <form class="grid gap-4" method="dialog" id="settingsForm">
                    <div class="flex flex-col gap-2">
                        <label for="colorSchemeSwitch">Color Scheme</label>
                        <select id="colorSchemeSwitch"
                                class="dark:bg-gray-700 p-1 border border-gray-300 contrast-more:border-black dark:border-none contrast-more:dark:border-solid contrast-more:dark:border-white">
                            <option value="">System</option>
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="contrastSwitch">Contrast</label>
                        <select id="contrastSwitch"
                                class="dark:bg-gray-700 p-1 border border-gray-300 contrast-more:border-black dark:border-none contrast-more:dark:border-solid contrast-more:dark:border-white">
                            <option value="">System</option>
                            <option value="more">More</option>
                            <option value="no-preference">No Preference</option>
                        </select>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="motionSwitch">Reduced Motion</label>
                        <select id="motionSwitch"
                                class="dark:bg-gray-700 p-1 border border-gray-300 contrast-more:border-black dark:border-none contrast-more:dark:border-solid contrast-more:dark:border-white">
                            <option value="">System</option>
                            <option value="reduce">Reduce</option>
                            <option value="no-preference">No Preference</option>
                        </select>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="transparencySwitch">Reduced Transparency</label>
                        <select id="transparencySwitch"
                                class="dark:bg-gray-700 p-1 border border-gray-300 contrast-more:border-black dark:border-none contrast-more:dark:border-solid contrast-more:dark:border-white">
                            <option value="">System</option>
                            <option value="reduce">Reduce</option>
                            <option value="no-preference">No Preference</option>
                        </select>
                    </div>
                    <div class="flex justify-around">
                        <button type="reset"
                                class="bg-gray-50 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-500 px-2 py-1 rounded-md border border-gray-300 contrast-more:border-black dark:border-none contrast-more:dark:border-solid contrast-more:dark:border-white">
                            Cancel
                        </button>
                        <button type="submit"
                                class="bg-gray-50 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-500 px-2 py-1 rounded-md border border-gray-300 contrast-more:border-black dark:border-none contrast-more:dark:border-solid contrast-more:dark:border-white">
                            Save
                        </button>
                    </div>
                </form>
            </dialog>
            <main class="py-8 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <section class="col-span-1 flex flex-col gap-4">
                    <section aria-labelledby="info"
                             class="bg-white dark:bg-gray-800 dark:contrast-more:bg-gray-900 dark:text-white contrast-more:border border-black dark:border-white rounded overflow-hidden p-3 lg:p-4 shadow-md dark:shadow-2xl inverted-colors:shadow-none">
                        <div class="flex flex-col gap-2">
                            <header class="mb-3 flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                     stroke="currentColor" class="size-6 self-center">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/>
                                </svg>
                                <h2 id="info" class="text-xl leading-tight">Info</h2>
                            </header>
                            <div class="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" class="size-6 self-center"
                                     aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                                </svg>
                                <p aria-description="Name">Luke Warlow</p>
                            </div>
                            <div class="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" class="size-6 self-center"
                                     aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"/>
                                </svg>
                                <p aria-description="Profession">Web Platform Engineer</p>
                            </div>
                            <div class="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" class="size-6 self-center"
                                     aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
                                </svg>
                                <address aria-description="Location">Wales, United Kingdom</address>
                            </div>
                            <section aria-labelledby="skills">
                                <h3 id="skills" class="text-lg">Skills:</h3>
                                <ul aria-labelledby="skills" class="flex flex-wrap justify-center mt-3">
                                    <${Tag}>ASP.Net Core<//>
                                    <${Tag}>C#<//>
                                    <${Tag}>XUnit<//>
                                    <${Tag}>Laravel<//>
                                    <${Tag}>PHP<//>
                                    <${Tag}>PostgreSQL<//>
                                    <${Tag}>CSS<//>
                                    <${Tag}>HTML<//>
                                    <${Tag}>JavaScript/TypeScript<//>
                                    <${Tag}>Vue.js<//>
                                    <${Tag}>C++<//>
                                </ul>
                            </section>
                        </div>
                    </section>
                    <section aria-labelledby="current-work"
                             class="bg-white dark:bg-gray-800 dark:contrast-more:bg-gray-900 dark:text-white contrast-more:border border-black dark:border-white rounded overflow-hidden p-3 lg:p-4 shadow-md dark:shadow-2xl inverted-colors:shadow-none w-full">
                        <div class="flex mb-3 gap-2">
                            <svg class="size-6 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                      stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"></path>
                            </svg>
                            <h2 id="current-work" class="text-xl leading-tight">Current Work</h2>
                        </div>
                        <section aria-labelledby="igalia" class="flex flex-col gap-3">
                            <div class="flex flex-col gap-1">
                                <h3 id="igalia" class="font-semibold">
                                    <a
                                            class="underline hover:decoration-thick hover:text-gray-600 dark:hover:text-gray-300"
                                            href="https://igalia.com"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                    >Igalia</a> - Web Platform Engineer
                                </h3>
                                <p>
                                    <time datetime="2023-12">December 2023</time>
                                    - Present
                                </p>
                                <div class="flex flex-col gap-4">
                                    <div class="flex flex-col gap-2">
                                        <h4 id="igalia-projects">
                                            Projects:
                                        </h4>
                                        <ul class="list-disc pl-8">
                                            <li>Implementing Trusted Types API inside WebKit</li>
                                        </ul>
                                    </div>
                                </div>
                                <ul class="flex flex-wrap justify-center mt-3">
                                    <${Tag}>C++<//>
                                </ul>
                            </div>
                        </section>
                    </section>
                    <section aria-labelledby="education"
                             class="bg-white dark:bg-gray-800 dark:contrast-more:bg-gray-900 dark:text-white contrast-more:border border-black dark:border-white rounded overflow-hidden p-3 lg:p-4 shadow-md dark:shadow-2xl inverted-colors:shadow-none">
                        <div class="flex mb-3 gap-2">
                            <svg class="size-6 self-center" fill="none" stroke="currentColor"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2"
                                 aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"/>
                            </svg>
                            <h2 id="education" class="text-xl leading-tight">Education</h2>
                        </div>
                        <div class="flex gap-2">
                            <img alt="Cardiff University Logo" class="h-16 flex self-center" height="64"
                                 src="${img`cardiff-uni.svg`}" title="Cardiff University Logo"
                                 width="64">
                            <div>
                                <p class="text-sm font-semibold">Cardiff University</p>
                                <p class="text-sm">
                                    <time>2017</time>
                                    -
                                    <time>2020</time>
                                </p>
                                <p class="text-sm">BSc Applied Software Engineering</p>
                                <p class="text-sm">First Class Honours</p>
                            </div>
                        </div>
                    </section>
                    <section aria-labelledby="past-work"
                             class="bg-white dark:bg-gray-800 dark:contrast-more:bg-gray-900 dark:text-white contrast-more:border border-black dark:border-white rounded overflow-hidden p-3 lg:p-4 shadow-md dark:shadow-2xl inverted-colors:shadow-none w-full">
                        <div class="flex mb-3 gap-2">
                            <svg class="size-6 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                      stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"></path>
                            </svg>
                            <h2 id="past-work" class="text-xl leading-tight">Past Work</h2>
                        </div>
                        <div class="flex flex-col gap-3">
                            <section aria-labelledby="reformo" class="flex flex-col gap-3">
                                <div class="flex flex-col gap-1">
                                    <h3 id="reformo" class="font-semibold">
                                        Reformo Software - Co-Founder
                                    </h3>
                                    <p>
                                        <time datetime="2020-02">February 2020</time>
                                        -
                                        <time datetime="2023-12">December 2023</time>
                                    </p>
                                    <div class="flex flex-col gap-4">
                                        <div class="flex flex-col gap-2">
                                            <h4 id="reformo-responsibilities">
                                                Responsibilities:
                                            </h4>
                                            <ul class="list-disc pl-8">
                                                <li>Liaising with clients to establish business requirements</li>
                                                <li>Robust and timely implementation of software functionality</li>
                                                <li>Maintenance and further development of OrderView</li>
                                            </ul>
                                        </div>
                                        <div class="flex flex-col gap-2">
                                            <h4 id="reformo-achievements">
                                                Achievements:
                                            </h4>
                                            <ul class="list-disc pl-8">
                                                <li>Developed OrderView platform from idea to production software</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <aside class="flex flex-wrap justify-center mt-3">
                                        <div class="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-teal-900 dark:text-teal-50 bg-teal-100 dark:bg-teal-800 border border-teal-400 contrast-more:text-black dark:contrast-more:text-white dark:contrast-more:bg-teal-950 contrast-more:border-black dark:contrast-more:border-white">
                                            <p class="text-xs font-normal leading-none max-w-full flex-initial">
                                                Vue.js</p>
                                        </div>
                                        <div class="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-teal-900 dark:text-teal-50 bg-teal-100 dark:bg-teal-800 border border-teal-400 contrast-more:text-black dark:contrast-more:text-white dark:contrast-more:bg-teal-950 contrast-more:border-black dark:contrast-more:border-white">
                                            <p class="text-xs font-normal leading-none max-w-full flex-initial">Laravel
                                                - PHP</p>
                                        </div>
                                        <div class="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-teal-900 dark:text-teal-50 bg-teal-100 dark:bg-teal-800 border border-teal-400 contrast-more:text-black dark:contrast-more:text-white dark:contrast-more:bg-teal-950 contrast-more:border-black dark:contrast-more:border-white">
                                            <p class="text-xs font-normal leading-none max-w-full flex-initial">ASP.NET
                                                Core - C#</p>
                                        </div>
                                    </aside>
                                </div>
                            </section>
                            <hr class="border-black dark:border-white">
                            <section aria-labelledby="talkative" class="flex flex-col gap-1">
                                <h3 id="talkative" class="font-semibold">Talkative - Software Engineer</h3>
                                <p>
                                    <time datetime="2020-07">July 2020</time>
                                    -
                                    <time datetime="2023-06">June 2023</time>
                                </p>
                                <div class="flex flex-col gap-4">
                                    <div class="flex flex-col gap-2">
                                        <h4 id="talkative-responsibilities">
                                            Responsibilities:
                                        </h4>
                                        <ul class="list-disc pl-8">
                                            <li>Contributed to key decisions on project architecture</li>
                                            <li>Triaged bug reports and feature requests, incorporating them into the
                                                development pipeline
                                            </li>
                                            <li>Re-architected code for extensibility and improved scalability</li>
                                            <li>Continuously improved product experience based on client feedback as
                                                well as internal testing
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <h4 id="talkative-achievements">
                                            Achievements:
                                        </h4>
                                        <ul class="list-disc pl-8">
                                            <li>Complete rewrite of customer-facing widget to provide a modern codebase
                                                and vastly improved feature set
                                            </li>
                                            <li>Deliver high quality features according to specification</li>
                                            <li>Provided feedback on code quality and development practices, via pull
                                                requests and pair programming
                                            </li>
                                            <li>Implemented modern multi-factor authentication</li>
                                            <li>Expanded upon interaction metadata collected and presented to clients,
                                                to provide a more complete overview of customer journeys
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <aside class="flex flex-wrap justify-center mt-3">
                                    <div class="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-teal-900 dark:text-teal-50 bg-teal-100 dark:bg-teal-800 border border-teal-400 contrast-more:text-black dark:contrast-more:text-white dark:contrast-more:bg-teal-950 contrast-more:border-black dark:contrast-more:border-white">
                                        <p class="text-xs font-normal leading-none max-w-full flex-initial">Vue.js</p>
                                    </div>
                                    <div class="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-teal-900 dark:text-teal-50 bg-teal-100 dark:bg-teal-800 border border-teal-400 contrast-more:text-black dark:contrast-more:text-white dark:contrast-more:bg-teal-950 contrast-more:border-black dark:contrast-more:border-white">
                                        <p class="text-xs font-normal leading-none max-w-full flex-initial">Laravel -
                                            PHP</p>
                                    </div>
                                </aside>
                            </section>
                            <hr class="border-black dark:border-white">
                            <section aria-labelledby="hut6" class="flex flex-col gap-1">
                                <h3 id="hut6" class="font-semibold">Hut Six Security - Software Engineer</h3>
                                <p>
                                    <time datetime="2018-06">June 2018</time>
                                    -
                                    <time datetime="2019-09">September 2019</time>
                                </p>
                                <div class="flex flex-col gap-4">
                                    <div class="flex flex-col gap-2">
                                        <h4 id="hut6-responsibilities">
                                            Responsibilities:
                                        </h4>
                                        <ul class="list-disc pl-8">
                                            <li>Liaised with the product team to define key requirements for
                                                functionality and design
                                            </li>
                                            <li>Delivered high quality features according to specification</li>
                                            <li>Provided feedback on code quality and development practices, via pull
                                                requests and pair programming
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <h4 id="hut6-achievements">
                                            Achievements:
                                        </h4>
                                        <ul class="list-disc pl-8">
                                            <li>Re-architected the authorisation system as part of the introduction of
                                                reseller tools
                                            </li>
                                            <li>Helped Hut Six better utilise modern front-end technologies e.g.
                                                refactoring into reusable Vue components
                                            </li>
                                            <li>Implemented two-factor authentication allowing enhanced security</li>
                                            <li>Developed CI/CD pipelines to enable seamless release processes for
                                                engineers
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <ul class="flex flex-wrap justify-center mt-3">
                                    <${Tag}>Vue.js<//>
                                    <${Tag}>ASP.NET Core - C#<//>
                                    <${Tag}>PostgreSQL<//>
                                </ul>
                            </section>
                        </div>
                    </section>
                </section>
                <section
                        class="lg:order-3 col-span-1 gap-4 flex flex-col sm:flex-row md:flex-col flex-wrap justify-self-center md:justify-self-start h-fit w-fit">
                    <section aria-labelledby="links"
                             class="bg-white dark:bg-gray-800 dark:contrast-more:bg-gray-900 dark:text-white contrast-more:border border-black dark:border-white rounded overflow-hidden p-3 lg:p-4 shadow-md dark:shadow-2xl inverted-colors:shadow-none flex flex-1 flex-col gap-2 w-full sm:w-auto">
                        <header class="flex gap-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                 stroke="currentColor" class="h-6 w-6 self-center" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"/>
                            </svg>
                            <h2 id="links" class="text-xl leading-tight">Links</h2>
                        </header>
                        <div class="flex gap-2">
                            <svg class="h-6 w-6 self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <title>Email</title>
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                      stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"></path>
                            </svg>
                            <a class="underline hover:decoration-thick hover:text-gray-600 dark:hover:text-gray-300"
                               href="mailto:luke@warlow.dev" aria-description="Email Address">luke@warlow.dev</a>
                        </div>
                        <div class="flex gap-2">
                            <svg class="size-6 self-center" aria-hidden="true" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title>
                                    GitHub
                                </title>
                                <path d="M12 1.426c-5.991 0-10.844 4.855-10.844 10.844 0 4.792 3.107 8.855 7.415 10.288.542.102.74-.233.74-.522 0-.257-.008-.94-.013-1.843-3.016.654-3.652-1.455-3.652-1.455-.494-1.252-1.207-1.586-1.207-1.586-.982-.672.076-.659.076-.659 1.089.076 1.661 1.117 1.661 1.117.967 1.658 2.538 1.18 3.158.902.098-.701.377-1.18.687-1.45-2.408-.271-4.94-1.204-4.94-5.359 0-1.184.42-2.15 1.117-2.91-.122-.273-.488-1.376.095-2.87 0 0 .908-.29 2.982 1.112.867-.241 1.789-.36 2.71-.366.922.005 1.844.125 2.711.366 2.06-1.403 2.969-1.112 2.969-1.112.583 1.494.217 2.597.108 2.87.692.76 1.112 1.726 1.112 2.91 0 4.166-2.535 5.083-4.948 5.35.38.325.732.99.732 2.006 0 1.451-.013 2.617-.013 2.97 0 .284.19.623.745.514a10.806 10.806 0 007.443-10.273C22.844 6.28 17.988 1.426 12 1.426"
                                      fill="none" stroke="currentColor" stroke-width="1.704"></path>
                            </svg>
                            <a class="underline hover:decoration-thick hover:text-gray-600 dark:hover:text-gray-300"
                               href="https://github.com/lukewarlow" rel="me noopener noreferrer" target="_blank"
                               aria-label="GitHub">lukewarlow</a>
                        </div>
                        <div class="flex gap-2">
                            <svg class="size-6 self-center" aria-hidden="true" fill="none" height="24"
                                 stroke="currentColor"
                                 stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                                 width="24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <title>NPM</title>
                                <path d="M20.75 3H3.25a.25.25 0 0 0-.25.25v17.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V7.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v13.5c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V3.25a.25.25 0 0 0-.25-.25z"></path>
                            </svg>
                            <a class="underline hover:decoration-thick hover:text-gray-600 dark:hover:text-gray-300"
                               href="https://www.npmjs.com/~lukewarlow" rel="me noopener noreferrer" target="_blank"
                               aria-label="NPM">lukewarlow</a>
                        </div>
                        <div class="flex gap-2">
                            <svg class="size-6 self-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 viewbox="0 0 60 60" width="60" height="60">
                                <title>Twitter</title>
                                <g fill="none" stroke="currentcolor" stroke-linejoin="round" stroke-width="5">
                                    <path d="M53.382 10.121a10.366 10.366 0 0 1-4.465 5.759 19.857 19.857 0 0 0 5.83-1.634 20.834 20.834 0 0 1-5.062 5.388c.016.443.026.897.026 1.35 0 13.762-10.214 29.626-28.894 29.626-5.733 0-11.07-1.727-15.565-4.676.794.093 1.603.144 2.423.144 4.754 0 9.136-1.665 12.61-4.46-4.443-.082-8.191-3.093-9.485-7.228a9.793 9.793 0 0 0 1.912.185 9.72 9.72 0 0 0 2.676-.366c-4.65-.954-8.151-5.166-8.151-10.214v-.123a9.954 9.954 0 0 0 4.604 1.294c-2.727-1.867-4.516-5.053-4.516-8.662 0-1.908.5-3.702 1.37-5.244 5.012 6.306 12.494 10.451 20.934 10.884a10.597 10.597 0 0 1-.263-2.371c0-5.749 4.547-10.41 10.152-10.41 2.923 0 5.563 1.258 7.414 3.284a19.907 19.907 0 0 0 6.45-2.526Z"/>
                                </g>
                            </svg>
                            <a class="underline hover:decoration-thick hover:text-gray-600 dark:hover:text-gray-300"
                               href="https://twitter.com/luke_warlow" rel="me noopener noreferrer" target="_blank"
                               aria-label="Twitter">@luke_warlow</a>
                        </div>
                        <div class="flex gap-2">
                            <svg class="h-6 w-6 self-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="currentcolor" aria-label="Threads" viewBox="0 0 192 192">
                                <title>Threads</title>
                                <path d="m142 89-3-1c-1-27-16-43-41-43h-1c-15 0-27 6-35 18l14 9a24 24 0 0 1 21-10c9 0 15 2 19 7 3 3 5 8 6 14-7-1-15-2-24-1-24 1-39 15-38 34 1 10 5 19 14 24 7 5 16 7 25 6 13 0 23-5 29-14 6-6 9-15 10-26 6 4 11 9 13 14 4 10 4 26-8 39-12 11-25 16-46 16-23 0-40-7-51-22a93 93 0 0 1-16-57c0-25 5-44 16-57 11-15 28-22 51-22s41 7 52 22c6 7 10 16 13 26l16-4c-3-13-9-24-16-33A80 80 0 0 0 97 0C69 0 47 10 33 28 20 44 13 67 13 96s7 52 20 68c14 18 36 28 64 28 25 0 43-7 57-21 19-19 19-43 12-57-4-11-13-19-24-25Zm-44 41c-10 0-21-5-21-15-1-7 5-15 22-16a101 101 0 0 1 23 1c-2 25-13 29-24 30Z"/>
                            </svg>
                            <a class="underline hover:decoration-thick hover:text-gray-600 dark:hover:text-gray-300"
                               href="https://www.threads.net/@luke_warlow_" rel="me noopener noreferrer" target="_blank"
                               aria-label="Threads">@luke_warlow_</a>
                        </div>
                        <div class="flex gap-2">
                            <svg class="h-6 w-6 self-center" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" aria-hidden="true">
                                <title>Mastodon</title>
                                <path fill="currentcolor"
                                      d="M8 7v5a1 1 0 1 1-2 0V7c0-1.9 1.8-3 3.5-3 1.1 0 2 .3 2.5.8.6-.5 1.4-.8 2.5-.8C16.2 4 18 5.1 18 7v5a1 1 0 1 1-2 0V7c0-.8-.8-1-1.5-1-.6 0-1.4.2-1.5 1v3a1 1 0 1 1-2 0V7c0-.8-.8-1-1.5-1-.6 0-1.4.2-1.5 1Z"/>
                                <path fill="currentcolor" fill-rule="evenodd"
                                      d="M16 1H8C4 1 1 4 1 8v5c0 5.1 3.6 10 9 10h5.5c1.4 0 2.5-1.1 2.5-2.5S16.9 18 15.5 18h-1c-2 0-5.2 0-6.2-1.7 4.5.8 14.7 2.2 14.7-5.3V8c0-4-3-7-7-7ZM3 13V8C3.1 5 5.1 3 8 3h8c2.9 0 4.9 2.1 5 5v3c0 6-10.7 3.8-13.8 3A1 1 0 0 0 6 15c0 1 .3 2 .9 2.8 1.6 2 5 2.1 7.6 2.1h1c.3 0 .5.3.5.6s-.2.5-.5.5H10c-4.3 0-7-4-7-8Z"
                                      clip-rule="evenodd"/>
                            </svg>
                            <a class="underline hover:decoration-thick hover:text-gray-600 dark:hover:text-gray-300"
                               rel="me noopener noreferrer" href="https://toot.wales/@Lukew" aria-label="Mastodon">@lukew</a>
                        </div>
                        <div class="flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 self-center" viewBox="0 0 1024 1024"
                                 aria-hidden="true">
                                <title>LinkedIn</title>
                                <path fill="currentcolor"
                                      d="M853.3 938.7h-71.2a85.3 85.3 0 0 1-85.4-85.4v-229a39.3 39.3 0 0 0-29.4-39.8 35.8 35.8 0 0 0-28.6 8.1 36.3 36.3 0 0 0-12.8 27.8v233a85.3 85.3 0 0 1-85.3 85.3h-71.3a85.3 85.3 0 0 1-85.3-85.4v-233a277.3 277.3 0 1 1 554.7 0v233a85.3 85.3 0 0 1-85.4 85.4zm-192-440a159.1 159.1 0 0 1 20 0 124.2 124.2 0 0 1 100.8 123.8v230.8h71.2v-233a192 192 0 1 0-384 0v233h71.3v-233a121.6 121.6 0 0 1 120.7-121.5zM256 938.8h-85.3a85.3 85.3 0 0 1-85.4-85.4V426.7a85.3 85.3 0 0 1 85.4-85.4H256a85.3 85.3 0 0 1 85.3 85.4v426.6a85.3 85.3 0 0 1-85.3 85.4zm-85.3-512v426.6H256V426.7zm42.6-128a128 128 0 1 1 128-128 128 128 0 0 1-128 128zm0-170.7a42.7 42.7 0 1 0 42.7 42.7 42.7 42.7 0 0 0-42.7-42.7z"/>
                            </svg>
                            <a class="underline hover:decoration-thick hover:text-gray-600 dark:hover:text-gray-300"
                               rel="me noopener noreferrer" href="https://www.linkedin.com/in/lukewarlow/"
                               aria-label="LinkedIn">lukewarlow</a>
                        </div>
                    </section>
                    <section aria-labelledby="open-source"
                             class="bg-white dark:bg-gray-800 dark:contrast-more:bg-gray-900 dark:text-white contrast-more:border border-black dark:border-white rounded overflow-hidden p-3 lg:p-4 shadow-md dark:shadow-2xl inverted-colors:shadow-none flex-1">
                        <div class="flex mb-3 gap-2">
                            <svg class="size-6 self-center" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                            </svg>
                            <h2 id="open-source" class="text-xl leading-tight">Open Source</h2>
                        </div>
                        <div class="flex flex-col gap-3">
                            <p>In my free time I enjoy contributing to open source projects, the largest of which are
                                the
                                <a
                                        href="https://chromium.googlesource.com/chromium/src/+log/main?author=luke@warlow.dev"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        class="underline hover:decoration-thick hover:text-gray-600 dark:hover:text-gray-300"
                                        title="Chromium Commits (slow to load)"
                                >Chromium</a>,
                                <a
                                        href="https://github.com/WebKit/WebKit/pulls?q=is%3Apr+author%3Alukewarlow+"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        class="underline hover:decoration-thick hover:text-gray-600 dark:hover:text-gray-300"
                                        title="WebKit Pull Requests"
                                >WebKit</a> and Firefox browser engines.</p> This lead to me successfully applying to the web platform team at Igalia.
                            <hr class="border-black dark:border-white">
                            <div>
                                <h3 class="text-lg leading-tight">Chromium Features</h3>
                                <ul class="list-disc pl-8 space-y-1">
                                    <li>
                                        Interop 2023 fix for email input
                                    </li>
                                    <li>
                                        <a
                                                href="https://groups.google.com/a/chromium.org/g/blink-dev/c/PkEsMirl2zE/m/kSsgB9L9AAAJ"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                class="underline hover:decoration-thick hover:text-gray-600 dark:hover:text-gray-300">
                                            scrollbar-width and scrollbar-color</a>
                                    </li>
                                    <li>
                                        <a
                                                href="https://groups.google.com/a/chromium.org/g/blink-dev/c/EiZ2vlPy9xs/"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                class="underline hover:decoration-thick hover:text-gray-600 dark:hover:text-gray-300">
                                            prefers-reduced-transparency</a> media query
                                    </li>
                                    <li>
                                        <a
                                                href="https://groups.google.com/a/chromium.org/g/blink-dev/c/KgSc7mn6pws/"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                class="underline hover:decoration-thick hover:text-gray-600 dark:hover:text-gray-300">
                                            Sec-CH-Prefers-Reduced-Transparency</a>
                                    </li>
                                    <li>prefers-contrast media query (Android, Linux)</li>
                                    <li>
                                        <a
                                                href="https://groups.google.com/a/chromium.org/g/blink-dev/c/0ugmlt_SLIw/"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                class="underline hover:decoration-thick hover:text-gray-600 dark:hover:text-gray-300">
                                            inverted-colors</a> media query
                                    </li>
                                    <li>
                                        <a
                                                href="https://groups.google.com/a/chromium.org/g/blink-dev/c/jiCB_twBqnk/"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                class="underline hover:decoration-thick hover:text-gray-600 dark:hover:text-gray-300">
                                            scripting</a> media query
                                    </li>
                                    <li>
                                        <a
                                                href="https://groups.google.com/a/chromium.org/g/blink-dev/c/UNfjkjHAPOM"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                class="underline hover:decoration-thick hover:text-gray-600 dark:hover:text-gray-300">
                                            Web Preferences API</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <div class="hidden sm:flex md:hidden h-0 basis-full"></div>
                    <section aria-labelledby="libraries"
                             class="bg-white dark:bg-gray-800 dark:contrast-more:bg-gray-900 dark:text-white contrast-more:border border-black dark:border-white rounded overflow-hidden p-3 lg:p-4 shadow-md dark:shadow-2xl inverted-colors:shadow-none flex-1">
                        <header class="flex mb-3 gap-2">
                            <svg class="size-6 self-center" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"/>
                            </svg>
                            <h2 id="libraries" class="text-xl leading-tight">Libraries</h2>
                        </header>
                        <div class="flex flex-col gap-3">
                            <div class="flex flex-col gap-2">
                                <div class="flex gap-2">
                                    <p class="font-semibold">tailwind-scrollbar-utilities</p>
                                    <a title="View Source"
                                       aria-label="View Source"
                                       href="https://github.com/lukewarlow/tailwind-scrollbar-utilities"
                                       rel="noopener noreferrer"
                                       target="_blank"
                                       class="hover:text-gray-700 dark:hover:text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor" class="w-5 h-5 hover:w-6 hover:h-6"
                                             aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                    </a>
                                </div>
                                <p>A TailwindCSS plugin to create classes for the <code>scrollbar-color</code>, <code>scrollbar-gutter</code>
                                    and <code>scrollbar-width</code> CSS properties.</p>
                            </div>
                            <hr class="border-black dark:border-white">
                            <div class="flex flex-col gap-2">
                                <div class="flex gap-2">
                                    <p class="font-semibold">tailwind-mq</p>
                                    <a title="View Source"
                                       href="https://github.com/lukewarlow/tailwind-mq"
                                       rel="noopener noreferrer"
                                       target="_blank"
                                       class="hover:text-gray-700 dark:hover:text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor" class="w-5 h-5 hover:w-6 hover:h-6"
                                             aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                    </a>
                                </div>
                                <p>A TailwindCSS plugin to create variants for various missing media queries.</p>
                            </div>
                            <hr class="border-black dark:border-white">
                            <div class="flex flex-col gap-2">
                                <div class="flex gap-2">
                                    <p class="font-semibold">wc-horizontal-scroller</p>
                                    <a title="View Source"
                                       href="https://github.com/lukewarlow/wc-horizontal-scroller"
                                       rel="noopener noreferrer"
                                       target="_blank"
                                       class="hover:text-gray-700 dark:hover:text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke="currentColor" class="w-5 h-5 hover:w-6 hover:h-6"
                                             aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                    </a>
                                </div>
                                <p>A Horizontal Scroller Web Component, this is the package used for the image carousels
                                    on this site.</p>
                            </div>
                        </div>
                    </section>
                </section>
                <section class="lg:order-2 col-span-1 md:col-span-2 flex flex-col h-fit gap-4">
                    <section aria-label="Projects"
                             class="bg-white dark:bg-gray-800 dark:contrast-more:bg-gray-900 dark:text-white contrast-more:border border-black dark:border-white rounded overflow-hidden p-3 lg:p-4 shadow-md dark:shadow-2xl inverted-colors:shadow-none w-full">
                        <div class="flex mb-3 gap-2">
                            <svg class="self-center size-6" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"/>
                            </svg>
                            <h2 class="text-xl leading-tight">Projects</h2>
                        </div>
                        <section aria-label="OrderView" class="mb-2">
                            <div class="mb-2">
                                <h3>
                                    <a
                                            class="hover:text-gray-700 dark:hover:text-gray-300"
                                            href="https://orderview.app"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            title="Go to OrderView site">
                                        <span class="font-semibold text-lg">OrderView</span>

                                        <svg class="inline size-6 hover:w-7 hover:h-7" fill="none"
                                             stroke="currentColor"
                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                  stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2"/>
                                        </svg>
                                    </a>
                                </h3>
                                <p>A web-based e-commerce order fulfilment management application developed by Reformo
                                    Software</p>
                            </div>
                            <horizontal-scroller class="aspect-[1920/960]" id="orders"
                                                 aria-label="OrderView Screenshots">
                                <picture>
                                    <source srcset="${img`orderview/orders.avif`}" type="image/avif">
                                    <source srcset="${img`orderview/orders.webp`}" type="image/webp">
                                    <img
                                            alt="Orders Table"
                                            class="border border-gray-300 contrast-more:border-black dark:border-none contrast-more:dark:border-solid contrast-more:dark:border-white"
                                            fetchpriority="high"
                                            height="950"
                                            src="${img`orderview/orders.png`}"
                                            title="Orders Table"
                                            width="1901"
                                    >
                                </picture>
                                <picture>
                                    <source
                                            media="(prefers-color-scheme: dark)"
                                            srcset="${img`orderview/webauthn-dark.avif`}"
                                            type="image/avif"
                                    >
                                    <source
                                            media="(prefers-color-scheme: light)"
                                            srcset="${img`orderview/webauthn.avif`}"
                                            type="image/avif"
                                    >
                                    <source
                                            media="(prefers-color-scheme: dark)"
                                            srcset="${img`orderview/webauthn-dark.webp`}"
                                            type="image/webp"
                                    >
                                    <source
                                            media="(prefers-color-scheme: light)"
                                            srcset="${img`orderview/webauthn.webp`}"
                                            type="image/webp"
                                    >
                                    <img
                                            alt="Biometric two-factor authentication"
                                            class="border border-gray-300 contrast-more:border-black dark:border-none contrast-more:dark:border-solid contrast-more:dark:border-white"
                                            data-hidden
                                            height="1024"
                                            loading="lazy"
                                            src="${img`orderview/webauthn.png`}"
                                            title="Biometric two-factor authentication"
                                            width="2048"
                                    >
                                </picture>
                            </horizontal-scroller>
                            <div class="mt-3">
                                <p>
                                    OrderView is a SaaS platform we sell to businesses that have multiple order sources
                                    such as Etsy, eBay and WooCommerce. Customers can import their order sources and
                                    carriers into OrderView and process all orders from one place as well as manage
                                    inventory and access combined order metrics.
                                </p>
                                <ul class="flex flex-wrap justify-center mt-3">
                                    <${Tag}>Vue.js<//>
                                    <${Tag}>ASP.NET Core - C#<//>
                                    <${Tag}>Node.js<//>
                                    <${Tag}>PostgreSQL<//>
                                </ul>
                            </div>
                        </section>
                        <hr class="mb-5 border-black dark:border-white">
                        <section class="mb-2" aria-labelledby="flow">
                            <div class="mb-2">
                                <h3 id="flow" class="font-semibold text-lg">Flow chart editor</h3>
                                <p>A prototype flow chart editor written in Vue.js.</p>
                            </div>
                            <horizontal-scroller class="aspect-[1858/944]" id="flowchart"
                                                 aria-label="Flow Chart Editor Screenshots">
                                <picture>
                                    <source
                                            media="(prefers-color-scheme: dark)"
                                            srcset="${img`flowchart/flowchart-dark.avif`}"
                                            type="image/avif"
                                    >
                                    <source
                                            media="(prefers-color-scheme: dark)"
                                            srcset="${img`flowchart/flowchart-dark.png`}"
                                            type="image/png"
                                    >
                                    <source
                                            media="(prefers-color-scheme: light)"
                                            srcset="${img`flowchart/flowchart.avif`}"
                                            type="image/avif"
                                    >
                                    <img
                                            alt="Flowchart Editor"
                                            class="border border-gray-300 contrast-more:border-black dark:border-none contrast-more:dark:border-solid contrast-more:dark:border-white"
                                            fetchpriority="high"
                                            height="944"
                                            src="${img`flowchart/flowchart.png`}"
                                            title="Flowchart Editor"
                                            width="1858"
                                    >
                                </picture>
                            </horizontal-scroller>
                            <div class="mt-3">
                                <p>
                                    A prototype flow chart editor that offers zooming, drag and drop, and edit history.
                                </p>
                                <aside class="flex flex-wrap justify-center mt-3">
                                    <div class="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-teal-900 dark:text-teal-50 bg-teal-100 dark:bg-teal-800 border border-teal-400 contrast-more:text-black dark:contrast-more:text-white dark:contrast-more:bg-teal-950 contrast-more:border-black dark:contrast-more:border-white">
                                        <p class="text-xs font-normal leading-none max-w-full flex-initial">Vue.js</p>
                                    </div>
                                </aside>
                            </div>
                        </section>
                    </section>
                    <section
                            class="bg-white dark:bg-gray-800 dark:contrast-more:bg-gray-900 dark:text-white contrast-more:border border-black dark:border-white rounded overflow-hidden p-3 lg:p-4 shadow-md dark:shadow-2xl inverted-colors:shadow-none w-full"
                            aria-label="University Projects">
                        <div class="flex mb-3 gap-2">
                            <svg class="self-center size-6" fill="none" stroke="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"/>
                            </svg>
                            <h2 class="text-xl leading-tight">University Projects</h2>
                        </div>
                        <section aria-labelledby="medl" class="mb-2">
                            <div class="mb-2">
                                <h3 id="medl" class="font-semibold text-lg">Medical LMS - MeDL</h3>
                                <p>
                                    A web-based learning management system (LMS) for testing clinical decision making
                                    amongst
                                    medical students.
                                </p>
                            </div>
                            <horizontal-scroller class="aspect-[1920/960]" id="medical-lms"
                                                 aria-label="Medical LMS Screenshots">
                                <picture>
                                    <source
                                            srcset="${img`medical-lms/scenario-editor.avif`}"
                                            type="image/avif">
                                    <source srcset="${img`medical-lms/scenario-editor.webp`}"
                                            type="image/webp">
                                    <img
                                            alt="Scenario Editor"
                                            class="border border-gray-300 contrast-more:border-black dark:border-none contrast-more:dark:border-solid contrast-more:dark:border-white"
                                            height="949"
                                            loading="lazy"
                                            src="${img`medical-lms/scenario-editor.png`}"
                                            title="Scenario Editor"
                                            width="1905"
                                    >
                                </picture>
                                <picture>
                                    <source srcset="${img`medical-lms/scenario-viewer.avif`}"
                                            type="image/avif">
                                    <source srcset="${img`medical-lms/scenario-viewer.webp`}""
                                            type="image/webp">
                                    <img
                                            alt="Scenario Viewer"
                                            class="border border-gray-300 contrast-more:border-black dark:border-none contrast-more:dark:border-solid contrast-more:dark:border-white"
                                            data-hidden
                                            fetchpriority="low"
                                            height="948"
                                            loading="lazy"
                                            src="${img`medical-lms/scenario-viewer.png`}"
                                            title="Scenario Viewer"
                                            width="1920"
                                    >
                                </picture>
                                <picture>
                                    <source srcset="${img`medical-lms/account-security.avif`}"
                                            type="image/avif">
                                    <source srcset="${img`medical-lms/account-security.webp`}""
                                            type="image/webp">
                                    <img
                                            alt="Account Security"
                                            class="border border-gray-300 contrast-more:border-black dark:border-none contrast-more:dark:border-solid contrast-more:dark:border-white"
                                            data-hidden
                                            fetchpriority="low"
                                            height="949"
                                            loading="lazy"
                                            src="${img`medical-lms/account-security.png`}"
                                            title="Account Security"
                                            width="1903"
                                    >
                                </picture>
                            </horizontal-scroller>
                            <div class="mt-3">
                                <p>
                                    Year 3 - Group Dissertation Project
                                </p>
                                <p class="mt-1">
                                    This project focussed on producing a proof of concept LMS for clients who work at
                                    the
                                    University Hospital Wales.
                                    The core aim was to make the creation of training scenarios accessible to those
                                    without
                                    technical knowledge.
                                    My main contribution was the drag and drop scenario editing interface.
                                    I also created the account system which included single sign-on and two-factor
                                    authentication.
                                </p>
                                <ul class="flex flex-wrap justify-center mt-3">
                                    <${Tag}>React<//>
                                    <${Tag}>NestJS - TypeScript<//>
                                    <${Tag}>PostgreSQL<//>
                                </ul>
                            </div>
                        </section>
                        <hr class="mb-5 border-black dark:border-white">
                        <section aria-labelledby="iot" class="mb-2">
                            <div class="mb-2">
                                <h3 id="iot" class="font-semibold text-lg">IoT and the Community</h3>
                            </div>
                            <div class="mt-3 mb-3">
                                <p class="mb-1">
                                    Year 3 - Emerging Technology Project
                                </p>
                                <p>
                                    The project aimed to provide a solution to reduce loneliness and social exclusion
                                    amongst elderly people in the Usk area for Monmouthshire County Council.
                                    It used an array of Z-Wave IoT sensors which connect to a receiver on a Raspberry
                                    Pi.
                                    The data from these sensors was sent to a central Express server, where a React
                                    front-end could manage the participants and view the data.
                                </p>
                                <ul class="flex flex-wrap justify-center mt-3">
                                    <${Tag}>React<//>
                                    <${Tag}>Express - JavaScript<//>
                                    <${Tag}>MongoDB<//>
                                </ul>
                            </div>
                        </section>
                        <hr class="mb-5 border-black dark:border-white">
                        <section aria-labelledby="drone" class="mb-2">
                            <div class="mb-2">
                                <div class="flex gap-2">
                                    <h3 id="drone" class="font-semibold text-lg">Drone course management system -
                                        Aviation Systems Group</h3>
                                    <a
                                            class="hover:text-gray-700 dark:hover:text-gray-300"
                                            href="https://github.com/lukewarlow/Asg-ClientProject"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            title="View Source">
                                        <svg class="inline size-6 hover:w-7 hover:h-7" fill="none"
                                             stroke="currentColor"
                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                  stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2"/>
                                        </svg>
                                    </a>
                                </div>
                                <p>A web-based system for handling the booking and marking of drone courses.</p>
                            </div>
                            <horizontal-scroller class="aspect-[1920/950]" id="drone"
                                                 aria-label="Drone Course Booking System Screenshots">
                                <picture>
                                    <source srcset="${img`drone-course-booking/candidate-signup.avif`}"
                                            type="image/avif">
                                    <source srcset="${img`/drone-course-booking/candidate-signup.webp`}""
                                            type="image/webp">
                                    <img
                                            alt="Candidate signup form"
                                            class="border border-gray-300 contrast-more:border-black dark:border-none contrast-more:dark:border-solid contrast-more:dark:border-white"
                                            height="950"
                                            loading="lazy"
                                            src="${img`drone-course-booking/candidate-signup.png`}"
                                            title="Candidate signup form"
                                            width="1920"
                                    >
                                </picture>
                                <picture>
                                    <source srcset="${img`drone-course-booking/instructor.avif`}"
                                            type="image/avif">
                                    <source srcset="${img`drone-course-booking/instructor.webp`}""
                                            type="image/webp">
                                    <img
                                            alt="Instructor course management"
                                            class="border border-gray-300 contrast-more:border-black dark:border-none contrast-more:dark:border-solid contrast-more:dark:border-white"
                                            data-hidden
                                            fetchpriority="low"
                                            height="950"
                                            loading="lazy"
                                            src="${img`drone-course-booking/instructor.png`}"
                                            title="Instructor course management"
                                            width="1920"
                                    >
                                </picture>
                                <picture>
                                    <source srcset="${img`drone-course-booking/admin-dashboard.avif`}"
                                            type="image/avif">
                                    <source srcset="${img`drone-course-booking/admin-dashboard.webp`}""
                                            type="image/webp">
                                    <img
                                            alt="Admin dashboard"
                                            class="border border-gray-300 contrast-more:border-black dark:border-none contrast-more:dark:border-solid contrast-more:dark:border-white"
                                            data-hidden
                                            fetchpriority="low"
                                            height="950"
                                            loading="lazy"
                                            src="${img`drone-course-booking/admin-dashboard.png`}"
                                            title="Admin dashboard"
                                            width="1920"
                                    >
                                </picture>
                            </horizontal-scroller>
                            <div class="mt-3 mb-3">
                                <p>
                                    Year 2 - Commercial Applications Project
                                </p>
                                <p class="mt-1">
                                    The client for this project operated a drone certification course.
                                    Their existing data management solution relied heavily on Excel.
                                    The aim of this project was to produce a web-application to help improve these
                                    business
                                    processes.
                                    The system handled user registration, event management, and tracking of results.
                                    This allowed the client to focus on running the courses themselves.
                                </p>
                                <ul class="flex flex-wrap justify-center mt-3">
                                    <${Tag}>Vue.js<//>
                                    <${Tag}>Spring Boot - Java<//>
                                    <${Tag}>MySQL<//>
                                </ul>
                            </div>
                        </section>
                        <hr class="mb-5 border-black dark:border-white">
                        <section aria-labelledby="welsh-pharmacy">
                            <div class="mb-2">
                                <div class="flex gap-2">
                                    <h3 id="welsh-pharmacy" class="font-semibold text-lg">Welsh pharmacy finder</h3>
                                    <a
                                            class="hover:text-gray-700 dark:hover:text-gray-300"
                                            href="https://github.com/lukewarlow/WP-ClientProject"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            title="View Source">
                                        <svg class="inline size-6 hover:size-7" fill="none"
                                             stroke="currentColor" aria-hidden="true"
                                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                                  stroke-linecap="round" stroke-linejoin="round"
                                                  stroke-width="2"/>
                                        </svg>
                                    </a>
                                </div>
                                <p>An Android app for finding the location and available services of nearby
                                    pharmacies.</p>
                            </div>
                            <horizontal-scroller no-fullscreen id="pharmacy-finder"
                                                 aria-label="Welsh Pharmacy App Screenshots"
                                                 class="contrast-more:border border-black dark:border-white">
                                <div class="sm:flex sm:items-center sm:flex-row sm:justify-around">
                                    <picture>
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/map-view.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/map-view-dark.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/map-view.webp`}"
                                                type="image/webp">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/map-view-dark.webp`}"
                                                type="image/webp">
                                        <img
                                                alt="Map view"
                                                class="sm:pr-4"
                                                height="2280"
                                                loading="lazy"
                                                src="${img`pharmacy-finder/map-view.jpg`}"
                                                title="Map view"
                                                width="1080"
                                        >
                                    </picture>
                                    <picture class="hidden sm:block">
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/list-view.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/list-view-dark.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/list-view.webp`}"
                                                type="image/webp">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/list-view-dark.webp`}"
                                                type="image/webp">
                                        <img
                                                alt="List view"
                                                class="sm:pl-4"
                                                fetchpriority="low"
                                                height="2280"
                                                loading="lazy"
                                                src="${img`pharmacy-finder/list-view.jpg`}"
                                                title="List view"
                                                width="1080"
                                        >
                                    </picture>
                                </div>
                                <div class="sm:flex sm:items-center sm:flex-row sm:justify-around">
                                    <picture class="sm:hidden">
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/list-view.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/list-view-dark.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/list-view.webp`}"
                                                type="image/webp">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/list-view-dark.webp`}"
                                                type="image/webp">
                                        <img
                                                alt="List view"
                                                data-hidden
                                                fetchpriority="low"
                                                height="2280"
                                                loading="lazy"
                                                src="${img`pharmacy-finder/list-view.jpg`}"
                                                title="List view"
                                                width="1080"
                                        >
                                    </picture>
                                    <picture class="hidden sm:block">
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/info.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/info-dark.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/info.webp`}"
                                                type="image/webp">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/info-dark.webp`}"
                                                type="image/webp">
                                        <img
                                                alt="Pharmacy overview"
                                                class="pr-4"
                                                data-hidden
                                                fetchpriority="low"
                                                height="2280"
                                                loading="lazy"
                                                src="${img`pharmacy-finder/info.jpg`}"
                                                title="Pharmacy overview"
                                                width="1080"
                                        >
                                    </picture>
                                    <picture class="hidden sm:block">
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/reminders.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/reminders-dark.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/reminders.webp`}"
                                                type="image/webp">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/reminders-dark.webp`}"
                                                type="image/webp">
                                        <img
                                                alt="Create prescription reminder"
                                                class="pl-4"
                                                data-hidden
                                                fetchpriority="low"
                                                height="2280"
                                                loading="lazy"
                                                src="${img`pharmacy-finder/reminders.jpg`}"
                                                title="Create prescription reminder"
                                                width="1080"
                                        >
                                    </picture>
                                </div>
                                <div class="w-screen sm:flex sm:items-center sm:flex-row sm:justify-around">
                                    <picture class="sm:hidden">
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/info.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/info-dark.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/info.webp`}"
                                                type="image/webp">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/info-dark.webp`}"
                                                type="image/webp">
                                        <img
                                                alt="Pharmacy overview"
                                                data-hidden
                                                fetchpriority="low"
                                                height="2280"
                                                loading="lazy"
                                                src="${img`pharmacy-finder/info.jpg`}"
                                                title="Pharmacy overview"
                                                width="1080"
                                        >
                                    </picture>
                                    <picture class="hidden sm:block">
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/settings.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/settings-dark.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/settings.webp`}"
                                                type="image/webp">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/settings-dark.webp`}"
                                                type="image/webp">
                                        <img
                                                alt="Settings page"
                                                class="pr-4"
                                                data-hidden
                                                fetchpriority="low"
                                                height="2280"
                                                loading="lazy"
                                                src="${img`pharmacy-finder/settings.jpg`}"
                                                title="Settings page"
                                                width="1080"
                                        >
                                    </picture>
                                    <picture class="hidden sm:block">
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/settings-welsh.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/settings-welsh-dark.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/settings-welsh.webp`}"
                                                type="image/webp">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/settings-welsh-dark.webp`}"
                                                type="image/webp">
                                        <img
                                                alt="Settings page in Welsh"
                                                class="pl-4"
                                                data-hidden
                                                fetchpriority="low"
                                                height="2280"
                                                loading="lazy"
                                                src="${img`pharmacy-finder/settings-welsh.jpg`}"
                                                title="Settings page in Welsh"
                                                width="1080"
                                        >
                                    </picture>
                                </div>
                                <div class="w-screen sm:hidden">
                                    <picture>
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/reminders.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/reminders-dark.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/reminders.webp`}"
                                                type="image/webp">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/reminders-dark.webp`}"
                                                type="image/webp">
                                        <img
                                                alt="Create prescription reminder"
                                                data-hidden
                                                fetchpriority="low"
                                                height="2280"
                                                loading="lazy"
                                                src="${img`pharmacy-finder/reminders.jpg`}"
                                                title="Create prescription reminder"
                                                width="1080"
                                        >
                                    </picture>
                                </div>
                                <div class="w-screen sm:hidden">
                                    <picture>
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/settings.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/settings-dark.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/settings.webp`}"
                                                type="image/webp">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/settings-dark.webp`}"
                                                type="image/webp">
                                        <img
                                                alt="Settings page"
                                                data-hidden
                                                fetchpriority="low"
                                                height="2280"
                                                loading="lazy"
                                                src="${img`pharmacy-finder/settings.jpg`}"
                                                title="Settings page"
                                                width="1080"
                                        >
                                    </picture>
                                </div>
                                <div class="w-screen sm:hidden">
                                    <picture>
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/settings-welsh.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/settings-welsh-dark.avif`}"
                                                type="image/avif">
                                        <source media="(prefers-color-scheme: light)"
                                                srcset="${img`pharmacy-finder/settings-welsh.webp`}"
                                                type="image/webp">
                                        <source media="(prefers-color-scheme: dark)"
                                                srcset="${img`pharmacy-finder/settings-welsh-dark.webp`}"
                                                type="image/webp">
                                        <img
                                                alt="Settings page in Welsh"
                                                data-hidden
                                                fetchpriority="low"
                                                height="2280"
                                                loading="lazy"
                                                src="${img`pharmacy-finder/settings-welsh.jpg`}"
                                                title="Settings page in Welsh"
                                                width="1080"
                                        >
                                    </picture>
                                </div>
                            </horizontal-scroller>
                            <div class="mt-3 mb-3">
                                <p>
                                    Year 1 - Android Group Project
                                </p>
                                <p class="mt-1">
                                    The aim of this project was to create a proof-of-concept Android application for
                                    Cardiff
                                    University's School of Pharmacy.
                                    The application enabled users to more easily access information about all pharmacies
                                    in
                                    Wales, including location, contact details, opening hours and services.
                                </p>
                                <p class="mt-1">
                                    I personally made a Flask based server, to serve the pharmacy information, and used
                                    an
                                    Android networking library to retrieve the data on the client side.
                                    This better simulated a real world scenario, showing how the data could be updated
                                    by a
                                    pharmacist if the app were to be released.
                                    I also created a feature that allowed users to create reminders for prescriptions;
                                    this
                                    was stored locally in the app, using an SQLite database.
                                </p>
                                <ul class="flex flex-wrap justify-center mt-3">
                                    <${Tag}>Android - Java<//>
                                    <${Tag}>Flask - Python<//>
                                    <${Tag}>SQLite<//>
                                </ul>
                            </div>
                        </section>
                        <hr class="mb-5 border-black dark:border-white">
                        <section aria-labelledby="wru" class="mb-2">
                            <div class="mb-2">
                                <h3 id="wru" class="font-semibold text-lg">Event data collection system - Welsh Rugby
                                    Union (WRU)</h3>
                            </div>
                            <div class="mt-3 mb-3">
                                <p>
                                    Year 1 - Web Development Project
                                </p>
                                <p class="mt-1">
                                    The WRU required a prototype web application, which they could use to collect, store
                                    and
                                    analyse event data such as total attendance and audience demographics.
                                    I made use of a service worker to add offline functionality;
                                    this allowed data to be collected at events but submitted at a later time should
                                    internet access not be immediately available.
                                </p>
                                <ul class="flex flex-wrap justify-center mt-3">
                                    <${Tag}>Flask - Python<//>
                                    <${Tag}>SQLite<//>
                                </ul>
                            </div>
                        </section>
                    </section>
                </section>
            </main>
            <footer class="flex flex-col sm:flex-row items-center text-center justify-center gap-4 sm:gap-16 bg-teal-900 dark:bg-gray-800 dark:contrast-more:bg-gray-900 contrast-more:border-b border-black dark:border-white dark:text-white py-2">
                <p class="text-white">
                    <time>2020</time>
                    -
                    <time>2024</time> &copy; Luke Warlow
                </p>
            </footer>
        </div>
    `;
}