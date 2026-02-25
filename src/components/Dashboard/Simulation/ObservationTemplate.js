import {
  faChartLine,
  faClipboardCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import { useReactToPrint } from 'react-to-print';
import Image20 from '../../../assets/images/simulation/phy/12/01/MeterBridgePro5.png';
import Image21 from '../../../assets/images/simulation/phy/12/01/MeterBridgePro6.png';
import Image22 from '../../../assets/images/simulation/phy/12/01/MeterBridgePro7.png';
import Image23 from '../../../assets/images/simulation/phy/12/01/MeterBridgePro8.png';
import { DataTable1, DataTable2 } from '../../../data/phy121Observation';
import GraphTemplate from './GraphTemplate';

// Table 1 Header for mobile device
const tableHeader1 = [];

for (let i = 1; i <= 5; i++) {
  tableHeader1.push(
    <tr
      className="bg-indigo-50 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-6 sm:mb-0 text-base"
      key={i}
    >
      <th className="observation-table-header">观测序号</th>
      <th className="observation-table-header">电阻 R (Ω)</th>
      <th className="observation-table-header">
        平衡长度 AB = l (cm)
      </th>
      <th className="observation-table-header">长度 BC = (100-l) (cm)</th>
      <th className="observation-table-header sm:w-32">
        <img
          src={Image20}
          alt="observation"
          className="inline pr-1 w-6/12 sm:w-full"
        />
        (Ω)
      </th>
      <th className="observation-table-header">
        平衡长度 A'B' = l' (cm)
      </th>
      <th className="observation-table-header">
        长度 B'C' = (100-l') (cm)
      </th>
      <th className="observation-table-header sm:w-32">
        <img
          src={Image21}
          alt="observation"
          className="inline  pr-1 w-6/12 sm:w-full"
        />
        (Ω)
      </th>
      <th className="observation-table-header  sm:border-0  sm:w-32">
        平均{' '}
        <img
          src={Image22}
          alt="observation"
          className="inline pr-1 w-6/12 sm:w-4/5"
        />{' '}
        (Ω)
      </th>
    </tr>
  );
}

// Table 2 Header for mobile device
const tableHeader2 = [];

for (let i = 1; i <= 5; i++) {
  tableHeader2.push(
    <tr
      className="bg-indigo-50 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-6 sm:mb-0 text-base w-56 sm:w-full"
      key={i}
    >
      <th className="observation-table-header">观测序号</th>
      <th className="observation-table-header">主尺读数 PSR (mm)</th>
      <th className="observation-table-header">游标读数 HSR (a) (mm)</th>
      <th className="observation-table-header">修正 HSR (a+Z) (mm)</th>
      <th className="observation-table-header">修正 HSR × LC (mm)</th>
      <th className="observation-table-header sm:border-0">
        总读数 d = PSR + (修正 HSR × LC) (mm)
      </th>
    </tr>
  );
}

const ObservationTemplate = () => {
  const { auth } = useSelector((state) => state);

  const [showModal, setShowModal] = useState(false);
  const [showChart, setShowChart] = useState(false);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  document.title = `用米桥法测定导线相对电阻 - ${auth.user.name}`;

  return (
    <React.Fragment>
      <form>
        <div
          ref={componentRef}
          className="flex flex-wrap text-lg font-body text-gray-900 leading-relaxed tracking-wide px-4 py-5"
        >
          <div className="mb-2 w-full">
            <h2 className="font-semibold"> 观察记录：</h2>
            <p> 测定给定导线的电阻：</p>
          </div>
          {/* Table 1*/}
          <div className="flex items-center justify-center">
            <div className="container">
              <div className="hidden sm:block">
                <table className="w-full flex flex-row flex-no-wrap table-auto sm:bg-white rounded-lg overflow-hidden sm:shadow-4xl mt-3 -mb-3">
                  {/* Table 1 Title */}
                  <thead className="text-gray-800 ">
                    <tr className="bg-indigo-50 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                      <th className="p-3 w-32" />
                      <th className="p-3 w-16" />
                      <th
                        className="p-3 text-center border-brand-700 border-l border-r"
                        colSpan="3"
                      >
                        左槽电阻丝
                      </th>
                      <th
                        className="p-3 text-center border-brand-700 border-l border-r"
                        colSpan="3"
                      >
                        右槽电阻丝
                      </th>
                      <th className="p-3 w-32" />
                    </tr>
                  </thead>
                </table>
              </div>
              {/* Table 1 Start */}
              <table className="w-full flex flex-row flex-no-wrap table-auto sm:bg-white rounded-lg overflow-hidden sm:shadow-4xl mb-5 mt-3">
                <thead className="text-brand-900 font-body">
                  {tableHeader1}
                </thead>
                {/* Table Row Data */}
                <tbody className="flex-1 sm:flex-none">
                  {DataTable1 &&
                    DataTable1.map((data) => (
                      <tr
                        className="flex flex-col flex-no wrap sm:table-row mb-7 sm:mb-0 text-base tracking-wider"
                        key={data.id}
                      >
                        <td className="observation-table-data p-2.5 sm:p-3 text-center font-display font-bold text-base">
                          {data.id}
                        </td>
                        <td className="observation-table-data p-2.5 sm:p-3">
                          <input
                            name={data.name1}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput1}
                            defaultValue={data.input1}
                            required={
                              data.id === '1' ||
                              data.id === '2' ||
                              data.id === '3'
                                ? true
                                : false
                            }
                          />
                        </td>
                        <td className="observation-table-data p-2 sm:p-3">
                          <input
                            name={data.name2}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput2}
                            defaultValue={data.input2}
                            required={
                              data.id === '1' ||
                              data.id === '2' ||
                              data.id === '3'
                                ? true
                                : false
                            }
                          />
                        </td>
                        <td className="observation-table-data p-2 sm:p-3">
                          <input
                            name={data.name3}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput3}
                            defaultValue={data.input3}
                            required={
                              data.id === '1' ||
                              data.id === '2' ||
                              data.id === '3'
                                ? true
                                : false
                            }
                          />
                        </td>
                        <td className="observation-table-data p-2.5 sm:p-3">
                          <input
                            name={data.name4}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput4}
                            defaultValue={data.input4}
                            required={
                              data.id === '1' ||
                              data.id === '2' ||
                              data.id === '3'
                                ? true
                                : false
                            }
                          />
                        </td>
                        <td className="observation-table-data p-2 sm:p-3">
                          <input
                            name={data.name5}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput5}
                            defaultValue={data.input5}
                            required={
                              data.id === '1' ||
                              data.id === '2' ||
                              data.id === '3'
                                ? true
                                : false
                            }
                          />
                        </td>
                        <td className="observation-table-data p-2 sm:p-3">
                          <input
                            name={data.name6}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput6}
                            defaultValue={data.input6}
                            required={
                              data.id === '1' ||
                              data.id === '2' ||
                              data.id === '3'
                                ? true
                                : false
                            }
                          />
                        </td>
                        <td className="observation-table-data p-2.5 sm:p-3">
                          <input
                            name={data.name7}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput7}
                            defaultValue={data.input7}
                            required={
                              data.id === '1' ||
                              data.id === '2' ||
                              data.id === '3'
                                ? true
                                : false
                            }
                          />
                        </td>
                        <td className="observation-table-data p-2.5 sm:p-3">
                          <input
                            name={data.name8}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput8}
                            defaultValue={data.input8}
                            required={
                              data.id === '1' ||
                              data.id === '2' ||
                              data.id === '3'
                                ? true
                                : false
                            }
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Observation Result 1*/}
          <div className="font-body">
            {' '}
            <p className="py-4 px-5">
              平均电阻 X ={' '}
              <input
                name="X-resistance"
                type="number"
                className="observation-result-input "
                placeholder="4.83"
                defaultValue=""
                required
              />{' '}
              Ω
            </p>
            <p className="font-semibold px-5 py-1">
              测定导线直径：
            </p>
            <p className="py-2 px-5">
              螺旋测微器最小刻度 (LC) ={' '}
              <input
                name="LC-resistance"
                type="number"
                className="observation-result-input "
                placeholder="43.35"
                defaultValue=""
                required
              />{' '}
              mm
            </p>
            <p className="py-2 px-5">
              螺旋测微器零误差 (Z) ={' '}
              <input
                name="Z-resistance"
                type="number"
                className="observation-result-input "
                placeholder="17.26"
                defaultValue=""
                required
              />{' '}
              mm
            </p>
          </div>

          {/* Table 2 */}
          <div className="flex items-center justify-center">
            <div className="container">
              {/* Table 2 Start */}
              <table className="w-full flex flex-row flex-no-wrap table-auto sm:bg-white rounded-lg overflow-hidden sm:shadow-4xl mb-5 mt-8">
                <thead className="text-brand-900 font-body">
                  {tableHeader2}
                </thead>
                {/* Table Row Data */}
                <tbody className="flex-1 sm:flex-none">
                  {DataTable2 &&
                    DataTable2.map((data) => (
                      <tr
                        className="flex flex-col flex-no wrap sm:table-row mt-1 mb-7 sm:mt-0 sm:mb-0 text-base tracking-wider"
                        key={data.id}
                      >
                        <td className="observation-table-data p-2.5 sm:p-3 text-center font-display font-bold text-base">
                          {data.id}
                        </td>
                        <td className="observation-table-data p-2.5 sm:p-3">
                          <input
                            name={data.name11}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput11}
                            defaultValue={data.input11}
                            required={
                              data.id === '1' ||
                              data.id === '2' ||
                              data.id === '3'
                                ? true
                                : false
                            }
                          />
                        </td>
                        <td className="observation-table-data p-2 sm:p-3">
                          <input
                            name={data.name22}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput22}
                            defaultValue={data.input22}
                            required={
                              data.id === '1' ||
                              data.id === '2' ||
                              data.id === '3'
                                ? true
                                : false
                            }
                          />
                        </td>
                        <td className="observation-table-data p-2 sm:p-3">
                          <input
                            name={data.name33}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput33}
                            defaultValue={data.input33}
                            required={
                              data.id === '1' ||
                              data.id === '2' ||
                              data.id === '3'
                                ? true
                                : false
                            }
                          />
                        </td>
                        <td className="observation-table-data p-2 sm:p-3">
                          <input
                            name={data.name44}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput44}
                            defaultValue={data.input44}
                            required={
                              data.id === '1' ||
                              data.id === '2' ||
                              data.id === '3'
                                ? true
                                : false
                            }
                          />
                        </td>
                        <td className="observation-table-data px-2.5 py-3.5 sm:p-3">
                          <input
                            name={data.name55}
                            type="number"
                            className="observation-table-input"
                            placeholder={data.placeInput55}
                            defaultValue={data.input55}
                            required={
                              data.id === '1' ||
                              data.id === '2' ||
                              data.id === '3'
                                ? true
                                : false
                            }
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Observation Result 2 */}
          <div className="font-body mb-2">
            <p className="py-4 px-5">
              平均 d ={' '}
              <input
                name="d-resistance"
                type="number"
                className="observation-result-input "
                placeholder="9.83"
                defaultValue=""
                required
              />{' '}
              mm
            </p>
            <p className="font-semibold px-5 py-1">计算：</p>
            <p className="py-2 px-5">
              导线直径 d ={' '}
              <input
                name="mean-d-resistance"
                type="number"
                className="observation-result-input "
                placeholder="9.79"
                defaultValue=""
                required
              />{' '}
              mm
            </p>
            <p className="py-3 px-5">
              导线半径 r ={' '}
              <input
                name="r-resistance"
                type="number"
                className="observation-result-input "
                placeholder="17.26"
                defaultValue=""
                required
              />{' '}
              d/2
            </p>
            <div className="ml-28">
              <p className="py-2 px-5">
                ={' '}
                <input
                  name="r1-resistance"
                  type="number"
                  className="observation-result-input "
                  placeholder="8.45"
                  defaultValue=""
                  required
                />{' '}
                mm
              </p>
              <p className="py-2 px-5">
                ={' '}
                <input
                  name="r2-resistance"
                  type="number"
                  className="observation-result-input "
                  placeholder="0.0084"
                  defaultValue=""
                  required
                />{' '}
                10<sup>-3 </sup>m
              </p>
            </div>
            <p className="py-3 px-6">
              导线长度 L ={' '}
              <input
                name="L-resistance"
                type="number"
                className="observation-result-input "
                placeholder="56.34"
                defaultValue=""
                required
              />{' '}
              cm
            </p>
            <div className="ml-28">
              <p className="py-2 px-3">
                ={' '}
                <input
                  name="L2-resistance"
                  type="number"
                  className="observation-result-input "
                  placeholder="0.00563"
                  defaultValue=""
                  required
                />{' '}
                10<sup>-2 </sup>m
              </p>
            </div>
            <p className="py-4 px-5">
              平均电阻 X ={' '}
              <input
                name="X-main-resistance"
                type="number"
                className="observation-result-input "
                placeholder="4.83"
                defaultValue=""
                required
              />{' '}
              Ω
            </p>
            <p className="py-4 px-5">
              电阻率（比电阻）
              <span className="ml-28 block">
                <img src={Image23} alt="observation-result" className="py-4" />{' '}
                ={' '}
                <input
                  name="X-specific-resistance"
                  type="number"
                  className="observation-result-input "
                  placeholder="5.67"
                  defaultValue=""
                  required
                />{' '}
                Ω
              </span>
            </p>
            <p className="font-semibold px-5 py-2">结果：</p>
            <p className="py-3 px-5">
              导线未知电阻 X ={' '}
              <input
                name="x-result-resistance"
                type="number"
                className="observation-result-input "
                placeholder="4.69"
                defaultValue=""
                required
              />{' '}
              Ω
            </p>
            <p className="py-3 px-5">
              导线电阻率 ρ ={' '}
              <input
                name="x-result-resistance"
                type="number"
                className="observation-result-input "
                placeholder="5.19"
                defaultValue=""
                required
              />{' '}
              Ω m
            </p>
          </div>
        </div>
        {/* Buttons */}
        <div className="w-full flex flex-row justify-center sm:justify-end flex-no-wrap mt-4 sm:mt-0 mb-10 font-body ">
          <button
            className="dashboard-button"
            type="submit"
            onClick={() => setShowModal(true)}
          >
            <FontAwesomeIcon icon={faClipboardCheck} className="mr-2" /> 提交
          </button>
          <button
            className="dashboard-button"
            type="submit"
            onClick={() => setShowChart(true)}
          >
            <FontAwesomeIcon icon={faChartLine} className="mr-2" />
            查看图表
          </button>
        </div>
      </form>

      {/* Show Success Modal */}
      {showModal ? (
        <div>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-64 sm:w-96 m-auto">
                <div className="w-full h-full text-center">
                  <div className="flex h-full flex-col justify-between">
                    <Fade top>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 mt-4 m-auto text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                          />
                        </svg>
                      </div>
                      <p className="font-body text-brand-900 dark:text-gray-100 text-lg py-5 px-12">
                        你的实验数据已保存。
                      </p>
                      <div className="flex items-center justify-center gap-4 w-1/2 mt-2 mb-5 mx-auto">
                        <button
                          type="button"
                          className="py-2 px-4 bg-dark-brand-900 hover:bg-brand-900 focus:ring-indigo-800 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-body font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                          onClick={handlePrint}
                        >
                          下载
                        </button>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-30 fixed inset-0 z-40 bg-black" />
        </div>
      ) : null}

      {/* Show Chart Modal */}
      {showChart ? (
        <div>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-filter saturate-150 backdrop-blur-sm"
            onClick={() => setShowChart(false)}
          >
            <div className="relative w-auto my-6 mx-auto">
              {/*content*/}
              <GraphTemplate />
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default ObservationTemplate;
