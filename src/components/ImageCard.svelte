<script lang="ts">
  import { getModalStore, type ModalSettings } from "@skeletonlabs/skeleton";
  import { Image } from "@unpic/svelte"


  const modalStore = getModalStore();
  export let prompt: string;
  export let image: any;


  function triggerModal() {
    if (image) {

      const imageModal: ModalSettings = {
        type: 'component',
        component: "imageModal",
        title: prompt,
        image: `data:image/png;base64,${image}`
      } 
      modalStore.trigger(imageModal)
    }
  }

</script>

<button on:click={triggerModal} class="card max-w-[350px] variant-ghost-surface p-5 text-start space-y-2 flex flex-col items-center">
  <span class="line-clamp-1 font-bold text-lg w-full">{prompt}</span>
  <Image height={300} width={300} class="aspect-square rounded-md min-h-[300px] min-w-[300px] {!image && 'placeholder animate-pulse p-[1px]'}" src="{`data:image/png;base64,${image}`}" alt=""/>
</button>
