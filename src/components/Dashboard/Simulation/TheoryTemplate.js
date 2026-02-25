import React from "react";
import Image02 from "../../../assets/images/simulation/phy/12/01/MeterBridgeTheory1.png";
import Image05 from "../../../assets/images/simulation/phy/12/01/MeterBridgeTheory3.png";
import Image06 from "../../../assets/images/simulation/phy/12/01/MeterBridgeTheory4.png";
import Image07 from "../../../assets/images/simulation/phy/12/01/MeterBridgeTheory5.png";
import Image03 from "../../../assets/images/simulation/phy/12/01/Untitled-1.jpg";
import Image04 from "../../../assets/images/simulation/phy/12/01/Untitled-2.jpg";
import Image01 from "../../../assets/images/simulation/phy/12/01/Wheatstone-Bridge.jpeg";

const TheoryTemplate = () => {
  return (
    <div className="flex flex-wrap text-lg font-body text-gray-900 leading-relaxed tracking-wide px-4 py-5 ">
      {/* Content 1 */}
      <div className="mb-2 ">
        <h2 className="font-semibold"> 实验名称：</h2>
        <p> 用米桥法测定导线的相对电阻。</p>
      </div>

      <div className="mb-2">
        <h2 className="font-semibold"> 实验目的：</h2>
        <p>
          用米桥测定给定导线的电阻，并确定导线材料的电阻率。
        </p>
      </div>
      {/* Content 2 */}
      <div className="mb-4">
        <h2 className="font-semibold"> 基本原理：</h2>
        <p> 惠斯通电桥原理</p>
        <img src={Image01} alt="simulation-theory" className="py-1" />
        <p>
          米桥基于惠斯通电桥原理工作。四个电阻 P、Q、R、S 连接成 ABCD 网络。
          端子 A 和 C 与电池相连，C 和 D 端子通过开关 K1、K2 与检流计相连。
          平衡时检流计无偏转。
        </p>
        <img src={Image02} alt="simulation-theory" className="py-2 ml-2" />
      </div>
      {/* Content 3 */}
      <div className="mb-2 mt-2">
        <h2 className="font-semibold"> 米桥结构：</h2>
        <p>
          米桥又称滑线电桥，由固定在木块上、横截面积均匀的一米长电阻丝组成，
          附有刻度。用厚金属条在桥上形成两个间隙，间隙间端子 B 用于连接检流计和滑键。
        </p>
        <div className="flex flex-wrap my-5">
          <img src={Image03} alt="simulation-theory" className="py-1 mr-5" />
          <img src={Image04} alt="simulation-theory" className="py-2" />
        </div>
        <p>
          电阻丝置于间隙 S，电阻箱置于间隙 R。当滑键沿 AC 滑动时，在平衡点处检流计示零。
        </p>
      </div>
      {/* Content 4 */}
      <div className="mb-4">
        <p className="my-2">若 AB 长度为 l，则 BC 长度为 (100-l)。</p>
        <p>根据惠斯通电桥原理：</p>
        <img src={Image05} alt="simulation-theory" className="py-2" />
        <p className="mt-2">未知电阻可按下式计算：</p>
        <img src={Image06} alt="simulation-theory" className="py-2" />
        <p className="mt-2">
          导线材料的电阻率可用下式求得：
        </p>
        <img src={Image07} alt="simulation-theory" className="py-2" />
        <p className="mt-2">其中 L 为导线长度，R 为半径。</p>
      </div>
      {/* Content 5 */}
      <div className="pb-5">
        <h2 className="font-semibold mb-1"> 学习目标：</h2>
        <ul className="list-inside leading-loose list-disc">
          <li>
            理解惠斯通电桥及其原理。
          </li>
          <li>能够验证惠斯通电桥原理。</li>
          <li>
            通过米桥实验掌握电桥原理的应用。
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TheoryTemplate;
