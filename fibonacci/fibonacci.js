var fibanocci = function(n) {
  if(n <= 2) {
    return 1;
  }

  return fibanocci(n -1) + fibanocci(n - 2);
}