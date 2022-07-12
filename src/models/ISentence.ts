export type SentencePosition = "Left" | "Right";

export interface ISentence {
  id: number;
  text: string;
  position: SentencePosition;
  desc?: string;
}
