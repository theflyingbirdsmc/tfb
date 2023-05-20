var lang = "";
var type = "";

function getRandomMessage(messages) {
    var randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}
// &dKatieDeForest123#f0f0f0
var greetings = [
    "#f0f0f0Welcome back, {player_nick}#f0f0f0! Flap, mine, build, repeat",
    "#f0f0f0Pip, {player_nick}#f0f0f0! Wing it, mine it, craft it, repeat",
    "#f0f0f0Hey there, {player_nick}#f0f0f0! Fly, dig, build, respawn",
    "#f0f0f0Welcome back, {player_nick}#f0f0f0! Now go and be a good bird!",
    "#f0f0f0Piiiip, {player_nick}#f0f0f0! Unleash your wings!",
    "#f0f0f0The Emperor, {player_nick}#f0f0f0! Reign supreme!",
    "#f0f0f0Welcome, {player_nick}#f0f0f0! Forge your legacy!",
    "#f0f0f0Well hello, {player_nick}#f0f0f0! Soar above limits!",
    "#f0f0f0Hi, {player_nick}#f0f0f0! Reignite your Minecraft journey!",
    "#f0f0f0Greetings, {player_nick}#f0f0f0! Manifest your Minecraft vision!",
    "#f0f0f0Hey there, {player_nick}#f0f0f0! Fly high, dig deep, build big!",
    "#f0f0f0Bow to the redstone wizard, {player_nick}!",
    "#f0f0f0Hail the Ender Dragon Slayer, {player_nick}!",
    "#f0f0f0Embrace the Architect Extraordinaire, {player_nick}!",
    "#f0f0f0Enter, the Legendary Enchanter, {player_nick}!",
    "#f0f0f0Salute, the Mighty Miner, {player_nick}!",
];

function translate() {
    if (args.length == 2) {
        type = args[0];
        lang = args[1];
    }

    if (type == "header") {
        switch (lang) {
            case "da":
                return getRandomMessage(greetings);
                break;
            default:
                return getRandomMessage(greetings);
        }

    } else if (type == "1") {
        switch (lang) {
            case "da":
                return "#f0f0f0Brug &a/tfb #f0f0f0for at komme i gang";
                break;
            default:
                return "{player_nick}";
        }
    } else if (type == "2") {
        switch (lang) {
            case "da":
                return "";
                break;
            default:
                return "";
        }
    } else if (type == "3") {
        switch (lang) {
            case "da":
                return "#f0f0f0Henvist af en ven?";
                break;
            default:
                return "#f0f0f0Referred by a friend?";
        }
    } else if (type == "4") {
        switch (lang) {
            case "da":
                return "#f0f0f0Brug &a/refer &8<&aven&8> #f0f0f0for belønninger!";
                break;
            default:
                return "#f0f0f0Use &a/refer &8<&afriend&8> #f0f0f0for rewards!";
        }
    } else if (type == "5") {
        switch (lang) {
            case "da":
                return "";
                break;
            default:
                return "";
        }
    } else if (type == "6") {
        switch (lang) {
            case "da":
                return "#f0f0ffVi håber, at din tid hos os når nye højder!";
                break;
            default:
                return "#f0f0f0We hope your time with us soars to new heights!";
        }
    } else { return "error"; }
}

translate();