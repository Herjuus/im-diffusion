<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
  import { LightSwitch } from '@skeletonlabs/skeleton';
	import { storePopup } from '@skeletonlabs/skeleton';
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<div class="p-2">
  <LightSwitch />
</div>

<slot />
