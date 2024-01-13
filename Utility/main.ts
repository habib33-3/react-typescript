// partial
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "5",
  grade: 55,
  title: "title",
};

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  return assign;
};

const hexColorMap: Record<string, string> = {
  red: "ff0000",
  green: "00ff00",
  blue: "0000ff",
};

type Student = "Sara" | "Kelly";

type LetterGrades = "A" | "B" | "C";

const finalGrades: Record<Student, LetterGrades> = {
  Sara: "A",
  Kelly: "B",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Student, Grades> = {
  Kelly: {
    assign1: 33,
    assign2: 55,
  },
  Sara: {
    assign1: 33,
    assign2: 55,
  },
};

// Pick and Omit

type AssignResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignResult = {
  grade: 55,
  studentId: "hh",
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "44",
  title: "ttt",
};

// excludes and extract

type adjustedGrade = Exclude<LetterGrades, "C">;

type higherGrade = Extract<LetterGrades, "A">;

// NonNullable

type AllPossibleGrades = "Dave" | "John" | null | undefined;

type NamesOnly = NonNullable<AllPossibleGrades>;

// return type

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type newAssign = ReturnType<typeof createNewAssign>;

// parameters

type AssignParams = Parameters<typeof createNewAssign>;

// Awaited

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;

fetchUsers().then((users) => console.log(users));
