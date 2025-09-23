// You have a form with 10 fields, and the app lags when typing. What will you do?
// I’ll wrap input fields with React.memo to prevent unnecessary re-renders.



// Suppose your Node.js API is slow because of a heavy calculation. What would you do
// I’d use caching (Redis caching).



// User inputs invalid data into your API. How will you handle validation?
// express-validator
// using try  cactch block  to handle validations



// .Your frontend is showing “CORS error” when calling backend. How do you fix it?
// intall package cross-origin-resourcesharing
// they is use for browser security purpose beacuse all browser with open can different domain



// Your MongoDB query is slow. What steps will you take?
// I’ll first run .explain("executionStats") to see if it’s using indexes. If not, I’ll add proper indexes. I’ll also optimize the query shape by projecting only needed fields, avoid unnecessary queries, and use pagination .



// How do you optimize React performance?
// I can avoid  unnecessary re-renders using React.memo, useCallback, and useMemo. For large datasets, I use list virtualization. I apply code splitting with React.lazy for faster load times, and debounce input-heavy operations.




//  What is the difference between controlled and uncontrolled components?
// in controlled component form data handle by react state, uncontrolled component form data handle by dom itself

