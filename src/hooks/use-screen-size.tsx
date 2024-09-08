import { useEffect, useState } from "react";
interface MyObject {
  width: number;
  height: number;
}
function useScreenSize() {
  const [screenSize, setScreenSize] = useState<MyObject>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return { ...screenSize, isMobile: screenSize.width < 768 };
}
export default useScreenSize;
