import { Serializer as РабОтделSerializer } from
  '../mixins/regenerated/serializers/i-i-s-i-b-laboratornaya-rabota-раб-отдел';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РабОтделSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
