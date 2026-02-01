const students = {
  101: { name: "Rahul :", marks: { Math: 80, English: 75, Biology: 85, CS: 80 } },
  102: { name: "Anita :", marks: { Math: 90, English: 88, Biology: 92, CS: 90 } },
  103: { name: "Vikas :", marks: { Math: 60, English: 55, Biology: 65, CS: 70 } },
  104: { name: "Ali :", marks: { Math: 90, English: 85, Biology: 93, CS: 86 } },
  105: { name: "Aslam :", marks: { Math: 50, English: 45, Biology: 33, CS: 56 } },
  106: { name: "Imran Akbar :", marks: { Math: 40, English: 35, Biology: 33, CS: 46 } }
};

function showResult() {
  let roll = document.getElementById("roll").value;

  if (roll === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Inter Roll Number!",
      footer: '<a href="javascript:(0)">Why do I have this issue?</a>'
    });
    return;
  }

  let student = students[roll];
  if (!student) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Inter Valid Roll Number, 101 to 106 !",
      footer: '<a href="javascript:(0)">Why do I have this issue?</a>'
    });
    return;
  }

  let total = 0;
  let count = 0;
  let rows = "";

  for (let subject in student.marks) {
    total += student.marks[subject];
    count++;
    rows += `<tr>
                    <td>${subject}</td>
                    <td>${student.marks[subject]}</td>
                 </tr>`;
  }

  let percentage = total / count;
  let grade =
    percentage >= 90 ? "A+" :
      percentage >= 80 ? "A" :
        percentage >= 60 ? "B" :
          percentage >= 40 ? "C" : "Fail";

  document.getElementById("result").innerHTML = `
        <h3>${student.name}</h3>
        <table>
            <tr>
                <th>Subject</th>
                <th>Marks</th>
            </tr>
            ${rows}
            <tr>
                <th>Percentage</th>
                <th>${percentage.toFixed(2)}%</th>
            </tr>
            <tr>
                <th>Grade</th>
                <th>${grade}</th>
            </tr>
        </table>
    `;
}
