import { motion } from "framer-motion";
import React from "react";
import Flip from "react-reveal/Flip";
import { Link } from "react-scroll";
import styled from "styled-components";
import WordsFading from "../MicroComponent/WordsFading";

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(99, 102, 241, 0.25) 0%,
    rgba(129, 140, 248, 0.15) 40%,
    rgba(30, 27, 75, 0.45) 100%
  );
  pointer-events: none;
`;

const TaglineWrapper = styled.div`
  position: relative;
  display: inline-block;
  min-width: 8em;
  min-height: 1.6em;
  text-align: center;
  line-height: 1.5;
  @media (max-width: 1023px) {
    min-width: 6.5em;
    min-height: 1.4em;
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-20 md:py-28 lg:py-32 overflow-hidden">
      <Overlay />
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div
          variants={item}
          className="flex flex-col items-center text-center"
        >
          {/* 主标题：置顶，避免与背景星球重叠 */}
          <motion.h1
            variants={item}
            className="hero-title text-white font-bold tracking-tight mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.2]"
          >
            AI 虚拟科学实验室
          </motion.h1>

          {/* 标签：趣味教学 / AI伴学，放在标题下方、副标题上方 */}
          <motion.div
            variants={item}
            className="hero-tag inline-flex items-center justify-center rounded-full border-2 border-amber-300/60 bg-amber-50/95 backdrop-blur-sm px-4 py-2 mb-6 md:mb-7 shadow-md"
          >
            <TaglineWrapper>
              <WordsFading variant="pill" />
            </TaglineWrapper>
          </motion.div>

          {/* 副标题 */}
          <motion.div
            variants={item}
            className="hero-subtitle text-indigo-50 text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-loose md:leading-loose space-y-3 mt-2 md:mt-3"
          >
            <p className="block">
              告别枯燥的课本，和 AI 探索精灵一起实验！
            </p>
            <p className="block">
              在安全的虚拟空间里自由试错，用互动点燃科学好奇心。
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div variants={item} className="mt-10 md:mt-12">
            <Flip top>
              <Link to="features" smooth={true} className="hero-cta">
                探索实验室
              </Link>
            </Flip>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
