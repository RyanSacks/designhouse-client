import Vue from 'vue'
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';

// require all components in the current directory and subdirectories
const requireComponent = require.context('.', true, /_base-[\w-]+\.vue$/); //

requireComponent.keys().forEach(fileName => {

  // get the components's configuration
  const componentsConfig = requireComponent(fileName);

  const fn = fileName.split('/').pop().replace(/\.\w+$/, '');

  const componentName = upperFirst(camelCase(fn));

  Vue.component(componentName, componentsConfig.default || componentsConfig);
});
