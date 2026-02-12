import { QuizAnswer, PersonalityScores, PersonalityTypeId, QuizResult } from '../types/quiz';
import { quizQuestions } from '@data/questions';

/**
 * 사용자의 답변을 기반으로 성향 점수 계산
 * @param answers 사용자의 답변 배열
 * @returns 각 성향 유형별 점수
 */
export const calculatePersonalityScores = (answers: QuizAnswer[]): PersonalityScores => {
    // 초기 점수 (모두 0)
    const scores: PersonalityScores = {
        analyzer: 0,
        trustSeeker: 0,
        collector: 0,
        hunter: 0,
        loyalist: 0,
        minimalist: 0
    };

    // 각 답변에 대해 가중치 합산
    answers.forEach(answer => {
        const question = quizQuestions.find(q => q.id === answer.questionId);
        if (!question) return;

        const selectedOption = question.options[answer.selectedOptionIndex];
        if (!selectedOption) return;

        // 각 성향 유형에 가중치 추가
        scores.analyzer += selectedOption.weights.analyzer;
        scores.trustSeeker += selectedOption.weights.trustSeeker;
        scores.collector += selectedOption.weights.collector;
        scores.hunter += selectedOption.weights.hunter;
        scores.loyalist += selectedOption.weights.loyalist;
        scores.minimalist += selectedOption.weights.minimalist;
    });

    return scores;
};

/**
 * 점수를 기반으로 주 성향과 부 성향 결정
 * @param scores 각 성향 유형별 점수
 * @returns [주 성향, 부 성향]
 */
export const determinePersonalityTypes = (
    scores: PersonalityScores
): [PersonalityTypeId, PersonalityTypeId] => {
    // 점수를 배열로 변환하고 내림차순 정렬
    const sortedScores = (Object.entries(scores) as [PersonalityTypeId, number][])
        .sort((a, b) => b[1] - a[1]);

    // 1순위와 2순위 성향 반환
    const primaryType = sortedScores[0][0];
    const secondaryType = sortedScores[1][0];

    return [primaryType, secondaryType];
};

/**
 * 답변을 기반으로 최종 결과 생성
 * @param answers 사용자의 답변 배열
 * @returns 퀴즈 결과
 */
export const calculateQuizResult = (answers: QuizAnswer[]): QuizResult => {
    const scores = calculatePersonalityScores(answers);
    const [primaryType, secondaryType] = determinePersonalityTypes(scores);

    return {
        primaryType,
        secondaryType,
        scores,
        timestamp: Date.now()
    };
};

/**
 * 점수를 백분율로 변환 (차트 표시용)
 * @param scores 각 성향 유형별 점수
 * @returns 백분율로 변환된 점수 (0-100)
 */
export const normalizeScores = (scores: PersonalityScores): PersonalityScores => {
    // 전체 점수 합계
    const total = Object.values(scores).reduce((sum, score) => sum + score, 0);

    if (total === 0) {
        return scores;
    }

    // 각 점수를 백분율로 변환
    return {
        analyzer: Math.round((scores.analyzer / total) * 100),
        trustSeeker: Math.round((scores.trustSeeker / total) * 100),
        collector: Math.round((scores.collector / total) * 100),
        hunter: Math.round((scores.hunter / total) * 100),
        loyalist: Math.round((scores.loyalist / total) * 100),
        minimalist: Math.round((scores.minimalist / total) * 100)
    };
};
