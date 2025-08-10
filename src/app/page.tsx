import React from 'react'
import Hero from '../components/sections/Hero'
import { Countdown } from '../components/sections/Countdown'
import Story from '../components/sections/Story'
import Tiers from '../components/sections/Tiers'
import FAQ from '../components/sections/FAQ'
import Footer from '../components/sections/Footer'
import { ScrollIndicator } from '../components/ScrollIndicator'
import { Navigation } from '../components/Navigation'
import siteConfig from '../../content/site.json'
import { SiteConfig } from '../lib/types'

const config = siteConfig as SiteConfig

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Countdown
        launchDate={config.launchDate}
        naverUrl={config.naverUrl}
        tossUrl={config.tossUrl}
        coupangUrl={config.coupangUrl}
      />
      <Story />
      <Tiers />
      <FAQ />
      <Footer />

      {/* 스크롤 인디케이터 */}
      <ScrollIndicator />
    </div>
  )
}
