const weight = process.argv[2];
const height = process.argv[3];
function calulateBmi(weight, height) {
  const bmi = weight / (height * height);
  return bmi;
}
console.log(calulateBmi(weight, height));
