
// =======================================================================
// المحتوى النصي للموقع | Website Text Content
// =======================================================================
// يمكنك تعديل جميع النصوص في هذا الملف بسهولة.
// You can easily edit all the text content in this file.
// =======================================================================

import { Feature, Testimonial, FaqItem, ProblemPoint, Step, PaymentMethod, ActivityType, FeeDetail, PricingPlan } from "../types";

// COMPANY INFO
export const COMPANY_NAME = "E-Gate Group";
export const COMPANY_SLOGAN = "تفعيل بوابات الدفع بدون تعقيد";

// CALL TO ACTION BUTTONS
export const CTA_PRIMARY_TEXT = "قدّم طلب تفعيل بوابة الدفع";
export const CTA_SECONDARY_TEXT = "احجز استشارة مجانية";

// HERO SECTION
export const HERO_CONTENT = {
    badge: "للأفراد والشركات",
    title: "فعّل بوابة الدفع لمشروعك بدون أي تعقيد",
    subtitle: "",
    description: "", // Intentionally empty as per new design
    metrics: [
        { title: "الحل الأمثل", description: "حلول تناسب الجميع" },
        { title: "دعم فني مباشر", description: "معك خطوة بخطوة" },
        { title: "لوحة تحكم مخصصة", description: "تابع أعمالك بسهولة" },
    ]
};

// PAYMENT LOGOS
export const PAYMENT_METHODS: PaymentMethod[] = [
    { name: "Visa", icon: "visa" },
    { name: "Mastercard", icon: "mastercard" },
    { name: "Mada", icon: "mada" },
    { name: "American Express", icon: "amex" },
    { name: "Apple Pay", icon: "applepay" },
    { name: "Google Pay", icon: "googlepay" },
    { name: "Knet", icon: "knet" },
];

// PROBLEM SECTION
export const PROBLEM_SECTION = {
    title: "ليش أغلب الناس تنرفض من بوابات الدفع؟",
    transitionText: "المشكلة مو فيك — المشكلة باختيار البوابة من البداية.",
    points: [
        {
            title: "رفض بدون سبب واضح",
            description: "تقديم الطلبات وتلقي الرفض دون فهم الأسباب الحقيقية."
        },
        {
            title: "شروط تختلف من بوابة لثانية",
            description: "كل بوابة لها قوانينها الخاصة التي قد لا تناسب نشاطك."
        },
        {
            title: "رسوم غير مفهومة",
            description: "مصاريف خفية تظل غير واضحة حتى تبدأ العمل."
        },
        {
            title: "لا متابعة ولا دعم بعد التفعيل",
            description: "بمجرد التفعيل، تجد نفسك وحيداً في مواجهة المشاكل التقنية."
        }
    ] as ProblemPoint[]
};

// FEATURES SECTION (SOLUTION)
export const FEATURES_SECTION = {
    badge: "مشكلة أصحاب المتاجر الإلكترونية",
    title: "بوابات دفع بطيئة، أوراق لا تنتهي، ورفض مستمر...",
    subtitle: "أغلب أصحاب المتاجر يعلقون في نفس الدوامة: طلبات مرفوضة، متطلبات بنكية لا تنتهي، عدم وضوح في الضرائب والعمولات، وفي النهاية يخسرون وقتا ومبيعات بدون حل واضح.",
    cta: "ابدأ التقييم الآن",
    features: [
        {
            title: "استقبال بعملات متعددة",
            description: "دعم عملات مثل: الدولار، اليورو، الليرة التركية، الريال السعودي، الدينار الكويتي، الدرهم الإماراتي... بحيث تبيع لعملاء من بلدان مختلفة بدون قيود عملات.",
            icon: "globe"
        },
        {
            title: "ربط مباشر وسريع",
            description: "ربط مباشر مع متجرك خلال يوم عمل، ليكون متجرك جاهزاً لاستقبال المدفوعات البنكية بأسرع وقت.",
            icon: "zap"
        },
        {
            title: "لوحة تحكم واضحة",
            description: "تتبع مبيعاتك وتحويلاتك من مكان واحد، بأرقام واضحة بدل الضياع.",
            icon: "barchart"
        },
        {
            title: "دعم فني مباشر",
            description: "لا تفتح تذكرة وتنتظر أسبوعًا. التواصل مباشر، والمتابعة تتم مع شخص فاهم بالجانب التقني والعملي.",
            icon: "headset"
        },
        {
            title: "تركيز على الأمان والامتثال",
            description: "جميع المدفوعات تتم عبر 3D Secure و OTP، مع الالتزام بالاشتراطات الضريبية ورسوم بوابات الدفع، لتجنب إيقاف أو حجز المبالغ.",
            icon: "lock"
        },
        {
            title: "حل مبني على تجربة حقيقية",
            description: "النموذج مبني على تجارب عملاء حقيقيين في مجالات متنوعة: منصات تعليمية، متاجر منتجات رقمية وملموسة، ومنصات اشتراكات.",
            icon: "clipboard"
        }
    ] as Feature[]
};

