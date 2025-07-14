import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ar: {
    translation: {
      // Header
      'ai_pdf_designer': 'مصمم PDF الذكي',
      'language': 'اللغة',
      'dark_mode': 'الوضع المظلم',
      'light_mode': 'الوضع المضيء',
      
      // Navigation
      'new_document': 'مستند جديد',
      'templates': 'القوالب',
      'my_documents': 'مستنداتي',
      'settings': 'الإعدادات',
      
      // Templates
      'business_letter': 'خطاب تجاري',
      'resume': 'سيرة ذاتية',
      'invoice': 'فاتورة',
      'contract': 'عقد',
      'report': 'تقرير',
      'presentation': 'عرض تقديمي',
      'blank_document': 'مستند فارغ',
      
      // Editor
      'bold': 'عريض',
      'italic': 'مائل',
      'underline': 'تحته خط',
      'font_size': 'حجم الخط',
      'font_family': 'نوع الخط',
      'text_color': 'لون النص',
      'background_color': 'لون الخلفية',
      'align_left': 'محاذاة يسار',
      'align_center': 'محاذاة وسط',
      'align_right': 'محاذاة يمين',
      'justify': 'ضبط',
      'bullet_list': 'قائمة نقطية',
      'numbered_list': 'قائمة مرقمة',
      'insert_image': 'إدراج صورة',
      'insert_table': 'إدراج جدول',
      'insert_link': 'إدراج رابط',
      
      // AI Features
      'ai_assistant': 'مساعد ذكي',
      'generate_content': 'توليد المحتوى',
      'improve_text': 'تحسين النص',
      'translate_text': 'ترجمة النص',
      'summarize': 'تلخيص',
      'expand_text': 'توسيع النص',
      'fix_grammar': 'تصحيح القواعد',
      'change_tone': 'تغيير النبرة',
      
      // Document Actions
      'save': 'حفظ',
      'export_pdf': 'تصدير PDF',
      'print': 'طباعة',
      'share': 'مشاركة',
      'preview': 'معاينة',
      'full_screen': 'شاشة كاملة',
      
      // Placeholders
      'document_title': 'عنوان المستند',
      'start_typing': 'ابدأ الكتابة هنا...',
      'search_templates': 'البحث في القوالب...',
      'ai_prompt': 'اكتب طلبك للذكاء الاصطناعي...',
      
      // Messages
      'document_saved': 'تم حفظ المستند',
      'pdf_exported': 'تم تصدير PDF',
      'loading': 'جاري التحميل...',
      'error_occurred': 'حدث خطأ',
      'select_template': 'اختر قالباً للبدء',
      'ai_generating': 'الذكاء الاصطناعي يولد المحتوى...',
    }
  },
  en: {
    translation: {
      // Header
      'ai_pdf_designer': 'AI PDF Designer',
      'language': 'Language',
      'dark_mode': 'Dark Mode',
      'light_mode': 'Light Mode',
      
      // Navigation
      'new_document': 'New Document',
      'templates': 'Templates',
      'my_documents': 'My Documents',
      'settings': 'Settings',
      
      // Templates
      'business_letter': 'Business Letter',
      'resume': 'Resume',
      'invoice': 'Invoice',
      'contract': 'Contract',
      'report': 'Report',
      'presentation': 'Presentation',
      'blank_document': 'Blank Document',
      
      // Editor
      'bold': 'Bold',
      'italic': 'Italic',
      'underline': 'Underline',
      'font_size': 'Font Size',
      'font_family': 'Font Family',
      'text_color': 'Text Color',
      'background_color': 'Background Color',
      'align_left': 'Align Left',
      'align_center': 'Align Center',
      'align_right': 'Align Right',
      'justify': 'Justify',
      'bullet_list': 'Bullet List',
      'numbered_list': 'Numbered List',
      'insert_image': 'Insert Image',
      'insert_table': 'Insert Table',
      'insert_link': 'Insert Link',
      
      // AI Features
      'ai_assistant': 'AI Assistant',
      'generate_content': 'Generate Content',
      'improve_text': 'Improve Text',
      'translate_text': 'Translate Text',
      'summarize': 'Summarize',
      'expand_text': 'Expand Text',
      'fix_grammar': 'Fix Grammar',
      'change_tone': 'Change Tone',
      
      // Document Actions
      'save': 'Save',
      'export_pdf': 'Export PDF',
      'print': 'Print',
      'share': 'Share',
      'preview': 'Preview',
      'full_screen': 'Full Screen',
      
      // Placeholders
      'document_title': 'Document Title',
      'start_typing': 'Start typing here...',
      'search_templates': 'Search templates...',
      'ai_prompt': 'Tell AI what you want...',
      
      // Messages
      'document_saved': 'Document saved',
      'pdf_exported': 'PDF exported',
      'loading': 'Loading...',
      'error_occurred': 'An error occurred',
      'select_template': 'Select a template to get started',
      'ai_generating': 'AI is generating content...',
    }
  },
  fr: {
    translation: {
      'ai_pdf_designer': 'Concepteur PDF IA',
      'language': 'Langue',
      'new_document': 'Nouveau Document',
      'templates': 'Modèles',
      'my_documents': 'Mes Documents',
      'settings': 'Paramètres',
      'business_letter': 'Lettre commerciale',
      'resume': 'CV',
      'invoice': 'Facture',
      'contract': 'Contrat',
      'report': 'Rapport',
      'presentation': 'Présentation',
      'blank_document': 'Document vierge',
      'save': 'Enregistrer',
      'export_pdf': 'Exporter PDF',
      'print': 'Imprimer',
      'ai_assistant': 'Assistant IA',
      'generate_content': 'Générer du contenu',
      'start_typing': 'Commencez à taper ici...',
    }
  },
  es: {
    translation: {
      'ai_pdf_designer': 'Diseñador PDF IA',
      'language': 'Idioma',
      'new_document': 'Nuevo Documento',
      'templates': 'Plantillas',
      'my_documents': 'Mis Documentos',
      'settings': 'Configuración',
      'business_letter': 'Carta comercial',
      'resume': 'Currículum',
      'invoice': 'Factura',
      'contract': 'Contrato',
      'report': 'Informe',
      'presentation': 'Presentación',
      'blank_document': 'Documento en blanco',
      'save': 'Guardar',
      'export_pdf': 'Exportar PDF',
      'print': 'Imprimir',
      'ai_assistant': 'Asistente IA',
      'generate_content': 'Generar contenido',
      'start_typing': 'Comienza a escribir aquí...',
    }
  },
  de: {
    translation: {
      'ai_pdf_designer': 'KI PDF Designer',
      'language': 'Sprache',
      'new_document': 'Neues Dokument',
      'templates': 'Vorlagen',
      'my_documents': 'Meine Dokumente',
      'settings': 'Einstellungen',
      'business_letter': 'Geschäftsbrief',
      'resume': 'Lebenslauf',
      'invoice': 'Rechnung',
      'contract': 'Vertrag',
      'report': 'Bericht',
      'presentation': 'Präsentation',
      'blank_document': 'Leeres Dokument',
      'save': 'Speichern',
      'export_pdf': 'PDF exportieren',
      'print': 'Drucken',
      'ai_assistant': 'KI-Assistent',
      'generate_content': 'Inhalt generieren',
      'start_typing': 'Hier tippen...',
    }
  },
  zh: {
    translation: {
      'ai_pdf_designer': 'AI PDF 设计器',
      'language': '语言',
      'new_document': '新文档',
      'templates': '模板',
      'my_documents': '我的文档',
      'settings': '设置',
      'business_letter': '商务信函',
      'resume': '简历',
      'invoice': '发票',
      'contract': '合同',
      'report': '报告',
      'presentation': '演示文稿',
      'blank_document': '空白文档',
      'save': '保存',
      'export_pdf': '导出PDF',
      'print': '打印',
      'ai_assistant': 'AI助手',
      'generate_content': '生成内容',
      'start_typing': '在此开始输入...',
    }
  },
  hi: {
    translation: {
      'ai_pdf_designer': 'एआई पीडीएफ डिज़ाइनर',
      'language': 'भाषा',
      'new_document': 'नया दस्तावेज़',
      'templates': 'टेम्प्लेट',
      'my_documents': 'मेरे दस्तावेज़',
      'settings': 'सेटिंग्स',
      'business_letter': 'व्यावसायिक पत्र',
      'resume': 'बायोडाटा',
      'invoice': 'बिल',
      'contract': 'अनुबंध',
      'report': 'रिपोर्ट',
      'presentation': 'प्रस्तुति',
      'blank_document': 'खाली दस्तावेज़',
      'save': 'सहेजें',
      'export_pdf': 'पीडीएफ निर्यात करें',
      'print': 'प्रिंट करें',
      'ai_assistant': 'एआई सहायक',
      'generate_content': 'सामग्री उत्पन्न करें',
      'start_typing': 'यहाँ टाइप करना शुरू करें...',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ar', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;