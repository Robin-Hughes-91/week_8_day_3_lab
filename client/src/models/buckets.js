const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Buckets = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
};

Buckets.prototype.bindEvents = function () {
  PubSub.subscribe('BucketView:bucket-delete-clicked', (evt) => {
    this.deleteBucket(evt.detail);
  });


PubSub.subscribe('BucketFormView:bucket-submitted', (evt) => {
  this.postBucket(evt.detail);
});

PubSub.subscribe('BucketView:bucket-radio-clicked', (evt) => {
  this.radioBucket(evt.detail);
 })
};

Buckets.prototype.getData = function () {
  this.request.get()
    .then((buckets) => {
      PubSub.publish('Buckets:data-loaded', buckets);
    })
    .catch(console.error);
};

Buckets.prototype.postBucket = function (bucket) {
  const request = new RequestHelper(this.url)
  request.post(bucket)
    .then((buckets) => {
      console.log(bucket);
      PubSub.publish('Buckets:data-loaded', buckets);
    })
    .catch(console.error);
};


Buckets.prototype.deleteBucket = function (bucketId) {
  this.request.delete(bucketId)
    .then((buckets) => {
      PubSub.publish('Buckets:data-loaded', buckets);
    })
    .catch(console.error);
};

Buckets.prototype.radioBucket = function (bucketId) {
  this.request.get(bucketId)
    .then((buckets) => {
      PubSub.publish('Buckets:data-loaded', buckets);
    })
    .catch(console.error);
};



module.exports = Buckets;
