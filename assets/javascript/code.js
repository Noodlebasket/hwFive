$("#start").on('click', function() {
    game.start();
})

$(document).on('click','#end',function() {
    game.done();
})

var questions =[
    {
    question:"Where is London?",
    answers:["England", "Ireland", "Australia", "Greenland"],
    correctAnswer: "England"
}, {
    question:"Where is Bruges?",
    answers:["Belgium", "France", "Scotland", "Morocco"],
    correctAnswer: "Belgium"
}, {
    question:"Where is Warsaw?",
    answers:["Ukraine", "Poland", "Germany", "Russia"],
    correctAnswer: "Poland"
}, {
    question:"Where is Sydney?",
    answers:["New Zealand", "Morocco", "Cuba", "Australia"],
    correctAnswer: "Australia"
}, {
    question:"Where is Montreal?",
    answers:["France", "Canada", "Haiti", "America"],
    correctAnswer: "Canada"
}, {
    question:"Where is Jerusalem?",
    answers:["Saudi Arabia", "Egypt", "Pakistan", "Israel"],
    correctAnswer: "Israel"
}, {
    question:"Where is Hong Kong?",
    answers:["China", "Malaysia", "Japan", "India"],
    correctAnswer: "China"
}, {
    question:"Where is Rio De Jainero?",
    answers:["Argentina", "Brazil", "Nicaragua", "Chile"],
    correctAnswer: "Brazil"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function() {
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0) {
            console.log("Out of time");
            game.done();
        }
    },
    start: function() {
        timer = setInterval(game.countdown,1000);
        $('#subWrapper').prepend("<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2>");
        console.log("Clicked Start");
        $("#start").remove();
        for(var i=0; i<questions.length; i++) {
            $('#subWrapper').append('<h2>'+questions[i].question+'</h2>');
            for(var j=0; j<questions[i].answers.length;j++) {
                $('#subWrapper').append("<input type='radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]);
            }
        }
        $('#subWrapper').append("<br><button id='end'>DONE</button>");
    },
    done: function() {
        $.each($("input[name='question-0']:checked"),function() {
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"),function() {
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"),function() {
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"),function() {
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"),function() {
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"),function() {
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']:checked"),function() {
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']:checked"),function() {
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
        },

        result: function() {
            clearInterval(timer);
            $("#subWrapper h2").remove();
            $("#subWrapper").html("<h2>All Done!</h2>");
            $("#subWrapper").append("<h3>Correct Answers: "+this.correct+"</h3>");
            $("#subWrapper").append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
            $("#subWrapper").append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
        }
};