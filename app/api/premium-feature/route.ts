import { NextResponse } from "next/server"

import { getSubsciption, getUserInfo } from "../_common"

export async function POST(req: Request) {
  try {
    const authorizationHeader = req.headers.get("authorization")
    if (!authorizationHeader) {
      throw new Error("Authorization header missing")
    }

    const userInfo = await getUserInfo(authorizationHeader)
    const subscription = await getSubsciption(userInfo.email)

    if (subscription.status !== "active") {
      throw new Error(`Subscription is not active`)
    }

    return NextResponse.json({ success: true, code: "147" }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 401 }
    )
  }
}
