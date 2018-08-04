import React from "react";
export const FlattenExample = () => {
  const method = "Flatten a nested array";
  const uglyArray = [1, 2, [3, [4, [5, 6]]]];

  const flatten = arr =>
    arr.reduce(
      (result, elem, index, array) => [
        ...result,
        ...(Array.isArray(elem) ? flatten(elem) : [elem])
      ],
      []
    );

  console.log(method, {
    nestedArray: JSON.stringify(uglyArray),
    flattendArray: JSON.stringify(flatten(uglyArray))
  });
  return <React.Fragment>FlattenExample</React.Fragment>;
};
