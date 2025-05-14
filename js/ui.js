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
        document.addEventListener('mousemove', event => {
            if(event.target.closest('nav') || event.target.closest('global-header-menu')){
                document.querySelector('global-header-menu').classList.add('on');
            }else{
                document.querySelector('global-header-menu').classList.remove('on');
            }
        });
        
    }
}
customElements.define('global-header', GlobalHeaderUI);

GlobalHeaderUI.html = `
    <div class="container">
        <a href="./" class="logo">
            <img src="./image/logo.svg">
        </a>
        <nav>
            <a href="./sub01.html">배출사업장</a>
            <a href="./sub03.html">통계현황</a>
            <a href="#!">민원서비스</a>
            <a href="#!">고객센터</a>
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

class GlobalHeaderMenuUI extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = GlobalHeaderMenuUI.html;
    }

}
customElements.define('global-header-menu', GlobalHeaderMenuUI);

GlobalHeaderMenuUI.html = `
    <div class="inner">

        <div class="col">
            <div class="category">배출사업장</div>
            <div class="sub-category">사업장정보관리</div>
            <a href="./sub01.html" class="menu">사업장관리</a>
            <a href="./sub01-1.html" class="menu">지도점검 및 행정처분</a>
        </div>

        <div class="col">
            <div class="category">통계현황</div>
            <div class="sub-category">배출사업장현황</div>
            <a href="./sub03.html" class="menu">악취배출사업장</a>
            <a href="#!" class="menu">업종별현황</a>
            <a href="#!" class="menu">중점관리사업장</a>
            <a href="#!" class="menu">악취검사현황</a>
            <a href="#!" class="menu">악취검사결과</a>
            <a href="#!" class="menu">과징금현황</a>
            <a href="#!" class="menu">위반내역</a>
            <a href="#!" class="menu">행정처분현황</a>
        </div>

        <div class="col">
            <div class="category">민원서비스</div>
            <div class="sub-category">민원관리</div>
            <a href="#!" class="menu">민원접수</a>
            <a href="#!" class="menu">현장조사</a>
            <a href="#!" class="menu">시료채취</a>
            <a href="#!" class="menu">행정처분</a>
        </div>

        <div class="col">
            <div class="category">고객센터</div>
            <div class="sub-category">고객센터</div>
            <a href="#!" class="menu">공지사항</a>
            <a href="#!" class="menu">FAQ</a>
            <a href="#!" class="menu">자료실</a>
            <a href="#!" class="menu">우수사례</a>
        </div>

    </div>
`;

class CommonPopupComponent {
    constructor(element) {
        this.element = element;
    }

    show() {
        document.body.append(this.element);
        document.body.style.overflowY = 'hidden';
        return new Promise(resolve => {
            this.resolve = resolve;
        });
    }

    close(value) {
        this.element.remove();
        document.body.style.overflowY = 'auto';
        this.resolve(value);
    }
}

class CommonModal extends CommonPopupComponent {
    constructor(title, message) {
        const root = document.createElement('div');
        super(root);
        this.root = root;

        if(title) { this.title = title };
        if(message) { this.message = message };

        this.root.classList.add('popup');
            
        const container = document.createElement('div');
        container.classList.add('container');

        const header = document.createElement('div');
        header.classList.add('header');

        const titleDiv = document.createElement('div');
        titleDiv.classList.add('title');
        if(this.title){
            titleDiv.textContent = this.title;
        }

        const headerCloseButton = document.createElement('button');
        headerCloseButton.setAttribute('type', 'button');
        headerCloseButton.classList.add('btn-popup-close');

        header.append(titleDiv);
        header.append(headerCloseButton);

        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.innerHTML = this.message;

        const footer = document.createElement('div');
        footer.classList.add('footer');

        const confirmButton = document.createElement('button');
        confirmButton.setAttribute('type', 'button');
        confirmButton.setAttribute('class','btn-primary confirm');
        confirmButton.textContent = '확인';

        const cancelButton = document.createElement('button');
        cancelButton.setAttribute('type', 'button');
        cancelButton.setAttribute('class','btn-secondary confirm');
        cancelButton.textContent = '취소';

        footer.append(cancelButton);
        footer.append(confirmButton);

        container.append(header);
        container.append(messageDiv);
        container.append(footer);

        this.root.append(container);

        headerCloseButton.addEventListener('click', () => {
            this.close(false);
        });

        cancelButton.addEventListener('click', () => {
            this.close(false);
        });

        confirmButton.addEventListener('click', () => {
            this.close(true);
        });
    }
}

const commonWindowPopup = (url, option) => {
    window.open(url, '_blank', option ? option : 'width=600, height=600, left=100, top=100, menubar=no, toolbar=no, location=no, status=no');
}

const setTableWidth = () => {
    document.querySelectorAll('.table-container table').forEach(table => {
        const parentWidth = table.parentElement.getBoundingClientRect().width;
        const tableWidth = table.getBoundingClientRect().width;
        if(parentWidth > tableWidth){
            table.style.width = '100%';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tab-row .tab').forEach(tab => {
        tab.addEventListener('click', event => {
            const tabName = event.target.dataset.name;
            document.querySelectorAll('.tab-row .tab').forEach(tab => { tab.classList.remove('on') });
            document.querySelector('.tab-row .tab[data-name="' + tabName + '"]').classList.add('on');
            document.querySelectorAll('.tab-contents').forEach(tabContents => { tabContents.classList.remove('on') });
            document.querySelector('.tab-contents[data-name="' + tabName + '"]').classList.add('on');
            setTableWidth();
        });
    });
    setTableWidth();

    document.querySelectorAll('.checkbox-row label').forEach(label => {
        label.addEventListener('click', event => {
            const checkbox = event.target.parentElement.querySelector('input[type=checkbox]');
            checkbox.checked = checkbox.checked ? false : true;
        });
    });

    document.querySelectorAll('.common__radio-group label').forEach(label => {
        label.addEventListener('click', event => {
            const radio = event.target.parentElement.querySelector('input[type=radio]');
            radio.click();
        });
    });

});