import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: "#0C0A09",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FAFAF9",
          fontFamily: "serif",
          fontWeight: 600,
          letterSpacing: "-4px",
        }}
      >
        AS
        <span style={{ color: "#E85D4C", marginLeft: "-6px" }}>.</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
