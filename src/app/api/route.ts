import { NextRequest, NextResponse } from "next/server";

//interfaces
import { IPostRequestBody, IResponseData } from "@/interfaces/IPostMessageByEmail";

const URL: string = "https://api.web3forms.com/submit";

const SUCCESS_RESPONSE_MESSAGE: string =
  "Your message was sent successfully! I will answer you as soon as possible!";

const ERROR_RESPONSE_MESSAGE: string =
  "An error happened on the server. Please, contact me via LinkedIn or write me directly from you email!";

export async function POST(request: NextRequest): Promise<NextResponse<IResponseData>> {
  const body: IPostRequestBody = await request.json();

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: process.env.GMAIL_ACCESS_KEY,
      ...body,
    }),
  });

  const result = await response.json();

  let responseData: IResponseData = {
    isError: false,
    message: SUCCESS_RESPONSE_MESSAGE,
  };

  if (!result.success) responseData = { isError: true, message: ERROR_RESPONSE_MESSAGE };

  return NextResponse.json(responseData);
}
