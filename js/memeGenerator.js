function closeWhyNaModal() {
  document.getElementById("why-na-modal").style.display = "none";

  let oustideModal = document.getElementById("form-page");
  oustideModal.classList.remove("outside-modal");
}

function displayWhyNaModal() {
  // *sets display back to default flex value
  document.getElementById("why-na-modal").style.display = "block";
  document.getElementById("why-na-modal").style.display = "flex";

  let outsideModal = document.getElementById("form-page");
  outsideModal.classList.add("outside-modal");
}

function displayOutputOnEnter(event) {
  // *"Enter" button apparently has a keycode of 13
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("done-button").click();
  }
  return false;
}

// *function to display output page
function displayOutput() {
  document.getElementById("form-page").style.display = "none";
  document.getElementById("output-page").style.display = "block";
}

let angryWordsArray = [
  "angry",
  "mad",
  "livid",
  "seething",
  "furious",
  "upset",
  "enraged",
  "wrathful",
  "indignant",
  "exasperated",
  "aroused",
  "inflamed",
  "annoyed",
  "bitter",
  "enraged",
  "furious",
  "heated",
  "impassioned",
  "irate",
  "irritable",
  "irritated",
  "offended",
  "outraged",
  "resentful",
  "sullen",
  "uptight",
  "affronted",
  "antagonized",
  "chafed",
  "choleric",
  "convulsed",
  "cross",
  "displeased",
  "exacerbated",
  "ferocious",
  "fierce",
  "fiery",
  "fuming",
  "galled",
  "hateful",
  "hot",
  "huffy",
  "ill-tempered",
  "incensed",
  "inflamed",
  "infuriated",
  "irascible",
  "ireful",
  "maddened",
  "nettled",
  "piqued",
  "provoked",
  "raging",
  "riled",
  "sore",
  "splenetic",
  "storming",
  "sulky",
  "tumultous",
  "tumultuous",
  "turbulent",
  "vexed",
  "wrathful",
  "pissed",
  "pissedoff",
  "dyspeptic",
  "tetchy",
  "testy",
  "crabby",
  "waspish",
  "aggrieved",
  "irked",
  "onedge"
];

let angryMemesArray = [
  "https://media.giphy.com/media/5fBH6zodw7VMuR8uUnu/giphy.gif",
  "http://giphygifs.s3.amazonaws.com/media/5fBH6zodw7VMuR8uUnu/giphy.gif",
  "http://giphygifs.s3.amazonaws.com/media/FP6bcakXcsYiQ/giphy.gif",
  "http://giphygifs.s3.amazonaws.com/media/FP6bcakXcsYiQ/giphy.gif",
  "http://giphygifs.s3.amazonaws.com/media/FP6bcakXcsYiQ/giphy.gif",
  "https://media.giphy.com/media/3o7WTyIq1W8FqaWbJu/giphy.gif",
  "https://media.giphy.com/media/jsxxJJL6pib6q8Qb5I/giphy.gif",
  "https://media.giphy.com/media/jsxxJJL6pib6q8Qb5I/giphy.gif",
  "http://giphygifs.s3.amazonaws.com/media/sNlXryWRRb5Bu/giphy.gif",
  "https://media.giphy.com/media/26BRrcFcesMlfIpvG/giphy.gif",
  "https://media.giphy.com/media/26BRrcFcesMlfIpvG/giphy.gif",
  "https://media.giphy.com/media/KfBOtgHu6LfCDWRbQz/giphy.gif",
  "https://media.giphy.com/media/l396ETae50ys3NPaw/giphy.gif",
  "https://media.giphy.com/media/fYfh8DBB6JxcqXK5Cr/giphy.gif",
  "https://media.giphy.com/media/l49JOpVOcZOdpE90I/giphy.gif",
  "https://media.giphy.com/media/2tTJW9nN6mDUx12Gsn/giphy.gif",
  "https://media.giphy.com/media/Bom9JoSs3zz3D0IeFL/giphy.gif",
  "https://media.giphy.com/media/neZ3NgNCKGxXy/giphy.gif",
  "https://media.giphy.com/media/l1J9IRv0ob603JJHq/giphy.gif",
  "https://media.giphy.com/media/V1yvdB9mWKDpC/giphy.gif",
  "https://media.giphy.com/media/3ohA2N2cvomKLf55PG/giphy.gif",
  "http://giphygifs.s3.amazonaws.com/media/sRiARHYSPJXDq/giphy.gif",
  "https://media.giphy.com/media/stAq0LhzZE0RW/giphy.gif",
  "https://media.giphy.com/media/3oKIPqy7eQG58op2sU/giphy.gif",
  "https://media.giphy.com/media/btpuvtiZVp9UA/giphy.gif",
  "https://media.giphy.com/media/Avq2opnxyCtPy/giphy.gif"
];

let angryQuotesArray = [
  "“The truth will set you free, but first it will piss you off.” ― Joe Klaas, Twelve Steps to Happiness",
  "“Never go to bed mad. Stay up and fight.” ― Phyllis Diller",
  "“Not my daughter, you bitch!” ― J.K. Rowling, Harry Potter and the Deathly Hallows",
  "“Angry people are not always wise.” ― Jane Austen, Pride and Prejudice",
  "“Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.” ― Roy T. Bennett",
  "“The best fighter is never angry.” ― Lao Tzu",
  "“Bitterness is like cancer. It eats upon the host. But anger is like fire. It burns it all clean.” ― Maya Angelou",
  "“Anybody can become angry — that is easy, but to be angry with the right person and to the right degree and at the right time and for the right purpose, and in the right way — that is not within everybody's power and is not easy.” ― Aristotle",
  "“Speak when you are angry and you will make the best speech you will ever regret.” ― Ambrose Bierce",
  "“If you spend your time hoping someone will suffer the consequences for what they did to your heart, then you're allowing them to hurt you a second time in your mind.” ― Shannon L. Alder",
  "“When angry, count four. When very angry, swear.” ― Mark Twain",
  "“Letting go gives us freedom, and freedom is the only condition for happiness. If, in our heart, we still cling to anything - anger, anxiety, or possessions - we cannot be free.” ― Thich Nhat Hanh,",
  "“Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured.” ― Mark Twain",
  "“Anger, resentment and jealousy doesn't change the heart of others-- it only changes yours.” ― Shannon Alder, 300 Questions to Ask Your Parents Before It's Too Late",
  "“Anger ... it's a paralyzing emotion ... you can't get anything done. People sort of think it's an interesting, passionate, and igniting feeling — I don't think it's any of that — it's helpless ... it's absence of control....I have no use for it whatsoever.” ― Toni Morrison",
  "“Usually when people are sad, they don't do anything. They just cry over their condition. But when they get angry, they bring about a change.” ― Malcolm X",
  "“A heart filled with anger has no room for love.” ― Joan Lunden, Wake-Up Calls: Making The Most Out Of Every Day",
  "“Never respond to an angry person with a fiery comeback, even if he deserves it...Don't allow his anger to become your anger.” ― Bohdi Sanders, Warrior Wisdom: Ageless Wisdom for the Modern Warrior",
  "“Learn this from me. Holding anger is a poison. It eats you from inside. We think that hating is a weapon that attacks the person who harmed us. But hatred is a curved blade. And the harm we do, we do to ourselves.” ― Mitch Albom"
];

let angryTunesArray = [
  "https://embed.music.apple.com/us/album/get-off-of-my-cloud/1440781818?i=1440781966&app=music",
  "https://embed.music.apple.com/us/album/its-my-life/253956374?i=253956547&app=music",
  "https://embed.music.apple.com/us/album/omini-knowest/896142177?i=896142178&app=music",
  "https://embed.music.apple.com/us/album/monkey-feat-chi-gurl/935500919?i=935504035&app=music",
  "https://embed.music.apple.com/us/album/i-dont-f-k-with-you-feat-e-40/1443183238?i=1443183643&app=music",
  "https://embed.music.apple.com/us/album/bitch-better-have-my-money/1445136072?i=1445136075&app=music",
  "https://embed.music.apple.com/us/album/ayesha/1471083607?i=1471083612&app=music",
  "https://embed.music.apple.com/us/album/another-brick-in-the-wall-pt-2/1065975633?i=1065975638&app=music",
  "https://embed.music.apple.com/us/album/think-twice-version-x-jackass-bad-grandpa-mix/731554126?i=731554273&app=music",
  "https://embed.music.apple.com/us/album/dem-bobo/682939798?i=682939804&app=music",
  "https://embed.music.apple.com/us/album/respect/878000342?i=878000348&app=music",
  "https://embed.music.apple.com/us/album/i-aint-the-same/1072477718?i=1072478238&app=music",
  "https://embed.music.apple.com/us/album/teacher-dont-teach-me-nonsense/888405331?i=888405343&app=music",
  "https://embed.music.apple.com/us/album/shakara/681566359?i=681566972&app=music",
  "https://embed.music.apple.com/us/album/yawadey/686071576?i=686071954&app=music",
  "https://embed.music.apple.com/us/album/beast-of-burden/1440816775?i=1440817036&app=music",
  "https://embed.music.apple.com/us/album/rumour-has-it/420075073?i=420075085&app=music",
  "https://embed.music.apple.com/us/album/dont-hurt-yourself-feat-jack-white/1460430561?i=1460430671&app=music",
  "https://embed.music.apple.com/gb/album/black-president/723541280?i=723541701&app=music",
  "https://embed.music.apple.com/us/album/broda-ol%C3%A9/1464144192?i=1464144549&app=music",
  "https://embed.music.apple.com/us/album/bimp%C3%A9/1464144192?i=1464144202&app=music",
  "https://embed.music.apple.com/us/album/bloody-mother-f-g-a-e/773265900?i=773265918&app=music",
  "https://embed.music.apple.com/us/album/drawing-board/947992178?i=947992188&app=music",
  "https://embed.music.apple.com/us/album/play-with-fire/1440743344?i=1440743548&app=music"
];

// * Randomize selection of items from each array
let angryMemesCount = angryMemesArray.length;
let randAngryMemesIndex = Math.floor(angryMemesCount * Math.random());

let angryQuotesCount = angryQuotesArray.length;
let randAngryQuotesIndex = Math.floor(angryQuotesCount * Math.random());

let angryTunesCount = angryTunesArray.length;
let randAngryTunesIndex = Math.floor(angryTunesCount * Math.random());

