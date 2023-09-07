/*
const truthyArray = [1, '', 'Hallo', 0, null, 'Danss', 14].filter((item) => Boolean(item));

console.log(truthyArray);

/**
 * output:
 * [ 1, 'Hallo', 'Danss', 14 ]
 * 
 */

const students = [
    {
      name: 'Daniel',
      score: 70,
    },
    {
      name: 'Aril Alex',
      score: 88,
    },
    {
      name: 'Alfonso',
      score: 90,
    },
    {
      name: 'Vici',
      score: 75,
    }
  ];
  
  const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);
  
  console.log(eligibleForScholarshipStudents);
  
  /**
   * output:
   * [ { name: 'Aril Alex', score: 88 }, { name: 'Alfonso', score: 90 } ]
   * 
   */