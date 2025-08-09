'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { ScrollArrow } from '../ScrollArrow'
import { scrollToSection } from '../../lib/utils'
import {
  useInViewMotion,
  fadeInVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from '../../hooks/useInViewMotion'
import siteConfig from '../../../content/site.json'

export default function Tiers() {
  const { ref, isInView } = useInViewMotion()

  return (
    <section
      id="tiers"
      className="section-padding"
      style={{ backgroundColor: '#2d7d32' }}
      ref={ref}
    >
      <motion.div
        className="container-custom"
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div className="mb-16 text-center" variants={fadeInVariants}>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            PREMIUM COLLECTION
          </h2>

          {/* 세일 프로모션 밴드 스트립 */}
          {siteConfig.banners.tiersBanner && (
            <motion.div
              className="-mx-4 mb-8 md:-mx-6 lg:-mx-8"
              variants={fadeInVariants}
            >
              <div className="relative overflow-hidden bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 py-3 shadow-2xl md:py-4">
                {/* 움직이는 배경 패턴 */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ['200%', '-100%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* 사선 패턴 */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_8px,rgba(0,0,0,0.1)_8px,rgba(0,0,0,0.1)_16px)]" />

                <div className="relative z-10 flex items-center justify-center gap-4 text-center md:gap-6">
                  <div className="text-xl font-black text-red-600 md:text-2xl lg:text-3xl">
                    ⚡ LIMITED TIME OFFER
                  </div>
                  <div className="hidden h-6 w-px bg-black/30 md:block" />
                  <div className="text-lg font-bold text-green-800 md:text-xl lg:text-2xl">
                    런칭 기념 30% 할인
                  </div>
                  <div className="text-base font-bold text-green-700 md:text-lg lg:text-xl">
                    + 항공 직송
                  </div>
                  <div className="hidden h-6 w-px bg-black/30 md:block" />
                  <div className="text-sm font-medium text-red-600 md:text-base lg:text-lg">
                    정가 대비 특가
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <p className="mx-auto max-w-3xl text-lg font-light leading-relaxed text-gray-100 md:text-xl">
            엄선된 최고급 Black Thorn 두리안을 특별한 가격으로 만나보세요
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          variants={staggerContainerVariants}
        >
          {siteConfig.tiers.items.map(
            (
              tier: {
                name: string
                weight: string
                description: string
                originalPrice: number
                launchPrice: number
                features: string[]
              },
              index: number
            ) => (
              <motion.div
                key={tier.name}
                variants={staggerItemVariants}
                className={`hover:shadow-3xl relative overflow-hidden rounded-2xl border-2 bg-white/95 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  index === 0
                    ? 'border-yellow-400 bg-gradient-to-b from-yellow-50 to-white'
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {index === 0 && (
                  <div className="absolute -right-9 top-6 rotate-45 bg-gradient-to-r from-yellow-400 to-yellow-500 px-12 py-2 text-xs font-bold text-black shadow-lg">
                    인기상품
                  </div>
                )}

                <div className="p-8">
                  <div className="mb-6 text-center">
                    <h3 className="mb-3 text-2xl font-bold tracking-wide text-gray-900">
                      {tier.name}
                    </h3>
                    <p className="text-sm font-medium uppercase tracking-wider text-gray-600">
                      {tier.weight}
                    </p>
                  </div>

                  <div className="mb-8 text-center">
                    <div className="mb-2">
                      <span className="text-5xl font-black text-gray-900">
                        {tier.launchPrice.toLocaleString()}
                      </span>
                      <span className="text-lg font-semibold text-gray-600">
                        원
                      </span>
                    </div>
                    <div className="text-lg text-gray-500 line-through">
                      {tier.originalPrice.toLocaleString()}원
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-700">
                      {tier.description}
                    </p>
                  </div>

                  <ul className="mb-8 space-y-3">
                    {tier.features.map(
                      (feature: string, featureIndex: number) => (
                        <li key={featureIndex} className="flex items-start">
                          <div className="mr-3 mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500"></div>
                          <span className="text-sm font-medium leading-relaxed text-gray-700">
                            {feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>

                  <Button
                    variant={index === 1 ? 'default' : 'outline'}
                    size="lg"
                    className={`w-full font-semibold tracking-wide transition-all duration-300 ${
                      index === 0
                        ? 'bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-lg hover:from-emerald-700 hover:to-emerald-800 hover:shadow-xl'
                        : 'border-2 border-emerald-600 text-emerald-700 hover:border-emerald-700 hover:bg-emerald-50'
                    }`}
                    onClick={() => scrollToSection('countdown')}
                  >
                    예약하기
                  </Button>
                </div>
              </motion.div>
            )
          )}
        </motion.div>

        <motion.div className="mt-16 text-center" variants={fadeInVariants}>
          <p className="text-sm font-medium text-gray-200">
            모든 상품은 수확 후 24시간 이내 항공 직송되어 최상의 신선도를
            보장합니다
          </p>
        </motion.div>

        {/* 스크롤 화살표 */}
        <ScrollArrow targetId="faq" backgroundColor="green" className="mt-8" />
      </motion.div>
    </section>
  )
}
