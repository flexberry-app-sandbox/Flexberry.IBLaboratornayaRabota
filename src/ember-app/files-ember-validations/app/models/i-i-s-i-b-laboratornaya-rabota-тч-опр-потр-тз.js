import {
  defineNamespace,
  defineProjections,
  Model as ТчОпрПотрТзMixin
} from '../mixins/regenerated/models/i-i-s-i-b-laboratornaya-rabota-тч-опр-потр-тз';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТчОпрПотрТзMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
