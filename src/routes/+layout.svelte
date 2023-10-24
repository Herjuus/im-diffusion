<script lang="ts">
	import '../app.postcss';
  import { initializeStores } from '@skeletonlabs/skeleton';
  import { Modal } from '@skeletonlabs/skeleton';

  initializeStores();
	// Floating UI for Popups
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
  import { LightSwitch } from '@skeletonlabs/skeleton';
	import { storePopup } from '@skeletonlabs/skeleton';
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<Modal />

<div class="p-2 absolute top-0 left-0">
  <LightSwitch />
</div>

<slot />
