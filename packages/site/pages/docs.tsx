import { Hoverboard, Logo } from "@replayio/overboard";

export default function Docs() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        padding: "2rem",
        gap: "4rem",
      }}
    >
      <h1>Overboard</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "40vw",
          gap: "4rem",
        }}
      >
        <h2>{`<Logo />`}</h2>
        <Logo />

        <h2>{`<Hoverboard />`}</h2>
        <Hoverboard />
      </div>
    </div>
  );
}