// *Display relevant outputs if an "angry" match is generated
function checkAngry() {
  let formInputUntrimmed = document.getElementById("mood-entry").value;
  // todo - trimming works but trimmed word doesnt not match with string item, for some reason
  let formInput = formInputUntrimmed.replace(/\s+/g, "");
  console.log(typeof formInput);

  let angryTheme = {
    colour: "red",
    dark: "#AC3E3E",
    medium: "rgba(198, 135, 135, 0.87)",
    light: "rgba(209, 173, 173, 0.87)",
    hoverLight: "rgba(255, 209, 209, 0.87)",
    emoji: "😤"
  };

  if (angryWordsArray.includes(formInput)) {
    // *Fits random meme/quote/tune from curated arrays
    document.getElementById("meme").src = angryMemesArray[randAngryMemesIndex];
    document.getElementById("quote").innerHTML =
      angryQuotesArray[randAngryQuotesIndex];
    document.getElementById("tune").src = angryTunesArray[randAngryTunesIndex];

    // *Changes colours appropriately
    document.getElementsByClassName("light-bg")[0].style.backgroundColor =
      angryTheme.light;
    document.getElementsByClassName("hoverLight-bg")[0].style.backgroundColor =
      angryTheme.hoverLight;
    document.getElementsByClassName("hoverLight-bg")[1].style.backgroundColor =
      angryTheme.hoverLight;
    document.getElementsByClassName("hoverLight-bg")[2].style.backgroundColor =
      angryTheme.hoverLight;
    document.getElementsByClassName("light-cl")[0].style.color =
      angryTheme.light;

    document.getElementsByClassName("medium-bg")[0].style.backgroundColor =
      angryTheme.medium;
    document.getElementsByClassName("medium-bg")[1].style.backgroundColor =
      angryTheme.medium;
    document.getElementsByClassName("medium-bg")[2].style.backgroundColor =
      angryTheme.medium;
    document.getElementsByClassName("medium-cl")[0].style.color =
      angryTheme.medium;
    document.getElementsByClassName("medium-cl")[1].style.color =
      angryTheme.medium;
    document.getElementsByClassName("medium-cl")[2].style.color =
      angryTheme.medium;

    document.getElementsByClassName("dark-bg")[0].style.backgroundColor =
      angryTheme.dark;
    document.getElementsByClassName("dark-br")[0].style.borderColor =
      angryTheme.dark;
    document.getElementsByClassName("dark-br")[1].style.borderColor =
      angryTheme.dark;
    document.getElementsByClassName("dark-br")[2].style.borderColor =
      angryTheme.dark;
    document.getElementsByClassName("dark-br")[3].style.borderColor =
      angryTheme.dark;
    document.getElementsByClassName("dark-br")[4].style.borderColor =
      angryTheme.dark;
    document.getElementsByClassName("dark-br")[5].style.borderColor =
      angryTheme.dark;
    document.getElementsByClassName("dark-br")[6].style.borderColor =
      angryTheme.dark;
    document.getElementsByClassName("dark-br")[7].style.borderColor =
      angryTheme.dark;
    document.getElementsByClassName("dark-br")[8].style.borderColor =
      angryTheme.dark;
    document.getElementsByClassName("dark-br")[9].style.borderColor =
      angryTheme.dark;
    document.getElementsByClassName("dark-br")[10].style.borderColor =
      angryTheme.dark;
    document.getElementsByClassName("dark-cl")[0].style.color = angryTheme.dark;
    document.getElementsByClassName("dark-cl")[1].style.color = angryTheme.dark;

    document.querySelectorAll(".medium-bg-hover")[0].onmouseover = function() {
      document.querySelectorAll(".medium-bg-hover")[0].style.backgroundColor =
        angryTheme.light;
    };
    document.querySelectorAll(".light-bg-hover")[0].onmouseover = function() {
      document.querySelectorAll(".light-bg-hover")[0].style.backgroundColor =
        angryTheme.light;
    };
    document.querySelectorAll(".light-bg-hover")[1].onmouseover = function() {
      document.querySelectorAll(".light-bg-hover")[1].style.backgroundColor =
        angryTheme.light;
    };
    document.querySelectorAll(".light-bg-hover")[2].onmouseover = function() {
      document.querySelectorAll(".light-bg-hover")[2].style.backgroundColor =
        angryTheme.light;
    };

    document.querySelectorAll(".medium-bg-hover")[0].onmouseout = function() {
      document.querySelectorAll(".medium-bg-hover")[0].style.backgroundColor =
        angryTheme.hoverLight;
    };
    document.querySelectorAll(".light-bg-hover")[0].onmouseout = function() {
      document.querySelectorAll(".light-bg-hover")[0].style.backgroundColor =
        angryTheme.hoverLight;
    };
    document.querySelectorAll(".light-bg-hover")[1].onmouseout = function() {
      document.querySelectorAll(".light-bg-hover")[1].style.backgroundColor =
        angryTheme.hoverLight;
    };
    document.querySelectorAll(".light-bg-hover")[2].onmouseout = function() {
      document.querySelectorAll(".light-bg-hover")[2].style.backgroundColor =
        angryTheme.hoverLight;
    };
  }
}

let happyWordsList = [
  "happy",
  "cheerful",
  "contented",
  "delighted",
  "ecstatic",
  "elated",
  "glad",
  "joyful",
  "joyous",
  "jubilant",
  "lively",
  "merry",
  "overjoyed",
  "pleasant",
  "pleased",
  "thrilled",
  "upbeat",
  "blessed",
  "blest",
  "blissful",
  "blithe",
  "can'tcomplain",
  "captivated",
  "chipper",
  "chirpy",
  "content",
  "convivial",
  "exultant",
  "flyinghigh",
  "gay",
  "gleeful",
  "gratified",
  "intoxicated",
  "jolly",
  "laughing",
  "light",
  "lookinggood",
  "mirthful",
  "oncloudnine",
  "peppy",
  "perky",
  "playful",
  "sparkling",
  "sunny",
  "tickled",
  "tickledpink",
  "up",
  "walkingonair",

  "contented",
  "content",
  "cheerful",
  "cheery",
  "merry",
  "joyful",
  "jovial",
  "jolly",
  "joking",
  "jocular",
  "gleeful",
  "carefree",
  "untroubled",
  "delighted",
  "smiling",
  "beaming",
  "grinning",
  "glowing",
  "satisfied",
  "gratified",
  "buoyant",
  "radiant",
  "sunny",
  "blithe",
  "joyous",
  "beatific",
  "blessed",

  "cock-a-hoop",
  "ingoodspirits",
  "inhighspirits",
  "inagoodmood",
  "light-hearted",
  "good-humoured",

  "thrilled",
  "exuberant",
  "elated",
  "exhilarated",
  "ecstatic",
  "blissful",
  "euphoric",
  "overjoyed",
  "exultant",
  "rapturous",
  "rapt",
  "enraptured",
  "inseventhheaven",
  "oncloudnine",
  "overthemoon",
  "walkingonair",
  "besidemyeself",
  "besidemyeselfwithjoy",

  "ontopoftheworld",
  "blissedout",
  "stoked"
];

// *Convert to set and back to array so duplicates are removed.
let happyWordsArray = Array.from(new Set(happyWordsList));

let happyQuotesArray = [
  "“Love is that condition in which the happiness of another person is essential to your own.” ― Robert A. Heinlein, Stranger in a Strange Land",
  "“Folks are usually about as happy as they make their minds up to be.” ― Abraham Lincoln",
  "“Time you enjoy wasting is not wasted time.” ― Marthe Troly-Curtin, Phrynette Married",
  "“It's so hard to forget pain, but it's even harder to remember sweetness. We have no scar to show for happiness. We learn so little from peace.” ― Chuck Palahniuk, Diary",
  "“Happiness in intelligent people is the rarest thing I know.” ― Ernest Hemingway, The Garden of Eden",
  "“Happiness is when what you think, what you say, and what you do are in harmony.” ― Mahatma Gandhi",
  "“You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.” ― Albert Camus",
  "“There's nothing like deep breaths after laughing that hard. Nothing in the world like a sore stomach for the right reasons.” ― Stephen Chbosky, The Perks of Being a Wallflower",
  "“Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.” ― Henry Wadsworth Longfellow",
  "“Happiness is not something ready made. It comes from your own actions.” ― Dalai Lama XIV",
  "“If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.” ― J.R.R. Tolkien",
  "“They say a person needs just three things to be truly happy in this world: someone to love, something to do, and something to hope for.” ― Tom Bodett",
  "“The most important thing is to enjoy your life—to be happy—it's all that matters.” ― Audrey Hepburn",
  "“Happiness is a warm puppy.” ― Charles M. Schulz",
  "“You cannot protect yourself from sadness without protecting yourself from happiness.” ― Jonathan Safran Foer",
  "“It isn't what you have or who you are or where you are or what you are doing that makes you happy or unhappy. It is what you think about it.” ― Dale Carnegie, How to Win Friends and Influence People",
  "“No medicine cures what happiness cannot.” ― Gabriel García Márquez",
  "“Happiness is having a large, loving, caring, close-knit family in another city.” ― George Burns",
  "“Let us be grateful to the people who make us happy; they are the charming gardeners who make our souls blossom.” ― Marcel Proust",
  "“The only way to find true happiness is to risk being completely cut open.” ― Chuck Palahniuk, Invisible Monsters",
  "“You can't be happy unless you're unhappy sometimes.” ― Lauren Oliver, Delirium",
  "“Of all forms of caution, caution in love is perhaps the most fatal to true happiness.” ",
  "“Sanity and happiness are an impossible combination.” ― Mark Twain",
  "“Success is getting what you want, happiness is wanting what you get” ― W. P. Kinsella",
  "“Happiness is holding someone in your arms and knowing you hold the whole world.” ― Orhan Pamuk, Snow"
];

