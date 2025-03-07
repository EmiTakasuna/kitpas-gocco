/*ローディング表示時間*/
$(function () {
    function end_loader() {
      $('.loader').fadeOut(800);
    }
    $(window).on('load', function () {
      setTimeout(function () {
        end_loader();
      }, 1500)
    })
  })

/*色がついていくアニメーション*/
const shape01 = document.querySelector('.loader__shape01');
const shape02 = document.querySelector('.loader__shape02');
const shape03 = document.querySelector('.loader__shape03');
const shape04 = document.querySelector('.loader__shape04');
const shape05 = document.querySelector('.loader__shape05');
const shape06 = document.querySelector('.loader__shape06');
const shape07 = document.querySelector('.loader__shape07');
const shape08 = document.querySelector('.loader__shape08');
const shape09 = document.querySelector('.loader__shape09');

gsap.set('.fv_shape', {
  opacity: 0,
});
gsap.set('.fv_illust', {
  opacity: 0,
});
gsap.set('.fv_illust-girl', {
  opacity: 0,
});
gsap.set('.fv_illust-balloon', {
  opacity: 0,
});


const TL = gsap.timeline();
TL.to(shape01, { fill: "#0096D8", duration: 0.15})
  .to(shape02, { fill: "#007257", duration: 0.15})
  .to(shape03, { fill: "#082C4C", duration: 0.15})
  .to(shape04, { fill: "#FFD400", duration: 0.15})
  .to(shape05, { fill: "#E63500", duration: 0.15})
  .to(shape06, { fill: "#0096D8", duration: 0.15})
  .to(shape07, { fill: "#082C4C", duration: 0.15})
  .to(shape08, { fill: "#FF8A95", duration: 0.15})
  .to(shape09, { fill: "#FFD400", duration: 0.15})
  .to('.fv_shape',
    {
      opacity: 1,
      duration: 0.5,
      delay: 4,
    }
  )
  .to('.fv_shape',
    {
      y: -2,
      rotate: 6,
      duration: 0.1,
    }
  )
  .to('.fv_shape',
    {
      y: 0,
      rotate: 0,
      duration: 0.1,
    }
  )
  .to('.fv_shape',
    {
      y: 0,
      rotate: -6,
      duration: 0.1,
    }
  )
  .to('.fv_shape',
    {
      y: -2,
      rotate: 0,
      duration: 0.1,
    }
  )
  .to('.fv_shape',
    {
      y: -2,
      rotate: 6,
      duration: 0.1,
    }
  )
  .to('.fv_shape',
    {
      y: 0,
      rotate: 0,
      duration: 0.1,
    }
  )
  .to('.fv_illust',
    {
      opacity: 1,
    }
  )
  .to('.fv_illust-girl',
    {
      opacity: 1,
    }
  )
  .to('.fv_illust-balloon',
    {
      opacity: 1,
      duration: 0.8,
      keyframes: {
        x: [0, 0, 0, 0, 0],
        y: [0, -20, 0, 0, 0],
        ease: "power1.inOut"
      },
    }
  );


