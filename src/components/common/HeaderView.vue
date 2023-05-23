<template>
  <v-app-bar color="headerBg">
    <v-btn @click="movePage('/politics')">News summary</v-btn>
    <v-spacer></v-spacer>
    <v-card-text>
      <v-text-field
        density="compact"
        variant="solo"
        label="Search keyword"
        append-inner-icon="mdi:mdi-magnify"
        single-line
        hide-details
      ></v-text-field>
    </v-card-text>
    <v-spacer></v-spacer>
    <v-btn
      icon="dark_mode"
      @click="toggleTheme"
      v-if="theme.current.value.dark"
    ></v-btn>
    <v-btn icon="light_mode" @click="toggleTheme" v-else></v-btn>
    <div v-if="!profile">
      <v-btn
        icon="mdi:mdi-account-outline"
        @click="login"
        v-if="theme.current.value.dark"
      ></v-btn>
      <v-btn icon="mdi:mdi-account" @click="login" v-else></v-btn>
    </div>
    <div v-else>
      <v-menu open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props">
            <img
              :src="profile.thumbnail_image"
              alt="kakao_profile"
              width="30"
              height="30"
              v-if="profile"
            />
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, i) in profileMenu" :key="i">
            <v-btn @click="movePage(item.url)">{{ item.title }}</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
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
    const profileMenu = [
      { title: "마이페이지", url: "/mypage" },
      { title: "포트폴리오", url: "/portfolio" },
      { title: "로그아웃", url: "/logout" },
    ];
    onMounted(async () => {
      await AxiosService.getKakaoProfile();
    });
    return {
      theme,
      profile,
      profileMenu,
      toggleTheme: () => {
        theme.global.name.value = theme.global.current.value.dark
          ? "light"
          : "dark";
      },
      login: () => {
        router.push("/login");
      },
      movePage: async (url: string) => {
        if (url === "/logout") {
          AxiosService.logout();
          store.deleteUser();
          router.push("/login");
          return;
        }
        router.push(`${url}`);
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
