export type SentenceDirection = "Left" | "Right";

export interface ISentence {
  id: number;
  text: string;
  direction: SentenceDirection;
}
