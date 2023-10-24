<script lang="ts">
  import { Image } from "@unpic/svelte"
  export let prompt: string;
  export let image: any;

</script>

<button class="card variant-ghost-surface p-5 m-5 text-start space-y-2 w-[350px] flex flex-col items-center">
  <span class="line-clamp-1 font-bold text-lg w-full">{prompt}</span>
  <Image height={500} width={500} class="rounded-md min-h-[300px] min-w-[300px] {!image && 'placeholder animate-pulse p-[1px]'}" src="{`data:image/png;base64,${image}`}" alt=""/>
</button>
