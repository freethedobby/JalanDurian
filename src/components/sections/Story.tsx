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

        {/* Partnership Advantages */}
        <motion.div
          className="mb-16 grid gap-6 md:grid-cols-3"
          variants={staggerContainerVariants}
        >
          <motion.div variants={staggerItemVariants}>
            <Card className="h-full border-black/20 bg-black/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/10">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h4 className="mb-3 text-lg font-semibold text-black">
                  독점 계약 농장
                </h4>
                <p className="text-sm text-gray-700">
                  말레이시아 조호르바루 프리미엄 농장과의 독점 계약으로 최상급
                  Black Thorn만 확보
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
                  현지 품질 관리
                </h4>
                <p className="text-sm text-gray-700">
                  농장에서 직접 선별부터 포장까지 전 과정 관리, 한국 도착까지
                  콜드체인 유지
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={staggerItemVariants}>
            <Card className="h-full border-black/20 bg-black/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/10">
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h4 className="mb-3 text-lg font-semibold text-black">
                  3대째 농장 운영
                </h4>
                <p className="text-sm text-gray-700">
                  30년 이상 Black Thorn 재배 노하우를 가진 3대째 농장주와의 신뢰
                  관계
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Exclusive Partner Farm - Enhanced */}
        <motion.div className="mb-16" variants={staggerItemVariants}>
          <Card className="mx-auto max-w-4xl border-black/20 bg-black/10 shadow-xl backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-emerald-700">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-6 text-2xl font-bold text-black md:text-3xl">
                  EXCLUSIVE 파트너 농장
                </h3>
                <div className="space-y-4 text-left md:space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg bg-black/5 p-4">
                      <h5 className="mb-2 font-semibold text-emerald-700">
                        농장 위치
                      </h5>
                      <p className="text-sm text-gray-800">
                        말레이시아 조호르바루 고지대 프리미엄 농장
                      </p>
                    </div>
                    <div className="rounded-lg bg-black/5 p-4">
                      <h5 className="mb-2 font-semibold text-emerald-700">
                        재배 경력
                      </h5>
                      <p className="text-sm text-gray-800">
                        3대째 30년 이상 Black Thorn 전문 재배
                      </p>
                    </div>
                    <div className="rounded-lg bg-black/5 p-4">
                      <h5 className="mb-2 font-semibold text-emerald-700">
                        독점 계약
                      </h5>
                      <p className="text-sm text-gray-800">
                        최상급 등급 Black Thorn D200 100% 독점 공급
                      </p>
                    </div>
                    <div className="rounded-lg bg-black/5 p-4">
                      <h5 className="mb-2 font-semibold text-emerald-700">
                        품질 보증
                      </h5>
                      <p className="text-sm text-gray-800">
                        수확 당일 항공 운송, 48시간 내 한국 도착
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 rounded-lg bg-emerald-50/50 p-4 text-center">
                    <p className="text-base font-medium text-emerald-800">
                      "우리 가족이 먹을 수 있는 최고의 두리안만 JALAN DURIAN에
                      공급합니다"
                    </p>
                    <p className="mt-2 text-sm text-emerald-600">
                      - 농장주 직접 전언 -
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* 스크롤 화살표 */}
      <ScrollArrow targetId="tiers" backgroundColor="yellow" className="pb-8" />
    </section>
  )
}
