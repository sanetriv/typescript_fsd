import React from "react";

interface CourseParts {
  name: string,
  exerciseCount: number
}

const Total = ({courseParts} : {courseParts: CourseParts[]}) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {courseParts.reduce((carry, part): number =>  carry + part.exerciseCount, 0 )}
      </p>
    </div>
  )
};

export default Total;