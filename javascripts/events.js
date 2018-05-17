const domBuilder = require('./domBuilder');
const getSet = require('./getSet');
const singleEx = require('./singleEx');
const ajax = require('./ajax');

const initShowAll = () =>
{
  reLoad();
};

const initExButtons = () =>
{
  $('#button25').click(click25);
  $('#button22').click(click22);
  $('#button27').click(click27);
};

const initButtons = () =>
{
  $('button#reset').click(initShowAll);
  $('button#morning').click(morning);
  $('button#afternoon').click(afternoon);
  $('button#evening').click(evening);
  $('button#afterdark').click(afterDark);
  $('#searchBar').keypress(search);
  $('#button25').click(click25);
  $('#button22').click(click22);
  $('#button27').click(click27);
};

const click25 = () =>
{
  const myResults = [];
  singleEx.singleEx().then((results) =>
  {
    myResults.push(results);
    $('#exHolder').html(domBuilder.exBuilder2(myResults));

  });
};

const click22 = () =>
{
  const myResults = [];
  singleEx.singleEx2().then((results) =>
  {
    myResults.push(results);
    $('#exHolder').html(domBuilder.exBuilder2(myResults));
  });
};

const click27 = () =>
{
  const myResults = [];
  singleEx.singleEx3().then((results) =>
  {
    myResults.push(results);
    $('#exHolder').html(domBuilder.exBuilder2(myResults));
  });
};

const morning = () =>
{
  $('#locationHolder').html(domBuilder.domBuilderMorn(getSet.getLocations()));
};

const afternoon = () =>
{
  $('#locationHolder').html(domBuilder.domBuilderAft(getSet.getLocations()));
};

const evening = () =>
{
  $('#locationHolder').html(domBuilder.domBuilderEve(getSet.getLocations()));
};

const afterDark = () =>
{
  $('#locationHolder').html(domBuilder.domBuilderDrk(getSet.getLocations()));
};

const search = (e) => {
  if (e.keyCode === 13)
  {
    const userInput = $(e.target).val();
    $(`#locationHolder .locationCard:not(:contains(${userInput}))`).hide();
    $(e.target).val('');
  };
};

const reLoad = () =>
{
  const loadPage = ajax.exesJson().then((result) =>
  {
    $('#exHolder').html(domBuilder.exBuilder(result));
    ajax.locationJSON().then((location) =>
    {
      $('#locationHolder').html(domBuilder.domBuilder(location, result));
      initExButtons();
    });
  });
  return loadPage;
};

module.exports = initButtons;
