import { NewBoardPayload, Board } from "../types";
const API_URL = "http://localhost:3000/";

export async function getBoards(): Promise<Board[]> {
  const requestInfo = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await fetch(`${API_URL}boards`, requestInfo);
  const boards: Board[] = await response.json();
  console.log("API");
  console.log(boards);
  return boards;
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
