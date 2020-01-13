import { QUESTION } from '../constants';
const I = actor();

const selectItem = (question: QUESTION, item: string) =>
  `.QuestionSingleChoice-${question}-option-${item}`;

export const selectPairForFamilyStatus = (question: QUESTION, item: string) => {
  I.click(selectItem(question, item));
};

//we can use also export default but we can rename the function and will be confusing
//diffrent syntax in typscript is export const function and in JS is module.export
