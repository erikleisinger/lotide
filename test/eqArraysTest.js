const eqArrays = require("../eqArrays");

eqArrays([5, 4, 3, [5, 5]], [5, 4, 3, [5, 5]]);
eqArrays([5, 4, 3, [5, 5, 2]], [5, 4, 3, [5, 5]]);