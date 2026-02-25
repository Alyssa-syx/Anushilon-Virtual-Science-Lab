import React from 'react';
import Image4 from '../../../assets/images/simulation/bio/12/01/bio4.jpg';

const BioProcedureTemplate = () => {
  return (
    <div className="flex flex-wrap text-lg font-body text-gray-900 leading-relaxed tracking-wide px-4 py-5">
      {/* Main Content */}
      <div className="mb-1">
        <h2 className="font-semibold"> 所需仪器：</h2>
        <img src={Image4} alt="simulation-theory" className="py-1" />
      </div>

      {/* Procedure 1 */}
      <div className="mt-5">
        <h2 className="font-semibold mb-2"> 实验步骤 </h2>
        <p className="mb-2">
          取一盆健康植物，置于暗处 2–3 天进行「脱淀粉」处理。
        </p>
        <ul className="list-inside leading-loose list-disc">
          <li>剪两张相同的黑纸片。</li>
          <li>
            用回形针将黑纸固定在叶片正反两面。
          </li>
          <li>将盆栽植物置于阳光下照射一整天。</li>
          <li>
            傍晚摘下遮光叶片，取下黑纸。
          </li>
          <li>
            取一烧杯加入蒸馏水，置于酒精灯或电热板上加热至沸腾。
          </li>
          <li>
            取下烧杯，稍冷却。
          </li>
          <li>
            另取一烧杯盛蒸馏水，加热至约 60°C。
          </li>
          <li>向试管中加入适量酒精。</li>
          <li>将试管放入盛有热水的烧杯中水浴加热。</li>
          <li>用镊子从烧杯中取出叶片。</li>
          <li>将叶片放入酒精中加热脱色。</li>
          <li>待叶片褪色至黄白色后取出。</li>
          <li>用镊子取出叶片。</li>
          <li>用蒸馏水漂洗叶片。</li>
          <li>将叶片平铺于培养皿中。</li>
          <li>
            用滴管滴加碘液于叶片上。
          </li>
        </ul>
      </div>

      {/* Procedure 2 */}
      <div className="mt-5">
        <h2 className="font-semibold mb-1">观察现象</h2>
        <ul className="list-inside leading-loose list-disc">
          <li>
            滴加碘液后，叶片照光部分呈蓝黑色。
          </li>
          <li>叶片遮光部分呈浅黄褐色。</li>
        </ul>
      </div>

      {/* Procedure 3 */}
      <div className="mt-5">
        <h2 className="font-semibold mb-1">结论</h2>
        <p>
          淀粉是光合作用的产物之一，遇碘变蓝。实验表明，只有照光部分的叶片遇碘呈蓝黑色，
          遮光部分不变蓝。这说明照光部分进行了光合作用并产生了淀粉，遮光部分则没有。
          由此可证明：光对光合作用是必需的。
        </p>
      </div>

      {/* Procedure 4 */}
      <div className="mb-6 mt-5">
        <h2 className="font-semibold mb-1">注意事项</h2>
        <ul className="list-inside leading-loose list-disc">
          <li>实验用叶片应健康、含叶绿素。</li>
          <li>
            黑纸需完全遮光，确保遮光部分不接触阳光。
          </li>
          <li>酒精脱色后需用清水漂洗再滴加碘液。</li>
        </ul>
      </div>
    </div>
  );
};

export default BioProcedureTemplate;
