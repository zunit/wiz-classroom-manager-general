import { getRandomElement } from "@/utils/arrayUtils";

const divStyle = {
  width: "calc(500px)",
  justifySelf: "center",
};

const globalImgStyle = {
  width: "100%",
  borderRadius: "8px",
  marginTop: "2rem",
  marginBottom: "1rem",
};

const beginnerCodeBlocks = [
  { imgName: "move-to-center", style: { width: "50%" } },
  { imgName: "spin-around-mouse" },
];
const experiencedCodeBlocks = [
  { imgName: "cat-chase-mouse" },
  { imgName: "max-jump-height", style: { width: "50%" } },
];

export function generateCodeReadingBeginnerPrompt() {
  const promptData = getRandomElement(beginnerCodeBlocks);
  const imgPath = `https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/WizSTEMInstitute/TeacherTraining/Scratch/Unit4/ScratchJackbox/code-reading/beginner/${promptData.imgName}.png`;
  const imgStyle = { ...globalImgStyle, ...promptData.style };

  return (
    <div style={divStyle}>
      <img src={imgPath} style={imgStyle} />
    </div>
  );
}

export function generateCodeReadingExperiencedPrompt() {
  const promptData = getRandomElement(experiencedCodeBlocks);
  const imgPath = `https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/WizSTEMInstitute/TeacherTraining/Scratch/Unit4/ScratchJackbox/code-reading/experienced/${promptData.imgName}.png`;
  const imgStyle = { ...globalImgStyle, ...promptData.style };

  return (
    <div style={divStyle}>
      <img src={imgPath} style={imgStyle} />
    </div>
  );
}
