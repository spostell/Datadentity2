

caption1 = "Hmm... we have completed our analysis and from the looks of it: <br>\
Seeing plenty of high-volume of bulk, aggressive unsolicited replies that you send on a daily basis. You must be an aggressive tweeter who inserts your opinions when they were never asked for. You're subscribed to 20+ fitness channels? Please tell me you're not one of those people who lives in the gym and inhales more protein powder than actual food. Oh, and nice pair of pink flower beach shorts you got there in your list of Amazon purchased items...if you're trying to repel women who have any sense of taste.<br> \
Analysis complete.<br> \
See below for an avatar that represents your most recent online activities and habits.";
caption2 = "Hmm... we have completed our analysis and from the looks of it: <br>\
You spend time on Animal Crossing to an uncomfortable extent, and no, watching anime does not make you any less of a whiz. Do you even have a life outside of your bedroom walls? Probably not, seeing as you are an engineering student whose search history only consists of math problems and aerothermodynamics, blech.<br> \
Analysis complete.<br> \
See below for an avatar that represents your most recent online activities and habits.";
caption3 = "Hmm... we have completed our analysis and from the looks of it: <br>\
You've been listening to a lot of heavy metal lately. Like... a LOT. You ok? Your obsession with Starbucks also can't be healthy. But alright, you're out here educating yourself on animal rights and protection. Although, there are already enough people like you who are spamming the internet with pictures of dogs and cats. <br>\
Analysis complete.<br> \
See below for an avatar that represents your most recent online activities and habits.";

var captions = new Array(caption1, caption2, caption3);

var pics = new Array("birdimage.png", "dogimage.png", "pandaimage.png");

var rnd = Math.floor(Math.random() * pics.length);

// randomly chooses one of three avatar images to simulate the generate avatar feature
function chooseImage() {
    document.getElementById("avatar").style.display='block';
    document.getElementById("avatar").src = pics[rnd];
    showCaption();
    disableButton();

}

// disables the generate button after one click
function disableButton() {
    var element = document.getElementById("generatebutton");
    element.onclick = "";
}

// shows the caption that accompanies the randomly chosen image
function showCaption() {
    document.getElementById("caption").innerHTML = captions[rnd];

}
