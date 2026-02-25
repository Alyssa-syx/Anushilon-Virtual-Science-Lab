import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';
import biology from '../../../assets/images/icon/biology.png';
import chemistry from '../../../assets/images/icon/chemistry.png';
import physics from '../../../assets/images/icon/physics.png';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import ViewAllSimulation from './ViewAllSimulation';

const Simulation = () => {
  const [viewSimulation, setViewSimulation] = useState(false);
  const [selectTab, setSelectTab] = useState(0);
  const { width } = useWindowDimensions();

  let getHeight =
    width > 1280
      ? 2990
      : width > 1024
      ? 3200
      : width > 768
      ? 4200
      : width > 640
      ? 4400
      : width > 430
      ? 5000
      : 5200;

  function handleScroll() {
    window.scroll({
      top: getHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div>
      <section
        className="min-h-auto md:min-h-full bg-cover bg-no-repeat bg-center"
        id="simulation"
        style={{
          backgroundImage: `url(https://i.ibb.co/NtJMXt8/features-3.png)`,
        }}
      >
        <div className="px-8 pb-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-16 lg:pb-10">
          <div className="grid sm:gap-8 row-gap-8 grid-cols-1 lg:grid-cols-12">
            {/* Left Side */}
            <div className="col-span-5 mb-10 py-0 sm:py-6 sm:mb-0">
              <Slide up>
                <img
                  className="w-4/5 mx-auto sm:w-full sm:h-full rounded-xl shadow-sm"
                  src="https://i.ibb.co/YffvYk9/student.gif"
                  alt="Student-gif"
                />
              </Slide>
            </div>
            {/* Right Side */}
            <div className="col-span-7 flex flex-wrap justify-center my-5">
              <div className="max-w-3xl mb-5">
                <Slide up>
                  <h2 className="mb-5 font-display text-2xl font-bold tracking-wider text-dark-brand-900 leading-relaxed md:text-3xl md:leading-normal">
                    在家也能做实验，仿真带你探索科学
                    <span className="inline-block text-brand-900 ml-0 sm:ml-3">
                      成为小小科学家 🚀
                    </span>
                  </h2>
                </Slide>
                <Slide up>
                  <p className="max-w-2xl text-base text-gray-700 font-body md:text-lg">
                    互动仿真为学生提供新颖的在线科学学习体验。
                    本环境聚焦实验演示与理论概念，无需实体仪器即可完成探究。
                  </p>
                </Slide>
              </div>
              {/* Simulation Buttons */}
              <div className="grid gap-1 sm:gap-5 row-gap-8 sm:grid-cols-3 font-body">
                <Slide bottom>
                  <div
                    className={`animate-pulse shadow-3xl m-3 cursor-pointer ${
                      selectTab === 1 ? 'bg-indigo-50' : 'bg-brand-accent-100'
                    }`}
                    onClick={() => {
                      setSelectTab(1);
                      setViewSimulation(true);
                      handleScroll();
                    }}
                  >
                    <div className="h-full p-3 sm:p-5 mx-auto text-center hover:bg-indigo-50">
                      <img
                        className="object-cover w-36 h-36 mx-auto rounded sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                        src={physics}
                        alt="Science-logo"
                      />
                      <h6 className="animate-bounce mt-5 font-semibold leading-5 text-2xl text-brand-900">
                        物理
                      </h6>
                    </div>
                  </div>
                </Slide>
                <Slide bottom>
                  <div
                    className={`animate-pulse shadow-3xl m-3 cursor-pointer ${
                      selectTab === 2 ? 'bg-indigo-50' : 'bg-brand-accent-100'
                    }`}
                    onClick={() => {
                      setSelectTab(2);
                      setViewSimulation(true);
                      handleScroll();
                    }}
                  >
                    <div className="h-full p-3 sm:p-5 text-center hover:bg-indigo-50">
                      <img
                        className="object-cover w-36 h-36 mx-auto rounded sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                        src={chemistry}
                        alt="Science-logo"
                      />
                      <h6 className="animate-bounce mt-5 font-semibold leading-5 text-2xl text-brand-900">
                        化学
                      </h6>
                    </div>
                  </div>
                </Slide>
                <Slide bottom>
                  <div
                    className={`animate-pulse shadow-3xl m-3 cursor-pointer ${
                      selectTab === 3 ? 'bg-indigo-50' : 'bg-brand-accent-100'
                    }`}
                    onClick={() => {
                      setSelectTab(3);
                      setViewSimulation(true);
                      handleScroll();
                    }}
                  >
                    <div className="h-full p-3 sm:p-5 text-center hover:bg-indigo-50">
                      <img
                        className="object-cover w-36 h-36 mx-auto rounded sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                        src={biology}
                        alt="Science-logo"
                      />
                      <h6 className="animate-bounce mt-5 font-semibold leading-5 text-2xl text-brand-900">
                        生物
                      </h6>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* View simulation contents component */}
      <ViewAllSimulation
        viewSimulation={viewSimulation}
        selectTab={selectTab}
        setViewSimulation={setViewSimulation}
        setSelectTab={setSelectTab}
      />
    </div>
  );
};

export default Simulation;
