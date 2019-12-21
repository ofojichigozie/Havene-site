import Home from './components/Home.vue';
import WhatWeDo from './components/WhatWeDo.vue';
import WorkAsExpert from './components/WorkAsExpert.vue';
import WorkAsTrainee from './components/WorkAsTrainee.vue';
import SendMessage from './components/SendMessage.vue';
// import WhoWeAre from './components/WhoWeAre.vue';

export default [
    { path: '/', component: Home },
    // { path: '/who_we_are', component: WhoWeAre },
    { path: '/what_we_do', component: WhatWeDo },
    { path: '/work_as_expert', component: WorkAsExpert },
    { path: '/work_as_trainee', component: WorkAsTrainee },
    { path: '/send_message', component: SendMessage }
];