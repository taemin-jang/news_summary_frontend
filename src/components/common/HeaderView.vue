<template>
  <v-app-bar title="News summary" color="headerBg">
    <v-card-text>
      <v-text-field
        density="compact"
        variant="solo"
        label="Search keyword"
        append-inner-icon="mdi:mdi-magnify"
        single-line
        hide-details></v-text-field>
    </v-card-text>
    <v-spacer></v-spacer>
    <v-btn
      icon="dark_mode"
      @click="toggleTheme"
      v-if="theme.current.value.dark"></v-btn>
    <v-btn icon="light_mode" @click="toggleTheme" v-else></v-btn>
    <div v-if="!profile">
      <v-btn
        icon="mdi:mdi-account-outline"
        @click="login"
        v-if="theme.current.value.dark"></v-btn>
      <v-btn icon="mdi:mdi-account" @click="login" v-else></v-btn>
    </div>
    <div v-else>
      <v-btn>
        <img
          :src="profile.thumbnail_image"
          alt="kakao_profile"
          width="30"
          height="30"
          @click="mypage"
          v-if="profile" />
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onMounted } from "vue";
import { useTheme } from "vuetify";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user";
import { UserProfile } from "@/types/KakaoLogin";
import AxiosService from "@/services/AxiosService";

const store = useUserStore();

export default defineComponent({
  name: "HeaderView",
  setup() {
    const theme = useTheme();
    const router = useRouter();
    let profile: Ref<UserProfile | null> = ref(store.getUser);

    onMounted(async () => {
      await AxiosService.getKakaoProfile();
    });
    return {
      theme,
      profile,
      toggleTheme: () => {
        theme.global.name.value = theme.global.current.value.dark
          ? "light"
          : "dark";
      },
      login: () => {
        router.push("/login");
      },
      mypage: () => {
        router.push("/mypage");
      },
    };
  },
});
</script>

<style scoped>
img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
