<template>
  <div class="h-auto">
    <div class="first h-[30%] grid md:grid-cols-2 border-2">
      <div class="flex flex-col">
        <h1>Toshkent shahri</h1>
        <p>Seshanba, 20-February</p>
        <p>-1 C</p>
      </div>
      <img src="" alt="" />
    </div>
    <div class="second h-[10%] flex gap-2 border-2">
      <div class="flex flex-col border-2">
        <h1>Hozir</h1>
        <p>-1C</p>
        <img src="" alt="" />
      </div>
      <div class="flex flex-col border-2">
        <h1>Hozir</h1>
        <p>-1C</p>
        <img src="" alt="" />
      </div>
    </div>
    <div class="thirty h-[60%] grid md:grid-cols-2">
      <div class="left border-2">
        <div class="flex justify-between">
          <p>Seshanba <span>20</span></p>
          <div>
            <img src="" alt="" />
            <p>-8</p>
          </div>
        </div>
      </div>
      <div class="right border-2">
        <div class="flex justify-between">
          <p>shanba <span>20</span></p>
          <div>
            <img src="" alt="" />
            <p>-8</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useWeather } from "../store/index"; // adjust your import path if necessary
import { mapWritableState } from "pinia";

export default {
  data() {
    return {
      WeatherData: null,
      apiKey: "736e94c1f1904dcd9d033dc1736ae5e6",
    };
  },
  mounted() {
    this.getWeatherData();
  },
  methods: {
    async getWeatherData() {
      return await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.region}&appid=${this.apiKey}`
          // `.https://api.openweathermap.org/data/2.8/onecall?lat=41.311081&lon=69.240562&exclude=minutely,hourly,alerts&appid=${this.apiKey}&units=metric&lang=ru`
        )
        .then((response) => {
          console.log(response.data);
          this.WeatherData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ...mapWritableState(useWeather, ["region"]),
  },
};
</script>

<style scoped></style>
