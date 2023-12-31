const HOST_URL = process.env.REACT_APP_HOST_URL || "192.168.254.12";
// const HOST_URL = process.env.REACT_APP_HOST_URL || "localhost";


export const API_URL = `https://${HOST_URL}:3000/`;
export interface Board {
    id: string;
    name: string;
    user_id: string;
  }

export interface BoardWithImages extends Board {
    images: ImageItem[];
  }
  
 export interface NewBoardPayload {
    name: string;
    user_id: string;
  }
  
export interface ImageItem {
    image_url: string;
    id: string;
    label: string;
    category: string;
  }

export interface NewImageItemPayload {
    label: string;
    category: string;
    image_url: string;
    date: string;
  }