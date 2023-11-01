// Q21
console.log("\nQuestion Number 21\n");
/*They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.*/
interface myFavoriteCars {
  Model_Year: number;
  Company_Make: string;
  Engine: string;
}
const favoriteCars: myFavoriteCars[] = [
  { Model_Year: 2022, Company_Make: "Honda", Engine: "Auto" },
  { Model_Year: 2019, Company_Make: "Suzuki", Engine: "Manual" },
  { Model_Year: 2020, Company_Make: "BMW", Engine: "Auto" },
];
for (const cars of favoriteCars) {
  console.log(`Model Year: ${cars.Model_Year}`);
  console.log(`Company Make: ${cars.Company_Make}`);
  console.log(`Engine:${cars.Engine}`);
  console.log("-----------------------------");
}
