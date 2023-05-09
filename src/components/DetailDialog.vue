<template>
    <div class="p-5">
        <div class="grid">
            <div class="col-4">
                <Image :src="props.event.banner" height="250" preview />
            </div>
            <div class="col-8">
                <div class="px-4">
                    <div class="text-xl font-bold">{{ props.event.title }}</div>
                    <div class="text-lg font-normal my-2 text-gray-600">{{ props.event.description }}</div>
                    <div class="text-xl font-bold mt-4">{{ props.event.address }}</div>
                    <div class="text-xl font-normal mt-2">{{ props.event.start_date }}</div>
                    <div class="text-xl font-normal">{{ props.event.end_date }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {defineProps} from "vue"
import Image from 'primevue/image';
const props = defineProps(["event"])

</script>