let happyTunesArray = [
  "https://embed.music.apple.com/us/album/agolo/1443206776?i=1443206797&app=music",
  "https://embed.music.apple.com/us/album/anba-sikl%C3%B2n/1087292328?i=1087293882&app=music",
  "https://embed.music.apple.com/us/album/ke-m-pa-sote/1444041414?i=1444041831&app=music",
  "https://embed.music.apple.com/us/album/askamaya/1383064304?i=1383064513&app=music",
  "https://embed.music.apple.com/us/album/assossamagh/1280417051?i=1280417298&app=music",
  "https://embed.music.apple.com/us/album/balance/1450504677?i=1450504700&app=music",
  "https://embed.music.apple.com/us/album/be-my-baby/420123650?i=420123652&app=music",
  "https://embed.music.apple.com/us/album/bazoyenza-feat-dj-maphorisa/1445036075?i=1445036416&app=music",
  "https://embed.music.apple.com/us/album/bidi-bidi-bom-bom-1994-version/1440860107?i=1440860331&app=music",
  "https://embed.music.apple.com/us/album/bomba-with-rostam-batmanglij/738174429?i=738174453&app=music",
  "https://embed.music.apple.com/gb/album/cest-bon-cest-bon-feat-roots-manuva/609889890?i=609890087&app=music",
  "https://embed.music.apple.com/us/album/chaimra/806001673?i=806003987&app=music",
  "https://embed.music.apple.com/us/album/chimamanda/1251848755?i=1251849193&app=music",
  "https://embed.music.apple.com/gb/album/the-way-to-win-your-love/1167050768?i=1167050882&app=music",
  "https://embed.music.apple.com/us/album/crazy-little-thing-called-love/1440774168?i=1440774185&app=music",
  "https://embed.music.apple.com/us/album/dancing-in-the-dark/203708420?i=203709340&app=music",
  "https://embed.music.apple.com/us/album/dancing-queen/1422648512?i=1422648513&app=music",
  "https://embed.music.apple.com/us/album/de-camino-a-la-vereda/1467829048?i=1467829061&app=music",
  "https://embed.music.apple.com/us/album/al-hassidi-terei/971619376?i=971619385&app=music",
  "https://embed.music.apple.com/us/album/diamonds-on-the-soles-of-her-shoes/581741456?i=581741461&app=music",
  "https://embed.music.apple.com/us/album/djan-fa/1008197371?i=1008197744&app=music",
  "https://embed.music.apple.com/us/album/zangalewa/945381593?i=945381603&app=music",
  "https://embed.music.apple.com/us/album/sua-cara-feat-anitta-pabllo-vittar/1241592871?i=1241593545&app=music",
  "https://embed.music.apple.com/us/album/c%C3%B4n%C3%B4/552670577?i=552670578&app=music",
  "https://embed.music.apple.com/us/album/eye-nyam-nam-a-mensuro-henrik-schwarz-blend/1009716342?i=1009716343&app=music",
  "https://embed.music.apple.com/us/album/jiji/1448476360?i=1448476583&app=music",
  "https://embed.music.apple.com/us/album/bitch-i-love-you/1443892443?i=1443892765&app=music",
  "https://embed.music.apple.com/us/album/call-me/1304660387?i=1304661020&app=music",
  "https://embed.music.apple.com/us/album/stand-by-your-gun/947999961?i=947999970&app=music",
  "https://embed.music.apple.com/us/album/parachute/1440827477?i=1440827500&app=music",
  "https://embed.music.apple.com/us/album/wagon-wheel/716773529?i=716773748&app=music",
  "https://embed.music.apple.com/us/album/chicken-fried/295740272?i=295740278&app=music",
  "https://embed.music.apple.com/us/album/vart-jag-mig-i-v%C3%A4rlden-v%C3%A4nder/966647218?i=966647375&app=music",
  "https://embed.music.apple.com/us/album/dont-stop-believin/169003304?i=169003415&app=music"
];

let happyMemesArray = [
  "http://giphygifs.s3.amazonaws.com/media/BlVnrxJgTGsUw/giphy.gif",
  "http://giphygifs.s3.amazonaws.com/media/Ls6ahtmYHU760/giphy.gif",
  "https://media.giphy.com/media/ZdxvKjrunwylAXqV2u/giphy.gif",
  "https://media.giphy.com/media/dU02UN60fx4BYY66U8/giphy.gif",
  "https://media.giphy.com/media/88i7CykZoQIpdMqjNR/giphy.gif",
  "https://media.giphy.com/media/jTSOClK7HBoMaVn5Hi/giphy.gif",
  "https://media.giphy.com/media/1Y9XsVvtwc7ShRHE5F/giphy.gif",
  "https://media.giphy.com/media/PPjWoRhjw3W1nKxALe/giphy.gif",
  "https://media.giphy.com/media/nxOACubtsWzl7YZbTw/giphy.gif",
  "https://media.giphy.com/media/l2SpUoCttMdqNiDbW/giphy.gif",
  "https://media.giphy.com/media/5es1DR0yut6sHxAIz5/giphy.gif",
  "http://giphygifs.s3.amazonaws.com/media/nXxOjZrbnbRxS/giphy.gif",
  "http://giphygifs.s3.amazonaws.com/media/rdma0nDFZMR32/giphy.gif",
  "https://media.giphy.com/media/1zlDnvnoLbJSnjk1UJ/giphy.gif",
  "https://media.giphy.com/media/tyxovVLbfZdok/giphy.gif",
  "http://giphygifs.s3.amazonaws.com/media/9EC1okpxH360M/giphy.gif",
  "http://giphygifs.s3.amazonaws.com/media/P8MxmGnjmytws/giphy.gif",
  "https://media.giphy.com/media/ZFTKZ8zwj38gE/giphy.gif"
];

let happyMemesCount = happyMemesArray.length;
let randHappyMemesIndex = Math.floor(happyMemesCount * Math.random());

let happyQuotesCount = happyQuotesArray.length;
let randHappyQuotesIndex = Math.floor(happyQuotesCount * Math.random());

let happyTunesCount = happyTunesArray.length;
let randHappyTunesIndex = Math.floor(happyTunesCount * Math.random());

// *Display relevant outputs if a "happy" match is generated
function checkHappy() {
  let formInput = document.getElementById("mood-entry").value.trim();

  let happyTheme = {
    colour: "yellow",
    dark: "#a7a25c",
    medium: "rgba(230, 227, 159, 0.87)",
    mediumDark: "rgba(219, 216, 128, 0.87)",
    light: "rgb(231, 230, 207)",
    hoverLight: "#FCFBDE",
    emoji: "😁"
  };

  if (happyWordsArray.includes(formInput)) {
    document.getElementById("meme").src = happyMemesArray[randHappyMemesIndex];
    document.getElementById("quote").innerHTML =
      happyQuotesArray[randHappyQuotesIndex];
    document.getElementById("tune").src = happyTunesArray[randHappyTunesIndex];

    // *Changes colours appropriately
    document.getElementsByClassName("light-bg")[0].style.backgroundColor =
      happyTheme.light;
    document.getElementsByClassName("hoverLight-bg")[0].style.backgroundColor =
      happyTheme.hoverLight;
    document.getElementsByClassName("hoverLight-bg")[1].style.backgroundColor =
      happyTheme.hoverLight;
    document.getElementsByClassName("hoverLight-bg")[2].style.backgroundColor =
      happyTheme.hoverLight;
    document.getElementsByClassName("light-cl")[0].style.color =
      happyTheme.light;

    document.getElementsByClassName("medium-bg")[0].style.backgroundColor =
      happyTheme.medium;
    document.getElementsByClassName("medium-bg")[1].style.backgroundColor =
      happyTheme.medium;
    document.getElementsByClassName("medium-bg")[2].style.backgroundColor =
      happyTheme.medium;
    document.getElementsByClassName("medium-cl")[0].style.color =
      happyTheme.mediumDark;
    document.getElementsByClassName("medium-cl")[1].style.color =
      happyTheme.mediumDark;
    document.getElementsByClassName("medium-cl")[2].style.color =
      happyTheme.mediumDark;

    document.getElementsByClassName("dark-bg")[0].style.backgroundColor =
      happyTheme.dark;
    document.getElementsByClassName("dark-br")[0].style.borderColor =
      happyTheme.dark;
    document.getElementsByClassName("dark-br")[1].style.borderColor =
      happyTheme.dark;
    document.getElementsByClassName("dark-br")[2].style.borderColor =
      happyTheme.dark;
    document.getElementsByClassName("dark-br")[3].style.borderColor =
      happyTheme.dark;
    document.getElementsByClassName("dark-br")[4].style.borderColor =
      happyTheme.dark;
    document.getElementsByClassName("dark-br")[5].style.borderColor =
      happyTheme.dark;
    document.getElementsByClassName("dark-br")[6].style.borderColor =
      happyTheme.dark;
    document.getElementsByClassName("dark-br")[7].style.borderColor =
      happyTheme.dark;
    document.getElementsByClassName("dark-br")[8].style.borderColor =
      happyTheme.dark;
    document.getElementsByClassName("dark-br")[9].style.borderColor =
      happyTheme.dark;
    document.getElementsByClassName("dark-br")[10].style.borderColor =
      happyTheme.dark;
    document.getElementsByClassName("dark-cl")[0].style.color = happyTheme.dark;
    document.getElementsByClassName("dark-cl")[1].style.color = happyTheme.dark;

    document.querySelectorAll(".medium-bg-hover")[0].onmouseover = function() {
      document.querySelectorAll(".medium-bg-hover")[0].style.backgroundColor =
        happyTheme.light;
    };
    document.querySelectorAll(".light-bg-hover")[0].onmouseover = function() {
      document.querySelectorAll(".light-bg-hover")[0].style.backgroundColor =
        happyTheme.light;
    };
    document.querySelectorAll(".light-bg-hover")[1].onmouseover = function() {
      document.querySelectorAll(".light-bg-hover")[1].style.backgroundColor =
        happyTheme.light;
    };
    document.querySelectorAll(".light-bg-hover")[2].onmouseover = function() {
      document.querySelectorAll(".light-bg-hover")[2].style.backgroundColor =
        happyTheme.light;
    };

    document.querySelectorAll(".medium-bg-hover")[0].onmouseout = function() {
      document.querySelectorAll(".medium-bg-hover")[0].style.backgroundColor =
        happyTheme.hoverLight;
    };
    document.querySelectorAll(".light-bg-hover")[0].onmouseout = function() {
      document.querySelectorAll(".light-bg-hover")[0].style.backgroundColor =
        happyTheme.hoverLight;
    };
    document.querySelectorAll(".light-bg-hover")[1].onmouseout = function() {
      document.querySelectorAll(".light-bg-hover")[1].style.backgroundColor =
        happyTheme.hoverLight;
    };
    document.querySelectorAll(".light-bg-hover")[2].onmouseout = function() {
      document.querySelectorAll(".light-bg-hover")[2].style.backgroundColor =
        happyTheme.hoverLight;
    };

    // return formInput;
  }
}

// // *re-randomises and changes outputs
// if (happyWordsArray.includes(formInput)) {
//   function shuffleHappyMemes() {
//     let newHappyMemesCount = happyMemesArray.length;
//     let newRandHappyMemesIndex = Math.floor(newHappyMemesCount * Math.random());

//     document.getElementById("meme").src =
//       happyMemesArray[newRandHappyMemesIndex];
//   }

//   function shuffleHappyQuotes() {
//     let newHappyQuotesCount = happyQuotesArray.length;
//     let newRandHappyQuotesIndex = Math.floor(
//       newHappyQuotesCount * Math.random()
//     );

