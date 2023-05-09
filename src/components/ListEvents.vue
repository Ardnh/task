<template>
    <div v-if="store.getEventList.length > 0">
        <div v-for="event in store.getEventList" :key="event.id" class="p-2 border-round-xl border-blue-600 my-2 border-2">
            <div class="grid">
                <div class="col-4 align-items-center">
                    <Image :src="event.banner" width="300" height="300" preview/>
                </div>
                <div class="col-8 p-4">
                    <div class="text-lg font-bold">{{ event.title }}</div>
                    <div class="text-md font-normal text-gray-700 mt-2">{{ event.description }}</div>
                    <div class="text-md font-bold mt-5">{{ event.address }}</div>
                    <div class="flex flex-wrap">
                        <Chip class="mt-4 mb-2" :label="`Start date : ${event.start_date}`"/>
                        <Chip :label="`End date : ${event.end_date}`"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="text-center font-bold text-xl my-7">
            Belum ada events !
        </div>
    </div>
</template>
<script setup>
import { useEventStore } from "../store/useEvents"
import Chip from 'primevue/chip';
import Image from 'primevue/image';
const store = useEventStore()


</script>