// TRUST BOOSTER SECTION (APP)
export const TRUST_BOOSTER_SECTION = {
    title: "تابع مبيعاتك ومستحقاتك من مكان واحد",
    description: "عبر لوحة تحكم مخصصة لمتابعة المبيعات، المستحقات، وحالات العمليات بشفافية كاملة.",
    features: [
        "المبيعات",
        "المستحقات",
        "حالات العمليات"
    ],
    cta: "قدّم طلبك وشوف النظام بنفسك",
    imageAlt: "صورة توضيحية للوحة تحكم التاجر"
};


// USP SECTION (ENTITY CHECK)
export const USP_SECTION = {
    title: "هل لازم تمتلك شركة؟",
    content: "لا, سواءا كنت فرد أو شركة نعمل على تخصيص آلية العمل بما يتناسب مع نشاطك.",
    points: [
        "مشروع شخصي ✔",
        "شركة مسجلة ✔",
        "متجر إلكتروني ✔",
        "منصة أو SaaS ✔"
    ],
    cta: "اعرف إذا نشاطك مناسب"
};

// SOCIAL PROOF / TESTIMONIALS (Optional retention)
export const TESTIMONIALS_SECTION = {
    title: "آراء بعض العملاء",
    testimonials: [
        {
            quote: "من أكثر من سنة ونحن عم نتعامل معكم؛ معاملة رائعة، سرعة في التنفيذ، وجهود جبارة في خدمة الزبائن... ساعدتونا نركز على شغلنا بدون ما نقلق من بوابة الدفع.",
            author: "خالد السماعيل",
            role: "منصة هدف"
        },
        {
            quote: "من الناحية العملية شفافية وثقة عالية، ومن الناحية التقنية واضح إن الشغل مبني على تجارب عملية قوية وخبرة حقيقية في مجال بوابات الدفع.",
            author: "Baraa Khatab",
            role: "VAR 8K"
        },
        {
            quote: "تعامل راقي، سرعة إنجاز، ومصداقية عالية... شكراً لك.",
            author: "Obaidah Academy",
            role: ""
        }
    ] as Testimonial[]
};


// PRICING SECTION
export const PRICING_SECTION = {
    title: "خطة الأسعار",
    description: "نظام تسعير واضح وشفاف بلا أي رسوم خفية.",
    showPlans: false,
    plans: [] as PricingPlan[],
    feeDetails: [
        {
            icon: "settings",
            title: "رسوم التأسيس",
            description: "تدفع مرة واحدة فقط، وتختلف حسب نوع النشاط والدولة."
        },
        {
            icon: "repeat",
            title: "اشتراك يومي",
            description: "1$ فقط يومياً لضمان استمرارية الدعم الفني والمتابعة."
        },
        {
            icon: "percent",
            title: "عمولة المبيعات",
            description: "15% تشمل ضريبة الأرباح، رسوم البوابة، وتحويل الأموال."
        }
    ] as FeeDetail[]
};


// OFFER SECTION (Free Consultation)
export const OFFER_SECTION = {
    title: "احجز استشارة مجانية قبل أي قرار",
    description: "",
    cta: "احجز الاستشارة المجانية"
};


// STEPS SECTION
export const STEPS_SECTION = {
    title: "كيف نشتغل؟",
    steps: [
        {
            name: "تعبئة النموذج",
            description: "خطوتك الأولى تبدأ بتعبئة نموذج بسيط."
        },
        {
            name: "تقييم وتحديد الأنسب",
            description: "ندرس وضعك ونتواصل معك لمناقشة التفاصيل وتحديد الأنسب لنشاطك."
        },
        {
            name: "تفعيل وربط + متابعة",
            description: "نتمم التفعيل ونبقى معك للمتابعة."
        }
    ] as Step[]
};

