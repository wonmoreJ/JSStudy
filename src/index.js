/*
async function getImage() {
  const res = await fetch("https://animal-api-two.vercel.app/");
  const data = await res.json();
  const content = document.querySelector(".content");
  let arr = data.photos;
  let imgAdd = "";
  arr.forEach((map) => {
    Object.keys(map).forEach((key) => {
      if (key === "url") {
        imgAdd = imgAdd.concat(`<img
                                  src="${map[key]}"
                                />`);
      }
    });
  });
  content.innerHTML = imgAdd;
}
getImage();  
*/

//강의코드
const API_URL = "https://animal-api-two.vercel.app/";
const $content = document.querySelector("div.content");
let template = [];

let getData = async () => {
  let res = await fetch(API_URL);
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

getData();

/*
  우선 함수차이 : 일반함수와 애로수함수 this와 호이스팅이 차이 나는걸로 알고있는데 가독성면에서 훨씬 강의코드가 좋은것 같다
  알아본 결과 속도차이는 없고, this의 사용에따라서 달라진다고한다. callBack은 애로우함수를 많이씀 

  그다음 url 가져오는부분 하.... 뭐한건지를 모르겠네
  배열의 객체를 map으로 착각해서 접근을 저렇게 시작한거같다. 객체면 obj.url 하면 끝날걸
  
  하나 궁금한건 let template = [] 를 왜 배열로 선언했을까
*/
