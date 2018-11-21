const PubSub = require('../helpers/pub_sub.js')

const BucketFormView = function (form) {
  this.form = form;
  console.log('this.form test', form);
};

BucketFormView.prototype.bindEvents = function () {

  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
    console.log('test', evt);
  });
};

BucketFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  console.log('test', evt);

  const newBucket = this.createBucket(evt.target);
PubSub.publish('BucketFormView:bucket-submitted', newBucket);
evt.target.reset();
console.log('test', evt.target);

}

BucketFormView.prototype.createBucket = function (form) {
  console.log(form.goal.value);
  console.log('test', form.goal.value);

  const newBucket = {
    goal: form.goal.value,
    location: form.location.value,
    companion: form.companion.value
  };

  return newBucket;
};

module.exports = BucketFormView;
