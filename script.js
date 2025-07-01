// 1. 상단 검색창 - 엔터 키 입력 시 알림
const searchInput = document.querySelector('.search-user input');
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const keyword = searchInput.value.trim();
    if (keyword !== '') {
      alert(`'${keyword}' 로 검색합니다.`);
      searchInput.value = '';
    }
  }
});

// 2. 메인 카드 버튼 클릭 시 알림
const cardButtons = document.querySelectorAll('.card-section .card button');
cardButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const label = btn.innerText;
    alert(`${label} 섹션으로 이동합니다.`);
  });
});

// 4. 캐릭터 선택 시 이름 알림
const characters = document.querySelectorAll('.character-list .char');
characters.forEach((char) => {
  char.addEventListener('click', () => {
    const name = char.innerText;
    alert(`"${name}" 캐릭터를 선택하셨습니다.`);
  });
});

// 5. (보너스) 카드에 마우스 올릴 때 배경색 전환
const cards = document.querySelectorAll('.card-section .card');
cards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'background-color 0.3s';
    card.style.backgroundColor = '#FFD700';
  });
  card.addEventListener('mouseleave', () => {
    card.removeAttribute('style'); // 원래 색으로 복귀
  });
});



window.onload = () => {
  const list = document.querySelector('.character-list');
  
  // 요소가 존재하지 않으면 중단
  if (!list) {
    console.error("'.character-list'를 찾을 수 없습니다.");
    return;
  }

  // 요소 복제하여 자연스러운 반복
  list.innerHTML += list.innerHTML;

  let offset = 0;

  function animate() {
    offset -= 1;
    list.style.top = offset + 'px';

    // 높이 절반 이상 올라가면 다시 시작
    if (Math.abs(offset) >= list.scrollHeight / 2) {
      offset = 0;
    }

    requestAnimationFrame(animate);
  }

  animate();
};







