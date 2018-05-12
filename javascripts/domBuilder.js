const domBuilder = (dataArr) =>
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
  domString += `<div class="col-md-6 col-md-offset-3 exCard">`;
  domString += `<h2>${dataArr.name}</h2>`;
  domString += `<img src="${dataArr.img}">`;
  domString += `<p>${dataArr.age}</p>`;
  domString += `<p>${dataArr.flaws}</p>`;
  domString += `</div>`;
  return domString;
};

module.exports =
{
  domBuilder,
  exBuilder,
  domBuilderMorn,
  domBuilderAft,
  domBuilderEve,
  domBuilderDrk,
};
