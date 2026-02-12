import { QuizQuestion } from '../types/quiz';

/**
 * 소비 성향 테스트 12문항
 * 한국 소비자의 실제 구매 상황을 반영한 질문 구성
 * 
 * 카테고리 분포:
 * - decision (구매 결정 기준): 4문항
 * - brand (브랜드 인식): 3문항
 * - price (가격 민감도): 3문항
 * - behavior (소비 후 행동): 2문항
 */
export const quizQuestions: QuizQuestion[] = [
    // ===== 구매 결정 기준 (4문항) =====
    {
        id: 1,
        category: 'decision',
        text: '새로운 제품을 구매할 때 가장 먼저 확인하는 것은?',
        options: [
            {
                text: '성분표와 원산지 정보',
                weights: { analyzer: 3, trustSeeker: 1, collector: 0, hunter: 0, loyalist: 0, minimalist: 1 }
            },
            {
                text: '브랜드 평판과 리뷰',
                weights: { analyzer: 0, trustSeeker: 3, collector: 0, hunter: 1, loyalist: 2, minimalist: 0 }
            },
            {
                text: '디자인과 희소성',
                weights: { analyzer: 0, trustSeeker: 0, collector: 3, hunter: 0, loyalist: 1, minimalist: 0 }
            },
            {
                text: '가격과 할인율',
                weights: { analyzer: 0, trustSeeker: 0, collector: 0, hunter: 3, loyalist: 0, minimalist: 1 }
            }
        ]
    },

    {
        id: 2,
        category: 'decision',
        text: '온라인 쇼핑몰에서 제품을 고를 때 당신의 모습은?',
        options: [
            {
                text: '상세 페이지를 끝까지 읽고 스펙을 비교한다',
                weights: { analyzer: 3, trustSeeker: 2, collector: 0, hunter: 1, loyalist: 0, minimalist: 1 }
            },
            {
                text: '베스트 리뷰와 포토 리뷰를 꼼꼼히 본다',
                weights: { analyzer: 1, trustSeeker: 3, collector: 0, hunter: 2, loyalist: 0, minimalist: 0 }
            },
            {
                text: '한정판이나 신상품을 먼저 확인한다',
                weights: { analyzer: 0, trustSeeker: 0, collector: 3, hunter: 0, loyalist: 2, minimalist: 0 }
            },
            {
                text: '정렬을 "낮은 가격순"으로 바꾼다',
                weights: { analyzer: 0, trustSeeker: 0, collector: 0, hunter: 3, loyalist: 0, minimalist: 2 }
            }
        ]
    },

    {
        id: 3,
        category: 'decision',
        text: '같은 기능의 제품이 여러 개 있을 때 선택 기준은?',
        options: [
            {
                text: '원재료와 제조 과정이 투명한 제품',
                weights: { analyzer: 3, trustSeeker: 1, collector: 0, hunter: 0, loyalist: 0, minimalist: 2 }
            },
            {
                text: '검증된 브랜드의 제품',
                weights: { analyzer: 0, trustSeeker: 3, collector: 0, hunter: 0, loyalist: 3, minimalist: 0 }
            },
            {
                text: '디자인이 독특하거나 한정판인 제품',
                weights: { analyzer: 0, trustSeeker: 0, collector: 3, hunter: 0, loyalist: 1, minimalist: 0 }
            },
            {
                text: '가격 대비 성능이 좋은 제품',
                weights: { analyzer: 1, trustSeeker: 0, collector: 0, hunter: 3, loyalist: 0, minimalist: 2 }
            }
        ]
    },

    {
        id: 4,
        category: 'decision',
        text: '식품을 구매할 때 가장 중요하게 생각하는 것은?',
        options: [
            {
                text: '첨가물 없는 깨끗한 성분',
                weights: { analyzer: 3, trustSeeker: 1, collector: 0, hunter: 0, loyalist: 0, minimalist: 2 }
            },
            {
                text: '믿을 수 있는 브랜드와 인증',
                weights: { analyzer: 1, trustSeeker: 3, collector: 0, hunter: 0, loyalist: 2, minimalist: 0 }
            },
            {
                text: '프리미엄 원료와 특별한 맛',
                weights: { analyzer: 0, trustSeeker: 0, collector: 3, hunter: 0, loyalist: 2, minimalist: 0 }
            },
            {
                text: '합리적인 가격',
                weights: { analyzer: 0, trustSeeker: 0, collector: 0, hunter: 3, loyalist: 0, minimalist: 3 }
            }
        ]
    },

    // ===== 브랜드 인식 (3문항) =====
    {
        id: 5,
        category: 'brand',
        text: '브랜드에 대한 당신의 생각은?',
        options: [
            {
                text: '브랜드보다 제품 자체의 품질이 중요하다',
                weights: { analyzer: 3, trustSeeker: 1, collector: 0, hunter: 2, loyalist: 0, minimalist: 2 }
            },
            {
                text: '검증된 브랜드는 믿을 수 있다',
                weights: { analyzer: 0, trustSeeker: 3, collector: 0, hunter: 0, loyalist: 3, minimalist: 0 }
            },
            {
                text: '브랜드의 스토리와 철학에 끌린다',
                weights: { analyzer: 0, trustSeeker: 1, collector: 3, hunter: 0, loyalist: 3, minimalist: 0 }
            },
            {
                text: '브랜드는 중요하지 않다',
                weights: { analyzer: 1, trustSeeker: 0, collector: 0, hunter: 3, loyalist: 0, minimalist: 3 }
            }
        ]
    },

    {
        id: 6,
        category: 'brand',
        text: '명품 브랜드에 대한 당신의 태도는?',
        options: [
            {
                text: '원가 대비 너무 비싸다고 생각한다',
                weights: { analyzer: 3, trustSeeker: 0, collector: 0, hunter: 3, loyalist: 0, minimalist: 2 }
            },
            {
                text: '품질이 보장되니 가치가 있다',
                weights: { analyzer: 0, trustSeeker: 3, collector: 1, hunter: 0, loyalist: 3, minimalist: 0 }
            },
            {
                text: '희소성과 소장 가치가 있다',
                weights: { analyzer: 0, trustSeeker: 0, collector: 3, hunter: 0, loyalist: 2, minimalist: 0 }
            },
            {
                text: '관심 없다',
                weights: { analyzer: 1, trustSeeker: 0, collector: 0, hunter: 2, loyalist: 0, minimalist: 3 }
            }
        ]
    },

    {
        id: 7,
        category: 'brand',
        text: '신생 브랜드의 제품을 구매할 때 당신은?',
        options: [
            {
                text: '원재료와 제조 정보를 철저히 확인한다',
                weights: { analyzer: 3, trustSeeker: 1, collector: 0, hunter: 0, loyalist: 0, minimalist: 1 }
            },
            {
                text: '리뷰가 충분히 쌓일 때까지 기다린다',
                weights: { analyzer: 0, trustSeeker: 3, collector: 0, hunter: 1, loyalist: 1, minimalist: 0 }
            },
            {
                text: '독특하면 먼저 시도해본다',
                weights: { analyzer: 0, trustSeeker: 0, collector: 3, hunter: 0, loyalist: 0, minimalist: 0 }
            },
            {
                text: '가격이 합리적이면 시도한다',
                weights: { analyzer: 1, trustSeeker: 0, collector: 0, hunter: 3, loyalist: 0, minimalist: 2 }
            }
        ]
    },

    // ===== 가격 민감도 (3문항) =====
    {
        id: 8,
        category: 'price',
        text: '10만 원짜리 제품을 살 때 당신의 생각은?',
        options: [
            {
                text: '10만 원 중 순수 제품 가치가 얼마인지 궁금하다',
                weights: { analyzer: 3, trustSeeker: 0, collector: 0, hunter: 2, loyalist: 0, minimalist: 1 }
            },
            {
                text: '브랜드가 믿을 만하면 가격은 합리적이다',
                weights: { analyzer: 0, trustSeeker: 3, collector: 0, hunter: 0, loyalist: 3, minimalist: 0 }
            },
            {
                text: '한정판이면 가격이 높아도 괜찮다',
                weights: { analyzer: 0, trustSeeker: 0, collector: 3, hunter: 0, loyalist: 1, minimalist: 0 }
            },
            {
                text: '같은 기능의 더 저렴한 제품을 찾는다',
                weights: { analyzer: 1, trustSeeker: 0, collector: 0, hunter: 3, loyalist: 0, minimalist: 3 }
            }
        ]
    },

    {
        id: 9,
        category: 'price',
        text: '할인 행사를 볼 때 당신의 반응은?',
        options: [
            {
                text: '원가를 속이는 건 아닌지 의심한다',
                weights: { analyzer: 3, trustSeeker: 1, collector: 0, hunter: 1, loyalist: 0, minimalist: 1 }
            },
            {
                text: '믿는 브랜드의 할인이면 기회다',
                weights: { analyzer: 0, trustSeeker: 2, collector: 0, hunter: 1, loyalist: 3, minimalist: 0 }
            },
            {
                text: '한정 수량이면 서둘러 구매한다',
                weights: { analyzer: 0, trustSeeker: 0, collector: 3, hunter: 2, loyalist: 1, minimalist: 0 }
            },
            {
                text: '쿠폰과 적립을 최대한 활용한다',
                weights: { analyzer: 0, trustSeeker: 0, collector: 0, hunter: 3, loyalist: 0, minimalist: 1 }
            }
        ]
    },

    {
        id: 10,
        category: 'price',
        text: '비싼 제품을 살 때 정당화하는 이유는?',
        options: [
            {
                text: '품질과 내구성이 검증되었다',
                weights: { analyzer: 2, trustSeeker: 3, collector: 0, hunter: 0, loyalist: 1, minimalist: 2 }
            },
            {
                text: '브랜드 가치와 경험을 산다',
                weights: { analyzer: 0, trustSeeker: 1, collector: 2, hunter: 0, loyalist: 3, minimalist: 0 }
            },
            {
                text: '희소성과 소장 가치가 있다',
                weights: { analyzer: 0, trustSeeker: 0, collector: 3, hunter: 0, loyalist: 1, minimalist: 0 }
            },
            {
                text: '장기적으로 보면 더 경제적이다',
                weights: { analyzer: 1, trustSeeker: 2, collector: 0, hunter: 2, loyalist: 0, minimalist: 3 }
            }
        ]
    },

    // ===== 소비 후 행동 (2문항) =====
    {
        id: 11,
        category: 'behavior',
        text: '제품을 구매한 후 당신의 행동은?',
        options: [
            {
                text: '성분과 품질을 분석해서 커뮤니티에 공유한다',
                weights: { analyzer: 3, trustSeeker: 1, collector: 0, hunter: 1, loyalist: 0, minimalist: 0 }
            },
            {
                text: '만족도를 리뷰로 남긴다',
                weights: { analyzer: 1, trustSeeker: 3, collector: 0, hunter: 2, loyalist: 1, minimalist: 0 }
            },
            {
                text: 'SNS에 인증샷을 올린다',
                weights: { analyzer: 0, trustSeeker: 0, collector: 3, hunter: 0, loyalist: 2, minimalist: 0 }
            },
            {
                text: '가격 대비 만족도를 계산한다',
                weights: { analyzer: 1, trustSeeker: 0, collector: 0, hunter: 3, loyalist: 0, minimalist: 2 }
            }
        ]
    },

    {
        id: 12,
        category: 'behavior',
        text: '마음에 드는 제품을 발견했을 때 당신은?',
        options: [
            {
                text: '다른 사람들에게 정보를 알려준다',
                weights: { analyzer: 3, trustSeeker: 2, collector: 0, hunter: 2, loyalist: 1, minimalist: 1 }
            },
            {
                text: '재구매하고 주변에 추천한다',
                weights: { analyzer: 0, trustSeeker: 3, collector: 0, hunter: 0, loyalist: 3, minimalist: 0 }
            },
            {
                text: '컬렉션에 추가하고 자랑한다',
                weights: { analyzer: 0, trustSeeker: 0, collector: 3, hunter: 0, loyalist: 2, minimalist: 0 }
            },
            {
                text: '더 저렴하게 살 방법을 찾는다',
                weights: { analyzer: 0, trustSeeker: 0, collector: 0, hunter: 3, loyalist: 0, minimalist: 2 }
            }
        ]
    }
];

/**
 * 전체 질문 개수
 */
export const TOTAL_QUESTIONS = quizQuestions.length;

/**
 * 카테고리별 질문 개수
 */
export const QUESTIONS_BY_CATEGORY = {
    decision: 4,
    brand: 3,
    price: 3,
    behavior: 2
};
