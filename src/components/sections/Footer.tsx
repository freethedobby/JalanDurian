'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInViewMotion, fadeInVariants } from '../../hooks/useInViewMotion'
import siteConfig from '../../../content/site.json'

export default function Footer() {
  const { ref, isInView } = useInViewMotion()
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="py-16 text-center"
      style={{ backgroundColor: '#2d7d32' }}
      ref={ref}
    >
      <motion.div
        className="container mx-auto max-w-4xl px-4"
        variants={fadeInVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Brand & Description */}
        <motion.div className="mb-12" variants={fadeInVariants}>
          <h3 className="mb-4 text-3xl font-bold tracking-tight text-white">
            {siteConfig.brand}
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-200">
            말레이시아 프리미엄 두리안의 깊은 향과 단맛을 가장 신선한 순간에
            전해드립니다. 30년 농장 경험과 정직한 선별로 최상의 품질을
            보장합니다.
          </p>
        </motion.div>

        {/* Company Info */}
        <motion.div className="mb-8 text-center" variants={fadeInVariants}>
          <div className="inline-block rounded-2xl border border-white/20 bg-white/10 px-8 py-6 backdrop-blur-sm">
            <h4 className="mb-4 text-lg font-semibold text-white">
              Contact Information
            </h4>
            <div className="space-y-2 text-sm text-gray-200">
              <p>{siteConfig.company.name}</p>
              <p>
                {siteConfig.company.phone} | {siteConfig.company.email}
              </p>
              <p className="text-xs">{siteConfig.company.address}</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Copyright */}
        <motion.div
          className="border-t border-white/20 pt-8 text-center"
          variants={fadeInVariants}
        >
          <p className="mb-2 text-sm font-medium text-white">
            © {currentYear} {siteConfig.brand}. All rights reserved.
          </p>
          <p className="mb-3 text-xs text-gray-300">
            Crafted for discerning durian connoisseurs
          </p>
          <p className="text-xs text-gray-400">
            designed by{' '}
            <a
              href="https://blacksheepwall.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dotted transition-colors duration-200 hover:text-yellow-300"
            >
              blacksheepwall
            </a>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
