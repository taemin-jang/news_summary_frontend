import { defineStore } from "pinia";
import { ref, Ref, computed } from "vue";
import { UserProfile } from "@/types/KakaoLogin";

export const useUserStore = defineStore("user", () => {
  const user: Ref<UserProfile | null> = ref(null);
  /**
   * user의 정보를 가져오는 getters
   */
  const getUser = computed(() => user);
  /**
   * user 정보를 저장하는 actions
   * @param userDTO user 데이터가 담겨 있음
   */
  const setUser = (userDTO: UserProfile) => {
    user.value = userDTO;
  };
  /**
   * user 정보를 초기화
   */
  const deleteUser = () => {
    user.value = null;
  };
  return { user, getUser, setUser, deleteUser };
});
