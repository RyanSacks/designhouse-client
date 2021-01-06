import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps-withscopedautocomp';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAiJOtCSDIZ_QUXH64ahn7hFj6aXWmlIDU',
    libraries: 'places'
  }
});
