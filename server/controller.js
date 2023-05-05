
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A pleasant surprise is waiting for you.",
        "A soft voice may be awfully persuasive.", 
        "Advice, when most needed, is least heeded.", 
        "All the effort you are making will ultimately pay off",
        "A lifetime of happiness lies ahead of you." ]

        const randomIndex = Math.floor(Math.random() * fortunes.length);
        const randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
    },
    getMotivation: (req, res) => {
        const motivations = ["Don't watch the clock; do what it does. Keep going.",
        "Believe you can and you're halfway there.",
        "The only way to do great work is to love what you do.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "Success is not how high you have climbed, but how you make a positive difference to the world."]
        const randomIndex = Math.floor(Math.random() * motivations.length);
        const randomMotivation = motivations[randomIndex];
        res.status(200).send(randomMotivation);
      },
    getGoal: (req, res) => {
         res.status(200).send(dailyGoal);
     },
     createGoal: (req, res) => {
        dailyGoal = req.body.goalInput;
        res.status(200).send('Goal updated!');
},
postAffirmation: (req, res) => {
      const { name } = req.body;
      const affirmation = `You are doing great, ${name}! Keep up the good work!`;
      res.json(affirmation);
    },
  };


    


