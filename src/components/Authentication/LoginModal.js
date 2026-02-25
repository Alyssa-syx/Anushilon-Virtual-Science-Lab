import {
  faMobileAlt,
  faShieldAlt,
  faUniversity,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import Slide from 'react-reveal/Slide';
import { useHistory, useLocation } from 'react-router-dom';
import { ModalContext } from '../../App';
import Institution from '../../data/Institution';
import { authenticate } from '../../helpers/auth';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';
import RegistrationModal from './RegistrationModal';

const LoginModal = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { from } = location.state || { from: { pathname: '/' } };
  const modalData = useContext(ModalContext);
  // initial states
  const [institutionUser, setInstitutionUser] = useState(null);
  const [institutionName, setInstitutionName] = useState(null);
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [institutionList, setInstitutionList] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [countdown, setCountdown] = useState(0);

  // show notification
  useEffect(() => {
    modalData.newUser &&
      toast(
        `请先「独立注册」以使用完整功能！😊`,
        {
          icon: '🙏',
          position: 'bottom-left',
        }
      );
  }, [modalData.newUser]);

  // search institution name
  useEffect(() => {
    searchValue === ''
      ? setInstitutionList(Institution)
      : setInstitutionList(
          Institution.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        );
  }, [searchValue]);

  // all modal handlers
  const handleCloseLoginModal = () => {
    modalData.setShowHeader('block');
    modalData.setShowLoginModal(false);
  };

  const handleSearchBox = () => {
    setShowSearchBox(true);
  };

  const institutionFilterChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleOpenRegistrationModal = () => {
    modalData.setShowHeader('hidden');
    modalData.setShowRegistrationModal(true);
  };

  const handleSetInstitution = (value) => {
    setInstitutionUser(true);
    setInstitutionName(value);
    handleOpenRegistrationModal();
  };

  const handleRegistrationModal = () => {
    setInstitutionUser(false);
    handleOpenRegistrationModal();
  };

  // login form data states
  const [formData, setFormData] = useState({
    phone: '',
    verificationCode: '',
    textChange: '验证身份',
  });
  const { phone, verificationCode, textChange } = formData;
  // login form data handler
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };

  // countdown timer for "获取验证码" button
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // 获取验证码（模拟）
  const handleGetVerificationCode = () => {
    if (!phone || phone.length < 11) {
      toast.error('请输入正确的手机号！');
      return;
    }
    if (countdown > 0) return;
    setCountdown(60);
    toast.success('验证码已发送至您的手机');
  };

  // 模拟登录：手机号+验证码不为空即登录成功
  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone && verificationCode) {
      setFormData({ ...formData, textChange: '验证中' });

      // 模拟登录成功，构造假 token 和 user
      const mockToken = `mock_token_${Date.now()}`;
      const mockUser = {
        _id: `mock_${Date.now()}`,
        name: `用户${phone.slice(-4)}`,
        email: `${phone}@mock.local`,
        role: 'user',
      };
      const mockResponse = { data: { token: mockToken, user: mockUser } };

      authenticate(mockResponse, () => {
        dispatch({
          type: GLOBALTYPES.AUTH,
          payload: { token: mockToken, user: mockUser },
        });
        localStorage.setItem('jwtToken', mockToken);
        setFormData({
          phone: '',
          verificationCode: '',
          textChange: '验证身份',
        });
        handleCloseLoginModal();
        history.replace(from);
        toast.success(`你好，${mockUser.name}！欢迎回来 ❤️`);
      });
    } else {
      toast.error('请填写手机号和验证码！😒');
    }
  };

  return (
    <Fragment>
      {!modalData.showRegistrationModal && (
        <div>
          <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-filter saturate-150 backdrop-blur-sm">
            <div
              className={`relative w-full mt-12 mb-24 sm:mb-4 ${
                !modalData.newUser ? 'lg:mt-8 2xl:mt-10' : 'lg:mt-4 2xl:mt-6'
              } flex max-w-sm md:max-w-lg lg:max-w-4xl 2xl:max-w-5xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl`}
            >
              {/* Left Side Animations */}
              <div className="hidden lg:block lg:w-1/2 bg-brand-900">
                {!modalData.newUser ? (
                  <img
                    src="https://cdn.dribbble.com/users/535360/screenshots/2583480/scientists_2.gif"
                    alt="login-loader"
                    className="min-h-auto md:min-h-full bg-cover bg-no-repeat bg-center"
                  />
                ) : (
                  <img
                    src="https://i.ibb.co/GWdPsJ9/signIn.gif"
                    alt="signIn-loader"
                    className="min-h-auto md:min-h-full bg-cover bg-no-repeat bg-center"
                  />
                )}
              </div>
              {/* Right Side Forms */}
              <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                {/* Close Button */}
                <button
                  className="close-button absolute top-0 right-0 m-7"
                  type="button"
                  onClick={handleCloseLoginModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-circle-x"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M10 10l4 4m0 -4l-4 4" />
                  </svg>
                </button>

                {!modalData.newUser ? (
                  // Login Form - 手机号 + 验证码
                  <Fragment>
                    {/* LogIn Header */}
                    <div>
                      <h2 className="text-2xl ml-4 mb-2 font-display text-center font-bold text-brand-900">
                        AI虚拟科学实验室
                      </h2>
                      <p className="text-lg font-body text-center text-gray-600 ">
                        欢迎回来！
                      </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <Slide bottom>
                        {/* 手机号输入框 */}
                        <div className="mt-4 font-body">
                          <label
                            className="block mb-2 text-base font-medium text-gray-700"
                            htmlFor="LoggingPhone"
                          >
                            手机号
                          </label>
                          <div className="relative flex w-full flex-wrap items-stretch mb-3">
                            <span className="login-icon">
                              <FontAwesomeIcon
                                icon={faMobileAlt}
                                className="text-gray-500"
                              />
                            </span>
                            <input
                              id="LoggingPhone"
                              name="phone"
                              type="tel"
                              className="login-input"
                              placeholder="请输入手机号"
                              maxLength={11}
                              onChange={handleChange('phone')}
                              value={phone}
                            />
                          </div>
                        </div>

                        {/* 验证码输入框 + 获取验证码按钮 */}
                        <div className="mt-4 font-body">
                          <label
                            className="block mb-2 text-base font-medium text-gray-700"
                            htmlFor="loggingVerificationCode"
                          >
                            验证码
                          </label>
                          <div className="relative flex w-full items-stretch gap-2">
                            <div className="flex-1 relative flex flex-wrap items-stretch">
                              <span className="login-icon">
                                <FontAwesomeIcon
                                  icon={faShieldAlt}
                                  className="text-gray-500"
                                />
                              </span>
                              <input
                                id="loggingVerificationCode"
                                name="verificationCode"
                                type="text"
                                className="login-input pr-2"
                                placeholder="请输入验证码"
                                onChange={handleChange('verificationCode')}
                                value={verificationCode}
                              />
                            </div>
                            <button
                              type="button"
                              onClick={handleGetVerificationCode}
                              disabled={countdown > 0}
                              className="px-4 py-2.5 min-w-[110px] font-semibold font-body text-sm text-brand-900 bg-gray-100 border border-gray-200 rounded-lg hover:bg-deep-purple-50 hover:border-brand-900 hover:text-deep-purple-accent-700 focus:outline-none focus:ring-2 focus:ring-brand-900 focus:ring-offset-1 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                            >
                              {countdown > 0 ? `${countdown}s 后重发` : '获取验证码'}
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <button
                            className="w-full px-4 py-2 font-semibold font-body text-base tracking-wide text-gray-50 focus-within:transition-colors duration-200 bg-brand-900 rounded hover:bg-deep-purple-accent-700 focus:outline-none focus:bg-deep-purple-900"
                            type="submit"
                          >
                            {textChange}
                          </button>
                        </div>
                      </Slide>
                    </form>

                    <Slide bottom>
                      <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b md:w-1/4" />
                        <span
                          className="text-base text-brand-900 font-semibold font-body uppercase cursor-pointer hover:text-deep-purple-accent-700"
                          onClick={() => modalData.setNewUser(true)}
                        >
                          或立即注册
                        </span>
                        <span className="w-1/5 border-b md:w-1/4" />
                      </div>
                    </Slide>
                  </Fragment>
                ) : (
                  // Registration Form
                  <Fragment>
                    <Slide bottom>
                      <div>
                        {/* Registration Header*/}
                        <h2 className="text-2xl ml-4 mb-2 font-display text-center font-bold text-brand-900">
                          AI虚拟科学实验室
                        </h2>
                        <p className="text-lg font-body text-center text-gray-600 ">
                          新用户注册
                        </p>
                      </div>

                      <div className="mt-3 mb-0 font-body flex flex-wrap justify-center items-center">
                        <label className="inline-flex items-center">
                          <span className="text-lg text-brand-900 font-body mr-3 font-medium">
                            通过学校/机构注册
                          </span>
                        </label>
                      </div>

                      <div className="mt-5 font-body">
                        <label
                          className="block mb-2 text-base font-medium text-gray-700"
                          htmlFor="SearchInstitutionName"
                        >
                          学校/机构名称
                        </label>
                        <div className="relative flex w-full flex-wrap items-stretch mb-3">
                          <span className="login-icon">
                            <FontAwesomeIcon
                              icon={faUniversity}
                              className="text-gray-500"
                            />
                          </span>
                          <input
                            id="SearchInstitutionName"
                            type="text"
                            className="login-input"
                            onChange={institutionFilterChange}
                            onFocus={handleSearchBox}
                            placeholder="输入学校/机构名称"
                          />
                        </div>
                      </div>
                    </Slide>
                    {/* Show Search Box */}
                    {showSearchBox ? (
                      <div className="inline-flex flex-col justify-center relative text-gray-600 font-body w-full">
                        <h3 className="mt-2 text-sm">搜索结果：</h3>
                        <ul className="bg-white border border-gray-100  overflow-y-scroll h-48 mt-2 ">
                          {/* If not found any Institution */}
                          {institutionList.length === 0 && (
                            <li className="pl-2 pr-2 py-2 border-b-2 border-gray-100 relative hover:bg-indigo-50 hover:text-gray-900">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 inline mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
                                />
                              </svg>
                              未找到匹配的学校/机构！
                            </li>
                          )}

                          {/* If Institution Found */}
                          {institutionList &&
                            institutionList.map((item, index) => (
                              <li
                                className="pl-2 pr-2 py-2 border-b-2 border-gray-100 relative cursor-pointer hover:bg-indigo-50 hover:text-gray-900"
                                key={index}
                                onClick={() => handleSetInstitution(item.name)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6 inline mr-2 text-gray-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                  />
                                </svg>
                                {item.name}
                              </li>
                            ))}
                        </ul>
                      </div>
                    ) : (
                      // Hide Search Box
                      <div className="inline-flex flex-col justify-center relative text-gray-600 font-body bg-gray-100 rounded-lg px-3 py-4 mt-3">
                        <Slide bottom cascade>
                          <div>
                            <p className="pl-2 pr-2 py-2 border-b-2 border-gray-100 relative ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 inline mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                />
                              </svg>
                              搜索并选择学校/机构注册，学校可查看你的学习数据，
                              你也可享受机构提供的各项权益。
                            </p>
                          </div>
                          <div>
                            <p className="pl-2 pr-2 py-2.5 border-gray-100 relative ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 inline mr-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                              </svg>
                              你也可以选择独立注册，享受全部功能。
                            </p>
                          </div>
                        </Slide>
                      </div>
                    )}

                    <Slide bottom>
                      {/* Registration for Individual  */}
                      <div className="flex items-center justify-between mt-6">
                        <span className="w-1/6 border-b " />
                        <span className="text-base lg:textlg text-gray-700 font-body mx-3 font-medium">
                          或独立注册
                        </span>
                        <span className="w-1/6 border-b " />
                      </div>

                      <div className="mt-5">
                        <button
                          className="w-full px-4 py-2 font-semibold font-body text-base tracking-wide text-gray-50 focus-within:transition-colors duration-200 bg-brand-900 rounded hover:bg-deep-purple-accent-700 focus:outline-none focus:bg-deep-purple-900"
                          onClick={handleRegistrationModal}
                        >
                          独立注册
                        </button>
                      </div>
                    </Slide>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
          {/* Background Modal Opacity */}
          <div className="opacity-25 fixed inset-0 z-40 bg-brand-900" />
        </div>
      )}

      {/* Login Modal Component */}
      {modalData.showRegistrationModal ? (
        <RegistrationModal
          institutionUser={institutionUser}
          institutionName={institutionName}
        />
      ) : null}
    </Fragment>
  );
};

export default LoginModal;
