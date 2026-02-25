import React from 'react';
import Image9 from '../../../assets/images/simulation/che/12/01/che9.jpg';

const CheProcedureTemplate = () => {
  return (
    <div className="flex flex-wrap text-lg font-body text-gray-900 leading-relaxed tracking-wide px-4 py-5">
      {/* Main Content */}
      <div className="mb-1">
        <h2 className="font-semibold"> 所需仪器：</h2>
        <img src={Image9} alt="simulation-theory" className="py-1" />
      </div>

      {/* Procedure 1 */}
      <div className="mb-2 mt-6">
        <h2 className="font-semibold mb-2"> 实验步骤 </h2>
        <p className="mb-2">
          {' '}
          配制草酸标准溶液 [250 mL 0.1 M 溶液]{' '}
        </p>
        <ul className="list-inside leading-loose list-disc">
          <li>
            用电子天平在称量瓶中准确称取 3.15 g 草酸晶体。
          </li>
          <li>将草酸转移至 250 mL 烧杯中。</li>
          <li>
            用蒸馏水洗涤称量瓶 2–3 次，洗涤液一并转入烧杯。
          </li>
          <li>
            用玻璃棒轻轻搅拌，使草酸晶体完全溶解。
          </li>
          <li>
            待草酸完全溶解后，通过漏斗和玻璃棒将溶液全部转移至 250 mL 容量瓶。
          </li>
          <li>
            用蒸馏水洗涤烧杯 2–3 次，洗涤液全部转入容量瓶。
          </li>
          <li>
            用蒸馏水冲洗漏斗，使残留液滴流入容量瓶。
          </li>
          <li>
            向容量瓶中加入蒸馏水至刻度线下方。
          </li>
          <li>
            用胶头滴管逐滴加水至凹液面最低处与刻度线相切。
          </li>
          <li>
            盖紧瓶塞，轻轻摇匀。
          </li>
        </ul>
      </div>
      {/* Procedure 2 */}
      <div className="mb-12 mt-8">
        <h2 className="font-semibold mb-1">标定 KMnO₄ 溶液浓度</h2>
        <ul className="list-inside leading-loose list-disc">
          <li>取一支滴定管，用蒸馏水洗净。</li>
          <li>
            用待标定的 KMnO₄ 溶液润洗滴定管并装液，将初读数调至零刻度。
          </li>
          <li>将滴定管垂直固定在滴定管架上。</li>
          <li>
            用蒸馏水润洗移液管，再用草酸溶液润洗。
          </li>
          <li>
            用移液管移取 20 mL 草酸溶液于锥形瓶，加入约 20 mL 稀 H₂SO₄。
          </li>
          <li>
            将锥形瓶内容物加热至 60–70°C，用滴定管中的 KMnO₄ 溶液滴定，直至溶液由无色变为浅粉红色。
          </li>
          <li>记录滴定管终读数。</li>
          <li>
            重复滴定直至得到平行结果。
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheProcedureTemplate;
