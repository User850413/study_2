import { createRoot } from "react-dom/client";

class Modal {
    constructor( {
        title               = '모달 제목',
        className           = '',
        closeOnDim          = true,
        closeOnEsc          = true,
        onOpen              = null,
        onClose             = null
    } = {} ){
        this.title          = title;
        this.className      = className;
        this.closeOnDim     = closeOnDim;
        this.closeOnEsc     = closeOnEsc;
        this.onOpen         = typeof onOpen == "function" ? onOpen : null;
        this.onClose        = typeof onClose == "function" ? onClose : null;

        this.isOpen         = false;
        this.root           = null;
        this.area           = null;
        this._reactRoot     = null;
        this._prevFocus     = null;
        this._keydown       = null;
    }

    _build() {
        const root = document.createElement("div");
        root.className = `modal ${this.className}`.trim();
        root.setAttribute("role", "dialog");
        root.setAttribute("aria-modal", "true");
        root.setAttribute("tabIndex", "-1");

        root.innerHTML = `
            <div class="modal_dim"></div>
            <div class="modal_area">
                <div class="modal_header"><p>${this.title}</p><span class="modalCloseBtn">x</span></div>
                <div class="modal_content"></div>
            </div>
        `

        const closeBtn = root.querySelector(".modalCloseBtn");
        const dim = root.querySelector(".modal_dim");
        const content = root.querySelector(".modal_content");

        closeBtn.addEventListener("click", () => this.close());
        if (this.closeOnDim) dim.addEventListener("click", () => this.close());

        this._keydown = (e) => {
            if(this.closeOnEsc && e.key =="Escape") this.close();
        }

        this.root = root;
        this.area = content;
    }

    _ensureBuilt() {
        if(!this.root) this._build();
    }

    _lockScroll() {
        this._prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
    }

    _unlockScroll() {
        document.body.style.overflow = this._prevOverflow || '';
    }

    open() {
        if(this.isOpen) return;
        this._ensureBuilt();

        this.isOpen = true;
        this._prevFocus = document.activeElement;

        document.body.appendChild(this.root);
        document.addEventListener('keydown', this._keydown);
        this._lockScroll();

        this.root.focus();

        if(this.onOpen) this.onOpen();
    }

    render(reactElement) {
        this._ensureBuilt();
        if(!this._reactRoot) {
            this._reactRoot = createRoot(this.area);
        }
        this._reactRoot.render(reactElement);
    }

    close() {
        if(!this.isOpen) return;
        this.isOpen = false;

        if(this.root?.parentNode) this.root.parentNode.removeChild(this.root);
        document.removeEventListener('keydown', this._keydown);
        this._unlockScroll();

        if(this._prevFocus?.focus) this._prevFocus.focus();

        if(this.onClose) this.onClose();
    }

    destroy() {
        this.close();
        if(this._reactRoot) {
            this._reactRoot.unmount();
            this._reactRoot = null;
        }
        this.root = null;
        this.area = null;
    }
}

export default Modal;