import React from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';
import FeaturesImage1 from '../../../assets/images/features/features-img-1.png';
import FeaturesImage2 from '../../../assets/images/features/features-img-2.png';
import FeaturesImage3 from '../../../assets/images/features/features-img-3.png';
import FeaturesImage4 from '../../../assets/images/features/features-img-4.png';
import PathImage from '../../../assets/images/features/path.png';
import Card from '../MicroComponent/Card';
import SectionTitle from '../MicroComponent/SectionTitle';

function Features() {
  return (
    <section
      className="min-h-auto md:min-h-screen bg-cover bg-no-repeat bg-center"
      id="features"
      data-aos="fade-up"
      style={{
        backgroundImage: `url(https://i.ibb.co/vmk1BBv/features-2.png)`,
      }}
    >
      <div className="px-4 py-12 sm:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        {/* Main Content */}
        <Fade top>
          <SectionTitle
            title="实验室特色"
            description="任何时间，任何地点开心做实验；互动技术让科学学习更生动有趣。"
            space="mb-12"
          />
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 relative font-body">
          <div
            style={{ zIndex: '-1' }}
            className="hidden xl:block 2xl:hidden path absolute w-full"
          >
            <Zoom bottom>
              <img className="mx-auto" src={PathImage} alt="img" />
            </Zoom>
          </div>
          {/* Feature 1 */}
          <Slide bottom>
            <Card>
              <div className="text-center px-5 py-8">
                <img className="mx-auto" src={FeaturesImage1} alt="img" />
                <h4 className="font-bold text-dark-blue text-xl mt-10">
                  免费观看视频与动画学科学
                </h4>
                <p className="mt-4 text-gray-800">
                  平台提供 500+ 视频与动画教程，涵盖初一到高三科学课程、
                  软件技能与专业拓展内容。
                </p>
              </div>
            </Card>
          </Slide>
          {/* Feature 2 */}
          <Slide bottom>
            <Card>
              <div className="text-center px-5 py-8 xl:mt-24">
                <img className="mx-auto" src={FeaturesImage2} alt="img" />
                <h4 className="font-bold text-dark-blue text-xl mt-10">
                  仿真实验，随时检验学习成果
                </h4>
                <p className="mt-4 text-gray-800">
                  支持独立完成实验、多次重复操作，
                  并可保存数据、查看图表，巩固知识点。
                </p>
              </div>
            </Card>
          </Slide>
          {/* Feature 3 */}
          <Slide bottom>
            <Card>
              <div className="text-center px-5 py-8">
                <img className="mx-auto" src={FeaturesImage3} alt="img" />
                <h4 className="font-bold text-dark-blue text-xl mt-10">
                  教师可评估学生实验表现
                </h4>
                <p className="mt-4 text-gray-800">
                  支持教师创建、布置、保存实验任务，查看学生完成情况，
                  并进行科学评价与反馈。
                </p>
              </div>
            </Card>
          </Slide>
          {/* Feature 4 */}
          <Slide bottom>
            <Card>
              <div className="text-center mb-24 lg:mb-16 px-5 py-8 xl:mt-24">
                <img className="mx-auto" src={FeaturesImage4} alt="img" />
                <h4 className="font-bold text-dark-blue text-xl mt-10">
                  科学学习社区，交流互助
                </h4>
                <p className="mt-4 text-gray-800">
                  学生可提问、分享经验，教师与专家在线答疑，
                  打造互动式科学学习社区。
                </p>
              </div>
            </Card>
          </Slide>
        </div>
      </div>
    </section>
  );
}

export default Features;