//     document.getElementById("quote").innerHTML =
//       happyQuotesArray[newRandHappyQuotesIndex];
//   }

//   function shuffleHappyTunes() {
//     let newHappyTunesCount = happyTunesArray.length;
//     let newRandHappyTunesIndex = Math.floor(newHappyTunesCount * Math.random());

//     document.getElementById("tune").src =
//       happyTunesArray[newRandHappyTunesIndex];
//   }
// }

let fearfulWordsList = [
  "fearful",
  "afraid",
  "frightened",
  "scared",
  "scaredstiff",
  "scaredtodeath",
  "terrified",
  "petrified",
  "alarmed",
  "panicky",
  "nervous",
  "tense",
  "apprehensive",
  "uneasy",
  "hesitant",
  "disquieted",
  "worried",
  "worriedsick",
  "anxious",
  "nervy",
  "jittery",
  "jumpy",
  "inafunk",
  "inabluefunk",
  "nervous",
  "trembling",
  "quaking",
  "quivering",
  "shrinking",
  "cowering",
  "cowed",
  "daunted",
  "timid",
  "timorous",
  "diffident",
  "fainthearted",
  "cowardly",
  "pusillanimous",
  "frightened",
  "afraid",
  "fearful",
  "nervous",
  "panicky",
  "agitated",
  "alarmed",
  "worried",
  "intimidated",
  "afraid",
  "anxious",
  "fearful",
  "panicked",
  "panicky",
  "startled",
  "petrified",
  "shaken",
  "terrified",
  "aghast",
  "panicstricken",
  "terrorstricken",
  "afraid",
  "agitated",
  "anxious",
  "frightened",
  "hesitant",
  "jittery",
  "nervous",
  "panicky",
  "scared",
  "shy",
  "skittish",
  "tense",
  "timid",
  "uneasy",
  "aflutter",
  "aghast",
  "chicken",
  "chickenhearted",
  "diffident",
  "discomposed",
  "disquieted",
  "disturbed",
  "fainthearted",
  "goosebumpy",
  "havecoldfeet",
  "inadither",
  "intimidated",
  "jumpy",
  "lilylivered",
  "mousy",
  "nerveless",
  "nervy",
  "perturbed",
  "phobic",
  "pusillanimous",
  "quivery",
  "rabbity",
  "runningscared",
  "shaky",
  "sheepish",
  "shrinking",
  "solicitous",
  "spineless",
  "timorous",
  "tremulous",
  "unmanly",
  "weakkneed",
  "worried",
  "yellow"
];

let fearfulWordsArray = Array.from(new Set(fearfulWordsList));

let fearfulQuotesArray = [
  "“I'm not afraid of death; I just don't want to be there when it happens.” ― Woody Allen",
  "“Do one thing every day that scares you.” ― Eleanor Roosevelt",
  "“...As we are liberated from our own fear, our presence automatically liberates others.” ― Marianne Williamson",
  "“There is only one thing that makes a dream impossible to achieve: the fear of failure.” ― Paulo Coelho, The Alchemist",
  "“Bran thought about it. 'Can a man still be brave if he's afraid?''That is the only time a man can be brave,' his father told him.” ― George R.R. Martin, A Game of Thrones",
  "“Fear doesn't shut you down; it wakes you up” ― Veronica Roth, Divergent",
  "“There are three things all wise men fear: the sea in storm, a night with no moon, and the anger of a gentle man.” ― Patrick Rothfuss, The Wise Man's Fear",
  "“Fear of a name increases fear of the thing itself.” ― J.K. rowling, Harry Potter and the Sorcerer's Stone",
  "“Don't be afraid of your fears. They're not there to scare you. They're there to let you know that something is worth it.” ― C. JoyBell C.",
  "“Tell your heart that the fear of suffering is worse than the suffering itself. And that no heart has ever suffered when it goes in search of its dreams, because every second of the search is a second's encounter with God and with eternity.” ― Paulo Coelho, The Alchemist",
  "“There is a stubbornness about me that never can bear to be frightened at the will of others. My courage always rises at every attempt to intimidate me.” ― Jane Austen, Pride and Prejudice",
  "“We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.” ― Plato",
  "“Have no fear of perfection - you'll never reach it.” ― Salvador Dali",
  "“Expose yourself to your deepest fear; after that, fear has no power, and the fear of freedom shrinks and vanishes. You are free.” ― Jim Morrison",
  "“Scared is what you're feeling. Brave is what you're doing.” ― Emma Donoghue, Room",
  "“Do not be afraid; our fate cannot be taken from us; it is a gift.” ― Dante Alighieri, Inferno",
  "“Don't give in to your fears. If you do, you won't be able to talk to your heart.” ― Paulo Coelho, The Alchemist",
  "“I don’t trust anybody. Not anybody. And the more that I care about someone, the more sure I am they’re going to get tired of me and take off.” ― Rainbow Rowell, Fangirl",
  "“I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.” ― Nelson Mandela",
  "“Anxiety is the dizziness of freedom.” ― Søren Kierkegaard ,",
  "“Men go to far greater lengths to avoid what they fear than to obtain what they desire.” ― Dan Brown, The Da Vinci Code",
  "“No one ever told me that grief felt so like fear.” ― C.S. Lewis, A Grief Observed",
  "“I have accepted fear as part of life – specifically the fear of change... I have gone ahead despite the pounding in the heart that says: turn back....” ― Erica Jong",
  "“Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.” ― Marie Curie",
  "“I wonder if fears ever really go away, or if they just lose their power over us.” ― Veronica Roth, Allegiant",
  "“A man that flies from his fear may find that he has only taken a short cut to meet it.” ― J.R.R. Tolkien, The Children of Húrin",
  "“I believe that words are strong, that they can overwhelm what we fear when fear seems more awful than life is good.” ― Andrew Solomon",
  "“Without fear there cannot be courage.” ― Christopher Paolini",
  "“He who has overcome his fears will truly be free.” ― Aristotle",
  "“I'll tell you what Freedom is to me. No fear.”― Nina Simone",
  "“The cave you fear to enter holds the treasure you seek.” ― Joseph Campbell",
  "“Courage is feeling fear, not getting rid of fear, and taking action in the face of fear.” ― Roy T. Bennett, The Light in the Heart",
  "“Always do what you're afraid to do.” ― E. Lockhart, We Were Liars",
  "“Because fear kills everything,” Mo had once told her. “Your mind, your heart, your imagination.” ― Cornelia Funke, Inkheart"
];

let fearfulTunesArray = [
  "https://embed.music.apple.com/us/album/i-am-the-upsetter/1376350608?i=1376351109&app=music",
  "https://embed.music.apple.com/us/album/i-want-to-break-free/1440763432?i=1440763977&app=music",
  "https://embed.music.apple.com/us/album/shattered-hollow/845312934?i=845313042&app=music",
  "https://embed.music.apple.com/us/album/ja-funmi/1442454099?i=1442454196&app=music",
  "https://embed.music.apple.com/us/album/angels-among-us/270490243?i=270490281&app=music",
  "https://embed.music.apple.com/us/album/hello-god/364015789?i=364015843&app=music",
  "https://embed.music.apple.com/us/album/il-nest-jamais-trop-tard/1468135171?i=1468135233&app=music",
  "https://embed.music.apple.com/us/album/both-sides-now-orchestral-version/72800698?i=72800678&app=music",
  "https://embed.music.apple.com/us/album/you-cant-always-get-what-you-want-mono/1440774096?i=1440775120&app=music",
  "https://embed.music.apple.com/gb/album/allelua-amen/829327489?i=829327838&app=music",
  "https://embed.music.apple.com/gb/album/there-will-be-light/1331164630?i=1331165078&app=music",
  "https://embed.music.apple.com/gb/album/free/295740272?i=295740277&app=music",
  "https://embed.music.apple.com/us/album/go-rest-high-on-that-mountain/1440763436?i=1440764363&app=music",
  "https://embed.music.apple.com/us/album/hold-on/1072477718?i=1072477719&app=music",
  "https://embed.music.apple.com/us/album/doubt/1440851006?i=1440851225&app=music",
  "https://embed.music.apple.com/us/album/here-comes-the-sun/1441164426?i=1441164589&app=music",
  "https://embed.music.apple.com/us/album/let-it-be/1441164495?i=1441164738&app=music",
  "https://embed.music.apple.com/us/album/let-it-be/715693024?i=715693262&app=music",
  "https://embed.music.apple.com/us/album/the-ballad-of-john-and-yoko/1441133100?i=1441133287&app=music",
  "https://embed.music.apple.com/us/album/titanium-feat-sia/693225996?i=693226464&app=music",
  "https://embed.music.apple.com/us/album/carry-on/1440849883?i=1440849899&app=music",
  "https://embed.music.apple.com/us/album/yere-faga-feat-tony-allen/1195892750?i=1195892873&app=music",
  "https://embed.music.apple.com/us/album/no-tears-left-to-cry/1399202900?i=1399204228&app=music",
  "https://embed.music.apple.com/us/album/dont-breathe-out/1033570925?i=1033571011&app=music",
  "https://embed.music.apple.com/us/album/keep-your-head-up/1440762059?i=1440762862&app=music",
  "https://embed.music.apple.com/us/album/keep-your-head-up/1297065688?i=1297065972&app=music",
  "https://embed.music.apple.com/us/album/stubborn-love/926367059?i=926369918&app=music",
  "https://embed.music.apple.com/us/album/dont-worry-be-happy/723398262?i=723398328&app=music",
  "https://embed.music.apple.com/us/album/three-little-birds/1469575763?i=1469575900&app=music",
  "https://embed.music.apple.com/us/album/put-your-records-on/724883560?i=724884380&app=music",
  "https://embed.music.apple.com/us/album/my-silver-lining/845312934?i=845313037&app=music",
  "https://embed.music.apple.com/us/album/no-woman-no-cry-live/1440822588?i=1440823021&app=music",
  "https://embed.music.apple.com/us/album/shake-it-out/1440766210?i=1440766994&app=music",
  "https://embed.music.apple.com/us/album/hall-of-fame-feat-will-i-am/563641795?i=563641976&app=music",
  "https://embed.music.apple.com/us/album/battle-scars/561751903?i=561751995&app=music",
  "https://embed.music.apple.com/us/album/were-in-this-together/294345006?i=294345016&app=music",
  "https://embed.music.apple.com/us/album/ori-mi-ko-ni-buru/1259965206?i=1259965308&app=music",
  "https://embed.music.apple.com/us/album/pick-up/1230257409?i=1230257819&app=music",
  "https://embed.music.apple.com/gb/album/sikelele/713418424?i=713418466&app=music",
  "https://embed.music.apple.com/us/album/rollercoasters/789827447?i=789827481&app=music",
  "https://embed.music.apple.com/us/album/i-wish-i-knew-how-it-would-feel-to-be-free/298325770?i=298326068&app=music",
  "https://embed.music.apple.com/us/album/someday-well-all-be-free/731746642?i=731746792&app=music",
  "https://embed.music.apple.com/us/album/exhale-shoop-shoop/216124789?i=216124808&app=music",
  "https://embed.music.apple.com/us/album/better/1359947988?i=1359949127&app=music",
  "https://embed.music.apple.com/us/album/shine/1079234232?i=1079234238&app=music",
  "https://embed.music.apple.com/us/album/be-yourself/1146195596?i=1146195715&app=music",
  "https://embed.music.apple.com/us/album/futura-free/1146195596?i=1146195728&app=music",
  "https://embed.music.apple.com/gb/album/lengoma/716338096?i=716338807&app=music",
  "https://embed.music.apple.com/gb/album/loliwe/716338096?i=716338748&app=music",
  "https://embed.music.apple.com/us/album/stronger/1451142304?i=1451142309&app=music",
  "https://embed.music.apple.com/us/album/stronger-what-doesnt-kill-you/464532842?i=464532969&app=music",
  "https://embed.music.apple.com/us/album/all-i-need-is-you/715746143?i=715746492&app=music",
  "https://embed.music.apple.com/us/album/imagine-me/303096289?i=303096352&app=music",
  "https://embed.music.apple.com/us/album/high/1444131904?i=1444132339&app=music",
  "https://embed.music.apple.com/us/album/the-battle-is-the-lords/307386793?i=307386905&app=music",
  "https://embed.music.apple.com/us/album/jailer/1444729965?i=1444729970&app=music",
  "https://embed.music.apple.com/us/album/shine-your-light/1464145618?i=1464146532&app=music",
  "https://embed.music.apple.com/us/album/why-cant-we/1464144192?i=1464144194&app=music",
  "https://embed.music.apple.com/us/album/compass/1443089382?i=1443089409&app=music",
  "https://embed.music.apple.com/us/album/hang-loose/1072477718?i=1072478231&app=music"
];

