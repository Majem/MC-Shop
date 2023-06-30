import '../css/app.css';
import './bootstrap';
import { createApp, h } from 'vue';
import {createInertiaApp, Head, Link} from '@inertiajs/vue3';
const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';
import { i18nVue } from 'laravel-vue-i18n'


createInertiaApp({

    title: (title) => {
        return `${title} - ${appName}`
    },
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        console.log(pages);
        console.log(`./Pages/${name}.vue`);

        return pages[`./Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(i18nVue, {
                lang: 'pl',
                resolve: lang => {
                    const langs = import.meta.globEager('../../lang/*.json');
                    return langs[`../../lang/${lang}.json`].default;
                },
            })
            .component('Head', Head)
            .component('Link', Link)
            .mount(el);
    },
    progress: {
        // The color of the progress bar.
        color: '#e9204f',

    },
});
