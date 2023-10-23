import axios from "axios";
import { imageData } from "./stores";

export function fetchImage(prompt: string){
  console.log(prompt)
  axios.get(`http://127.0.0.1:8000/?prompt=${prompt}`)
    .then((response) => {
      console.log(response.data.image)
      imageData.update((currentImageData) => {
        const newData = [...currentImageData, response.data.image];
        return newData;
      });
      return
  })
  .catch((error) => {
    console.log(error)
  })
} 