let fearfulMemesArray = [
  "https://media.giphy.com/media/fpXxIjftmkk9y/giphy.gif",
  "https://media.giphy.com/media/51Uiuy5QBZNkoF3b2Z/giphy.gif",
  "https://media.giphy.com/media/51Uiuy5QBZNkoF3b2Z/giphy.gif",
  "https://media.giphy.com/media/KupdfnqWwV7J6/giphy.gif",
  "http://giphygifs.s3.amazonaws.com/media/12RfP2odT4hEOI/giphy.gif",
  "https://media.giphy.com/media/UVAasrbF1ly0nx0xQi/giphy.gif",
  "http://giphygifs.s3.amazonaws.com/media/SrmLZIT3S8oFO/giphy.gif",
  "https://media.giphy.com/media/WuY3q6On4Fj8I/giphy.gif",
  "https://media.giphy.com/media/l3vR5jB1OyCIbr8NG/giphy.gif",
  "https://media.giphy.com/media/2ywOCJ5bs8g8wsxAxB/giphy.gif",
  "https://media.giphy.com/media/AFTWK5Qo22V2g/giphy.gif",
  "https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif",
  "https://media.giphy.com/media/3o7TKqnN349PBUtGFO/giphy.gif",
  "https://media.giphy.com/media/LOw6Xi1JmDpZe/giphy.gif",
  "https://media.giphy.com/media/l2SpXppPAVltwn5v2/giphy.gif",
  "https://media.giphy.com/media/l2SpXppPAVltwn5v2/giphy.gif",
  "https://media.giphy.com/media/YqcHhv3LSfVCiGz4QO/giphy.gif",
  "https://media.giphy.com/media/woPWk26TecBjpNMj6n/giphy.gif",
  "https://media.giphy.com/media/krP2NRkLqnKEg/giphy.gif",
  "https://media.giphy.com/media/wOIhQl355kxTlgVfhI/giphy.gif",
  "https://media.giphy.com/media/wI8z6zxzGZJ1Pu0Wvf/giphy.gif",
  "https://media.giphy.com/media/dAKVVTRYb9AhAkPGx6/giphy.gif",
  "http://giphygifs.s3.amazonaws.com/media/odheujzsOio5q/giphy.gif"
];

let fearfulMemesCount = fearfulMemesArray.length;
let randFearfulMemesIndex = Math.floor(fearfulMemesCount * Math.random());

let fearfulQuotesCount = fearfulQuotesArray.length;
let randFearfulQuotesIndex = Math.floor(fearfulQuotesCount * Math.random());

let fearfulTunesCount = fearfulTunesArray.length;
let randFearfulTunesIndex = Math.floor(fearfulTunesCount * Math.random());

function checkFearful() {
  let formInput = document.getElementById("mood-entry").value.trim();

  let fearfulTheme = {
    colour: "green",
    dark: "#2C6F4A",
    medium: "#97C49E",
    light: "#CFD8D1",
    hoverLight: "rgb(239, 255, 242)",
    emoji: "😨"
  };

  if (fearfulWordsArray.includes(formInput)) {
    document.getElementById("meme").src =
      fearfulMemesArray[randFearfulMemesIndex];
    document.getElementById("quote").innerHTML =
      fearfulQuotesArray[randFearfulQuotesIndex];
    document.getElementById("tune").src =
      fearfulTunesArray[randFearfulTunesIndex];

    // *Changes colours appropriately
    document.getElementsByClassName("light-bg")[0].style.backgroundColor =
      fearfulTheme.light;
    document.getElementsByClassName("hoverLight-bg")[0].style.backgroundColor =
      fearfulTheme.hoverLight;
    document.getElementsByClassName("hoverLight-bg")[1].style.backgroundColor =
      fearfulTheme.hoverLight;
    document.getElementsByClassName("hoverLight-bg")[2].style.backgroundColor =
      fearfulTheme.hoverLight;
    document.getElementsByClassName("light-cl")[0].style.color =
      fearfulTheme.light;

    document.getElementsByClassName("medium-bg")[0].style.backgroundColor =
      fearfulTheme.medium;
    document.getElementsByClassName("medium-bg")[1].style.backgroundColor =
      fearfulTheme.medium;
    document.getElementsByClassName("medium-bg")[2].style.backgroundColor =
      fearfulTheme.medium;
    document.getElementsByClassName("medium-cl")[0].style.color =
      fearfulTheme.medium;
    document.getElementsByClassName("medium-cl")[1].style.color =
      fearfulTheme.medium;
    document.getElementsByClassName("medium-cl")[2].style.color =
      fearfulTheme.medium;

    document.getElementsByClassName("dark-bg")[0].style.backgroundColor =
      fearfulTheme.dark;
    document.getElementsByClassName("dark-br")[0].style.borderColor =
      fearfulTheme.dark;
    document.getElementsByClassName("dark-br")[1].style.borderColor =
      fearfulTheme.dark;
    document.getElementsByClassName("dark-br")[2].style.borderColor =
      fearfulTheme.dark;
    document.getElementsByClassName("dark-br")[3].style.borderColor =
      fearfulTheme.dark;
    document.getElementsByClassName("dark-br")[4].style.borderColor =
      fearfulTheme.dark;
    document.getElementsByClassName("dark-br")[5].style.borderColor =
      fearfulTheme.dark;
    document.getElementsByClassName("dark-br")[6].style.borderColor =
      fearfulTheme.dark;
    document.getElementsByClassName("dark-br")[7].style.borderColor =
      fearfulTheme.dark;
    document.getElementsByClassName("dark-br")[8].style.borderColor =
      fearfulTheme.dark;
    document.getElementsByClassName("dark-br")[9].style.borderColor =
      fearfulTheme.dark;
    document.getElementsByClassName("dark-br")[10].style.borderColor =
      fearfulTheme.dark;
    document.getElementsByClassName("dark-cl")[0].style.color =
      fearfulTheme.dark;
    document.getElementsByClassName("dark-cl")[1].style.color =
      fearfulTheme.dark;

    document.querySelectorAll(".medium-bg-hover")[0].onmouseover = function() {
      document.querySelectorAll(".medium-bg-hover")[0].style.backgroundColor =
        fearfulTheme.light;
    };
    document.querySelectorAll(".light-bg-hover")[0].onmouseover = function() {
      document.querySelectorAll(".light-bg-hover")[0].style.backgroundColor =
        fearfulTheme.light;
    };
    document.querySelectorAll(".light-bg-hover")[1].onmouseover = function() {
      document.querySelectorAll(".light-bg-hover")[1].style.backgroundColor =
        fearfulTheme.light;
    };
    document.querySelectorAll(".light-bg-hover")[2].onmouseover = function() {
      document.querySelectorAll(".light-bg-hover")[2].style.backgroundColor =
        fearfulTheme.light;
    };

    document.querySelectorAll(".medium-bg-hover")[0].onmouseout = function() {
      document.querySelectorAll(".medium-bg-hover")[0].style.backgroundColor =
        fearfulTheme.hoverLight;
    };
    document.querySelectorAll(".light-bg-hover")[0].onmouseout = function() {
      document.querySelectorAll(".light-bg-hover")[0].style.backgroundColor =
        fearfulTheme.hoverLight;
    };
    document.querySelectorAll(".light-bg-hover")[1].onmouseout = function() {
      document.querySelectorAll(".light-bg-hover")[1].style.backgroundColor =
        fearfulTheme.hoverLight;
    };
    document.querySelectorAll(".light-bg-hover")[2].onmouseout = function() {
      document.querySelectorAll(".light-bg-hover")[2].style.backgroundColor =
        fearfulTheme.hoverLight;
    };
  }
}

