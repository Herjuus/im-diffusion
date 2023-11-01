<script lang="ts">
  import type { SvelteComponent } from "svelte";
  import { getModalStore } from "@skeletonlabs/skeleton";
  import { Image } from "@unpic/svelte";
  import { popup } from "@skeletonlabs/skeleton"
  import type { PopupSettings } from "@skeletonlabs/skeleton";

  const modalStore = getModalStore();
  export let parent: SvelteComponent;

  const downloadPopup: PopupSettings = {
    event: "click",
    target: "downloadPopup",
    placement: "bottom"
  }
</script>

{#if $modalStore[0]}
  <div data-popup="downloadPopup" class="rounded-lg variant-glass-tertiary-800">
    <div class="arrow variant-glass" />
    <div class="btn-group-vertical">
      <a href="{$modalStore[0].body}" download={`${$modalStore[0].title}.png`} class="btn rounded-none variant-glass flex flex-col items-center">
        <span>UHD</span>
        <span class="text-xs opacity-50">2048 x 2048</span>
      </a>   
      <a href="{$modalStore[0].image}" download={`${$modalStore[0].title}.png`} class="btn rounded-none variant-glass flex flex-col items-center">
        <span>SD</span>
        <span class="text-xs opacity-50">512 x 512</span>
      </a>   
    </div>
 </div>

  <div class="card p-5 space-y-4">
    <header class="text-xl line-clamp-2 font-bold">{$modalStore[0].title ?? '(Title Missing)'}</header>
    <Image class="rounded-md" height={420} width={420} src="{$modalStore[0].image}"/> 
    <div class="flex justify-between">
      <button use:popup={downloadPopup} class="btn variant-ghost">Download</button>
      <button on:click={parent.onClose} class="btn variant-ghost-error">Close</button>
    </div>
  </div>
{/if}
