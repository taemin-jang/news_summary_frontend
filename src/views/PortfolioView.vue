<template>
  <v-card calss="" color="innerBg" width="70%" height="100%">
    <v-card-title>주식 포트폴리오</v-card-title>
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
    <v-table fixed-header density="compact">
      <thead class="table-head">
        <tr>
          <th class="text-left" :style="styleObj">Name</th>
          <th class="text-left" :style="styleObj">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import { StyleValue } from "vue";

const theme = useTheme();
console.log(theme);

const styleObj: StyleValue = {
  borderBottomColor: theme.current.value.colors.mainBg,
  borderBottomStyle: "solid",
  borderBottomWidth: "3px",
};
const desserts = [
  {
    name: "Frozen Yogurt",
    calories: 159,
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
  },
  {
    name: "Eclair",
    calories: 262,
  },
  {
    name: "Cupcake",
    calories: 305,
  },
  {
    name: "Gingerbread",
    calories: 356,
  },
  {
    name: "Jelly bean",
    calories: 375,
  },
  {
    name: "Lollipop",
    calories: 392,
  },
  {
    name: "Honeycomb",
    calories: 408,
  },
  {
    name: "Donut",
    calories: 452,
  },
  {
    name: "KitKat",
    calories: 518,
  },
];
</script>

<style scoped></style>
