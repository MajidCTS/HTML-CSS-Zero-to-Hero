document.querySelectorAll(".before-after").forEach(container => {

    const wrapper = container.querySelector(".after-wrapper");
    const handle = container.querySelector(".handle");

    let dragging = false;


    handle.addEventListener("mousedown", () => {
        dragging = true;
        e.preventDefault(); // جلوگیری از انتخاب متن
    });


    document.addEventListener("mouseup", () => {
        dragging = false;
    });


    document.addEventListener("mousemove", e => {

        if (!dragging) return;

        const rect = container.getBoundingClientRect();

        let position = e.clientX - rect.left;

        if (position < 0)
            position = 0;

        if (position > rect.width)
            position = rect.width;


        let percent = (position / rect.width) * 100;


        wrapper.style.width = percent + "%";
        handle.style.left = percent + "%";

    });

});