let peacefulWordsList = [
  "peaceful",
  "zen",
  "relaxed",
  "chill",
  "chilled",
  "tranquil",
  "calm",
  "restful",
  "pleasant",
  "quiet",
  "still",
  "relaxing",
  "soothing",
  "sleepy",
  "silent",
  "soundless",
  "hushed",
  "noiseless",
  "undisturbed",
  "untroubled",
  "private",
  "secluded",
  "solitary",
  "isolated",
  "freefromdisturbance",
  "freefrominterference",
  "freefrominterruption",
  "serene",
  "calm",
  "tranquil",
  "composed",
  "placid",
  "atpeace",
  "atrest",
  "atease",
  "inrepose",
  "reposeful",
  "undisturbed",
  "untroubled",
  "unworried",
  "unruffled",
  "anxietyfree",
  "content",
  "blissful",
  "secure",
  "harmonious",
  "atpeace",
  "strifefree",
  "peaceable",
  "conflictfree",
  "ongoodterms",
  "amicable",
  "friendly",
  "cordial",
  "nonviolent",
  "unwarlike",

  "amicable",
  "bloodless",
  "calm",
  "harmonious",
  "neutral",
  "nonviolent",
  "peace-loving",
  "placid",
  "quiet",
  "smooth",
  "steady",
  "tranquil",
  "peaceable",
  "allquiet",
  "atpeace",
  "collected",
  "composed",
  "constant",
  "easeful",
  "equable",
  "freefromstrife",
  "gentle",
  "halcyon",
  "irenic",
  "level",
  "mellow",
  "neutralist",
  "nonbelligerent",
  "onfriendlyterms",
  "ongoodterms",
  "pacifistic",
  "placatory",
  "restful",
  "sociable",
  "still",
  "undisturbed",
  "unruffled",
  "untroubled",
  "withouthostility"
];

let peacefulWordsArray = Array.from(new Set(peacefulWordsList));

let peacefulQuotesArray = [
  "“Nothing can disturb your peace of mind unless you allow it to.” ― Roy T. Bennett, The Light in the Heart",
  "“Grudges are for those who insist that they are owed something; forgiveness, however, is for those who are substantial enough to move on.” ― Criss Jami, Salomé: In Every Inch In Every Mile",
  "“The punishment of every disordered mind is its own disorder.” ― St. Augustine of Hippo, Confessions",
  "“Nothing is more conductive to peace of mind than not having any opinions at all.” ― Georg Christoph Lichtenberg, The Waste Books",
  "“If you are driven by fear, anger or pride nature will force you to compete. If you are guided by courage, awareness, tranquility and peace nature will serve you.” ― Amit Ray, Nonviolence: The Transforming Power",
  "“Peace begins with a smile..” ― Mother Teresa",
  "“You cannot find peace by avoiding life.” ― Michael Cunningham, The Hours",
  "“Fighting for peace is like screwing for virginity.” ― George Carlin",
  "“When the power of love overcomes the love of power, the world will know peace.” ― Jimi Hendrix",
  "“Peace cannot be kept by force; it can only be achieved by understanding.” ― Albert Einstein",
  "“If everyone demanded peace instead of another television set, then there'd be peace.” ― John Lennon",
  "“Thou hast made us for thyself, O Lord, and our heart is restless until it finds its rest in thee.” ― Augustine of Hippo, Confessions",
  "“Peace comes from within.  Do not seek it without.” ― Siddhārtha Gautama",
  "“Dad, how do soldiers killing each other solve the world's problems?” ― Bill Watterson,",
  "“You have peace,” the old woman said, “when you make it with yourself.” ― Mitch Albom, The Five People You Meet in Heaven",
  "“You can have peace. Or you can have freedom. Don't ever count on having both at once.” ― Robert A. Heinlein",
  "“If you want to conquer the anxiety of life, live in the moment, live in the breath.” ― Amit Ray, Om Chanting and Meditation",
  "“Peace is always beautiful.” ― Walt Whitman, Leaves of Grass",
  "“Even if things don't unfold the way you expected, don't be disheartened or give up. One who continues to advance will win in the end.” ― Daisaku Ikeda",
  "“It is not enough to win a war; it is more important to organize the peace.” ― Aristotle",
  "“A quiet conscience makes one strong!” ― Anne Frank, The Diary of a Young Girl",
  "“If you love me as you say you do,' she whispered, 'make it so that I am at peace.” ― Leo Tolstoy, Anna Karenina",
  "“You find peace not by rearranging the circumstances of your life, but by realizing who you are at the deepest level.” ― Eckhart Tolle",
  "“Until he extends the circle of his compassion to all living things, man will not himself find peace.” ― Albert Schweitzer",
  "“and when all the wars are over, a butterfly will still be beautiful.” ― Ruskin Bond, Scenes from a Writer's Life",
  "“The words ‘I Love You’ kill, and resurrect millions, in less than a second.” ― Aberjhani, Elemental: The Power of Illuminated Love",
  "“The practice of forgiveness is our most important contribution to the healing of the world.” ― Marianne Williamson",
  "“World peace must develop from inner peace. Peace is not just mere absence of violence. Peace is, I think, the manifestation of human compassion.” ― Dali Lama",
  "“To understand the immeasurable, the mind must be extraordinarily quiet, still.” ― Jiddu Krishnamurti",
  "“Self-talk reflects your innermost feelings.” ― Dr. Asa Don Brown",
  "“It is my conviction that there is no way to peace - peace is the way.” ― Thich Nhat Hanh, The Art of Power",
  "“Peace is not something you wish for, it is something you make, something you	are, something you do, and something you give away. ” ― Robert Fulghum"
];

