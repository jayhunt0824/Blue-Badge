//using Array.prototype.filter()method, console log the presidents born in the 1900s.
//the filter() method calls a provided callback function once for each element in an array and constructs a new array with all the elements that pass the test impletmented (so elements that return true) by the provided callback function 


const presidents = [
    { first: "George", last: "Washington", year: 1732, passed: 1799 },
    { first: "John", last: "Adams", year: 1735, passed: 1826 },
    { first: "Thomas", last: "Jefferson", year: 1743, passed: 1826 },
    { first: "James", last: "Madison", year: 1751, passed: 1836 },
    { first: "James", last: "Monroe", year: 1758, passed: 1831 },
    { first: "John", last: "Adams", year: 1767, passed: 1848 },
    { first: "Andrew", last: "Jackson", year: 1767, passed: 1845 },
    { first: "Martin", last: "Van Buren", year: 1782, passed: 1862 },
    { first: "William", last: "Harrison", year: 1773, passed: 1841 },
    { first: "John", last: "Tyler", year: 1790, passed: 1862 },
    { first: "James", last: "Polk", year: 1795, passed: 1849 },
    { first: "Zachary", last: "Taylor", year: 1784, passed: 1850 },
    { first: "Millard", last: "Fillmore", year: 1800, passed: 1874 },
    { first: "Franklin", last: "Pierce", year: 1804, passed: 1869 },
    { first: "James", last: "Buchanan", year: 1791, passed: 1868 },
    { first: "Abraham", last: "Lincoln", year: 1809, passed: 1865 },
    { first: "Andrew", last: "Johnson", year: 1808, passed: 1875 },
    { first: "Ulysses", last: "Grant", year: 1822, passed: 1885 },
    { first: "Rutherford", last: "Hayes", year: 1822, passed: 1893 },
    { first: "James", last: "Garfield", year: 1831, passed: 1881 },
    { first: "Chester", last: "Arthur", year: 1829, passed: 1886 },
    { first: "Grover", last: "Cleveland", year: 1837, passed: 1908 },
    { first: "Benjamin", last: "Harrison", year: 1833, passed: 1901 },
    { first: "William", last: "McKinley", year: 1843, passed: 1901 },
    { first: "Theodore", last: "Roosevelt", year: 1858, passed: 1919 },
    { first: "William", last: "Taft", year: 1857, passed: 1930 },
    { first: "Woodrow", last: "Wilson", year: 1856, passed: 1924 },
    { first: "Warren", last: "Harding", year: 1865, passed: 1923 },
    { first: "Calvin", last: "Coolidge", year: 1872, passed: 1933 },
    { first: "Herbert", last: "Hoover", year: 1874, passed: 1964 },
    { first: "Franklin", last: "Roosevelt", year: 1882, passed: 1945 },
    { first: "Harry", last: "Truman", year: 1884, passed: 1972 },
    { first: "Dwight", last: "Eisenhower", year: 1890, passed: 1969 },
    { first: "John", last: "Kennedy", year: 1917, passed: 1963 },
    { first: "Lyndon", last: "Johnson", year: 1908, passed: 1973 },
    { first: "Richard", last: "Nixon", year: 1913, passed: 1994 },
    { first: "Gerald", last: "Ford", year: 1913, passed: 2006 },
    { first: "Jimmy", last: "Carter", year: 1924, passed: undefined },
    { first: "Ronald", last: "Reagan", year: 1911, passed: 2004 },
    { first: "George", last: "Bush", year: 1924, passed: 2018 },
    { first: "Bill", last: "Clinton", year: 1946, passed: undefined },
    { first: "George", last: "Bush", year: 1946, passed: undefined },
    { first: "Barack", last: "Obama", year: 1961, passed: undefined },
    { first: "Donald", last: "Trump", year: 1946, passed: undefined }
  ];

  
const nineteen = presidents.filter(president => (president.year >= 1900 && president.year <2000));

const year=presidents.filter(birthYear => birthYear.year>1900);

// console.log(nineteen);



// .MAP();
// Challenge: using Array.prototype.map(), console.log the first and last names of each president from the given 'presidents' array.

// map() calls a provided callback function once for each element in an array, in order, and constructs a new array from the results.

//              president is the current element that's being processed in the array.



let fullName= presidents.map(obj => {
    let rObj={}
    rObj[obj.first] = obj.last
    return rObj
})

console.log(fullName);

//or 
const fullNames = presidents.map(president = (`${president.first} ${president.last}`));



// .MAP();
// Challenge: using Array.prototype.map(), console.log the first and last names of each president from the given 'presidents' array.

// map() calls a provided callback function once for each element in an array, in order, and constructs a new array from the results.

//              president is the current element that's being processed in the array.
// .FOREACH() AND .PUSH()
// Challenge: write a function that uses the Array.prototype.forEach() & the Array.prototype.push() methods within it. Using the forEach method, loop over all of the presidents from our presidents array. Then, push the president's last name and number of years they lived to a new array as individual objects containing key/value pairs of each presidents last name and age. Keep in mind that some presidents are still alive. Then, return the new array from the function.

// The forEach() method is an Array method that we can use to execute a provided callback function once on each element in an array. Think of forEach() as a loop. Both allow you to loop over data.

// The push() method adds one or more elements to the end of an array and returns the new length of the array.
