import {
  defineNamespace,
  defineProjections,
  Model as ОпрПотрТзMixin
} from '../mixins/regenerated/models/i-i-s-i-b-laboratornaya-rabota-опр-потр-тз';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОпрПотрТзMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