let peacefulTunesArray = [
  "https://embed.music.apple.com/us/album/abba/1378448115?i=1378448749&app=music",
  "https://embed.music.apple.com/us/album/abusey-junction/1440343594?i=1440343845&app=music",
  "https://embed.music.apple.com/us/album/ai-ga-na/176615923?i=176617574&app=music",
  "https://embed.music.apple.com/us/album/ai-amor/1418660856?i=1418661264&app=music",
  "https://embed.music.apple.com/us/album/a%C3%B1o-bisiesto/1000830433?i=1000830446&app=music",
  "https://embed.music.apple.com/us/album/aint-no-way/933585548?i=933585559&app=music",
  "https://embed.music.apple.com/us/album/makoun-oumou/1467828080?i=1467828196&app=music",
  "https://embed.music.apple.com/us/album/sonkolon/1467828080?i=1467828197&app=music",
  "https://embed.music.apple.com/us/album/wilil%C3%A9-feat-toumani-diabat%C3%A9/1467828080?i=1467828297&app=music",
  "https://embed.music.apple.com/us/album/ameyatchi/929612429?i=929612461&app=music",
  "https://embed.music.apple.com/us/album/andinzwi/1206981202?i=1206981217&app=music",
  "https://embed.music.apple.com/us/album/todii/1207022392?i=1207022399&app=music",
  "https://embed.music.apple.com/us/album/mai-varamba/1207022392?i=1207022490&app=music",
  "https://embed.music.apple.com/us/album/around-you/1343878016?i=1343879040&app=music",
  "https://embed.music.apple.com/us/album/cuatro-vientos-rey-kjavik-remix/1327921575?i=1327921597&app=music",
  "https://embed.music.apple.com/us/album/eggs-over-easy/789827447?i=789827518&app=music",
  "https://embed.music.apple.com/us/album/arsonists-lullabye/855326898?i=855326972&app=music",
  "https://embed.music.apple.com/us/album/someone-new/900672435?i=900672613&app=music",
  "https://embed.music.apple.com/us/album/asimbonanga/277901874?i=277901877&app=music",
  "https://embed.music.apple.com/us/album/atomic-bomb/1178742497?i=1178742603&app=music",
  "https://embed.music.apple.com/us/album/baby-love/1443150912?i=1443150938&app=music",
  "https://embed.music.apple.com/us/album/baby/658386027?i=658386051&app=music",
  "https://embed.music.apple.com/us/album/our-day-will-come/1440809772?i=1440809786&app=music",
  "https://embed.music.apple.com/us/album/beasts-of-no-nation/682192980?i=682192985&app=music",
  "https://embed.music.apple.com/us/album/beautiful-girl/1366411528?i=1366411602&app=music",
  "https://embed.music.apple.com/us/album/como-la-flor/1440826979?i=1440827900&app=music",
  "https://embed.music.apple.com/us/album/bidi-bidi-bom-bom/714819386?i=714819752&app=music",
  "https://embed.music.apple.com/us/album/boulder-to-birmingham/5559908?i=5559851&app=music",
  "https://embed.music.apple.com/us/album/till-i-gain-control-again/5560150?i=5560013&app=music",
  "https://embed.music.apple.com/us/album/bougnouni/852583131?i=852583219&app=music",
  "https://embed.music.apple.com/us/album/ami/998111689?i=998111690&app=music",
  "https://embed.music.apple.com/us/album/book-of-days/253334781?i=253336375&app=music",
  "https://embed.music.apple.com/us/album/brasil-brasil/1387531417?i=1387531660&app=music",
  "https://embed.music.apple.com/us/album/fica-tudo-bem/1390113922?i=1390113934&app=music",
  "https://embed.music.apple.com/us/album/bridge-over-troubled-water/324127933?i=324127934&app=music",
  "https://embed.music.apple.com/us/album/buffalo-soldier/716252935?i=716253089&app=music",
  "https://embed.music.apple.com/us/album/buzzcut-season/1440818584?i=1440818668&app=music",
  "https://embed.music.apple.com/us/album/by-your-side/193532145?i=193532153&app=music",
  "https://embed.music.apple.com/us/album/cet-air/1208190010?i=1208190088&app=music",
  "https://embed.music.apple.com/us/album/cet-air-live/1304542836?i=1304543308&app=music",
  "https://embed.music.apple.com/us/album/chan-chan/1467829048?i=1467829056&app=music",
  "https://embed.music.apple.com/us/album/djan-djan/1443206776?i=1443207232&app=music",
  "https://embed.music.apple.com/us/album/okan-bale/193090639?i=193091246&app=music",
  "https://embed.music.apple.com/us/album/chaleur-humaine/1325689459?i=1325690089&app=music",
  "https://embed.music.apple.com/us/album/it/1325689459?i=1325689469&app=music",
  "https://embed.music.apple.com/us/album/half-ladies/1332012044?i=1332012763&app=music",
  "https://embed.music.apple.com/us/album/la-marcheuse/1403389214?i=1403391093&app=music",
  "https://embed.music.apple.com/us/album/a-change-is-gonna-come/937107826?i=937107849&app=music",
  "https://embed.music.apple.com/us/album/do-right-woman-do-right-man/809173402?i=809173411&app=music",
  "https://embed.music.apple.com/us/album/cl%C3%A9po/929612429?i=929612459&app=music",
  "https://embed.music.apple.com/gb/album/hara-lebitla/713418424?i=713418462&app=music",
  "https://embed.music.apple.com/gb/album/cold-little-heart-radio-edit/1444861725?i=1444861736&app=music",
  "https://embed.music.apple.com/us/album/come-on-home/679540964?i=679540975&app=music",
  "https://embed.music.apple.com/us/album/coming-home/1079234232?i=1079234234&app=music",
  "https://embed.music.apple.com/us/album/river/1079234232?i=1079234243&app=music",
  "https://embed.music.apple.com/us/album/lisa-sawyer/1079234232?i=1079234239&app=music",
  "https://embed.music.apple.com/us/album/always-alright/779282082?i=779282137&app=music",
  "https://embed.music.apple.com/us/album/sound-color/1053742064?i=1053742065&app=music",
  "https://embed.music.apple.com/us/album/joe-live-from-austin-city-limits/1053532427?i=1053532845&app=music",
  "https://embed.music.apple.com/us/album/cough-syrup/394992805?i=394992810&app=music",
  "https://embed.music.apple.com/us/album/crashes-in-love/1178743048?i=1178743105&app=music",
  "https://embed.music.apple.com/us/album/crumblin-erb/266365233?i=266365528&app=music",
  "https://embed.music.apple.com/us/album/take-off-your-cool-feat-norah-jones/281430653?i=281430782&app=music",
  "https://embed.music.apple.com/us/album/between-the-raindrops-feat-natasha-bedingfield/1442998024?i=1442998028&app=music",
  "https://embed.music.apple.com/us/album/everything/1440768163?i=1440768816&app=music",
  "https://embed.music.apple.com/us/album/listen-to-the-man/947999961?i=947999966&app=music",
  "https://embed.music.apple.com/us/album/leaving-it-up-to-you/947999961?i=947999967&app=music",
  "https://embed.music.apple.com/us/album/song-6/947999961?i=947999974&app=music",
  "https://embed.music.apple.com/us/album/budapest/947992178?i=947992181&app=music",
  "https://embed.music.apple.com/us/album/over-the-creek/947999961?i=947999972&app=music",
  "https://embed.music.apple.com/us/album/tennessee-whiskey/1440827477?i=1440827492&app=music",
  "https://embed.music.apple.com/us/album/daddy-doesnt-pray-anymore/1440827477?i=1440827639&app=music",
  "https://embed.music.apple.com/us/album/boys-round-here-feat-pistol-annies-friends/606057263?i=606057317&app=music",
  "https://embed.music.apple.com/us/album/dengo/1440864133?i=1440864573&app=music",
  "https://embed.music.apple.com/us/album/trevo-tu-feat-tiago-iorc/1440864133?i=1440864560&app=music",
  "https://embed.music.apple.com/us/album/all-night/1460432013?i=1460432162&app=music",
  "https://embed.music.apple.com/us/album/somebody-else/1440832181?i=1440832196&app=music",
  "https://embed.music.apple.com/us/album/depreston/960342539?i=960343118&app=music",
  "https://embed.music.apple.com/us/album/dirt-road-anthem/1263703717?i=1263703719&app=music",
  "https://embed.music.apple.com/us/album/toes/295740272?i=295740273&app=music",
  "https://embed.music.apple.com/us/album/svalkar-vinden/966641702?i=966641703&app=music",
  "https://embed.music.apple.com/us/album/dont/1440804235?i=1440804759&app=music",
  "https://embed.music.apple.com/us/album/dont-stop-believin/169003304?i=169003415&app=music",
  "https://embed.music.apple.com/us/album/faithfully/195193437?i=195194423&app=music",
  "https://embed.music.apple.com/us/album/dont-swallow-the-cap/626872826?i=626873095&app=music",
  "https://embed.music.apple.com/us/album/i-should-live-in-salt/626872826?i=626873092&app=music",
  "https://embed.music.apple.com/us/album/i-need-my-girl/626872826?i=626873234&app=music",
  "https://embed.music.apple.com/us/album/dutty-love-feat-natti-natasha/1473336444?i=1473336784&app=music",
  "https://embed.music.apple.com/us/album/dreams/202271826?i=202272624&app=music",
  "https://embed.music.apple.com/us/album/songbird/651879763?i=651880158&app=music",
  "https://embed.music.apple.com/us/album/songbird/306987130?i=306987177&app=music",
  "https://embed.music.apple.com/us/album/fields-of-gold/306987130?i=306987172&app=music",
  "https://embed.music.apple.com/us/album/over-the-rainbow/306987130?i=306987183&app=music",
  "https://embed.music.apple.com/us/album/somewhere-over-the-rainbow/6920402?i=6920394&app=music",
  "https://embed.music.apple.com/us/album/e-ma-seka/432905638?i=432905674&app=music",
  "https://embed.music.apple.com/us/album/inu-mimo/432905638?i=432905857&app=music",
  "https://embed.music.apple.com/us/album/feso-yaye/470157695?i=470157706&app=music",
  "https://embed.music.apple.com/us/album/mo-sori-ire/215590431?i=215591211&app=music",
  "https://embed.music.apple.com/us/album/mo-wa-dupe/215733503?i=215733584&app=music",
  "https://embed.music.apple.com/gb/album/engler-i-sneen/688888299?i=688889864&app=music",
  "https://embed.music.apple.com/gb/album/float-on-single-version/1445224462?i=1445224800&app=music",
  "https://embed.music.apple.com/gb/album/folly-cagni/1468135171?i=1468135368&app=music",
  "https://embed.music.apple.com/gb/album/sankara/1468135171?i=1468135253&app=music",
  "https://embed.music.apple.com/gb/album/warico/1468135171?i=1468135246&app=music",
  "https://embed.music.apple.com/gb/album/fuego/1444852216?i=1444852221&app=music",
  "https://embed.music.apple.com/gb/album/gold/818918526?i=818918664&app=music",
  "https://embed.music.apple.com/gb/album/1998/818918526?i=818918668&app=music",
  "https://embed.music.apple.com/gb/album/to-me/818918526?i=818918665&app=music",
  "https://embed.music.apple.com/gb/album/gone/703433424?i=703433666&app=music",
  "https://embed.music.apple.com/gb/album/rhythm-blues/1118453756?i=1118453769&app=music",
  "https://embed.music.apple.com/gb/album/10-000-weight-in-gold/703433424?i=703433638&app=music",
  "https://embed.music.apple.com/gb/album/another-story/703433424?i=703433489&app=music",
  "https://embed.music.apple.com/gb/album/lets-be-still/703433424?i=703433617&app=music",
  "https://embed.music.apple.com/gb/album/ririovara/176626411?i=176626821&app=music",
  "https://embed.music.apple.com/gb/album/obaro/176626411?i=176626737&app=music",
  "https://embed.music.apple.com/gb/album/gold-dust-woman/594061854?i=594061865&app=music",
  "https://embed.music.apple.com/gb/album/halkal%C4%B1-%C5%9Feker/1355691432?i=1355692215&app=music",
  "https://embed.music.apple.com/gb/album/hallelujah/385560474?i=385560480&app=music",
  "https://embed.music.apple.com/gb/album/hallelujah/192677178?i=192678693&app=music",
  "https://embed.music.apple.com/gb/album/wholl-stop-the-rain/1440948745?i=1440949341&app=music",
  "https://embed.music.apple.com/gb/album/have-you-ever-seen-the-rain/1440925821?i=1440926421&app=music",
  "https://embed.music.apple.com/gb/album/hawa-dolo/1467798010?i=1467798377&app=music",
  "https://embed.music.apple.com/gb/album/million-reasons/1440893782?i=1440893897&app=music",
  "https://embed.music.apple.com/gb/album/soukora-with-ry-cooder/1468132118?i=1468132122&app=music",
  "https://embed.music.apple.com/gb/album/cherish-the-day/158796559?i=158796608&app=music",
  "https://embed.music.apple.com/gb/album/cape-cod-kwassa-kwassa/271489741?i=271489745&app=music",
  "https://embed.music.apple.com/gb/album/woekilemo/1311817564?i=1311817565&app=music",
  "https://embed.music.apple.com/gb/album/heaven-hell-1977-version/1167055824?i=1167056100&app=music",
  "https://embed.music.apple.com/gb/album/maame/270545925?i=270545931&app=music",
  "https://embed.music.apple.com/gb/album/only-love-can-hurt-like-this/925879145?i=925879284&app=music",
  "https://embed.music.apple.com/gb/album/homesickness/113757995?i=113757719&app=music",
  "https://embed.music.apple.com/gb/album/djanfa/56371957?i=56371726&app=music",
  "https://embed.music.apple.com/gb/album/the-humming/1045960992?i=1045961469&app=music",
  "https://embed.music.apple.com/gb/album/i-found-you/499856834?i=499856911&app=music",
  "https://embed.music.apple.com/gb/album/forrest-gump/1440760117?i=1440761214&app=music",
  "https://embed.music.apple.com/gb/album/if-the-creek-dont-rise/382443168?i=382443356&app=music",
  "https://embed.music.apple.com/gb/album/aint-too-good-at-losing/382443168?i=382443406&app=music",
  "https://embed.music.apple.com/gb/album/isizathu/706454338?i=706454350&app=music",
  "https://embed.music.apple.com/gb/album/umlilo/706454338?i=706454351&app=music",
  "https://embed.music.apple.com/gb/album/its-real/464319325?i=464319391&app=music",
  "https://embed.music.apple.com/gb/album/in-bloom/1088518253?i=1088518561&app=music",
  "https://embed.music.apple.com/gb/album/in-my-secret-life/511074815?i=511074817&app=music",
  "https://embed.music.apple.com/gb/album/in-the-hearts-of-men/481274516?i=481274530&app=music",
  "https://embed.music.apple.com/gb/album/joke/951967954?i=951967972&app=music",
  "https://embed.music.apple.com/gb/album/i-want-to-go-home/367016921?i=367016945&app=music",
  "https://embed.music.apple.com/gb/album/jupiter-4/1436857685?i=1436857872&app=music",
  "https://embed.music.apple.com/gb/album/j%C3%A1-sei-namorar/712241543?i=712242079&app=music",
  "https://embed.music.apple.com/gb/album/ithaca/1442960945?i=1442961908&app=music",
  "https://embed.music.apple.com/gb/album/king-of-sorrow/193532145?i=193532519&app=music",
  "https://embed.music.apple.com/gb/album/kiss-of-life/158796559?i=158796603&app=music",
  "https://embed.music.apple.com/gb/album/the-first-time-ever-i-saw-your-face/355178034?i=355178117&app=music",
  "https://embed.music.apple.com/gb/album/killing-me-softly-with-his-song/355038498?i=355038523&app=music",
  "https://embed.music.apple.com/gb/album/killing-me-softly-with-his-song/267384057?i=267384166&app=music",
  "https://embed.music.apple.com/gb/album/next-time/925970402?i=925970409&app=music",
  "https://embed.music.apple.com/gb/album/keep-on-shining/925970402?i=925970411&app=music",
  "https://embed.music.apple.com/gb/album/kaputt/439117885?i=439117898&app=music",
  "https://embed.music.apple.com/gb/album/le-temps-de-lamour/593265590?i=593265597&app=music",
  "https://embed.music.apple.com/gb/album/lilac-wine/385560474?i=385560478&app=music",
  "https://embed.music.apple.com/us/album/love-mu-adure/176643579?i=176644990&app=music",
  "https://embed.music.apple.com/us/album/sawale/176643579?i=176644589&app=music",
  "https://embed.music.apple.com/us/album/so-ala-temen/176643579?i=176644335&app=music",
  "https://embed.music.apple.com/us/album/love-yo-family/1443696062?i=1443696067&app=music",
  "https://embed.music.apple.com/gb/album/land-of-anaka/366648250?i=366648255&app=music",
  "https://embed.music.apple.com/gb/album/laidu/656679337?i=656679755&app=music",
  "https://embed.music.apple.com/gb/album/sarama/615590251?i=615590589&app=music",
  "https://embed.music.apple.com/gb/album/tu-voles/1059921544?i=1059922303&app=music",
  "https://embed.music.apple.com/gb/album/lapwony-loy-ehrlich-mix/1445052597?i=1445052610&app=music",
  "https://embed.music.apple.com/gb/album/let-it-calm-you-down/1389019798?i=1389019802&app=music",
  "https://embed.music.apple.com/gb/album/long-time-gone/728775523?i=728775730&app=music",
  "https://embed.music.apple.com/gb/album/not-ready-to-make-nice/283636274?i=283636333&app=music",
  "https://embed.music.apple.com/gb/album/like-a-prayer/83448003?i=83445997&app=music",
  "https://embed.music.apple.com/us/album/lai-ku-egiri-medley-1/471993542?i=471993547&app=music",
  "https://embed.music.apple.com/us/album/lai-ku-egiri-medley-2/471993542?i=471993630&app=music",
  "https://embed.music.apple.com/us/album/ore-mi-e-se-pelepele/377162599?i=377163506&app=music",
  "https://embed.music.apple.com/us/album/ore-se-rere/1259965206?i=1259965309&app=music",
  "https://embed.music.apple.com/us/album/ode-to-nso-eledumare/377162599?i=377163481&app=music",
  "https://embed.music.apple.com/us/album/ene-nyame-a-mensuro/424605545?i=424605642&app=music"
];

