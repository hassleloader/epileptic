const vol = "1.0.3";
const lvl = "Lyashov Team";
const nameMod = "Radmir Classic";
const defaultAdditionalScripts = [{
    name: "Old Info Card",
    id: "oldInfoCard",
    filePath: "additional-scripts/oldInfoCard.js",
    enabled: true,
    is_hidden: false
}, {
    name: "PageSize",
    id: "pageSize",
    filePath: "additional-scripts/pageSize.js",
    enabled: true,
    is_hidden: true
}];

const oneasHud = {
    wantedAlwaysShowClass: "",
    hud: {
        data: {
            hudEl: null,
            hud_baseEl: null,
            hud_btEl: null,
            moneyEl: null,
            hpEl: {
                value: null,
                progress: null
            },
            armourEl: {
                value: null,
                progress: null,
                wrapper: null
            },
            hungerEl: {
                value: null,
                progress: null
            },
            freezeEl: {
                wrapper: null,
                value: null,
                progress: null
            },
            breathEl: {
                wrapper: null,
                value: null,
                progress: null
            },
            wanted: {
                wrapper: null,
                els: []
            },
            weaponEl: {
                ammoEl: null,
                icon: null
            },
            server: {
                wrapper: null,
                image: null
            },
            bonusEl: null,
            greenZoneEl: null
        },
        createHud(e) {
            this.data.hudEl = e;
            this.data.hud_baseEl = e.querySelector(".ONEAS-hud-info");
            this.data.moneyEl = e.querySelector("#ONEAS-cash__value");
            this.data.hud_btEl = e.querySelector(".ONEAS-hud-bottom");
            [this.data.hpEl.progress, this.data.hpEl.value] = [e.querySelector(".ONEAS-param__health .ONEAS-progress__value"), e.querySelector(".ONEAS-param__health .ONEAS-param__amount")];
            [this.data.armourEl.wrapper, this.data.armourEl.progress, this.data.armourEl.value] = [e.querySelector(".ONEAS-param__armour"), e.querySelector(".ONEAS-param__armour .ONEAS-progress__value"), e.querySelector(".ONEAS-param__armour .ONEAS-param__amount")];
            [this.data.breathEl.wrapper, this.data.breathEl.progress, this.data.breathEl.value] = [e.querySelector(".ONEAS-param__breath"), e.querySelector(".ONEAS-param__breath .ONEAS-progress__value"), e.querySelector(".ONEAS-param__breath .ONEAS-param__amount")];
            [this.data.hungerEl.progress, this.data.hungerEl.value] = [e.querySelector(".ONEAS-param__hunger .ONEAS-progress__value"), e.querySelector(".ONEAS-param__hunger .ONEAS-param__amount")];
            [this.data.wanted.wrapper, this.data.wanted.els] = [e.querySelector(".ONEAS-wanted"), e.querySelector(".ONEAS-wanted__row").children];
            this.data.weaponEl.ammoEl = e.querySelector(".ONEAS-weapon__ammo").children;
            this.data.server.wrapper = e.querySelector(".ONEAS-logo");
            this.data.server.image = this.data.server.wrapper.children[0];
            this.data.bonusEl = e.querySelector(".ONEAS-logo__bonus");
            this.data.greenZoneEl = e.querySelector(".ONEAS-green-zone");
            this.data.weaponEl.icon = e.querySelector(".ONEAS-weapon__icon");
            [this.data.freezeEl.wrapper, this.data.freezeEl.value, this.data.freezeEl.progress] = [e.querySelector(".ONEAS-param__freeze"), e.querySelector(".ONEAS-param__freeze .ONEAS-param__amount"), e.querySelector(".ONEAS-param__freeze .ONEAS-progress__value")];
        },
        onInfoChange(e, a) {
            if ((e == "show" || e == "showBars") && +a >= 1) {
                this.data.hudEl.style.display = "";
            }
            if ((e == "show" || e == "showBars") && +a == 0) {
                this.data.hudEl.style.display = "none";
            }
            if (e == "weapon") {
                if (assets.weapon[a]) {
                    this.data.weaponEl.icon.src = assets.weapon[a];
                }
                if (a == 0 | a == 24 | a == 25 | a == 31) {
                    document.querySelector(".ONEAS-weapon__icon").style.width = "";
                    document.querySelector(".ONEAS-weapon__icon").style.height = "";
                } else {
                    document.querySelector(".ONEAS-weapon__icon").style.width = "12.7778vh";
                    document.querySelector(".ONEAS-weapon__icon").style.height = "12.7778vh";
                }
                if (a == 0) {
                    document.querySelector(".ONEAS-weapon__icon").style.top = "9.7222vh";
                    document.querySelector(".ONEAS-weapon__icon").style.right = "4.0741vh";
                } else if (a == 0 | a == 24 | a == 25 | a == 31) {
                    document.querySelector(".ONEAS-weapon__icon").style.top = "";
                    document.querySelector(".ONEAS-weapon__icon").style.right = "";
                } else {
                    document.querySelector(".ONEAS-weapon__icon").style.top = "12.2222vh";
                    document.querySelector(".ONEAS-weapon__icon").style.right = "6.2963vh";
                }
            }
            if (e === "weapon" && a >= 16) {
                this.data.weaponEl.ammoEl[0].style.display = "";
                this.data.weaponEl.ammoEl[1].style.display = "";
            }
            if (e === "weapon" && a < 16) {
                this.data.weaponEl.ammoEl[0].style.display = "none";
                this.data.weaponEl.ammoEl[1].style.display = "none";
            }
            if (e == "showGreenZoneTab") {
                this.data.greenZoneEl.style.display = "";
            }
            if (e == "hideGreenZoneTab") {
                this.data.greenZoneEl.style.display = "none";
            }
            if (e == "health") {
                this.data.hpEl.progress.style.width = `${a}%`;
                this.data.hpEl.value.textContent = a;
            }
            if (e == "armour") {
                this.data.armourEl.progress.style.width = `${a}%`;
                this.data.armourEl.value.textContent = a;
            }
            if (e == "hunger") {
                this.data.hungerEl.progress.style.width = `${a}%`;
                this.data.hungerEl.value.textContent = a;
            }
            if (e == "breath") {
                this.data.breathEl.wrapper.style.display = a < 100 ? "" : "none";
                this.data.breathEl.progress.style.width = `${a}%`;
                this.data.breathEl.value.textContent = a;
            }
            if (e == "money") {
                if (a > 999999999) {
                    a = 999999999;
                }
                this.data.moneyEl.innerHTML = window.formatNumber(a);
            }
            if (e == "wanted") {
                if (a === 0 && oneasHud.wantedAlwaysShowClass.length === 0) {
                    this.data.wanted.wrapper.style.display = "none";
                    return;
                }
                this.data.wanted.wrapper.style.display = "";
                for (let e = 0; e < 6; e += 1) {
                    if ((5 - e) / a >= 1 || 5 - e == 0 && a == 0) {
                        this.data.wanted.els[e].src = assets.icons.inactive_wanted;
                        this.data.wanted.els[e].className = "ONEAS-wanted__inactive";
                    } else {
                        this.data.wanted.els[e].src = assets.icons.active_wanted;
                        this.data.wanted.els[e].className = "ONEAS-wanted__active";
                    }
                }
            }
            if (e == "ammoInClip") {
                this.data.weaponEl.ammoEl[0].textContent = a;
            }
            if (e == "totalAmmo") {
                this.data.weaponEl.ammoEl[1].textContent = a;
            }
            if (e == "setServer") {
                if (assets.logo[a]) {
                    this.data.server.image.src = assets.logo[a];
                }
                if (a > 0 && this.data.server.wrapper.style.display == "none") {
                    this.data.server.wrapper.style.display = "";
                }
                if (a <= 0) {
                    this.data.server.wrapper.style.display = "none";
                }
            }
            if (e == "setBonus") {
                this.data.bonusEl.style.display = a <= 1 ? "none" : "";
                this.data.bonusEl.textContent = `x${a}`;
            }
            if (e === "isShowFreeze" && a) {
                this.data.freezeEl.wrapper.style.display = "";
            }
            if (e === "isShowFreeze" && !a) {
                this.data.freezeEl.wrapper.style.display = "none";
            }
            if (e == "freeze") {
                this.data.freezeEl.progress.style.width = `${a}%`;
                this.data.freezeEl.value.textContent = a;
            }
        },
        init() {
            const e = `\n           <div class="ONEAS-logo"> \n               <img src="${assets.logo['1']}" class="ONEAS-logo__image">\n               <div class="ONEAS-logo__bonus">x2</div>\n             </div>\n             \n             <div class="ONEAS-hud-info">\n               <div class="ONEAS-weapon"> <img src="${assets.icons.weapon_back}" alt="" class="ONEAS-weapon__back"> <img src="${assets.weapon['0']}" alt="" class="ONEAS-weapon__icon">\n                 <div class="ONEAS-weapon__ammo"> <span id="ONEAS-ammo__in-clip">1</span> <span id="ONEAS-ammo__total">1</span> </div>\n               </div>\n               <div class="ONEAS-cash"> <img src="${assets.icons.cash}" alt="" class="ONEAS-cash__icon">\n                 <div id="ONEAS-cash__value">10000</div>\n               </div>\n               <div class="ONEAS-params">\n                   <div class="ONEAS-param__health ONEAS-param"> <img src="${assets.icons.health}" alt="" class="ONEAS-param__icon">\n                     <div class="ONEAS-param__progress">\n                       <div class="ONEAS-progress__value"> <img src="${assets.icons.circle}" alt="" class="ONEAS-param__circle"> </div>\n                     </div> <span class="ONEAS-param__amount">50</span> </div>\n           \n                   <div class="ONEAS-param__armour ONEAS-param"> <img src="${assets.icons.armour}" alt="" class="ONEAS-param__icon">\n                     <div class="ONEAS-param__progress">\n                       <div class="ONEAS-progress__value"> <img src="${assets.icons.circle}" alt="" class="ONEAS-param__circle"> </div>\n                     </div><span class="ONEAS-param__amount">0</span> </div>\n           \n                   <div class="ONEAS-param__hunger ONEAS-param"> <img src="${assets.icons.hunger}" alt="" class="ONEAS-param__icon">\n                     <div class="ONEAS-param__progress">\n                       <div class="ONEAS-progress__value"> <img src="${assets.icons.circle}" alt="" class="ONEAS-param__circle"> </div>\n                     </div><span class="ONEAS-param__amount">0</span> </div>\n                     \n                   <div style="display: none" class="ONEAS-param__freeze ONEAS-param"> <img src="${assets.icons.freeze}" alt="" class="ONEAS-param__icon">\n                     <div class="ONEAS-param__progress">\n                       <div class="ONEAS-progress__value"> <img src="${assets.icons.circle}" alt="" class="ONEAS-param__circle"> </div>\n                     </div><span class="ONEAS-param__amount">20</span> </div>\n               \n                   <div style="display: none" class="ONEAS-param__breath ONEAS-param"> <img src="${assets.icons.breath}" alt="" class="ONEAS-param__icon">\n                       <div class="ONEAS-param__progress">\n                         <div class="ONEAS-progress__value"> <img src="${assets.icons.circle}" alt="" class="ONEAS-param__circle"> </div>\n                       </div><span class="ONEAS-param__amount">70</span> </div>\n               </div>\n               <div class="ONEAS-wanted ${oneasHud.wantedAlwaysShowClass}"> <img src="${assets.icons.wanted_back}" alt="" class="ONEAS-wanted__back">\n                 <div class="ONEAS-wanted__row"> <img src="${assets.icons.active_wanted}" alt="" class="ONEAS-wanted__inactive"> <img src="${assets.icons.active_wanted}" alt="" class="ONEAS-wanted__inactive"> <img src="${assets.icons.active_wanted}" alt="" class="ONEAS-wanted__inactive"> <img src="${assets.icons.active_wanted}" alt="" class="ONEAS-wanted__active"> <img src="${assets.icons.active_wanted}" alt="" class="ONEAS-wanted__active"> <img src="${assets.icons.active_wanted}" alt="" class="ONEAS-wanted__active"> </div>\n               </div>\n             </div>\n           \n           <div class="ONEAS-hud-bottom">\n             <div class="ONEAS-green-zone"> <img src="${assets.other.zone}" alt="" class="ONEAS-green-zone__image">\n               <div class="ONEAS-green-zone__text">\n                 <div>Безопасная зона</div>\n                 <div>Вы находитесь в безопасной зоне.</div>\n               </div>\n             </div>\n        <div class="ONEAS-radar-border"></div>\n      </div>`;
            const a = jsLoader._x1040123.xasd12512(e, "ONEAS-hud", (e, a) => {
                this.onInfoChange(e, a);
            });
            this.createHud(a);
            window.interface("Hud").setBonus(window.interface("Hud").bonus);
            window.interface("Hud").setServer(window.interface("Hud").server);
            window.interface("Hud").info.health = window.interface("Hud").info.health;
            window.interface("Hud").info.armour = window.interface("Hud").info.armour;
            window.interface("Hud").info.hunger = window.interface("Hud").info.hunger;
            window.interface("Hud").info.breath = window.interface("Hud").info.breath;
            window.interface("Hud").info.ammoInClip = window.interface("Hud").info.ammoInClip;
            window.interface("Hud").info.totalAmmo = window.interface("Hud").info.totalAmmo;
            window.interface("Hud").info.money = window.interface("Hud").info.money;
            window.interface("Hud").info.wanted = 0;
            window.interface("Hud").info.weapon = window.interface("Hud").info.weapon;
            window.interface("Hud").info.show = 0;
            window.interface("Hud").hideGreenZoneTab();
        }
    },
    speedometer: {
        barsValues: {
            speed: {
                dashArray: 441,
                dashOffset: 441
            },
            fuel: {
                dashArray: 171,
                dashOffset: 0
            },
            wash: {
                dashArray: 172,
                dashOffset: 172
            },
            damage: {
                dashArray: 172,
                dashOffset: 172
            }
        },
        data: {
            speedometerEl: null,
            speed: {
                valueEl: null,
                barEl: null
            },
            fuel: {
                progress: null,
                valueEl: null,
                barEl: null,
                wrapperEl: null
            },
            wash: {
                valueEl: null,
                barEl: null,
                wrapperEl: null
            },
            damage: {
                valueEl: null,
                barEl: null
            },
            tachometer: {
                wrapper: null,
                rpmEl: null,
                gearEl: null
            },
            mileageEl: null,
            turnsEls: [],
            paramsEls: []
        },
        onChangeInfo(e, a) {
            try {
                if (e === "damage") {
                    if (isNaN(a * 100)) {
                        a = 0;
                    }
                    this.setDamage(+a);
                }
                if (e === "wash") {
                    if (isNaN(a * 100)) {
                        a = 0;
                    }
                    this.setWash(+a);
                }
                if (e === "show" && +a == 1) {
                    this.show();
                }
                if (e === "show" && +a == 0) {
                    this.hide();
                }
                if (e === "speed") {
                    this.setSpeed(a);
                }
                if (e === "mileage") {
                    this.setMileage(a);
                }
                if (e === "fuel") {
                    this.setFuel(a);
                }
                if (e == "left") {
                    this.data.turnsEls[0].classList.toggle("ONEAS-speedometer-turn--active", +a);
                }
                if (e == "right") {
                    this.data.turnsEls[1].classList.toggle("ONEAS-speedometer-turn--active", +a);
                }
                if (e == "rem") {
                    this.data.paramsEls[3].classList.toggle("ONEAS-spedometer-param--active", +a);
                }
                if (e == "doors") {
                    this.data.paramsEls[2].classList.toggle("ONEAS-spedometer-param--active", +a);
                }
                if (e == "temperature") {
                    this.data.paramsEls[0].classList.toggle("ONEAS-spedometer-param--active", +a);
                }
                if (e == "lights") {
                    this.data.paramsEls[1].classList.toggle("ONEAS-spedometer-param--active", +a);
                }
                if (e === "tachometer-show") {
                    const e = +a >= 1 ? "" : "none";
                    this.data.tachometer.wrapper.style.display = e;
                }
                if (e === "tachometer") {
                    this.setGear(a.gear);
                    this.setTachometer(a.rpm, a.maxRpm);
                }
            } catch (e) {
                console.error(e);
            }
        },
        show() {
            this.data.speedometerEl.style.display = "";
        },
        hide() {
            this.data.speedometerEl.style.display = "none";
        },
        setGear(e) {
            this.data.tachometer.gearEl.textContent = e;
        },
        setTachometer(e, a) {
            if (window.interface("Hud").speedometer.tachometer.show) {
                this.data.tachometer.wrapper.classList.toggle("ONEAS-tachometer-glow", e / a > 0.5);
            } else {
                this.data.tachometer.wrapper.classList.toggle("ONEAS-tachometer-glow", false);
            }
            if (e > a) {
                e = a;
            }
            this.data.tachometer.rpmEl.textContent = e;
        },
        setMileage(e) {
            this.data.mileageEl.textContent = e;
        },
        setSpeed(e) {
            this.data.speed.valueEl.textContent = e;
            if (e > 320) {
                e = 320;
            }
            const a = this.barsValues.speed.dashArray - e / 320 * this.barsValues.speed.dashArray;
            this.data.speed.barEl.style.strokeDashoffset = a;
        },
        setDamage(e) {
            const a = this.barsValues.damage.dashArray - e * this.barsValues.damage.dashArray;
            this.data.damage.barEl.style.strokeDashoffset = a;
        },
        setWash(e) {
            document.querySelector(".ONEAS-wash__bar").classList.toggle("ONEAS-speedometer-danger", e >= 0.75);
            const a = this.barsValues.wash.dashArray - e * this.barsValues.wash.dashArray;
            this.data.wash.barEl.style.strokeDashoffset = a;
        },
        setFuel(e) {
            this.data.fuel.wrapperEl.classList.toggle("ONEAS-speedometer-danger", e <= 15);
            const a = window.interface("Hud").speedometer.maxFuel;
            this.data.fuel.valueEl.textContent = e;
            if (window.interface("Hud").speedometer.isElectro) {
                this.data.fuel.textEl.textContent = "%";
            } else {
                this.data.fuel.textEl.textContent = "л";
            }
            if (e > a) {
                e = a;
            }
        },
        create(e) {
            this.data.speedometerEl = e;
            this.data.speed.valueEl = e.querySelector(".ONEAS-speed__value");
            this.data.speed.barEl = e.querySelector(".ONEAS-speed__bar path");
            this.data.fuel.valueEl = e.querySelector(".ONEAS-fuel__value");
            this.data.fuel.textEl = e.querySelector(".ONEAS-fuel__text");
            this.data.fuel.wrapperEl = e.querySelector(".ONEAS-speedometer__fuel");
            this.data.wash.barEl = e.querySelector(".ONEAS-wash__bar path");
            this.data.wash.wrapperEl = e.querySelector(".ONEAS-speedometer__wash");
            this.data.damage.barEl = e.querySelector(".ONEAS-damage__bar path");
            this.data.mileageEl = e.querySelector(".ONEAS-speed__mileage");
            this.data.paramsEls = e.querySelector(".ONEAS-speedometer__params").children;
            this.data.turnsEls = e.querySelector(".ONEAS-speedometer__turns").children;
            this.data.tachometer.wrapper = e.querySelector(".ONEAS-speedometer__tachometer");
            this.data.tachometer.gearEl = this.data.tachometer.wrapper.querySelector("#ONEAS-tachometer-gear");
            this.data.tachometer.rpmEl = this.data.tachometer.wrapper.querySelector("#ONEAS-tachometer-rpm");
        },
        init() {
            const e = `\n            <div style="display: none" class="ONEAS-speedometer__tachometer">\n                    <div id="ONEAS-tachometer-gear">d4</div>\n                    <div id="ONEAS-tachometer-rpm">1000</div>\n                </div>\n                <div class="ONEAS-speedometer__params">\n      <img src="${assets.other.speedTempIcon}" alt="" class="icon__params icon__key">\n      <img src="${assets.other.speedLightsIcon}" alt="" class="icon__params icon__lights">\n      <img src="${assets.other.speedDoorsIcon}" alt="" class="icon__params icon__doors ONEAS-spedometer-param--active">\n      <img src="${assets.other.speedRemIcon}" alt="" class="icon__params icon__rem ONEAS-spedometer-param--active">\n      <div class="ONEAS-speedometer__fuel">\n        <img class="fuel__icon" src="${assets.other.speedFuelIcon}" alt="">\n        <div class="ONEAS-fuel__value ONEAS-speedometer-fuel__data">50</div>\n        <div class="ONEAS-fuel__text ONEAS-speedometer-fuel__data">%</div>\n      </div>\n    </div>\n    \n    <div class="ONEAS-speedometer__main">\n      <img src="${assets.other.speedPlayBg}" alt="" class="ONEAS-speedometer-bg">\n      <div class="ONEAS-speedometer__damage">           \n      <img src="${assets.other.speedDamageIcon}" alt="" class="main-icon damage__icon">                  \n      </div>\n              \n      <div class="ONEAS-speedometer__speed">\n        <div class="ONEAS-speed__data">\n          <div class="ONEAS-speed__value">228</div>\n          <div class="ONEAS-speed__text">км/ч</div>\n          <div class="ONEAS-speed__mileage">000340</div>\n          <div class="ONEAS-speedometer__turns">\n            <img src="${assets.other.speedTurnIcon}" alt="" class="turn__left">\n            <img src="${assets.other.speedTurnIcon}" alt="" class="turn__right">\n          </div>\n        </div>\n        <svg class="ONEAS-speed__bar" width="249" height="249" viewBox="0 0 249 249" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path stroke-dasharray="${this.barsValues.speed.dashArray}" stroke-dashoffset="${this.barsValues.speed.dashArray}" d="M52.3234 188.326C40.2501 174.339 32.4435 157.181 29.8305 138.89C27.2175 120.598 29.9077 101.941 37.5818 85.133C45.2559 68.3248 57.5916 54.0715 73.1246 44.065C88.6577 34.0585 106.736 28.719 125.213 28.6803C143.69 28.6416 161.79 33.9053 177.365 43.8467C192.94 53.7881 205.335 67.9896 213.08 84.7655C220.824 101.541 223.592 120.187 221.056 138.489C218.52 156.792 210.785 173.982 198.77 188.019" stroke="url(#paint0_linear_5573_1076)" stroke-width="3.00171" stroke-linecap="round"/>\n          <defs>\n          <linearGradient id="paint0_linear_5573_1076" x1="28.8601" y1="28.6801" x2="221.97" y2="28.6801" gradientUnits="userSpaceOnUse">\n          <stop stop-color="#E9651B"/>\n          <stop offset="1" stop-color="#F5BE09"/>\n          </linearGradient>\n          </defs>\n        </svg>\n        <svg class="ONEAS-speed__bar-bg" width="249" height="249" viewBox="0 0 249 249" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M52.3234 188.326C40.2501 174.339 32.4435 157.181 29.8305 138.89C27.2175 120.598 29.9077 101.941 37.5818 85.133C45.2559 68.3248 57.5916 54.0715 73.1246 44.065C88.6577 34.0585 106.736 28.719 125.213 28.6803C143.69 28.6416 161.79 33.9053 177.365 43.8467C192.94 53.7881 205.335 67.9896 213.08 84.7655C220.824 101.541 223.592 120.187 221.056 138.489C218.52 156.792 210.785 173.982 198.77 188.019" stroke="black" stroke-opacity="0.5" stroke-width="3.00171" stroke-linecap="round"/>\n        </svg>\n        <svg class="ONEAS-speed__bar-line" width="249" height="249" viewBox="0 0 249 249" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <path d="M27.8535 124.767H57.2046" stroke="white" stroke-width="2.49998" />\n          <path d="M124.66 56.8145V27.4634" stroke="white" stroke-width="2.49998" />\n          <path d="M51.5567 61.6441L75.2256 75.0704" stroke="white" stroke-width="2.49998" />\n          <path d="M222.928 124.767H192.579" stroke="white" stroke-width="2.49998" />\n          <path d="M180.046 77.1422L197.761 59.8974" stroke="white" stroke-width="2.49998" />\n        </svg>\n          <svg class="ONEAS-damage__bar" width="278" height="278" viewBox="0 0 278 278" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path stroke-dasharray="${this.barsValues.damage.dashArray}" stroke-dashoffset="${this.barsValues.damage.dashArray}"  d="M31.7773 139.778C31.7773 125.543 34.5911 111.45 40.0569 98.3067C45.5227 85.1637 53.5326 73.2308 63.6261 63.1943C73.7196 53.1577 85.6976 45.2153 98.8712 39.824C112.045 34.4326 126.154 31.6986 140.388 31.7791" stroke="url(#paint0_linear_2071_131)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />\n            <defs>\n              <linearGradient id="paint0_linear_2071_131" x1="30.2773" y1="30.2773" x2="249.278" y2="30.2773" gradientUnits="userSpaceOnUse">\n                <stop offset="0.05" stop-color="#F5BE09" />\n                <stop offset="1" stop-color="#E9651B" />\n              </linearGradient>\n            </defs>\n          </svg>         \n          <svg class="ONEAS-damage__bar-bg" width="278" height="278" viewBox="0 0 278 278" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M31.7773 139.778C31.7773 125.541 34.5922 111.444 40.0601 98.299C45.5279 85.1539 53.5408 73.2196 63.6379 63.1826C73.7349 53.1456 85.7167 45.204 98.8942 39.8146C112.072 34.4252 126.185 31.6944 140.421 31.7793" stroke="black" stroke-opacity="0.5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />\n          </svg>  \n          <svg class="ONEAS-wash__bar" width="278" height="278" viewBox="0 0 278 278" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path stroke-dasharray="${this.barsValues.wash.dashArray}" stroke-dashoffset="${this.barsValues.wash.dashArray}"  d="M247.778 139.77C247.779 154.033 244.955 168.154 239.469 181.32C233.982 194.485 225.943 206.434 215.814 216.475C205.685 226.517 193.668 234.452 180.455 239.824C167.243 245.196 153.097 247.898 138.835 247.774" stroke="url(#paint0_linear_2071_136)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />\n            <defs>\n              <linearGradient id="paint0_linear_2071_136" x1="30.2773" y1="30.2773" x2="249.278" y2="30.2773" gradientUnits="userSpaceOnUse">\n                <stop offset="0.05" stop-color="#F5BE09" />\n                <stop offset="1" stop-color="#E9651B" />\n              </linearGradient>\n            </defs>\n          </svg>         \n          <svg class="ONEAS-wash__bar-bg" width="278" height="278" viewBox="0 0 278 278" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M247.778 139.778C247.778 154.039 244.953 168.159 239.467 181.324C233.981 194.488 225.942 206.435 215.814 216.475C205.686 226.516 193.669 234.451 180.458 239.823C167.247 245.195 153.103 247.897 138.842 247.774" stroke="black" stroke-opacity="0.5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />\n          </svg>   \n      </div>\n\n      <div class="ONEAS-speedometer__wash">\n        <img src="${assets.other.speedWashIcon}" alt="" class="main-icon wash__icon">             \n      </div>         \n    </div>`;
            const a = jsLoader._x1040123.ljfkles(e, "ONEAS-speedometer", (e, a) => this.onChangeInfo(e, a));
            this.create(a);
            window.interface("Hud").speedometer.show = 0;
        }
    },
    minimapChanger: {
        data: {
            defaultMinimap: "shape-minimap-1",
            minimap: "",
            prevMinimap: ""
        },
        loadConfig() {
            const e = jsLoader.localStorage.getItem("ONEAS-minimap-fix");
            if (e === null) {
                this.data.minimap = this.data.defaultMinimap;
                this.saveConfig(this.data.defaultMinimap);
                return;
            }
            this.data.minimap = e;
        },
        saveConfig(e) {
            jsLoader.localStorage.setItem("ONEAS-minimap-fix", e);
        },
        applyHudMinimap(e) {
            document.body.classList.add(e);
        },
        removeHudMinimap(e) {
            document.body.classList.remove(e);
        },
        changeHudMinimap(e) {
            if (this.data.prevMinimap) {
                this.removeHudMinimap(this.data.prevMinimap);
            }
            this.applyHudMinimap(e);
            this.data.prevMinimap = e;
            if (e !== this.data.minimap) {
                this.data.minimap = e;
                this.saveConfig(e);
            }
        },
        addMenuOption() {
            jsLoader.mainMenu.addNewOption(3, "Форма мини-карты", {
                data: [{
                    id: "shape-minimap-1",
                    value: "Квадрат",
                    img: ""
                }, {
                    id: "shape-minimap-2",
                    value: "Прямоугольник",
                    img: ""
                }, {
                    id: "shape-minimap-3",
                    value: "Прямоугольник с фиксом меток",
                    img: ""
                }],
                selectedId: this.data.minimap,
                callback: ({
                    id: e
                }) => {
                    this.changeHudMinimap(e);
                }
            });
        },
        init() {
            this.loadConfig();
            this.changeHudMinimap(this.data.minimap);
            this.addMenuOption();
        }
    },
    setStyles() {
        const styleEl = document.createElement("style");
        styleEl.innerHTML = `
  #app .window .window__buttons .controls-button__container_disabled {
    pointer-events: none
}

#app .jsl-select {
    width: 36.48vh
}

#app .jsl-select__value {
    overflow: visible
}

#app .vignette,
#app .window .modal__pattern-wrapper {
    display: none
}

:root {
    --bg: #000;
    --bg-20: #00000033;
    --bg-40: #00000066;
    --bg-50: #00000080;
    --bg-60: #00000099;
    --bg-80: #000000cc;
    --color: #fff;
    --color-10: #ffffff1a;
    --color-30: #ffffff4d;
    --font-famaly-all: GothamPro, "Open Sans"
}

#app .radmir-chat-input__input input {
    color: #fff !important
}

#app .radmir-chat-input__input-lang {
    padding: 0 .463vh .3704vh;
    color: #fff !important;
    border-left: .18vh solid #cdcdcd
}

#app .radmir-chat:before {
    width: 70vw !important;
    background: linear-gradient(148deg, #141414d1 10%, #14141400 50%) !important
}

#app .radmir-chat-input__input {
    border-radius: .8333vh;
    background-color: #000;
    border: .18vh solid #cdcdcd;
    padding: 0 .93vh !important
}

#app .radmir-chat_inactive {
    opacity: 1 !important
}
#app .window .modal-container-wrapper {
    background: 0 0;
    background: linear-gradient(212.45deg, #0e1434e6 -24.84%, #7d1b1de6 130.15%);
    border-radius: 1.85vh;
    border: none;
    padding: 2.22vh;
    box-shadow: none;
    transform: scale(.8)
}

#app .window .modal-container {
    border: none;
    padding: 0;
    border-radius: 0
}

#app .window .modal__title {
    font-weight: 600;
    font-size: 2.22vh;
    line-height: 3.33vh;
    font-style: normal;
    color: var(--color);
    text-transform: none;
    font-family: 'GothamPro Medium', sans-serif
}

#app .window .window__subtitle {
    margin: 0 2.96vh
}

#app .window .scrollable-container__container {
    mask-image: none !important
}

#app .window .window__content-container {
    min-width: 45vh
}

#app .window .window-table__item {
    background: #35121fcc;
    border: 0 !important;
    border-radius: .46vh;
    margin-top: .93vh;
    height: 5vh;
    color: var(--color);
    box-shadow: none
}

#app .window .window-table__item:hover {
    background: #4c1a2dcc
}

#app .window .window-table__item.selected {
    background: #ffb200 !important;
    color: #351321 !important
}

#app .window .window-table__col {
    justify-content: center;
    padding: 0 .96vh
}

#app .window .window-table__item.selected p {
    color: #351321 !important
}

#app .window .window__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(1.2)
}

#app .window .window__buttons .controls-button__container {
    position: relative
}

#app .window .window__buttons .controls-button {
    position: absolute;
    width: 100%
}

#app .login-head-icon,
#app .registration-personalization-switcher__text,
#app .window .window__buttons .controls-button-shadow {
    display: none
}

#app .window .window__buttons .controls-button--text,
#app .window .window__buttons .controls-button-background,
#app .window .window__buttons .controls-button-icon {
    opacity: 0 !important
}


#app .window .window__buttons .controls-button__container:hover .controls-button__container-text {
    opacity: 1;
    box-shadow: none
}

#app .window .window__buttons .controls-button__container_disabled .controls-button__container-text {
    opacity: .25
}

#app .window .input-field {
    background: #471a2bcc;
    box-shadow: 1.39vh 1.39vh 1.85vh #0003;
    border-radius: .93vh;
    border: none
}

#app .window .input-field_hoverable:hover {
    background-color: #471a2b93
}

#app .window .input-field_focused,
#app .window .input-field_hoverable:hover.input-field_focused {
    background: #61233b
}

#app .window .input-field input,
#app .window .input-field__placeholder {
    font-weight: 500;
    font-family: 'GothamPro Medium', sans-serif
}

#app .window .input-field_focused .input-field__placeholder,
#app .window .input-field_focused input,
#app .window .input-field_hoverable:hover.input-field_focuse .input-field__placeholder,
#app .window .input-field_hoverable:hover.input-field_focuse input {
    color: #fff
}

#app .authorization {
    background: 0 0
}

#app .authorization__gradient {
    background: linear-gradient(69.28deg, #1414148f 26.1%, #14141400 94.95%)
}

#app .login-auth:before,
#app .login-code:before,
#app .registration:before {
    content: "";
    background-image:url(${assets.other.bgState1});
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1
}

#app .registration:before {
    background-image:url(${assets.other.bgState2})
}

#app .login-head__subtitle {
    color: transparent;
    opacity: 1
}

#app .login-auth .login-head__subtitle:before {
    content: "С ВОЗВРАЩЕНИЕМ НА HASSLE";
    display: block;
    width: 60vh;
    font-size: 5.74vh;
    font-weight: 900;
    line-height: 100%;
    color: #fff;
    position: relative;
    padding-bottom: 4.48vh;
    font-style: normal;
    font-family: 'GothamPro Black', sans-serif
}

#app .login-auth .login-head__subtitle:after {
    content: "";
    width: 9.72vh;
    height: .93vh;
    border-radius: .74vh;
    background: #fff;
    display: block
}

#app .authorization-field,
#app .login-head__username {
    height: 4.63vh;
    box-sizing: border-box;
    border: .19vh solid #ffffff91;
    border-radius: .74vh;
    color: #ffffffd6;
    font-size: 1.3vh;
    width: 46.48vh;
    position: relative;
    font-weight: 400;
    background: #00000054;
    font-family: 'GothamPro Regular', sans-serif
}

#app .login-auth .authorization-field,
#app .login-auth .login-head__username {
    margin-top: 7.89vh
}

#app .authorization-field__box,
#app .login-head__username {
    padding: .5vh 1.67vh .4vh
}

#app .authorization-field__box {
    border: none
}

#app .authorization-field__icon,
#app .authorization-field__lang {
    right: 1.5vh
}

#app .authorization-field__input {
    color: #ffffffd6 !important;
    font-size: 1.3vh;
    border: none !important;
    padding-bottom: 0;
    font-family: 'GothamPro Regular', sans-serif
}

#app .authorization-field__input-placeholder {
    opacity: 0
}

.login-form__suggestion-wrapper .login-form-push {
    background-color: var(--bg-60);
    border-radius: 1vh
}

.login-form__suggestion-wrapper .login-form-push:before {
    border-right-width: 1.11vh;
    border-right-style: solid;
    border-right-color: var(--bg-60);
    left: .05vh;
    top: 0;
    opacity: 1
}

#app .login-form__button,
#app .registration-bonuses__button,
#app .registration-form__button,
#app .registration-personalization__button {
    padding: 0 4.63vh;
    height: 6.11vh;
    border-radius: .74vh;
    line-height: 6.11vh;
    font-size: 2.04vh;
    font-weight: 500;
    width: 17vh;
    text-transform: inherit;
    font-family: 'GothamPro Medium', sans-serif
}

#app .registration-personalization__button {
    width: 24vh
}

#app .registration-bonuses__button {
    width: 36vh
}

#app .registration-bonuses__button-background,
#app .registration-form__button-background {
    border-radius: .74vh
}

#app .login-form,
#app .registration-bonuses,
#app .registration-form,
#app .registration-personalization {
    width: 46.48vh
}

#app .registration-personalization-switcher__button {
    width: 6.11vh;
    height: 6.11vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .74vh;
    cursor: pointer;
    margin-left: 1.11vh;
    transition-duration: .25s;
    padding: 0
}

#app .registration-personalization-switcher__icon {
    width: 2vh;
    height: 2vh;
    margin: 0;
    fill: white
}

#app .registration-personalization-switcher>div.registration-personalization-switcher__button:first-child {
    border: .19vh solid #527ff1;
    background: 0 0;
    margin: 0
}

#app .registration-personalization-switcher>div.registration-personalization-switcher__button_active:first-child {
    background: #527ff1 !important
}

#app .registration-personalization-switcher>div.registration-personalization-switcher__button:last-child {
    border: .19vh solid #d152f1;
    background: 0 0
}

#app .registration-personalization-switcher>div.registration-personalization-switcher__button_active:last-child {
    background: #d152f1 !important
}

#app .registration-personalization-item {
    width: 13.33vh;
    height: 16.85vh;
    border-radius: .74vh;
    border: .19vh solid #ffffff69;
    background: 0 0
}

#app .registration-personalization-item:hover {
    border: .19vh solid #fff;
    background: 0 0 !important
}

#app .registration-personalization-item_active {
    border: .19vh solid #ffb200 !important;
    background: 0 0 !important
}

#app .authorization-field:before,
#app .login-head__username:before {
    content: "Введите логин*";
    position: absolute;
    left: 0;
    top: -3vh;
    font-size: 1.67vh;
    line-height: 100%;
    color: #ffffffb3;
    background: 0 0;
    width: 100%;
    margin-bottom: 1.11vh;
    height: auto;
    font-family: 'GothamPro Medium', sans-serif
}

#app .login-auth .authorization-field:before {
    content: "Введите пароль*"
}

#app .login-code .authorization-field:before {
    content: "Введите значение*"
}

#app .registration-bonuses .authorization-field:before {
    content: "Введите ник пригласившего (или пропустите)*"
}

#app .registration-form>div:first-child .authorization-field:before {
    content: "Введите e-mail*"
}

#app .registration-form>div:nth-child(2) .authorization-field:before {
    content: "Придумайте пароль (мин. 6 символов)*"
}

#app .registration-form>div:nth-child(3) .authorization-field:before {
    content: "Повторите пароль*"
}

#app .authorization .login {
    margin-top: -10vh;
    margin-left: 10vh
}

#app .registration {
    margin-left: 10vh
}

#app .registration__title {
    color: #fff
}

#app .registration__title-icon {
    display: none
}

#app .registration .authorization-field {
    margin-top: 6vh
}

#app .registration-personalization-container {
    width: 100%;
    margin-top: 2vh
}

#app .registration-personalization-switcher {
    margin-top: 2vh
}

#app .registration-form__confirm {
    align-items: flex-start;
    flex-direction: column
}

#app .login-auth .login-head {
    margin: 0
}

#app .scrollable-container-thumb_type_2.scrollable-container-thumb_horizontal,
#app .scrollable-container-thumb_type_2.scrollable-container-thumb_vertical,
#app .scrollable-container-thumb_type_3.scrollable-container-thumb_horizontal,
#app .scrollable-container-thumb_type_3.scrollable-container-thumb_vertical,
#app .scrollable-container-thumb_type_4.scrollable-container-thumb_horizontal,
#app .scrollable-container-thumb_type_4.scrollable-container-thumb_vertical,
#app .scrollable-container-thumb_type_5.scrollable-container-thumb_horizontal,
#app .scrollable-container-thumb_type_5.scrollable-container-thumb_vertical,
#app .scrollable-container-thumb_type_6.scrollable-container-thumb_horizontal,
#app .scrollable-container-thumb_type_6.scrollable-container-thumb_vertical,
#app .scrollable-container-thumb_type_7.scrollable-container-thumb_horizontal,
#app .scrollable-container-thumb_type_7.scrollable-container-thumb_vertical,
#app .scrollable-container-thumb_type_8.scrollable-container-thumb_horizontal,
#app .scrollable-container-thumb_type_8.scrollable-container-thumb_vertical {
    background-color: #feb900
}

#app .scrollable-container_type_3 .scrollable-container__rail .scrollable-container__rail-rail-background {
    background-color: #260d16
}
`;
        document.head.appendChild(styleEl);
    },
    init() {
        this.setStyles();
        this.hud.init();
        this.speedometer.init();
        this.minimapChanger.init();
        jsLoader.showAddedScript(`HUD RC ${lvl} v${vol}`, "info");
    }
};

