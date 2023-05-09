import pinia from "./pinia"
import router from "../router"
import PrimeVue from "./primevue"
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';

export const registerPlugins = (app) => {
    app
        .use(pinia)
        .use(router)
        .use(PrimeVue)
        .use(ToastService)
        .use(ConfirmationService)
}