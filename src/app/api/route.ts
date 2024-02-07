import { NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export function GET(request: NextRequest) {
  console.log(request)
  return NextResponse.json({
    value: (Math.random() * 100).toFixed(),
    date: Date.now()
  })
}