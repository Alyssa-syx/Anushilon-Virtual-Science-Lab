import React from 'react';
import Fade from 'react-reveal/Fade';

const MobileResponsive = () => {
  const features = [
    '📱 手机、平板、电脑无缝连通',
    '🧚‍♂️ 专属探索精灵 24 小时贴心伴学',
    '🚀 物化生全学科实验随时开启！',
  ];

  return (
    <section
      className="min-h-full lg:pt-10 bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(https://i.ibb.co/QMKRNPL/features-1.png)`,
      }}
    >
      <Fade up>
        <div className="mx-auto lg:mx-24 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-24">
          <div
            className="min-h-screen sm:min-h-full bg-cover sm:bg-contain bg-no-repeat bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url(https://i.ibb.co/vY6ShYW/features-overlay.png)`,
            }}
          >
            <div className="xl:px-32 px-4 sm:px-6 w-full">
              
              {/* 核心修改：
                  1. 改回 justify-start 配合 pt 控制靠上
                  2. 增大 pb 确保底部不贴边
                  3. 微调 pt 的数值让位置更精准
              */}
              <div className="flex flex-col items-center justify-start min-h-[60vh] lg:min-h-[70vh] pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
                
                <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-bold leading-snug tracking-wide text-white text-center max-w-[22ch]">
                  口袋里的 AI 科学实验室
                </h1>
                
                <ul className="mt-10 sm:mt-12 space-y-5 sm:space-y-6 font-body font-medium text-xl sm:text-2xl xl:text-3xl leading-relaxed text-indigo-50 text-center list-none max-w-[26ch] mx-auto">
                  {features.map((item, index) => (
                    <li key={index} className="flex items-center justify-center gap-3 text-balance">
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-indigo-300 shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

              </div>
              
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default MobileResponsive;