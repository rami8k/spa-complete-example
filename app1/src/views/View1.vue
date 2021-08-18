<template>
  <div>
    App1 - View1
    <Icon>
      <template v-slot:label>
        some component
      </template>
    </Icon>
  </div>
</template>

<script>
import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'

import Icon from '../components/Icon.vue'

const Article = {
  components: {
    Icon
  },
}

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(Article)
  }
})

export default Article
export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount

</script>