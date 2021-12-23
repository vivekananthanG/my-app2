import { useState } from "react";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div className="counter-container">
      <IconButton
        color="primary"
        onClick={() => setLike(like + 1)}
        aria-label="like movie"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton
        color="error"
        onClick={() => setDisLike(dislike + 1)}
        aria-label="Dislike movie"
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
