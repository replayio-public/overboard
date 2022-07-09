import { useCallback, useState } from "react";
import { colorways } from "@replayio/hoverboard";

import { Colors, Color } from "./Colors";
import { Column } from "./Column";
import { PurchaseButton } from "./PurchaseButton";

export function PurchaseForm({
  onDataChange,
}: {
  onDataChange: (id: string, payload: any) => void;
}) {
  const [hasError, setHasError] = useState(false);
  const handleSubmit = useCallback(async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const formData = Object.fromEntries(data.entries());
    const body = JSON.stringify(formData);
    const response = await fetch(form.action, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: body,
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      setHasError(true);
      throw new Error(errorMessage);
    }
  }, []);

  return (
    <Column
      as="form"
      action="/api/purchase"
      method="post"
      onSubmit={handleSubmit}
      gap={4}
      style={{ placeItems: "center" }}
    >
      <Column gap={3}>
        <Colors onColorChange={color => onDataChange("color", color)}>
          {Object.entries(colorways).map(([name, [start, end]]) => (
            <Color
              key={name}
              label={name}
              value={name.toLowerCase()}
              startColor={start}
              endColor={end}
            />
          ))}
        </Colors>
      </Column>

      <PurchaseButton hasError={hasError} />
    </Column>
  );
}
