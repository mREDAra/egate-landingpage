import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import './EligibilityForm.css';

interface FormData {
    fullName: string;
    storeName: string;
    storeLink: string;
    email: string;
    whatsapp: string;
    activityType: string;
    activityTypeOther: string;
    isStoreActive: string;
    paymentProblems: string[];
    paymentProblemsOther: string;
    previousFreeze: string;
    monthlySales: string;
    currencies: string[];
    currenciesOther: string;
    currentSituation: string;
    acceptsFees: string;
    goldQuestion: string;
}

const INITIAL_DATA: FormData = {
    fullName: '',
    storeName: '',
    storeLink: '',
    email: '',
    whatsapp: '',
    activityType: '',
    activityTypeOther: '',
    isStoreActive: '',
    paymentProblems: [],
    paymentProblemsOther: '',
    previousFreeze: '',
    monthlySales: '',
    currencies: [],
    currenciesOther: '',
    currentSituation: '',
    acceptsFees: '',
    goldQuestion: ''
};

const EligibilityForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const modalBodyRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (modalBodyRef.current) {
            modalBodyRef.current.scrollTo(0, 0);
        }
    }, [step]);

    const handleChange = (field: keyof FormData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleMultiSelect = (field: 'paymentProblems' | 'currencies', value: string) => {
        setFormData(prev => {
            const current = prev[field];
            const newArray = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value];
            return { ...prev, [field]: newArray };
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation for the last step
        if (!formData.goldQuestion.trim()) {
            setSubmitStatus('error');
            setErrorMessage('يرجى الإجابة على السؤال الأخير قبل الإرسال.');
            return;
        }

        setSubmitStatus('idle');
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            if (!supabase) {
                throw new Error('Supabase client not initialized');
            }

            const { error } = await supabase
                .from('eligibility_requests')
                .insert([{
                    full_name: formData.fullName,
                    store_name: formData.storeName,
                    store_link: formData.storeLink,
                    email: formData.email,
                    whatsapp: formData.whatsapp,
                    activity_type: formData.activityType === 'other' ? formData.activityTypeOther : formData.activityType,
                    is_store_active: formData.isStoreActive,
                    payment_problems: formData.paymentProblems.includes('other')
                        ? [...formData.paymentProblems.filter(p => p !== 'other'), formData.paymentProblemsOther]
                        : formData.paymentProblems,
                    previous_freeze: formData.previousFreeze,
                    monthly_sales: formData.monthlySales,
                    currencies: formData.currencies.includes('other')
                        ? [...formData.currencies.filter(c => c !== 'other'), formData.currenciesOther]
                        : formData.currencies,
                    current_situation: formData.currentSituation,
                    accepts_fees: formData.acceptsFees,
                    gold_question: formData.goldQuestion,
                    submitted_at: new Date().toISOString()
                }]);

            if (error) throw error;

            setSubmitStatus('success');
        } catch (error: any) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setErrorMessage(error.message || 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitStatus === 'success') {
        return (
            <div className="modal-overlay">
                <div className="modal-content" style={{ maxWidth: '480px', textAlign: 'center', padding: '0' }}>
                    <button onClick={onClose} className="btn-back" style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: 10 }}>✕</button>

                    <div className="success-container">
                        <div className="success-icon">
                            <span style={{ fontSize: '3rem' }}>✅</span>
                        </div>
                        <h3 className="heading-md" style={{ color: '#fff' }}>تم استلام طلبك بنجاح!</h3>
                        <p className="text-secondary" style={{ marginBottom: '2rem' }}>
                            سيقوم فريقنا بمراجعة نشاطك. في حال كان متجرك مؤهلًا، سيتم التواصل معك عبر الواتساب لتحديد مكالمة تشخيص.
                        </p>
                        <button onClick={onClose} className="btn btn-primary" style={{ width: '100%' }}>
                            حسناً، فهمت
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="modal-overlay">
            <div className="modal-content">

                {/* Header */}
                <div className="modal-header">
                    <div>
                        <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fff', margin: 0 }}>نموذج التأهيل الرسمي – E-GATE GROUP</h2>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>خطوة {step} من 7</p>
                    </div>
                    <button onClick={onClose} className="modal-close">
                        ✕
                    </button>
                </div>

                {/* Progress Bar */}
                <div className="progress-container">
                    <div
                        className="progress-bar"
                        style={{ width: `${(step / 7) * 100}%` }}
                    />
                </div>

                {/* Body */}
                <div className="modal-body" ref={modalBodyRef}>

                    {/* Important Note */}
                    {/* Important Note */}
                    {step === 1 && (
                        <div className="important-note">
                            <span className="important-icon">⚠️</span>
                            <div>
                                <p style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>ملاحظة مهمة:</p>
                                <p className="important-text">هذا النموذج مخصص للمتاجر الإلكترونية الشغالة فعليًا. نقبل عددًا محدودًا من الأنشطة لضمان استمرارية الخدمة.</p>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="options-grid">

                        {/* Section 1: Basic Info */}
                        {step === 1 && (
                            <div className="fade-in-section is-visible">
                                <h3 className="section-title">القسم 1️⃣ — معلومات أساسية</h3>

                                <FormInput
                                    label="الاسم الكامل"
                                    value={formData.fullName}
                                    onChange={(e) => handleChange('fullName', e.target.value)}
                                    placeholder="أدخل اسمك الكامل"
                                    required
                                />
                                <FormInput
                                    label="اسم المتجر / المشروع"
                                    value={formData.storeName}
                                    onChange={(e) => handleChange('storeName', e.target.value)}
                                    placeholder="مثال: متجر الأناقة"
                                    required
                                />
                                <FormInput
                                    label="رابط منصة البيع"
                                    value={formData.storeLink}
                                    onChange={(e) => handleChange('storeLink', e.target.value)}
                                    placeholder="your-store.com"
                                    type="url"
                                    required
                                />
                                <FormInput
                                    label="البريد الإلكتروني"
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    placeholder="name@example.com"
                                    type="email"
                                    required
                                />
                                <FormInput
                                    label="رقم واتساب للتواصل"
                                    value={formData.whatsapp}
                                    onChange={(e) => handleChange('whatsapp', e.target.value)}
                                    placeholder="+966 50..."
                                    type="tel"
                                    required
                                />
                            </div>
                        )}

                        {/* Section 2: Activity Filter */}
                        {step === 2 && (
                            <div className="fade-in-section is-visible">
                                <h3 className="section-title">القسم 2️⃣ — فلترة النشاط</h3>

                                <RadioGroup
                                    label="نوع نشاط المتجر"
                                    name="activityType"
                                    value={formData.activityType}
                                    onChange={(val) => handleChange('activityType', val)}
                                    options={[
                                        { value: 'digital', label: 'منتجات رقمية' },
                                        { value: 'physical', label: 'منتجات ملموسة' },
                                        { value: 'services', label: 'خدمات' },
                                        { value: 'education', label: 'تعليم / منصات / معاهد' },
                                        { value: 'saas', label: 'SaaS / اشتراكات' },
                                        { value: 'other', label: 'غير ذلك' }
                                    ]}
                                />
                                {formData.activityType === 'other' && (
                                    <Input
                                        value={formData.activityTypeOther}
                                        onChange={(e) => handleChange('activityTypeOther', e.target.value)}
                                        placeholder="يرجى توضيح نشاطك"
                                    />
                                )}

                                <div style={{ marginTop: '2rem' }}></div>

                                <RadioGroup
                                    label="هل المتجر يعمل حاليًا ويستقبل طلبات؟"
                                    name="isStoreActive"
                                    value={formData.isStoreActive}
                                    onChange={(val) => handleChange('isStoreActive', val)}
                                    options={[
                                        { value: 'yes', label: 'نعم، يعمل حاليًا' },
                                        { value: 'partial', label: 'يعمل جزئيًا' },
                                        { value: 'no', label: 'لا، ما زال قيد الإعداد ❌' }
                                    ]}
                                />
                            </div>
                        )}

                        {/* Section 3: Pain Points */}
                        {step === 3 && (
                            <div className="fade-in-section is-visible">
                                <h3 className="section-title">القسم 3️⃣ — كشف الألم الحقيقي</h3>

                                <MultiSelectGroup
                                    label="ما هي المشكلة الأكبر التي تواجهك حاليًا في الدفع؟"
                                    options={[
                                        { value: 'activation_difficulty', label: 'صعوبة تفعيل بوابة دفع' },
                                        { value: 'frozen_account', label: 'تجميد حساب سابق' },
                                        { value: 'payout_delay', label: 'تأخير استلام المستحقات' },
                                        { value: 'currency_diff', label: 'فرق العملة' },
                                        { value: 'foreign_currency', label: 'عدم القدرة على البيع بعملات أجنبية' },
                                        { value: 'fear_of_ban', label: 'الخوف من إيقاف الحساب' },
                                        { value: 'other', label: 'غير ذلك' }
                                    ]}
                                    selectedValues={formData.paymentProblems}
                                    onChange={(val) => handleMultiSelect('paymentProblems', val)}
                                />
                                {formData.paymentProblems.includes('other') && (
                                    <Input
                                        value={formData.paymentProblemsOther}
                                        onChange={(e) => handleChange('paymentProblemsOther', e.target.value)}
                                        placeholder="ما هي المشكلة الأخرى؟"
                                    />
                                )}

                                <div style={{ marginTop: '2rem' }}></div>

                                <RadioGroup
                                    label="هل سبق أن تم تجميد أو إيقاف بوابة دفع لديك؟"
                                    name="previousFreeze"
                                    value={formData.previousFreeze}
                                    onChange={(val) => handleChange('previousFreeze', val)}
                                    options={[
                                        { value: 'yes', label: 'نعم' },
                                        { value: 'no', label: 'لا' },
                                        { value: 'risk', label: 'على وشك / لدي مخاوف جدية' }
                                    ]}
                                />
                            </div>
                        )}

                        {/* Section 4: Volume & Serious */}
                        {step === 4 && (
                            <div className="fade-in-section is-visible">
                                <h3 className="section-title">القسم 4️⃣ — الجدية والحجم</h3>

                                <RadioGroup
                                    label="متوسط حجم المبيعات الشهري حاليًا (تقريبي):"
                                    name="monthlySales"
                                    value={formData.monthlySales}
                                    onChange={(val) => handleChange('monthlySales', val)}
                                    options={[
                                        { value: 'under_5k', label: 'أقل من 5,000$' },
                                        { value: '5k_15k', label: '5,000$ – 15,000$' },
                                        { value: '15k_50k', label: '15,000$ – 50,000$' },
                                        { value: 'over_50k', label: 'أكثر من 50,000$' }
                                    ]}
                                />

                                <div style={{ marginTop: '2rem' }}></div>

                                <MultiSelectGroup
                                    label="ما العملات التي ترغب بالبيع بها؟"
                                    options={[
                                        { value: 'USD', label: 'USD' },
                                        { value: 'EUR', label: 'EUR' },
                                        { value: 'AED', label: 'AED' },
                                        { value: 'SAR', label: 'SAR' },
                                        { value: 'TRY', label: 'TRY' },
                                        { value: 'other', label: 'أخرى' }
                                    ]}
                                    selectedValues={formData.currencies}
                                    onChange={(val) => handleMultiSelect('currencies', val)}
                                />
                                {formData.currencies.includes('other') && (
                                    <Input
                                        value={formData.currenciesOther}
                                        onChange={(e) => handleChange('currenciesOther', e.target.value)}
                                        placeholder="عملات أخرى"
                                    />
                                )}
                            </div>
                        )}

                        {/* Section 5: Mindset */}
                        {step === 5 && (
                            <div className="fade-in-section is-visible">
                                <h3 className="section-title">القسم 5️⃣ — تهيئة ذهنية للسعر والمخاطرة</h3>

                                <RadioGroup
                                    label="أي عبارة تصف وضعك بشكل أدق؟"
                                    name="currentSituation"
                                    value={formData.currentSituation}
                                    onChange={(val) => handleChange('currentSituation', val)}
                                    options={[
                                        { value: 'stable_solution', label: 'أريد حلًا مستقرًا حتى لو كان أعلى تكلفة' },
                                        { value: 'alternative', label: 'أبحث عن بديل للبوابات التقليدية' },
                                        { value: 'long_term', label: 'مستعد للدخول في نظام طويل الأمد' },
                                        { value: 'quick_fix', label: 'أبحث فقط عن تجربة سريعة ❌' }
                                    ]}
                                />

                                <div style={{ marginTop: '2rem' }}></div>

                                <RadioGroup
                                    label="نظام E-GATE GROUP يعتمد على رسوم تأسيس + التزام تشغيلي مستمر. هل هذا مناسب لك مبدئيًا؟"
                                    name="acceptsFees"
                                    value={formData.acceptsFees}
                                    onChange={(val) => handleChange('acceptsFees', val)}
                                    options={[
                                        { value: 'yes', label: 'نعم، أبحث عن حل جدي' },
                                        { value: 'details', label: 'أحتاج فهم التفاصيل أكثر' },
                                        { value: 'no', label: 'لا ❌' }
                                    ]}
                                />
                            </div>
                        )}

                        {/* Section 6: Gold Question */}
                        {step === 6 && (
                            <div className="fade-in-section is-visible">
                                <h3 className="section-title" style={{ color: 'var(--gold)' }}>القسم 6️⃣ — سؤال كاشف (Gold Question)</h3>

                                <div className="gold-section">
                                    <label className="label-text" style={{ marginBottom: '1rem' }}>
                                        ما الذي سيحدث لمتجرك لو توقفت بوابة الدفع لديك فجأة لمدة أسبوع؟
                                    </label>
                                    <textarea
                                        value={formData.goldQuestion}
                                        onChange={(e) => handleChange('goldQuestion', e.target.value)}
                                        className="form-input gold-input"
                                        placeholder="اكتب إجابتك هنا..."
                                        required
                                    />
                                    <p className="label-sub" style={{ marginTop: '1rem' }}>إجابتك تساعدنا في فهم حجم المخاطرة التي تواجهها.</p>
                                </div>
                            </div>
                        )}

                        {/* Section 7: Conclusion */}
                        {step === 7 && (
                            <div className="fade-in-section is-visible" style={{ textAlign: 'center', padding: '2rem 0' }}>
                                <div className="success-icon" style={{ background: 'rgba(59, 130, 246, 0.2)', boxShadow: 'none' }}>
                                    <span style={{ fontSize: '3rem' }}>📋</span>
                                </div>
                                <h3 className="heading-md" style={{ color: '#fff' }}>الخطوة الأخيرة</h3>

                                <div className="card" style={{ marginTop: '2rem', textAlign: 'right', height: 'auto' }}>
                                    <p className="text-secondary" style={{ marginBottom: '1rem', lineHeight: '1.8' }}>
                                        بعد إرسال النموذج، سيقوم فريقنا بمراجعة نشاطك.
                                        في حال كان متجرك مؤهلًا، سيتم التواصل معك لتحديد مكالمة تشخيص قصيرة.
                                    </p>
                                    <p style={{ color: 'var(--gold)', fontWeight: 'bold', fontSize: '0.95rem' }}>
                                        تعبئة النموذج لا تعني القبول التلقائي.
                                    </p>
                                </div>

                                {submitStatus === 'error' && (
                                    <div style={{ background: 'rgba(239, 68, 68, 0.2)', border: '1px solid var(--error)', color: '#fee2e2', padding: '1rem', borderRadius: '0.75rem', marginTop: '1.5rem' }}>
                                        {errorMessage}
                                    </div>
                                )}
                            </div>
                        )}

                    </form>
                </div>

                {/* Footer Buttons */}
                <div className="modal-footer">
                    {step > 1 ? (
                        <button
                            type="button"
                            onClick={() => setStep(s => s - 1)}
                            className="btn-back"
                        >
                            ← السابق
                        </button>
                    ) : <div></div>}

                    {step < 7 ? (
                        <button
                            type="button"
                            onClick={() => setStep(s => s + 1)}
                            className="btn-next"
                        >
                            التالي →
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className="btn-next btn-submit"
                            style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                        >
                            {isSubmitting ? 'جاري الإرسال...' : 'إرسال طلب التقييم 🚀'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

// UI Components

const FormInput = ({ label, value, onChange, placeholder, type = 'text', required = false }: any) => (
    <div className="form-input-container">
        <label className="label-text">{label} {required && <span style={{ color: 'var(--error)' }}>*</span>}</label>
        <input
            type={type}
            value={value}
            onChange={onChange}
            className="form-input"
            placeholder={placeholder}
            required={required}
        />
    </div>
);

const Input = ({ value, onChange, placeholder }: any) => (
    <input
        type="text"
        value={value}
        onChange={onChange}
        className="form-input"
        placeholder={placeholder}
        style={{ marginTop: '0.5rem' }}
    />
);

const RadioGroup = ({ label, name, options, value, onChange }: any) => (
    <div>
        <label className="label-text">{label}</label>
        <div className="options-grid">
            {options.map((option: any) => (
                <label
                    key={option.value}
                    className={`option-card-label ${value === option.value ? 'selected' : ''}`}
                    onClick={() => onChange(option.value)}
                >
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={value === option.value}
                        onChange={() => { }} // Handle change in parent via onClick on label for better UX
                        className="option-input"
                    />
                    <span style={{ fontSize: '1rem', color: value === option.value ? '#fff' : 'var(--text-secondary)' }}>
                        {option.label}
                    </span>
                </label>
            ))}
        </div>
    </div>
);

const MultiSelectGroup = ({ label, options, selectedValues, onChange }: any) => (
    <div>
        <label className="label-text">
            {label}
            <span className="label-sub" style={{ marginRight: '0.5rem', fontSize: '0.8rem' }}>(يمكنك اختيار أكثر من إجابة)</span>
        </label>
        <div className="options-grid">
            {options.map((option: any) => (
                <label
                    key={option.value}
                    className={`option-card-label ${selectedValues.includes(option.value) ? 'selected' : ''}`}
                    onClick={(e) => {
                        // Prevent double toggle if clicking directly on input
                        if (e.target !== e.currentTarget.querySelector('input')) {
                            onChange(option.value);
                        }
                    }}
                >
                    <input
                        type="checkbox"
                        value={option.value}
                        checked={selectedValues.includes(option.value)}
                        onChange={() => onChange(option.value)}
                        className="option-input"
                    />
                    <span style={{ fontSize: '1rem', color: selectedValues.includes(option.value) ? '#fff' : 'var(--text-secondary)' }}>
                        {option.label}
                    </span>
                </label>
            ))}
        </div>
    </div>
);

export default EligibilityForm;
