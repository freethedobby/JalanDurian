'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '../lib/utils'

interface VideoWithFallbackProps {
  videoUrl: string
  fallbackImage: string
  alt: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  poster?: string
}

export function VideoWithFallback({
  videoUrl,
  fallbackImage,
  alt,
  className,
  autoPlay = true,
  muted = true,
  loop = true,
  poster,
}: VideoWithFallbackProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsLoaded(true)
    }

    const handleError = () => {
      setHasError(true)
    }

    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('error', handleError)

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('error', handleError)
    }
  }, [])

  if (hasError) {
    return (
      <Image
        src={fallbackImage}
        alt={alt}
        fill
        className={cn('object-cover', className)}
        priority
        sizes="100vw"
      />
    )
  }

  return (
    <div className={cn('relative', className)}>
      <video
        ref={videoRef}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        playsInline
        poster={poster || fallbackImage}
        className={cn(
          'h-full w-full object-cover transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        onError={() => setHasError(true)}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isLoaded && (
        <Image
          src={fallbackImage}
          alt={alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      )}
    </div>
  )
}
