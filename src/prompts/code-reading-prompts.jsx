import { getRandomElement } from "@/utils/arrayUtils";
import { awsRootDir } from "@/utils/pathUtils";

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

const codeReadingBeginnerPath = `${awsRootDir}/code-reading/beginner`;
const codeReadingExperiencedPath = `${awsRootDir}/code-reading/experienced`;

export function generateCodeReadingBeginnerPrompt() {
  const promptData = getRandomElement(beginnerCodeBlocks);
  const imgPath = `${codeReadingBeginnerPath}/${promptData.imgName}.png`;
  const imgStyle = { ...globalImgStyle, ...promptData.style };

  return (
    <div style={divStyle}>
      {promptData.description}
      <img src={imgPath} style={imgStyle} />
    </div>
  );
}

export function generateCodeReadingExperiencedPrompt() {
  const promptData = getRandomElement(experiencedCodeBlocks);
  const imgPath = `${codeReadingExperiencedPath}/${promptData.imgName}.png`;
  const imgStyle = { ...globalImgStyle, ...promptData.style };

  return (
    <div style={divStyle}>
      {promptData.description}
      <img src={imgPath} style={imgStyle} />
    </div>
  );
}
