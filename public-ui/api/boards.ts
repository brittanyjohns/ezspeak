import { NewBoardPayload, Board, BoardWithImages, API_URL } from "../types";


export async function getBoards(): Promise<Board[]> {
  const requestInfo = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    console.log("API_URL", API_URL);
    const response = await fetch(`${API_URL}boards`, requestInfo);
    console.log("Response", response);
    const boards: Board[] = await response.json();
    console.log("API");
    console.log(boards);
    return boards;
  }
  catch (e) {
    console.log(e.message);
    console.log(e.stack)
    return [];
  }
}

export async function createBoard(payload: NewBoardPayload): Promise<Board> {
  const requestInfo = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  const response = await fetch(API_URL + "boards", requestInfo);
  const board: Board = await response.json();
  return board;
}

export async function getBoard(id: string): Promise<Board> {
  const requestInfo = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${API_URL}boards/${id}`, requestInfo);
  const board: Board = await response.json();
  return board;
}

export async function getBoardWithImages(id: string): Promise<BoardWithImages> {
  const requestInfo = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${API_URL}boards/${id}`, requestInfo);
  const board: BoardWithImages = await response.json();
  console.log("API", board);
  return board;
}

export async function deleteBoard(id: string): Promise<void> {
  const requestInfo = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  await fetch(`${API_URL}boards/${id}`, requestInfo);
}

export async function updateBoard(id: string, payload: NewBoardPayload): Promise<Board> {
  const requestInfo = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  const response = await fetch(`${API_URL}boards/${id}`, requestInfo);
  const board: Board = await response.json();
  return board;
}

export async function addImageListToBoard(id: string, payload: { word_list: string[] }): Promise<Board> {
  const requestInfo = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  const response = await fetch(`${API_URL}boards/${id}/add_word_list`, requestInfo);
  const board: Board = await response.json();
  return board;
}