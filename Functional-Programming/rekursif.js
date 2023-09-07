const countDown = start => {
    console.log(start);
    if(start > 0) countDown(start-1);
  };
  
  countDown(10);

  /*
  Output: 
  10
  9
  8
  7
  6
  5
  4
  3
  2
  1
  */