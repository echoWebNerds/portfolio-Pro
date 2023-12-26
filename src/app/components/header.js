import "./header.css";
export function siteHeader(test){
document.querySelector('#header').innerHTML = `
<div class="header">
<div class="frame-40">
  <svg
    class="logo"
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 0.5H8V4.5H4H0V8.5V12.5V16.5H4H8V12.5H12H16V8.5V4.5V0.5H12ZM4 12.5H8V8.5H12V4.5H8V8.5H4V12.5Z"
      fill="white"
    />
  </svg>

  <div class="elias">Elias</div>
</div>
<div class="frame-1">
  <div class="header-link">
    <div class="div">#</div>
    <div class="home">home</div>
  </div>
  <div class="header-link">
    <div class="div2">#</div>
    <div class="home2">works</div>
  </div>
  <div class="header-link">
    <div class="div2">#</div>
    <div class="home2">about-me</div>
  </div>
  <div class="header-link">
    <div class="div2">#</div>
    <div class="home2">contacts</div>
  </div>
  <div class="language-switcher">
    <div class="en">EN</div>
    <svg
      class="group-58"
      width="10"
      height="7"
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.707107"
        y1="1.29289"
        x2="5.70711"
        y2="6.29289"
        stroke="#ABB2BF"
        stroke-width="2"
      />
      <line
        x1="4.29289"
        y1="6.29289"
        x2="9.29289"
        y2="1.29289"
        stroke="#ABB2BF"
        stroke-width="2"
      />
    </svg>

    <div class="frame-59">
      <div class="ru">RU</div>
      <div class="ua">UA</div>
    </div>
  </div>
</div>
</div>
`
}