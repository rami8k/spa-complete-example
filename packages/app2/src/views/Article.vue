<template>
  <div>
    Article Page
    <Icon>
      <template v-slot:label>
        Manage Subscription
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