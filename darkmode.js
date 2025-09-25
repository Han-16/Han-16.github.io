const button = document.getElementById("darkModeToggle");

const moonIcon = `
  <svg viewBox="0 0 24 24" width="24" height="24">
    <path d="M21 12.79A9 9 0 1 1 11.21 3
             a7 7 0 0 0 9.79 9.79Z"
          fill="currentColor"/>
  </svg>
`;

const sunIcon = `
  <svg viewBox="0 0 24 24" width="24" height="24">
    <circle cx="12" cy="12" r="5" fill="currentColor"/>
    <g stroke="currentColor" stroke-width="2">
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </g>
  </svg>
`;

// 초기 상태 (라이트 모드 → 달 아이콘)
button.innerHTML = moonIcon;

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    button.innerHTML = sunIcon;
  } else {
    button.innerHTML = moonIcon;
  }
});
