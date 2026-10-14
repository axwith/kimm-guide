---
course_clip_ref: "시작하기 1"
result_path: "C:\\work\\kimm\\"
next_clip_id: "part-0-02-materials"
---

# 시작 전 준비

> 실습 폴더를 받아 `C:\work\kimm` 에 두고, 앱을 열고, 백업을 만들어 둡니다.
> 실습 폴더 저장소는 **10월 15일 12:30부터** 공개됩니다.

---

## 이 페이지에서 할 것

| 순서 | 할 일 | 확인할 것 |
|---|---|---|
| 1 | 실습 폴더 받기 | `C:\work\kimm` 안에 `first`, `research-planner`, `equipment` 가 있음 |
| 2 | 파이썬 가상환경과 패키지 | 확인 명령 세 줄이 `ok`, `selftest 통과`, `200` |
| 3 | 앱 열기 | Code 탭, 환경 Local, 권한 모드 Manual |
| 4 | 백업 | `C:\work\kimm_backup` 이 있음 |

---

## 1. 실습 폴더 받기

실습 폴더는 GitHub 저장소 [github.com/axwith/kimm-lab](https://github.com/axwith/kimm-lab) 에 있습니다. 둘 중 하나로 받습니다.

**git이 있는 PC** — PowerShell에서:

```powershell
git clone https://github.com/axwith/kimm-lab C:\work\kimm
```

**git이 없는 PC** — 저장소 화면에서 초록색 **Code → Download ZIP** 을 누릅니다. 압축을 풀면 `kimm-lab-main` 폴더가 나옵니다. 이 폴더 이름을 `kimm` 으로 바꿔 `C:\work\` 아래에 둡니다. 한글이 들어간 경로(`바탕 화면`, `문서`)에는 두지 않습니다.

확인:

```powershell
Test-Path C:\work\kimm\first
Test-Path C:\work\kimm\research-planner\CLAUDE.md
```

둘 다 `True` 가 나오면 됩니다.

---

## 2. 파이썬 가상환경과 패키지

Python 3.12가 필요합니다. `py -3.12 --version` 이 안 되면 python.org에서 Python 3.12 Windows 설치 파일(64-bit)을 받아 설치합니다. 설치 첫 화면에서 **Add python.exe to PATH** 를 꼭 체크합니다.

```powershell
cd C:\work\kimm
py -3.12 -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m pip install -r equipment\requirements.txt
```

가상환경은 활성화하지 않고 `.\.venv\Scripts\python.exe` 를 직접 부릅니다. 실행 정책 오류를 피할 수 있습니다.

확인:

```powershell
.\.venv\Scripts\python.exe -c "import numpy, matplotlib; print('ok')"
.\.venv\Scripts\python.exe research-planner\60-scripts\check_planner.py --selftest
.\.venv\Scripts\python.exe -c "import urllib.request; print(urllib.request.urlopen('https://api.openalex.org/works?filter=publication_year:2025&per-page=1', timeout=20).status)"
```

`ok`, `selftest 통과`, `200` 이 나오면 됩니다. 셋째 줄이 인증서 오류(`CERTIFICATE_VERIFY_FAILED`)로 실패하면 사내 프록시나 파이썬 인증서 문제입니다. 손을 들어 주세요. 실습 1은 예비 자료로 진행할 수 있습니다.

`python --version` 도 되는지 봅니다. 실습 폴더의 기록 훅은 `python` 명령으로 실행됩니다.

---

## 3. 앱 열기

1. Claude 데스크톱 앱을 열고 기관 계정으로 로그인합니다.
2. 위쪽 가운데 **Code** 탭을 누르고 환경은 **Local** 을 고릅니다. 업그레이드 안내가 뜨면 손을 듭니다.
3. 입력창 아래에서 모델은 중간 등급(예: Sonnet), 권한 모드는 **Manual**(매번 묻기)로 맞춥니다.

기본 모델이 최상위 모델이면 오후 동안 사용 한도에 닿을 수 있습니다. 막힐 때만 올립니다.

---

## 4. 백업

```powershell
Copy-Item C:\work\kimm C:\work\kimm_backup -Recurse
```

앱의 되돌리기 기능은 명령 실행으로 바뀐 파일을 복원하지 못합니다. 그래서 백업을 먼저 둡니다.

---

## 오늘 지킬 것

- 공개 자료와 가상 자료만 씁니다. 기관 내부 문서, 미공개 데이터·시험 결과, 장비 정보, 과제명, 개인정보는 넣지 않습니다.
- 넣은 파일과 요청문은 처리를 위해 Anthropic 서버로 갑니다.
- 승인 창이 뜨면 바로 누르지 않습니다. 어떤 도구가, 어디에, 무엇을 하려는지 읽고 고릅니다.
- 숫자가 나오면 직접 확인할 곳(원문 링크, API 주소)을 함께 받습니다.

---

## 다음

[강의 자료와 링크 →](#part-0-02-materials)
