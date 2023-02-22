function load () {
    let column_1 = [4, 1, 6, 3, 10, 2, 9, 7, 9, 10, 4, 8, 2, 3, 8, 6, 10, 5, 7, 1, 9, 3, 2, 10, 4, 5, 1, 7, 6, 5];
    let column_2 = [9, 1, 2, 7, 7, 3, 9, 2, 8, 6, 8, 7, 10, 10, 2, 4, 10, 2, 10, 6, 1, 7, 1, 6, 4, 5, 3, 7, 4, 6];
    let column_3 = [56, 61, 89, 90, 47, 62, 82, 75, 53, 68, 96, 87, 80, 86, 82, 63, 69, 94, 89, 52, 85, 93, 57, 77, 61, 59, 60, 79, 54, 54];
    let column_4 = [99, 73, 43, 54, 75, 87, 87, 61, 77, 66, 73, 55, 97, 57, 63, 84, 55, 41, 59, 72, 49, 85, 71, 64, 69, 84, 67, 74, 87, 67];

    let sum_1 = 0;
    for (let i = 0; i < column_1.length; i++) {
        sum_1 += column_1[i];
      }

    let sum_2 = 0;
    for (let i = 0; i < column_2.length; i++) {
        sum_2 += column_2[i];
      }

    let sum_3 = 0;
    for (let i = 0; i < column_3.length; i++) {
        sum_3 += column_3[i];
      } 

    let sum_4 = 0;
    for (let i = 0; i < column_4.length; i++) {
        sum_4 += column_4[i];
      }

    let sums = [sum_1, sum_2, sum_3, sum_4];

    let total_score = sums.reduce((a, b) => a + b, 0);

    const results = {
        col1: column_1,
        col2: column_2,
        col3: column_3,
        col4: column_4,
        sums: sums,
        total_score: total_score
        };
      
    console.log (results)
}