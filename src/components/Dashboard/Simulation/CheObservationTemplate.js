import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faStar, faBrain, faEye, faHandSparkles, faRedo, faVial, faPalette, faTint, faSpinner } from '@fortawesome/free-solid-svg-icons';

const CheObservationTemplate = () => {
  const [stepAcid, setStepAcid] = useState('');
  const [endColor, setEndColor] = useState('');
  const [volume, setVolume] = useState('');
  const [apiKey, setApiKey] = useState(''); // 临时存放你的 API Key
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [report, setReport] = useState(null);

  // 🧠 真实调用大模型 API
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!apiKey) {
      alert("请先在下方输入你的 Gemini API Key 才能唤醒精灵哦！");
      return;
    }
    const val = parseFloat(volume);
    if (isNaN(val)) return;

    setIsAnalyzing(true);
    
    // 🎭 Prompt Engineering (提示词工程)：定义 AI 人设和打分规则
    const prompt = `
    你是一个面向中小学生的化学实验AI导师“探索精灵”。
    学生刚刚完成了“高锰酸钾滴定检测地下水铁锈”的虚拟实验。
    学生的汇报数据如下：
    1. 是否加了稀硫酸：${stepAcid === 'yes' ? '是' : '否'}
    2. 观察到的终点颜色：${endColor === 'pink' ? '淡淡的粉红色' : endColor === 'brown' ? '棕褐色浑浊沉淀' : '极其浓烈的深紫红色'}
    3. 消耗的高锰酸钾体积：${val} mL。

    正确的实验逻辑是：必须加酸；终点颜色是淡淡的粉红；消耗体积如果在20-25mL之间算非常精准。
    请根据他的表现，用充满童趣、鼓励或温和纠正的口吻写一段点评（约80字）。
    并对他的“微观洞察力”(insight)、“湿实验操作”(operation)、“科学推理逻辑”(logic)打分（10到100的整数）。

    你必须严格输出 JSON 格式（不要包含任何 Markdown 标记或额外说明）：
    {
      "feedback": "精灵的评语...",
      "stats": {
        "insight": 90,
        "operation": 80,
        "logic": 85
      }
    }
    `;

    try {
      // 发送网络请求给大模型
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { response_mime_type: "application/json" } // 强制大模型只吐出 JSON
        })
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message);
      }

      // 解析大模型返回的真实数据
      const resultText = data.candidates[0].content.parts[0].text;
      const resultJson = JSON.parse(resultText);

      setReport(resultJson);
      setIsSubmitted(true);
    } catch (error) {
      console.error("呼叫精灵失败:", error);
      alert("唤醒精灵失败啦！请检查 API Key 是否正确，或者网络是否能访问大模型服务。");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetReport = () => {
    setStepAcid('');
    setEndColor('');
    setVolume('');
    setIsSubmitted(false);
    setReport(null);
  };

  return (
    <div className="p-4 md:p-8 bg-white rounded-xl">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-brand-100 text-brand-900 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 shadow-sm">
          <FontAwesomeIcon icon={faClipboardCheck} />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">探索精灵 - 任务绝密日志</h2>
      </div>

      {/* 🔑 API Key 输入区 (仅用于本地 Demo 测试) */}
      {!isSubmitted && (
        <div className="max-w-xl mx-auto mb-6 bg-gray-50 p-4 rounded-xl border border-gray-200">
          <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">🔗 开发者调试：填入你的 API Key 唤醒大脑</label>
          <input 
            type="password" 
            value={apiKey} 
            onChange={(e) => setApiKey(e.target.value)} 
            placeholder="AIzaSy..." 
            className="w-full p-2 text-sm rounded border border-gray-300 focus:outline-none focus:border-brand-500"
          />
        </div>
      )}

      {!isSubmitted ? (
        /* 📝 多维表单 */
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 animate-fade-in-up">
          {/* 问题 1：操作步骤 */}
          <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
             <label className="block text-gray-800 font-bold mb-3 flex items-center gap-2"><FontAwesomeIcon icon={faVial} className="text-blue-500"/> 1. 在滴加 KMnO₄ 之前，你是否加了酸？</label>
             <div className="flex gap-4">
               <label className="flex-1 cursor-pointer">
                 <input type="radio" name="acid" value="yes" required onChange={(e) => setStepAcid(e.target.value)} className="peer sr-only" />
                 <div className="text-center p-3 rounded-xl border-2 border-gray-200 bg-white peer-checked:border-blue-500 peer-checked:bg-blue-100 peer-checked:text-blue-700 font-bold">是</div>
               </label>
               <label className="flex-1 cursor-pointer">
                 <input type="radio" name="acid" value="no" onChange={(e) => setStepAcid(e.target.value)} className="peer sr-only" />
                 <div className="text-center p-3 rounded-xl border-2 border-gray-200 bg-white peer-checked:border-red-500 peer-checked:bg-red-50 peer-checked:text-red-700 font-bold">否</div>
               </label>
             </div>
          </div>

          {/* 问题 2：现象观察 */}
          <div className="bg-purple-50 p-5 rounded-2xl border border-purple-100 shadow-sm">
             <label className="block text-gray-800 font-bold mb-3 flex items-center gap-2"><FontAwesomeIcon icon={faPalette} className="text-purple-500"/> 2. 滴定到达“终点”时，水样变成了什么颜色？</label>
             <select required value={endColor} onChange={(e) => setEndColor(e.target.value)} className="w-full p-3 rounded-xl border-2 border-purple-200 bg-white font-medium text-gray-700">
               <option value="" disabled>请选择...</option>
               <option value="pink">淡淡的粉红色（半分钟不褪色）</option>
               <option value="brown">棕褐色浑浊沉淀</option>
               <option value="purple">深紫红色</option>
             </select>
          </div>

          {/* 问题 3：数据记录 */}
          <div className="bg-green-50 p-5 rounded-2xl border border-green-100 shadow-sm">
             <label className="block text-gray-800 font-bold mb-3 flex items-center gap-2"><FontAwesomeIcon icon={faTint} className="text-green-500"/> 3. 最终消耗了多少 mL 的高锰酸钾？</label>
             <div className="flex items-center gap-3">
               <input type="number" step="0.1" required value={volume} onChange={(e) => setVolume(e.target.value)} className="w-full p-3 text-lg rounded-xl border-2 border-green-200 bg-white" />
               <span className="text-gray-600 font-bold">mL</span>
             </div>
          </div>

          <button disabled={isAnalyzing} type="submit" className={`w-full text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-lg ${isAnalyzing ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-900 hover:bg-brand-800 hover:-translate-y-1'}`}>
            {isAnalyzing ? <><FontAwesomeIcon icon={faSpinner} spin /> 探索精灵思考中...</> : <><FontAwesomeIcon icon={faStar} /> 提交给大模型分析</>}
          </button>
        </form>
      ) : (
        /* 📊 AI 诊断报告状态 */
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100 mb-6 relative shadow-sm">
             <div className="absolute -top-6 -left-6 text-5xl drop-shadow-md">🧚‍♂️</div>
             <h3 className="text-lg font-bold text-brand-900 mb-4 ml-6">大模型实时生成的专属评语：</h3>
             <p className="text-gray-800 leading-relaxed ml-6 font-medium">{report.feedback}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-5 text-center bg-gray-50 py-2 rounded-lg">大模型推算的科学雷达</h3>
            <div className="space-y-5 px-2">
              {[
                { label: '微观洞察力 (颜色判定)', icon: faEye, color: 'blue', value: report.stats.insight },
                { label: '湿实验操作 (步骤与用量)', icon: faHandSparkles, color: 'purple', value: report.stats.operation },
                { label: '科学推理逻辑', icon: faBrain, color: 'green', value: report.stats.logic },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-bold text-gray-600 flex items-center gap-2"><FontAwesomeIcon icon={stat.icon} className={`text-${stat.color}-500`}/> {stat.label}</span>
                    <span className={`text-sm font-bold text-${stat.color}-600`}>{stat.value}%</span>
                  </div>
                  <div className={`w-full bg-${stat.color}-100 rounded-full h-3 shadow-inner`}>
                    <div className={`bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 h-3 rounded-full transition-all duration-1000 ease-out`} style={{ width: `${stat.value}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button onClick={resetReport} className="text-gray-500 hover:text-brand-900 font-bold px-6 py-2 rounded-full border-2 border-transparent hover:border-gray-200 transition-all flex items-center justify-center gap-2 mx-auto">
              <FontAwesomeIcon icon={faRedo} /> 再试一次
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheObservationTemplate;
