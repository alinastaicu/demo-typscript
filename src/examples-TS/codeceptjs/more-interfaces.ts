import * as exampleWithMoreInterfaces from '../../page-objects/TS-pages/CJ-with-more-interfaces.page';
import { PRODUCTS, SECTIONS } from '../../page-objects/constants';

exampleWithMoreInterfaces.seeCarousel('1/3', SECTIONS.missing, PRODUCTS.Hausratversicherung);
