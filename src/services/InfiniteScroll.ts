import { ref, onMounted, onUnmounted } from "vue";

export default function useInfiniteScroll(callback: () => void) {
  const isLoading = ref(false);

  const handleScroll = async () => {
    if (isLoading.value) return;

    const windowHeight = document.documentElement.clientHeight;
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;

    if (windowHeight + scrollY >= documentHeight * 0.9) {
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

  return { isLoading };
}
