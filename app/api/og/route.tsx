/* eslint-disable @next/next/no-img-element*/
/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck
import { ImageResponse } from "next/og";
import { getCookie } from "@/utils/cookieActions";

export const runtime = "edge";

export async function GET() {
  try {
    const lang = await getCookie("lang");

    const title =
      lang?.value === "hun"
        ? "Vigh Tibor | Webfejlesztő"
        : "Tibor Vigh | Web Developer";

    const imageData = await fetch(
      new URL("../../../public/opengraph-image.png", import.meta.url)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <>
          <div
            style={{
              height: "100vh",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              fontSize: 32,
              fontWeight: 600,
            }}
          >
            <img src={imageData} height={180} width={300} />
            <div style={{ marginTop: 40 }}>{title}</div>
          </div>
        </>
      )
    );
  } catch (error) {
    console.log("OG error", error);
    return new Response("Failed to generate OG Image", { status: 500 });
  }
}
