import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "#0C0A09",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FAFAF9",
          fontFamily: "serif",
          fontWeight: 600,
          letterSpacing: "-1px",
        }}
      >
        AS
        <span style={{ color: "#E85D4C", marginLeft: "-2px" }}>.</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
