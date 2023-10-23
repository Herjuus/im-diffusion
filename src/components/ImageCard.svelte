<script lang="ts">
  export let prompt: string;
  export let image: any;

</script>

<button class="card variant-ghost-surface p-5 m-5 text-start space-y-2 w-[350px] flex flex-col items-center">
  <span class="line-clamp-1 font-bold text-lg w-full">{prompt}</span>
  <img class="rounded-md h-[300px] w-[300px] {!image && 'placeholder animate-pulse p-[0.51px]'}" src="{`data:image/png;base64,${image}`}" alt="">
</button>