function oldInfoCard() {
    const n = {
        gameTextInterval: null,
        isBusinessOpen: false,
        openOldInfoCard(n, t) {
            if (typeof n == "string") {
                n = JSON.parse(n);
            }
            let o = t == "Business" ? 1 : 0;
            let r = o == 0 ? n[1] : n[2];
            let a = o == 0 ? n[4] : n[6];
            let i = o == 0 ? n[2] : n[3];
            let d = o == 0 ? n[6] : n[5];
            let s = o == 0 ? n[5] : n[4];
            let l = o == 0 ? ["Эконом класс", "Деревенски дом", "Средни класс", "Премиум класс", "Элитны дом", "Эконом класс", "VIP класс", "Квартира"].indexOf(n[3].replace("й", "").replace("й", "").replace("+", "")) : n[1];
            n = JSON.stringify([o, r, a, i, d, s, l]);
            window.openInterface("InfoCard", n);
            if (r.toLocaleLowerCase().includes("киоск")) {
                jsLoader.runtime.executeFunctionWhen(() => {
                    const e = window.interface("InfoCard").$el.querySelector(".biz .status");
                    e.classList.remove("status");
                    e.classList.add("text");
                    e.innerHTML = `<span style="color: hsl(336deg 28% 67%)">Свободных полок: ${a}<span>`;
                    window.interface("InfoCard").$el.querySelector(".params .info-card__data-row .text").textContent = "Налог на продажу";
                    window.interface("InfoCard").$el.querySelector(".params .info-card__data-row .title").textContent = `${s}%`;
                }, () => window.interface("InfoCard") && window.interface("InfoCard").$el !== undefined, 100);
            } else {
                jsLoader.runtime.executeFunctionWhen(() => {
                    window.interface("InfoCard").$el.querySelector(".title .span").textContent = r;
                    const e = document.querySelector(".info-card__head > div > div > div.title");
                    if (e.textContent.includes("Дом")) {
                        e.innerHTML = e.children[0].innerHTML;
                    }
                    if (i === "Государство") {
                        e.style.color = "green";
                        window.interface("InfoCard").$el.querySelector(".info-card__data-row .title").style.color = "green";
                    }
                }, () => window.interface("InfoCard") && window.interface("InfoCard").$el !== undefined, 100);
            }
        },
        onCloseInterface() {
            clearInterval(n.gameTextInterval);
            window.interface("GameText").add("[3,\"~w~Для взаимодействия нажмите ~g~alt\",500,0,0,0]");
            window.closeInterface("InfoCard");
        },
        hookAndReplaceNewInfoCard() {
            window.App.$refs.Appartament = [{
                close: () => this.onCloseInterface()
            }];
            window.App.$refs.Business = [{
                close: () => this.onCloseInterface()
            }];
            window.openInterface = new Proxy(window.openInterface, {
                apply: (e, t, o) => {
                    try {
                        if (o[0] === "Business") {
                            this.isBusinessOpen = true;
                        }
                        if (o[0] === "Business" || o[0] === "Appartament") {
                            window.interface("GameText").add("[3,\"~w~Для взаимодействия нажмите ~g~alt\",3000,0,0,0]");
                            n.gameTextInterval = setInterval(() => window.interface("GameText").add("[3,\"~w~Для взаимодействия нажмите ~g~alt\",3000,0,0,0]"), 2000);
                            n.openOldInfoCard(o[1], o[0]);
                            return 0;
                        }
                    } catch (e) { }
                    return Reflect.apply(e, t, o);
                }
            });
            this.onKeyDown();
            jsLoader.showConnectedScript("info", "Старая карточка бизов/домов");
        },
        onKeyDown() {
            document.addEventListener("keydown", e => {
                if (!e.repeat) {
                    if (this.isBusinessOpen && e.keyCode === 18) {
                        window.sendClientEvent(0, "Business_OnPlayerEnter");
                    }
                }
            });
        }
    };
    return {
        init() {
            n.hookAndReplaceNewInfoCard();
        },
        pluginId: "oldInfoCard"
    };
}

