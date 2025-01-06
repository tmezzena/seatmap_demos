import { createApp, defineAsyncComponent } from 'vue';
import Layout from './Layout.vue';

//const Content = defineAsyncComponent(() => import('home/Content'));
//const Button = defineAsyncComponent(() => import('home/Button'));
//const ReservedSeatMap = defineAsyncComponent(() => import('home/ReservedSeatMap'));
const ReservedSeatMap = defineAsyncComponent(() => import('reservedseat/ReservedSeatMap'));

const app = createApp(Layout);

//app.component('content-element', Content);
//app.component('button-element', Button);
app.component('reserved-seat-map', ReservedSeatMap);

app.mount('#app');


