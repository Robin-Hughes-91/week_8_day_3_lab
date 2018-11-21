const BucketFormView = require('./views/bucket_form_view.js')
const BucketGridView = require('./views/bucket_grid_view.js');
const Buckets = require('./models/buckets.js');

document.addEventListener('DOMContentLoaded', () => {
  const bucketForm = document.querySelector('form#buckets-form');
  const bucketsFormView = new BucketFormView(bucketForm);
  bucketsFormView.bindEvents();

  const bucketsContainer = document.querySelector('div#buckets');
  const bucketsGridView = new BucketGridView(bucketsContainer);
  bucketsGridView.bindEvents();

  const url = 'http://localhost:3000/api/buckets';
  const buckets = new Buckets(url);
  buckets.bindEvents();
  buckets.getData();
});
