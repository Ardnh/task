<template>
    <div>
        <div class="text-center text-6xl mt-7">Events Repository</div>
        <div class="w-9 mx-auto mt-5">
            <TabView>
                <TabPanel header="Manage Event">
                    <ManageEvents/>
                </TabPanel>
                <TabPanel header="List Events">
                    <ListEvents/>
                </TabPanel>
            </TabView>
        </div>
    </div>
</template>
<script setup>
import ManageEvents from "../components/ManageEvents.vue"
import ListEvents from "../components/ListEvents.vue"
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

</script>