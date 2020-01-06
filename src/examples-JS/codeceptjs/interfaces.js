const exampleWithInterfaces = require('../../page-objects/pages/CJ-with-interfaces.page');
import { QUESTION } from '../../page-objects/constants';

exampleWithInterfaces.selectPairForFamilyStatus(QUESTION.familyStatus, '2');
