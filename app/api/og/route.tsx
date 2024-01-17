/* eslint-disable @next/next/no-img-element*/
/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")
      : "Vigh Tibor | Web Developer";

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
            <img src={imageData} height={160} width={300} />
            <div style={{ marginTop: 40 }}>{title}</div>
          </div>
        </>
      )
    );
  } catch (error) {
    return new Response("Failed to generate OG Image", { status: 500 });
  }
}
