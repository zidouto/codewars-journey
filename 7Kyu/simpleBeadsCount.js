/*Two red beads are placed between every two blue beads. 
There are N blue beads. After looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement countRedBeads(n) in Javascript so that it returns the number of red beads.
If there are less than 2 blue beads return 0. */

function countRedBeads(n) {
    if (n < 2) {
      return 0;
    }
    return 2 * (n - 1);
  }