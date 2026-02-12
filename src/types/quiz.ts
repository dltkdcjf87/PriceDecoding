/**
 * 퀴즈 관련 타입 정의
 * 소비 성향 테스트의 질문, 옵션, 결과 타입
 */

/**
 * 질문 카테고리
 * - decision: 구매 결정 기준
 * - brand: 브랜드 인식
 * - price: 가격 민감도
 * - behavior: 소비 후 행동
 */
export type QuestionCategory = 'decision' | 'brand' | 'price' | 'behavior';

/**
 * 소비 성향 유형
 * - analyzer: 성분 해독가 - 원재료와 제조 과정을 꼼꼼히 따지는 타입
 * - trustSeeker: 실내가(信賴價) 추구자 - 가격 대비 신뢰도를 중시하는 타입
 * - collector: 희소성 수집가 - 한정판과 독특함에 가치를 두는 타입
 * - hunter: 가성비 헌터 - 최저가 찾기에 능한 타입
 * - loyalist: 브랜드 로열티스트 - 특정 브랜드에 충성도가 높은 타입
 * - minimalist: 미니멀 소비자 - 필요한 것만 구매하는 타입
 */
export type PersonalityTypeId =
    | 'analyzer'
    | 'trustSeeker'
    | 'collector'
    | 'hunter'
    | 'loyalist'
    | 'minimalist';

/**
 * 각 옵션이 성향 유형에 부여하는 가중치
 */
export interface PersonalityWeights {
    analyzer: number;
    trustSeeker: number;
    collector: number;
    hunter: number;
    loyalist: number;
    minimalist: number;
}

/**
 * 질문의 선택지
 */
export interface QuizOption {
    /** 선택지 텍스트 */
    text: string;
    /** 각 성향 유형에 대한 가중치 (0-3) */
    weights: PersonalityWeights;
}

/**
 * 퀴즈 질문
 */
export interface QuizQuestion {
    /** 질문 ID (1-12) */
    id: number;
    /** 질문 카테고리 */
    category: QuestionCategory;
    /** 질문 텍스트 */
    text: string;
    /** 선택지 목록 (보통 4개) */
    options: QuizOption[];
}

/**
 * 사용자의 답변
 */
export interface QuizAnswer {
    /** 질문 ID */
    questionId: number;
    /** 선택한 옵션 인덱스 (0-3) */
    selectedOptionIndex: number;
}

/**
 * 성향 분석 결과 (각 유형별 점수)
 */
export interface PersonalityScores {
    analyzer: number;
    trustSeeker: number;
    collector: number;
    hunter: number;
    loyalist: number;
    minimalist: number;
}

/**
 * 소비 성향 유형 상세 정보
 */
export interface PersonalityType {
    /** 유형 ID */
    id: PersonalityTypeId;
    /** 유형 이름 (예: "성분 해독가") */
    name: string;
    /** 유형 설명 (2-3문장) */
    description: string;
    /** 주요 특징 목록 (3-5개) */
    traits: string[];
    /** 추천 브랜드 목록 */
    recommendedBrands: string[];
    /** 공유용 이미지 URL (추후 생성) */
    shareImage?: string;
    /** 유형별 대표 색상 (차트 표시용) */
    color: string;
    /** 유형별 이모지 */
    emoji: string;
}

/**
 * 퀴즈 결과
 */
export interface QuizResult {
    /** 주 성향 유형 */
    primaryType: PersonalityTypeId;
    /** 부 성향 유형 (2순위) */
    secondaryType: PersonalityTypeId;
    /** 각 유형별 점수 */
    scores: PersonalityScores;
    /** 결과 생성 시간 */
    timestamp: number;
}
