<script lang="ts">
  import { getModalStore } from "@skeletonlabs/skeleton";
  import { Image } from "@unpic/svelte";
  import { popup } from "@skeletonlabs/skeleton"
  import type { PopupSettings } from "@skeletonlabs/skeleton";

  const modalStore = getModalStore();

  const downloadPopup: PopupSettings = {
    event: "click",
    target: "downloadPopup",
    placement: "bottom"
  }
</script>

{#if $modalStore[0]}
  <div data-popup="downloadPopup" class="rounded-lg variant-glass-tertiary-800">
    <div class="arrow variant-glass" />
    <div class="flex flex-col">
      <button class="btn rounded-none variant-glass flex flex-col items-center">
        <span>UHD</span>
        <span class="text-xs opacity-50">2048 x 2048</span>
      </button>   
      <button class="btn rounded-none variant-glass flex flex-col items-center">
        <span>FHD</span>
        <span class="text-xs opacity-50">768 x 768</span>
      </button>   
    </div>
 </div>

  <div class="card p-5 space-y-4">
    <header class="text-xl line-clamp-2 font-bold">{$modalStore[0].title ?? '(Title Missing)'}</header>
    <Image class="rounded-md" height={768} width={768} src="{$modalStore[0].image}"/> 
    <button use:popup={downloadPopup} class="btn variant-ghost">Download</button>
  </div>
{/if}
