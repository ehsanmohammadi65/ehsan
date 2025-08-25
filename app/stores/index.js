// stores/counter.js
import { defineStore } from 'pinia'

export const useSystemStore = defineStore('system', {
  state: () => {
    return {   
         /** @type {{ text: string, id: number, isFinished: boolean }[]} */
    dataExam: [{
    img: "/img/ex1.png",
    alt: "siname.ir",
    title: "وب سایت سینا می",
    des: "وب سایت آموزشی پزشکی",
  },
  {
    img: "/img/2.jpg",
    alt: "VideoDownloader",
    title: "وب سایت ویدئو دانلودر",
    des: "وب سایت دانلود ویدئو از شبکه های اجتماعی ",
  },
  {
    img: "/img/xp.png",
    alt: "Xprogramer",
    title: "وب سایت ایکس پروگرمر",
    des: "یک وب سایت حرفه ای برای معرفی اشخاص ",
  },
],
    /** @type {'all' | 'App' | 'Web'} */
    filter: 'all',
    // type will be automatically inferred to number
    nextId: 0,

     }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
    
    },
  },
})