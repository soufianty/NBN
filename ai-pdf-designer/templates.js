// Document templates for the AI PDF Designer
const documentTemplates = {
    blank: {
        name: 'blank_document',
        content: '',
        style: {}
    },
    
    business: {
        name: 'business_letter',
        content: `
<div style="font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; direction: inherit;">
    <div style="text-align: right; margin-bottom: 40px;">
        <p style="margin: 5px 0;">
            <strong>[اسمك]</strong><br/>
            [عنوانك]<br/>
            [المدينة، الرمز البريدي]<br/>
            [البريد الإلكتروني]<br/>
            [رقم الهاتف]
        </p>
        <p style="margin: 20px 0 0 0;"><strong>[التاريخ]</strong></p>
    </div>

    <div style="margin-bottom: 30px;">
        <p style="margin: 5px 0;">
            <strong>[اسم المستقبل]</strong><br/>
            [المنصب]<br/>
            [اسم الشركة]<br/>
            [العنوان]<br/>
            [المدينة، الرمز البريدي]
        </p>
    </div>

    <p style="margin: 20px 0;"><strong>المحترم/ة [اسم المستقبل]،</strong></p>

    <p style="margin: 15px 0;">أكتب إليكم بخصوص [اذكر الهدف بوضوح]. هذه الرسالة للإبلاغ عن [اشرح سبب الكتابة].</p>

    <p style="margin: 15px 0;">[الفقرة الأولى - قدم التفاصيل والسياق]</p>

    <p style="margin: 15px 0;">[الفقرة الثانية - معلومات إضافية أو تفاصيل داعمة]</p>

    <p style="margin: 15px 0;">أشكركم على وقتكم واهتمامكم. أتطلع إلى [الخطوات التالية أو النتيجة المرجوة].</p>

    <p style="margin: 30px 0 0 0;">
        <strong>مع أطيب التحيات،</strong><br/>
        <strong>[اسمك]</strong>
    </p>
</div>`,
        style: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
            lineHeight: '1.6'
        }
    },
    
    resume: {
        name: 'resume',
        content: `
<div style="font-family: Arial, sans-serif; line-height: 1.5; margin: 30px; direction: inherit;">
    <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px;">
        <h1 style="margin: 0; font-size: 32px; color: #333; font-weight: bold;">[اسمك الكامل]</h1>
        <p style="margin: 10px 0; color: #666; font-size: 16px;">[بريدك الإلكتروني] | [رقم هاتفك] | [عنوانك] | [الملف الشخصي على LinkedIn]</p>
    </div>

    <h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px;">الملخص المهني</h2>
    <p style="margin: 10px 0; text-align: justify;">[اكتب ملخصاً موجزاً عن خلفيتك المهنية ومؤهلاتك الرئيسية]</p>

    <h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px;">الخبرة العملية</h2>
    <div style="margin-bottom: 20px;">
        <h3 style="margin: 0; color: #333; font-size: 18px;">[المسمى الوظيفي] - [اسم الشركة]</h3>
        <p style="margin: 5px 0; color: #666; font-style: italic;">[تاريخ البداية] - [تاريخ النهاية]</p>
        <ul style="margin: 10px 0; padding-right: 20px;">
            <li style="margin: 5px 0;">[إنجاز أو مسؤولية رئيسية]</li>
            <li style="margin: 5px 0;">[إنجاز أو مسؤولية رئيسية]</li>
            <li style="margin: 5px 0;">[إنجاز أو مسؤولية رئيسية]</li>
        </ul>
    </div>

    <div style="margin-bottom: 20px;">
        <h3 style="margin: 0; color: #333; font-size: 18px;">[المسمى الوظيفي السابق] - [اسم الشركة]</h3>
        <p style="margin: 5px 0; color: #666; font-style: italic;">[تاريخ البداية] - [تاريخ النهاية]</p>
        <ul style="margin: 10px 0; padding-right: 20px;">
            <li style="margin: 5px 0;">[إنجاز أو مسؤولية رئيسية]</li>
            <li style="margin: 5px 0;">[إنجاز أو مسؤولية رئيسية]</li>
        </ul>
    </div>

    <h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px;">التعليم</h2>
    <div style="margin-bottom: 20px;">
        <h3 style="margin: 0; color: #333; font-size: 18px;">[الدرجة العلمية] - [اسم المؤسسة]</h3>
        <p style="margin: 5px 0; color: #666; font-style: italic;">[سنة التخرج]</p>
    </div>

    <h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px;">المهارات</h2>
    <p style="margin: 10px 0; text-align: justify;">[اذكر مهاراتك ذات الصلة مفصولة بفواصل]</p>

    <h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px;">الشهادات</h2>
    <ul style="margin: 10px 0; padding-right: 20px;">
        <li style="margin: 5px 0;">[اسم الشهادة] - [الجهة المانحة] ([السنة])</li>
        <li style="margin: 5px 0;">[اسم الشهادة] - [الجهة المانحة] ([السنة])</li>
    </ul>
</div>`,
        style: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
            lineHeight: '1.5'
        }
    },
    
    report: {
        name: 'report',
        content: `
<div style="font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; direction: inherit;">
    <div style="text-align: center; margin-bottom: 40px; border-bottom: 2px solid #333; padding-bottom: 20px;">
        <h1 style="margin: 0; font-size: 28px; color: #333; font-weight: bold;">[عنوان التقرير]</h1>
        <p style="margin: 10px 0; color: #666; font-size: 16px;">إعداد: [اسمك]</p>
        <p style="margin: 0; color: #666; font-size: 16px;">التاريخ: [التاريخ الحالي]</p>
    </div>

    <h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px;">الملخص التنفيذي</h2>
    <p style="margin: 15px 0; text-align: justify;">[قدم ملخصاً موجزاً للنتائج الرئيسية والتوصيات]</p>

    <h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px;">المقدمة</h2>
    <p style="margin: 15px 0; text-align: justify;">[اشرح الهدف ونطاق التقرير]</p>

    <h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px;">المنهجية</h2>
    <p style="margin: 15px 0; text-align: justify;">[اوصف الطرق المستخدمة لجمع وتحليل المعلومات]</p>

    <h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px;">النتائج</h2>
    
    <h3 style="margin: 20px 0 10px 0; color: #333; font-size: 18px;">النتيجة الرئيسية الأولى</h3>
    <p style="margin: 10px 0; text-align: justify;">[شرح مفصل للنتيجة الرئيسية الأولى]</p>

    <h3 style="margin: 20px 0 10px 0; color: #333; font-size: 18px;">النتيجة الرئيسية الثانية</h3>
    <p style="margin: 10px 0; text-align: justify;">[شرح مفصل للنتيجة الرئيسية الثانية]</p>

    <h3 style="margin: 20px 0 10px 0; color: #333; font-size: 18px;">النتيجة الرئيسية الثالثة</h3>
    <p style="margin: 10px 0; text-align: justify;">[شرح مفصل للنتيجة الرئيسية الثالثة]</p>

    <h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px;">التوصيات</h2>
    <ol style="margin: 15px 0; padding-right: 20px;">
        <li style="margin: 10px 0; text-align: justify;"><strong>التوصية الأولى:</strong> [التوصية الأولى مع المبرر الداعم]</li>
        <li style="margin: 10px 0; text-align: justify;"><strong>التوصية الثانية:</strong> [التوصية الثانية مع المبرر الداعم]</li>
        <li style="margin: 10px 0; text-align: justify;"><strong>التوصية الثالثة:</strong> [التوصية الثالثة مع المبرر الداعم]</li>
    </ol>

    <h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px;">الخاتمة</h2>
    <p style="margin: 15px 0; text-align: justify;">[لخص النقاط الرئيسية وأكد على أهمية التوصيات]</p>

    <div style="margin-top: 40px; padding: 20px; background-color: #f8f9fa; border-radius: 5px; border-right: 4px solid #007acc;">
        <h3 style="color: #333; margin-bottom: 10px; font-size: 16px;">ملاحظة</h3>
        <p style="margin: 0; font-size: 14px; color: #666;">هذا التقرير مُعد للاستخدام الداخلي ويحتوي على معلومات سرية.</p>
    </div>
</div>`,
        style: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
            lineHeight: '1.6'
        }
    },
    
    invoice: {
        name: 'invoice',
        content: `
<div style="font-family: Arial, sans-serif; margin: 40px; direction: inherit;">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; border-bottom: 3px solid #007acc; padding-bottom: 20px;">
        <h1 style="color: #007acc; margin: 0; font-size: 36px; font-weight: bold;">فاتورة</h1>
        <div style="text-align: left;">
            <p style="margin: 0; font-size: 18px; font-weight: bold;">رقم الفاتورة: [INV-001]</p>
            <p style="margin: 5px 0; color: #666;">التاريخ: [التاريخ الحالي]</p>
            <p style="margin: 0; color: #666;">تاريخ الاستحقاق: [تاريخ الاستحقاق]</p>
        </div>
    </div>

    <div style="display: flex; justify-content: space-between; margin-bottom: 40px;">
        <div style="width: 45%;">
            <h3 style="color: #333; margin-bottom: 10px; border-bottom: 1px solid #ccc; padding-bottom: 5px;">من:</h3>
            <p style="margin: 5px 0; line-height: 1.6;">
                <strong>[اسم شركتك]</strong><br/>
                [عنوانك]<br/>
                [المدينة، الرمز البريدي]<br/>
                البريد الإلكتروني: [email@company.com]<br/>
                الهاتف: [+XXX-XXX-XXXX]
            </p>
        </div>
        <div style="width: 45%;">
            <h3 style="color: #333; margin-bottom: 10px; border-bottom: 1px solid #ccc; padding-bottom: 5px;">إلى:</h3>
            <p style="margin: 5px 0; line-height: 1.6;">
                <strong>[اسم شركة العميل]</strong><br/>
                [عنوان العميل]<br/>
                [المدينة، الرمز البريدي]<br/>
                البريد الإلكتروني: [client@email.com]
            </p>
        </div>
    </div>

    <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <thead>
            <tr style="background-color: #007acc; color: white;">
                <th style="padding: 15px; text-align: right; border: 1px solid #ddd; font-weight: bold;">الوصف</th>
                <th style="padding: 15px; text-align: center; border: 1px solid #ddd; font-weight: bold;">الكمية</th>
                <th style="padding: 15px; text-align: center; border: 1px solid #ddd; font-weight: bold;">السعر</th>
                <th style="padding: 15px; text-align: center; border: 1px solid #ddd; font-weight: bold;">المجموع</th>
            </tr>
        </thead>
        <tbody>
            <tr style="background-color: #f9f9f9;">
                <td style="padding: 12px; border: 1px solid #ddd;">[وصف الخدمة/المنتج]</td>
                <td style="padding: 12px; text-align: center; border: 1px solid #ddd;">[1]</td>
                <td style="padding: 12px; text-align: center; border: 1px solid #ddd;">$[السعر]</td>
                <td style="padding: 12px; text-align: center; border: 1px solid #ddd; font-weight: bold;">$[المجموع]</td>
            </tr>
            <tr>
                <td style="padding: 12px; border: 1px solid #ddd;">[وصف خدمة أخرى]</td>
                <td style="padding: 12px; text-align: center; border: 1px solid #ddd;">[2]</td>
                <td style="padding: 12px; text-align: center; border: 1px solid #ddd;">$[السعر]</td>
                <td style="padding: 12px; text-align: center; border: 1px solid #ddd; font-weight: bold;">$[المجموع]</td>
            </tr>
        </tbody>
    </table>

    <div style="text-align: left; margin-top: 30px;">
        <div style="display: inline-block; min-width: 250px;">
            <div style="display: flex; justify-content: space-between; margin: 8px 0; padding: 5px 0;">
                <span style="font-weight: bold;">المجموع الفرعي:</span>
                <span style="font-weight: bold;">$[المجموع الفرعي]</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin: 8px 0; padding: 5px 0;">
                <span>الضريبة (0%):</span>
                <span>$0.00</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin: 15px 0; padding: 10px 0; border-top: 2px solid #007acc; font-size: 18px;">
                <span style="font-weight: bold; color: #007acc;">المجموع الكلي:</span>
                <span style="font-weight: bold; color: #007acc;">$[المجموع الكلي]</span>
            </div>
        </div>
    </div>

    <div style="margin-top: 40px; padding: 20px; background-color: #f8f9fa; border-radius: 8px; border-right: 4px solid #007acc;">
        <h3 style="color: #333; margin-bottom: 10px; font-size: 16px;">شروط الدفع</h3>
        <p style="margin: 0; font-size: 14px; color: #666; line-height: 1.6;">
            الدفع مستحق خلال 30 يوماً من تاريخ الفاتورة. يرجى تضمين رقم الفاتورة عند الدفع.<br/>
            للاستفسارات، يرجى التواصل معنا على البريد الإلكتروني أو الهاتف المذكور أعلاه.
        </p>
    </div>

    <div style="text-align: center; margin-top: 40px; color: #666; font-size: 14px;">
        <p>شكراً لك على ثقتك بخدماتنا</p>
    </div>
</div>`,
        style: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
            lineHeight: '1.6'
        }
    },
    
    contract: {
        name: 'contract',
        content: `
<div style="font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; direction: inherit;">
    <div style="text-align: center; margin-bottom: 40px; border-bottom: 2px solid #333; padding-bottom: 20px;">
        <h1 style="margin: 0; font-size: 28px; color: #333; font-weight: bold;">عقد [نوع العقد]</h1>
        <p style="margin: 10px 0; color: #666; font-size: 16px;">رقم العقد: [رقم العقد]</p>
        <p style="margin: 0; color: #666; font-size: 16px;">التاريخ: [التاريخ الحالي]</p>
    </div>

    <h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px;">أطراف العقد</h2>
    
    <div style="margin: 20px 0;">
        <h3 style="color: #333; font-size: 18px;">الطرف الأول:</h3>
        <p style="margin: 10px 0; text-align: justify;">
            <strong>[اسم الطرف الأول]</strong><br/>
            العنوان: [العنوان الكامل]<br/>
            الهاتف: [رقم الهاتف]<br/>
            البريد الإلكتروني: [البريد الإلكتروني]<br/>
            (ويُشار إليه فيما بعد باسم "الطرف الأول")
        </p>
    </div>

    <div style="margin: 20px 0;">
        <h3 style="color: #333; font-size: 18px;">الطرف الثاني:</h3>
        <p style="margin: 10px 0; text-align: justify;">
            <strong>[اسم الطرف الثاني]</strong><br/>
            العنوان: [العنوان الكامل]<br/>
            الهاتف: [رقم الهاتف]<br/>
            البريد الإلكتروني: [البريد الإلكتروني]<br/>
            (ويُشار إليه فيما بعد باسم "الطرف الثاني")
        </p>
    </div>

    <h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px;">موضوع العقد</h2>
    <p style="margin: 15px 0; text-align: justify;">[اوصف موضوع العقد والخدمات أو المنتجات المتفق عليها]</p>

    <h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px;">الالتزامات والمسؤوليات</h2>
    
    <h3 style="margin: 20px 0 10px 0; color: #333; font-size: 18px;">التزامات الطرف الأول:</h3>
    <ul style="margin: 10px 0; padding-right: 20px;">
        <li style="margin: 8px 0; text-align: justify;">[التزام أو مسؤولية الطرف الأول]</li>
        <li style="margin: 8px 0; text-align: justify;">[التزام أو مسؤولية أخرى للطرف الأول]</li>
        <li style="margin: 8px 0; text-align: justify;">[التزام أو مسؤولية أخرى للطرف الأول]</li>
    </ul>

    <h3 style="margin: 20px 0 10px 0; color: #333; font-size: 18px;">التزامات الطرف الثاني:</h3>
    <ul style="margin: 10px 0; padding-right: 20px;">
        <li style="margin: 8px 0; text-align: justify;">[التزام أو مسؤولية الطرف الثاني]</li>
        <li style="margin: 8px 0; text-align: justify;">[التزام أو مسؤولية أخرى للطرف الثاني]</li>
        <li style="margin: 8px 0; text-align: justify;">[التزام أو مسؤولية أخرى للطرف الثاني]</li>
    </ul>

    <h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px;">الأجور والدفع</h2>
    <p style="margin: 15px 0; text-align: justify;">[حدد قيمة العقد وطريقة الدفع والجدول الزمني]</p>

    <h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px;">مدة العقد</h2>
    <p style="margin: 15px 0; text-align: justify;">
        يبدأ هذا العقد من تاريخ [تاريخ البداية] وينتهي في [تاريخ النهاية]، 
        ما لم يتم تجديده أو إنهاؤه وفقاً لأحكام هذا العقد.
    </p>

    <h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px;">إنهاء العقد</h2>
    <p style="margin: 15px 0; text-align: justify;">[حدد الشروط والإجراءات لإنهاء العقد من قبل أي من الطرفين]</p>

    <h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px;">فض النزاعات</h2>
    <p style="margin: 15px 0; text-align: justify;">
        في حالة نشوء أي نزاع حول تفسير أو تنفيذ هذا العقد، يتم حل النزاع عن طريق 
        [طريقة حل النزاعات - التحكيم، المحاكم، الوساطة].
    </p>

    <h2 style="color: #333; border-bottom: 1px solid #ccc; padding-bottom: 5px; margin-top: 25px;">أحكام عامة</h2>
    <ul style="margin: 15px 0; padding-right: 20px;">
        <li style="margin: 8px 0; text-align: justify;">يخضع هذا العقد لقوانين [الدولة/المنطقة].</li>
        <li style="margin: 8px 0; text-align: justify;">أي تعديل على هذا العقد يجب أن يكون كتابياً وموقعاً من الطرفين.</li>
        <li style="margin: 8px 0; text-align: justify;">إذا أصبح أي بند من بنود هذا العقد غير صالح، فإن باقي البنود تبقى سارية المفعول.</li>
    </ul>

    <div style="margin-top: 50px;">
        <div style="display: flex; justify-content: space-between;">
            <div style="width: 45%; text-align: center;">
                <p style="margin-bottom: 40px;"><strong>الطرف الأول</strong></p>
                <div style="border-top: 1px solid #333; padding-top: 10px;">
                    <p style="margin: 5px 0;"><strong>الاسم:</strong> [اسم الطرف الأول]</p>
                    <p style="margin: 5px 0;"><strong>التوقيع:</strong> _________________</p>
                    <p style="margin: 5px 0;"><strong>التاريخ:</strong> _________________</p>
                </div>
            </div>
            
            <div style="width: 45%; text-align: center;">
                <p style="margin-bottom: 40px;"><strong>الطرف الثاني</strong></p>
                <div style="border-top: 1px solid #333; padding-top: 10px;">
                    <p style="margin: 5px 0;"><strong>الاسم:</strong> [اسم الطرف الثاني]</p>
                    <p style="margin: 5px 0;"><strong>التوقيع:</strong> _________________</p>
                    <p style="margin: 5px 0;"><strong>التاريخ:</strong> _________________</p>
                </div>
            </div>
        </div>
    </div>
</div>`,
        style: {
            fontFamily: 'Arial, sans-serif',
            fontSize: '14px',
            lineHeight: '1.6'
        }
    }
};

// Get template by ID
function getTemplate(templateId) {
    return documentTemplates[templateId] || documentTemplates.blank;
}

// Load template into editor
function loadTemplate(templateId) {
    const template = getTemplate(templateId);
    const editor = document.getElementById('editor');
    const documentTitle = document.getElementById('documentTitle');
    
    if (editor) {
        editor.innerHTML = template.content;
        
        // Apply template styles
        if (template.style) {
            Object.keys(template.style).forEach(property => {
                editor.style[property] = template.style[property];
            });
        }
        
        // Focus on editor
        editor.focus();
        
        // Set document title placeholder based on template
        if (documentTitle && !documentTitle.value) {
            const templateName = t(template.name);
            documentTitle.placeholder = `${templateName} - ${new Date().toLocaleDateString('ar-SA')}`;
        }
    }
}

// Search templates
function searchTemplates(query) {
    const templateCards = document.querySelectorAll('.template-card');
    
    templateCards.forEach(card => {
        const templateId = card.getAttribute('data-template');
        const template = getTemplate(templateId);
        const templateName = t(template.name).toLowerCase();
        const queryLower = query.toLowerCase();
        
        if (templateName.includes(queryLower)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}