const GAME_VERSION = "1.2.0";

async function checkForUpdates() {
try {
const response = await fetch(
"./version.json?t=" + Date.now(),
{ cache: "no-store" }
);

```
    const data = await response.json();

    if (data.version !== GAME_VERSION) {
        const text =
            "Có bản cập nhật mới!\n\n" +
            "Phiên bản hiện tại: " + GAME_VERSION + "\n" +
            "Phiên bản mới: " + data.version + "\n\n" +
            data.message;

        if (data.forceUpdate) {
            alert(text);
            location.reload();
            return;
        }

        if (confirm(text + "\n\nCập nhật ngay?")) {
            location.reload();
        }
    }
} catch (e) {
    console.log("Không thể kiểm tra cập nhật:", e);
}
```

}

window.addEventListener("load", () => {
checkForUpdates();

```
setInterval(() => {
    checkForUpdates();
}, 30000);
```

});