// FAQ SECTION
export const FAQ_SECTION = {
    title: "أسئلة شائعة",
    faqs: [
        {
            question: "مبلغ التأسيس مقابل ماذا؟",
            answer: "مقابل تفعيل بوابة الدفع لعنوان متجر واحد. ويختلف حسب نشاط العمل."
        },
        {
            question: "الاشتراك اليومي 1$ مقابل ماذا؟",
            answer: "اشتراك رمزي يضمن المتابعة والدعم الفني بشكل دائم. مقابل المصاريف التقنية المستمرة، وتأمين روابط دفع احتياطية."
        },
        {
            question: "عمولة المبيعات 15% تشمل ماذا؟",
            answer: "تشمل عمولات بوابة الدفع، ضريبة الأرباح، وتكاليف التحويل المستحقات لكم بالدولار. قبول البطاقات البنكية يعتبر تصريحًا ضريبيًا كاملاً، لذلك تُحتسب الرسوم مباشرة."
        },
        {
            question: "هل يوجد عمولات إضافية؟",
            answer: "لا توجد عمولات إضافية إلا عند العمل بالليرة التركية، حيث قد يُطلب تقديم فواتير شراء قبل استلام المستحقات."
        },
        {
            question: "هل يمكن إلغاء الخدمة؟",
            answer: "رسوم التأسيس غير مستردة، لكن يمكنك إيقاف الاشتراك اليومي 1$ في أي وقت."
        },
        {
            question: "كم مدة استلام قيمة المبيعات؟",
            answer: "عادةً يتم تسليم المبالغ خلال 7 أيام. للمنتجات الملموسة يجب تقديم إثبات الشحن والتسليم."
        },
        {
            question: "هل يمكن للبوابة مصادرة قيمة المبيعات؟",
            answer: "لا يتم الحجز أو المصادرة إلا في حالة بيع منتجات وهمية أو مخالفة واضحة. يمكن تجنب أي مخاطر باتباع النصائح المبنية على تجارب سابقة."
        },
        {
            question: "من يتحمل ضريبة القيمة المضافة (VAT)؟",
            answer: "المستهلك النهائي هو من يتحمل الضريبة. وتختلف نسبتها من بلد لآخر حسب الأنظمة الضريبية."
        },
        {
            question: "ماهي البطاقات وأنظمة الدفع المدعومة؟",
            answer: "Visa, MasterCard, American Express, Mada, Knet, Apple Pay, Google Pay."
        },
        {
            question: "ماهي العملات المقبولة؟",
            answer: "USD, EUR, TRY, GBP, SAR, KWD, AED, BHD, QAR, OMR, EGP"
        },
        {
            question: "هل البطاقات مقبولة من جميع الدول؟",
            answer: "نعم من معظم دول العالم باستثناء الدول الخاضعة للعقوبات مثل: كوبا، إيران، كوريا الشمالية، بعض مناطق السودان، العراق، أوكرانيا، روسيا."
        },
        {
            question: "هل يوجد OTP و 3D Secure؟",
            answer: "نعم، لا يتم قبول أي دفعة بدون OTP. البوابة تعمل حصراً بنظام 3D Secure (ولا تقبل 2D)."
        }
    ] as FaqItem[]
};

// LEAD FORM SECTION
export const LEAD_FORM_SECTION = {
    title: "املأ النموذج — الرد خلال أقرب وقت ممكن",
    subtitle: "",
    formspreeId: "YOUR_FORM_ID", // Keep placeholder or ask user? keeping placeholder.
    successMessage: "تم استلام طلبك — سيتواصل معك الفريق"
};

// FORM FIELDS & LABELS
export const FORM_LABELS = {
    fullName: "الاسم",
    projectName: "اسم المشروع/الشركة",

    email: "البريد الإلكتروني",
    whatsapp: "رقم واتساب",
    website: "رابط الموقع/ صفحة البيع",
    message: "رسالة مختصرة (اختياري)",
    submitButton: "إرسال الطلب",
    submittingButton: "جاري الإرسال...",
    successMessage: "تم استلام طلبك — سيتواصل معك الفريق",
    errorMessage: "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى."
};



// FOOTER
export const FOOTER_TEXT = `© ${new Date().getFullYear()} ${COMPANY_NAME}. جميع الحقوق محفوظة.`;