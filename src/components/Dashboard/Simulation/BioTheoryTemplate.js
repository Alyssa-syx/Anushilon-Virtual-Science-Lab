import React from 'react';
import Image01 from '../../../assets/images/simulation/bio/12/01/bio1.png';
import Image02 from '../../../assets/images/simulation/bio/12/01/bio2.png';
import Image03 from '../../../assets/images/simulation/bio/12/01/bio3.png';

const BioTheoryTemplate = () => {
  return (
    <div className="flex flex-wrap text-lg font-body text-gray-900 leading-relaxed tracking-wide px-4 py-5 ">
      {/* Content 1 */}
      <div className="mb-2 ">
        <h2 className="font-semibold"> 实验名称：</h2>
        <p> 光合作用中叶绿素与光的必要性实验。 </p>
      </div>

      <div className="mb-2">
        <h2 className="font-semibold"> 实验目的：</h2>
        <p>
          通过实验证明光对光合作用是必需的。
        </p>
      </div>
      {/* Content 2 */}
      <div className="mb-4">
        <div className="flex flex-wrap">
          <h2 className="font-semibold pr-4"> 基本原理：</h2>
          <img src={Image01} alt="simulation-theory" className="py-1 pb-4" />
        </div>
        <p>
          光合作用是将光能转化为化学能的过程。植物利用光能，将二氧化碳和水合成为糖类等有机物。
        </p>
        <p className="mt-2">
          「光合作用」一词源自希腊语，「photo」意为光，「synthesis」意为合成。氧气作为副产物释放。
          光是光合作用的主要条件，本实验将证明光对光合作用是必需的。
        </p>
      </div>
      {/* Content 3 */}
      <div className="mt-3">
        <h2 className="font-semibold">光合作用过程：</h2>
        <p>
          绿色植物利用光能，将二氧化碳（CO₂）和水（H₂O）转化为有机物，这一过程即为光合作用。
          光能被叶绿素吸收，二氧化碳和氧气通过叶片气孔进出植物。光合作用的重要产物是氧气，
          绝大多数生物依赖氧气生存。
        </p>
        <p className="mt-2">
          葡萄糖是光合作用产生的有机物之一，植物利用它合成叶、花、果实和种子。
          葡萄糖分子可进一步聚合形成淀粉、纤维素等复杂有机物。纤维素是植物细胞壁的结构成分。
          光合作用为几乎所有生物提供能量来源。
        </p>
        <p className="mt-2">
          光合作用的总反应可表示为：
        </p>
        <img src={Image02} alt="simulation-theory" className="py-2" />
        <img src={Image03} alt="simulation-theory" className="py-2" />
      </div>
      {/* Content 4 */}
      <div className="mt-3">
        <h2 className="font-semibold">
          光色对光合作用的影响：
        </h2>
        <p>
          光色对光合作用有重要影响。植物只吸收特定波长的光进行光合作用。
          叶绿素吸收蓝光、红光和紫光。光合作用在蓝光和红光下较强，在绿光下较弱或不发生。
        </p>
        <p className="mt-2">
          蓝光吸收效率最高，光合速率最大，其次是红光。绿光几乎不被吸收，无法用于光合作用。
          叶绿素呈绿色是因为它吸收了红、蓝光，这些光无法到达我们眼中；
          未被吸收的绿光反射到我们眼中，使叶绿素呈现绿色。
        </p>
      </div>
      {/* Content 5 */}
      <div className="mt-5">
        <h2 className="font-semibold">影响光合作用的因素：</h2>
        <p>
          光合作用速率受多种因素影响，各因素需处于适宜水平。
        </p>
        <ul className="list-inside leading-loose list-disc">
          <li>
            光照强度：光照增强，光合速率提高；光照减弱，光合速率降低。
          </li>
          <li>
            CO₂ 浓度：二氧化碳浓度升高可提高光合速率。通常 0.03%–0.04% 的 CO₂ 浓度即可满足光合作用。
          </li>
          <li>
            温度：光合作用最适温度约为 25–35°C。
          </li>
          <li>
            水分：水是光合作用的原料。缺水会影响气孔开闭，进而影响 CO₂ 吸收。
          </li>
          <li>
            大气污染：污染物会堵塞气孔，阻碍 CO₂ 吸收，可使光合速率降低约 15%。
          </li>
        </ul>
      </div>
      {/* Content 6 */}
      <div className="mt-5 pb-5">
        <h2 className="font-semibold mb-1"> 学习目标：</h2>
        <ul className="list-inside leading-loose list-disc">
          <li>
            理解光对光合作用是必需的。
          </li>
          <li>
            掌握光合作用原理及影响因素。
          </li>
          <li>
            通过动画和模拟熟悉步骤后，能在实体实验室完成实验。
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BioTheoryTemplate;
