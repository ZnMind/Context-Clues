var friends = [
    "Kait",
    "Pepper",
    "Josh",
    "Garett",
    "Haylee"
];

var locations = [
    "Duel Arena",
    "Summoner's Rift",
    "Twisted Treeline",
    "The Jade Forest",
    "Vale of Eternal Blossom",
    "Valley of the Four Winds",
    "Krasarang Wilds",
    "Dread Wastes",
    "Kun Lai Summit",
    "Townlong Steppes",
];

var weapons = [
    "Ice Barrage",
    "Black Cleaver",
    "Trinity Force",
    "Dragon Battleaxe",
    "DDS Spec",
    "1 hp Dharok's Greataxe",
    "Bad Internet",
    "Abyssal Whip",
    "Ricin",
    "Ancient Staff",
    "Killer Koalas",
    "Lions",
    "Machete",
    "Nothing",
    "Oven Mitts",
    "Presents",
    "Qwerty keyboard",
    "Rusty Spoon",
    "Salad Tongs",
    "Towel",
];

for (i = 0; i < 100; i++) {
    $("body").append(`<h3 id='${i + 1}'>Accusation ${i + 1}</h3>`)
    $(`#${i + 1}`).on('click', function () {
        alert("I accuse " + friends[(this.id - 1) % 5] + ", with the " + weapons[(this.id  - 1) % 20] + " in the " + locations[(this.id  - 1) % 10] + "!");
    })
}