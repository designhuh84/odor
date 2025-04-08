class GlobalHeaderUI extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.init().then(() => {
            this.onload();
        });
    }
    init() {
        return new Promise(resolve => {
            this.innerHTML = GlobalHeaderUI.html;
            resolve();
        });
    }
    onload() {

    }
}
customElements.define('global-header', GlobalHeaderUI);

GlobalHeaderUI.html = `
    <div class="container">
        <a href="./" class="logo">
            <img src="./image/logo.svg">
        </a>
        <nav>
            <a href="./">배출사업장</a>
            <a href="./">실태조사</a>
            <a href="./">통계현황</a>
            <a href="./">민원서비스</a>
            <a href="./">고객센터</a>
        </nav>
        <button type="button" class="btn-header-login"></button>
    </div>
`;

class GlobalFooterUI extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.init().then(() => {
            this.onload();
        });
    }
    init() {
        return new Promise(resolve => {
            this.innerHTML = `
                <div class="inner">
                    <div class="footer-logo"><img src="./image/footer-logo.png"></div>
                    <div class="info">
                        (우:22689) 인천광역시 서구 환경로 42 (경서동, 종합환경연구단지)<br>
                        Copyrightⓒ2024 all rights reserved.
                    </div>
                    <button type="button" class="footer-terms">개인정보취급방침</button>
                </div>
            `;
            resolve();
        });
    }
    onload() {
        console.log('footer');
    }
}
customElements.define('golbal-footer', GlobalFooterUI);

class MainComplaintsUI extends HTMLElement {
    constructor(data) {
        super();
        this.data = data;
    }
    connectedCallback() {
        this.init().then(() => {
            this.onload();
        });
    }
    init() {
        return new Promise(resolve => {
            this.innerHTML = `
                <img src="${this.data.img}">
                <div class="name">${this.data.name}</div>
                <div class="datas">
                    <div class="row">
                        <label>총 건수</label>
                        <div class="data">${this.data.all}건</div>
                    </div>
                    <div class="row">
                        <label>처리</label>
                        <div class="data">${this.data.done}건</div>
                    </div>
                    <div class="row">
                        <label>미처리</label>
                        <div class="data">${this.data.todo}건</div>
                    </div>
                </div>
            `;
            resolve();
        });
    }
    onload() {
        console.log(this.data);
    }
}
customElements.define('main-complaints', MainComplaintsUI);