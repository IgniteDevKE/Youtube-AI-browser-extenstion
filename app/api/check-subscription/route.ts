import { NextResponse } from "next/server"

import { getSubsciption, getUserInfo } from "../_common"

export async function GET(req: Request) {
  try {
    const authorizationHeader = req.headers.get("authorization")
    if (!authorizationHeader) {
      throw new Error("Authorization header missing")
    }

    const userInfo = await getUserInfo(authorizationHeader)
    const subscription = await getSubsciption(userInfo.email)

    return NextResponse.json(
      { active: subscription.status === "active" },
      { status: 200 }
    )
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 401 }
    )
  }
}
