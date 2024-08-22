fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => dataUI(data));

function dataUI(fetchData) {
  const cardWrapper = document.querySelector(".card-wrapper");
  let result = fetchData.results[0];
  console.log(result);

  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
  <div class='card-head'>
    <img src=${result.picture.large} alt='jpg'/>
    <div class='card-head__title'>
      <h4><span class='subtitle'>Ismi:</span> ${result.name.first}</h4>
      <h4><span class='subtitle'>Familiyasi:</span> ${result.name.last}</h4>
      <h4><span class='subtitle'>Yoshi:</span> ${result.dob.age}</h4>
    </div>
  </div>
  <hr/>
  <div class='card-body'>
    <h3>Qoshimcha Malumotlar</h3>
    <div class='card-body__description'>
      <h5><span class='subtitle'>Email Manzili:</span> ${result.email}</h5>
      <h5><span class='subtitle'>Jinsi:</span> ${result.gender}</h5>
      <h5><span class='subtitle'>Yashash Joyi:</span>${result.location.country}, ${result.location.city}, ${result.location.state}</h5>
      <h5><span class='subtitle'>Telefon Raqami:</span> ${result.cell}</h5>
      <h5><span class='subtitle'>Foydalanuvchi Nomi:</span> ${result.login.username}</h5>
    </div>
  </div>
  `;

  cardWrapper.appendChild(card);
}

const clickMe = () => {
  let title = document.querySelector(".title");
  title.textContent = "Bu ismingizga rahat olasiz!";
};
