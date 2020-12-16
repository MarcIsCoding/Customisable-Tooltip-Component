const template = document.createElement('template')

template.innerHTML = `
    <style>
        :host {
            --msg-bg: white;
        }
        .open {
            cursor: pointer;
            opacity: .8;
            font-weight: bolder;
        }
        .tooltip-container {
            display: inline-block;
            position: relative;
            z-index: 10;
        }
        .message-container {
            position: absolute;
            bottom: 125%;
            z-index: 20;
            width: 300px;
            background: var(--msg-bg);
            box-shadow: 5px 5px 10px rgba(0,0,0,.1);
            font-size: .8em;
            font-weight: bold;
            border-radius: 0.5em;
            padding: 1em;
            transform: scale(0);
            transform-origin: bottom left;
            transition: transform 0.5s cubic-bezier(0.860, 0.000, 0.070, 1.000);
        }
        .message-container:before {
            border: solid;
            border-color: var(--msg-bg) transparent;
            border-width: 15px 8px 0 8px;
            content: "";
            left: 5px;
            bottom: -10px;
            position: absolute;
            transform: rotate(20deg)
        }
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            z-index: 15;
            display: none;
        }
    </style>
    <div class="tooltip-container">
        <div class="open alert-container">
            <slot name="alert" />
        </div>

        <div class="message-container">
            <slot name="message" />
        </div>
        <div class="overlay"></div>
    </div>
`

class MgTooltip extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }

    tooltip(expandState) {
        const tooltip = this.shadowRoot.querySelector('.message-container')
        const open = this.shadowRoot.querySelector('.open')

        if(expandState == true) {
            tooltip.style.transform = 'scale(1)'
            expandState = false
        } else {
            tooltip.style.transform = 'scale(0)'
        }

    }

    connectedCallback() {

        if(this.getAttribute('click_toggle')){
            this.shadowRoot.querySelector('.open').addEventListener('click', () => {
                this.tooltip(true)
                this.shadowRoot.querySelector('.overlay').style.display = 'block'
            })
            this.shadowRoot.querySelector('.overlay').addEventListener('click', () => {
                this.tooltip(false)
                this.shadowRoot.querySelector('.overlay').style.display = 'none'
            })
        }else{
            this.shadowRoot.querySelector('.open').addEventListener('mouseover', () => {
                this.tooltip(true)
            })
            this.shadowRoot.querySelector('.open').addEventListener('mouseout', () => {
                this.tooltip(false)
            })
        }
        if(this.getAttribute('message_bg')){
            this.shadowRoot.querySelector('.message-container').style.setProperty('--msg-bg', this.getAttribute('message_bg'))
        }
        if(this.getAttribute('message_txt_color')){
            this.shadowRoot.querySelector('.message-container').style.color = this.getAttribute('message_txt_color')
        }
        if(this.getAttribute('message_weight')){
            this.shadowRoot.querySelector('.message-container').style.fontWeight = this.getAttribute('message_weight')
        }
        if(this.getAttribute('tooltip_shadow')){
            this.shadowRoot.querySelector('.message-container').style.boxShadow = this.getAttribute('tooltip_shadow')
        }
        if(this.getAttribute('alert_decoration')){
            this.shadowRoot.querySelector('.alert-container').style.textDecoration = this.getAttribute('alert_decoration')
        }
        if(this.getAttribute('alert_hl_color')){
            this.shadowRoot.querySelector('.alert-container').style.background = this.getAttribute('alert_hl_color')
            this.shadowRoot.querySelector('.alert-container').style.padding = '0rem 0.25rem'
            this.shadowRoot.querySelector('.alert-container').style.borderRadius = '.25rem'
        }
        if(this.getAttribute('alert_txt_color')){
            this.shadowRoot.querySelector('.alert-container').style.color = this.getAttribute('alert_txt_color')
        }
        if(this.getAttribute('alert_opacity')){
            this.shadowRoot.querySelector('.alert-container').style.opacity = this.getAttribute('alert_opacity')
        }
        if(this.getAttribute('alert_weight')){
            this.shadowRoot.querySelector('.alert-container').style.fontWeight = this.getAttribute('alert_weight')
        }
    }
}

window.customElements.define('mg-tooltip', MgTooltip)