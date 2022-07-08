import * as React from "react";
import dynamic from "next/dynamic";
import { Column, Logo, PurchaseForm } from "components";
import type { Colorway } from "components/Colors";
import { PlaceHolderWrapper } from "components/PlaceHolderWrapper";
import { Background } from "components/Background";

const Hoverboard = dynamic(async () => (await import("@replayio/hoverboard")).Hoverboard, {
  ssr: false,
});

export default function Product() {
  const [formData, setFormData] = React.useState<{ color: Colorway }>({
    color: "red",
  });
  const handleDataChange = (id, value) => {
    setFormData(currentFormData => ({
      ...currentFormData,
      [id]: value,
    }));
  };

  return (
    <main
      style={{
        display: "grid",
        placeItems: "center",
        paddingTop: "var(--space-3)",
        paddingBottom: "var(--space-3)",
        gap: "var(--space-3)",
      }}
    >
      <Column gap={1}>
        <h1 className="screen-reader-only">Overboard</h1>
        <h2 className="screen-reader-only">Bugslayer</h2>
        <Logo />

        <ul className="ProductFeatures">
          <li>Bash 10x the bugs</li>
          <li aria-hidden>·</li>
          <li>Ship critical fixes faster</li>
          <li aria-hidden>·</li>
          <li>Stay in flow state</li>
        </ul>
      </Column>

      <div className="ProductAnimation">
        <PlaceHolderWrapper>
          <Hoverboard color={formData.color} />
        </PlaceHolderWrapper>
      </div>

      <Background />

      <PurchaseForm onDataChange={handleDataChange} />
    </main>
  );
}
