import React from "react";

import { Sentence } from "components/ui/Sentence";
import withSentenceAnimation from "hoc/withSentenceAnimation";
import { ISentence } from "models/ISentence";
import projectsSentences from "store/projects-sentences.json";

export const ProjectsPage = () => {
  return (
    <div className="page">
      <MProjectsSentenceList />
    </div>
  );
};

const ProjectsSentenceList: React.FC = () => {
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
        delay={sentence.id}
        sentencePosition={sentence.position}
      >
        {sentenceText}
      </Sentence>
    );
  };

  return <>{(projectsSentences as ISentence[]).map(createSentenceElement)}</>;
};

const MProjectsSentenceList = withSentenceAnimation(ProjectsSentenceList);
