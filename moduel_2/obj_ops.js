let student = {
  name: 'Maya',
  id: 13,
  address: 'Gzipur',
  result: {
    bangla: 89,
    english: 90,
    math: 87,
    ict: 57,
  },
};
let totalMarks = 0;
let totalSub = 0;
for (let subj in student.result) {
  totalMarks += student.result[subj];
  totalSub++;
}
let avg = (totalMarks / totalSub).toFixed(3);

console.log(totalMarks, totalSub, avg);
