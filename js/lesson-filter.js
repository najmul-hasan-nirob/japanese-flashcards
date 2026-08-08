// =====================================================
// Lesson filter enhancement
// =====================================================
// Keeps the existing lesson data/rendering, but changes
// the Lesson filter so Lesson 1 is selected by default
// and adds an "All Lesson" checkbox.
// =====================================================

document.addEventListener("DOMContentLoaded", () => {

    const oldLessonBtn = document.getElementById("lessonBtn");
    const oldLessonPanel = document.getElementById("lessonPanel");

    if (!oldLessonBtn || !oldLessonPanel || typeof lessonsData === "undefined") {
        return;
    }

    // Replace the old lesson controls so the original
    // multiselect listeners cannot force one lesson to remain selected.
    const lessonBtn = oldLessonBtn.cloneNode(true);
    const lessonPanel = oldLessonPanel.cloneNode(false);

    oldLessonBtn.replaceWith(lessonBtn);
    oldLessonPanel.replaceWith(lessonPanel);

    lessonBtn.textContent = "Lesson 1";
    lessonBtn.setAttribute("aria-expanded", "false");

    const allLabel = document.createElement("label");
    const allCheckbox = document.createElement("input");
    allCheckbox.type = "checkbox";
    allCheckbox.value = "all";
    allCheckbox.checked = false;
    allLabel.appendChild(allCheckbox);
    allLabel.appendChild(document.createTextNode(" All Lesson"));
    lessonPanel.appendChild(allLabel);

    sortedLessonKeys().forEach(key => {
        const label = document.createElement("label");
        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.value = key;
        checkbox.checked = key === "lesson1";

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(" " + lessonLabel(key)));
        lessonPanel.appendChild(label);
    });

    function lessonCheckboxes() {
        return Array.from(lessonPanel.querySelectorAll("input[type=checkbox][value^='lesson']"));
    }

    function selectedLessons() {
        return lessonCheckboxes().filter(cb => cb.checked).map(cb => cb.value);
    }

    function updateLessonLabel() {
        const boxes = lessonCheckboxes();
        const selected = selectedLessons();

        if (selected.length === boxes.length) {
            lessonBtn.textContent = "All lessons";
        } else if (selected.length === 0) {
            lessonBtn.textContent = "None";
        } else {
            lessonBtn.textContent = selected
                .map(key => lessonLabel(key))
                .join(" + ");
        }
    }

    function renderLessons() {
        const grid = document.getElementById("grid");
        const mode = document.getElementById("mode");
        const typePanel = document.getElementById("typePanel");

        if (!grid || !mode || !typePanel) return;

        const selected = selectedLessons();
        const selectedTypes = Array.from(
            typePanel.querySelectorAll("input[type=checkbox]:checked")
        ).map(cb => cb.value);

        let cards = [];

        selected.forEach(key => {
            cards = cards.concat(
                buildLessonCards(key).filter(card => selectedTypes.includes(card.type))
            );
        });

        if (mode.value === "shuffle") {
            shuffle(cards);
        }

        grid.innerHTML = "";
        const frag = document.createDocumentFragment();

        cards.forEach(item => {
            const card = document.createElement("div");
            card.className = "card" + (item.type === "grammar" ? " grammar" : "");

            const frontText = showJapaneseFirst ? item.jp : item.en;
            const backText = showJapaneseFirst ? item.en : item.jp;
            const tag = `${item.lesson} · ${item.type === "grammar" ? "Grammar" : "Vocabulary"}`;

            card.innerHTML = `
                <div class="inner">
                    <div class="front"><span class="lesson-tag">${tag}</span><div>${frontText}</div></div>
                    <div class="back"><span class="lesson-tag">${tag}</span><div>${backText}</div></div>
                </div>
            `;

            card.addEventListener("click", () => {
                card.classList.toggle("flipped");
            });

            frag.appendChild(card);
        });

        grid.appendChild(frag);
    }

    function togglePanel(e) {
        e.stopPropagation();
        const isOpen = lessonPanel.classList.contains("open");

        document.querySelectorAll(".multiselect-panel.open").forEach(panel => {
            panel.classList.remove("open");
        });

        if (!isOpen) {
            lessonPanel.classList.add("open");
            lessonBtn.setAttribute("aria-expanded", "true");
        } else {
            lessonBtn.setAttribute("aria-expanded", "false");
        }
    }

    lessonBtn.addEventListener("click", togglePanel);

    allCheckbox.addEventListener("change", () => {
        lessonCheckboxes().forEach(cb => {
            cb.checked = allCheckbox.checked;
        });

        updateLessonLabel();
        renderLessons();
    });

    lessonCheckboxes().forEach(cb => {
        cb.addEventListener("change", () => {
            const boxes = lessonCheckboxes();
            allCheckbox.checked = boxes.length > 0 && boxes.every(box => box.checked);

            updateLessonLabel();
            renderLessons();
        });
    });

    document.addEventListener("click", e => {
        if (!lessonPanel.contains(e.target) && e.target !== lessonBtn) {
            lessonPanel.classList.remove("open");
            lessonBtn.setAttribute("aria-expanded", "false");
        }
    });

    // Re-render after the existing page controls have handled their events.
    document.getElementById("mode")?.addEventListener("change", () => {
        renderLessons();
    });

    document.getElementById("shuffleBtn")?.addEventListener("click", () => {
        renderLessons();
    });

    document.getElementById("typePanel")?.addEventListener("change", () => {
        renderLessons();
    });

    document.getElementById("direction")?.addEventListener("click", () => {
        renderLessons();
    });

    updateLessonLabel();
    renderLessons();
});
