'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Globe, Award, X } from 'lucide-react'
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
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null)

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

        {/* Representatives */}
        <motion.div
          className="mb-16 grid gap-8 md:grid-cols-2"
          variants={staggerContainerVariants}
        >
          {/* LEE&PARK 대표 */}
          <motion.div variants={staggerItemVariants}>
            <Card
              className="group h-full cursor-pointer border-black/20 bg-black/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/10 hover:shadow-xl"
              onClick={() => setSelectedPerson('대표')}
            >
              <CardContent className="p-6 text-center">
                <motion.div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-emerald-700 transition-transform duration-300 group-hover:scale-105">
                  <Heart className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="mb-3 text-xl font-bold text-black">
                  LEE&PARK 대표
                </h3>
                <p className="mb-4 text-sm font-medium text-emerald-700">
                  말레이시아 현지 전문가
                </p>
                <p className="text-sm leading-relaxed text-gray-700">
                  현지 10년 거주 경험을 바탕으로 최고급 품질만을 알선합니다.
                </p>
                <div className="mt-4 flex items-center justify-center">
                  <div className="flex items-center gap-1 text-xs text-emerald-600 opacity-60 transition-opacity duration-300 group-hover:opacity-100">
                    <Heart className="h-3 w-3" />
                    <span>메시지 보기</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 파트너 농장주 */}
          <motion.div variants={staggerItemVariants}>
            <Card
              className="group h-full cursor-pointer border-black/20 bg-black/5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:bg-black/10 hover:shadow-xl"
              onClick={() => setSelectedPerson('농장주')}
            >
              <CardContent className="p-6 text-center">
                <motion.div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-600 to-amber-700 transition-transform duration-300 group-hover:scale-105">
                  <Award className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="mb-3 text-xl font-bold text-black">
                  현지 농장 파트너
                </h3>
                <p className="mb-4 text-sm font-medium text-emerald-700">
                  3대째 두리안 농장 운영
                </p>
                <p className="text-sm leading-relaxed text-gray-700">
                  30년간 프리미엄 두리안을 재배해온 현지 농장주와의 독점 계약.
                </p>
                <div className="mt-4 flex items-center justify-center">
                  <div className="flex items-center gap-1 text-xs text-emerald-600 opacity-60 transition-opacity duration-300 group-hover:opacity-100">
                    <Heart className="h-3 w-3" />
                    <span>메시지 보기</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
      </motion.div>

      {/* 메시지 모달 */}
      <AnimatePresence>
        {selectedPerson && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPerson(null)}
          >
            {/* 배경 오버레이 */}
            <div className="absolute inset-0 bg-black/50" />

            {/* 모달 컨텐츠 */}
            <motion.div
              className="relative max-h-[80vh] w-full max-w-2xl overflow-auto rounded-2xl bg-white shadow-xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* 헤더 */}
              <div className="flex items-center justify-between border-b border-gray-100 p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {selectedPerson === '대표'
                    ? 'LEE&PARK 대표 메시지'
                    : '현지 농장 파트너 메시지'}
                </h3>
                <button
                  onClick={() => setSelectedPerson(null)}
                  className="rounded-full p-1 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* 컨텐츠 */}
              <div className="space-y-6 p-6">
                {selectedPerson === '대표' ? (
                  <div>
                    <blockquote className="text-center">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        &ldquo;말레이시아에서 10년 이상 거주하며 이 나라의
                        문화와 사람들을 깊이 사랑하게 되었습니다. 두리안이라는
                        특별한 과일을 통해 말레이시아의 아름다운 문화를 한국에
                        전파하고 싶습니다.&rdquo;
                      </p>
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                        &ldquo;두리안을 사랑하는 만큼, 두리안으로 말레이시아와
                        한국을 연결하는 다리 역할을 하고자 합니다. 추천하지 않는
                        것, 내 입맛에 맞지 않는 것은 절대 팔지 않습니다.&rdquo;
                      </p>
                      <p className="text-lg font-semibold text-emerald-700">
                        &ldquo;Black Thorn D200의 헤어나올 수 없는 맛을 통해,
                        우리나라에서 감히 맛보기 힘든 진정한 말레이시아를
                        선물하고 싶습니다.&rdquo;
                      </p>
                    </blockquote>
                  </div>
                ) : (
                  <div>
                    <blockquote className="text-center">
                      <p className="mb-4 text-lg italic leading-relaxed text-gray-800">
                        &ldquo;Durian Black Thorn adalah warisan tiga generasi
                        kami. Kami hanya menjual buah yang terbaik untuk
                        keluarga sendiri.&rdquo;
                      </p>
                      <div className="mt-4 border-t border-gray-100 pt-4">
                        <p className="mb-2 text-sm text-gray-600">
                          한국어 번역:
                        </p>
                        <p className="text-base italic text-gray-700">
                          &ldquo;Black Thorn 두리안은 우리 3대에 걸친
                          유산입니다. 우리는 우리 가족이 먹을 수 있는 최고의
                          과일만 판매합니다.&rdquo;
                        </p>
                      </div>
                    </blockquote>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 스크롤 화살표 */}
      <ScrollArrow targetId="tiers" backgroundColor="yellow" className="pb-8" />
    </section>
  )
}
