<script lang="ts">
	import '../app.postcss';
  import { initializeStores, type ModalComponent } from '@skeletonlabs/skeleton';
  import { Modal } from '@skeletonlabs/skeleton';
  import ImageModal from '../components/modals/ImageModal.svelte';

  initializeStores();
	// Floating UI for Popups
  import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
  import { LightSwitch } from '@skeletonlabs/skeleton';
	import { storePopup } from '@skeletonlabs/skeleton';
  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  const modalRegistry: Record<string, ModalComponent> = {
    imageModal: { ref: ImageModal }
  }
</script>

<Modal components={modalRegistry} />

<svelte:head>
  <title>IM-DIFFUSION</title>
</svelte:head>

<slot />
