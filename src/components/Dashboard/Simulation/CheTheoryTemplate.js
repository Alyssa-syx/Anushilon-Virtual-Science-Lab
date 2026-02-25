import React from 'react';
import Image01 from '../../../assets/images/simulation/che/12/01/che1.png';
import Image02 from '../../../assets/images/simulation/che/12/01/che2.png';
import Image03 from '../../../assets/images/simulation/che/12/01/che3.png';
import Image04 from '../../../assets/images/simulation/che/12/01/che4.png';
import Image05 from '../../../assets/images/simulation/che/12/01/che5.png';
import Image06 from '../../../assets/images/simulation/che/12/01/che6.png';
import Image07 from '../../../assets/images/simulation/che/12/01/che7.png';
import Image08 from '../../../assets/images/simulation/che/12/01/che8.png';

const CheTheoryTemplate = () => {
  return (
    <div className="flex flex-wrap text-lg font-body text-gray-900 leading-relaxed tracking-wide px-4 py-5 ">
      {/* Content 1 */}
      <div className="mb-2 ">
        <h2 className="font-semibold"> 实验名称：</h2>
        <p>
          {' '}
          用 KMnO₄ 溶液测定未知浓度溶液中亚铁离子的含量。{' '}
        </p>
      </div>

      <div className="mb-2">
        <h2 className="font-semibold"> 实验目的：</h2>
        <p>
          用标准溶液对 KMnO₄ 溶液进行滴定，以标定其浓度：
        </p>
        <ul className="list-inside leading-loose list-disc">
          <li>草酸</li>
          <li>硫酸亚铁铵（莫尔盐）</li>
        </ul>
      </div>
      {/* Content 2 */}
      <div className="mb-4">
        <h2 className="font-semibold"> 基本原理：</h2>
        <p> 什么是滴定？</p>

        <p>
          滴定是定量化学分析中常用的实验方法，用于测定待测溶液（被滴定液）的未知浓度。
          其原理是待测液与已知浓度的标准溶液（滴定剂）发生反应。待测液用移液管移入锥形瓶，
          标准溶液装入已校准的滴定管（滴定剂）中。
        </p>
      </div>
      {/* Content 3 */}
      <div className="mb-2 mt-2">
        <h2 className="font-semibold">
          氧化还原滴定
        </h2>
        <p>
          基于滴定剂与待测液之间氧化还原反应的滴定称为氧化还原滴定。氧化是加氧或
          失去氢/电子的过程，还原是加氢/电子或去氧的过程。氧化剂是得电子、被还原的物质；
          还原剂是失电子、被氧化的物质。即：氧化剂是电子受体，还原剂是电子供体。
        </p>
        <p className="mt-2">
          在氧化还原体系中，可通过滴定法结合氧化还原指示剂测定还原剂/氧化剂的强度。
          涉及高锰酸钾的氧化还原滴定称为高锰酸钾法。在此类反应中，MnO₄⁻ 离子起自身指示剂作用。
        </p>
      </div>
      {/* Content 4 */}
      <div className="mb-2 mt-2">
        <h2 className="font-semibold">
          用草酸标定 KMnO₄
        </h2>
        <p>
          配制草酸标准溶液 [250 mL 0.1 M 溶液] <br />
          草酸晶体分子量：H₂C₂O₄·2H₂O = 126 <br />
          配制 1000 mL 1 M 溶液需草酸晶体质量 = 126 g
        </p>
        <div className="mt-1 flex flex-wrap">
          <p>
            因此，配制 250 mL 0.1 M 溶液需草酸质量 ={' '}
          </p>
          <img src={Image01} alt="simulation-theory" className="-mt-4 ml-1" />
        </div>
        <p className="mt-2">
          用草酸标准溶液标定 KMnO₄ 浓度
          <br />
          本滴定中，KMnO₄ 为滴定剂，草酸为待测液。高锰酸钾是氧化剂，草酸是还原剂。
          反应在酸性介质中进行，因为酸性介质中 MnO₄⁻ 是强氧化剂。加入稀硫酸提供酸性环境。
        </p>
        <img src={Image02} alt="simulation-theory" className="py-2" />
        <p>
          无需使用其他指示剂，因为 KMnO₄ 自身起指示剂作用。MnO₄⁻ 离子呈深紫色。
          在酸性介质中，MnO₄⁻ 被还原为无色的 Mn²⁺。到达终点后，加入最后一滴高锰酸钾，
          溶液呈浅粉红色。滴定过程中的化学反应可用化学方程式表示。
        </p>
      </div>
      {/* Content 5 */}
      <div className="mb-4">
        <p className="my-1">分子方程式</p>
        <img src={Image03} alt="simulation-theory" className="py-2" />
        <div className="mt-1 flex flex-wrap">
          <p>总反应：</p>
          <img src={Image04} alt="simulation-theory" className="ml-1" />
        </div>
      </div>
      {/* Content 6 */}
      <div className="mb-4">
        <p className="my-1">离子方程式</p>
        <img src={Image05} alt="simulation-theory" className="py-2" />
        <div className="mt-1 flex flex-wrap">
          <p>总反应：</p>
          <img src={Image06} alt="simulation-theory" className="ml-1" />
        </div>
      </div>
      {/* Content 7 */}
      <div className="pb-5">
        <h2 className="font-semibold mb-1"> 化学计量关系 </h2>
        <p>
          由配平方程式可知，2 mol KMnO₄ 与 5 mol 草酸反应。
          <br />
          根据物质的量浓度关系：
        </p>
        <img src={Image07} alt="simulation-theory" className="mt-2" />
        <div className="mt-4 flex flex-wrap">
          <p>因此，KMnO₄ 的物质的量浓度 = </p>
          <img src={Image08} alt="simulation-theory" className="ml-1 -mt-4" />
        </div>
        <p>
          滴定草酸时，加入适量稀硫酸，并将锥形瓶加热至 60–70°C。
          加热的目的是加快反应速率，室温下草酸与高锰酸钾反应较慢。
        </p>
      </div>

      {/* Content 9 */}
      <div className="pb-5">
        <h2 className="font-semibold mb-1"> 学习目标：</h2>
        <ul className="list-inside leading-loose list-disc">
          <li>
            理解体积分析、物质的量浓度、质量摩尔浓度、当量浓度及氧化还原滴定等概念。
          </li>
          <li>
            掌握用物质的量浓度公式计算 KMnO₄ 浓度的方法。
          </li>
          <li>
            理解加入稀硫酸的作用及滴定前加热草酸的原因。
          </li>
          <li>
            掌握配制草酸和莫尔盐标准溶液的方法。
          </li>
          <li> 了解滴定所用仪器及其用途。</li>
          <li>
            理解各步骤后，能在实体实验室完成氧化还原滴定。
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheTheoryTemplate;
