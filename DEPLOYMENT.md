# Vercel 배포 가이드

## 🚀 무료 웹 주소로 배포하기

### 방법 1: Vercel CLI (터미널 사용)

#### 1단계: Vercel CLI 설치
```bash
npm install -g vercel
```

#### 2단계: 로그인
```bash
vercel login
```
- 이메일 주소 입력
- 이메일로 받은 인증 링크 클릭

#### 3단계: 배포
```bash
# 프로젝트 디렉토리에서 실행
vercel
```

첫 배포 시 질문에 답변:
- **Set up and deploy?** → Yes
- **Which scope?** → 본인 계정 선택
- **Link to existing project?** → No
- **Project name?** → price-decoder (또는 원하는 이름)
- **In which directory is your code located?** → ./
- **Override settings?** → No

완료되면 **무료 URL**이 생성됩니다!
예: `https://price-decoder.vercel.app`

---

### 방법 2: Vercel 웹사이트 (더 쉬움!)

#### 1단계: GitHub에 코드 업로드
```bash
# Git 초기화 (아직 안 했다면)
git init
git add .
git commit -m "Initial commit"

# GitHub 저장소 생성 후
git remote add origin https://github.com/your-username/price-decoder.git
git push -u origin main
```

#### 2단계: Vercel 웹사이트
1. https://vercel.com 접속
2. **Sign Up** (GitHub 계정으로 가입)
3. **New Project** 클릭
4. GitHub 저장소 선택
5. **Deploy** 클릭

→ 자동으로 빌드 & 배포!

---

### 방법 3: 드래그 앤 드롭 (가장 간단!)

#### 1단계: 빌드 생성
```bash
npm run build
```
→ `dist` 폴더 생성됨

#### 2단계: Vercel 웹사이트
1. https://vercel.com 접속 & 로그인
2. 프로젝트 대시보드에서 **Add New** → **Project**
3. **dist 폴더**를 드래그 앤 드롭

→ 즉시 배포 완료!

---

## 🎯 추천 방법

**초보자**: 방법 3 (드래그 앤 드롭)
**개발자**: 방법 1 (Vercel CLI) - 자동 배포 가능

---

## 📝 배포 후 확인사항

✅ 무료 URL 받기: `https://[프로젝트명].vercel.app`
✅ HTTPS 자동 적용
✅ 전 세계 어디서나 접속 가능
✅ 코드 수정 시 자동 재배포 (GitHub 연동 시)

---

## 🔧 커스텀 도메인 (선택사항)

무료 도메인이 마음에 안 들면:
1. 도메인 구매 (가비아, Namecheap 등)
2. Vercel 프로젝트 설정에서 도메인 연결
3. DNS 설정 (Vercel이 안내해줌)

예: `price-decoder.com`
