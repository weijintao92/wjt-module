import CodeView from './src/index';

/* istanbul ignore next */
CodeView.install = function(Vue) {
  Vue.component(CodeView.name, CodeView);
};

export default CodeView;
