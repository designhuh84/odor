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
                const globalHeaderMenuHeight = document.querySelector('global-header-menu').scrollHeight;
                document.querySelector('global-header-menu').style.height = globalHeaderMenuHeight + 'px';
            }else{
                document.querySelector('global-header-menu').style.height = '0px';
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
            <a href="#!">기술지원</a>
            <a href="#!">기술진단</a>
            <a href="#!">시료관리</a>
            <a href="./sub03.html">통계현황</a>
            <a href="#!">민원서비스</a>
            <a href="#!">민원현황</a>
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
            <div class="rows">
                <div class="row">
                    <div class="sub-category">사업장정보관리</div>
                    <div class="menus">
                        <a href="./sub01.html" class="menu">사업장관리</a>
                        <a href="#!" class="menu">변경신고서관리</a>
                        <a href="./sub01-1.html" class="menu">지도점검 및 행정처분</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="category">기술지원</div>
            <div class="rows">
                <div class="row">
                    <div class="sub-category">기술지원</div>
                    <div class="menus">
                        <a href="./TCS_001_01.html" class="menu">신청정보</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="category">기술진단</div>
            <div class="rows">
                <div class="row">
                    <div class="sub-category">전문기관</div>
                    <div class="menus">
                        <a href="#!" class="menu">전문기관관리</a>
                    </div>
                </div>
                <div class="row">
                    <div class="sub-category">기술진단</div>
                    <div class="menus">
                        <a href="./TCD_003_01.html" class="menu">접수 및 수행관리</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="category">시료관리</div>
            <div class="rows">
                <div class="row">
                    <div class="sub-category">악취시료</div>
                    <div class="menus">
                        <a href="./SCM_001_01.html" class="menu">기술지원 분석</a>
                        <a href="#!" class="menu">외부 분석</a>
                    </div>
                </div>
                <div class="row">
                    <div class="sub-category">검사기관</div>
                    <div class="menus">
                        <a href="#!" class="menu">검사기관관리</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="category">통계현황</div>
            <div class="rows">
                <div class="row">
                    <div class="sub-category">악취민원실태조사</div>
                    <div class="menus">
                        <a href="./STS_028_03.html" class="menu">월별현황</a>
                        <a href="./STS_029_01.html" class="menu">지역별현황</a>
                        <a href="./STS_031_02.html" class="menu">환경기초시설현황</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="category">민원서비스</div>
            <div class="rows">
                <div class="row">
                    <div class="sub-category">민원서비스</div>
                    <div class="menus">
                        <a href="#!" class="menu">민원신청(국민신문고)</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="category">민원현황</div>
            <div class="rows">
                <div class="row">
                    <div class="sub-category">민원현황</div>
                    <div class="menus">
                        <a href="#!" class="menu">민원MAP</a>
                        <a href="#!" class="menu">기간별 현황</a>
                        <a href="#!" class="menu">지역별현황</a>
                        <a href="#!" class="menu">생활악취현황</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="category">고객센터</div>
            <div class="rows">
                <div class="row">
                    <div class="sub-category">공지사항</div>
                    <div class="menus">
                        <a href="#!" class="menu">공지사항</a>
                    </div>
                </div>
                <div class="row">
                    <div class="sub-category">FAQ</div>
                    <div class="menus">
                        <a href="#!" class="menu">FAQ</a>
                    </div>
                </div>
                <div class="row">
                    <div class="sub-category">자료실</div>
                    <div class="menus">
                        <a href="#!" class="menu">자료실</a>
                    </div>
                </div>
                <div class="row">
                    <div class="sub-category">우수사례</div>
                    <div class="menus">
                        <a href="#!" class="menu">우수사례</a>
                    </div>
                </div>
            </div>
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

    document.querySelectorAll('.common-radio label').forEach(label => {
        label.addEventListener('click', event => {
            event.target.closest('.common-radio').querySelector('input[type="radio"]').checked = true;
        });
    });

    document.querySelectorAll('table td textarea').forEach(textarea => {
        observer.observe(textarea);
    });

});

const observer = new IntersectionObserver(elements => {
    console.log(elements);
    elements.forEach(element => {
        if(element.isIntersecting){
            setTextAreaHeight(element.target);
        }
    });
});

const setTextAreaHeight = element => {
    const target = element.parentElement.previousElementSibling;
    const targetHeight = target.getBoundingClientRect().height;
    const targetPaddingTop = parseFloat(window.getComputedStyle(target).paddingTop);
    const targetPaddingBottom = parseFloat(window.getComputedStyle(target).paddingBottom);
    element.style.height = targetHeight - targetPaddingTop - targetPaddingBottom + 'px';
}