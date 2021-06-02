//* On Init
let user;

getUser();

function getUser() {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((body) => {
      user = body.results[0];

      const spinner = document.getElementById("spinner");
      spinner.classList.add("hidden");

      setUser(user);
    });
}

// * Buttons
const generateUserBtn = document.getElementById("generateUserBtn");
generateUserBtn.onclick = () => getUser();

//* Events

//* Functions

function setUser(user) {
  const cardBody = document.querySelector(".card-body");
  cardBody.classList.remove("hidden");

  const avatarImgContainer = document.getElementById("avatarImgContainer");
  avatarImgContainer.innerHTML = `
    <img
      src=${user.picture.large}
    />
  `;

  const username = document.getElementById("username");
  username.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;

  const location = document.getElementById("location");
  location.innerText = `${user.location.city}, ${user.location.state}`;

  const gender = document.getElementById("gender");
  gender.innerText = user.gender[0].toUpperCase() + user.gender.slice(1);

  const birthday = document.getElementById("birthday");
  const birthdayDate = new Date(user.dob.date);
  birthday.innerText = `${getOrdinalSuffix(
    birthdayDate.getDate()
  )} ${birthdayDate.toLocaleString("default", {
    month: "long",
  })} ${birthdayDate.getFullYear()}`;

  const email = document.getElementById("email");
  email.innerText = user.email;
}

function getOrdinalSuffix(i) {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return i + "st";
  }
  if (j == 2 && k != 12) {
    return i + "nd";
  }
  if (j == 3 && k != 13) {
    return i + "rd";
  }
  return i + "th";
}
