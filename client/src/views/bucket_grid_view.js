const PubSub = require('../helpers/pub_sub.js');
const BucketView = require('./bucket_view.js');

const BucketsGridView = function (container) {
  this.container = container;

};

BucketsGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Buckets:data-loaded', (evt) => {
    console.log(evt.detail);
    this.render(evt.detail);
  });
};

BucketsGridView.prototype.render = function (buckets) {
  this.container.innerHTML = '';
  const bucketView = new BucketView(this.container);
  buckets.forEach((bucket) => bucketView.render(bucket));
};

module.exports = BucketsGridView;
