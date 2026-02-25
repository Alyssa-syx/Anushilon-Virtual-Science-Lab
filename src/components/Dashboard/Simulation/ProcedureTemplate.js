import React from "react";
import Image10 from "../../../assets/images/simulation/phy/12/01/MBridge.jpeg";
import Image11 from "../../../assets/images/simulation/phy/12/01/MeterBridgePro1.png";
import Image12 from "../../../assets/images/simulation/phy/12/01/MeterBridgePro2.png";

const ProcedureTemplate = () => {
  return (
    <div className="flex flex-wrap text-lg font-body text-gray-900 leading-relaxed tracking-wide px-4 py-5">
      {/* Main Content */}
      <div className="mb-1">
        <h2 className="font-semibold"> 实验示意图：</h2>
        <img src={Image10} alt="simulation-theory" className="py-1" />
      </div>

      <div className="min-w-full mb-2">
        <h2 className="font-semibold mb-1"> 所需仪器：</h2>
        <ul className="list-inside leading-loose list-disc">
          <li>滑线电桥（米桥）</li>
          <li>勒克朗谢电池或稳压电源</li>
          <li>灵敏电流计</li>
          <li>电阻箱</li>
          <li>滑动触头（接触键）</li>
          <li>单刀开关</li>
          <li>待测电阻丝</li>
          <li>螺旋测微器</li>
          <li>米尺</li>
          <li>连接导线</li>
        </ul>
      </div>
      {/* Procedure 1 */}
      <div className="mb-2 mt-4">
        <h2 className="font-semibold mb-1"> 实体实验室操作步骤 </h2>
        <ul className="list-inside leading-loose list-disc">
          <li>
            在实验台上摆放所需器材，并按电路图完成接线。
          </li>
          <li>
            从电阻箱中取出若干电阻接入电路。
          </li>
          <li>
            闭合开关。先将滑动触头与一端接触，观察电流计指针偏转方向。
          </li>
          <li>
            若电流计指针反向偏转，说明接线正确，平衡点位于 A、C 之间。
          </li>
          <li>
            否则，调节电阻箱阻值并重复上述步骤，使平衡点落在 A、C 之间。
          </li>
          <li>
            若电流计始终向同一方向偏转，需检查接线是否正确。
          </li>
          <li>
            缓慢移动滑动触头，从一端（设为 A）开始，观察电流计偏转，直至找到平衡点。
          </li>
          <li>
            平衡点即电流计示数为零的位置。用米尺测量从端点到触头的距离，记为平衡长度 l。
          </li>
          <li>
            改变 R 的电阻值，重复上述步骤，每次测量并记录平衡长度。
          </li>
          <li>
            交换 AB、CD 电阻丝与电阻箱的位置。
          </li>
          <li>
            对相同的 R 值重复上述步骤，再次测量平衡长度。
          </li>
          <li>
            根据公式可计算待测电阻丝的阻值：
          </li>
          <img src={Image11} alt="simulation-theory" className="py-1" />
          <li>
            用螺旋测微器测量电阻丝直径，得到半径 r。
          </li>
          <li>用米尺测量电阻丝长度 L。</li>
          <li>
            根据测量值，可用电阻率公式计算待测电阻丝的电阻率：
          </li>
          <img src={Image12} alt="simulation-theory" className="py-1" />
        </ul>
      </div>
      {/* Procedure 2 */}
      <div className="mb-12 mt-8">
        <h2 className="font-semibold mb-1">
          模拟器操作步骤（在线实验）：
        </h2>
        <ul className="list-inside leading-loose list-disc">
          <li>
            模拟器侧边栏中有实验台、电源、电阻箱和米桥等器材。
          </li>
          <li>
            点击侧边栏中的电源和电阻箱，将其拖放到米桥附近。
          </li>
          <li>将电阻丝拖到米桥右侧缺口处连接。</li>
          <li>此时「开始实验」按钮将变为可用。</li>
          <li>
            点击电阻箱，在弹出窗口中选择所需阻值，然后关闭窗口。
          </li>
          <li>点击「开始实验」按钮，插入开关。</li>
          <li>
            可通过鼠标拖动或调节「触头位置」滑块，将滑动触头从左端向右移动。
          </li>
          <li>
            同时观察电流计读数，当示数为零时停止移动触头，记录从左端到平衡点的导线长度，记为 l（单位：cm）。
          </li>
          <li>
            从右端向左移动触头重复操作，记录从右端到平衡点的长度，即 (100-l) cm。
          </li>
          <li>
            对第二根电阻丝重复相同步骤，记录长度数据。
          </li>
          <li>
            每根电阻丝取三次读数，计算平均值及电阻值。
          </li>
          <li>
            根据公式可计算待测电阻丝的阻值：
          </li>
          <img src={Image11} alt="simulation-theory" className="py-1" />
          <li>
            若 L 为导线长度、r 为半径，则可用电阻率公式计算：
          </li>

          <li>
            根据测量值，可用电阻率公式计算待测电阻丝的电阻率：
          </li>
          <img src={Image12} alt="simulation-theory" className="py-1" />
        </ul>
      </div>
    </div>
  );
};

export default ProcedureTemplate;
