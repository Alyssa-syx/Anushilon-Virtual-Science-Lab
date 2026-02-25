import { faMap, faFlask, faMagic, faTint, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import CheObservationTemplate from './CheObservationTemplate';

const CheSimulationTemplate = () => {
  // 默认直接打开核心的“探索精灵”实验室
  const [openTab, setOpenTab] = useState(2);
  
  // 🌟 探索精灵的核心状态
  const [liquidVolume, setLiquidVolume] = useState(20); 
  const [liquidColor, setLiquidColor] = useState('bg-blue-50'); 
  const [hasAcid, setHasAcid] = useState(false); 
  
  // 🧚‍♂️ 探索精灵的初始话术
  const [aiMessages, setAiMessages] = useState([
    { role: 'ai', text: '你好小探险家！我是你的【探索精灵】🧚‍♂️。\n\n探险队在受污染的地下河中取回了水样，怀疑里面有铁锈（亚铁离子）。如果超标，营地就没水喝啦！\n\n现在，只有你能利用这瓶紫红色的高锰酸钾（KMnO₄）找出真相。但在滴加之前，看看台面上的【稀硫酸】，你觉得它有什么魔法作用？' }
  ]);

  // 🧪 交互动作：加酸
  const handleAddAcid = () => {
    setHasAcid(true);
    setAiMessages(prev => [
      ...prev, 
      { role: 'user', text: '滴加了稀硫酸。' }, 
      { role: 'ai', text: '干得漂亮！虽然水样看起来没变，但你已经给高锰酸钾施加了“强酸环境”的魔法！有了它，高锰酸钾就能发挥出最强的威力。\n\n现在，大胆地滴加紫色的 KMnO₄ 吧，盯紧水样颜色的变化哦！' }
    ]);
  };

  // 🧪 交互动作：滴加高锰酸钾
  const handleAddDrop = () => {
    if (liquidVolume > 90) return;
    setLiquidVolume(prev => prev + 10);
    
    if (!hasAcid) {
      setLiquidColor('bg-yellow-900'); 
      setAiMessages(prev => [
        ...prev, 
        { role: 'user', text: '直接滴入了 KMnO₄。' }, 
        { role: 'ai', text: '🚨 哎呀，水变浑浊发棕色了！紫色的魔法失效了。\n\n因为没有“酸”的帮助，高锰酸钾没法完全打败铁锈。快点击左上角的“重新开始”洗洗瓶子，我们再试一次吧！' }
      ]);
    } else {
      if (liquidVolume >= 60) {
         setLiquidColor('bg-pink-300'); 
         setAiMessages(prev => [
           ...prev, 
           { role: 'user', text: '继续滴入 KMnO₄。' }, 
           { role: 'ai', text: '🎉 哇！水样变成了淡淡的粉红色，而且不褪色了！这意味着里面的铁锈已经被完全消灭了。\n\n你成功找到了“滴定终点”！快去【AI 诊断报告】里记录下你的伟大发现吧！' }
         ]);
      } else {
         setAiMessages(prev => [
           ...prev, 
           { role: 'user', text: '滴入 KMnO₄。' },
           { role: 'ai', text: '紫红色瞬间消失了！说明里面的铁锈还在和高锰酸钾“战斗”。继续滴加，直到颜色不再消失为止！' }
         ]);
      }
    }
  };

  const resetExperiment = () => {
    setLiquidVolume(20);
    setLiquidColor('bg-blue-50');
    setHasAcid(false);
    setAiMessages([
      { role: 'ai', text: '🔄 仪器已经洗干净啦！水样重新准备完毕。小探险家，这次我们要按什么顺序施展魔法呢？' }
    ]);
  };

  return (
    <section>
      <div className="flex flex-wrap">
        <div className="w-full">
          {/* 顶部标题 */}
          <div className="bg-white rounded-xl shadow-sm mb-4 p-4 border border-gray-100 flex items-center gap-3">
             <div className="w-10 h-10 bg-brand-900 text-white rounded-full flex items-center justify-center text-xl shadow-md">
               <FontAwesomeIcon icon={faMagic} />
             </div>
             <div>
               <h2 className="text-xl font-bold text-gray-800">拯救地下水危机</h2>
               <p className="text-sm text-gray-500">知识点：氧化还原反应 / 滴定法</p>
             </div>
          </div>
          
          {/* 🚀 极简化的 3 大核心标签页 */}
          <ul className="flex mb-0 list-none flex-wrap pb-4 flex-row" role="tablist">
            {[
              { id: 1, icon: faMap, label: '任务简报' },
              { id: 2, icon: faStar, label: '探索精灵实验室' },
              { id: 3, icon: faFlask, label: 'AI 诊断报告' },
            ].map((tab) => (
              <li key={tab.id} className="mb-2 mr-2 flex-auto text-center">
                <a
                  className={`font-bold cursor-pointer transition-all duration-300 block py-3 px-4 rounded-xl shadow-sm ${openTab === tab.id ? 'text-white bg-brand-900 scale-105' : 'text-gray-600 bg-white hover:bg-brand-50'}`}
                  onClick={(e) => { e.preventDefault(); setOpenTab(tab.id); }}
                >
                  <FontAwesomeIcon icon={tab.icon} className="mr-2" /> {tab.label}
                </a>
              </li>
            ))}
          </ul>

          {/* 内容区 */}
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-2xl border-0">
            <div className="flex-auto p-2 md:p-6">
              <div className="tab-content tab-space">
                
                {/* 📍 标签页 1：任务简报 (占位，替代长篇大论) */}
                <div className={openTab === 1 ? 'block animate-fade-in-up' : 'hidden'}>
                  <div className="p-8 text-center bg-blue-50 rounded-xl border border-blue-100">
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">📜 营地发来的求助信</h3>
                    <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                      小探险家，我们急需你的帮助！水源可能被铁锈污染了。请前往【探索精灵实验室】，利用你的化学魔法，测出污染的严重程度吧！
                    </p>
                    <button onClick={() => setOpenTab(2)} className="mt-6 bg-brand-900 text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-brand-800 transition-colors">
                      接受任务，前往实验室！
                    </button>
                  </div>
                </div>
                
                {/* 🌟 标签页 2：探索精灵实验室 */}
                <div className={openTab === 2 ? 'block' : 'hidden'}>
                  <div className="flex flex-col md:flex-row gap-6 bg-gray-50 rounded-xl h-[650px] p-2 md:p-4">
                    
                    {/* 左侧：2D 操作台 */}
                    <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 relative flex flex-col items-center justify-end pb-10 overflow-hidden">
                      <div className="absolute top-4 left-4 flex justify-between w-[90%] z-20">
                        <button onClick={resetExperiment} className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600 hover:bg-gray-200 shadow-sm transition-colors">
                          🔄 重新开始
                        </button>
                      </div>
                      
                      {/* 滴定管 */}
                      <div className="w-6 h-56 bg-gray-50 border-x-2 border-gray-300 absolute top-12 rounded-t-md overflow-hidden flex flex-col justify-end shadow-inner z-10">
                         <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_bottom,transparent_19px,#cbd5e1_1px)] bg-[size:100%_20px] opacity-50 pointer-events-none"></div>
                         <div className="w-full bg-purple-600 opacity-90" style={{height: `${100 - liquidVolume}%`, transition: 'height 0.4s ease-out'}}></div>
                      </div>
                      
                      {/* 锥形瓶 */}
                      <div className="relative w-40 h-52 border-b-4 border-x-4 border-gray-300 rounded-b-3xl overflow-hidden bg-white/60 z-20 shadow-xl flex flex-col justify-end">
                        <div className={`w-full transition-colors duration-700 ease-in-out ${liquidColor}`} style={{ height: `${liquidVolume}%` }}>
                          <div className="w-full h-3 bg-white/30 animate-pulse"></div>
                        </div>
                      </div>

                      {/* 交互面板 */}
                      <div className="mt-10 flex gap-4 z-20">
                        <button onClick={handleAddAcid} disabled={hasAcid} className={`px-6 py-3 rounded-xl font-bold text-white shadow-lg transition-all active:scale-95 ${hasAcid ? 'bg-gray-300 cursor-not-allowed text-gray-500' : 'bg-blue-500 hover:bg-blue-600 hover:-translate-y-1'}`}>
                          滴加 稀硫酸
                        </button>
                        <button onClick={handleAddDrop} className="px-6 py-3 rounded-xl font-bold text-white bg-purple-600 hover:bg-purple-700 shadow-lg transition-all active:scale-95 flex items-center gap-2 hover:-translate-y-1">
                          <FontAwesomeIcon icon={faTint} /> 滴加 KMnO₄
                        </button>
                      </div>
                    </div>

                    {/* 右侧：探索精灵对话框 */}
                    <div className="w-full md:w-[40%] bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden">
                      <div className="p-4 bg-brand-900 text-white font-bold flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white text-brand-900 flex items-center justify-center text-2xl shadow-inner">🧚‍♂️</div> 
                        <span className="tracking-wide text-lg">探索精灵</span>
                      </div>
                      
                      {/* 聊天记录 */}
                      <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-5 bg-[#f8fafc]">
                        {aiMessages.map((msg, idx) => (
                          <div key={idx} className={`flex ${msg.role === 'ai' ? 'justify-start' : 'justify-end'}`}>
                            {msg.role === 'ai' && (
                              <div className="text-2xl mr-2 mt-1 drop-shadow-sm">🧚‍♂️</div>
                            )}
                            <div className={`max-w-[85%] p-4 rounded-2xl text-[15px] leading-relaxed shadow-sm ${msg.role === 'ai' ? 'bg-white border border-gray-100 text-gray-700 rounded-tl-none' : 'bg-brand-100 text-brand-900 rounded-tr-none font-medium'}`}>
                              {msg.text.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                  {line}
                                  {i !== msg.text.split('\n').length - 1 && <br />}
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

                {/* 📊 标签页 3：保留原本的观察组件位置，我们下一步改造它 */}
                <div className={openTab === 3 ? 'block' : 'hidden'}>
                  <CheObservationTemplate />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheSimulationTemplate;
