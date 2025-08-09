import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const CONFIG_PATH = path.join(process.cwd(), 'content', 'site.json')

// GET - 현재 설정 읽기
export async function GET() {
  try {
    const configFile = fs.readFileSync(CONFIG_PATH, 'utf8')
    const config = JSON.parse(configFile)
    
    return NextResponse.json({
      launchDate: config.launchDate,
      inventory: config.inventory,
      fullPrice: config.fullPrice,
      launchPrice: config.launchPrice,
    })
  } catch (error) {
    console.error('Failed to read config:', error)
    return NextResponse.json(
      { error: 'Failed to read configuration' },
      { status: 500 }
    )
  }
}

// POST - 설정 업데이트
export async function POST(request: NextRequest) {
  try {
    const updates = await request.json()
    
    // 현재 설정 파일 읽기
    const configFile = fs.readFileSync(CONFIG_PATH, 'utf8')
    const config = JSON.parse(configFile)
    
    // 업데이트할 필드들만 변경
    if (updates.launchDate) {
      config.launchDate = updates.launchDate
    }
    if (updates.inventory !== undefined) {
      config.inventory = updates.inventory
    }
    if (updates.fullPrice !== undefined) {
      config.fullPrice = updates.fullPrice
    }
    if (updates.launchPrice !== undefined) {
      config.launchPrice = updates.launchPrice
    }
    
    // 파일에 저장
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), 'utf8')
    
    return NextResponse.json({ 
      success: true, 
      message: 'Configuration updated successfully' 
    })
    
  } catch (error) {
    console.error('Failed to update config:', error)
    return NextResponse.json(
      { error: 'Failed to update configuration' },
      { status: 500 }
    )
  }
} 