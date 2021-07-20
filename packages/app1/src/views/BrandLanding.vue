<template>
  <div>
    App1 - Brand Landing Page
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

const BrandLanding = {
  components: {
    Icon
  },
}

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(BrandLanding)
  }
})

export default BrandLanding
export const bootstrap = vueLifecycles.bootstrap
export const mount = vueLifecycles.mount
export const unmount = vueLifecycles.unmount

</script>