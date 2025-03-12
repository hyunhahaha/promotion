import "../lib/smooth";
import "./styles/style.css";
import { markers } from "../lib/smooth";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Draggable } from "gsap/Draggable";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger);
// ,Draggable,MotionPathPlugin




//텍스트 샤라락 블러

// ScrollTrigger.create({
//   trigger: ".section01",  // 트리거 요소
//   start: "1px top",  // 스크롤 시작 위치
//   end: "300px top",  // 끝 위치
//   animation: gsap.fromTo(
//     ".text_01", 
//     {
//       filter: 'blur(20px)',  // 초기 상태: 블러
//       x: '24%',  // 초기 상태: 오른쪽으로 밀림
//       opacity: 0,  // 초기 상태: 완전히 투명
//       visibility: 'hidden',  // 초기 상태: 숨겨짐
//     }, 
//     {
//       filter: 'blur(0px)',  // 끝 상태: 블러 해제
//       x: '0%',  // 끝 상태: 원래 위치로
//       opacity: 1,  // 끝 상태: 불투명
//       visibility: 'visible',  // 끝 상태: 보임
//       duration: .2  // 애니메이션 지속 시간
//     }
//   ),
//   // markers: true,
//   scrub: true,  // 스크롤에 맞춰 애니메이션 진행
// });


//최상단 텍스트
const 섹션1 = gsap.timeline();

섹션1.from('.t_boxes',{y:70,opacity:0})


ScrollTrigger.create({
  trigger: ".section01",
  start: "top top",  // 스크롤 시작 위치
  end: "800px center",  // 끝 위치
  // markers:true,
  animation: 섹션1,
  scrub: true,
});



//phone
const p_box = gsap.timeline();

p_box.from('.p_boxes1',{y:50,opacity:0})
p_box.from('.p_boxes2',{y:50,opacity:0})

ScrollTrigger.create({
  trigger: ".section01",
  start: "1000px top",  // 스크롤 시작 위치
  end: "2500px center",  // 끝 위치
  // markers:true,
  animation: p_box,
  scrub: true,
});




//로딩박스
ScrollTrigger.create({
  trigger: ".section01",
  start: "660px top",  // 스크롤 시작 위치
  end: "900px top",  // 끝 위치
  // markers:true,
  animation: gsap.to('.loading_box', { 
    width: 169,             // 로딩 박스의 스케일을 1로 설정
    ease: "none",          // 애니메이션 속도
  }),
  scrub: true,
});



//파란박스
const 현하 = gsap.timeline();

현하.from('.boxes',{stagger:0.1,y:100,opacity:0})
현하.from('.s_boxes',{stagger:0.1,y:100,opacity:0})

ScrollTrigger.create({
  trigger: ".section02",
  start: "top top",  // 스크롤 시작 위치
  end: "1400px center",  // 끝 위치
  // markers:true,
  animation: 현하,
  scrub: 1,
});



//컨셉박스
const 컨셉박스 = gsap.timeline();

컨셉박스.from('.key',{stagger:0.1,y:40,opacity:0})

ScrollTrigger.create({
  trigger: ".section02",
  start: "1200px top",  // 스크롤 시작 위치
  end: "1300px center",  // 끝 위치
  // markers:true,
  animation: 컨셉박스,
  scrub: 8,
});



//섹션3 텍스트
const 섹션3 = gsap.timeline();

섹션3.from('.text03',{stagger:0.1,y:50,opacity:0})

ScrollTrigger.create({
  trigger: ".section03",
  start: "1200px top",  // 스크롤 시작 위치
  end: "1600px center",  // 끝 위치
  // markers:true,
  animation: 섹션3,
  scrub: 8,
});




//밀면서 나오는 구동
ScrollTrigger.create({
  trigger: ".section04",
  start: "5500px top",  // 스크롤 시작 위치
  end: "6000px center",  // 끝 위치
  // markers:true,
  animation: gsap.to('.number4', { 
    width: 1309,          // 로딩 박스의 스케일을 1로 설정
    ease: "none",          // 애니메이션 속도
  }),
  scrub: true,
});




//이미지 왼쪽에서 밀어서 나오는 구동
ScrollTrigger.create({
  trigger: ".section05",
  start: "-200px top",  // 스크롤 시작 위치
  end: "200px center",  // 끝 위치
  markers:true,
  animation: gsap.to('.left', { 
    width: 1454,
    ease: "none",          // 애니메이션 속도
  }),
  scrub: true,
});




//이미지 오른쪽에서 밀어서 나오는 구동
ScrollTrigger.create({
  trigger: ".section05",
  start: "-200px top",  // 스크롤 시작 위치
  end: "200px center",  // 끝 위치
  markers:true,
  animation: gsap.to('.right', { 
    width: 1454,
    ease: "none",          // 애니메이션 속도
  }),
  scrub: true,
});













markers();
