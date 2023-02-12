import { useEffect, useState } from "react";
import { getRandomInt } from "../utils/getRandomInt";

interface Props {
  subtitles: string[];
}

export const Subtitle = ({ subtitles }: Props) => {
  const subtitle = subtitles[getRandomInt(10)];

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, [hydrated]);

  return (
    <>
      {hydrated && (
        <span style={{ fontSize: "1.25rem", margin: "1.5rem" }}>
          {subtitle}
        </span>
      )}
    </>
  );
};
