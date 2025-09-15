1)	feature/alerts-and-modal 브랜치 생성
2)	feature/alerts-and-modal 브랜치에서 하기 소스코드 작성

index.html (병합 시</main> 바로 위에 추가되어야 함)
<!-- ... </main> 바로 위에 추가되어야 함... -->

    <!-- Custom Modal -->
    <div id="modal" class="modal" aria-hidden="true" role="dialog" aria-labelledby="modal-title">
      <div class="modal__backdrop" data-close></div>
      <div class="modal__panel" role="document">
        <header class="modal__header">
          <h3 id="modal-title">알림</h3>
          <button class="modal__close" data-close aria-label="Close">×</button>
        </header>
        <div class="modal__body">
          <p>이것은 커스텀 모달입니다. ESC 또는 바깥을 누르면 닫혀요.</p>
        </div>
        <footer class="modal__footer">
          <button class="btn" data-close>확인</button>
        </footer>
      </div>
    </div>

styles.css (병합 시 파일 맨 아래에 추가)
/* === Modal === */
.modal { position: fixed; inset: 0; display: none; }
.modal.is-open { display: block; }
.modal__backdrop { position: absolute; inset: 0; background: rgba(0,0,0,.5); }
.modal__panel {
  position: relative; z-index: 1; max-width: 520px; margin: 10vh auto; background: #fff;
  border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,.25);
}
.modal__header, .modal__footer { padding: 12px 16px; background: #f6f6f6; }
.modal__body { padding: 16px; }
.modal__close { border: none; background: transparent; font-size: 20px; cursor: pointer; }

app.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("MyApp loaded: feature/alerts-and-modal");

  const btnAlert = document.getElementById("btn-alert");
  const btnModal = document.getElementById("btn-modal");
  const modal = document.getElementById("modal");

  // 버튼 활성화 스타일
  [btnAlert, btnModal].forEach(btn => {
    if (btn) {
      btn.style.cursor = "pointer";
      btn.style.opacity = "1";
    }
  });

  // 경고창 & 확인창
  btnAlert?.addEventListener("click", () => {
    alert("경고창입니다!");
    const yes = confirm("확인창: 계속 진행할까요?");
    console.log("confirm:", yes);
  });

  // 모달 열기/닫기
  const openModal = () => modal?.classList.add("is-open");
  const closeModal = () => modal?.classList.remove("is-open");

  btnModal?.addEventListener("click", openModal);
  modal?.addEventListener("click", (e) => {
    if (e.target.matches("[data-close]")) closeModal();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});


