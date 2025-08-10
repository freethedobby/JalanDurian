'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Clock, ExternalLink } from 'lucide-react'
import { Button } from '../ui/button'
import { ScrollArrow } from '../ScrollArrow'

import { useCountdown } from '../../hooks/useCountdown'
import { useInViewMotion, fadeInVariants } from '../../hooks/useInViewMotion'
import { formatDateToKorean, addUTMParams, isValidUrl } from '../../lib/utils'
import siteConfig from '../../../content/site.json'

interface CountdownProps {
  launchDate: string
  naverUrl: string
  tossUrl: string
  coupangUrl: string
}

export function Countdown({
  launchDate,
  naverUrl,
  tossUrl,
  coupangUrl,
}: CountdownProps) {
  const { ref, isInView } = useInViewMotion()
  const { days, hours, minutes, seconds, isExpired } = useCountdown(launchDate)

  const handleCTAClick = (url: string, source: string) => {
    if (isValidUrl(url)) {
      window.open(addUTMParams(url, source), '_blank', 'noopener,noreferrer')
    }
  }

  const timeUnits = [
    { value: days, label: '일' },
    { value: hours, label: '시간' },
    { value: minutes, label: '분' },
    { value: seconds, label: '초' },
  ]

  const targetDate = new Date(launchDate)

  return (
    <section
      id="countdown"
      className="section-padding"
      style={{ backgroundColor: '#2d7d32' }}
      ref={ref}
    >
      <motion.div
        className="container-custom px-4 text-center"
        variants={fadeInVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="mb-6 flex items-center justify-center gap-2 md:mb-8"
            variants={fadeInVariants}
          >
            <Clock className="h-5 w-5 text-yellow-300 md:h-6 md:w-6" />
            <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl xl:text-5xl">
              RESERVATION
            </h2>
          </motion.div>

          {/* 세일 프로모션 밴드 스트립 */}
          {siteConfig.banners.reservationBanner && (
            <motion.div
              className="-mx-4 mb-6 md:-mx-6 md:mb-8 lg:-mx-8"
              variants={fadeInVariants}
            >
              <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-red-500 to-red-600 py-3 shadow-2xl md:py-4">
                {/* 움직이는 배경 패턴 */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />

                {/* 사선 패턴 */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]" />

                <div className="relative z-10 flex items-center justify-center gap-4 text-center md:gap-6">
                  <div className="text-xl font-black text-white md:text-2xl lg:text-3xl">
                    🔥 GRAND OPENING SALE
                  </div>
                  <div className="hidden h-6 w-px bg-white/50 md:block" />
                  <div className="text-lg font-bold text-yellow-300 md:text-xl lg:text-2xl">
                    최대 30% 할인
                  </div>
                  <div className="text-base font-bold text-yellow-200 md:text-lg lg:text-xl">
                    + 무료배송
                  </div>
                  <div className="hidden h-6 w-px bg-white/50 md:block" />
                  <div className="text-sm font-medium text-white md:text-base lg:text-lg">
                    한정 333개
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <motion.p
            className="mb-8 text-base font-medium text-gray-100 md:mb-12 md:text-lg lg:text-xl xl:text-2xl"
            variants={fadeInVariants}
          >
            {formatDateToKorean(targetDate)} 오픈 예정
          </motion.p>

          {!isExpired ? (
            <>
              <motion.div
                className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4 md:mb-12 md:gap-4 lg:gap-8"
                variants={fadeInVariants}
              >
                {timeUnits.map((unit, index) => (
                  <motion.div
                    key={unit.label}
                    className="rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-sm md:rounded-xl md:p-6 lg:p-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="text-2xl font-bold text-yellow-300 md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                      {unit.value.toLocaleString()}
                    </div>
                    <div className="text-xs font-medium text-gray-200 md:text-sm">
                      {unit.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="space-y-4 md:space-y-6"
                variants={fadeInVariants}
              >
                <motion.p
                  className="text-base text-gray-100 md:text-lg xl:text-xl"
                  variants={fadeInVariants}
                >
                  한정 수량으로 인한 조기 마감 가능성이 높습니다.
                </motion.p>

                <motion.div
                  className="flex flex-col justify-center gap-3 sm:grid sm:grid-cols-2 sm:gap-4 md:flex md:flex-row md:gap-6"
                  variants={fadeInVariants}
                >
                  <Button
                    onClick={() => handleCTAClick(naverUrl, 'naver')}
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-green-400 bg-green-400/90 px-4 py-3 text-sm font-bold text-green-900 shadow-lg hover:bg-green-500 sm:w-auto md:px-6 md:py-4 md:text-base"
                    disabled={!isValidUrl(naverUrl)}
                  >
                    <ExternalLink className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    네이버 사전예약
                  </Button>
                  <Button
                    onClick={() => handleCTAClick(tossUrl, 'toss')}
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-blue-400 bg-blue-400/90 px-4 py-3 text-sm font-bold text-blue-900 shadow-lg hover:bg-blue-500 sm:w-auto md:px-6 md:py-4 md:text-base"
                    disabled={!isValidUrl(tossUrl)}
                  >
                    <ExternalLink className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    토스 사전예약
                  </Button>
                  <Button
                    onClick={() => handleCTAClick(coupangUrl, 'coupang')}
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-orange-400 bg-orange-400/90 px-4 py-3 text-sm font-bold text-orange-900 shadow-lg hover:bg-orange-500 sm:w-auto md:px-6 md:py-4 md:text-base"
                    disabled={!isValidUrl(coupangUrl)}
                  >
                    <ExternalLink className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    쿠팡 사전예약
                  </Button>
                </motion.div>
              </motion.div>
            </>
          ) : (
            <motion.div
              className="space-y-6 md:space-y-8"
              variants={fadeInVariants}
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500">
                <div className="border-3 h-8 w-8 rounded-full border-green-800"></div>
              </div>
              <h3 className="text-xl font-bold text-white md:text-2xl lg:text-3xl">
                예약이 시작되었습니다
              </h3>
              <p className="mx-auto max-w-md text-base text-gray-200 md:text-lg">
                프리미엄 Black Thorn 두리안을 지금 바로 주문하실 수 있습니다
              </p>
              <motion.div
                className="flex flex-col justify-center gap-3 sm:grid sm:grid-cols-2 sm:gap-4 md:flex md:flex-row md:gap-6"
                variants={fadeInVariants}
              >
                <Button
                  onClick={() => handleCTAClick(naverUrl, 'naver')}
                  size="lg"
                  className="w-full bg-green-600 px-4 py-3 text-sm font-bold text-white shadow-lg hover:bg-green-700 sm:w-auto md:px-6 md:py-4 md:text-base"
                  disabled={!isValidUrl(naverUrl)}
                >
                  <ExternalLink className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  네이버 쇼핑
                </Button>
                <Button
                  onClick={() => handleCTAClick(tossUrl, 'toss')}
                  size="lg"
                  className="w-full bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-lg hover:bg-blue-700 sm:w-auto md:px-6 md:py-4 md:text-base"
                  disabled={!isValidUrl(tossUrl)}
                >
                  <ExternalLink className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  토스 쇼핑
                </Button>
                <Button
                  onClick={() => handleCTAClick(coupangUrl, 'coupang')}
                  size="lg"
                  className="w-full bg-orange-600 px-4 py-3 text-sm font-bold text-white shadow-lg hover:bg-orange-700 sm:w-auto md:px-6 md:py-4 md:text-base"
                  disabled={!isValidUrl(coupangUrl)}
                >
                  <ExternalLink className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  쿠팡
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* 스크롤 화살표 */}
        <ScrollArrow
          targetId="story"
          backgroundColor="green"
          className="mt-8"
        />
      </motion.div>
    </section>
  )
}
