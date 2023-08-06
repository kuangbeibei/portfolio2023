import { useEffect, useState } from "react";

export function useIsSsr() {
  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);
  return isSSR;
}
