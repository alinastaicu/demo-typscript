import * as exampleWithInterfaces from '../../page-objects/TS-pages/CJ-with-interfaces.page';
import { QUESTION } from '../../page-objects/constants';

exampleWithInterfaces.selectPairForFamilyStatus(QUESTION.familyStatus, '2');

//we can use also on TS const but we will not have type safty
