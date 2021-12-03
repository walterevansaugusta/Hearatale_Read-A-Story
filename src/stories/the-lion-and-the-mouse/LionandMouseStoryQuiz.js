import React, { useEffect, useState } from "react";
import '../StoryQuiz.css';
import '../../Story.css'
import '../../component/Quiz.css'
import '../../data/targetwords.json'

function LionandMouseStoryQuiz() {

    const questions = [{ "questionText": "from one side or part or place to another", "answerOptions": [{ "answerText": "advice", "isCorrect": false }, { "answerText": "across", "isCorrect": true }, { "answerText": "alone", "isCorrect": false }], "audioPath": "../audio/across.mp3" }, { "questionText": "to say back or reply to someone", "answerOptions": [{ "answerText": "apron", "isCorrect": false }, { "answerText": "answer", "isCorrect": true }, { "answerText": "among", "isCorrect": false }], "audioPath": "../audio/answer.mp3" }, { "questionText": "some person, it doesn't matter who", "answerOptions": [{ "answerText": "admit", "isCorrect": false }, { "answerText": "a-bed", "isCorrect": false }, { "answerText": "anybody", "isCorrect": true }], "audioPath": "../audio/anybody.mp3" }, { "questionText": "wild animals", "answerOptions": [{ "answerText": "birthday", "isCorrect": false }, { "answerText": "beasts", "isCorrect": true }, { "answerText": "break", "isCorrect": false }], "audioPath": "../audio/beasts.mp3" }, { "questionText": "with something on both sides", "answerOptions": [{ "answerText": "between", "isCorrect": true }, { "answerText": "bite", "isCorrect": false }, { "answerText": "beautiful", "isCorrect": false }], "audioPath": "../audio/between.mp3" }, { "questionText": "using teeth to cut or squeeze something", "answerOptions": [{ "answerText": "but", "isCorrect": false }, { "answerText": "biting", "isCorrect": true }, { "answerText": "bottom", "isCorrect": false }], "audioPath": "../audio/biting.mp3" }, { "questionText": "caught, can't get away", "answerOptions": [{ "answerText": "captured", "isCorrect": true }, { "answerText": "chorus", "isCorrect": false }, { "answerText": "court", "isCorrect": false }], "audioPath": "../audio/captured.mp3" }, { "questionText": "bit and squeezed with teeth", "answerOptions": [{ "answerText": "cut", "isCorrect": false }, { "answerText": "chewed", "isCorrect": true }, { "answerText": "chamomile", "isCorrect": false }], "audioPath": "../audio/chewed.mp3" }, { "questionText": "an animal's sharp and pointy fingernails and toenails", "answerOptions": [{ "answerText": "closed", "isCorrect": false }, { "answerText": "chuckle", "isCorrect": false }, { "answerText": "claw", "isCorrect": true }], "audioPath": "../audio/claw.mp3" }, { "questionText": "holding tight and hoping not to let go", "answerOptions": [{ "answerText": "clinging", "isCorrect": true }, { "answerText": "cow", "isCorrect": false }, { "answerText": "call", "isCorrect": false }], "audioPath": "../audio/clinging.mp3" }, { "questionText": "could not", "answerOptions": [{ "answerText": "couldn't", "isCorrect": true }, { "answerText": "city", "isCorrect": false }, { "answerText": "came", "isCorrect": false }], "audioPath": "../audio/couldn't.mp3" }, { "questionText": "sometimes only when the sun shines; sometimes from sunrise to another sunrise", "answerOptions": [{ "answerText": "day", "isCorrect": true }, { "answerText": "ding-dong", "isCorrect": false }, { "answerText": "dining-car", "isCorrect": false }], "audioPath": "../audio/day.mp3" }, { "questionText": "the yummy treat after a meal, like cake or pie or ice cream", "answerOptions": [{ "answerText": "different", "isCorrect": false }, { "answerText": "dessert", "isCorrect": true }, { "answerText": "dose", "isCorrect": false }], "audioPath": "../audio/dessert.mp3" }, { "questionText": "did not", "answerOptions": [{ "answerText": "dinner", "isCorrect": false }, { "answerText": "doesn\u00d5t", "isCorrect": false }, { "answerText": "didn't", "isCorrect": true }], "audioPath": "../audio/didn't.mp3" }, { "questionText": "feeling sleepy", "answerOptions": [{ "answerText": "drag", "isCorrect": false }, { "answerText": "drill", "isCorrect": false }, { "answerText": "drowsy", "isCorrect": true }], "audioPath": "../audio/drowsy.mp3" }, { "questionText": "what and animals hear with", "answerOptions": [{ "answerText": "even", "isCorrect": false }, { "answerText": "everything", "isCorrect": false }, { "answerText": "ears", "isCorrect": true }], "audioPath": "../audio/ears.mp3" }, { "questionText": "to get away and not be caught", "answerOptions": [{ "answerText": "escape", "isCorrect": true }, { "answerText": "eat", "isCorrect": false }, { "answerText": "embarrass", "isCorrect": false }], "audioPath": "../audio/escape.mp3" }, { "questionText": "including, this too", "answerOptions": [{ "answerText": "especially", "isCorrect": false }, { "answerText": "edge", "isCorrect": false }, { "answerText": "even", "isCorrect": true }], "audioPath": "../audio/even.mp3" }, { "questionText": "at any time or all times", "answerOptions": [{ "answerText": "eagle", "isCorrect": false }, { "answerText": "each", "isCorrect": false }, { "answerText": "ever", "isCorrect": true }], "audioPath": "../audio/ever.mp3" }, { "questionText": "what people and animals see with", "answerOptions": [{ "answerText": "eyes", "isCorrect": true }, { "answerText": "except", "isCorrect": false }, { "answerText": "everywhere", "isCorrect": false }], "audioPath": "../audio/eyes.mp3" }, { "questionText": "a nice thing to do for someone", "answerOptions": [{ "answerText": "favor", "isCorrect": true }, { "answerText": "free", "isCorrect": false }, { "answerText": "flick", "isCorrect": false }], "audioPath": "../audio/favor.mp3" }, { "questionText": "feeling afraid, frightened, scared", "answerOptions": [{ "answerText": "frame", "isCorrect": false }, { "answerText": "fancied", "isCorrect": false }, { "answerText": "fear", "isCorrect": true }], "audioPath": "../audio/fear.mp3" }, { "questionText": "not very many", "answerOptions": [{ "answerText": "fancy", "isCorrect": false }, { "answerText": "fingernails", "isCorrect": false }, { "answerText": "few", "isCorrect": true }], "audioPath": "../audio/few.mp3" }, { "questionText": "at the very end", "answerOptions": [{ "answerText": "float", "isCorrect": false }, { "answerText": "fear", "isCorrect": false }, { "answerText": "finally", "isCorrect": true }], "audioPath": "../audio/finally.mp3" }, { "questionText": "saw something that had been lost", "answerOptions": [{ "answerText": "found", "isCorrect": true }, { "answerText": "fool", "isCorrect": false }, { "answerText": "frame", "isCorrect": false }], "audioPath": "../audio/found.mp3" }, { "questionText": "not be held back or caught", "answerOptions": [{ "answerText": "free", "isCorrect": true }, { "answerText": "freight", "isCorrect": false }, { "answerText": "frown", "isCorrect": false }], "audioPath": "../audio/free.mp3" }, { "questionText": "enjoyable, nice to do", "answerOptions": [{ "answerText": "fowl", "isCorrect": false }, { "answerText": "feel", "isCorrect": false }, { "answerText": "fun", "isCorrect": true }], "audioPath": "../audio/fun.mp3" }, { "questionText": "the feel or look of the short hair on an animal's skin", "answerOptions": [{ "answerText": "field", "isCorrect": false }, { "answerText": "furry", "isCorrect": true }, { "answerText": "fresh", "isCorrect": false }], "audioPath": "../audio/furry.mp3" }, { "questionText": "looked at in an angry way", "answerOptions": [{ "answerText": "glared", "isCorrect": true }, { "answerText": "goodness", "isCorrect": false }, { "answerText": "gooseberry", "isCorrect": false }], "audioPath": "../audio/glared.mp3" }, { "questionText": "chewed at something with little hard bites", "answerOptions": [{ "answerText": "glare", "isCorrect": false }, { "answerText": "gnawed", "isCorrect": true }, { "answerText": "grain", "isCorrect": false }], "audioPath": "../audio/gnawed.mp3" }, { "questionText": "very big, or very important", "answerOptions": [{ "answerText": "gather", "isCorrect": false }, { "answerText": "gold-fish", "isCorrect": false }, { "answerText": "great", "isCorrect": true }], "audioPath": "../audio/great.mp3" }, { "questionText": "the dirt and grass animals and people walk on", "answerOptions": [{ "answerText": "ground", "isCorrect": true }, { "answerText": "goodbye", "isCorrect": false }, { "answerText": "gather", "isCorrect": false }], "audioPath": "../audio/ground.mp3" }, { "questionText": "made a scary sound in the throat", "answerOptions": [{ "answerText": "growled", "isCorrect": true }, { "answerText": "gingerbread", "isCorrect": false }, { "answerText": "goes", "isCorrect": false }], "audioPath": "../audio/growled.mp3" }, { "questionText": "a loud sound", "answerOptions": [{ "answerText": "hen", "isCorrect": false }, { "answerText": "had", "isCorrect": false }, { "answerText": "hah", "isCorrect": true }], "audioPath": "../audio/hah.mp3" }, { "questionText": "dropping down from something", "answerOptions": [{ "answerText": "hook", "isCorrect": false }, { "answerText": "horse", "isCorrect": false }, { "answerText": "hanging", "isCorrect": true }], "audioPath": "../audio/hanging.mp3" }, { "questionText": "that thing on top of your neck", "answerOptions": [{ "answerText": "horrible", "isCorrect": false }, { "answerText": "head", "isCorrect": true }, { "answerText": "heap", "isCorrect": false }], "audioPath": "../audio/head.mp3" }, { "questionText": "noticed a sound in the ears", "answerOptions": [{ "answerText": "heard", "isCorrect": true }, { "answerText": "headlights", "isCorrect": false }, { "answerText": "hollow", "isCorrect": false }], "audioPath": "../audio/heard.mp3" }, { "questionText": "lifted something heavy", "answerOptions": [{ "answerText": "herself", "isCorrect": false }, { "answerText": "hamburgers", "isCorrect": false }, { "answerText": "heaved", "isCorrect": true }], "audioPath": "../audio/heaved.mp3" }, { "questionText": "want something", "answerOptions": [{ "answerText": "head", "isCorrect": false }, { "answerText": "hope", "isCorrect": true }, { "answerText": "homework", "isCorrect": false }], "audioPath": "../audio/hope.mp3" }, { "questionText": "moved in a quick little jump or jumps", "answerOptions": [{ "answerText": "hello", "isCorrect": false }, { "answerText": "hopped", "isCorrect": true }, { "answerText": "hump", "isCorrect": false }], "audioPath": "../audio/hopped.mp3" }, { "questionText": "very big", "answerOptions": [{ "answerText": "hospitable", "isCorrect": false }, { "answerText": "hush", "isCorrect": false }, { "answerText": "huge", "isCorrect": true }], "audioPath": "../audio/huge.mp3" }, { "questionText": "tied and held below something", "answerOptions": [{ "answerText": "hung", "isCorrect": true }, { "answerText": "hot-dogs", "isCorrect": false }, { "answerText": "heart", "isCorrect": false }], "audioPath": "../audio/hung.mp3" }, { "questionText": "people trying to get something, especially an animal", "answerOptions": [{ "answerText": "hobgoblin", "isCorrect": false }, { "answerText": "hunters", "isCorrect": true }, { "answerText": "house", "isCorrect": false }], "audioPath": "../audio/hunters.mp3" }, { "questionText": "I will", "answerOptions": [{ "answerText": "I'll", "isCorrect": true }, { "answerText": "Ichabod", "isCorrect": false }, { "answerText": "India-rubber", "isCorrect": false }], "audioPath": "../audio/I'll.mp3" }, { "questionText": "I am", "answerOptions": [{ "answerText": "I'm", "isCorrect": true }, { "answerText": "India-rubber", "isCorrect": false }, { "answerText": "I\u00d5ll", "isCorrect": false }], "audioPath": "../audio/I'm.mp3" }, { "questionText": "a thought or a plan someone thinks", "answerOptions": [{ "answerText": "it\u00d5s", "isCorrect": false }, { "answerText": "isn\u00d5t", "isCorrect": false }, { "answerText": "idea", "isCorrect": true }], "audioPath": "../audio/idea.mp3" }, { "questionText": "a nice thing to do for someone", "answerOptions": [{ "answerText": "kindness", "isCorrect": true }, { "answerText": "kind", "isCorrect": false }, { "answerText": "king", "isCorrect": false }], "audioPath": "../audio/kindness.mp3" }, { "questionText": "the biggest most important boss", "answerOptions": [{ "answerText": "know", "isCorrect": false }, { "answerText": "kertyschoo", "isCorrect": false }, { "answerText": "king", "isCorrect": true }], "audioPath": "../audio/king.mp3" }, { "questionText": "won't work, doesn't do much", "answerOptions": [{ "answerText": "lion", "isCorrect": false }, { "answerText": "load", "isCorrect": false }, { "answerText": "lazy", "isCorrect": true }], "audioPath": "../audio/lazy.mp3" }, { "questionText": "made a big jump", "answerOptions": [{ "answerText": "leapt", "isCorrect": true }, { "answerText": "lot", "isCorrect": false }, { "answerText": "left", "isCorrect": false }], "audioPath": "../audio/leapt.mp3" }, { "questionText": "able to live", "answerOptions": [{ "answerText": "land", "isCorrect": false }, { "answerText": "lunch", "isCorrect": false }, { "answerText": "life", "isCorrect": true }], "audioPath": "../audio/life.mp3" }, { "questionText": "picked up or raised up", "answerOptions": [{ "answerText": "late", "isCorrect": false }, { "answerText": "lifted", "isCorrect": true }, { "answerText": "learn", "isCorrect": false }], "audioPath": "../audio/lifted.mp3" }, { "questionText": "a big wild animal, sometimes with a mane around the neck", "answerOptions": [{ "answerText": "lion", "isCorrect": true }, { "answerText": "load", "isCorrect": false }, { "answerText": "lead", "isCorrect": false }], "audioPath": "../audio/lion.mp3" }, { "questionText": "something to eat", "answerOptions": [{ "answerText": "malt", "isCorrect": false }, { "answerText": "my", "isCorrect": false }, { "answerText": "meal", "isCorrect": true }], "audioPath": "../audio/meal.mp3" }, { "questionText": "very strong", "answerOptions": [{ "answerText": "mistress", "isCorrect": false }, { "answerText": "munch", "isCorrect": false }, { "answerText": "mighty", "isCorrect": true }], "audioPath": "../audio/mighty.mp3" }, { "questionText": "a small animal with a long tail", "answerOptions": [{ "answerText": "mittens", "isCorrect": false }, { "answerText": "mouse", "isCorrect": true }, { "answerText": "must", "isCorrect": false }], "audioPath": "../audio/mouse.mp3" }, { "questionText": "a short sleep", "answerOptions": [{ "answerText": "neck", "isCorrect": false }, { "answerText": "night", "isCorrect": false }, { "answerText": "nap", "isCorrect": true }], "audioPath": "../audio/nap.mp3" }, { "questionText": "having a short sleep", "answerOptions": [{ "answerText": "napping", "isCorrect": true }, { "answerText": "now", "isCorrect": false }, { "answerText": "nest", "isCorrect": false }], "audioPath": "../audio/napping.mp3" }, { "questionText": "to have to have", "answerOptions": [{ "answerText": "name", "isCorrect": false }, { "answerText": "need", "isCorrect": true }, { "answerText": "nod", "isCorrect": false }], "audioPath": "../audio/need.mp3" }, { "questionText": "made of strings, used to catch something or keep something inside", "answerOptions": [{ "answerText": "never", "isCorrect": false }, { "answerText": "neigh", "isCorrect": false }, { "answerText": "net", "isCorrect": true }], "audioPath": "../audio/net.mp3" }, { "questionText": "the one after this one", "answerOptions": [{ "answerText": "now", "isCorrect": false }, { "answerText": "nap", "isCorrect": false }, { "answerText": "next", "isCorrect": true }], "audioPath": "../audio/next.mp3" }, { "questionText": "took a little bite or many little bites", "answerOptions": [{ "answerText": "nice", "isCorrect": false }, { "answerText": "neck", "isCorrect": false }, { "answerText": "nipped", "isCorrect": true }], "audioPath": "../audio/nipped.mp3" }, { "questionText": "no one, not any person", "answerOptions": [{ "answerText": "nobody", "isCorrect": true }, { "answerText": "nothing", "isCorrect": false }, { "answerText": "naughty", "isCorrect": false }], "audioPath": "../audio/nobody.mp3" }, { "questionText": "the big bump in the middle of your face that you breath and smell with", "answerOptions": [{ "answerText": "nowhere", "isCorrect": false }, { "answerText": "nose", "isCorrect": true }, { "answerText": "nibble", "isCorrect": false }], "audioPath": "../audio/nose.mp3" }, { "questionText": "on top of, or to go on top of", "answerOptions": [{ "answerText": "onto", "isCorrect": true }, { "answerText": "old", "isCorrect": false }, { "answerText": "ought", "isCorrect": false }], "audioPath": "../audio/onto.mp3" }, { "questionText": "a kind of tree with very big, long leaves", "answerOptions": [{ "answerText": "pretend", "isCorrect": false }, { "answerText": "palm", "isCorrect": true }, { "answerText": "patiently", "isCorrect": false }], "audioPath": "../audio/palm.mp3" }, { "questionText": "like a hand or a foot for an animal", "answerOptions": [{ "answerText": "paw", "isCorrect": true }, { "answerText": "pin", "isCorrect": false }, { "answerText": "path", "isCorrect": false }], "audioPath": "../audio/paw.mp3" }, { "questionText": "stuck or held down", "answerOptions": [{ "answerText": "pinned", "isCorrect": true }, { "answerText": "picture", "isCorrect": false }, { "answerText": "place", "isCorrect": false }], "audioPath": "../audio/pinned.mp3" }, { "questionText": "somewhere", "answerOptions": [{ "answerText": "place", "isCorrect": true }, { "answerText": "pleasant", "isCorrect": false }, { "answerText": "porridge", "isCorrect": false }], "audioPath": "../audio/place.mp3" }, { "questionText": "said would really truly do something", "answerOptions": [{ "answerText": "patch", "isCorrect": false }, { "answerText": "promised", "isCorrect": true }, { "answerText": "pair", "isCorrect": false }], "audioPath": "../audio/promised.mp3" }, { "questionText": "fast, in a hurry", "answerOptions": [{ "answerText": "question", "isCorrect": false }, { "answerText": "quick", "isCorrect": true }, { "answerText": "quarrel", "isCorrect": false }], "audioPath": "../audio/quick.mp3" }, { "questionText": "fast, in a hurry", "answerOptions": [{ "answerText": "quite", "isCorrect": false }, { "answerText": "queen", "isCorrect": false }, { "answerText": "quickly", "isCorrect": true }], "audioPath": "../audio/quickly.mp3" }, { "questionText": "ran very fast", "answerOptions": [{ "answerText": "raced", "isCorrect": true }, { "answerText": "raddish", "isCorrect": false }, { "answerText": "runcible", "isCorrect": false }], "audioPath": "../audio/raced.mp3" }, { "questionText": "to give back", "answerOptions": [{ "answerText": "repay", "isCorrect": true }, { "answerText": "roar", "isCorrect": false }, { "answerText": "roof", "isCorrect": false }], "audioPath": "../audio/repay.mp3" }, { "questionText": "make a loud angry sound", "answerOptions": [{ "answerText": "row", "isCorrect": false }, { "answerText": "roar", "isCorrect": true }, { "answerText": "rough", "isCorrect": false }], "audioPath": "../audio/roar.mp3" }, { "questionText": "made a loud angry sound", "answerOptions": [{ "answerText": "row", "isCorrect": false }, { "answerText": "roared", "isCorrect": true }, { "answerText": "rough", "isCorrect": false }], "audioPath": "../audio/roared.mp3" }, { "questionText": "a hard stone", "answerOptions": [{ "answerText": "rainbow", "isCorrect": false }, { "answerText": "rather", "isCorrect": false }, { "answerText": "rock", "isCorrect": true }], "audioPath": "../audio/rock.mp3" }, { "questionText": "like a long piece of very thick string", "answerOptions": [{ "answerText": "rumble", "isCorrect": false }, { "answerText": "round", "isCorrect": false }, { "answerText": "rope", "isCorrect": true }], "audioPath": "../audio/rope.mp3" }, { "questionText": "a roaring sound a big animal might make", "answerOptions": [{ "answerText": "remind", "isCorrect": false }, { "answerText": "raddish", "isCorrect": false }, { "answerText": "rowwrrr", "isCorrect": true }], "audioPath": "../audio/rowwrrr.mp3" }, { "questionText": "broke completely or destroyed, no good any more", "answerOptions": [{ "answerText": "remote", "isCorrect": false }, { "answerText": "ruined", "isCorrect": true }, { "answerText": "rowwrrr", "isCorrect": false }], "audioPath": "../audio/ruined.mp3" }, { "questionText": "not have to worry; not be afraid of being hurt or harmed", "answerOptions": [{ "answerText": "silly", "isCorrect": false }, { "answerText": "socks", "isCorrect": false }, { "answerText": "safe", "isCorrect": true }], "audioPath": "../audio/safe.mp3" }, { "questionText": "to run quickly in little jumps", "answerOptions": [{ "answerText": "snuggle", "isCorrect": false }, { "answerText": "sorely", "isCorrect": false }, { "answerText": "scampered", "isCorrect": true }], "audioPath": "../audio/scampered.mp3" }, { "questionText": "a dark place away from the sun or light", "answerOptions": [{ "answerText": "shady", "isCorrect": true }, { "answerText": "spider", "isCorrect": false }, { "answerText": "slow", "isCorrect": false }], "audioPath": "../audio/shady.mp3" }, { "questionText": "a polite word to say instead of someone's name", "answerOptions": [{ "answerText": "sir", "isCorrect": true }, { "answerText": "spot", "isCorrect": false }, { "answerText": "snake", "isCorrect": false }], "audioPath": "../audio/sir.mp3" }, { "questionText": "a little something to eat, or to eat it", "answerOptions": [{ "answerText": "shouldn\u00d5t", "isCorrect": false }, { "answerText": "snack", "isCorrect": true }, { "answerText": "star", "isCorrect": false }], "audioPath": "../audio/snack.mp3" }, { "questionText": "broke something skinny that made a pop sound", "answerOptions": [{ "answerText": "snapped", "isCorrect": true }, { "answerText": "save", "isCorrect": false }, { "answerText": "shop", "isCorrect": false }], "audioPath": "../audio/snapped.mp3" }, { "questionText": "to make a noise sucking air into the nose", "answerOptions": [{ "answerText": "sniffed", "isCorrect": true }, { "answerText": "sail", "isCorrect": false }, { "answerText": "sheets", "isCorrect": false }], "audioPath": "../audio/sniffed.mp3" }, { "questionText": "a person", "answerOptions": [{ "answerText": "shop", "isCorrect": false }, { "answerText": "somebody", "isCorrect": true }, { "answerText": "smokestack", "isCorrect": false }], "audioPath": "../audio/somebody.mp3" }, { "questionText": "feel bad about something", "answerOptions": [{ "answerText": "shame", "isCorrect": false }, { "answerText": "sharp", "isCorrect": false }, { "answerText": "sorry", "isCorrect": true }], "audioPath": "../audio/sorry.mp3" }, { "questionText": "to spare a life is to let someone live", "answerOptions": [{ "answerText": "surprise", "isCorrect": false }, { "answerText": "spare", "isCorrect": true }, { "answerText": "suggest", "isCorrect": false }], "audioPath": "../audio/spare.mp3" }, { "questionText": "pushed tight together", "answerOptions": [{ "answerText": "squeezed", "isCorrect": true }, { "answerText": "suppose", "isCorrect": false }, { "answerText": "shame", "isCorrect": false }], "audioPath": "../audio/squeezed.mp3" }, { "questionText": "staying without a change", "answerOptions": [{ "answerText": "swing", "isCorrect": false }, { "answerText": "seller", "isCorrect": false }, { "answerText": "still", "isCorrect": true }], "audioPath": "../audio/still.mp3" }, { "questionText": "certain, can believe something", "answerOptions": [{ "answerText": "splash", "isCorrect": false }, { "answerText": "shape", "isCorrect": false }, { "answerText": "sure", "isCorrect": true }], "audioPath": "../audio/sure.mp3" }, { "questionText": "the back end part of animals like lions and mice", "answerOptions": [{ "answerText": "this", "isCorrect": false }, { "answerText": "tail", "isCorrect": true }, { "answerText": "tremble", "isCorrect": false }], "audioPath": "../audio/tail.mp3" }, { "questionText": "bothered someone in play, hurt someone's feelings", "answerOptions": [{ "answerText": "ten", "isCorrect": false }, { "answerText": "television", "isCorrect": false }, { "answerText": "teased", "isCorrect": true }], "audioPath": "../audio/teased.mp3" }, { "questionText": "the hard white things animals and people bite and chew with", "answerOptions": [{ "answerText": "thought", "isCorrect": false }, { "answerText": "teeth", "isCorrect": true }, { "answerText": "town", "isCorrect": false }], "audioPath": "../audio/teeth.mp3" }, { "questionText": "banged and beat and flopped around trying to get loose", "answerOptions": [{ "answerText": "teeth", "isCorrect": false }, { "answerText": "to", "isCorrect": false }, { "answerText": "thrashed", "isCorrect": true }], "audioPath": "../audio/thrashed.mp3" }, { "questionText": "very thin pieces of string; many are twisted together to make a rope", "answerOptions": [{ "answerText": "threads", "isCorrect": true }, { "answerText": "twig", "isCorrect": false }, { "answerText": "through", "isCorrect": false }], "audioPath": "../audio/threads.mp3" }, { "questionText": "the whole way, or from one end to another", "answerOptions": [{ "answerText": "try", "isCorrect": false }, { "answerText": "tapes", "isCorrect": false }, { "answerText": "through", "isCorrect": true }], "audioPath": "../audio/through.mp3" }, { "questionText": "with no extra room, very close", "answerOptions": [{ "answerText": "the", "isCorrect": false }, { "answerText": "thump", "isCorrect": false }, { "answerText": "tight", "isCorrect": true }], "audioPath": "../audio/tight.mp3" }, { "questionText": "smaller than small", "answerOptions": [{ "answerText": "today", "isCorrect": false }, { "answerText": "tiny", "isCorrect": true }, { "answerText": "thump", "isCorrect": false }], "audioPath": "../audio/tiny.mp3" }, { "questionText": "used to move or taste things in the mouth", "answerOptions": [{ "answerText": "tongue", "isCorrect": true }, { "answerText": "travel", "isCorrect": false }, { "answerText": "toot", "isCorrect": false }], "audioPath": "../audio/tongue.mp3" }, { "questionText": "a plant with a big trunks that can grow taller than people", "answerOptions": [{ "answerText": "tie", "isCorrect": false }, { "answerText": "take", "isCorrect": false }, { "answerText": "tree", "isCorrect": true }], "audioPath": "../audio/tree.mp3" }, { "questionText": "made jerky little skin movements when afraid or cold", "answerOptions": [{ "answerText": "three", "isCorrect": false }, { "answerText": "thread", "isCorrect": false }, { "answerText": "trembled", "isCorrect": true }], "audioPath": "../audio/trembled.mp3" }, { "questionText": "fell and rolled over", "answerOptions": [{ "answerText": "tumbled", "isCorrect": true }, { "answerText": "tunnel", "isCorrect": false }, { "answerText": "twist", "isCorrect": false }], "audioPath": "../audio/tumbled.mp3" }, { "questionText": "happening up to a time", "answerOptions": [{ "answerText": "unicorn", "isCorrect": false }, { "answerText": "umbrella", "isCorrect": false }, { "answerText": "until", "isCorrect": true }], "audioPath": "../audio/until.mp3" }, { "questionText": "to quickly close and open an eye", "answerOptions": [{ "answerText": "without", "isCorrect": false }, { "answerText": "wool", "isCorrect": false }, { "answerText": "wink", "isCorrect": true }], "audioPath": "../audio/wink.mp3" }, { "questionText": "stopped sleeping", "answerOptions": [{ "answerText": "woke", "isCorrect": true }, { "answerText": "wise", "isCorrect": false }, { "answerText": "wall", "isCorrect": false }], "audioPath": "../audio/woke.mp3" }, { "questionText": "you are", "answerOptions": [{ "answerText": "yarn", "isCorrect": false }, { "answerText": "yet", "isCorrect": false }, { "answerText": "you're", "isCorrect": true }], "audioPath": "../audio/you're.mp3" }]


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
                    <a href="/LionandMouse">
                        <div className="arrow" />
                    </a>
                    <a href="/LionandMouse">
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



export default LionandMouseStoryQuiz;