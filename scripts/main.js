const form = document.getElementById('form');
const submit = document.getElementById('submit');
const weekBtn = document.getElementById('weekButton');
const summerWeek = document.getElementById('summerWeek');
const winterWeek = document.getElementById('winterWeek');
const calorie = document.getElementById('calorie')

function harisBenedict (activLevel, age, gender, tall, weight ) {
  if(gender === "female") {
    switch(activLevel) {
      case "Mažas aktyvumas":
        return 1.3*(655.1 + (9.563 * weight) + (1.850 * tall) - (4.676 * age))
      case "Vidutinis aktyvumas":
        return 1.5*(655.1 + (9.563 * weight) + (1.850 * tall) - (4.676 * age))
      case "Didelis aktyvumas":
        return 1.8*(655.1 + (9.563 * weight) + (1.850 * tall) - (4.676 * age))
    } 
  } else {
    switch(activLevel) {
      case "Mažas aktyvumas":
        return 1.3*(66.5 + (13.75 * weight) + (5.003 * tall) - (6.75 * age))
      case "Vidutinis aktyvumas":
        return 1.5*(66.5 + (13.75 * weight) + (5.003 * tall) - (6.75 * age))
      case "Didelis aktyvumas":
        return 1.8*(66.5 + (13.75 * weight) + (5.003 * tall) - (6.75 * age))
    } 
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min)
}

form.style.display = 'none';
calorie.style.display = 'none';
summerWeek.style.display = 'none';
winterWeek.style.display = 'none';
weekBtn.addEventListener('click', () => {
  weekBtn.style.display = 'none';
  if (form.style.display === 'none') {
        form.style.display = 'block';
        weekBtn.style.display = 'none';
  } else {
        form.style.display = 'none';
    }
});

form.addEventListener('submit', callbackFunction);
  function callbackFunction(event) {
    form.style.display = 'none';
    summerWeek.style.display = 'block';
    winterWeek.style.display = 'block'
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const formDataObj = Object.fromEntries(myFormData.entries());
    const calories = harisBenedict( Object.values(formDataObj)[4], 
                                    Object.values(formDataObj)[1], 
                                    Object.values(formDataObj)[0], 
                                    Object.values(formDataObj)[2], 
                                    Object.values(formDataObj)[3] );
    calorie.style.display = 'block';
    calorie.textContent = `Rekomenduojama suvartoti ne mažiau, kaip ${Math.floor(calories)} kcal per dieną`;
    summerWeek.addEventListener('click', () => {
      summerWeek.style.display = 'none';
      winterWeek.style.display = 'none';
    serverDataDrinks()
      function serverDataDrinks() {fetch('http://localhost:3000/meal')
        .then ((res) => res.json())
        .then ((data) => {
          const weekdayArray = ["Pirmadienis", 
                                "Antradienis", 
                                "Trečiadienis", 
                                "Ketvirtadienis", 
                                "Penktadienis", 
                                "Šeštadienis", 
                                "Sekmadienis"]
          const wrapper = document.getElementById("wrapper")
          weekdayArray.forEach(elem => {
            const weekDay = document.createElement('div')
            weekDay.classList.add("div-wrapper")
            wrapper.appendChild(weekDay)
            weekDay.innerText = elem
            
            const mealArr = ['drink', 'starter', 'bread', 'mealS', 'desert'];
        
            mealArr.forEach((mealEl, index) => {
            const listItem = document.createElement('li')
            let min = 0;
            let max = 7;
            if(index < 4) {
            let random = getRandomInt(min + (index * 7), max + (index * 7))
            console.log(random);          
            let Calorie100g = Number(data[random].calorie)          
            let name = data[random][mealEl]
            let count = 0
            let Arr = []
            do {
              Calorie100g += Calorie100g;
              count++;
              let textToArr = `${name}, `+ (count * 100) +` gramų`
              const lastEl = Arr.push(textToArr);         
            } while (Calorie100g < calories/5);
            listItem.innerText = Arr[Arr.length-1]
            weekDay.appendChild(listItem);
            } else {
              let random = getRandomInt(35, 42)
            console.log(random);          
            let Calorie100g = Number(data[random].calorie)          
            let name = data[random][mealEl]
            let count = 0
            let Arr = []
            do {
              Calorie100g += Calorie100g;
              count++;
              let textToArr = `${name}, `+ (count * 100) +` gramų`
              const lastEl = Arr.push(textToArr);         
            } while (Calorie100g < calories/5);
            listItem.innerText = Arr[Arr.length-1]
            weekDay.appendChild(listItem);
            }              
            }
                    
          )

        })  
      }
      );    
    } 
    })

    winterWeek.addEventListener('click', () => {
      summerWeek.style.display = 'none';
      winterWeek.style.display = 'none';
    serverDataDrinks()
      function serverDataDrinks() {fetch('http://localhost:3000/meal')
        .then ((res) => res.json())
        .then ((data) => {
          const weekdayArray = ["Pirmadienis", 
                                "Antradienis", 
                                "Trečiadienis", 
                                "Ketvirtadienis", 
                                "Penktadienis", 
                                "Šeštadienis", 
                                "Sekmadienis"]
          const wrapper = document.getElementById("wrapper")
          weekdayArray.forEach(elem => {
            const weekDay = document.createElement('div')
            weekDay.classList.add("div-wrapper")
            wrapper.appendChild(weekDay)
            weekDay.innerText = elem
            
            const mealArr = ['drink', 'starter', 'bread', 'mealW', 'desert'];
        
            mealArr.forEach((mealEl, index) => {
            const listItem = document.createElement('li')
            let min = 0;
            let max = 7;
            if(index < 3) {
            let random = getRandomInt(min + (index * 7), max + (index * 7))
            console.log(random);          
            let Calorie100g = Number(data[random].calorie)          
            let name = data[random][mealEl]
            let count = 0
            let Arr = []
            do {
              Calorie100g += Calorie100g;
              count++;
              let textToArr = `${name}, `+ (count * 100) +` gramų`
              const lastEl = Arr.push(textToArr);         
            } while (Calorie100g < calories/5);
            listItem.innerText = Arr[Arr.length-1]
            weekDay.appendChild(listItem);
            } else {
              let random = getRandomInt(( min + (index + 1) * 7), max + (index + 1) * 7)
            console.log(random);          
            let Calorie100g = Number(data[random].calorie)          
            let name = data[random][mealEl]
            let count = 0
            let Arr = []
            do {
              Calorie100g += Calorie100g;
              count++;
              let textToArr = `${name}, `+ (count * 100) +` gramų`
              const lastEl = Arr.push(textToArr);         
            } while (Calorie100g < calories/5);
            listItem.innerText = Arr[Arr.length-1]
            weekDay.appendChild(listItem);
            }              
            }
                    
          )

        })  
      }
      );

    } 
    })


  }
