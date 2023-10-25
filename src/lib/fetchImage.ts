import axios from "axios";
import { imageData } from "./stores/imageData";
import { isDisabled } from "./stores/isDisabled";

export function fetchImage(prompt: string){
  imageData.update((currentImageData) => {
    const newData = [{"prompt": prompt, "image": ""}, ...currentImageData]
    return newData
  })
  isDisabled.set(true);
  axios.get(`http://10.58.176.142:8000/?prompt=${prompt}`)
    .then((response) => {
      imageData.update((imageData) => {
        imageData[0] = {"prompt": prompt, "image": response.data.image_small, "image_large": response.data.image_large}; // Update the last item in the array } return array;
        return imageData
      });
  })
  .catch((error) => {
    console.log(error)
  })
}  
