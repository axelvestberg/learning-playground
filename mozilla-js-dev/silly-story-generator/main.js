var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

var storyText = 'It was 94 fahrenheit outside, so ' + xItem + ' went for a walk. When they got to ' + yItem + ', they stared in horror for a few moments, then ' + zItem + '. ' + name + ' saw the whole thing, but was not surprised — ' + xItem + ' weighs 300 pounds, and it was a hot day.';

var insertX = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas'
];

var insertY = [
    'the soup kitchen',
    'Disneyland',
    'the White House'
];

var insertZ = ['spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away'
];

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

randomize.addEventListener('click', result);

function result() {

    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    if (customName.value !== '') {
        var name = customName.value;
    }
    if (document.getElementById("uk").checked) {
        var weight = Math.round(300 * 0.071429) + 'stone';
        var temperature = Math.round((94 - 32) / 1.8) + 'centigrade';
        var newTemp = storyText.replace('94 fahrenheit', temperature);
        var newWeight = storyText.replace('300 pounds', weight);
    }
    story.textContent = newStory;
    story.style.visibility = 'visible';
}