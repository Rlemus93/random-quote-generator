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

const bibleVerses = [
  "For I know the plans I have for you, declares the LORD, plans for welfare and not for evil, to give you a future and a hope. – Jeremiah 29:11",
  "Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths. – Proverbs 3:5-6",
  "The LORD is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul. He leads me in paths of righteousness for his name's sake. – Psalm 23:1-3",
  "But they who wait for the LORD shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint. – Isaiah 40:31",
  "The name of the LORD is a strong tower; the righteous man runs into it and is safe. – Proverbs 18:10",
  "Delight yourself in the LORD, and he will give you the desires of your heart. – Psalm 37:4",
  "And we know that for those who love God all things work together for good, for those who are called according to his purpose. – Romans 8:28",
  "Come to me, all who labor and are heavy laden, and I will give you rest. – Matthew 11:28",
  "But seek first the kingdom of God and his righteousness, and all these things will be added to you. – Matthew 6:33",
  "I can do all things through him who strengthens me. – Philippians 4:13",
  "Be strong and courageous. Do not fear or be in dread of them, for it is the LORD your God who goes with you. He will not leave you or forsake you. – Deuteronomy 31:6",
  "The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing. – Zephaniah 3:17",
  "And let us not grow weary of doing good, for in due season we will reap, if we do not give up. – Galatians 6:9",
  "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law. – Galatians 5:22-23",
  "The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance. – 2 Peter 3:9",
  "And we have known and believed the love that God has for us. God is love, and he who abides in love abides in God, and God in him. – 1 John 4:16",
  "For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us. – Romans 8:18",
  "The LORD is near to the brokenhearted and saves the crushed in spirit. – Psalm 34:18",
  "And my God will supply every need of yours according to his riches in glory in Christ Jesus. – Philippians 4:19",
  "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go. – Joshua 1:9",
  "Let not your hearts be troubled. Believe in God; believe also in me. – John 14:1",
  "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. – Philippians 4:6",
  "But the Lord stood by me and strengthened me, so that through me the message might be fully proclaimed and all the Gentiles might hear it. So I was rescued from the lion's mouth. – 2 Timothy 4:17",
  "For God gave us a spirit not of fear but of power and love and self-control. – 2 Timothy 1:7",
  "And we know that the Son of God has come and has given us understanding, so that we may know him who is true; and we are in him who is true, in his Son Jesus Christ. He is the true God and eternal life. – 1 John 5:20",
  "But the wisdom from above is first pure, then peaceable, gentle, open to reason, full of mercy and good fruits, impartial and sincere. – James 3:17",
  "And let us consider how to stir up one another to love and good works. – Hebrews 10:24",
  "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God. – Ephesians 2:8",
  "And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him. – Colossians 3:17",
  "Be strong and courageous. Do not fear or be in dread of them, for it is the LORD your God who goes with you. He will not leave you or forsake you. – Deuteronomy 31:6",
    "The LORD your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing. – Zephaniah 3:17",
    "And let us not grow weary of doing good, for in due season we will reap, if we do not give up. – Galatians 6:9",
    "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law. – Galatians 5:22-23",
    "The Lord is not slow to fulfill his promise as some count slowness, but is patient toward you, not wishing that any should perish, but that all should reach repentance. – 2 Peter 3:9",
    "And we have known and believed the love that God has for us. God is love, and he who abides in love abides in God, and God in him. – 1 John 4:16",
    "For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us. – Romans 8:18",
    "The LORD is near to the brokenhearted and saves the crushed in spirit. – Psalm 34:18",
    "And my God will supply every need of yours according to his riches in glory in Christ Jesus. – Philippians 4:19",
    "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go. – Joshua 1:9",
    "Let not your hearts be troubled. Believe in God; believe also in me. – John 14:1",
    "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. – Philippians 4:6",
    "But the Lord stood by me and strengthened me, so that through me the message might be fully proclaimed and all the Gentiles might hear it. So I was rescued from the lion's mouth. – 2 Timothy 4:17",
    "For God gave us a spirit not of fear but of power and love and self-control. – 2 Timothy 1:7",
    "And we know that the Son of God has come and has given us understanding, so that we may know him who is true; and we are in him who is true, in his Son Jesus Christ. He is the true God and eternal life. – 1 John 5:20",
    "But the wisdom from above is first pure, then peaceable, gentle, open to reason, full of mercy and good fruits, impartial and sincere. – James 3:17",
    "And let us consider how to stir up one another to love and good works. – Hebrews 10:24",
    "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God. – Ephesians 2:8",
    "And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him. – Colossians 3:17",
    "Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us. – Hebrews 12:1",
    "But seek first the kingdom of God and his righteousness, and all these things will be added to you. – Matthew 6:33",
    "For everyone who has been born of God overcomes the world. And this is the victory that has overcome the world—our faith. – 1 John 5:4",
    "And we know that for those who love God all things work together for good, for those who are called according to his purpose. – Romans 8:28",
    "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. – Romans 8:28",
    "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus. – Philippians 4:7",
    "Now faith is confidence in what we hope for and assurance about what we do not see. – Hebrews 11:1",
    "Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will. – Romans 12:2",
    "Commit to the LORD whatever you do, and he will establish your plans. – Proverbs 16:3",
    "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own. – Matthew 6:34",
    "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us. – Romans 5:8",
    "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. – Philippians 4:6",
    "The Lord is not slow in keeping his promise, as some understand slowness. Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance. – 2 Peter 3:9",
    "In all your ways acknowledge him, and he will make your paths straight. – Proverbs 3:6",
    "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law. – Galatians 5:22-23",
    "And we know that in all things God works for the good of those who love him, who have been called according to his purpose. – Romans 8:28",
    "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. – Philippians 4:6",
    "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand. – Isaiah 41:10",
    
];

const bibleGenerator = (arrayOfVerses) => {
  const verse = Math.floor(Math.random() * arrayOfVerses.length)
  return arrayOfVerses[verse]
}
const bibleInput = document.getElementById('verse')
const bibleButtonInput = document.getElementById('new')

const setVerse = () => {
  bibleInput.value = bibleGenerator(bibleVerses)
}

bibleButtonInput.addEventListener('click', () => {
  setVerse();
})
//console.log(quoteGenerator(quoteArr))
