'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Calendar,
  Save,
  Eye,
  EyeOff,
  Settings,
  Clock,
  Package,
  DollarSign,
} from 'lucide-react'
import { Button } from '../../components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card'
import { DurianTextLogo } from '../../components/DurianLogo'

interface SiteConfig {
  launchDate: string
  inventory: number
  fullPrice: number
  launchPrice: number
  banners: {
    reservationBanner: boolean
    tiersBanner: boolean
  }
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [config, setConfig] = useState<SiteConfig>({
    launchDate: '',
    inventory: 0,
    fullPrice: 0,
    launchPrice: 0,
    banners: {
      reservationBanner: true,
      tiersBanner: true,
    },
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const ADMIN_PASSWORD = 'jalan2025' // 실제 운영에서는 환경변수 사용

  // 초기 설정 로드
  useEffect(() => {
    if (isAuthenticated) {
      loadConfig()
    }
  }, [isAuthenticated])

  const loadConfig = async () => {
    try {
      const response = await fetch('/api/admin/config')
      if (response.ok) {
        const data = await response.json()
        setConfig(data)
      }
    } catch (error) {
      console.error('Failed to load config:', error)
      // 폴백으로 기본값 설정
      setConfig({
        launchDate: '2025-09-09T09:00:00+09:00',
        inventory: 333,
        fullPrice: 120000,
        launchPrice: 50000,
        banners: {
          reservationBanner: true,
          tiersBanner: true,
        },
      })
    }
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setMessage('로그인 성공!')
    } else {
      setMessage('비밀번호가 올바르지 않습니다.')
    }
  }

  const handleSave = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/admin/config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(config),
      })

      if (response.ok) {
        setMessage('설정이 성공적으로 저장되었습니다!')
      } else {
        throw new Error('Failed to save config')
      }
    } catch (error) {
      console.error('Failed to save config:', error)
      setMessage('설정 저장에 실패했습니다.')
    } finally {
      setLoading(false)
    }
  }

  const formatDateForInput = (dateString: string) => {
    if (!dateString) return ''
    return dateString.slice(0, 16) // YYYY-MM-DDTHH:mm 형식으로 변환
  }

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value + ':00+09:00' // 초와 타임존 추가
    setConfig((prev) => ({ ...prev, launchDate: newDate }))
  }

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-yellow-400 via-yellow-300 to-green-400 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-full max-w-md border-0 shadow-2xl">
            <CardHeader className="pb-2 text-center">
              <DurianTextLogo className="mb-4 justify-center" />
              <CardTitle className="text-2xl font-bold text-gray-800">
                관리자 로그인
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    비밀번호
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-500"
                      placeholder="관리자 비밀번호를 입력하세요"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  로그인
                </Button>
                {message && (
                  <p
                    className={`text-center text-sm ${message.includes('성공') ? 'text-green-600' : 'text-red-600'}`}
                  >
                    {message}
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-green-400 p-4">
      <div className="mx-auto max-w-4xl">
        {/* 헤더 */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <DurianTextLogo className="mb-4 justify-center" />
          <h1 className="mb-2 text-3xl font-bold text-gray-800">
            관리자 대시보드
          </h1>
          <p className="text-gray-600">사이트 설정을 관리하고 업데이트하세요</p>
        </motion.div>

        {/* 설정 카드들 */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* 런치 날짜 설정 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Calendar className="h-5 w-5" />
                  런치 날짜 설정
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    예약 오픈 일시
                  </label>
                  <input
                    type="datetime-local"
                    value={formatDateForInput(config.launchDate)}
                    onChange={handleDateChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="text-sm text-gray-600">
                  <Clock className="mr-1 inline h-4 w-4" />
                  현재 설정:{' '}
                  {new Date(config.launchDate).toLocaleString('ko-KR')}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 재고 및 가격 설정 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-700">
                  <Settings className="h-5 w-5" />
                  상품 설정
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    <Package className="mr-1 inline h-4 w-4" />
                    재고 수량
                  </label>
                  <input
                    type="number"
                    value={config.inventory}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        inventory: parseInt(e.target.value) || 0,
                      }))
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-500"
                    min="0"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    <DollarSign className="mr-1 inline h-4 w-4" />
                    정가 (원)
                  </label>
                  <input
                    type="number"
                    value={config.fullPrice}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        fullPrice: parseInt(e.target.value) || 0,
                      }))
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-500"
                    min="0"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    <DollarSign className="mr-1 inline h-4 w-4" />
                    런치 특가 (원)
                  </label>
                  <input
                    type="number"
                    value={config.launchPrice}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        launchPrice: parseInt(e.target.value) || 0,
                      }))
                    }
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-green-500"
                    min="0"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* 배너 설정 */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Eye className="h-5 w-5" />
                프로모션 배너 설정
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Reservation 섹션 배너
                  </label>
                  <p className="text-xs text-gray-500">
                    "GRAND OPENING SALE" 배너 표시
                  </p>
                </div>
                <button
                  onClick={() =>
                    setConfig((prev) => ({
                      ...prev,
                      banners: {
                        ...prev.banners,
                        reservationBanner: !prev.banners.reservationBanner,
                      },
                    }))
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    config.banners.reservationBanner
                      ? 'bg-green-600'
                      : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      config.banners.reservationBanner
                        ? 'translate-x-6'
                        : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Premium Collection 섹션 배너
                  </label>
                  <p className="text-xs text-gray-500">
                    "LIMITED TIME OFFER" 배너 표시
                  </p>
                </div>
                <button
                  onClick={() =>
                    setConfig((prev) => ({
                      ...prev,
                      banners: {
                        ...prev.banners,
                        tiersBanner: !prev.banners.tiersBanner,
                      },
                    }))
                  }
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    config.banners.tiersBanner ? 'bg-green-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      config.banners.tiersBanner
                        ? 'translate-x-6'
                        : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              <div className="mt-4 rounded-lg bg-gray-50 p-3">
                <h4 className="mb-2 text-sm font-medium text-gray-700">
                  현재 상태:
                </h4>
                <div className="space-y-1 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    {config.banners.reservationBanner ? (
                      <Eye className="h-3 w-3 text-green-600" />
                    ) : (
                      <EyeOff className="h-3 w-3 text-gray-400" />
                    )}
                    Reservation 배너:{' '}
                    {config.banners.reservationBanner ? '표시' : '숨김'}
                  </div>
                  <div className="flex items-center gap-2">
                    {config.banners.tiersBanner ? (
                      <Eye className="h-3 w-3 text-green-600" />
                    ) : (
                      <EyeOff className="h-3 w-3 text-gray-400" />
                    )}
                    Premium Collection 배너:{' '}
                    {config.banners.tiersBanner ? '표시' : '숨김'}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* 저장 버튼 */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button
            onClick={handleSave}
            disabled={loading}
            className="bg-green-600 px-8 py-3 font-bold text-white shadow-lg hover:bg-green-700"
          >
            <Save className="mr-2 h-4 w-4" />
            {loading ? '저장 중...' : '설정 저장'}
          </Button>
          {message && (
            <p
              className={`mt-4 text-sm ${message.includes('성공') ? 'text-green-600' : 'text-red-600'}`}
            >
              {message}
            </p>
          )}
        </motion.div>

        {/* 로그아웃 */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            onClick={() => {
              setIsAuthenticated(false)
              setPassword('')
              setMessage('')
            }}
            className="text-sm text-gray-600 underline hover:text-gray-800"
          >
            로그아웃
          </button>
        </motion.div>
      </div>
    </div>
  )
}
