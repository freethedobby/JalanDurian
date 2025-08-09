'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Star, Package, Truck } from 'lucide-react'
import {
  useInViewMotion,
  fadeInVariants,
  staggerContainerVariants,
  staggerItemVariants,
} from '../../hooks/useInViewMotion'
import siteConfig from '../../../content/site.json'

export default function FAQ() {
  const { ref, isInView } = useInViewMotion()
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    )
  }

  // 아이콘 매핑
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'star':
        return Star
      case 'package':
        return Package
      case 'truck':
        return Truck
      default:
        return Star
    }
  }

  return (
    <section
      id="faq"
      className="section-padding"
      style={{ backgroundColor: '#fff8e1' }}
      ref={ref}
    >
      <motion.div
        className="container-custom max-w-4xl"
        variants={staggerContainerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.div className="mb-16 text-center" variants={fadeInVariants}>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-gray-700 md:text-xl">
            프리미엄 Black Thorn 두리안에 대한 궁금한 점들을 확인해보세요
          </p>
        </motion.div>

        <motion.div className="space-y-8" variants={staggerContainerVariants}>
          {siteConfig.faqCategories.map((category, categoryIndex) => (
            <motion.div key={category.category} variants={staggerItemVariants}>
              {/* 카테고리 헤더 */}
              <div className="mb-4 flex items-center gap-3">
                {React.createElement(getIconComponent(category.icon), {
                  className: 'h-6 w-6 text-emerald-600',
                })}
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.category}
                </h3>
              </div>

              {/* 카테고리별 질문들 */}
              <div className="space-y-3">
                {category.questions.map((item, questionIndex) => {
                  const itemId = `${categoryIndex}-${questionIndex}`
                  return (
                    <motion.div
                      key={itemId}
                      variants={staggerItemVariants}
                      className="overflow-hidden rounded-2xl border border-gray-200 bg-white/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full px-6 py-4 text-left transition-all duration-300 hover:bg-gray-50/50"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="pr-4 text-base font-medium leading-relaxed text-gray-900 md:text-lg">
                            {item.question}
                          </h4>
                          <motion.div
                            animate={{
                              rotate: openItems.includes(itemId) ? 180 : 0,
                            }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="flex-shrink-0"
                          >
                            <ChevronDown className="h-5 w-5 text-emerald-600" />
                          </motion.div>
                        </div>
                      </button>

                      <AnimatePresence>
                        {openItems.includes(itemId) && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-gray-100 bg-gray-50/30 px-6 py-6">
                              <div className="grid gap-4 md:grid-cols-3">
                                <div className="md:col-span-2">
                                  <p className="text-base font-light leading-relaxed text-gray-700">
                                    {item.answer}
                                  </p>
                                </div>
                                <div className="flex justify-center">
                                  <div className="relative h-32 w-32 overflow-hidden rounded-xl shadow-md">
                                    <Image
                                      src={item.image}
                                      alt="FAQ related image"
                                      fill
                                      className="object-cover"
                                      sizes="128px"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mt-16 text-center" variants={fadeInVariants}>
          <div className="inline-flex items-center rounded-2xl border border-emerald-200 bg-emerald-50/50 px-6 py-4 backdrop-blur-sm">
            <div className="mr-3 h-3 w-3 rounded-full bg-emerald-500"></div>
            <p className="text-sm font-medium text-emerald-800">
              추가 문의사항이 있으시면 고객센터로 연락주세요
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
