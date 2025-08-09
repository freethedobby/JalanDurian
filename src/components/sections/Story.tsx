'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Globe, Award } from 'lucide-react'
import { ScrollArrow } from '../ScrollArrow'
import { Card, CardContent } from '../ui/card'
import {
  useInViewMotion,
  fadeInVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from '../../hooks/useInViewMotion'

export default function Story() {
  const { ref, isInView } = useInViewMotion()

  return (
    <section
      id="story"
      className="section-padding"
      style={{ backgroundColor: '#eec32f' }}
      ref={ref}
    >
      <motion.div
        className="container-custom"
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div className="mb-16 text-center" variants={fadeInVariants}>
          <h2 className="mb-6 text-3xl font-bold text-black md:text-4xl lg:text-5xl">
            OUR HERITAGE
          </h2>
          <p className="mx-auto max-w-4xl text-lg font-medium leading-relaxed text-gray-800 md:text-xl">
            말레이시아를 사랑하는 마음으로, 10년 이상의 현지 거주 경험을
            바탕으로
            <br />
            두리안을 통해 말레이시아와 한국을 연결하고자 합니다.
          </p>
        </motion.div>

        {/* Company Message */}
        <motion.div className="mb-16" variants={staggerItemVariants}>
          <Card className="mx-auto max-w-4xl border-black/20 bg-black/10 shadow-xl backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <motion.div
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-emerald-700"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Heart className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="mb-6 text-2xl font-bold text-black md:text-3xl">
                  LEE&PARK 대표 메시지
                </h3>

                <blockquote className="text-center">
                  <p className="mb-6 text-lg leading-relaxed text-gray-800 md:text-xl">
                    "말레이시아에서 10년 이상 거주하며 이 나라의 문화와 사람들을
                    깊이 사랑하게 되었습니다. 두리안이라는 특별한 과일을 통해
                    말레이시아의 아름다운 문화를 한국에 전파하고 싶습니다."
                  </p>
                  <p className="mb-6 text-lg leading-relaxed text-gray-800 md:text-xl">
                    "두리안을 사랑하는 만큼, 두리안으로 말레이시아와 한국을
                    연결하는 다리 역할을 하고자 합니다. 추천하지 않는 것, 내
                    입맛에 맞지 않는 것은 절대 팔지 않습니다."
                  </p>
                  <p className="text-lg font-semibold text-emerald-700 md:text-xl">
                    "Black Thorn D200의 헤어나올 수 없는 맛을 통해, 우리나라에서
                    감히 맛보기 힘든 진정한 말레이시아를 선물하고 싶습니다."
                  </p>
                </blockquote>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="mb-16 grid gap-6 md:grid-cols-3"
          variants={staggerContainerVariants}
        >
          <motion.div variants={staggerItemVariants}>
            <Card className="h-full border-black/20 bg-black/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/10">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h4 className="mb-3 text-lg font-semibold text-black">
                  말레이시아 사랑
                </h4>
                <p className="text-sm text-gray-700">
                  10년 이상의 현지 거주 경험으로 말레이시아 문화에 대한 깊은
                  애정과 이해
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={staggerItemVariants}>
            <Card className="h-full border-black/20 bg-black/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/10">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h4 className="mb-3 text-lg font-semibold text-black">
                  문화 연결
                </h4>
                <p className="text-sm text-gray-700">
                  두리안을 통해 말레이시아와 한국 사이의 문화적 가교 역할 추구
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={staggerItemVariants}>
            <Card className="h-full border-black/20 bg-black/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/10">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h4 className="mb-3 text-lg font-semibold text-black">
                  품질 철학
                </h4>
                <p className="text-sm text-gray-700">
                  직접 맛보고 인정한 최고급 품질만을 고객에게 전달하는 철저한
                  원칙
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Exclusive Partner Farm - Simple */}
        <motion.div className="mb-16" variants={staggerItemVariants}>
          <Card className="mx-auto max-w-2xl border-black/20 bg-black/10 shadow-lg backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-emerald-700">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h4 className="mb-4 text-xl font-semibold text-black">
                Exclusive 파트너 농장
              </h4>
              <p className="text-base text-gray-800">
                말레이시아 프리미엄 농장과의 독점 파트너십을 통해 최상급 Black
                Thorn 두리안만을 선별하여 공급받습니다.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* 스크롤 화살표 */}
      <ScrollArrow targetId="tiers" backgroundColor="yellow" className="pb-8" />
    </section>
  )
}
