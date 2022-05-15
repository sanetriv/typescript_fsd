import React from "react";
import { CoursePart } from "./types";

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Part = ({ coursePart }: { coursePart: CoursePart }) => {
  
  const whichPart = (part: CoursePart) => {
      switch (part.type) {
        case 'normal':
          return (
          <p>
            <b>{part.name} {part.exerciseCount}</b><br></br>
            <i>{part.description}</i>
          </p>
          );
        case 'groupProject':
          return (
            <p>
              <b>{part.name} {part.exerciseCount}</b><br></br>
              project exercises {part.groupProjectCount}<br></br>
            </p>
          );
        case 'submission':
          return (
            <p>
              <b>{part.name} {part.exerciseCount}</b><br></br>
              <i>{part.description}</i><br></br>
              submit to: {part.exerciseSubmissionLink}<br></br>
            </p>
          );
        case 'special':
          return (
            <p>
              <b>{part.name} {part.exerciseCount}</b><br></br>
              <i>{part.description}</i><br></br>
              required skills: {part.requirements.map((req, i) => [i > 0 && ", ", <span key={req}>{req}</span>])}
            </p>
          );
        default:
          return assertNever(part);
        }
  };
  
  return (
    <div>
      {whichPart(coursePart)}
    </div>
  );
};

export default Part;