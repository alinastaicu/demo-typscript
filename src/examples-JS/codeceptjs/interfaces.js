const { QUESTION } = require '../../page-objects/constants';
const exampleWithInterfaces = require('../../page-objects/pages/CJ-with-interfaces.page');

exampleWithInterfaces.selectPairForFamilyStatus(QUESTION.familyStatus, '2');
