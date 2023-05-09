<template>
    <Toast/>
    <ConfirmPopup/>
    <h1 v-if="store.getEventList.length > 0">Manage events</h1>
    <Button v-if="store.getEventList.length > 0" label="Add new event" severity="info" @click="addNewEvent" />
    <div v-if="store.getEventList.length > 0" class="mt-3">
        <DataTable :value="store.getEventList" tableStyle="min-width: 50rem" :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]">
            <Column field="title" header="Title">
                <template #body="{data}">
                    <div class="white-space-nowrap overflow-hidden text-overflow-ellipsis w-13rem">{{ data.title }}</div>
                </template>
            </Column>
            <Column field="description" header="Description">
                <template #body="{data}">
                    <div class="white-space-nowrap overflow-hidden text-overflow-ellipsis w-13rem">{{ data.description }}</div>
                </template>
            </Column>
            <Column field="address" header="Address">
                <template #body="{data}">
                    <div class="w-12rem">{{ data.address }}</div>
                </template>
            </Column>
            <Column header="Banner">
                <template #body="{data}">
                    <Image :src="data.banner" width="200" height="150" class="shadow-2 border-round" preview/>
                </template>
            </Column>
            <Column field="start_date" header="Start Date">
                <template #body="{data}">
                    <div class="w-12rem">{{ data.start_date }}</div>
                </template>
            </Column>
            <Column field="end_date" header="End Date">
                <template #body="{data}">
                    <div class="w-12rem">{{ data.end_date }}</div>
                </template>
            </Column>
            <Column header="Actions" class="">
                <template #body="{data}">
                    <div class="flex justify-content-around w-12rem">
                        <Button @click="openDetail(data)" icon="pi pi-eye" severity="warning" rounded outlined aria-label="View" />
                        <Button @click="updateEvent(data)" icon="pi pi-pencil" severity="help" rounded outlined aria-label="Update" />
                        <Button @click="deleteEvent(data)" icon="pi pi-trash" severity="danger" rounded outlined aria-label="Delete" />
                    </div>
                </template>  
            </Column>
        </DataTable>
    </div>
    <div v-else>
        <div class="flex flex-wrap align-items-center justify-content-center my-7">
            <div class="text-xl font-bold">Kamu belum membuat event !</div>
            <Button class="mx-3" label="Add new event" severity="info" @click="addNewEvent" />
        </div>
    </div>
    <!-- Detail event -->
    <Dialog v-if="eventData !== null" v-model:visible="isVisible" modal header="Detail event" :style="{ width: '80vw' }">
        <DetailDialog :event="eventData"/>
    </Dialog>
    <!-- Update Dialog -->
    <Dialog v-model:visible="isUpdateVisible" modal header="Update event" :style="{ width: '80vw' }">
        <div class="p-5">
            <div class="grid">
                <div class="col-4">Title</div><div class="col-8"><InputText class="w-28rem" v-model="updateData.title" type="text" placeholder="Title" /></div>
                <div class="col-4">Description</div><div class="col-8"><InputText class="w-28rem" v-model="updateData.description" type="text" placeholder="Description" /></div>
                <div class="col-4">Address</div><div class="col-8"><InputText class="w-28rem" v-model="updateData.address" type="text" placeholder="Address" /></div>
                <div class="col-4">Banner</div><div class="col-8"><InputText class="w-28rem" v-model="updateData.banner" disabled type="text" placeholder="Banner" /></div>
                <div class="col-4">Start date</div><div class="col-8"><Calendar v-model="updateData.start_date" dateFormat="dd/MM/yy" /></div>
                <div class="col-4">End date</div><div class="col-8"><Calendar v-model="updateData.end_date" dateFormat="dd/MM/yy" /></div>
            </div>
        </div>
        <template #footer>
            <Button label="Cancel" @click="isUpdateVisible = false" text />
            <Button severity="info" label="Save" @click="submitUpdateEvent"/>
        </template>
    </Dialog>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useEventStore } from "../store/useEvents"
import { useToast } from 'primevue/usetoast';
import Toast from 'primevue/toast';
import DetailDialog from "../components/DetailDialog.vue"
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Image from 'primevue/image';
import Dialog from 'primevue/dialog';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Calendar from 'primevue/calendar';
import ConfirmPopup from 'primevue/confirmpopup';

import { useConfirm } from "primevue/useconfirm";

const confirm = useConfirm();

const toast = useToast();
const store = useEventStore()
const eventData = ref(null)
const isVisible = ref(false)
const isUpdateVisible = ref(false)
const updateData = reactive({
    id: "",
    title: "",
    description: "",
    address: "",
    banner: "",
    start_date:"",
    end_date: ""
})

const openDetail = (data) => {
    eventData.value = data
    isVisible.value = !isVisible.value
}

const updateEvent = (data) => {
    updateData.id = data.id
    updateData.title = data.title
    updateData.description = data.description
    updateData.address = data.address
    updateData.banner = data.banner
    updateData.start_date = data.start_date
    updateData.end_date = data.end_date

    isUpdateVisible.value = !isUpdateVisible.value
}

const submitUpdateEvent = () => {
    store.updateEvent(updateData)
    isUpdateVisible.value = !isUpdateVisible.value
    toast.add({ severity: 'info', summary: 'Info', detail: 'Berhasil update event', life: 3000 });
}

const deleteEvent = (data) => {
    store.deleteEvent(data.id)
    toast.add({ severity: 'info', summary: 'Info', detail: 'Berhasil menghapus event', life: 3000 });
}

const addNewEvent = () => {
    store.addEvent()
    toast.add({ severity: 'info', summary: 'Info', detail: 'Berhasil menambah event', life: 3000 });
}
</script>