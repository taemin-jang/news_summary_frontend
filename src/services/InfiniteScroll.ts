import { ref, onMounted, onUnmounted, Ref } from "vue";

/**
 * 무한 스크롤 함수
 * @param callback 서버와 비동기 통신하는 로직이 담긴 함수
 * @returns isLoading 로딩 유무
 */
export const useInfiniteScroll = (callback: () => void): Ref<boolean> => {
  const isLoading: Ref<boolean> = ref(false);

  /**
   * scroll 이벤트 발생 시 처리하는 함수
   * @returns
   */
  const handleScroll = async () => {
    if (isLoading.value) return;

    const windowHeight = document.documentElement.clientHeight;
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    if (windowHeight + scrollY >= documentHeight) {
      isLoading.value = true;
      await callback();
      isLoading.value = false;
    }
  };

  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
  return isLoading;
};
