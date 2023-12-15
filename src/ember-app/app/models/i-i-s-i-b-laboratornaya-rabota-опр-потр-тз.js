import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ОпрПотрТзMixin
} from '../mixins/regenerated/models/i-i-s-i-b-laboratornaya-rabota-опр-потр-тз';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОпрПотрТзMixin, Validations, {
});

defineProjections(Model);

export default Model;
