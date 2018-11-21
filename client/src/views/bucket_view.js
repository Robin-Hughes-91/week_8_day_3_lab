const PubSub = require('../helpers/pub_sub.js');

const BucketView = function (container) {
  this.container = container;
};

BucketView.prototype.render = function (buckets) {
  const bucketContainer = document.createElement('div');
  bucketContainer.id = 'bucket';

  const goal = this.createHeading(buckets.goal);
  bucketContainer.appendChild(goal);

  const location = this.createDetail('Location', buckets.location);
  bucketContainer.appendChild(location);

  const companion = this.createDetail('Companion', buckets.companion);
  bucketContainer.appendChild(companion);

  const deleteButton = this.createDeleteButton(buckets._id);
  bucketContainer.appendChild(deleteButton);

  const radioButton = this.createRadioButton(buckets._id);
  bucketContainer.appendChild(radioButton);

  this.container.appendChild(bucketContainer);
};

BucketView.prototype.createHeading = function (textContent) {
  const heading = document.createElement('h3');
  heading.textContent = textContent;
  return heading;
};

BucketView.prototype.createDetail = function (label, text) {
  const detail = document.createElement('p');
  detail.textContent = `${label}: ${text}`;
  return detail;
};

BucketView.prototype.createDeleteButton = function (bucketId) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = bucketId;

  button.addEventListener('click', (evt) => {
    PubSub.publish('BucketView:bucket-delete-clicked', evt.target.value);
  });

  return button;
};

BucketView.prototype.createRadioButton = function (updatedItem) {
  const radio = document.createElement("INPUT");
  radio.setAttribute("type", "radio");
  radio.classList.add('radio-btn');
  radio.value = updatedItem;

  radio.addEventListener('click', (evt) => {
    PubSub.publish('BucketView:bucket-radio-clicked', evt.target.value);
    console.log(evt.target.value);
  });

  return radio;
};

module.exports = BucketView;
