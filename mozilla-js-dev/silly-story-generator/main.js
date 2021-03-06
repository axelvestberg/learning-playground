var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
console.log(storyText);

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

    var itemX = randomValueFromArray(insertX);
    var itemZ = randomValueFromArray(insertY);
    var itemY = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:', itemX);
    newStory = newStory.replace(':insertx:', itemX);
    newStory = newStory.replace(':inserty:', itemY);
    newStory = newStory.replace(':insertz:', itemZ);

    if (customName.value !== '') {
        var name = customName.value;
        newStory = newStory.replace('Bob', name);
    }
    if (document.getElementById("uk").checked) {
        var weight = Math.round(300 * 0.071429) + ' stone';
        var temperature = Math.round((94 - 32) / 1.8) + ' centigrade';
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
    }
    story.textContent = newStory;
    story.style.visibility = 'visible';
    console.log(newStory);
}