import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПрКомпРешMixin
} from '../mixins/regenerated/models/i-i-s-i-b-laboratornaya-rabota-пр-комп-реш';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПрКомпРешMixin, Validations, {
});

defineProjections(Model);

export default Model;
