<script lang="ts">
  import ImageCard from "../../components/ImageCard.svelte";
  import { fetchImage } from "../../lib/fetchImage"
  import { imageData } from "../../lib/stores/imageData"

  let disabled: boolean = false;
  let prompt: string = '';
  let images: Array<string> = [];

  imageData.subscribe((imageData) => {
    disabled = false
    images = imageData
  });

</script>


<div class="flex flex-col items-center">
  <div class=" md:w-5/6 lg:w-4/6 xl:w-3/6">
    <a href="/">
      <h2 class="h2 py-1">IM-DIFFUSION</h2>
    </a>
    <div class="space-y-2">
      <div>
        <form class="flex gap-2" on:submit={e => {e.preventDefault(); fetchImage(prompt); prompt = ''; disabled = true}}>
          <input disabled={disabled} class="input focus:border-surface-400 flex-1 variant-ghost-surface" bind:value={prompt} type="text" placeholder="Prompt...">
          <button disabled={disabled} class="btn variant-ghost-surface">Generate</button>
        </form>
      </div>
      <div class="grid lg:grid-cols-2 grid-cols-1 gap-2 w-full">
        {#each images as image} 
          <ImageCard prompt={image.prompt} image_large={image.image_large} image={image.image} /> 
        {/each}
      </div>
    </div>
  </div>
</div>
