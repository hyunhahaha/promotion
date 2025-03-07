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

ScrollTrigger.create({
  trigger: ".section01",  // 트리거 요소
  start: "1px top",  // 스크롤 시작 위치
  end: "300px top",  // 끝 위치
  animation: gsap.fromTo(
    ".text_01", 
    {
      filter: 'blur(20px)',  // 초기 상태: 블러
      x: '24%',  // 초기 상태: 오른쪽으로 밀림
      opacity: 0,  // 초기 상태: 완전히 투명
      visibility: 'hidden',  // 초기 상태: 숨겨짐
    }, 
    {
      filter: 'blur(0px)',  // 끝 상태: 블러 해제
      x: '0%',  // 끝 상태: 원래 위치로
      opacity: 1,  // 끝 상태: 불투명
      visibility: 'visible',  // 끝 상태: 보임
      duration: .2  // 애니메이션 지속 시간
    }
  ),
  // markers: true,
  scrub: true,  // 스크롤에 맞춰 애니메이션 진행
});



ScrollTrigger.create({
  trigger: ".section01",  // 트리거 요소
  start: "1px top",  // 스크롤 시작 위치
  end: "300px top",  // 끝 위치
  animation: gsap.fromTo(
    ".text_02", 
    {
      filter: 'blur(20px)',  // 초기 상태: 블러
      x: '24%',  // 초기 상태: 오른쪽으로 밀림
      opacity: 0,  // 초기 상태: 완전히 투명
      visibility: 'hidden',  // 초기 상태: 숨겨짐
    }, 
    {
      filter: 'blur(0px)',  // 끝 상태: 블러 해제
      x: '0%',  // 끝 상태: 원래 위치로
      opacity: 1,  // 끝 상태: 불투명
      visibility: 'visible',  // 끝 상태: 보임
      duration: .2  // 애니메이션 지속 시간
    }
  ),
  // markers: true,
  scrub: true,  // 스크롤에 맞춰 애니메이션 진행
});



ScrollTrigger.create({
  trigger: ".section01",  // 트리거 요소
  start: "1px top",  // 스크롤 시작 위치
  end: "300px top",  // 끝 위치
  animation: gsap.fromTo(
    ".text_03", 
    {
      filter: 'blur(20px)',  // 초기 상태: 블러
      x: '-24%',  // 초기 상태: 오른쪽으로 밀림
      opacity: 0,  // 초기 상태: 완전히 투명
      visibility: 'hidden',  // 초기 상태: 숨겨짐
    }, 
    {
      filter: 'blur(0px)',  // 끝 상태: 블러 해제
      x: '0%',  // 끝 상태: 원래 위치로
      opacity: 1,  // 끝 상태: 불투명
      visibility: 'visible',  // 끝 상태: 보임
      duration: .2  // 애니메이션 지속 시간
    }
  ),
  // markers: true,
  scrub: true,  // 스크롤에 맞춰 애니메이션 진행
});



ScrollTrigger.create({
  trigger: ".section01",  // 트리거 요소
  start: "1px top",  // 스크롤 시작 위치
  end: "300px top",  // 끝 위치
  animation: gsap.fromTo(
    ".text_04", 
    {
      filter: 'blur(20px)',  // 초기 상태: 블러
      x: '24%',  // 초기 상태: 오른쪽으로 밀림
      opacity: 0,  // 초기 상태: 완전히 투명
      visibility: 'hidden',  // 초기 상태: 숨겨짐
    }, 
    {
      filter: 'blur(0px)',  // 끝 상태: 블러 해제
      x: '0%',  // 끝 상태: 원래 위치로
      opacity: 1,  // 끝 상태: 불투명
      visibility: 'visible',  // 끝 상태: 보임
      duration: .2  // 애니메이션 지속 시간
    }
  ),
  // markers: true,
  scrub: true,  // 스크롤에 맞춰 애니메이션 진행
});





ScrollTrigger.create({
  trigger: ".section01",
  start: "660px top",  // 스크롤 시작 위치
  end: "1000px top",  // 끝 위치
  markers:true,
  animation: gsap.to('.loading_box', { 
    scale: 1,              // 로딩 박스의 스케일을 1로 설정
    ease: "none",          // 애니메이션 속도
  }),
  scrub: true,
});







markers();
