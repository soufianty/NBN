// AI PDF Designer - Main Application Logic

class PDFDesigner {
    constructor() {
        this.currentTemplate = null;
        this.recentDocuments = this.loadRecentDocuments();
        this.selectedText = '';
        this.isDarkTheme = localStorage.getItem('darkTheme') === 'true';
        this.currentFont = 'Cairo';
        this.currentFontSize = '14';
        
        this.initializeApp();
    }

    initializeApp() {
        this.setupEventListeners();
        this.initializeTheme();
        this.initializeLanguage();
        this.updateRecentDocuments();
        
        console.log('AI PDF Designer initialized');
    }

    setupEventListeners() {
        // Language selector
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.addEventListener('change', (e) => {
                setLanguage(e.target.value);
            });
        }

        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        // Sidebar tabs
        const tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.switchTab(button.getAttribute('data-tab'));
            });
        });

        // Template cards
        const templateCards = document.querySelectorAll('.template-card');
        templateCards.forEach(card => {
            card.addEventListener('click', () => {
                this.selectTemplate(card.getAttribute('data-template'));
            });
        });

        // Template search
        const templateSearch = document.getElementById('templateSearch');
        if (templateSearch) {
            templateSearch.addEventListener('input', (e) => {
                searchTemplates(e.target.value);
            });
        }

        // Toolbar buttons
        const toolbarButtons = document.querySelectorAll('.toolbar-btn[data-command]');
        toolbarButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.executeCommand(button.getAttribute('data-command'));
            });
        });

        // AI buttons
        const aiButtons = document.querySelectorAll('.ai-button[data-action]');
        aiButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.executeAIAction(button.getAttribute('data-action'));
            });
        });

        // Font settings
        const fontFamily = document.getElementById('fontFamily');
        if (fontFamily) {
            fontFamily.addEventListener('change', (e) => {
                this.changeFontFamily(e.target.value);
            });
        }

        const fontSize = document.getElementById('fontSize');
        if (fontSize) {
            fontSize.addEventListener('change', (e) => {
                this.changeFontSize(e.target.value);
            });
        }

        // Document actions
        const saveBtn = document.getElementById('saveBtn');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                this.saveDocument();
            });
        }

        const exportBtn = document.getElementById('exportBtn');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                this.exportToPDF();
            });
        }

        // Editor events
        const editor = document.getElementById('editor');
        if (editor) {
            editor.addEventListener('input', () => {
                this.onEditorInput();
            });

            editor.addEventListener('mouseup', () => {
                this.updateSelectedText();
            });

            editor.addEventListener('keyup', () => {
                this.updateSelectedText();
            });

            // Keyboard shortcuts
            editor.addEventListener('keydown', (e) => {
                this.handleKeyboardShortcuts(e);
            });
        }

        // Document title
        const documentTitle = document.getElementById('documentTitle');
        if (documentTitle) {
            documentTitle.addEventListener('input', () => {
                this.updateSaveButtonState();
            });
        }

        // Window resize
        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    initializeTheme() {
        if (this.isDarkTheme) {
            document.body.classList.add('dark-theme');
            const themeIcon = document.getElementById('themeIcon');
            if (themeIcon) {
                themeIcon.className = 'fas fa-sun';
            }
        }
    }

    toggleTheme() {
        this.isDarkTheme = !this.isDarkTheme;
        document.body.classList.toggle('dark-theme');
        
        const themeIcon = document.getElementById('themeIcon');
        if (themeIcon) {
            themeIcon.className = this.isDarkTheme ? 'fas fa-sun' : 'fas fa-moon';
        }
        
        localStorage.setItem('darkTheme', this.isDarkTheme.toString());
    }

    switchTab(tabName) {
        // Update tab buttons
        const tabButtons = document.querySelectorAll('.tab-button');
        tabButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        const activeTabButton = document.querySelector(`[data-tab="${tabName}"]`);
        if (activeTabButton) {
            activeTabButton.classList.add('active');
        }

        // Update tab content
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        const activeTabContent = document.getElementById(`${tabName}-tab`);
        if (activeTabContent) {
            activeTabContent.classList.add('active');
        }
    }

    selectTemplate(templateId) {
        // Update selected template card
        const templateCards = document.querySelectorAll('.template-card');
        templateCards.forEach(card => {
            card.classList.remove('selected');
        });

        const selectedCard = document.querySelector(`[data-template="${templateId}"]`);
        if (selectedCard) {
            selectedCard.classList.add('selected');
        }

        // Load template
        this.currentTemplate = templateId;
        loadTemplate(templateId);
        this.updateSaveButtonState();
        
        this.showNotification(t('template_selected') || 'Template selected');
    }

    executeCommand(command) {
        const editor = document.getElementById('editor');
        if (!editor) return;

        editor.focus();
        
        try {
            document.execCommand(command, false, null);
            this.updateToolbarState();
        } catch (error) {
            console.error('Error executing command:', error);
        }
    }

    executeAIAction(action) {
        const editor = document.getElementById('editor');
        if (!editor) return;

        this.showLoading();

        // Simulate AI processing delay
        setTimeout(() => {
            this.hideLoading();
            
            let aiContent = '';
            
            switch (action) {
                case 'generate':
                    aiContent = this.generateAIContent();
                    break;
                case 'improve':
                    aiContent = this.improveText();
                    break;
                case 'translate':
                    aiContent = this.translateText();
                    break;
                case 'summarize':
                    aiContent = this.summarizeText();
                    break;
                default:
                    return;
            }

            if (aiContent) {
                this.insertAIContent(aiContent);
                this.showNotification(t(`${action}_completed`) || `${action} completed`);
            }
        }, 1500);
    }

    generateAIContent() {
        const templates = {
            business: `
                <div class="ai-content">
                    <h3>خطاب تجاري احترافي</h3>
                    <p><strong>الموضوع:</strong> طلب اجتماع لمناقشة فرص التعاون</p>
                    <br/>
                    <p>السيد/السيدة المحترم/ة،</p>
                    <p>أتقدم إليكم بخالص التحية والاحترام، وأرغب في طلب موعد لاجتماع لمناقشة فرص التعاون المستقبلية بين شركتينا.</p>
                    <p>نحن نقدر خبرتكم في هذا المجال ونؤمن بأن التعاون بيننا سيحقق الفائدة المتبادلة.</p>
                    <p>أتطلع إلى سماع ردكم في أقرب وقت ممكن.</p>
                    <p>مع أطيب التحيات،<br/>[اسمك]</p>
                </div>
            `,
            meeting: `
                <div class="ai-content">
                    <h3>ملخص اجتماع</h3>
                    <p><strong>التاريخ:</strong> ${new Date().toLocaleDateString('ar-SA')}</p>
                    <p><strong>الحضور:</strong> [أسماء المشاركين]</p>
                    <h4>النقاط الرئيسية:</h4>
                    <ul>
                        <li>مراجعة الأهداف الربعية وتقييم الأداء</li>
                        <li>مناقشة التحديات الحالية واقتراح الحلول</li>
                        <li>تحديد الأولويات للأسابيع القادمة</li>
                    </ul>
                    <h4>المهام المطلوبة:</h4>
                    <ol>
                        <li>إعداد تقرير مفصل عن المشروع الحالي</li>
                        <li>تنسيق اجتماع مع الفريق الفني</li>
                        <li>مراجعة الميزانية المقترحة</li>
                    </ol>
                </div>
            `,
            proposal: `
                <div class="ai-content">
                    <h3>اقتراح مشروع</h3>
                    <h4>نظرة عامة</h4>
                    <p>هذا الاقتراح يهدف إلى تطوير حل مبتكر يلبي احتياجات السوق الحالية ويحقق قيمة مضافة للعملاء.</p>
                    <h4>الأهداف</h4>
                    <ul>
                        <li>تحسين كفاءة العمليات بنسبة 30%</li>
                        <li>تقليل التكاليف التشغيلية</li>
                        <li>زيادة رضا العملاء</li>
                    </ul>
                    <h4>الجدول الزمني</h4>
                    <p>المدة المتوقعة للمشروع: 6 أشهر</p>
                    <h4>الميزانية المطلوبة</h4>
                    <p>التكلفة التقديرية: [المبلغ] مع تفصيل شامل للتكاليف</p>
                </div>
            `
        };

        const randomTemplates = Object.values(templates);
        return randomTemplates[Math.floor(Math.random() * randomTemplates.length)];
    }

    improveText() {
        if (this.selectedText) {
            return `
                <div class="ai-content">
                    <h4>نص محسن بالذكاء الاصطناعي</h4>
                    <p><strong>النص الأصلي:</strong> ${this.selectedText}</p>
                    <hr style="margin: 15px 0; border: none; border-top: 1px solid #ddd;"/>
                    <p><strong>النص المحسن:</strong> ${this.enhanceText(this.selectedText)}</p>
                </div>
            `;
        } else {
            return `
                <div class="ai-content">
                    <h4>نصائح لتحسين الكتابة</h4>
                    <ul>
                        <li>استخدم جملاً واضحة ومباشرة</li>
                        <li>اختر كلمات دقيقة ومناسبة للسياق</li>
                        <li>نظم أفكارك بشكل منطقي</li>
                        <li>استخدم علامات الترقيم بشكل صحيح</li>
                        <li>راجع النص للتأكد من الدقة اللغوية</li>
                    </ul>
                </div>
            `;
        }
    }

    translateText() {
        if (this.selectedText) {
            return `
                <div class="ai-content">
                    <h4>ترجمة النص</h4>
                    <p><strong>النص الأصلي (العربية):</strong> ${this.selectedText}</p>
                    <hr style="margin: 15px 0; border: none; border-top: 1px solid #ddd;"/>
                    <p><strong>الترجمة (الإنجليزية):</strong> ${this.translateToEnglish(this.selectedText)}</p>
                </div>
            `;
        } else {
            return `
                <div class="ai-content">
                    <h4>خدمة الترجمة</h4>
                    <p>لاستخدام خدمة الترجمة، يرجى تحديد النص المراد ترجمته أولاً.</p>
                    <p><strong>اللغات المدعومة:</strong></p>
                    <ul>
                        <li>العربية ⟷ الإنجليزية</li>
                        <li>العربية ⟷ الفرنسية</li>
                        <li>العربية ⟷ الإسبانية</li>
                    </ul>
                </div>
            `;
        }
    }

    summarizeText() {
        if (this.selectedText) {
            return `
                <div class="ai-content">
                    <h4>ملخص النص</h4>
                    <p><strong>النص الكامل:</strong> ${this.selectedText}</p>
                    <hr style="margin: 15px 0; border: none; border-top: 1px solid #ddd;"/>
                    <p><strong>الملخص:</strong> ${this.createSummary(this.selectedText)}</p>
                </div>
            `;
        } else {
            return `
                <div class="ai-content">
                    <h4>خدمة التلخيص</h4>
                    <p>لاستخدام خدمة التلخيص، يرجى تحديد النص المراد تلخيصه أولاً.</p>
                    <p><strong>مميزات التلخيص:</strong></p>
                    <ul>
                        <li>استخراج النقاط الرئيسية</li>
                        <li>الحفاظ على المعنى الأساسي</li>
                        <li>تقليل طول النص بنسبة تصل إلى 70%</li>
                    </ul>
                </div>
            `;
        }
    }

    enhanceText(text) {
        // Simple text enhancement simulation
        const enhancements = [
            text.replace(/\./g, '. كما نود التأكيد على'),
            text + ' وهذا يعكس التزامنا بالجودة والاحترافية.',
            'بناءً على ما تقدم، ' + text.toLowerCase(),
            text + ' مما يساهم في تحقيق أهدافنا المشتركة.'
        ];
        
        return enhancements[Math.floor(Math.random() * enhancements.length)];
    }

    translateToEnglish(arabicText) {
        // Simple translation simulation
        const translations = {
            'مرحبا': 'Hello',
            'شكرا': 'Thank you',
            'من فضلك': 'Please',
            'عذرا': 'Sorry',
            'نعم': 'Yes',
            'لا': 'No'
        };

        let translation = arabicText;
        Object.keys(translations).forEach(arabic => {
            translation = translation.replace(new RegExp(arabic, 'g'), translations[arabic]);
        });

        return translation || `Translated: ${arabicText}`;
    }

    createSummary(text) {
        // Simple summarization simulation
        const sentences = text.split('.');
        const summary = sentences.slice(0, Math.max(1, Math.floor(sentences.length / 2))).join('. ');
        return summary + (summary.endsWith('.') ? '' : '.');
    }

    insertAIContent(content) {
        const editor = document.getElementById('editor');
        if (!editor) return;

        const selection = window.getSelection();
        
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            range.deleteContents();
            
            const div = document.createElement('div');
            div.innerHTML = content;
            range.insertNode(div);
        } else {
            editor.innerHTML += content;
        }

        // Move cursor to end
        const range = document.createRange();
        range.selectNodeContents(editor);
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
    }

    changeFontFamily(fontFamily) {
        this.currentFont = fontFamily;
        const editor = document.getElementById('editor');
        if (editor) {
            editor.style.fontFamily = fontFamily;
        }
    }

    changeFontSize(fontSize) {
        this.currentFontSize = fontSize;
        const editor = document.getElementById('editor');
        if (editor) {
            editor.style.fontSize = fontSize + 'px';
        }
    }

    updateSelectedText() {
        const selection = window.getSelection();
        this.selectedText = selection.toString().trim();
    }

    updateToolbarState() {
        const commands = ['bold', 'italic', 'underline'];
        
        commands.forEach(command => {
            const button = document.querySelector(`[data-command="${command}"]`);
            if (button) {
                try {
                    const isActive = document.queryCommandState(command);
                    button.classList.toggle('active', isActive);
                } catch (error) {
                    // Ignore queryCommandState errors
                }
            }
        });
    }

    onEditorInput() {
        this.updateSaveButtonState();
        
        // Auto-save after 30 seconds of inactivity
        clearTimeout(this.autoSaveTimeout);
        this.autoSaveTimeout = setTimeout(() => {
            this.autoSave();
        }, 30000);
    }

    updateSaveButtonState() {
        const saveBtn = document.getElementById('saveBtn');
        const documentTitle = document.getElementById('documentTitle');
        const editor = document.getElementById('editor');

        if (saveBtn) {
            const hasTitle = documentTitle && documentTitle.value.trim();
            const hasContent = editor && editor.innerHTML.trim();
            saveBtn.disabled = !(hasTitle && hasContent);
        }
    }

    saveDocument() {
        const documentTitle = document.getElementById('documentTitle');
        const editor = document.getElementById('editor');

        if (!documentTitle || !editor || !documentTitle.value.trim() || !editor.innerHTML.trim()) {
            this.showNotification('يرجى إدخال عنوان المستند والمحتوى', 'error');
            return;
        }

        this.showLoading();

        // Simulate save delay
        setTimeout(() => {
            const document = {
                id: Date.now().toString(),
                title: documentTitle.value.trim(),
                content: editor.innerHTML,
                date: new Date().toLocaleDateString('ar-SA'),
                template: this.currentTemplate
            };

            this.addToRecentDocuments(document);
            this.hideLoading();
            this.showNotification(t('document_saved'));
        }, 1000);
    }

    autoSave() {
        const documentTitle = document.getElementById('documentTitle');
        const editor = document.getElementById('editor');

        if (documentTitle && editor && documentTitle.value.trim() && editor.innerHTML.trim()) {
            // Auto-save logic here
            console.log('Auto-saving document...');
        }
    }

    exportToPDF() {
        const editor = document.getElementById('editor');
        const documentTitle = document.getElementById('documentTitle');

        if (!editor || !editor.innerHTML.trim()) {
            this.showNotification('لا يوجد محتوى للتصدير', 'error');
            return;
        }

        this.showLoading();

        // Use html2canvas and jsPDF
        html2canvas(editor, {
            scale: 2,
            useCORS: true,
            logging: false,
            width: editor.scrollWidth,
            height: editor.scrollHeight
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const imgWidth = 210;
            const pageHeight = 295;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            const fileName = documentTitle?.value?.trim() || 'document';
            pdf.save(`${fileName}.pdf`);

            this.hideLoading();
            this.showNotification(t('pdf_exported'));
        }).catch(error => {
            console.error('Error generating PDF:', error);
            this.hideLoading();
            this.showNotification('حدث خطأ أثناء تصدير PDF', 'error');
        });
    }

    addToRecentDocuments(document) {
        this.recentDocuments.unshift(document);
        this.recentDocuments = this.recentDocuments.slice(0, 10); // Keep only 10 recent documents
        this.saveRecentDocuments();
        this.updateRecentDocuments();
    }

    loadRecentDocuments() {
        try {
            const stored = localStorage.getItem('recentDocuments');
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            return [];
        }
    }

    saveRecentDocuments() {
        try {
            localStorage.setItem('recentDocuments', JSON.stringify(this.recentDocuments));
        } catch (error) {
            console.error('Error saving recent documents:', error);
        }
    }

    updateRecentDocuments() {
        const recentList = document.getElementById('recentList');
        if (!recentList) return;

        if (this.recentDocuments.length === 0) {
            recentList.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-folder-open"></i>
                    <p>${t('no_recent')}</p>
                </div>
            `;
        } else {
            recentList.innerHTML = this.recentDocuments.map(doc => `
                <div class="recent-item" data-doc-id="${doc.id}">
                    <div class="recent-item-title">${doc.title}</div>
                    <div class="recent-item-date">${doc.date}</div>
                </div>
            `).join('');

            // Add click handlers
            const recentItems = recentList.querySelectorAll('.recent-item');
            recentItems.forEach(item => {
                item.addEventListener('click', () => {
                    const docId = item.getAttribute('data-doc-id');
                    this.loadRecentDocument(docId);
                });
            });
        }
    }

    loadRecentDocument(docId) {
        const document = this.recentDocuments.find(doc => doc.id === docId);
        if (document) {
            const editor = document.getElementById('editor');
            const documentTitle = document.getElementById('documentTitle');

            if (editor) editor.innerHTML = document.content;
            if (documentTitle) documentTitle.value = document.title;

            this.currentTemplate = document.template;
            this.showNotification('تم تحميل المستند');
        }
    }

    handleKeyboardShortcuts(event) {
        if (event.ctrlKey || event.metaKey) {
            switch (event.key.toLowerCase()) {
                case 's':
                    event.preventDefault();
                    this.saveDocument();
                    break;
                case 'b':
                    event.preventDefault();
                    this.executeCommand('bold');
                    break;
                case 'i':
                    event.preventDefault();
                    this.executeCommand('italic');
                    break;
                case 'u':
                    event.preventDefault();
                    this.executeCommand('underline');
                    break;
            }
        }
    }

    handleResize() {
        // Handle responsive layout changes
        const sidebar = document.querySelector('.sidebar');
        const mainContent = document.querySelector('.main-content');
        
        if (window.innerWidth <= 768) {
            // Mobile layout adjustments
            if (sidebar && mainContent) {
                // Add mobile-specific styling if needed
            }
        }
    }

    showLoading() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.classList.remove('hidden');
        }
    }

    hideLoading() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.classList.add('hidden');
        }
    }

    showNotification(message, type = 'success') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'error' ? '#ef4444' : '#10b981'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            z-index: 1000;
            font-family: inherit;
            max-width: 300px;
            word-wrap: break-word;
            animation: slideIn 0.3s ease;
        `;
        
        notification.textContent = message;
        document.body.appendChild(notification);

        // Add animation styles
        if (!document.getElementById('notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                @keyframes slideOut {
                    from { transform: translateX(0); opacity: 1; }
                    to { transform: translateX(100%); opacity: 0; }
                }
            `;
            document.head.appendChild(style);
        }

        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
    new PDFDesigner();
});