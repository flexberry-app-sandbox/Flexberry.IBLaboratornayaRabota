import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.i-b-laboratornaya-rabota.caption'),
          title: i18n.t('forms.application.sitemap.i-b-laboratornaya-rabota.title'),
          children: [{
            link: 'i-i-s-i-b-laboratornaya-rabota-спр-сотр-l',
            caption: i18n.t('forms.application.sitemap.i-b-laboratornaya-rabota.i-i-s-i-b-laboratornaya-rabota-спр-сотр-l.caption'),
            title: i18n.t('forms.application.sitemap.i-b-laboratornaya-rabota.i-i-s-i-b-laboratornaya-rabota-спр-сотр-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-i-b-laboratornaya-rabota-пр-комп-реш-l',
            caption: i18n.t('forms.application.sitemap.i-b-laboratornaya-rabota.i-i-s-i-b-laboratornaya-rabota-пр-комп-реш-l.caption'),
            title: i18n.t('forms.application.sitemap.i-b-laboratornaya-rabota.i-i-s-i-b-laboratornaya-rabota-пр-комп-реш-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-i-b-laboratornaya-rabota-опр-потр-тз-l',
            caption: i18n.t('forms.application.sitemap.i-b-laboratornaya-rabota.i-i-s-i-b-laboratornaya-rabota-опр-потр-тз-l.caption'),
            title: i18n.t('forms.application.sitemap.i-b-laboratornaya-rabota.i-i-s-i-b-laboratornaya-rabota-опр-потр-тз-l.title'),
            children: null
          }, {
            link: 'i-i-s-i-b-laboratornaya-rabota-должность-l',
            caption: i18n.t('forms.application.sitemap.i-b-laboratornaya-rabota.i-i-s-i-b-laboratornaya-rabota-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.i-b-laboratornaya-rabota.i-i-s-i-b-laboratornaya-rabota-должность-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-i-b-laboratornaya-rabota-раб-отдел-l',
            caption: i18n.t('forms.application.sitemap.i-b-laboratornaya-rabota.i-i-s-i-b-laboratornaya-rabota-раб-отдел-l.caption'),
            title: i18n.t('forms.application.sitemap.i-b-laboratornaya-rabota.i-i-s-i-b-laboratornaya-rabota-раб-отдел-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }
      ]
    };
  }),
})