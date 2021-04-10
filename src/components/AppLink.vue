<template>
  <a
    :href="href"
    :class="linkActiveClass"
    @click.prevent="go"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
import { RouteParams, useLink, useRouter } from 'vue-router'

export default defineComponent({
  name: 'AppLink',
  props: {
    name: { type: String as PropType<AppRouteNames>, required: true },
    params: { type: Object as PropType<RouteParams | undefined>, default: undefined },
    activeClass: { type: String, default: '' },
  },
  setup (props) {
    const { href, isExactActive } = useLink({ to: props })
    const router = useRouter()

    const go = () => {
      if (props.params !== undefined) router.push({ name: props.name, params: props.params })
      else router.push({ name: props.name })
    }

    const linkActiveClass = computed(() => ({ [props.activeClass]: isExactActive.value }))

    return {
      href,
      go,
      isExactActive,
      linkActiveClass,
    }
  },
})
</script>
