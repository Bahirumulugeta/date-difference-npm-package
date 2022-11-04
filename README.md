# n-times-ago-npm-package

# what is this?

It calculates the date difference between the current date and the previous one.

# Installation

`npm install --save n-times-ago`

Then...
...

const timeDifference = require("n-times-ago");
console.log(timeDifference(date));

# Examples

1.
  console.log(timeDifference("2022/11/03 02:05:30 pm"));
  let say the difference between the date 2022/11/03 02:05:30 pm and now is 2 minutes 
  The out put will be => 2 minutes ago

2.
  console.log(timeDifference("2022/10/03 02:05:30 pm"));
  let say the date is 2022/11/03 05:10:30 pm
  The out put will be => 1 months ago




