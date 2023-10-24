import axios from "axios";
import { imageData } from "./stores";

export function fetchImage(prompt: string){
  console.log(prompt)
  imageData.update((currentImageData) => {
    const newData = [{"prompt": prompt, "image": ""}, ...currentImageData]
    return newData
  })
  axios.get(`http://10.58.176.142:8000/?prompt=${prompt}`)
    .then((response) => {
      console.log(response)
      imageData.update((imageData) => {
        imageData[0] = {"prompt": prompt, "image": response.data.image_small, "image_large": response.data.image_large}; // Update the last item in the array } return array;
        return imageData
      });
  })
  .catch((error) => {
    console.log(error)
  })
}  
