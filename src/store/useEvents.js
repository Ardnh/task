import { defineStore } from 'pinia'
import { faker } from '@faker-js/faker';

export const useEventStore = defineStore('event', {
  state: () => ({
    eventList: []
  }),
  getters: {
    getEventList: (state) => state.eventList
  },
  actions: {
    addEvent(){
      this.eventList.push({
        id: faker.random.numeric(5),
        title: faker.lorem.sentence(7),
        description: faker.lorem.paragraph(),
        address: `${ faker.address.buildingNumber() + " " + faker.address.city() + " " + faker.address.cityName() + " " + faker.address.country() + " " + faker.address.countryCode() }`,
        banner: faker.image.abstract(),
        start_date: faker.date.recent(),
        end_date: faker.date.soon(3)
      })
    },
    updateEvent(data){

      let index = this.eventList.findIndex((item) => item.id === data.id)

      this.eventList[index].id = data.id
      this.eventList[index].title = data.title
      this.eventList[index].description = data.description
      this.eventList[index].address = data.address
      this.eventList[index].banner = data.banner
      this.eventList[index].start_date = data.start_date
      this.eventList[index].end_date = data.end_date


    },
    deleteEvent(id){
      let index = this.eventList.findIndex((item) => item.id === id)
      this.eventList.splice(index, 1)
    }
  }
})
