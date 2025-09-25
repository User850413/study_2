
class Modal {
    constructor( {
        className = '',
        isOpen = false, 
        onOpen = null, 
        onClose = null, 
        message ='비어있습니다',
        contentNode =  null
    } = {} ){
        this.className = className;
        this.isOpen = Boolean(isOpen);
        this.onOpen = typeof onOpen === "function" ? onOpen : null;
        this.onClose = typeof onClose === "function" ? onClose : null;

        this.message = contentNode ? null : String(message);
        this.contentNode = contentNode ?? null;
    }

    _build() {
        const root = document.createElement("div");
        root.className = `modal ${this.className}`.trim();
        root.setAttribute('role', 'dialog');
        root.setAttribute('aria-modal', 'true');

        root.innerHTML = `
            <div class="modal_dim"></div>
            <div class="modal_area ${this.className}"></div>
        `
        
        const body = root.querySelector(".modal_area");
        root.querySelector(".modal_dim").addEventListener("click", () => this.close());
        
        if(this.contentNode instanceof Node) body.appendChild(this.contentNode);
        else body.innerHTML = String(this.contentNode ?? this.message ?? '비어있습니다.');

        this.root = root;
    }

    open() {
        if(this.isOpen) return;
        if(!this.root) this._build();
        this.isOpen = true;
        document.body.appendChild(this.root);
        if(this.onOpen) this.onOpen();
    }

    close() {
        if(!this.isOpen) return;
        this.isOpen = false;
        if(this.root?.parentNode) this.root.parentNode.removeChild(this.root);
        if(this.onClose) this.onClose();
    }

    setMessage(msg) {
        this.message = String(msg);
        this.contentNode = null;
    }

    setContentNode(node) {
        this.contentNode = node;
        this.message = null;
    }
}

export default Modal;