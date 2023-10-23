<script lang="ts">
  import ImageCard from "../../components/ImageCard.svelte";
  import { fetchImage } from "../../lib/fetchImage"
  import { imageData } from "../../lib/stores"

  let prompt: string = '';
  let images: Array<string> = [];
  imageData.subscribe((imageData) => {
    images = imageData
    console.log(images[0])
  });

</script>


<div class="w-screen h-full flex flex-col items-center">
  <div>
    <form class="flex gap-2 lg:w-[750px]" on:submit={e => {e.preventDefault(); fetchImage(prompt);}}>
      <input class="input variant-ghost-surface" bind:value={prompt} type="text" placeholder="Prompt...">
      <button class="btn variant-ghost-surface">Generate</button>
    </form>
  </div>
  <div class="grid lg:grid-cols-2 grid-cols-1 ">
    {#each images as image} 
      <ImageCard prompt={image.prompt} image={image.image} /> 
    {/each}
  </div>
</div>
