import { create } from "zustand";
import { useEffect, useState } from "react";

// Zustand 스토어: 초기 상태는 하이드레이션 오류를 피하기 위해 false로 설정
// setState 함수를 반환하여 외부에서 접근할 수 있도록 만듭니다.
const useDarkModeStore = create((set) => ({
  isDarkMode: false, // 서버와 클라이언트에서 일치하는 초기값
  toggleDarkMode: () =>
    set((state) => {
      const newValue = !state.isDarkMode;
      if (typeof window !== "undefined") {
        localStorage.setItem("isDarkMode", newValue);
      }
      return { isDarkMode: newValue };
    }),
  setDarkMode: (value) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isDarkMode", value);
    }
    set({ isDarkMode: value });
  },
}));

// 하이드레이션이 완료된 후에만 localStorage 값을 읽는 커스텀 훅
export const useHydratedDarkMode = () => {
  const { setDarkMode, ...store } = useDarkModeStore();
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    // 이펙트는 클라이언트에서만 실행
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("isDarkMode");
      const initialMode =
        saved !== null
          ? JSON.parse(saved)
          : window.matchMedia("(prefers-color-scheme: dark)").matches;

      // setDarkMode 함수를 사용하여 스토어의 상태를 업데이트합니다.
      setDarkMode(initialMode);
      setHasHydrated(true);
    }
  }, [setDarkMode]); // useEffect의 의존성 배열에 setDarkMode를 추가합니다.

  // 하이드레이션 상태와 스토어의 상태를 함께 반환합니다.
  return { ...store, hasHydrated };
};

export default useDarkModeStore;
