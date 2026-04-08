import { getRandomElement } from "@/utils/arrayUtils";
import { awsRootDir, joinPath } from "@/utils/pathUtils";
import { Difficulties } from "@/utils/TimeChunkModel";

const divStyle = {
  width: "calc(500px)",
  justifySelf: "center",
  marginTop: "1rem",
  marginBottom: "1rem",
};

const globalImgStyle = {
  width: "100%",
  borderRadius: "8px",
};

const beginnerCodeBlocks = [
  {
    imgName: "move-to-center",
    style: { width: "50%" },
    description: (
      <>
        <h2>Translate!</h2>
        <p>Describe what the following code will do:</p>
      </>
    ),
  },
  {
    imgName: "spin-around-mouse",
    style: { width: "90%" },
    description: (
      <>
        <h2>Translate!</h2>
        <p>Describe what the following code will do:</p>
      </>
    ),
  },
  {
    imgName: "shake-around-mouse",
    style: { width: "90%" },
    description: (
      <>
        <h2>Debug!</h2>
        <p>
          The following code is supposed to make a sprite shake (near where it
          started) when clicked.
        </p>
        <p>However, the code is currently not working.</p>
        <p>Find all the errors!</p>
      </>
    ),
  },
];

const experiencedCodeBlocks = [
  {
    imgName: "cat-chase-mouse",
    description: (
      <>
        <h2>Translate!</h2>
        <p>Describe what the following code will do:</p>
      </>
    ),
  },
  {
    imgName: "max-jump-height",
    style: { width: "50%" },
    description: (
      <>
        <h2>Translate!</h2>
        <p>Describe what the following code will do:</p>
      </>
    ),
  },
  {
    imgName: "max-number",
    style: { width: "90%" },
    description: (
      <>
        <h2>Debug!</h2>
        <p>
          The following code is supposed to find the largest of a list of
          numbers.
        </p>
        <p>However, the code is currently not working.</p>
        <p>Find all the errors!</p>
      </>
    ),
  },
];

export function generateCodeAlongPrompt(difficulty) {
  const promptDataArray =
    difficulty === Difficulties.BEGINNER
      ? beginnerCodeBlocks
      : experiencedCodeBlocks;
  const promptData = getRandomElement(promptDataArray);

  const imgPath = joinPath(
    awsRootDir,
    "code-along",
    difficulty.toLowerCase(),
    `${promptData.imgName}.png`
  );

  const imgStyle = { ...globalImgStyle, ...promptData.style };

  return (
    <div style={divStyle}>
      {promptData.description}
      <img src={imgPath} style={imgStyle} />
    </div>
  );
}
