interface TransactionObj {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransaction: TransactionObj = {
  Pizza: -10,
  Books: 40,
  Job: 30,
};

console.log(todaysTransaction["Pizza"]);

let prop: string = "Pizza";

console.log(todaysTransaction[prop]);

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }

  return total;
};

// ////////////////////////////////////////

interface Student {
  [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "John",
  GPA: 3.5,
  classes: [1, 2, 3],
};

for (const key in student) {
  console.log(`${key}:${student[key as keyof Student]}`);
}

for (const key in student) {
  console.log(`${key}:${student[key as keyof typeof student]}`);
}

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`key: ${key}:${student[key]}`);
};

logStudentKey(student, "GPA");

// /////////////////////////////////////////////////////

// interface Incomes {
//   [key: string]: string | number | number[] | undefined;
// }

type Streams = "salary" | "bonus" | "sideHustle";

type Incomes = Record<Streams, number>;

const monthlyIncome: Incomes = {
  salary: 500,
  bonus: 100,
  sideHustle: 250,
};

for (const revenue in monthlyIncome) {
  console.log(monthlyIncome[revenue as keyof Incomes]);
}
