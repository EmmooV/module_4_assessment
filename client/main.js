


const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
           
    });
};

complimentBtn.addEventListener('click', getCompliment)





const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
    .then(res =>{
        const data= res.data;
        alert(data);
    });
};
fortuneBtn.addEventListener('click', getFortune);



const motivationBtn = document.getElementById("motivationButton");
const getMotivation = () => {
    axios.get("http://localhost:4000/api/motivation")
    .then(res =>{
        const data= res.data;
        alert(data);
    });
};
motivationBtn.addEventListener('click', getMotivation);

const affirmationForm = document.getElementById("affirmationForm");
const affirmationMessage = document.getElementById("affirmationMessage");

const getAffirmation = async (name) => {
  try {
    const response = await axios.post("http://localhost:4000/api/affirmations", { name });
    const affirmation = response.data;
    affirmationMessage.innerText = affirmation;
  } catch (error) {
    console.error(error);
  }
};

affirmationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nameInput = document.getElementById("nameInput");
  const name = nameInput.value;
  getAffirmation(name);
});




const submitGoalButton = document.getElementById("submitGoalButton");


function handleGoalClick() {
  const goalInput = document.getElementById("goalInput");
  const goal = goalInput.value;
  alert(`Goal: ${goal}`);
}
submitGoalButton.addEventListener("click", handleGoalClick);




