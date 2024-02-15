//input: array of quotes
//output: generates random quote 
// create a fxn that takes the array of quotes and generates a random quote 

const quoteArr = [
    "The only way to do great work is to love what you do. – Steve Jobs",
  "Innovation distinguishes between a leader and a follower. – Steve Jobs",
  "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
  "Stay hungry, stay foolish. – Steve Jobs",
  "Don’t let the noise of others’ opinions drown out your own inner voice. – Steve Jobs",
  "Have the courage to follow your heart and intuition. – Steve Jobs",
  "Simplicity is the ultimate sophistication. – Leonardo da Vinci",
  "It is during our darkest moments that we must focus to see the light. – Aristotle",
  "The only true wisdom is in knowing you know nothing. – Socrates",
  "It always seems impossible until it's done. – Nelson Mandela",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "The journey of a thousand miles begins with one step. – Lao Tzu",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "Be the change that you wish to see in the world. – Mahatma Gandhi",
  "In the end, it's not the years in your life that count. It's the life in your years. – Abraham Lincoln",
  "The best way to predict the future is to create it. – Peter Drucker",
  "Strive not to be a success, but rather to be of value. – Albert Einstein",
  "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
  "Life is like riding a bicycle. To keep your balance, you must keep moving. – Albert Einstein",
  "The only thing necessary for the triumph of evil is for good men to do nothing. – Edmund Burke",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
  "When you reach the end of your rope, tie a knot in it and hang on. – Franklin D. Roosevelt",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "It is our choices that show what we truly are, far more than our abilities. – J.K. Rowling",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
  "In the midst of winter, I found there was, within me, an invincible summer. – Albert Camus",
  "It always seems impossible until it's done. – Nelson Mandela",
  "No act of kindness, no matter how small, is ever wasted. – Aesop",
  "Life is a succession of lessons which must be lived to be understood. – Helen Keller",
  "The only way to do great work is to love what you do. – Steve Jobs",
  "In the end, it's not the years in your life that count. It's the life in your years. – Abraham Lincoln",
  "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
  "Life is like riding a bicycle. To keep your balance, you must keep moving. – Albert Einstein",
  "The only thing necessary for the triumph of evil is for good men to do nothing. – Edmund Burke",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. – Ralph Waldo Emerson",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. – Ralph Waldo Emerson",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "It is our choices that show what we truly are, far more than our abilities. – J.K. Rowling",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",
  "In the midst of winter, I found there was, within me, an invincible summer. – Albert Camus",
  "It always seems impossible until it's done. – Nelson Mandela",
  "No act of kindness, no matter how small, is ever wasted. – Aesop",
  "Life is a succession of lessons which must be lived to be understood. – Helen Keller"
];

const quoteGenerator = (arrayOfQuotes) => {
    const answer = Math.floor(Math.random() * arrayOfQuotes.length)
    return arrayOfQuotes[answer]
    }
    //
const quoteInput = document.getElementById('quotes')
const resetButton = document.getElementById('reset')

const setQuote = () => {
  quoteInput.value = quoteGenerator(quoteArr);
};

//setQuote()
//quoteInput.value = quoteGenerator(quoteArr)
resetButton.addEventListener('click', () => {
  setQuote();
})

//console.log(quoteGenerator(quoteArr))
