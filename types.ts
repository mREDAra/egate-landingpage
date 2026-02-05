
export interface Metric {
    title: string;
    description: string;
}

export interface ProblemPoint {
    title: string;
    description: string;
}

export interface Feature {
    icon: string;
    title: string;
    description: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    role: string;
}

export interface PricingPlan {
    name: string;
    price: string;
    extra: string;
    features: string[];
}

export interface Step {
    name: string;
    description: string;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface PaymentMethod {
    name: string;
    icon: string;
}

export interface ActivityType {
    value: string;
    label: string;
}

export interface FeeDetail {
    icon: string;
    title: string;
    description: string;
}
