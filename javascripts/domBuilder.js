const domBuilder = (dataArr, exArray) =>
{
  let domString = '';
  dataArr.forEach(element => {
    domString += `<div class="col-md-3">`;
    domString += `<div class="col-md-12 locationCard">`;
    domString += `<h2>${element.name}</h2>`;
    domString += `<img src="${element.img}">`;
    domString += `<p>${element.location}</p>`;
    exArray.forEach(ex => {
      ex.locations.forEach(location => {
        if (location === element.locationId) {
          domString += `<p>${ex.name}</p>`;
        }
      });
    });
    domString += `</div>`;
    domString += `</div>`;
  });
  return domString;
};

const domBuilderMorn = (dataArr) =>
{
  let domString = '';
  dataArr.forEach(element => {
    if (element.time === 'morning')
    {
      domString += `<div class="col-md-3">`;
      domString += `<div class="col-md-12 locationCard">`;
      domString += `<h2>${element.name}</h2>`;
      domString += `<img src="${element.img}">`;
      domString += `<p>${element.location}</p>`;
      domString += `</div>`;
      domString += `</div>`;
    }
  });
  return domString;
};

const domBuilderAft = (dataArr) =>
{
  let domString = '';
  dataArr.forEach(element => {
    if (element.time === 'afternoon')
    {
      domString += `<div class="col-md-3">`;
      domString += `<div class="col-md-12 locationCard">`;
      domString += `<h2>${element.name}</h2>`;
      domString += `<img src="${element.img}">`;
      domString += `<p>${element.location}</p>`;
      domString += `</div>`;
      domString += `</div>`;
    }
  });
  return domString;
};

const domBuilderEve = (dataArr) =>
{
  let domString = '';
  dataArr.forEach(element => {
    if (element.time === 'night')
    {
      domString += `<div class="col-md-3">`;
      domString += `<div class="col-md-12 locationCard">`;
      domString += `<h2>${element.name}</h2>`;
      domString += `<img src="${element.img}">`;
      domString += `<p>${element.location}</p>`;
      domString += `</div>`;
      domString += `</div>`;
    }
  });
  return domString;
};

const domBuilderDrk = (dataArr) =>
{
  let domString = '';
  dataArr.forEach(element => {
    if (element.time === 'afterdark')
    {
      domString += `<div class="col-md-3">`;
      domString += `<div class="col-md-12 locationCard">`;
      domString += `<h2>${element.name}</h2>`;
      domString += `<img src="${element.img}">`;
      domString += `<p>${element.location}</p>`;
      domString += `</div>`;
      domString += `</div>`;
    }
  });
  return domString;
};

const exBuilder = (dataArr) =>
{

  let domString = '';
  dataArr.forEach(element => {
    domString += `<div class="col-md-4 exCard">`;
    domString += `<h2>${element.name}</h2>`;
    domString += `<img src="${element.img}">`;
    domString += `<p>${element.age}</p>`;
    domString += `<p>${element.flaws}</p>`;
    domString += `<button class="exbutton btn-danger" id="button${element.age}">Just Me!</button>`;
    domString += `</div>`;
  });
  return domString;
};

const exBuilder2 = (dataArr) =>
{

  let domString = '';
  dataArr.forEach(element => {
    domString += `<div class="col-md-4 exCard">`;
    domString += `<h2>${element.name}</h2>`;
    domString += `<img src="${element.img}">`;
    domString += `<p>${element.age}</p>`;
    domString += `<p>${element.flaws}</p>`;
    domString += `</div>`;
    locationBuilder(element.places);
  });
  return domString;
};

const locationBuilder = (dataArr) =>
{
  let domString = '';
  dataArr.forEach(element => {
    domString += `<div class="col-md-3">`;
    domString += `<div class="col-md-12 locationCard">`;
    domString += `<h2>${element.name}</h2>`;
    domString += `<img src="${element.img}">`;
    domString += `<p>${element.location}</p>`;
    domString += `</div>`;
    domString += `</div>`;
  });
  $('#locationHolder').html(domString);
};

module.exports =
{
  domBuilder,
  exBuilder,
  domBuilderMorn,
  domBuilderAft,
  domBuilderEve,
  domBuilderDrk,
  exBuilder2,
};
