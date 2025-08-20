/**
 * Root directory of all AWS resources for the project.
 */
export const awsRootDir =
  "https://wizroboticsintro.s3.us-east-2.amazonaws.com/Curriculum/WizSTEMInstitute/TeacherTraining/Scratch/Unit4/ScratchJackbox";

/**
 * Joins the given strings with a `/` as the delimiter.
 * @param  {...string} args The paths to join.
 * @returns The joined path.
 */
export function joinPath(...args) {
  return [...args].join("/");
}