let peacefulMemesArray = [
  "https://media.giphy.com/media/8ccXcA74ufMBQAR2oq/giphy.gif",
  "https://media.giphy.com/media/9u5SmANtz7zIQ/giphy.gif",
  "https://media.giphy.com/media/XGJ5V47CWeMxibdrIu/giphy.gif",
  "https://media.giphy.com/media/3o7bu6WNUbE2PcCuZi/giphy.gif",
  "https://media.giphy.com/media/3o6wrADVITNhO4u3Sg/giphy.gif",
  "https://media.giphy.com/media/3oKGzC42QlXAnjijHa/giphy.gif",
  "https://media.giphy.com/media/YA6dmVW0gfIw8/giphy.gif",
  "https://media.giphy.com/media/8o39b7m6DyVHi/giphy.gif",
  "https://media.giphy.com/media/A6aHBCFqlE0Rq/giphy.gif",
  "https://media.giphy.com/media/1zgzK9wg3xvKeoFUX8/giphy.gif",
  "https://media.giphy.com/media/3o6ZtjkmdIfSaO6uEE/giphy.gif",
  "https://media.giphy.com/media/fdlcvptCs4qsM/giphy.gif",
  "https://media.giphy.com/media/yvLgbrii0xnLpG1TT2/giphy.gif",
  "https://media.giphy.com/media/Ul16jlcdV1B04/giphy.gif",
  "https://media.giphy.com/media/LT9jgeNszBzI4/giphy.gif",
  "https://media.giphy.com/media/nTVsJYBOVs8tG/giphy.gif",
  "https://media.giphy.com/media/4YWtPeEME4Lz2feppl/giphy.gif",
  "https://media.giphy.com/media/dZCHzoHU662BOD4W0G/giphy.gif",
  "https://media.giphy.com/media/dUs22roF3TZ1uJKSUW/giphy.gif",
  "https://media.giphy.com/media/IhD0s2ryLXW9V6k6DX/giphy.gif"
];

let peacefulMemesCount = peacefulMemesArray.length;
let randPeacefulMemesIndex = Math.floor(peacefulMemesCount * Math.random());

let peacefulQuotesCount = peacefulQuotesArray.length;
let randPeacefulQuotesIndex = Math.floor(peacefulQuotesCount * Math.random());

let peacefulTunesCount = peacefulTunesArray.length;
let randPeacefulTunesIndex = Math.floor(peacefulTunesCount * Math.random());

function checkPeaceful() {
  let formInput = document.getElementById("mood-entry").value.trim();

  let peacefulTheme = {
    colour: "blue",
    dark: "#0D4FB1",
    medium: "rgba(95, 144, 189, 0.87)",
    light: "#BED8EC",
    hoverLight: "rgb(232, 245, 255)",
    emoji: "😌"
  };

  if (peacefulWordsArray.includes(formInput)) {
    document.getElementById("meme").src =
      peacefulMemesArray[randPeacefulMemesIndex];
    document.getElementById("quote").innerHTML =
      peacefulQuotesArray[randPeacefulQuotesIndex];
    document.getElementById("tune").src =
      peacefulTunesArray[randPeacefulTunesIndex];

    document.getElementsByClassName("light-bg")[0].style.backgroundColor =
      peacefulTheme.light;
    document.getElementsByClassName("hoverLight-bg")[0].style.backgroundColor =
      peacefulTheme.hoverLight;
    document.getElementsByClassName("hoverLight-bg")[1].style.backgroundColor =
      peacefulTheme.hoverLight;
    document.getElementsByClassName("hoverLight-bg")[2].style.backgroundColor =
      peacefulTheme.hoverLight;
    document.getElementsByClassName("light-cl")[0].style.color =
      peacefulTheme.light;

    document.getElementsByClassName("medium-bg")[0].style.backgroundColor =
      peacefulTheme.medium;
    document.getElementsByClassName("medium-bg")[1].style.backgroundColor =
      peacefulTheme.medium;
    document.getElementsByClassName("medium-bg")[2].style.backgroundColor =
      peacefulTheme.medium;
    document.getElementsByClassName("medium-cl")[0].style.color =
      peacefulTheme.medium;
    document.getElementsByClassName("medium-cl")[1].style.color =
      peacefulTheme.medium;
    document.getElementsByClassName("medium-cl")[2].style.color =
      peacefulTheme.medium;

    document.getElementsByClassName("dark-bg")[0].style.backgroundColor =
      peacefulTheme.dark;
    document.getElementsByClassName("dark-br")[0].style.borderColor =
      peacefulTheme.dark;
    document.getElementsByClassName("dark-br")[1].style.borderColor =
      peacefulTheme.dark;
    document.getElementsByClassName("dark-br")[2].style.borderColor =
      peacefulTheme.dark;
    document.getElementsByClassName("dark-br")[3].style.borderColor =
      peacefulTheme.dark;
    document.getElementsByClassName("dark-br")[4].style.borderColor =
      peacefulTheme.dark;
    document.getElementsByClassName("dark-br")[5].style.borderColor =
      peacefulTheme.dark;
    document.getElementsByClassName("dark-br")[6].style.borderColor =
      peacefulTheme.dark;
    document.getElementsByClassName("dark-br")[7].style.borderColor =
      peacefulTheme.dark;
    document.getElementsByClassName("dark-br")[8].style.borderColor =
      peacefulTheme.dark;
    document.getElementsByClassName("dark-br")[9].style.borderColor =
      peacefulTheme.dark;
    document.getElementsByClassName("dark-br")[10].style.borderColor =
      peacefulTheme.dark;
    document.getElementsByClassName("dark-cl")[0].style.color =
      peacefulTheme.dark;
    document.getElementsByClassName("dark-cl")[1].style.color =
      peacefulTheme.dark;

    document.querySelectorAll(".medium-bg-hover")[0].onmouseover = function() {
      document.querySelectorAll(".medium-bg-hover")[0].style.backgroundColor =
        peacefulTheme.light;
    };
    document.querySelectorAll(".light-bg-hover")[0].onmouseover = function() {
      document.querySelectorAll(".light-bg-hover")[0].style.backgroundColor =
        peacefulTheme.light;
    };
    document.querySelectorAll(".light-bg-hover")[1].onmouseover = function() {
      document.querySelectorAll(".light-bg-hover")[1].style.backgroundColor =
        peacefulTheme.light;
    };
    document.querySelectorAll(".light-bg-hover")[2].onmouseover = function() {
      document.querySelectorAll(".light-bg-hover")[2].style.backgroundColor =
        peacefulTheme.light;
    };

    document.querySelectorAll(".medium-bg-hover")[0].onmouseout = function() {
      document.querySelectorAll(".medium-bg-hover")[0].style.backgroundColor =
        peacefulTheme.hoverLight;
    };
    document.querySelectorAll(".light-bg-hover")[0].onmouseout = function() {
      document.querySelectorAll(".light-bg-hover")[0].style.backgroundColor =
        peacefulTheme.hoverLight;
    };
    document.querySelectorAll(".light-bg-hover")[1].onmouseout = function() {
      document.querySelectorAll(".light-bg-hover")[1].style.backgroundColor =
        peacefulTheme.hoverLight;
    };
    document.querySelectorAll(".light-bg-hover")[2].onmouseout = function() {
      document.querySelectorAll(".light-bg-hover")[2].style.backgroundColor =
        peacefulTheme.hoverLight;
    };
  }
}

function playEskelebe() {
  let eskelebe = document.getElementById("eskelebe");
  eskelebe.play();
}

function checkAllEmotions() {
  let formInput = document.getElementById("mood-entry").value.trim();

  //* Hides output page if inputted word is not in any array; Displays alert as well. Also Plays Eskelebe
  if (
    !angryWordsArray.includes(formInput) &&
    !happyWordsArray.includes(formInput) &&
    !fearfulWordsArray.includes(formInput) &&
    !peacefulWordsArray.includes(formInput)
  ) {
    document.getElementById("form-page").style.display = "block";
    document.getElementById("output-page").style.display = "none";

    document.getElementById("banner").style.display = "block";
    // *Hides alert after 10 seconds
    setTimeout(function() {
      document.getElementById("banner").style.display = "none";
    }, 13000);

    let formBody = document.getElementById("form-page-body");
    formBody.classList.add("blur-form-page-body");

    setTimeout(function() {
      formBody.classList.remove("blur-form-page-body");
    }, 4000);

    playEskelebe();
  }
}
