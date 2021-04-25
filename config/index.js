const elems = {
  meduza: {
  	name: 'meduza',
    url: 'https://meduza.io/',
    title: '.BlockTitle-first',
    link: '.Link-isInBlockTitle',
  },

  kommersant: {
  	name: 'kommersant',
    url: 'https://www.kommersant.ru/',
    title: '.uho__name a',
    link: '.uho__name a',
  },

  rt: {
  	name: 'rt',
    url: 'https://russian.rt.com/',
    title: '.rows__column_main_feed-news .listing__rows_main-news .link',
    link: '.rows__column_main_feed-news .listing__rows_main-news .link',
  },

  rbk: {
  	name: 'rbk',
    url: 'https://rbc.ru/',
    title: '.js-news-feed-list .news-feed__item .news-feed__item__title',
    link: '.js-news-feed-list .news-feed__item'
  },

  lenta: {
  	name: 'lenta',
    url: 'https://lenta.ru/',
    title: '.js-yellow-box .item a',
    link: '.js-yellow-box .item a'
  }
};

module.exports = elems;