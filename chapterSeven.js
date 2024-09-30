import { updateChapter } from "./helpers.js";

export function runChapterSeven(place = "begin") {
    $("#Chapter").text("Chapter VII. A Mad Tea Party");
    $("#Footer").html("<a href='#'>Return to Start</a>");
    updateChapter(place);
};



