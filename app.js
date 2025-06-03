
async function loadSignals() {
    const crypto = await fetch('signals/crypto.json').then(r => r.json()).catch(() => []);
    const stocks = await fetch('signals/stocks.json').then(r => r.json()).catch(() => []);
    renderSignals('crypto-signals', crypto);
    renderSignals('stock-signals', stocks);
}

function renderSignals(containerId, signals) {
    const el = document.getElementById(containerId);
    if (!signals.length) {
        el.innerHTML = "<p>No signals available.</p>";
        return;
    }
    el.innerHTML = signals.map(s => `
        <div class="signal">
            <strong>${s.asset}</strong><br/>
            Entry: ${s.entry}<br/>
            SL: ${s.sl} – TP: ${s.tp}
        </div>
    `).join("");
}

loadSignals();
