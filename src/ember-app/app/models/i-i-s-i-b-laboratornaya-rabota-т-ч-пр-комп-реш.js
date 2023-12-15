import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧПрКомпРешMixin
} from '../mixins/regenerated/models/i-i-s-i-b-laboratornaya-rabota-т-ч-пр-комп-реш';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧПрКомпРешMixin, Validations, {
});

defineProjections(Model);

export default Model;
