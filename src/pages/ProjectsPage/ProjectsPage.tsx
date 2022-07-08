import React from "react";
import { Sentence } from "../../components/Sentence";
import { ISentence } from "../../models/Sentence";
import projectsSentences from "../../store/projects-sentences.json";

export const ProjectsPage = () => {
  return (
    <div className="page">
      <ProjectsSentencesList />
    </div>
  );
};

const ProjectsSentencesList: React.FC = () => {
  const format = (sentence: ISentence) => {
    return (
      <a href={sentence.text} target="__blank" rel="noreferrer">
        {sentence?.desc}
      </a>
    );
  };

  const createSentenceElement = (sentence: ISentence): React.ReactNode => {
    let sentenceText: string | React.ReactElement = sentence.text;

    if (sentence.text.startsWith("https://")) {
      sentenceText = format(sentence);
    }

    return (
      <Sentence
        key={sentence.id}
        delay={sentence.id + 1}
        direction={sentence.direction}
      >
        {sentenceText}
      </Sentence>
    );
  };

  return <>{(projectsSentences as ISentence[]).map(createSentenceElement)}</>;
};
