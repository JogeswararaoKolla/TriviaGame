
$(document).ready(function () {

    let unansCount = 0;
    let ansCount = 0;
    let wrongCount = 0;
    let triviaQues = [];
    function gameStartModule() {

        triviaQues = [{
            question: "In what state was Barack Obama born in?",
            answeroptions: ["Hawaii", "Mexico", "Phoenix"],
            answer: "Hawaii"
        }, {
            question: "In 1893, which country became the first to give women the right to vote?",
            answeroptions: ["UnitedStates", "India", "SouthAfrica", "New Zealand"],
            answer: "New Zealand"
        },
        {
            question: "What year was the two dollar bill last printed in the United States?",
            answeroptions: ["2003", "2010", "2014", "2019", "2013"],
            answer: "2003"

        }, {
            question: "What U.S. holiday was first observed under it's current name on November 11th, 1954?",
            answeroptions: ["Veterans day", "President's day", "Father's Day"],
            answer: "Veterans day"
        },
        {
            question: "Name the First president of the United States of America?",
            answeroptions: ["John Adams", "George Washington", "Abraham Lincoln", "Thomas Jefferson"],
            answer: "George Washington"

        }];

        $("#Answers").hide();

        for (let j = 0; j < triviaQues.length; j++) {
            let triviaQuesObj = {};
            triviaQuesObj = triviaQues[j];
            // const targetDiv = $("<div>");
            // const quesObjp = $("<p>").text(triviaQuesObj.question);
            // targetDiv.append(quesObjp);
            $("#Questions").append($("<div>").append($("<p>").text(triviaQuesObj.question)));
            for (let i = 0; i < triviaQuesObj.answeroptions.length; i++) {
                const quesObjInput = $("<input type='radio'>");
                const quesObjInputSpan = $("<span>");
                quesObjInput.attr('name', 'answers_' + j);
                quesObjInput.val(triviaQuesObj.answeroptions[i]);
                quesObjInputSpan.text(triviaQuesObj.answeroptions[i]);
                $("#Questions").append(quesObjInput);
                $("#Questions").append(quesObjInputSpan);
            }

        }

        // creates done button at the end of the page.
        $("#Questions").append("<br>", "<br>", $("<input type='button'>").attr({
            value: "Done",
            id: 'btnGetValue'
        }
        ));

    }

    let timerSec = 40;
    let intervalID;

    $("#timersecDiv").text(timerSec);

    gameStartModule();

    intervalID = setInterval(timerSecSet, 1000);

    function timerSecSet() {
        if (timerSec == 0) {
            checkEndofGame();
            return console.log("timeUp");
        }
        timerSec--;
        $("#timersecDiv").text(timerSec);
    }

    $("#btnGetValue").click(function () {
        checkEndofGame();
    });

    function checkEndofGame() {
        clearInterval(intervalID);
        for (let j = 0; j < triviaQues.length; j++) {
            const inputElement = $(":input[name=answers_" + j + "]:checked");

            if (inputElement.prop("checked")) {
                console.log(inputElement.attr('name') + ";" + inputElement.prop("checked"));
                if (inputElement.val() == triviaQues[j].answer) {
                    ansCount++;
                }
                else {
                    wrongCount++;
                }
                console.log(inputElement.val());
                console.log(triviaQues[j].answer);
            }
            else {
                console.log("not defined else logic");
                unansCount++;
            }

        }
        console.log(unansCount, wrongCount, ansCount);
        $("#Container").hide();
        $("#Answers").show();
        $("#ansCount").text(ansCount);
        $("#wrongCount").text(wrongCount);
        $("#unansCount").text(unansCount);
    }
});