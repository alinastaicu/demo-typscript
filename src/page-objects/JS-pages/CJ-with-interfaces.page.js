const I = actor();

const selectItem = (question, item) => `.QuestionSingleChoice-${question}-option-${item}`;

const selectPairForFamilyStatus = (question, item) => {
  I.click(selectItem(question, item));
},

module.exports = { selectPairForFamilyStatus };


