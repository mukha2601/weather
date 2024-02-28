<template>
  <div class="w-full overflow-y-hidden p-4">
    <h2 class="font-bold text-xl">Xududlar</h2>
    <div
      class="flex w-full h-10 justify-between items-center mt-2 py-2"
      v-for="region in regions"
    >
      <p>{{ region }}</p>
      <input type="checkbox" class="w-[1rem] h-[1rem]" />
    </div>
  </div>
</template>

<script>
// import { mapState } from "pinia";
// import { useWeather } from "../store/index";
export default {
  data() {
    return {
      regions: [
        "Tashkent",
        "Andijon",
        "Namangan",
        "Sirdaryo",
        "Surxandaryo",
        "Qoshqadaryo",
        "Xorazm",
        "Navoiy",
        "Buxoro",
        "Qoraqalpog'iston",
        "Farg'ona",
      ],
    };
  },
  methods: {
    // ...mapState(useWeather, ["WeatherData"]),
  },
};
</script>

<style scoped></style>
