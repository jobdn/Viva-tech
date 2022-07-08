import { SentenceDirection } from "../models/Sentence";

export interface IAboutSentenceProps {
  children: React.ReactNode;
  delay: number;
  direction: SentenceDirection;
}
