const quotes = [
    // The Office
    "Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way. – Michael Scott, The Office",
    "I’m not superstitious, but I am a little stitious. – Michael Scott, The Office",
    "I wish there was a way to know you’re in the good old days, before you’ve actually left them. – Andy Bernard, The Office",
    "The worst thing about prison was the dementors. – Michael Scott, The Office",
    "I feel God in this Chili’s tonight. – Pam Beesley, The Office",
    "I got six numbers. One more, and it would have been a complete phone number. – Kevin Malone, The Office",
    "PowerPoints are the peacocks of the business world; all show, no meat. – Dwight Schrute, The Office",
    "Fool me once, strike one. But fool me twice...strike three. – Michael Scott, The Office",
    "I’m fast. To give you a reference point. I’m somewhere between a snake and a mongoose. And a panther. – Dwight Schrute, The Office",
    "I already won the lottery. I was born in the US of A, baby. – Creed Bratton, The Office",

    // Parks and Recreation
    "Treat yo' self. – Tom Haverford, Parks and Recreation",
    "I have no idea what I'm doing, but I know I'm doing it really, really well. – Andy Dwyer, Parks and Recreation",
    "Everything hurts and I'm dying. – Leslie Knope, Parks and Recreation",
    "There's only one thing I hate more than lying: skim milk. Which is water that’s lying about being milk. – Ron Swanson, Parks and Recreation",
    "Give a man a fish and you feed him for a day. Don’t teach a man to fish… and feed yourself. He’s a grown man. And fishing’s not that hard. – Ron Swanson, Parks and Recreation",
    "Sometimes you gotta work a little, so you can ball a lot. – Tom Haverford, Parks and Recreation",
    "I have never taken the high road. But I tell other people to, 'cause then there’s more room for me on the low road. – Tom Haverford, Parks and Recreation",
    "I’m not crying. I’m just allergic to jerks! – Andy Dwyer, Parks and Recreation",
    "When life gives you lemons, you sell some of your grandma’s jewelry and you go clubbing. – Tom Haverford, Parks and Recreation",
    "Any dog under fifty pounds is a cat and cats are useless. – Ron Swanson, Parks and Recreation",

    // Nathan for You
    "I'm not a businessman. I'm a business, man. Like Jay-Z. – Nathan Fielder, Nathan for You",
    "Sometimes the best way to gain someone's trust is to lie to them. – Nathan Fielder, Nathan for You",
    "I’m just a normal guy who’s very good at business. – Nathan Fielder, Nathan for You",
    "Most people assume I'm successful because I wear suits. – Nathan Fielder, Nathan for You",
    "To help small businesses, I sometimes have to think big. – Nathan Fielder, Nathan for You",

    // How To with John Wilson
    "If you’re worried that people are watching you, you might be right. – John Wilson, How To with John Wilson",
    "New York is the only place where it feels completely normal to cry in public. – John Wilson, How To with John Wilson",
    "There’s no easy way to explain what you’re seeing. – John Wilson, How To with John Wilson",
    "The key to confronting regret is finding a way to feel like it had a purpose. – John Wilson, How To with John Wilson",
    "Sometimes the thing you're most ashamed of is the thing that connects you to other people. – John Wilson, How To with John Wilson",

    // Trailer Park Boys
    "I am the liquor. – Jim Lahey, Trailer Park Boys",
    "If I can't smoke and swear, I'm fucked. – Ricky, Trailer Park Boys",
    "Knock knock. Who's there? Fuck off. – Bubbles, Trailer Park Boys",
    "Worst case Ontario. – Ricky, Trailer Park Boys",
    "I got arrested for being drunk and awesome. – Julian, Trailer Park Boys",
    "Beauty is in the eye when you hold her. – Ricky, Trailer Park Boys",
    "Don't judge a cover of a book by its look. – Ricky, Trailer Park Boys",
    "It's all water under the fridge. – Ricky, Trailer Park Boys",
    "I'm not a pessimist; I'm an optometrist. – Ricky, Trailer Park Boys",
    "Do you have a search warranty? – Ricky, Trailer Park Boys"
];


const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    const randomIdx = Math.floor(Math.random() * quotes.length);
    const  quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
}