import { useState } from "react";
import * as React from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("pink");
  const styles = { background: color };
  const [colorList, setColorList] = useState(["teal", "crimson", "orange"]);
  return (
    <div>
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        placeholder="Enter a color" />
      {/*create a copy of colorlist and the new color to it as we must not chnage colorlist   */}
      <button onClick={() => setColorList([...colorList, color])}>
        Add Color
      </button>

      {colorList.map((clr) => (
        <ColorBox clr={clr} />
      ))}
    </div>
  );
}