function pageSize() {
    const e = {
        chatPageSizeLimits: {
            max: 40,
            min: 5
        },
        chatFontSizeLimits: {
            max: 5,
            min: -3
        },
        chatPageSize: 10,
        chatFontSize: 0,
        applyPageAndFontSizes() {
            window.sendChatInput(`/fontsize ${this.chatFontSize}`);
            window.sendChatInput(`/pagesize ${this.chatPageSize}`);
            this.updateInputTop();
        },
        updateInputTop() {
            const t = document.querySelector(".radmir-chat");
            if (this.chatFontSize >= 0) {
                t.style.top = 10 + this.chatPageSize * 20 + 10 + this.chatFontSize * this.chatPageSize + "px";
            } else {
                t.style.top = 5 + this.chatPageSize * 20 + 10 + this.chatFontSize * this.chatPageSize - this.chatPageSize + "px";
            }
        },
        registerCommand() {
            jsLoader.chat.registerCommand("/pagesize", t => {
                if (!(+t[0] > this.chatPageSizeLimits.max) && !(+t[0] < this.chatPageSizeLimits.min)) {
                    this.chatPageSize = +t[0];
                    this.saveConfig();
                    this.updateInputTop();
                }
            });
            jsLoader.chat.registerCommand("/fontsize", t => {
                if (!(+t[0] > this.chatFontSizeLimits.max) && !(+t[0] < this.chatFontSizeLimits.min)) {
                    this.chatFontSize = +t[0];
                    this.saveConfig();
                    this.updateInputTop();
                }
            });
        },
        async loadConfig() {
            return new Promise(e => {
                jsLoader.socket.sendEvent("readFile|chat.config.json", (t) => {
                    if (!t.length) {
                        console.log("no data");
                        this.saveConfig();
                        e();
                        return;
                    }
                    const n = JSON.parse(t);
                    this.chatPageSize = n.chatPageSize;
                    this.chatFontSize = n.chatFontSize;
                    console.log("loaded", n);
                    e();
                });
            });
        },
        saveConfig() {
            const e = {
                chatPageSize: this.chatPageSize,
                chatFontSize: this.chatFontSize
            };
            jsLoader.socket.sendEvent(`writeFile|chat.config.json|${JSON.stringify(e, null, "  ")}`);
        },
        setStyles() {
            jsLoader.runtime.createStyleTag("#app .scrolling-container{display:none}#app .radmir-chat-input{margin-top:0}", document.head);
        },
        async init() {
            await this.loadConfig();
            this.setStyles();
            this.registerCommand();
            this.applyPageAndFontSizes();
            jsLoader.runtime.createStyleTag(".connect {\n          display: none !important;\n          }\n          \n          body .radmir-chat_opened:before {\n          opacity: 0;\n          }", document.head);
            jsLoader.showConnectedScript("info", "Page Size for Oneas Studio", "Загружен!");
        }
    };
    return {
        init() {
            jsLoader.socket.sendEvent("existsFile|chat.asi", (t) => {
                if (t === "1") {
                    e.init();
                }
            });
        },
        pluginId: "pageSize"
    };
}

setTimeout(() => {
    oneasHud.init();
    oldInfoCard().init();
    pageSize().init();
}, 1000);