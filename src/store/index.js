import { defineStore } from 'pinia'
// import axios from 'axios'

export const useWeather = defineStore('weather', {
   state: () => ({
      region: 't  ashkent'
   }),
})