export interface Board {
    id: number;
    name: string;
    user_id: number;
  }

export interface BoardWithImages extends Board {
    images: ImageItem[];
  }
  
 export interface NewBoardPayload {
    name: string;
    user_id: string;
  }
  
export interface ImageItem {
    id: number;
    label: string;
    category: number;
  }

export interface NewImageItemPayload {
    label: string;
    category: string;
  }