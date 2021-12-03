import React, { useEffect, useState } from "react";
import '../StoryQuiz.css';
import '../../Story.css'
import '../../component/Quiz.css'
import '../../data/targetwords.json'

function RedHenStoryQuiz() {

    const questions = [{ "questionText": "live things that move around, eat, sleep, and have babies", "answerOptions": [{ "answerText": "animals", "isCorrect": true }, { "answerText": "angel-food", "isCorrect": false }, { "answerText": "alfalfa", "isCorrect": false }], "audioPath": "../audio/animals.mp3" }, { "questionText": "put in a hot oven to cook so you can eat it later", "answerOptions": [{ "answerText": "been", "isCorrect": false }, { "answerText": "balloon", "isCorrect": false }, { "answerText": "bake", "isCorrect": true }], "audioPath": "../audio/bake.mp3" }, { "questionText": "something stiff to carry things in, usually with a handle", "answerOptions": [{ "answerText": "bedspread", "isCorrect": false }, { "answerText": "basket", "isCorrect": true }, { "answerText": "beat", "isCorrect": false }], "audioPath": "../audio/basket.mp3" }, { "questionText": "very pretty, very nice to see", "answerOptions": [{ "answerText": "back", "isCorrect": false }, { "answerText": "beautiful", "isCorrect": true }, { "answerText": "bottom", "isCorrect": false }], "audioPath": "../audio/beautiful.mp3" }, { "questionText": "to think something is true", "answerOptions": [{ "answerText": "branch", "isCorrect": false }, { "answerText": "beautiful", "isCorrect": false }, { "answerText": "believe", "isCorrect": true }], "audioPath": "../audio/believe.mp3" }, { "questionText": "more than good, nicer", "answerOptions": [{ "answerText": "buttercup", "isCorrect": false }, { "answerText": "better", "isCorrect": true }, { "answerText": "basement", "isCorrect": false }], "audioPath": "../audio/better.mp3" }, { "questionText": "food like the outside part of a sandwich", "answerOptions": [{ "answerText": "bread", "isCorrect": true }, { "answerText": "bat", "isCorrect": false }, { "answerText": "bong-tree", "isCorrect": false }], "audioPath": "../audio/bread.mp3" }, { "questionText": "a grown-up kitten", "answerOptions": [{ "answerText": "cottage-door", "isCorrect": false }, { "answerText": "cat", "isCorrect": true }, { "answerText": "cools", "isCorrect": false }], "audioPath": "../audio/cat.mp3" }, { "questionText": "a hue like red or green or blue or yellow", "answerOptions": [{ "answerText": "car", "isCorrect": false }, { "answerText": "color", "isCorrect": true }, { "answerText": "chamomile", "isCorrect": false }], "audioPath": "../audio/color.mp3" }, { "questionText": "taste very good", "answerOptions": [{ "answerText": "delicious", "isCorrect": true }, { "answerText": "draw", "isCorrect": false }, { "answerText": "does", "isCorrect": false }], "audioPath": "../audio/delicious.mp3" }, { "questionText": "a grown-up puppy", "answerOptions": [{ "answerText": "dog", "isCorrect": true }, { "answerText": "drag", "isCorrect": false }, { "answerText": "dream", "isCorrect": false }], "audioPath": "../audio/dog.mp3" }, { "questionText": "a bird that says quack and has flat feet to paddle in the water", "answerOptions": [{ "answerText": "driver", "isCorrect": false }, { "answerText": "duck", "isCorrect": true }, { "answerText": "delicious", "isCorrect": false }], "audioPath": "../audio/duck.mp3" }, { "questionText": "a place inside a fence where animals can walk around", "answerOptions": [{ "answerText": "farmyard", "isCorrect": true }, { "answerText": "frame", "isCorrect": false }, { "answerText": "fancied", "isCorrect": false }], "audioPath": "../audio/farmyard.mp3" }, { "questionText": "big in size", "answerOptions": [{ "answerText": "fluffy", "isCorrect": false }, { "answerText": "fur", "isCorrect": false }, { "answerText": "fat", "isCorrect": true }], "audioPath": "../audio/fat.mp3" }, { "questionText": "good, nice", "answerOptions": [{ "answerText": "foot", "isCorrect": false }, { "answerText": "flower", "isCorrect": false }, { "answerText": "fine", "isCorrect": true }], "audioPath": "../audio/fine.mp3" }, { "questionText": "before any other", "answerOptions": [{ "answerText": "first", "isCorrect": true }, { "answerText": "fond", "isCorrect": false }, { "answerText": "fall", "isCorrect": false }], "audioPath": "../audio/first.mp3" }, { "questionText": "dusty stuff made of tiny bits of seed that people cook to make bread", "answerOptions": [{ "answerText": "fleece", "isCorrect": false }, { "answerText": "flea-bitten", "isCorrect": false }, { "answerText": "flour", "isCorrect": true }], "audioPath": "../audio/flour.mp3" }, { "questionText": "what people and animals eat", "answerOptions": [{ "answerText": "forbidden", "isCorrect": false }, { "answerText": "food", "isCorrect": true }, { "answerText": "fire", "isCorrect": false }], "audioPath": "../audio/food.mp3" }, { "questionText": "not empty at all", "answerOptions": [{ "answerText": "full", "isCorrect": true }, { "answerText": "fond", "isCorrect": false }, { "answerText": "feel", "isCorrect": false }], "audioPath": "../audio/full.mp3" }, { "questionText": "brought together, collected", "answerOptions": [{ "answerText": "gathered", "isCorrect": true }, { "answerText": "gun", "isCorrect": false }, { "answerText": "gruff", "isCorrect": false }], "audioPath": "../audio/gathered.mp3" }, { "questionText": "big birds that say \u00e2\u20ac\u02dchonk' and have flat feet to paddle in the water", "answerOptions": [{ "answerText": "geese", "isCorrect": true }, { "answerText": "grab", "isCorrect": false }, { "answerText": "gray", "isCorrect": false }], "audioPath": "../audio/geese.mp3" }, { "questionText": "colored yellow with a little red or orange", "answerOptions": [{ "answerText": "give", "isCorrect": false }, { "answerText": "golden", "isCorrect": true }, { "answerText": "girl", "isCorrect": false }], "audioPath": "../audio/golden.mp3" }, { "questionText": "seed that people can plant in the ground or cook to eat", "answerOptions": [{ "answerText": "grain", "isCorrect": true }, { "answerText": "glittering", "isCorrect": false }, { "answerText": "giraffe", "isCorrect": false }], "audioPath": "../audio/grain.mp3" }, { "questionText": "seed that people can plant in the ground or cook to eat", "answerOptions": [{ "answerText": "grains", "isCorrect": true }, { "answerText": "get-set", "isCorrect": false }, { "answerText": "gotcha", "isCorrect": false }], "audioPath": "../audio/grains.mp3" }, { "questionText": "the color of most grass and leaves", "answerOptions": [{ "answerText": "game", "isCorrect": false }, { "answerText": "grass", "isCorrect": false }, { "answerText": "green", "isCorrect": true }], "audioPath": "../audio/green.mp3" }, { "questionText": "got bigger", "answerOptions": [{ "answerText": "grew", "isCorrect": true }, { "answerText": "give", "isCorrect": false }, { "answerText": "gingerbread", "isCorrect": false }], "audioPath": "../audio/grew.mp3" }, { "questionText": "dirt that grass can grow on", "answerOptions": [{ "answerText": "gone", "isCorrect": false }, { "answerText": "ground", "isCorrect": true }, { "answerText": "gentle", "isCorrect": false }], "audioPath": "../audio/ground.mp3" }, { "questionText": "get bigger", "answerOptions": [{ "answerText": "grow", "isCorrect": true }, { "answerText": "gave", "isCorrect": false }, { "answerText": "green", "isCorrect": false }], "audioPath": "../audio/grow.mp3" }, { "questionText": "if you saw someone do \u00e2\u20ac\u02dcit', then \u00e2\u20ac\u02dcit' did this", "answerOptions": [{ "answerText": "happened", "isCorrect": true }, { "answerText": "heel", "isCorrect": false }, { "answerText": "hug", "isCorrect": false }], "audioPath": "../audio/happened.mp3" }, { "questionText": "getting all the growing foods to eat them later", "answerOptions": [{ "answerText": "hunt", "isCorrect": false }, { "answerText": "harvest", "isCorrect": true }, { "answerText": "hall", "isCorrect": false }], "audioPath": "../audio/harvest.mp3" }, { "questionText": "a girl chicken that lays eggs", "answerOptions": [{ "answerText": "hen", "isCorrect": true }, { "answerText": "house", "isCorrect": false }, { "answerText": "hang", "isCorrect": false }], "audioPath": "../audio/hen.mp3" }, { "questionText": "try not to be seen or found", "answerOptions": [{ "answerText": "help", "isCorrect": false }, { "answerText": "hairy", "isCorrect": false }, { "answerText": "hide", "isCorrect": true }], "audioPath": "../audio/hide.mp3" }, { "questionText": "I would", "answerOptions": [{ "answerText": "I", "isCorrect": false }, { "answerText": "Ichabod", "isCorrect": false }, { "answerText": "I'd", "isCorrect": true }], "audioPath": "../audio/I'd.mp3" }, { "questionText": "I will", "answerOptions": [{ "answerText": "I'll", "isCorrect": true }, { "answerText": "Ichabod", "isCorrect": false }, { "answerText": "I\u00d5m", "isCorrect": false }], "audioPath": "../audio/I'll.mp3" }, { "questionText": "I am", "answerOptions": [{ "answerText": "I'm", "isCorrect": true }, { "answerText": "I\u00d5d", "isCorrect": false }, { "answerText": "I", "isCorrect": false }], "audioPath": "../audio/I'm.mp3" }, { "questionText": "a thought or plan someone thinks", "answerOptions": [{ "answerText": "interest", "isCorrect": false }, { "answerText": "idea", "isCorrect": true }, { "answerText": "icing", "isCorrect": false }], "audioPath": "../audio/idea.mp3" }, { "questionText": "it is", "answerOptions": [{ "answerText": "it's", "isCorrect": true }, { "answerText": "inch", "isCorrect": false }, { "answerText": "imagine", "isCorrect": false }], "audioPath": "../audio/it's.mp3" }, { "questionText": "very big", "answerOptions": [{ "answerText": "large", "isCorrect": true }, { "answerText": "lion", "isCorrect": false }, { "answerText": "listen", "isCorrect": false }], "audioPath": "../audio/large.mp3" }, { "questionText": "cut into pieces, mostly same size pieces", "answerOptions": [{ "answerText": "shed", "isCorrect": false }, { "answerText": "set", "isCorrect": false }, { "answerText": "sliced", "isCorrect": true }], "audioPath": "../audio/sliced.mp3" }, { "questionText": "one whole long piece of bread", "answerOptions": [{ "answerText": "live or live", "isCorrect": false }, { "answerText": "loaf", "isCorrect": true }, { "answerText": "lion", "isCorrect": false }], "audioPath": "../audio/loaf.mp3" }, { "questionText": "more than a few", "answerOptions": [{ "answerText": "mash", "isCorrect": false }, { "answerText": "many", "isCorrect": true }, { "answerText": "must", "isCorrect": false }], "audioPath": "../audio/many.mp3" }, { "questionText": "a tall machine building that crushes seeds into dusty flour", "answerOptions": [{ "answerText": "madam", "isCorrect": false }, { "answerText": "mist", "isCorrect": false }, { "answerText": "mill", "isCorrect": true }], "audioPath": "../audio/mill.mp3" }, { "questionText": "between some--and most or too much", "answerOptions": [{ "answerText": "merrily", "isCorrect": false }, { "answerText": "messenger", "isCorrect": false }, { "answerText": "more", "isCorrect": true }], "audioPath": "../audio/more.mp3" }, { "questionText": "a small animal with a long tail that hides from cats", "answerOptions": [{ "answerText": "mark", "isCorrect": false }, { "answerText": "madam", "isCorrect": false }, { "answerText": "mouse", "isCorrect": true }], "audioPath": "../audio/mouse.mp3" }, { "questionText": "me", "answerOptions": [{ "answerText": "mark", "isCorrect": false }, { "answerText": "myself", "isCorrect": true }, { "answerText": "mouthful", "isCorrect": false }], "audioPath": "../audio/myself.mp3" }, { "questionText": "a short sleep", "answerOptions": [{ "answerText": "nap", "isCorrect": true }, { "answerText": "nest", "isCorrect": false }, { "answerText": "nightgown", "isCorrect": false }], "audioPath": "../audio/nap.mp3" }, { "questionText": "different", "answerOptions": [{ "answerText": "other", "isCorrect": true }, { "answerText": "onion", "isCorrect": false }, { "answerText": "over", "isCorrect": false }], "audioPath": "../audio/other.mp3" }, { "questionText": "a hot place to put food to cook or bake", "answerOptions": [{ "answerText": "over", "isCorrect": false }, { "answerText": "overhear", "isCorrect": false }, { "answerText": "oven", "isCorrect": true }], "audioPath": "../audio/oven.mp3" }, { "questionText": "part", "answerOptions": [{ "answerText": "part", "isCorrect": false }, { "answerText": "pass", "isCorrect": false }, { "answerText": "piece", "isCorrect": true }], "audioPath": "../audio/piece.mp3" }, { "questionText": "to put a seed in the ground to grow", "answerOptions": [{ "answerText": "pay", "isCorrect": false }, { "answerText": "plant", "isCorrect": true }, { "answerText": "pink", "isCorrect": false }], "audioPath": "../audio/plant.mp3" }, { "questionText": "bigger than a puddle, smaller than a lake", "answerOptions": [{ "answerText": "palm", "isCorrect": false }, { "answerText": "pond", "isCorrect": true }, { "answerText": "plain", "isCorrect": false }], "audioPath": "../audio/pond.mp3" }, { "questionText": "like a big mouse, sometimes as big as a grown-up's shoe", "answerOptions": [{ "answerText": "rake", "isCorrect": false }, { "answerText": "realize", "isCorrect": false }, { "answerText": "rat", "isCorrect": true }], "audioPath": "../audio/rat.mp3" }, { "questionText": "prefer or choose or want instead of something else", "answerOptions": [{ "answerText": "rather", "isCorrect": true }, { "answerText": "roundhouse", "isCorrect": false }, { "answerText": "riding-hood", "isCorrect": false }], "audioPath": "../audio/rather.mp3" }, { "questionText": "rubbing with something like sticks or fingers", "answerOptions": [{ "answerText": "scratching", "isCorrect": true }, { "answerText": "seem", "isCorrect": false }, { "answerText": "short-legged", "isCorrect": false }], "audioPath": "../audio/scratching.mp3" }, { "questionText": "try to find", "answerOptions": [{ "answerText": "strength", "isCorrect": false }, { "answerText": "seek", "isCorrect": true }, { "answerText": "short-legged", "isCorrect": false }], "audioPath": "../audio/seek.mp3" }, { "questionText": "helped someone see something", "answerOptions": [{ "answerText": "showed", "isCorrect": true }, { "answerText": "small", "isCorrect": false }, { "answerText": "sleep-over", "isCorrect": false }], "audioPath": "../audio/showed.mp3" }, { "questionText": "ready to go to sleep", "answerOptions": [{ "answerText": "ship", "isCorrect": false }, { "answerText": "sleepy", "isCorrect": true }, { "answerText": "sing", "isCorrect": false }], "audioPath": "../audio/sleepy.mp3" }, { "questionText": "noticed something because of air in the nose", "answerOptions": [{ "answerText": "smelled", "isCorrect": true }, { "answerText": "scooter", "isCorrect": false }, { "answerText": "sink", "isCorrect": false }], "audioPath": "../audio/smelled.mp3" }, { "questionText": "without any bumps or scratches", "answerOptions": [{ "answerText": "smooth", "isCorrect": true }, { "answerText": "smart", "isCorrect": false }, { "answerText": "sore", "isCorrect": false }], "audioPath": "../audio/smooth.mp3" }, { "questionText": "brown, white, and gray or black birds about the size of your whole hand", "answerOptions": [{ "answerText": "sparrows", "isCorrect": true }, { "answerText": "shave", "isCorrect": false }, { "answerText": "steam", "isCorrect": false }], "audioPath": "../audio/sparrows.mp3" }, { "questionText": "make water bounce up", "answerOptions": [{ "answerText": "splash", "isCorrect": true }, { "answerText": "scarcely", "isCorrect": false }, { "answerText": "skinned", "isCorrect": false }], "audioPath": "../audio/splash.mp3" }, { "questionText": "follow quietly and try to catch", "answerOptions": [{ "answerText": "shiny", "isCorrect": false }, { "answerText": "stalk", "isCorrect": true }, { "answerText": "soup", "isCorrect": false }], "audioPath": "../audio/stalk.mp3" }, { "questionText": "moving around in water without touching the bottom or side", "answerOptions": [{ "answerText": "swimming", "isCorrect": true }, { "answerText": "swim", "isCorrect": false }, { "answerText": "stream", "isCorrect": false }], "audioPath": "../audio/swimming.mp3" }, { "questionText": "swimming things about the size of your fingernail that grow up to be frogs", "answerOptions": [{ "answerText": "tadpoles", "isCorrect": true }, { "answerText": "top", "isCorrect": false }, { "answerText": "tattered", "isCorrect": false }], "audioPath": "../audio/tadpoles.mp3" }, { "questionText": "to touch someone and run before they can touch you back", "answerOptions": [{ "answerText": "tore", "isCorrect": false }, { "answerText": "tag", "isCorrect": true }, { "answerText": "their", "isCorrect": false }], "audioPath": "../audio/tag.mp3" }, { "questionText": "high", "answerOptions": [{ "answerText": "tonight", "isCorrect": false }, { "answerText": "together", "isCorrect": false }, { "answerText": "tall", "isCorrect": true }], "audioPath": "../audio/tall.mp3" }, { "questionText": "to bother someone in play", "answerOptions": [{ "answerText": "tease", "isCorrect": true }, { "answerText": "thumb", "isCorrect": false }, { "answerText": "tire", "isCorrect": false }], "audioPath": "../audio/tease.mp3" }, { "questionText": "after you think something, then you have had one", "answerOptions": [{ "answerText": "terrible", "isCorrect": false }, { "answerText": "town", "isCorrect": false }, { "answerText": "thought", "isCorrect": true }], "audioPath": "../audio/thought.mp3" }, { "questionText": "a way to tell when", "answerOptions": [{ "answerText": "throne", "isCorrect": false }, { "answerText": "time", "isCorrect": true }, { "answerText": "them", "isCorrect": false }], "audioPath": "../audio/time.mp3" }, { "questionText": "the highest place", "answerOptions": [{ "answerText": "tip-top", "isCorrect": true }, { "answerText": "teeth", "isCorrect": false }, { "answerText": "these", "isCorrect": false }], "audioPath": "../audio/tip-top.mp3" }, { "questionText": "moved around", "answerOptions": [{ "answerText": "think", "isCorrect": false }, { "answerText": "tremble", "isCorrect": false }, { "answerText": "turned", "isCorrect": true }], "audioPath": "../audio/turned.mp3" }, { "questionText": "\u00e2\u20ac\u02dcOnce upon a time' means a pretend story is beginning", "answerOptions": [{ "answerText": "uniforms", "isCorrect": false }, { "answerText": "upon", "isCorrect": true }, { "answerText": "uneasy", "isCorrect": false }], "audioPath": "../audio/upon.mp3" }, { "questionText": "a lot", "answerOptions": [{ "answerText": "very", "isCorrect": true }, { "answerText": "volcano", "isCorrect": false }, { "answerText": "villagers", "isCorrect": false }], "audioPath": "../audio/very.mp3" }, { "questionText": "less than hot", "answerOptions": [{ "answerText": "warm", "isCorrect": true }, { "answerText": "woke", "isCorrect": false }, { "answerText": "we\u00d5ll", "isCorrect": false }], "audioPath": "../audio/warm.mp3" }, { "questionText": "a tall grass that grows seeds people use to make bread", "answerOptions": [{ "answerText": "wait", "isCorrect": false }, { "answerText": "wheat", "isCorrect": true }, { "answerText": "wheelbarrow", "isCorrect": false }], "audioPath": "../audio/wheat.mp3" }, { "questionText": "at the same time as", "answerOptions": [{ "answerText": "wolf", "isCorrect": false }, { "answerText": "while", "isCorrect": true }, { "answerText": "wet", "isCorrect": false }], "audioPath": "../audio/while.mp3" }, { "questionText": "really well, very much in a very good way", "answerOptions": [{ "answerText": "wonderfully", "isCorrect": true }, { "answerText": "wave", "isCorrect": false }, { "answerText": "whip", "isCorrect": false }], "audioPath": "../audio/wonderfully.mp3" }, { "questionText": "something might happen or might not happen", "answerOptions": [{ "answerText": "warm", "isCorrect": false }, { "answerText": "would", "isCorrect": true }, { "answerText": "who", "isCorrect": false }], "audioPath": "../audio/would.mp3" }]


    const [showScore, setShowScore] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const handleAnsBTNClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1);
        }

        const nextQ = currentQuestion + 1;
        if (nextQ < questions.length) {
            setCurrentQuestion(nextQ);
        } else {
            setShowScore(true);
        }
    }
    return (
        <div>
            <div className="nav">
                <div className="back-to-bookshelf">
                    <a href="/RedHen">
                        <div className="arrow" />
                    </a>
                    <a href="/RedHen">
                        <p>BACK TO STORY</p>
                    </a>
                </div>
                <div className="bookshelf_container_header_menu_container">
                    <div className="bookshelf_container_header_menu_container_img">
                    </div>
                    <div className="bookshelf_container_header_menu_container_info">
                        <p>
                            Elijah White <br /> 26💰 12⭐
                        </p>
                    </div>
                </div>
            </div>
            <div className="questionWrapper">
                <div className="holder">
                    {
                        showScore ? (
                            <div className="scoreSection">
                                <p className="score">You scored {score} out of {questions.length} </p>
                            </div>
                        ) : (
                            <>

                                <div className="questionSection">
                                    <div className="counter">
                                        <span className="questionNum">Question {currentQuestion + 1} / {questions.length}</span>
                                    </div>
                                    <audio id="story" controls autoPlay controlslist="nodownload noplaybackrate noremoteplayback">
                                        <source src={questions[currentQuestion].audioPath} type="audio/mp3" />
                                    </audio>
                                    <div className="questionText">{questions[currentQuestion].questionText}</div>
                                </div>
                                <div className="answerSection">
                                    {questions[currentQuestion].answerOptions.map((answerOptions) => (
                                        <button className="ansBTN" onClick={() => handleAnsBTNClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                                    ))}
                                </div>
                            </>
                        )}
                </div>
            </div>
        </div>
    )
}



export default RedHenStoryQuiz;