/*
async function getImage() {
  const res = await fetch("https://animal-api-two.vercel.app/");
  const data = await res.json();
  const content = document.querySelector(".content");
  let arr = data.photos;
  let imgAdd = "";

  const reulstArr = arr.filter((idx) => idx.name === "koala");
  console.log(reulstArr);

  reulstArr.forEach((obj) => {
    imgAdd = imgAdd.concat(`<img
                                    src="${obj.url}"
                                  />`);
  });

  content.innerHTML = imgAdd;
}

getImage();
*/

//강의코드
const API_URL = "https://animal-api-two.vercel.app/";
const $content = document.querySelector("div.content");
let template = [];

let getData = async (name) => {
  let res = await fetch(`${API_URL}${name}`);
  try {
    if (res) {
      let data = await res.json();
      data.photos.forEach((obj) => {
        template += `<img src=${obj.url}></img>`;
      });
      console.log(template);
      $content.innerHTML = template;
    }
  } catch (error) {
    console.log(error);
  }
};

getData("koala");

/*
  아직 애로우펑션이 익숙하지 않은것 같다.
  API에서 응답을 저렇게 해줄줄은 몰라서 파라미터로 넣는건 생각조차 못했다. 다음부터는 한번씩 해보도록
*/
