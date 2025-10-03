/**
 * Term Tooltip System for al-folio
 * Provides clickable term explanations with floating tooltips
 */

class TermTooltip {
    constructor() {
        this.activeTooltip = null;
        this.init();
    }

    init() {
        // Create tooltip container
        this.createTooltipContainer();
        
        // Bind events
        this.bindEvents();
        
        // Initialize clickable terms
        this.initializeTerms();
    }

    createTooltipContainer() {
        const tooltip = document.createElement('div');
        tooltip.id = 'term-tooltip';
        tooltip.className = 'term-tooltip hidden';
        tooltip.innerHTML = `
            <div class="tooltip-content">
                <button class="tooltip-close" aria-label="Close tooltip">&times;</button>
                <div class="tooltip-text"></div>
            </div>
        `;
        document.body.appendChild(tooltip);
        this.tooltip = tooltip;
    }

    bindEvents() {
        // Close tooltip when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.clickable-term') && !e.target.closest('#term-tooltip')) {
                this.hideTooltip();
            }
        });

        // Close tooltip with ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hideTooltip();
            }
        });

        // Close button
        this.tooltip.querySelector('.tooltip-close').addEventListener('click', () => {
            this.hideTooltip();
        });
    }

    initializeTerms() {
        const clickableTerms = document.querySelectorAll('.clickable-term');
        clickableTerms.forEach(term => {
            term.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showTooltip(term);
            });
        });
    }

    showTooltip(termElement) {
        const definition = termElement.getAttribute('data-definition');
        const title = termElement.getAttribute('data-title') || termElement.textContent;
        
        if (!definition) return;

        // Update tooltip content
        const tooltipText = this.tooltip.querySelector('.tooltip-text');
        tooltipText.innerHTML = `
            <h4>${title}</h4>
            <p>${definition}</p>
        `;

        // Position tooltip
        this.positionTooltip(termElement);
        
        // Show tooltip
        this.tooltip.classList.remove('hidden');
        this.activeTooltip = termElement;
    }

    positionTooltip(termElement) {
        const rect = termElement.getBoundingClientRect();
        const tooltipRect = this.tooltip.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        let left = rect.left + (rect.width / 2) - (tooltipRect.width / 2);
        let top = rect.bottom + 10;
        
        // Adjust horizontal position if tooltip goes off screen
        if (left < 10) {
            left = 10;
        } else if (left + tooltipRect.width > viewportWidth - 10) {
            left = viewportWidth - tooltipRect.width - 10;
        }
        
        // Adjust vertical position if tooltip goes off screen
        if (top + tooltipRect.height > viewportHeight - 10) {
            top = rect.top - tooltipRect.height - 10;
        }
        
        this.tooltip.style.left = `${left}px`;
        this.tooltip.style.top = `${top}px`;
    }

    hideTooltip() {
        if (this.tooltip) {
            this.tooltip.classList.add('hidden');
            this.activeTooltip = null;
        }
    }

    // Method to add new terms dynamically
    addTerm(selector, title, definition) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.classList.add('clickable-term');
            element.setAttribute('data-title', title);
            element.setAttribute('data-definition', definition);
            element.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showTooltip(element);
            });
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.termTooltip = new TermTooltip();
});