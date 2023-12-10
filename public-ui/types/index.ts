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