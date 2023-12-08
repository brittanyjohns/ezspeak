const API_URL = "http://localhost:3000/";
import { NewImageItemPayload, ImageItem } from "../types";
export async function getImages(): Promise<ImageItem[]> {
  const requestInfo = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${API_URL}images`, requestInfo);
  const images: ImageItem[] = await response.json();
  console.log("API");
  console.log(images);
  return images;
}

export async function createImage(payload: NewImageItemPayload): Promise<ImageItem> {
  const requestInfo = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  const response = await fetch(API_URL + "images", requestInfo);
  const image: ImageItem = await response.json();
  return image;
}
