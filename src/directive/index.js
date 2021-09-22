import directive from './directives'

const importDirective = Vue => {
  Vue.directive('resize', directive.resize),
  Vue.directive('height', directive.height),
  Vue.directive('hasPermi', directive.hasPermi)
}

export default importDirective