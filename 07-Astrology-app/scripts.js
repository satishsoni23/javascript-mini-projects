const rashis = [
  "Mesha (Aries)",
  "Vrishabha (Taurus)",
  "Mithuna (Gemini)",
  "Karka (Cancer)",
  "Simha (Leo)",
  "Kanya (Virgo)",
  "Tula (Libra)",
  "Vrishchika (Scorpio)",
  "Dhanu (Sagittarius)",
  "Makara (Capricorn)",
  "Kumbha (Aquarius)",
  "Meena (Pisces)"
];


//compliments based on date ,size 31
const compliments = [
  "You have a great sense of humor.",
  "You are incredibly kind.",
  "You light up the room.",
  "You have an amazing smile.",
  "You are very thoughtful.",
  "You make people feel comfortable.",
  "You have a beautiful personality.",
  "You are genuinely inspiring.",
  "You are stronger than you realize.",
  "You have a great attitude.",
  "You are a wonderful listener.",
  "You bring out the best in others.",
  "You are incredibly creative.",
  "You have a brilliant mind.",
  "You are full of positive energy.",
  "You make every day better.",
  "You are very talented.",
  "You have a contagious enthusiasm.",
  "You are truly one of a kind.",
  "You have an excellent sense of style.",
  "You are very dependable.",
  "You make people smile effortlessly.",
  "You are confident and authentic.",
  "You have a calming presence.",
  "You are exceptionally hardworking.",
  "You have a heart of gold.",
  "You are incredibly charming.",
  "You make a difference wherever you go.",
  "You are smart and capable.",
  "You have an amazing perspective on life.",
  "You are absolutely awesome."
];

//size 20
const victimcompliments = [
  "You are incredibly brave.",
  "You have a kind heart.",
  "You make people feel valued.",
  "You are stronger than you think.",
  "You have a beautiful smile.",
  "You bring positivity wherever you go.",
  "You are genuinely inspiring.",
  "You have a wonderful personality.",
  "You are thoughtful and caring.",
  "You have a great sense of humor.",
  "You are amazingly creative.",
  "You make the world a better place.",
  "You are smart and capable.",
  "You have a calming presence.",
  "You are truly one of a kind.",
  "You light up every room.",
  "You are a fantastic friend.",
  "You have incredible potential.",
  "You are appreciated more than you know.",
  "You are absolutely awesome."
];

//recommendations 30
const recommendations = [
  "Today is a great day to start something new.",
  "Focus on your goals and avoid distractions.",
  "A pleasant surprise may come your way.",
  "Trust your instincts before making decisions.",
  "Spend quality time with your family.",
  "An opportunity for growth is approaching.",
  "Stay patient; good things take time.",
  "Take care of your health and rest well.",
  "Your hard work will soon pay off.",
  "Avoid unnecessary arguments today.",
  "Someone may seek your advice.",
  "A financial opportunity could arise.",
  "Step out of your comfort zone.",
  "Practice gratitude and positivity.",
  "Your creativity will shine today.",
  "Reconnect with an old friend.",
  "Believe in yourself and your abilities.",
  "A small act of kindness will make a big difference.",
  "Stay open to new experiences.",
  "Good news may arrive unexpectedly.",
  "Focus on self-improvement and learning.",
  "Take calculated risks with confidence.",
  "Your leadership skills will be appreciated.",
  "Avoid overthinking and trust the process.",
  "A meaningful conversation awaits you.",
  "Today is ideal for planning your future.",
  "Listen carefully to your inner voice.",
  "Positive energy surrounds you today.",
  "Embrace change and welcome new beginnings.",
  "Your determination will lead to success."
];

//predictions size 20
const predictions = [
  "You may receive good news related to your career soon.",
  "An old friend could reconnect with you unexpectedly.",
  "A new opportunity might open doors for personal growth.",
  "You may feel more confident in making important decisions.",
  "A positive change in your finances could be on the horizon.",
  "Someone may appreciate your hard work and efforts.",
  "A short trip or change of environment may bring fresh energy.",
  "You might discover a new interest or hobby.",
  "A meaningful conversation could strengthen a relationship.",
  "This is a good time to focus on your health and well-being.",
  "You may feel inspired to start something you've been postponing.",
  "An unexpected compliment could brighten your day.",
  "You might find a solution to a problem that has been bothering you.",
  "A new connection may prove valuable in the future.",
  "Patience and consistency could bring positive results soon.",
  "You may receive support from someone you didn't expect.",
  "A small financial gain or reward could come your way.",
  "This may be a good period for learning and self-improvement.",
  "You might feel motivated to organize and plan for the future.",
  "A pleasant surprise may bring joy and optimism into your day."
];

const form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const name=document.getElementById('firstname').value;
    const surname=document.getElementById('surname').value;
    const year=parseInt(document.getElementById('year').value);
    const month=parseInt(document.getElementById('month').value);
    const day=parseInt(document.getElementById('date').value);

    const text =`Hello ${name} ${surname} Your zodiac sign is ${rashis[(month-1)]}.
    ${compliments[day-1]} ${victimcompliments[year%20]} ${recommendations[(day*month)%30]}
    ${predictions[(name.length*surname.length)%20]}`;

    document.getElementById('result').textContent=text;

    form.reset();
})

